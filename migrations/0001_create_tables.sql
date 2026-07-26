-- Create animal_types table
CREATE TABLE IF NOT EXISTS animal_types (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Create reports table
CREATE TABLE IF NOT EXISTS reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  animal_type TEXT NOT NULL,
  animal_type_custom TEXT,
  condition TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT,
  contact TEXT,
  reporter_name TEXT,
  status TEXT DEFAULT 'active',
  created_at TEXT DEFAULT (datetime('now'))
);

-- Seed default animal types (Thai)
INSERT OR IGNORE INTO animal_types (name) VALUES ('หมา'), ('แมว'), ('อื่นๆ');
