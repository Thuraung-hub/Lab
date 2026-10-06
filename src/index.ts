import { Hono } from 'hono'
import type { Context } from 'hono'

type Bindings = {
  DB: D1Database
}

type Equipment = {
  id: string
  name: string
  location: string
}

type BookingRow = {
  id: string
  equipment_id: string
  borrower_name: string
  start_at: string
  end_at: string
  purpose: string
}

type Booking = {
  id: string
  equipmentId: string
  borrowerName: string
  startAt: string
  endAt: string
  purpose: string
}

type BookingInput = Omit<Booking, 'id'>

const app = new Hono<{ Bindings: Bindings }>()

function toBooking(row: BookingRow): Booking {
  return {
    id: row.id,
    equipmentId: row.equipment_id,
    borrowerName: row.borrower_name,
    startAt: row.start_at,
    endAt: row.end_at,
    purpose: row.purpose,
  }
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function parseBookingInput(body: unknown): BookingInput | null {
  if (!body || typeof body !== 'object') {
    return null
  }

  const input = body as Record<string, unknown>
  const fields = ['equipmentId', 'borrowerName', 'startAt', 'endAt', 'purpose'] as const
  if (!fields.every((field) => isNonEmptyString(input[field]))) {
    return null
  }

  const equipmentId = input.equipmentId
  const borrowerName = input.borrowerName
  const startAt = input.startAt
  const endAt = input.endAt
  const purpose = input.purpose

  if (
    !isNonEmptyString(equipmentId) ||
    !isNonEmptyString(borrowerName) ||
    !isNonEmptyString(startAt) ||
    !isNonEmptyString(endAt) ||
    !isNonEmptyString(purpose)
  ) {
    return null
  }

  return {
    equipmentId: equipmentId.trim(),
    borrowerName: borrowerName.trim(),
    startAt: startAt.trim(),
    endAt: endAt.trim(),
    purpose: purpose.trim(),
  }
}

function hasValidTimeRange(input: BookingInput): boolean {
  const start = Date.parse(input.startAt)
  const end = Date.parse(input.endAt)
  return Number.isFinite(start) && Number.isFinite(end) && start < end
}

async function readBookingInput(c: Context<{ Bindings: Bindings }>): Promise<BookingInput | null> {
  const body = await c.req.json().catch(() => null)
  return parseBookingInput(body)
}

async function findBooking(c: Context<{ Bindings: Bindings }>, id: string): Promise<BookingRow | null> {
  return c.env.DB.prepare(
    `SELECT id, equipment_id, borrower_name, start_at, end_at, purpose
     FROM bookings
     WHERE id = ?`
  )
    .bind(id)
    .first<BookingRow>()
}

async function equipmentExists(db: D1Database, equipmentId: string): Promise<boolean> {
  const equipment = await db.prepare('SELECT id FROM equipment WHERE id = ?').bind(equipmentId).first()
  return equipment !== null
}

async function hasConflict(
  db: D1Database,
  input: BookingInput,
  excludedId?: string
): Promise<boolean> {
  const query = excludedId
    ? db
        .prepare(
          `SELECT id
           FROM bookings
           WHERE equipment_id = ?
             AND id != ?
             AND start_at < ?
             AND end_at > ?
           LIMIT 1`
        )
        .bind(input.equipmentId, excludedId, input.endAt, input.startAt)
    : db
        .prepare(
          `SELECT id
           FROM bookings
           WHERE equipment_id = ?
             AND start_at < ?
             AND end_at > ?
           LIMIT 1`
        )
        .bind(input.equipmentId, input.endAt, input.startAt)

  return (await query.first()) !== null
}

app.get('/', (c) => c.json({ service: 'campus-equipment-booking-api', status: 'ok' }))

app.get('/api/equipment', async (c) => {
  const { results } = await c.env.DB.prepare(
    'SELECT id, name, location FROM equipment ORDER BY id'
  ).all<Equipment>()
  return c.json(results, 200)
})

app.get('/api/bookings', async (c) => {
  const { results } = await c.env.DB.prepare(
    `SELECT id, equipment_id, borrower_name, start_at, end_at, purpose
     FROM bookings
     ORDER BY start_at, id`
  ).all<BookingRow>()
  return c.json(results.map(toBooking), 200)
})

app.get('/api/bookings/:id', async (c) => {
  const booking = await findBooking(c, c.req.param('id'))
  if (!booking) {
    return c.json({ error: 'Booking not found' }, 404)
  }
  return c.json(toBooking(booking), 200)
})

app.post('/api/bookings', async (c) => {
  const input = await readBookingInput(c)
  if (!input) {
    return c.json({ error: 'Missing required field' }, 400)
  }
  if (!hasValidTimeRange(input)) {
    return c.json({ error: 'startAt must be before endAt' }, 400)
  }
  if (!(await equipmentExists(c.env.DB, input.equipmentId))) {
    return c.json({ error: 'Equipment not found' }, 404)
  }
  if (await hasConflict(c.env.DB, input)) {
    return c.json({ error: 'Equipment is already booked for this time' }, 409)
  }

  const id = crypto.randomUUID()
  await c.env.DB.prepare(
    `INSERT INTO bookings
       (id, equipment_id, borrower_name, start_at, end_at, purpose)
     VALUES (?, ?, ?, ?, ?, ?)`
  )
    .bind(id, input.equipmentId, input.borrowerName, input.startAt, input.endAt, input.purpose)
    .run()

  const created = await findBooking(c, id)
  if (!created) {
    return c.json({ error: 'Booking could not be created' }, 500)
  }
  return c.json(toBooking(created), 201)
})

app.patch('/api/bookings/:id', async (c) => {
  const id = c.req.param('id')
  if (!(await findBooking(c, id))) {
    return c.json({ error: 'Booking not found' }, 404)
  }

  const input = await readBookingInput(c)
  if (!input) {
    return c.json({ error: 'Missing required field' }, 400)
  }
  if (!hasValidTimeRange(input)) {
    return c.json({ error: 'startAt must be before endAt' }, 400)
  }
  if (!(await equipmentExists(c.env.DB, input.equipmentId))) {
    return c.json({ error: 'Equipment not found' }, 404)
  }
  if (await hasConflict(c.env.DB, input, id)) {
    return c.json({ error: 'Equipment is already booked for this time' }, 409)
  }

  await c.env.DB.prepare(
    `UPDATE bookings
     SET equipment_id = ?, borrower_name = ?, start_at = ?, end_at = ?, purpose = ?
     WHERE id = ?`
  )
    .bind(input.equipmentId, input.borrowerName, input.startAt, input.endAt, input.purpose, id)
    .run()

  const updated = await findBooking(c, id)
  if (!updated) {
    return c.json({ error: 'Booking could not be updated' }, 500)
  }
  return c.json(toBooking(updated), 200)
})

app.delete('/api/bookings/:id', async (c) => {
  const id = c.req.param('id')
  if (!(await findBooking(c, id))) {
    return c.json({ error: 'Booking not found' }, 404)
  }

  await c.env.DB.prepare('DELETE FROM bookings WHERE id = ?').bind(id).run()
  return c.body(null, 204)
})

export default app
