import { app, BrowserWindow } from "electron";
import { resolve } from "path";

import waitDevServer from "./waitDevServer";

const IS_DEV = process.env.IS_IN_DEVELOPMENT;
const DEV_SERVER_URL = "http://localhost:3000";
let mainWindow: BrowserWindow | null = null;

async function openWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: require.resolve("./preload"),
    },
  });

  if (IS_DEV) {
    console.log("Waiting for dev server");

    await waitDevServer(DEV_SERVER_URL);

    await mainWindow.loadURL(DEV_SERVER_URL);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(resolve(__dirname, "../client/index.html"));
  }
}

app.whenReady().then(openWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    openWindow();
  }
});
