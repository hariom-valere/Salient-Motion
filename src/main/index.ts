// main/index.ts
import Database from 'better-sqlite3'
import { app, BrowserWindow, ipcMain, shell } from 'electron'
import path from 'path'
import bcrypt from 'bcryptjs' // for password hashing

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

let mainWindow: BrowserWindow | null = null

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon: path.join(__dirname, 'icon.png') } : {}),
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow?.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (process.env.ELECTRON_RENDERER_URL) {
    mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL)
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// ================== IPC HANDLERS ==================

// Online login (API simulation)
ipcMain.handle('login', async (_event, { email, password }) => {
  const online = true // here you’d check API connectivity

  if (online) {
    // simulate server-side validation
    if (email === 'motiondev@gmail.com' && password === 'Pwd123!@#') {
      const token = 'FAKE_JWT_TOKEN'

      // Hash password before caching
      const passwordHash = await bcrypt.hash(password, 10)

      // Upsert user into SQLite
      db.prepare(
        `
        INSERT INTO users (email, passwordHash, token)
        VALUES (?, ?, ?)
        ON CONFLICT(email) DO UPDATE SET
          passwordHash=excluded.passwordHash,
          token=excluded.token,
          updatedAt=CURRENT_TIMESTAMP
      `
      ).run(email, passwordHash, token)

      return { success: true, token }
    }
    return { success: false, message: 'Invalid credentials' }
  } else {
    // Offline mode: validate against local cache
    const row = db.prepare('SELECT * FROM users WHERE email = ?').get(email)
    if (!row) return { success: false, message: 'User not found in offline cache' }

    const match = await bcrypt.compare(password, row.passwordHash)
    if (match) {
      return { success: true, token: row.token, offline: true }
    } else {
      return { success: false, message: 'Invalid credentials (offline)' }
    }
  }
})

// Forgot password
ipcMain.handle('forgotPassword', async (_event, { email }) => {
  console.log(`Forgot password for ${email}`)
  if (email !== 'motiondev@gmail.com') {
    return { success: false, message: 'Invalid email.' }
  }
  return { success: true, message: 'Temporary password sent to email.' }
})

// Reset password
ipcMain.handle('resetPassword', async (_event, { email }) => {
  console.log(`Reset password for ${email}`)
  return { success: true, message: 'Password reset link sent!' }
})

// Logout
ipcMain.handle('logout', async () => {
  console.log('User logged out')
  return { success: true }
})
