const { app, BrowserWindow, session, net, ipcMain } = require('electron')

// 设置应用程序数据目录
app.setPath('userData', __dirname + '/userData');

let mainWin

// 创建主窗口
async function createMainWin () {
  mainWin = new BrowserWindow({ width: 1000, height: 600, webPreferences: { webSecurity: false }  });
  mainWin.loadURL(`file://${__dirname}/index.html`)
  // mainWin.maximize();

  mainWin.on('closed', (event) => {
    mainWin = null
  });
}

app.on('ready', createMainWin);

app.on('window-all-closed', () => {
  app.quit();
});

