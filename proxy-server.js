/**
 * 简单的代理服务器，用于解决阿里云 TTS API 的 CORS 问题
 * 运行: node proxy-server.js
 */

import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;

// 阿里云 TTS 配置
const ALIYUN_API_KEY = 'sk-0bf9eb9351ef473593ac3b36d94a1bd0';
const ALIYUN_BASE_URL = 'https://dashscope.aliyuncs.com/api/v1';

// 启用 CORS
app.use(cors());
app.use(express.json());

// TTS 代理端点
app.post('/api/tts', async (req, res) => {
  try {
    const { text, voice = 'Cherry', language_type = 'Chinese' } = req.body;

    console.log(`[TTS] 请求合成: ${text.substring(0, 50)}... 音色: ${voice}`);

    // 调用阿里云 TTS API
    const response = await fetch(`${ALIYUN_BASE_URL}/services/aigc/multimodal-generation/generation`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ALIYUN_API_KEY}`,
        'Content-Type': 'application/json',
        'X-DashScope-SSE': 'enable'
      },
      body: JSON.stringify({
        model: 'qwen3-tts-flash',
        input: {
          text,
          voice,
          language_type
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[TTS] API 错误: ${response.status} - ${errorText}`);
      return res.status(response.status).json({ 
        error: `TTS API 请求失败: ${response.status}`,
        details: errorText
      });
    }

    // 设置 SSE 响应头
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // 流式转发响应
    response.body.pipe(res);

    // 处理连接关闭
    req.on('close', () => {
      console.log('[TTS] 客户端断开连接');
    });

  } catch (error) {
    console.error('[TTS] 代理错误:', error);
    res.status(500).json({ 
      error: '代理服务器错误',
      message: error.message 
    });
  }
});

// 健康检查端点
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'TTS Proxy Server is running' });
});

app.listen(PORT, () => {
  console.log(`\n🎙️  TTS 代理服务器已启动`);
  console.log(`📡 监听端口: http://localhost:${PORT}`);
  console.log(`✅ CORS 已启用`);
  console.log(`🔑 API Key: ${ALIYUN_API_KEY.substring(0, 10)}...`);
  console.log(`\n准备接收 TTS 请求...\n`);
});
