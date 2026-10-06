# Learning Assistant API Assignment #2 Report Draft

## Student Deliverables
- Production API URL: https://learning-assistant-api.my-project-6731503091.workers.dev
- Evidence file: production-evidence-live.txt

## 1) Objective and Scope
This assignment implements a scoped CRUD API for the `knowledge_source` resource from the Learning Assistant PRD. The delivered scope includes create, list, read, update, and archive operations for one resource, as required by Assignment #2.

## 2) Tech Stack
- Runtime: Cloudflare Workers
- Framework: Hono
- Language: TypeScript
- Database: Cloudflare D1 (SQLite)

## 3) API Endpoints Implemented
- `POST /api/sources` (create)
- `GET /api/sources?course_id=<id>` (list)
- `GET /api/sources/:id` (read one)
- `PATCH /api/sources/:id` (update)
- `DELETE /api/sources/:id` (archive / soft delete)

## 4) Setup and Deployment Summary
1. Installed dependencies with `npm install`.
2. Authenticated Wrangler using `npx wrangler login`.
3. Created D1 database `learning-assistant-db` and configured `database_id` in `wrangler.jsonc`.
4. Applied local migration (`npm run db:migrate:local`).
5. Verified all endpoints locally.
6. Applied remote migration (`npm run db:migrate:remote`).
7. Deployed Worker (`npm run deploy`).

## 5) Verification Results
### Local Verification (localhost)
Status sequence from CRUD test:
- POST: 201
- LIST: 200
- READ: 200
- UPDATE: 200
- DELETE (archive): 204

### Production Verification (workers.dev)
Live URL tested: `https://learning-assistant-api.my-project-6731503091.workers.dev`

Status sequence from CRUD test:
- POST: 201
- LIST: 200
- READ: 200
- UPDATE: 200
- DELETE (archive): 204

Created ID used during production test:
- `5a8fd6ee-980a-40cb-881d-40f479508a9b`

Detailed response evidence is saved in `production-evidence-live.txt`.

## 6) Design Decisions (from README Design Notes)
1. Soft delete is used instead of hard delete.
- `DELETE` sets `archived_at` rather than removing data.
- This preserves history and supports reversibility (matches BR-11).

2. Duplicate content is prevented.
- A unique constraint prevents duplicate active rows for `(course_id, content_hash)`.
- Duplicate active content returns HTTP 409 (matches DI-01).

3. SQL injection protection is enforced.
- Queries use parameter binding (`.bind()`) and not string concatenation.

4. Assignment-focused scope reduction.
- Full PRD includes retrieval/citations/events, but this assignment intentionally implements the `knowledge_source` CRUD lifecycle only.

## 7) Conclusion
The API was implemented, migrated locally and remotely, deployed successfully to Cloudflare Workers, and validated in production with expected CRUD status codes. The deployed URL and verification evidence are ready for submission.
