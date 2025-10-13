## UpdateAccountModal

File: `src/renderer/src/components/UpdateAccountModal.tsx`

Note: The component currently returns an empty fragment; the intended implementation (commented) shows a confirmation modal using `SuccessModal`.

### Intended Props
- `isOpen: boolean`
- `onClose: () => void`
- `onConfirm: () => void`
- `email: string`
- `organization: string`

### Intended Usage example
```tsx
<UpdateAccountModal
  isOpen
  onClose={() => setOpen(false)}
  onConfirm={() => updateAccount()}
  email="user@example.com"
  organization="Acme Inc"
/>
```
