## Login Page

File: `src/renderer/src/pages/auth/login/index.tsx`

### Behavior
- Renders `LoginForm`.

### `LoginForm`
File: `src/renderer/src/components/Forms/auth/login/index.tsx`
- Uses `antd` `Form` with fields `email` and `password`.
- On submit, calls `useAuth().login(email, password)` and redirects to `/connection` on success.
- Shows a "Forgot Password?" link when online.
