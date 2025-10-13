## Forgot Password Page

File: `src/renderer/src/pages/auth/forgotPassword/index.tsx`

### Behavior
- Renders `ForgotPasswordForm` and a success modal upon completion.

### `ForgotPasswordForm`
File: `src/renderer/src/components/Forms/auth/forgotPassword/index.tsx`
- Submits `window.api.auth.forgotPassword(email)`.
- On success, opens the success modal; on close, navigates to `/confirm-password`.
