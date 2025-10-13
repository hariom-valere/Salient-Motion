## `useOnlineStatus` (Renderer Hook)

File: `src/renderer/src/hooks/useOnlineStatus.ts`

### Signature
- Default export: `(): boolean` — `true` when `navigator.onLine` is truthy and the window is online.

### Behavior
- Subscribes to `window` `online`/`offline` events and updates state accordingly.

### Usage example
```tsx
import useOnlineStatus from '@renderer/hooks/useOnlineStatus'

export function ConnectionBadge() {
  const isOnline = useOnlineStatus()
  return <span>{isOnline ? 'Online' : 'Offline'}</span>
}
```
