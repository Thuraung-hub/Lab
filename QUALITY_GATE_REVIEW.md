# Quality Gate Review

This review records the findings addressed after the first working version.
The verification results are in `evidence/local-test-results.txt`.

## Finding 1 — Reliability / Accuracy

### What I found

The API could accept a booking whose start time was not before its end time.

### How I fixed it

Added timestamp parsing and validation to both POST and PATCH.

### Evidence

The invalid-time request returned HTTP 400 locally.

## Finding 2 — Business-rule correctness

### What I found

An equipment item could be booked for an overlapping time range.

### How I fixed it

Added a parameterized overlap query to POST and PATCH. PATCH excludes the
booking currently being updated.

### Evidence

Overlapping POST and PATCH requests returned HTTP 409 locally.

## Finding 3 — Security / You Own It

### What I found

Request values must not be inserted into SQL by string concatenation.

### How I fixed it

All request values and route IDs are passed through D1 `.bind(...)` parameters.

### Evidence

The CRUD requests passed locally, and the queries in `src/index.ts` use
`.bind(...)` for request and route values.
