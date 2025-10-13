## Auth IPC Handlers (Main)

File: `src/main/ipc/auth.ts`

### Export
- `registerAuthHandlers(): void`

### Channels
- `login` (invoke)
  - Input: `({ email, password }, { isOnlineMode })`
  - Output (online success): `{ success: true, token: string }`
  - Output (offline success): `{ success: true, token: string, offline: true }`
  - Output (failure): `{ success: false, message: string }`
- `forgotPassword` (invoke)
  - Input: `{ email }`
  - Output: `{ success: boolean, message: string }`
- `resetPassword` (invoke)
  - Input: `{ email }`
  - Output: `{ success: boolean, message: string }`
- `logout` (invoke)
  - Output: `{ success: boolean }`

### Notes
- Uses bcrypt to hash passwords for the offline cache.
- Stores/updates users in `users` table within `auth.db` via better-sqlite3.
