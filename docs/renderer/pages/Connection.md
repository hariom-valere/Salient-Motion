## Connection Flow

Files:
- `src/renderer/src/pages/connection/index.tsx` — state machine for the flow
- `src/renderer/src/pages/connection/ConnectDevice.tsx`
- `src/renderer/src/pages/connection/ConnectingDevice.tsx`
- `src/renderer/src/pages/connection/ConnectedDevice.tsx`
- `src/renderer/src/pages/connection/DeviceInfo.tsx`

### Behavior
- Steps: Not Connected → Connecting → Connected → Device Info
- Transition triggers are handled via callbacks passed as props.

### Props
- `ConnectDevice`: `{ onNext: () => void }`
- `ConnectedDevice`: `{ onNext: () => void }`
- `DeviceInfo`: `{ onDisconnect: () => void }`
