const { app, BrowserWindow } = require('electron');
const path = require('path');


if (require('electron-squirrel-startup')) { 
  app.quit();
}

const createWindow = () => {

  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,

    }
  });


  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.webContents.openDevTools();
};

//basic start close
app.on('ready', createWindow);


app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


