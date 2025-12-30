#!/bin/bash

echo "🚀 开始部署到生产环境..."

# 检查是否安装了依赖
if ! command -v pnpm &> /dev/null; then
    echo "❌ 错误: 未安装 pnpm"
    exit 1
fi

# 1. 构建前端
echo ""
echo "📦 步骤 1/3: 构建前端..."
pnpm build

if [ $? -ne 0 ]; then
    echo "❌ 前端构建失败"
    exit 1
fi

echo "✅ 前端构建完成"

# 2. 提示上传信息
echo ""
echo "📤 步骤 2/3: 准备上传文件"
echo ""
echo "请执行以下操作："
echo ""
echo "1️⃣  上传前端文件到服务器："
echo "   scp -r dist/* user@hss.daozishule.cn:/var/www/html/"
echo ""
echo "2️⃣  上传后端文件到服务器："
echo "   scp proxy-server.js package.json ecosystem.config.js user@hss.daozishule.cn:/path/to/backend/"
echo ""
echo "3️⃣  在服务器上安装依赖并启动服务："
echo "   ssh user@hss.daozishule.cn"
echo "   cd /path/to/backend"
echo "   pnpm install --prod"
echo "   pm2 start ecosystem.config.js"
echo ""
echo "4️⃣  配置 Nginx（如果还没有配置）"
echo "   参考 DEPLOYMENT.md 文件中的 Nginx 配置"
echo ""
echo "✅ 本地构建完成！请按照上述步骤完成服务器部署。"
