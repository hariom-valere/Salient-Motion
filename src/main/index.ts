import { app, BrowserWindow } from 'electron'
import { registerIpcHandlers } from './ipc'
import { createMainWindow } from './windows'

let mainWindow: BrowserWindow | null = null

app.whenReady().then(() => {
  mainWindow = createMainWindow()
  registerIpcHandlers()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      mainWindow = createMainWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
