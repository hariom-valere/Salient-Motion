## Preload API (`window.api`)

Exposed via Electron `contextBridge` from `src/preload/index.ts`.

### Namespaces
- **auth**
  - `login(credentials, options)` → Promise<{ success: boolean; token?: string; offline?: boolean; message?: string }>
    - `credentials`: `{ email: string; password: string }`
    - `options`: `{ isOnlineMode: boolean }`
    - Online mode: Accepts `motiondev@gmail.com` / `Pwd123!@#`, generates and stores a token.
    - Offline mode: Validates against cached user in SQLite.
  - `forgotPassword(email)` → Promise<{ success: boolean; message: string }>
  - `resetPassword(email)` → Promise<{ success: boolean; message: string }>
  - `logout()` → Promise<{ success: boolean }>
- **device**
  - `connect(deviceId: string)` → Promise<any>
  - `disconnect()` → Promise<any>

### Usage examples
```ts
// Login from a renderer component
const ok = await window.api.auth.login(
  { email, password },
  { isOnlineMode: navigator.onLine }
)
if (ok.success && ok.token) {
  // Persisted automatically by AuthContext; you can also act here
}
```

```ts
// Request password reset
const res = await window.api.auth.resetPassword('user@example.com')
console.log(res.message)
```

```ts
// Device operations
await window.api.device.connect('device-123')
await window.api.device.disconnect()
```
