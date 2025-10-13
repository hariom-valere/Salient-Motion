## ChangePasswordModal

File: `src/renderer/src/components/ChangePasswordModal.tsx`

### Props
- `isOpen: boolean`
- `onClose: () => void`

### Behavior
- Displays a form with current, new, and confirm password fields using `PasswordInput`.
- Calls `onClose` after a submit; integrate with backend as needed.

### Usage example
```tsx
<ChangePasswordModal isOpen onClose={() => setOpen(false)} />
```
