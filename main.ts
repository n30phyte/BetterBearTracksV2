import { app, BrowserWindow } from "electron";

let mainWindow: BrowserWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
    });

    mainWindow.loadFile("./index.html");
    mainWindow.webContents.openDevTools();

    mainWindow.on("closed", () => {
        mainWindow = null;
    });

}

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
