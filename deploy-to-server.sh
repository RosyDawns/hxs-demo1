#!/bin/bash

# 服务器配置
SERVER_IP="49.235.120.150"
SERVER_USER="ubuntu"  # 如果不是 root，请修改为你的用户名
FRONTEND_PATH="/var/www/projects/hxs-demo/dist"
BACKEND_PATH="/var/www/projects/hxs-demo/backend"

echo "🚀 开始部署到服务器 ${SERVER_IP}..."
echo ""

# 1. 构建前端
echo "📦 步骤 1/5: 构建前端..."
pnpm build

if [ $? -ne 0 ]; then
    echo "❌ 前端构建失败"
    exit 1
fi
echo "✅ 前端构建完成"
echo ""

# 2. 清理服务器上的旧文件
echo "🧹 步骤 2/5: 清理服务器旧文件..."
ssh ${SERVER_USER}@${SERVER_IP} "rm -rf ${FRONTEND_PATH}/*"
echo "✅ 清理完成"
echo ""

# 3. 上传前端文件
echo "📤 步骤 3/5: 上传前端文件..."
scp -r dist/* ${SERVER_USER}@${SERVER_IP}:${FRONTEND_PATH}/

if [ $? -ne 0 ]; then
    echo "❌ 前端文件上传失败"
    exit 1
fi
echo "✅ 前端文件上传完成"
echo ""

# 4. 创建后端目录并上传后端文件
echo "📤 步骤 4/5: 上传后端文件..."
ssh ${SERVER_USER}@${SERVER_IP} "mkdir -p ${BACKEND_PATH}"
scp proxy-server.js package.json ecosystem.config.js ${SERVER_USER}@${SERVER_IP}:${BACKEND_PATH}/

if [ $? -ne 0 ]; then
    echo "❌ 后端文件上传失败"
    exit 1
fi
echo "✅ 后端文件上传完成"
echo ""

# 5. 在服务器上安装依赖并启动服务
echo "🔧 步骤 5/5: 安装依赖并启动服务..."
ssh ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
cd /var/www/projects/hxs-demo/backend

# 检查是否安装了 pnpm
if ! command -v pnpm &> /dev/null; then
    echo "📦 安装 pnpm..."
    npm install -g pnpm
fi

# 安装依赖
echo "📦 安装后端依赖..."
pnpm install --prod

# 检查是否安装了 PM2
if ! command -v pm2 &> /dev/null; then
    echo "📦 安装 PM2..."
    npm install -g pm2
fi

# 停止旧服务（如果存在）
pm2 stop tts-proxy 2>/dev/null || true
pm2 delete tts-proxy 2>/dev/null || true

# 启动新服务
echo "🚀 启动 TTS 代理服务..."
pm2 start ecosystem.config.js

# 保存 PM2 配置
pm2 save

# 显示服务状态
pm2 status

echo ""
echo "✅ 后端服务启动完成"
ENDSSH

if [ $? -ne 0 ]; then
    echo "❌ 后端服务启动失败"
    exit 1
fi

echo ""
echo "🎉 部署完成！"
echo ""
echo "📋 部署信息："
echo "   前端路径: ${FRONTEND_PATH}"
echo "   后端路径: ${BACKEND_PATH}"
echo "   域名: https://hss.daozishule.cn"
echo ""
echo "🔍 验证部署："
echo "   1. 访问 https://hss.daozishule.cn"
echo "   2. 进入 AI 智能体页面"
echo "   3. 发送消息测试"
echo ""
echo "📊 查看后端日志："
echo "   ssh ${SERVER_USER}@${SERVER_IP}"
echo "   pm2 logs tts-proxy"
echo ""
