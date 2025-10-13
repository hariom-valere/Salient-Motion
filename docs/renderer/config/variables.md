## Renderer Config Variables

File: `src/renderer/src/config/variables.ts`

### Exports
- `APP_NAME: string`
- `COLORS: { backgroundPrimary: string; backgroundOverlay: string; borderSubtle: string; textPrimary: string; textSecondary: string; textMuted: string; emerald600: string; emerald700: string; emerald900_40: string }`
- `RADII: { lg: string; xl: string; full: string; modal: string }`
- `SHADOWS: { softEmerald: string }`
- `Z_INDEX: { overlay: number; modal: number }`
- `TIMINGS: { fast: string; base: string; slow: string }`
- `ROUTES: { login: string; setPassword: string; resetPassword: string; dashboard: string }`
- `CONSTANTS: { passwordMinLength: number }`
- `Variables` type and `VARIABLES` aggregate object

### Usage example
```ts
import { APP_NAME, COLORS, VARIABLES } from '@renderer/config/variables'

document.title = APP_NAME
const bg = COLORS.backgroundPrimary
console.log(VARIABLES.ROUTES.dashboard)
```
