const { app, BrowserWindow } = require('electron');
const path = require('path');

// 禁用安全警告（开发阶段）
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

// 创建窗口
function createMainWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,        // 核心：允许渲染进程用Node.js
      contextIsolation: false,      // 核心：关闭上下文隔离
      enableRemoteModule: true     // 兼容旧API
    }
  });

  // 加载你的music.html（入口文件）
  win.loadFile('首页.html');
  
  // 打开开发者工具（方便看日志）
//   win.webContents.openDevTools();
}

// 应用启动后创建窗口
app.whenReady().then(createMainWindow);

// 关闭所有窗口退出应用（Windows）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});