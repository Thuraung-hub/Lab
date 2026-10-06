# Campus Equipment Booking API Report

## Student Deliverables
- Production API URL: https://learning-assistant-api.my-project-6731503091.workers.dev
- Evidence file: production-evidence-live.txt

## 1) Objective and Scope
This project implements the Campus Equipment Booking API. It provides CRUD operations for bookings and prevents overlapping bookings for the same equipment.

## 2) Tech Stack
- Runtime: Cloudflare Workers
- Framework: Hono
- Language: TypeScript
- Database: Cloudflare D1 (SQLite)

## 3) API Endpoints Implemented
- `GET /api/equipment`
- `GET /api/bookings`
- `GET /api/bookings/:id`
- `POST /api/bookings`
- `PATCH /api/bookings/:id`
- `DELETE /api/bookings/:id`

## 4) Setup and Deployment Summary
1. Installed dependencies with `npm install`.
2. Authenticated Wrangler using `npx wrangler login`.
3. Created D1 database `learning-assistant-db` and configured `database_id` in `wrangler.jsonc`.
4. Applied local migrations (`npm run db:migrate:local`).
5. Verified CRUD and validation endpoints locally.
6. Applied remote migrations (`npm run db:migrate:remote`).
7. Deployed Worker (`npm run deploy`).

## 5) Verification Results
### Local Verification (localhost)
Status sequence from CRUD and validation tests:
- POST: 201
- LIST: 200
- READ: 200
- UPDATE: 200
- DELETE: 204
- Invalid time: 400
- Unknown equipment: 404
- Conflict: 409

### Production Verification (workers.dev)
Live URL tested: `https://learning-assistant-api.my-project-6731503091.workers.dev`

Status sequence from live CRUD and validation tests:
- POST: 201
- LIST: 200
- READ: 200
- UPDATE: 200
- DELETE: 204
- Deleted READ: 404
- Missing field: 400
- Conflict: 409

Created ID used during production test:
- `8b6d4207-0306-4896-af49-49f877163725`

Detailed response evidence is saved in `production-evidence-live.txt`.

## 6) Design Decisions
1. Equipment and bookings use a one-to-many relationship.
- Each booking references an equipment record through `equipment_id`.

2. Overlap prevention uses half-open time intervals.
- A conflict exists when `existing.start < new.end` and `existing.end > new.start`.
- PATCH excludes the booking currently being updated.

3. SQL injection protection is enforced.
- Queries use parameter binding (`.bind()`) and not string concatenation.

4. Validation and error responses follow the contract.
- Missing or invalid data returns 400, missing resources return 404, and conflicts return 409.

## 7) Conclusion
The API was implemented, migrated locally and remotely, deployed successfully to Cloudflare Workers, and validated in production with expected CRUD and validation status codes. The deployed URL and verification evidence are ready for submission.
