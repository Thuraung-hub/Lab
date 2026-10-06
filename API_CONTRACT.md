# API Contract

Base URL: `http://localhost:8787/api`

## Equipment

### `GET /equipment`

Returns at least two equipment records:

```json
[
  { "id": "eq-1", "name": "Projector A", "location": "Building 1" },
  { "id": "eq-2", "name": "Camera A", "location": "Building 2" }
]
```

Status: `200`.

## Bookings

Booking JSON:

```json
{
  "id": "generated-id",
  "equipmentId": "eq-1",
  "borrowerName": "Somchai Jaidee",
  "startAt": "2026-10-20T09:00:00.000Z",
  "endAt": "2026-10-20T11:00:00.000Z",
  "purpose": "Class presentation"
}
```

| Method | Path | Success | Errors |
| --- | --- | --- | --- |
| GET | `/bookings` | 200 and an array | - |
| GET | `/bookings/:id` | 200 and one booking | 404 |
| POST | `/bookings` | 201 and created booking | 400, 404, 409 |
| PATCH | `/bookings/:id` | 200 and updated booking | 400, 404, 409 |
| DELETE | `/bookings/:id` | 204 with no body | 404 |

All errors use:

```json
{ "error": "A message understandable to a user or developer" }
```

The overlap rule is:

```text
existing.startAt < new.endAt
AND existing.endAt > new.startAt
```

Therefore, a booking ending exactly when another starts is allowed.
