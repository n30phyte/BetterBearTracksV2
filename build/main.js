"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        height: 600,
        width: 800,
    });
    mainWindow.loadFile("./index.html");
    mainWindow.webContents.openDevTools();
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
}
electron_1.app.on("ready", createWindow);
// Quit when all windows are closed.
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBOEM7QUFFOUMsSUFBSSxVQUF5QixDQUFDO0FBRTlCLFNBQVMsWUFBWTtJQUNqQixVQUFVLEdBQUcsSUFBSSx3QkFBYSxDQUFDO1FBQzNCLE1BQU0sRUFBRSxHQUFHO1FBQ1gsS0FBSyxFQUFFLEdBQUc7S0FDYixDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BDLFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFdEMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ3pCLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDO0FBRUQsY0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFFOUIsb0NBQW9DO0FBQ3BDLGNBQUcsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQzdCLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7UUFDL0IsY0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2Q7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILGNBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtJQUNwQixJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7UUFDckIsWUFBWSxFQUFFLENBQUM7S0FDbEI7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9