## PasswordInput

File: `src/renderer/src/components/PasswordInput.tsx`

### Props
- `placeholder: string`
- `value?: string`
- `onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void`
- `className?: string`
- `name?: string`
- `id?: string`

### Behavior
- Manages internal `showPassword` state to toggle visibility.

### Usage example
```tsx
<PasswordInput placeholder="New Password" value={pwd} onChange={e => setPwd(e.target.value)} />
```
