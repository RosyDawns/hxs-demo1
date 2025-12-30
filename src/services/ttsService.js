import axios from 'axios'

/**
 * TTS Service - 阿里云通义千问 TTS 集成
 * 文档: https://help.aliyun.com/zh/model-studio/qwen-tts
 */

// TTS 配置
export const TTS_CONFIG = {
  apiKey: 'sk-0bf9eb9351ef473593ac3b36d94a1bd0',
  // 使用本地代理服务器
  proxyURL: 'http://localhost:3001/api/tts',
  model: 'qwen3-tts-flash'
}

// 音色列表（qwen3-tts-flash-2025-11-27 支持的音色）
export const VOICE_OPTIONS = [
  { value: 'Cherry', label: '芊悦 Cherry', description: '阳光积极、亲切自然小姐姐' },
  { value: 'Serena', label: '苏瑶 Serena', description: '温柔小姐姐' },
  { value: 'Ethan', label: '晨煦 Ethan', description: '阳光、温暖、活力、朝气' },
  { value: 'Chelsie', label: '千雪 Chelsie', description: '二次元虚拟女友' },
  { value: 'Momo', label: '茉兔 Momo', description: '撒娇搞怪，逗你开心' },
  { value: 'Vivian', label: '十三 Vivian', description: '拽拽的、可爱的小暴躁' },
  { value: 'Moon', label: '月白 Moon', description: '率性帅气的月白' },
  { value: 'Maia', label: '四月 Maia', description: '知性与温柔的碰撞' },
  { value: 'Kai', label: '凯 Kai', description: '耳朵的一场SPA' },
  { value: 'Nofish', label: '不吃鱼 Nofish', description: '不会翘舌音的设计师' },
  { value: 'Bella', label: '萌宝 Bella', description: '喝酒不打醉拳的小萝莉' },
  { value: 'Jennifer', label: '詹妮弗 Jennifer', description: '品牌级、电影质感般美语女声' },
  { value: 'Ryan', label: '甜茶 Ryan', description: '节奏拉满，戏感炸裂' },
  { value: 'Katerina', label: '卡捷琳娜 Katerina', description: '御姐音色，韵律回味十足' },
  { value: 'Aiden', label: '艾登 Aiden', description: '精通厨艺的美语大男孩' },
  { value: 'Sunny', label: '四川-晴儿 Sunny', description: '甜到你心里的川妹子' },
  { value: 'Dylan', label: '北京-晓东 Dylan', description: '北京胡同里长大的少年' },
  { value: 'Jada', label: '上海-阿珍 Jada', description: '风风火火的沪上阿姐' },
  { value: 'Rocky', label: '粤语-阿强 Rocky', description: '幽默风趣的阿强' },
  { value: 'Kiki', label: '粤语-阿清 Kiki', description: '甜美的港妹闺蜜' }
]

class TTSService {
  constructor() {
    this.proxyURL = TTS_CONFIG.proxyURL
    this.model = TTS_CONFIG.model
    this.audioContext = null
    this.currentSource = null
  }

  /**
   * 初始化 Web Audio API
   */
  initAudioContext() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    }
    return this.audioContext
  }

  /**
   * 停止当前播放
   */
  stopCurrentAudio() {
    if (this.currentSource) {
      try {
        this.currentSource.stop()
      } catch (e) {
        // 忽略已停止的错误
      }
      this.currentSource = null
    }
  }

  /**
   * 流式合成并播放语音
   * @param {string} text - 要合成的文本
   * @param {string} voice - 音色（默认 Cherry）
   * @param {Function} onStart - 开始播放回调
   * @param {Function} onEnd - 播放结束回调
   * @param {Function} onError - 错误回调
   */
  async synthesizeAndPlay(text, voice = 'Cherry', onStart, onEnd, onError) {
    try {
      // 停止当前播放
      this.stopCurrentAudio()

      // 初始化音频上下文
      const audioContext = this.initAudioContext()

      // 调用回调
      if (onStart) onStart()

      // 发起流式请求到代理服务器
      const response = await fetch(this.proxyURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: text,
          voice: voice,
          language_type: 'Chinese'
        })
      })

      if (!response.ok) {
        throw new Error(`TTS API 请求失败: ${response.status}`)
      }

      // 读取流式响应
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      const audioChunks = []

      while (true) {
        const { done, value } = await reader.read()
        
        if (done) break

        // 解码数据
        buffer += decoder.decode(value, { stream: true })
        
        // 处理 SSE 数据
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          if (line.startsWith('data:')) {
            try {
              const jsonStr = line.slice(5).trim()
              if (jsonStr === '[DONE]') continue
              
              const data = JSON.parse(jsonStr)
              
              // 提取音频数据
              if (data.output && data.output.audio && data.output.audio.data) {
                const base64Audio = data.output.audio.data
                const audioData = this.base64ToArrayBuffer(base64Audio)
                audioChunks.push(audioData)
              }
            } catch (e) {
              console.error('解析 SSE 数据失败:', e)
            }
          }
        }
      }

      // 合并所有音频块
      if (audioChunks.length > 0) {
        const totalLength = audioChunks.reduce((sum, chunk) => sum + chunk.byteLength, 0)
        const combinedAudio = new Uint8Array(totalLength)
        let offset = 0
        
        for (const chunk of audioChunks) {
          combinedAudio.set(new Uint8Array(chunk), offset)
          offset += chunk.byteLength
        }

        // 播放音频
        await this.playPCMAudio(combinedAudio.buffer, audioContext)
      }

      // 播放结束
      if (onEnd) onEnd()

    } catch (error) {
      console.error('TTS 合成失败:', error)
      if (onError) onError(error)
    }
  }

  /**
   * Base64 转 ArrayBuffer
   */
  base64ToArrayBuffer(base64) {
    const binaryString = atob(base64)
    const bytes = new Uint8Array(binaryString.length)
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i)
    }
    return bytes.buffer
  }

  /**
   * 播放 PCM 音频数据
   * @param {ArrayBuffer} pcmData - PCM 音频数据
   * @param {AudioContext} audioContext - 音频上下文
   */
  async playPCMAudio(pcmData, audioContext) {
    return new Promise((resolve, reject) => {
      try {
        // PCM 数据转换为 AudioBuffer
        // 通义千问 TTS 返回的是 16-bit PCM, 24kHz, 单声道
        const int16Array = new Int16Array(pcmData)
        const float32Array = new Float32Array(int16Array.length)
        
        // 转换为 -1.0 到 1.0 的浮点数
        for (let i = 0; i < int16Array.length; i++) {
          float32Array[i] = int16Array[i] / 32768.0
        }

        // 创建 AudioBuffer
        const audioBuffer = audioContext.createBuffer(1, float32Array.length, 24000)
        audioBuffer.getChannelData(0).set(float32Array)

        // 创建音频源
        const source = audioContext.createBufferSource()
        source.buffer = audioBuffer
        source.connect(audioContext.destination)
        
        // 保存当前源以便停止
        this.currentSource = source

        // 播放结束事件
        source.onended = () => {
          this.currentSource = null
          resolve()
        }

        // 开始播放
        source.start(0)

      } catch (error) {
        reject(error)
      }
    })
  }
}

export default TTSService
