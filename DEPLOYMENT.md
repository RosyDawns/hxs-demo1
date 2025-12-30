# 生产环境部署指南

## 概述

本项目包含前端（Vue 3）和后端代理服务器（Express），需要分别部署。

## 架构

```
用户浏览器 (https://hss.daozishule.cn)
    ↓
前端静态文件 (Vite 构建)
    ↓
后端代理服务器 (https://hss.daozishule.cn/api/tts)
    ↓
阿里云 TTS API + DeepSeek API
```

## 部署步骤

### 1. 前端部署

#### 1.1 构建前端

```bash
# 安装依赖
pnpm install

# 构建生产版本
pnpm build
```

构建完成后，`dist` 目录包含所有静态文件。

#### 1.2 上传静态文件

将 `dist` 目录中的所有文件上传到你的服务器：

```bash
# 示例：使用 scp 上传
scp -r dist/* user@hss.daozishule.cn:/var/www/html/

# 或使用 FTP/SFTP 工具上传
```

#### 1.3 配置 Nginx

在你的 Nginx 配置中添加：

```nginx
server {
    listen 443 ssl;
    server_name hss.daozishule.cn;

    # SSL 证书配置
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # 前端静态文件
    location / {
        root /var/www/html;
        try_files $uri $uri/ /index.html;
    }

    # 代理 TTS API 到后端服务
    location /api/tts {
        proxy_pass http://localhost:3001/api/tts;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        
        # 支持 SSE 流式传输
        proxy_buffering off;
        proxy_cache off;
        proxy_set_header X-Accel-Buffering no;
    }
}
```

### 2. 后端代理服务器部署

#### 2.1 上传代理服务器代码

将以下文件上传到服务器：

- `proxy-server.js`
- `package.json`

```bash
# 在服务器上安装依赖
cd /path/to/backend
pnpm install --prod
```

#### 2.2 使用 PM2 管理进程

安装 PM2（如果还没有）：

```bash
npm install -g pm2
```

创建 PM2 配置文件 `ecosystem.config.js`：

```javascript
module.exports = {
  apps: [{
    name: 'tts-proxy',
    script: './proxy-server.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    }
  }]
}
```

启动服务：

```bash
# 启动
pm2 start ecosystem.config.js

# 查看状态
pm2 status

# 查看日志
pm2 logs tts-proxy

# 设置开机自启
pm2 startup
pm2 save
```

#### 2.3 使用 systemd（替代方案）

创建 systemd 服务文件 `/etc/systemd/system/tts-proxy.service`：

```ini
[Unit]
Description=TTS Proxy Server
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/path/to/backend
ExecStart=/usr/bin/node proxy-server.js
Restart=on-failure
Environment=NODE_ENV=production
Environment=PORT=3001

[Install]
WantedBy=multi-user.target
```

启动服务：

```bash
sudo systemctl daemon-reload
sudo systemctl enable tts-proxy
sudo systemctl start tts-proxy
sudo systemctl status tts-proxy
```

### 3. 环境变量配置

确保 `.env.production` 文件配置正确：

```env
VITE_TTS_PROXY_URL=https://hss.daozishule.cn/api/tts
VITE_DEEPSEEK_API_KEY=sk-b816f2dde75341598dde441df259eca8
```

### 4. 安全建议

#### 4.1 API Key 保护

- ✅ API Key 存储在后端代理服务器中
- ✅ 前端不直接暴露 API Key
- ⚠️ 建议在生产环境中使用环境变量而不是硬编码

#### 4.2 添加速率限制

在 `proxy-server.js` 中添加速率限制：

```bash
pnpm add express-rate-limit
```

```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 分钟
  max: 100 // 限制 100 个请求
});

app.use('/api/tts', limiter);
```

#### 4.3 添加请求验证

可以添加简单的 token 验证：

```javascript
app.post('/api/tts', (req, res, next) => {
  const token = req.headers['x-api-token'];
  if (token !== 'your-secret-token') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
});
```

### 5. 测试部署

#### 5.1 测试前端

访问 https://hss.daozishule.cn，确保页面正常加载。

#### 5.2 测试 TTS API

```bash
curl -X POST https://hss.daozishule.cn/api/tts \
  -H "Content-Type: application/json" \
  -d '{
    "text": "你好，这是测试",
    "voice": "Cherry",
    "language_type": "Chinese"
  }'
```

#### 5.3 测试完整流程

1. 打开浏览器访问 https://hss.daozishule.cn
2. 进入 AI 智能体页面
3. 发送消息
4. 检查是否正常接收 AI 回复和语音播放

### 6. 监控和日志

#### 6.1 查看代理服务器日志

```bash
# PM2
pm2 logs tts-proxy

# systemd
sudo journalctl -u tts-proxy -f
```

#### 6.2 Nginx 日志

```bash
# 访问日志
tail -f /var/log/nginx/access.log

# 错误日志
tail -f /var/log/nginx/error.log
```

### 7. 故障排查

#### 问题：TTS 无法播放

1. 检查代理服务器是否运行：`pm2 status` 或 `systemctl status tts-proxy`
2. 检查 Nginx 配置是否正确
3. 检查浏览器控制台是否有 CORS 错误
4. 检查代理服务器日志

#### 问题：HTTPS 混合内容错误

确保所有 API 请求都使用 HTTPS，检查 `.env.production` 配置。

#### 问题：SSE 流式传输中断

检查 Nginx 配置中的 `proxy_buffering off` 设置。

## 快速部署脚本

创建 `deploy.sh`：

```bash
#!/bin/bash

echo "🚀 开始部署..."

# 1. 构建前端
echo "📦 构建前端..."
pnpm build

# 2. 上传前端文件
echo "📤 上传前端文件..."
scp -r dist/* user@hss.daozishule.cn:/var/www/html/

# 3. 上传后端文件
echo "📤 上传后端文件..."
scp proxy-server.js package.json user@hss.daozishule.cn:/path/to/backend/

# 4. 重启后端服务
echo "🔄 重启后端服务..."
ssh user@hss.daozishule.cn "cd /path/to/backend && pnpm install --prod && pm2 restart tts-proxy"

echo "✅ 部署完成！"
```

使用：

```bash
chmod +x deploy.sh
./deploy.sh
```

## 成本估算

- **服务器**: 1核2G 约 ¥50-100/月
- **域名**: 约 ¥50/年
- **SSL 证书**: Let's Encrypt 免费
- **阿里云 TTS**: 按使用量计费，约 ¥0.8/万字符
- **DeepSeek API**: 按使用量计费

## 联系支持

如有问题，请检查：
1. Nginx 错误日志
2. 代理服务器日志
3. 浏览器控制台
4. 网络请求（开发者工具 Network 标签）
