## Router (Renderer)

File: `src/renderer/src/routes/index.tsx`

### Export
- **`router`** — result of `createBrowserRouter([...])`

### Routes
- `/` → `<AuthRedirect />` (index)
- Protected area (requires token via `<ProtectedRoute />`):
  - `/dashboard` → `<Dashboard />`
  - `/configuration` → `<Configuration />`
  - `/analyzer` → `<Analyzer />`
  - `/utilities` → `<Utilities />`
  - `/connection` → `<Connection />`
  - `/account` → `<Account />`
- Auth pages
  - `/login` → `<Login />`
  - `/forgot-password` → `<ForgotPassword />`
  - `/confirm-password` → `<ConfirmPassword />`

### Usage example
```tsx
import { RouterProvider } from 'react-router-dom'
import { router } from '@renderer/routes'

export default function App() {
  return <RouterProvider router={router} />
}
```
