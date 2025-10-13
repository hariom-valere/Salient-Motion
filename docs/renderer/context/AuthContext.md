## AuthContext (Renderer)

File: `src/renderer/src/context/AuthContext.tsx`

### Exports
- **`AuthProvider`**: React provider that supplies auth state.
- **`useAuth()`** → `{ token: string | null; login(email, password): Promise<boolean>; logout(): void }`

### Behavior
- Persists token to `localStorage` on successful login, clears on logout.
- Uses `useOnlineStatus()` to decide between online vs offline login flows.
- Delegates to `window.api.auth` IPC calls.

### Usage example
```tsx
import { AuthProvider, useAuth } from '@renderer/context/AuthContext'

function LoginForm() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const ok = await login(email, password)
    if (!ok) alert('Invalid credentials')
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* inputs... */}
      <button type="submit">Sign in</button>
    </form>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  )
}
```
