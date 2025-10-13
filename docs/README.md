## API and Component Documentation

Use this index to navigate the public APIs, functions, and components. All entries include usage examples.

### Preload API
- [Preload `window.api`](./preload/api.md)

### Renderer
- Context
  - [AuthContext (`AuthProvider`, `useAuth`)](./renderer/context/AuthContext.md)
- Hooks
  - [`useOnlineStatus`](./renderer/hooks/useOnlineStatus.md)
- Routing
  - [`router` and route map](./renderer/routes.md)
- Config
  - [Design/config variables](./renderer/config/variables.md)
- Layouts
  - [AppLayout](./renderer/layouts/AppLayout.md)
  - [Sidebar](./renderer/layouts/Sidebar.md)
- Pages
  - [Dashboard](./renderer/pages/Dashboard.md)
  - [Configuration](./renderer/pages/Configuration.md)
  - [Analyzer](./renderer/pages/Analyzer.md)
  - [Utilities](./renderer/pages/Utilities.md)
  - [Connection flow](./renderer/pages/Connection.md)
  - [Account](./renderer/pages/Account.md)
  - [Auth: Login](./renderer/pages/auth/Login.md)
  - [Auth: Forgot Password](./renderer/pages/auth/ForgotPassword.md)
  - [Auth: Confirm Password](./renderer/pages/auth/ConfirmPassword.md)
- Components
  - [Button](./renderer/components/Button.md)
  - [Input](./renderer/components/Input.md)
  - [PasswordInput](./renderer/components/PasswordInput.md)
  - [ProtectedRoute](./renderer/components/ProtectedRoute.md)
  - [AuthRedirect](./renderer/components/AuthRedirect.md)
  - [SuccessModal](./renderer/components/SuccessModal.md)
  - [LogoutModal](./renderer/components/LogoutModal.md)
  - [UpdateAccountModal](./renderer/components/UpdateAccountModal.md)
  - [ChangePasswordModal](./renderer/components/ChangePasswordModal.md)
  - [TitleBar](./renderer/components/TitleBar.md)

### Main Process
- IPC
  - [Auth IPC handlers](./main/ipc/auth.md)
- Window
  - [`createMainWindow`](./main/windows.md)
- Database
  - [`databases` and `initAuthDB`](./main/db.md)

### Shared
- [Constants](./shared/constants.md)
