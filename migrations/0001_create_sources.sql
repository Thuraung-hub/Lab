-- Simplified from PRD §8.1 knowledge_source entity
-- Scoped down for Assignment #2 (single-resource CRUD demo)

CREATE TABLE IF NOT EXISTS knowledge_source (
  id            TEXT PRIMARY KEY,
  course_id     TEXT NOT NULL,
  title         TEXT NOT NULL,
  kind          TEXT NOT NULL CHECK (kind IN ('file', 'link', 'text')),
  source_url    TEXT,
  content_hash  TEXT NOT NULL,
  visibility    TEXT NOT NULL DEFAULT 'course' CHECK (visibility IN ('course', 'instructor_only')),
  status        TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'indexed', 'failed')),
  failure_reason TEXT,
  created_at    TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at    TEXT NOT NULL DEFAULT (datetime('now')),
  archived_at   TEXT
);

-- DI-01: no two active sources with identical content in one course
CREATE UNIQUE INDEX IF NOT EXISTS idx_source_unique_content
  ON knowledge_source (course_id, content_hash)
  WHERE archived_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_source_course
  ON knowledge_source (course_id);
