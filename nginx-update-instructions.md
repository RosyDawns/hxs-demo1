# Nginx 配置更新指令

## 当前配置
你的 Nginx 配置已经有了基础设置和 SSL 证书，只需要添加 TTS API 代理。

## 更新步骤

### 1. SSH 登录服务器
```bash
ssh root@49.235.120.150
```

### 2. 编辑 Nginx 配置文件
```bash
sudo nano /etc/nginx/sites-available/hss.daozishule.cn
```

或者如果配置在其他位置：
```bash
sudo nano /etc/nginx/conf.d/hss.daozishule.cn.conf
```

### 3. 在 `server` 块中添加 TTS 代理配置

在 `location / { ... }` 块**之后**添加以下内容：

```nginx
server {
    server_name hss.daozishule.cn;
    root /var/www/projects/hxs-demo/dist;

    location / {
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # ========== 添加以下 TTS API 代理配置 ==========
    location /api/tts {
        proxy_pass http://localhost:3001/api/tts;
        proxy_http_version 1.1;
        
        # 请求头
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # SSE 流式传输支持（重要！）
        proxy_buffering off;
        proxy_cache off;
        proxy_set_header Connection '';
        proxy_set_header X-Accel-Buffering no;
        chunked_transfer_encoding on;
        
        # 超时设置
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    # ========== TTS API 代理配置结束 ==========

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/hss.daozishule.cn/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/hss.daozishule.cn/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = hss.daozishule.cn) {
        return 301 https://$host$request_uri;
    }
    listen 80;
    server_name hss.daozishule.cn;
    return 404;
}
```

### 4. 测试 Nginx 配置
```bash
sudo nginx -t
```

应该看到：
```
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### 5. 重启 Nginx
```bash
sudo systemctl restart nginx
```

### 6. 检查 Nginx 状态
```bash
sudo systemctl status nginx
```

## 完整的更新后配置示例

```nginx
server {
    server_name hss.daozishule.cn;
    root /var/www/projects/hxs-demo/dist;

    # 前端路由
    location / {
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # TTS API 代理
    location /api/tts {
        proxy_pass http://localhost:3001/api/tts;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_buffering off;
        proxy_cache off;
        proxy_set_header Connection '';
        proxy_set_header X-Accel-Buffering no;
        chunked_transfer_encoding on;
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/hss.daozishule.cn/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/hss.daozishule.cn/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = hss.daozishule.cn) {
        return 301 https://$host$request_uri;
    }
    listen 80;
    server_name hss.daozishule.cn;
    return 404;
}
```

## 验证配置

### 1. 测试 TTS API
```bash
curl -X POST https://hss.daozishule.cn/api/tts \
  -H "Content-Type: application/json" \
  -d '{"text":"你好","voice":"Cherry","language_type":"Chinese"}'
```

### 2. 查看 Nginx 日志
```bash
sudo tail -f /var/log/nginx/error.log
```

## 故障排查

### 如果出现 502 Bad Gateway
1. 检查后端服务是否运行：
```bash
pm2 status
```

2. 检查端口 3001 是否被占用：
```bash
sudo netstat -tlnp | grep 3001
```

3. 查看后端日志：
```bash
pm2 logs tts-proxy
```

### 如果出现 404
检查 Nginx 配置中的 `location /api/tts` 是否正确添加。

### 如果 SSE 流式传输中断
确保添加了以下配置：
```nginx
proxy_buffering off;
proxy_cache off;
proxy_set_header X-Accel-Buffering no;
```
