// In the main process.
const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
    const win = new BrowserWindow({ width: 800, height: 600, frame: false, x: 200, y: 100 })

    // Load a remote URL
    win.loadURL('http://192.168.1.69:9090')
})

