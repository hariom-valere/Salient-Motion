## Button

File: `src/renderer/src/components/Button.tsx`

### Props
- `children: React.ReactNode`
- `variant?: 'primary' | 'secondary'` (default: `primary`)
- `outlined?: boolean` (default: `false`)
- `type?: 'button' | 'submit' | 'reset'` (default: `button`)
- `className?: string`
- `onClick?: () => void`
- `icon?: React.ReactNode`
- `iconPosition?: 'left' | 'right'` (default: `left`)
- `loading?: boolean` (default: `false`)
- `disabled?: boolean` (default: `false`)

### Usage examples
```tsx
<Button onClick={() => alert('clicked')}>Click me</Button>
```

```tsx
<Button variant="secondary" outlined icon={<SettingsIcon />}>Settings</Button>
```

```tsx
<Button type="submit" loading>Saving...</Button>
```
