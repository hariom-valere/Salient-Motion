## AuthRedirect

File: `src/renderer/src/components/ProtectedRoute/AuthRedirect.tsx`

### Behavior
- If `token` exists, navigates to `/connection`; otherwise navigates to `/login`.

### Usage example
```tsx
<AuthRedirect />
```
