// src/main/ipc/auth.ts
import bcrypt from 'bcryptjs'
import { ipcMain } from 'electron'
import { databases } from '../db'

const authDB = databases.auth

export const registerAuthHandlers = () => {
  ipcMain.handle('login', async (_event, { email, password }, { isOnlineMode }) => {
    if (isOnlineMode) {
      if (email === 'motiondev@gmail.com' && password === 'Pwd123!@#') {
        const token = 'FAKE_JWT_TOKEN'
        const passwordHash = await bcrypt.hash(password, 10)

        authDB
          .prepare(
            `
          INSERT INTO users (email, passwordHash, token)
          VALUES (?, ?, ?)
          ON CONFLICT(email) DO UPDATE SET
            passwordHash=excluded.passwordHash,
            token=excluded.token,
            updatedAt=CURRENT_TIMESTAMP
        `
          )
          .run(email, passwordHash, token)

        return { success: true, token }
      }
      return { success: false, message: 'Invalid credentials' }
    } else {
      const row = authDB.prepare('SELECT * FROM users WHERE email = ?').get(email)
      if (!row) return { success: false, message: 'User not found in offline cache' }

      const match = await bcrypt.compare(password, row.passwordHash)
      if (match) {
        return { success: true, token: row.token, offline: true }
      }
      return { success: false, message: 'Invalid credentials (offline)' }
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
}
