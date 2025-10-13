## LogoutModal

File: `src/renderer/src/components/LogoutModal.tsx`

### Props
- `isOpen: boolean`
- `onClose: () => void`
- `onConfirm: () => void`
- `title: string`
- `message: string`

### Behavior
- Confirmation modal with cancel and logout actions.

### Usage example
```tsx
<LogoutModal
  isOpen
  onClose={() => setOpen(false)}
  onConfirm={() => doLogout()}
  title="Confirm logout"
  message="Are you sure you want to logout?"
/>
```
