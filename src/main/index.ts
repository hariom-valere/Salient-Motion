import { app, BrowserWindow } from 'electron'
import { registerIpcHandlers } from './ipc'
import { createMainWindow } from './windows'

app.whenReady().then(() => {
  createMainWindow()
  registerIpcHandlers()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
