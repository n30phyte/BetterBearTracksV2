"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var mainWindow;
function createWindow() {
    // Create the browser window.
    mainWindow = new electron_1.BrowserWindow({
        height: 600,
        width: 800
    });
    // and load the index.html of the app.
    mainWindow.loadFile("./index.html");
    mainWindow.webContents.openDevTools();
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
}
exports.createWindow = createWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwL3NyYy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBeUM7QUFFekMsSUFBSSxVQUFVLENBQUM7QUFFZixTQUFnQixZQUFZO0lBQ3hCLDZCQUE2QjtJQUM3QixVQUFVLEdBQUcsSUFBSSx3QkFBYSxDQUFDO1FBQzNCLE1BQU0sRUFBRSxHQUFHO1FBQ1gsS0FBSyxFQUFFLEdBQUc7S0FDYixDQUFDLENBQUM7SUFFSCxzQ0FBc0M7SUFDdEMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNwQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXRDLFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQ3BCLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDO0FBZkQsb0NBZUMifQ==