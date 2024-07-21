import path from 'path';
import { app, ipcMain, BrowserWindow } from 'electron';

// 判断当前环境
function isDev() {
  return process.env.NODE_ENV === 'development';
}

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true, // 注入node模块
    },
  });

  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:7001`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

const ROOT_PATH = path.join(app.getAppPath(), '../');

// 监听渲染进程的消息并回复
ipcMain.on('get-root-path', (event, arg) => {
  event.reply('reply-root-path', ROOT_PATH);
});
