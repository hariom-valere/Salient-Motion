// src/main/db/auth.db.ts
import Database from 'better-sqlite3'
import { app } from 'electron'
import path from 'path'

export const initAuthDB = () => {
  const dbPath = path.join(app.getPath('userData'), 'auth.db')
  const db = new Database(dbPath)

  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      passwordHash TEXT,
      token TEXT,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `
  ).run()

  return db
}
