# 快速部署指南

## 🚀 一键部署

### 1. 运行部署脚本

```bash
./deploy-to-server.sh
```

脚本会自动完成：
- ✅ 构建前端
- ✅ 上传前端到 `/var/www/projects/hxs-demo/dist`
- ✅ 上传后端到 `/var/www/projects/hxs-demo/backend`
- ✅ 安装依赖
- ✅ 启动 PM2 服务

### 2. 配置 Nginx（首次部署需要）

SSH 登录到服务器：

```bash
ssh root@49.235.120.150
```

#### 方案 A：使用提供的配置文件

```bash
# 1. 创建配置文件
sudo nano /etc/nginx/sites-available/hss.daozishule.cn

# 2. 复制 nginx-config.conf 的内容到文件中

# 3. 创建软链接
sudo ln -s /etc/nginx/sites-available/hss.daozishule.cn /etc/nginx/sites-enabled/

# 4. 测试配置
sudo nginx -t

# 5. 重启 Nginx
sudo systemctl restart nginx
```

#### 方案 B：修改现有配置

如果已有 Nginx 配置，只需添加 TTS 代理部分：

```nginx
location /api/tts {
    proxy_pass http://localhost:3001/api/tts;
    proxy_buffering off;
    proxy_cache off;
    proxy_set_header X-Accel-Buffering no;
}
```

### 3. 验证部署

#### 3.1 检查前端

访问: https://hss.daozishule.cn

#### 3.2 检查后端服务

```bash
ssh root@49.235.120.150
pm2 status
```

应该看到 `tts-proxy` 服务在运行。

#### 3.3 检查后端日志

```bash
pm2 logs tts-proxy
```

#### 3.4 测试 TTS API

```bash
curl -X POST https://hss.daozishule.cn/api/tts \
  -H "Content-Type: application/json" \
  -d '{"text":"你好","voice":"Cherry","language_type":"Chinese"}'
```

### 4. 常用命令

#### 查看服务状态
```bash
ssh root@49.235.120.150 "pm2 status"
```

#### 查看日志
```bash
ssh root@49.235.120.150 "pm2 logs tts-proxy --lines 50"
```

#### 重启服务
```bash
ssh root@49.235.120.150 "pm2 restart tts-proxy"
```

#### 停止服务
```bash
ssh root@49.235.120.150 "pm2 stop tts-proxy"
```

## 🔧 故障排查

### 问题 1: 无法连接到服务器

```bash
# 测试 SSH 连接
ssh root@49.235.120.150

# 如果需要密码，确保你有正确的密码
# 或者配置 SSH 密钥
```

### 问题 2: TTS 无法播放

1. 检查后端服务是否运行：
```bash
ssh root@49.235.120.150 "pm2 status"
```

2. 检查后端日志：
```bash
ssh root@49.235.120.150 "pm2 logs tts-proxy"
```

3. 检查 Nginx 配置：
```bash
ssh root@49.235.120.150 "sudo nginx -t"
```

### 问题 3: 前端更新未生效

清除浏览器缓存或使用无痕模式访问。

### 问题 4: CORS 错误

确保 Nginx 配置中的 `/api/tts` 代理配置正确。

## 📊 监控

### 查看实时日志
```bash
ssh root@49.235.120.150 "pm2 logs tts-proxy --lines 100"
```

### 查看服务器资源使用
```bash
ssh root@49.235.120.150 "pm2 monit"
```

## 🔄 更新部署

每次代码更新后，只需运行：

```bash
./deploy-to-server.sh
```

脚本会自动：
1. 重新构建前端
2. 上传新文件
3. 重启后端服务

## 📝 注意事项

1. **首次部署**需要配置 Nginx
2. **SSL 证书**需要提前配置好
3. **防火墙**需要开放 80 和 443 端口
4. **PM2**会自动管理进程，服务器重启后自动启动

## 🆘 需要帮助？

查看详细文档：`DEPLOYMENT.md`

或检查：
- Nginx 日志: `/var/log/nginx/error.log`
- PM2 日志: `pm2 logs tts-proxy`
- 浏览器控制台
