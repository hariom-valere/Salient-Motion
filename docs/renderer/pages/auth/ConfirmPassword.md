## Confirm Password Page

File: `src/renderer/src/pages/auth/confirmPassword/index.tsx`

### Behavior
- Renders `ConfirmPasswordForm` and shows a `SuccessModal` on completion.

### `ConfirmPasswordForm`
File: `src/renderer/src/components/Forms/auth/confirmPassword/index.tsx`
- Validates password complexity and matching confirmation.
- On submit, triggers the provided `showModal` callback.
