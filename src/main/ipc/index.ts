// src/main/ipc/index.ts
import { registerAuthHandlers } from './auth'

export function registerIpcHandlers() {
  registerAuthHandlers()
  // future: registerOtherHandlers()
}
