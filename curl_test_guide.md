# cURL Test Guide

Start the Worker first:

```bash
npm run db:migrate:local
npm run dev
```

In a second terminal:

```bash
BASE_URL=http://localhost:8787/api
```

## 1. List equipment

```bash
curl -i "$BASE_URL/equipment"
```

Expected: `200`, with at least `eq-1` and `eq-2`.

## 2. Create a booking

```bash
curl -i -X POST "$BASE_URL/bookings" \
  -H "Content-Type: application/json" \
  -d '{
    "equipmentId": "eq-1",
    "borrowerName": "Somchai Jaidee",
    "startAt": "2026-10-20T09:00:00.000Z",
    "endAt": "2026-10-20T11:00:00.000Z",
    "purpose": "Class presentation"
  }'
```

Expected: `201`. Save the returned `id` as `BOOKING_ID`.

## 3. Read and list bookings

```bash
curl -i "$BASE_URL/bookings"
curl -i "$BASE_URL/bookings/BOOKING_ID"
```

Expected: `200`.

## 4. Invalid time

```bash
curl -i -X POST "$BASE_URL/bookings" \
  -H "Content-Type: application/json" \
  -d '{
    "equipmentId": "eq-1",
    "borrowerName": "Invalid User",
    "startAt": "2026-10-20T12:00:00.000Z",
    "endAt": "2026-10-20T10:00:00.000Z",
    "purpose": "Invalid test"
  }'
```

Expected: `400`.

## 5. Missing equipment

Change `equipmentId` to `eq-999` in a valid request.

Expected: `404`.

## 6. Overlapping booking

Use `eq-1` and a time range such as `2026-10-20T10:00:00.000Z` to
`2026-10-20T12:00:00.000Z`.

Expected: `409`.

## 7. Update and delete

```bash
curl -i -X PATCH "$BASE_URL/bookings/BOOKING_ID" \
  -H "Content-Type: application/json" \
  -d '{
    "equipmentId": "eq-1",
    "borrowerName": "Somchai Updated",
    "startAt": "2026-10-20T13:00:00.000Z",
    "endAt": "2026-10-20T15:00:00.000Z",
    "purpose": "Updated presentation"
  }'

curl -i -X DELETE "$BASE_URL/bookings/BOOKING_ID"
```

Expected: PATCH `200`, DELETE `204`.
