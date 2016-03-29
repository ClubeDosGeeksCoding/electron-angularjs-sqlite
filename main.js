var electron = require('electron');
var app = require('app');
var BrowserWindow = require('browser-window');

// Global reference to keep the instance of window until closed by User else it will be closed when JavaScript do Garbage collection.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1200, height: 700});

  // Load the app from HTML file.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});