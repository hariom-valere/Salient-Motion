# API Reference

## Electron Main Process

### createMainWindow()
Creates and returns the main `BrowserWindow` and loads the renderer (URL in dev, file in prod).

Example:
```ts
import { createMainWindow } from 'src/main/windows'
const win = createMainWindow()
```

### registerIpcHandlers()
Registers all IPC handlers for the app.

Example:
```ts
import { registerIpcHandlers } from 'src/main/ipc'
registerIpcHandlers()
```

### Auth IPC Handlers
Defined in `src/main/ipc/auth.ts`.

- `login`
  - Request: `{ email: string, password: string }`, `{ isOnlineMode: boolean }`
  - Response (online success): `{ success: true, token: string }`
  - Response (online failure): `{ success: false, message: string }`
  - Response (offline success): `{ success: true, token: string, offline: true }`
  - Notes: In online mode, a fake token is generated on correct credentials and saved to SQLite (`better-sqlite3`). In offline, compares bcrypt hash from local DB.

- `forgotPassword`
  - Request: `{ email: string }`
  - Response: `{ success: boolean, message: string }`

- `resetPassword`
  - Request: `{ email: string }`
  - Response: `{ success: boolean, message: string }`

- `logout`
  - Request: `void`
  - Response: `{ success: true }`

## Database (Main)

- `initAuthDB()` in `src/main/db/authDb.ts`
  - Creates `users` table in app userData path (`auth.db`).
- `databases` in `src/main/db/index.ts`
  - `{ auth: Database }` initialized via `initAuthDB()`.

## Preload API (`window.api`)
Defined in `src/preload/index.ts` and exposed via `contextBridge`.

```ts
window.api.auth.login(
  credentials: { email: string; password: string },
  options: { isOnlineMode: boolean }
): Promise<{ success: boolean; token?: string; message?: string; offline?: boolean }>

window.api.auth.resetPassword(email: string): Promise<{ success: boolean; message: string }>
window.api.auth.forgotPassword(email: string): Promise<{ success: boolean; message: string }>
window.api.auth.logout(): Promise<{ success: true }>

// Note: handlers for these are not implemented in main yet
window.api.device.connect(deviceId: string): Promise<any>
window.api.device.disconnect(): Promise<any>
```

Usage example:
```ts
const res = await window.api.auth.login({ email, password }, { isOnlineMode: true })
if (res.success) {
  console.log(res.token)
}
```

## Shared Constants
Defined in `src/shared/constants/index.ts`.

```ts
export const EMAIL: string
export const PASSWORD: string
```

## Renderer Context and Hooks

### `AuthProvider` and `useAuth()`
File: `src/renderer/src/context/AuthContext.tsx`

- `AuthProvider`: Wraps app and provides auth state (`token`).
- `useAuth()`: Access `{ token, login(email, password), logout() }`.

Example:
```tsx
import { useAuth } from '@renderer/context/AuthContext'

const Example = () => {
  const { token, login, logout } = useAuth()
  // ...
}
```

### `useOnlineStatus()`
File: `src/renderer/src/hooks/useOnlineStatus.ts`

- Returns `boolean` reflecting `navigator.onLine` and updates on online/offline events.

Example:
```tsx
const isOnline = useOnlineStatus()
```

## UI Components (default exports)

- `Button(props)` — Styled button supporting `variant`, `outlined`, `loading`, `icon`, `iconPosition`.
- `Input(props)` — Wrapper around Antd Input/Password with custom icons.
- `PasswordInput(props)` — Password input with show/hide toggle.
- `LogoutModal({ isOpen, onClose, onConfirm, title, message })`
- `SuccessModal({ isOpen, onClose, title, message, buttonText, buttonLink })`
- `ChangePasswordModal({ isOpen, onClose })`
- `UpdateAccountModal({ isOpen, onClose, onConfirm, email, organization })`
- `ProtectedRoute` — Guards routes if no `token`.
- `AuthRedirect` — Redirects to `/connection` when authenticated, otherwise `/login`.
- `AppLayout` — Layout with `Sidebar` and `Outlet`.
- `Sidebar` — Navigation + logout modal.

Basic usage example (Button + Input):
```tsx
<Form onFinish={handleSubmit}>
  <Form.Item name="email" rules={[{ required: true }, { type: 'email' }]}>
    <Input placeholder="Email" />
  </Form.Item>
  <Form.Item name="password" rules={[{ required: true }]}>
    <Input type="password" placeholder="Password" />
  </Form.Item>
  <Button type="submit">Login</Button>
</Form>
```

## Routing

- `router` in `src/renderer/src/routes/index.tsx` defines protected routes under `AppLayout` and auth routes (`/login`, `/forgot-password`, `/confirm-password`).

## Notes and Gaps

- `window.api.device.connect/disconnect` are exposed but do not have corresponding `ipcMain.handle(...)` implementations yet.
- Demo credentials live in `src/shared/constants` and are used by the online auth mock.
