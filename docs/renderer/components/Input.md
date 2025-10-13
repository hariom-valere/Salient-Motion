## Input

File: `src/renderer/src/components/Input.tsx`

Thin wrapper around `antd` `Input` and `Input.Password` that applies a consistent `rootClassName` and custom password visibility icons.

### Props
- Accepts all `antd` `InputProps`.
- If `type="password"`, renders `Input.Password` with custom icons.

### Usage examples
```tsx
<Input placeholder="Email" />
```

```tsx
<Input type="password" placeholder="Password" />
```
