# AI Log

## Prompt 1

I asked AI to convert the assessment requirements into an implementation
checklist.

### What I used

The required endpoints, status codes, documentation files, and test cases.

### What I verified

I compared the checklist with `exam_brief_en.md` and `rubric_en.md`.

## Prompt 2

I asked AI to explain the overlap condition for equipment bookings.

### What I used

The condition `existing.startAt < new.endAt` and
`existing.endAt > new.startAt`.

### What I verified

I tested overlapping ranges, boundary-touching ranges, and PATCH conflict
detection with curl. Overlaps returned 409 and boundary-touching bookings were
accepted.

## Prompt 3

I asked AI to help adapt the existing Hono/D1 project structure to the
Campus Equipment Booking API.

### What I used

The D1 migration pattern, Hono route structure, and parameter-binding pattern.

### What I verified

The local migration applied successfully, TypeScript type-checking passed, and
the required HTTP test cases passed locally. The results are recorded in
`evidence/local-test-results.txt`.
