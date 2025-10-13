## createMainWindow (Main)

File: `src/main/windows.ts`

### Export
- `createMainWindow(): BrowserWindow`

### Behavior
- Creates a `BrowserWindow` with preload `../preload/index.js` and shows it on `ready-to-show`.
- Uses `ELECTRON_RENDERER_URL` in dev; otherwise loads `renderer/index.html`.
- Opens external links in the default browser via `setWindowOpenHandler`.

### Usage example
```ts
import { app } from 'electron'
import { createMainWindow } from './windows'

app.whenReady().then(() => {
  createMainWindow()
})
```
