# ✅ 部署检查清单

## 📋 部署前准备

- [ ] 本地代码已提交到 Git
- [ ] 已安装 pnpm
- [ ] 可以 SSH 连接到服务器 `ssh root@49.235.120.150`
- [ ] 服务器上已有 Nginx 配置
- [ ] 域名 `hss.daozishule.cn` 已解析到服务器

## 🚀 部署步骤

### 第一步：运行部署脚本

- [ ] 在本地运行 `./deploy-to-server.sh`
- [ ] 等待脚本执行完成（约 2-3 分钟）
- [ ] 确认没有错误信息

### 第二步：更新 Nginx 配置

- [ ] SSH 登录服务器
- [ ] 编辑 Nginx 配置文件
- [ ] 添加 TTS API 代理配置
- [ ] 运行 `sudo nginx -t` 测试配置
- [ ] 运行 `sudo systemctl restart nginx` 重启 Nginx

### 第三步：验证部署

#### 后端验证

- [ ] 运行 `pm2 status` 查看服务状态
- [ ] `tts-proxy` 服务状态为 `online`
- [ ] 运行 `pm2 logs tts-proxy` 查看日志
- [ ] 日志中显示 "TTS 代理服务器已启动"

#### API 验证

- [ ] 测试 TTS API 端点
  ```bash
  curl -X POST https://hss.daozishule.cn/api/tts \
    -H "Content-Type: application/json" \
    -d '{"text":"你好","voice":"Cherry","language_type":"Chinese"}'
  ```
- [ ] 收到流式音频数据响应

#### 前端验证

- [ ] 访问 https://hss.daozishule.cn
- [ ] 页面正常加载
- [ ] 可以看到首页内容
- [ ] 可以导航到 AI 智能体页面

#### 功能验证

- [ ] 点击右上角齿轮图标
- [ ] 设置面板正常打开
- [ ] 可以看到音色列表
- [ ] 选择一个音色
- [ ] 发送测试消息
- [ ] AI 正常回复
- [ ] 显示"正在生成语音..."加载状态
- [ ] 语音开始播放
- [ ] 可以听到声音
- [ ] 可以点击"播放"按钮重新播放
- [ ] 可以停止播放

## 🔍 详细测试

### 测试场景 1: 基本对话

- [ ] 发送消息："你好"
- [ ] 收到 AI 回复
- [ ] 听到语音播放

### 测试场景 2: 音色切换

- [ ] 打开设置
- [ ] 切换到"苏瑶 Serena"
- [ ] 发送消息
- [ ] 确认音色已改变

### 测试场景 3: 长文本

- [ ] 发送较长的问题
- [ ] 确认完整回复
- [ ] 确认语音完整播放

### 测试场景 4: 错误处理

- [ ] 停止后端服务 `pm2 stop tts-proxy`
- [ ] 发送消息
- [ ] 确认显示错误提示
- [ ] 重启服务 `pm2 start tts-proxy`
- [ ] 确认恢复正常

### 测试场景 5: 多轮对话

- [ ] 连续发送 3-5 条消息
- [ ] 确认对话上下文正确
- [ ] 确认每条都有语音

## 📊 性能检查

- [ ] 页面加载时间 < 3 秒
- [ ] AI 回复时间 < 5 秒
- [ ] 语音开始播放时间 < 3 秒
- [ ] 语音播放流畅，无卡顿

## 🔒 安全检查

- [ ] HTTPS 正常工作
- [ ] SSL 证书有效
- [ ] API Key 未暴露在前端代码中
- [ ] 后端日志不包含敏感信息

## 📱 兼容性测试

### 桌面浏览器

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari

### 移动浏览器

- [ ] iOS Safari
- [ ] Android Chrome

## 🔧 运维检查

- [ ] PM2 进程自动重启已启用
- [ ] PM2 开机自启已配置 `pm2 startup`
- [ ] 日志文件正常写入
- [ ] 服务器资源使用正常（CPU < 50%, 内存 < 80%）

## 📝 文档检查

- [ ] README.md 已更新
- [ ] 部署文档完整
- [ ] API 文档准确
- [ ] 故障排查指南可用

## 🎯 最终确认

- [ ] 所有功能正常工作
- [ ] 没有控制台错误
- [ ] 没有 Nginx 错误日志
- [ ] 没有 PM2 错误日志
- [ ] 用户体验流畅

## ✅ 部署完成

如果以上所有项目都已勾选，恭喜！部署成功！

**部署时间**: ___________
**部署人员**: ___________
**版本号**: ___________

---

## 📞 问题记录

如果遇到问题，请在此记录：

**问题 1**:
- 描述: 
- 解决方案: 
- 状态: 

**问题 2**:
- 描述: 
- 解决方案: 
- 状态: 

---

## 🔄 回滚计划

如果需要回滚：

1. 恢复前端文件:
   ```bash
   ssh root@49.235.120.150 "cd /var/www/projects/hxs-demo && git checkout <previous-commit>"
   ```

2. 停止后端服务:
   ```bash
   ssh root@49.235.120.150 "pm2 stop tts-proxy"
   ```

3. 恢复 Nginx 配置:
   ```bash
   ssh root@49.235.120.150 "sudo cp /etc/nginx/sites-available/hss.daozishule.cn.backup /etc/nginx/sites-available/hss.daozishule.cn"
   ssh root@49.235.120.150 "sudo systemctl restart nginx"
   ```
