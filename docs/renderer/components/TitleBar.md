## TitleBar

File: `src/renderer/src/components/TitleBar.tsx`

### Behavior
- Renders a custom title bar with app logo and window control buttons.
- Uses `window.electron.ipcRenderer.send` to send `minimize-window`, `maximize-window`, and `close-window` events.

### Usage example
```tsx
<TitleBar />
```
