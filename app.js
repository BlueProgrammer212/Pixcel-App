const { app, BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        show: false
    })

    win.loadURL('https://blueprogrammer212.github.io/home');
    win.once("ready-to-show", () => {
        win.show();
    })
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
})

