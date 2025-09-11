// preload/index.ts
import { contextBridge, ipcRenderer } from 'electron'

const api = {
  auth: {
    login: (
      credentials: { email: string; password: string },
      options: { isOnlineMode: boolean }
    ) => ipcRenderer.invoke('login', credentials, options),
    resetPassword: (email: string) => ipcRenderer.invoke('resetPassword', { email }),
    forgotPassword: (email: string) => ipcRenderer.invoke('forgotPassword', { email }),
    logout: () => ipcRenderer.invoke('logout')
  },
  device: {
    connect: (deviceId: string) => ipcRenderer.invoke('connectDevice', { deviceId }),
    disconnect: () => ipcRenderer.invoke('disconnectDevice')
  }
}

// ✅ Expose to renderer in a safe way
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error('Error exposing api:', error)
  }
} else {
  // @ts-ignore
  window.api = api
}
