// main/index.ts
import { app, shell, BrowserWindow, ipcMain } from "electron";
import path from "path";

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === "linux" ? { icon: path.join(__dirname, "icon.png") } : {}),
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      sandbox: false,
    },
  });

  mainWindow.on("ready-to-show", () => {
    mainWindow?.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });

  if (process.env.ELECTRON_RENDERER_URL) {
    mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// ================== IPC HANDLERS ==================

// Login
ipcMain.handle("login", async (_event, { email, password }) => {
  if (email === "motiondev@gmail.com" && password === "Pwd123!@#") {
    return { success: true, token: "FAKE_JWT_TOKEN" };
  }
  return { success: false, message: "Invalid credentials" };
});

// Reset password
ipcMain.handle("resetPassword", async (_event, { email }) => {
  console.log(`Reset password for ${email}`);
  return { success: true, message: "Password reset link sent!" };
});

// Forget password
ipcMain.handle("forgetPassword", async (_event, { email }) => {
  console.log(`Forget password for ${email}`);
  return { success: true, message: "Temporary password sent to email." };
});

// Logout
ipcMain.handle("logout", async () => {
  console.log("User logged out");
  return { success: true };
});
