## ProtectedRoute

File: `src/renderer/src/components/ProtectedRoute/index.tsx`

### Behavior
- Reads `token` from `useAuth()`; if missing, redirects to `/`.
- Renders an `<Outlet />` when authenticated.

### Usage example
```tsx
import ProtectedRoute from '@renderer/components/ProtectedRoute'

// Already integrated in the app's router; for custom usage:
<Route element={<ProtectedRoute />}>
  <Route path="/private" element={<PrivatePage />} />
</Route>
```
