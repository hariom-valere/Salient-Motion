## Database (Main)

Files: `src/main/db/index.ts`, `src/main/db/authDb.ts`

### Exports
- `databases: { auth: Database }`
- `initAuthDB(): Database`

### Behavior
- `initAuthDB` creates/open SQLite database at `{app.getPath('userData')}/auth.db`.
- Ensures `users` table exists with columns: `id`, `email`, `passwordHash`, `token`, `updatedAt`.

### Usage example
```ts
import { databases } from './db'

const db = databases.auth
const user = db.prepare('SELECT email FROM users LIMIT 1').get()
```
