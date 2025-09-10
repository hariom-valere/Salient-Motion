// preload/index.ts
import { contextBridge, ipcRenderer } from "electron";

const api = {
  auth: {
    login: (credentials: { email: string; password: string }) =>
      ipcRenderer.invoke("login", credentials),
    resetPassword: (email: string) =>
      ipcRenderer.invoke("resetPassword", { email }),
    forgetPassword: (email: string) =>
      ipcRenderer.invoke("forgetPassword", { email }),
    logout: () => ipcRenderer.invoke("logout"),
  },
  device: {
    connect: (deviceId: string) =>
      ipcRenderer.invoke("connectDevice", { deviceId }),
    disconnect: () => ipcRenderer.invoke("disconnectDevice"),
  },
};

// ✅ Expose to renderer in a safe way
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error("Error exposing api:", error);
  }
} else {
  // @ts-ignore
  window.api = api;
}
