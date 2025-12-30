#!/bin/bash

SERVER_IP="49.235.120.150"
SERVER_USER="root"

echo "🔧 更新服务器 Nginx 配置..."
echo ""

# 创建临时配置片段
cat > /tmp/tts-proxy-config.txt << 'EOF'

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
EOF

echo "📋 TTS 代理配置已准备好"
echo ""
echo "请按照以下步骤手动更新 Nginx 配置："
echo ""
echo "1️⃣  SSH 登录服务器："
echo "   ssh ${SERVER_USER}@${SERVER_IP}"
echo ""
echo "2️⃣  编辑 Nginx 配置文件："
echo "   sudo nano /etc/nginx/sites-available/hss.daozishule.cn"
echo "   或"
echo "   sudo nano /etc/nginx/conf.d/hss.daozishule.cn.conf"
echo ""
echo "3️⃣  在 'location / { ... }' 块之后添加以下内容："
echo ""
cat /tmp/tts-proxy-config.txt
echo ""
echo "4️⃣  保存文件（Ctrl+O, Enter, Ctrl+X）"
echo ""
echo "5️⃣  测试 Nginx 配置："
echo "   sudo nginx -t"
echo ""
echo "6️⃣  重启 Nginx："
echo "   sudo systemctl restart nginx"
echo ""
echo "7️⃣  检查状态："
echo "   sudo systemctl status nginx"
echo ""
echo "📝 详细说明请查看: nginx-update-instructions.md"
echo ""

# 清理临时文件
rm /tmp/tts-proxy-config.txt
