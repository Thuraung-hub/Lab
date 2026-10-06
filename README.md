# Campus Equipment Booking API

Cloudflare Workers + Hono + TypeScript + D1 implementation of the midterm
Campus Equipment Booking API.

## Setup

```bash
npm install
npm run db:migrate:local
npm run dev
```

The local base URL is `http://localhost:8787/api`.

## Database

The D1 database contains an `equipment` table and a `bookings` table. Each
booking references one equipment record through `bookings.equipment_id`.
The migration seeds `eq-1` and `eq-2`. Booking times are stored as ISO
timestamps, and the API rejects overlapping bookings for the same equipment.

Schema relationship:

```text
equipment (1) ────────< bookings (many)

equipment
- id TEXT PRIMARY KEY
- name TEXT NOT NULL
- location TEXT NOT NULL

bookings
- id TEXT PRIMARY KEY
- equipment_id TEXT NOT NULL REFERENCES equipment(id)
- borrower_name TEXT NOT NULL
- start_at TEXT NOT NULL
- end_at TEXT NOT NULL
- purpose TEXT NOT NULL
```

## Endpoints

| Method | Path | Success |
| --- | --- | --- |
| GET | `/equipment` | 200 |
| GET | `/bookings` | 200 |
| GET | `/bookings/:id` | 200 |
| POST | `/bookings` | 201 |
| PATCH | `/bookings/:id` | 200 |
| DELETE | `/bookings/:id` | 204 |

## Business rules

1. A booking must include all five required fields.
2. `equipmentId` must refer to an existing equipment record.
3. `startAt` must be a valid time before `endAt`.
4. Bookings for the same equipment may touch at a boundary, but may not overlap.
5. Missing or invalid data returns `400`, missing resources return `404`, and
   time conflicts return `409`.
6. Every error response has the form `{ "error": "..." }`.
7. All request values are passed to D1 using parameter binding.

## Example requests

```bash
BASE_URL=http://localhost:8787/api

curl "$BASE_URL/equipment"

curl -X POST "$BASE_URL/bookings" \
  -H "Content-Type: application/json" \
  -d '{
    "equipmentId": "eq-1",
    "borrowerName": "Somchai Jaidee",
    "startAt": "2026-10-20T09:00:00.000Z",
    "endAt": "2026-10-20T11:00:00.000Z",
    "purpose": "Class presentation"
  }'
```

Use the returned booking ID for the read, update, and delete requests.

## Submission documents

- [API_CONTRACT.md](API_CONTRACT.md)
- [AI_LOG.md](AI_LOG.md)
- [QUALITY_GATE_REVIEW.md](QUALITY_GATE_REVIEW.md)
- [curl_test_guide.md](curl_test_guide.md)
- [evidence/local-test-results.txt](evidence/local-test-results.txt)
- `evidence/` for additional screenshots or captured HTTP responses
