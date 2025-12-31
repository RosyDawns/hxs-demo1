import axios from 'axios'

/**
 * TTS Service - 阿里云通义千问 TTS 集成
 * 文档: https://help.aliyun.com/zh/model-studio/qwen-tts
 */

// TTS 配置
export const TTS_CONFIG = {
  apiKey: 'sk-0bf9eb9351ef473593ac3b36d94a1bd0',
  // 根据环境自动切换代理 URL
  proxyURL: import.meta.env.VITE_TTS_PROXY_URL || 'http://localhost:3001/api/tts',
  model: 'qwen3-tts-flash'
}

// 音色分类
export const VOICE_CATEGORIES = [
  { value: 'all', label: '全部' },
  { value: 'standard', label: '标准' },
  { value: 'dialect', label: '方言' }
]

// 音色列表（qwen3-tts-flash 支持的音色）
// 稳定版等同 qwen3-tts-flash-2025-09-18，共 17 种音色
// 文档: https://help.aliyun.com/zh/model-studio/qwen-tts
export const VOICE_OPTIONS = [
  // 标准音色
  { value: 'Cherry', label: '芩悦 Cherry', description: '阳光积极、亲切自然小姐姐', category: 'standard' },
  { value: 'Ethan', label: '晨煚 Ethan', description: '阳光、温暖、活力、朝气', category: 'standard' },
  { value: 'Nofish', label: '不吃鱼 Nofish', description: '不会翘舶音的设计师', category: 'standard' },
  { value: 'Jennifer', label: '詹妮弗 Jennifer', description: '品牌级、电影质感般美语女声', category: 'standard' },
  { value: 'Ryan', label: '甜茶 Ryan', description: '节奏拉满，戏感炸裂', category: 'standard' },
  { value: 'Katerina', label: '卡捷琳娜 Katerina', description: '御姐音色，韵律回味十足', category: 'standard' },
  { value: 'Elias', label: '墨讲师 Elias', description: '专业讲师，清晰条理', category: 'standard' },
  // 方言音色
  { value: 'Sunny', label: '四川-晴儿 Sunny', description: '甜到你心里的川妹子', category: 'dialect' },
  { value: 'Eric', label: '四川-程川 Eric', description: '跳脱市井的四川男子', category: 'dialect' },
  { value: 'Dylan', label: '北京-晓东 Dylan', description: '北京胡同里长大的少年', category: 'dialect' },
  { value: 'Jada', label: '上海-阿珍 Jada', description: '风风火火的沪上阿姐', category: 'dialect' },
  { value: 'Li', label: '南京-老李 Li', description: '耐心的瑶伽老师', category: 'dialect' },
  { value: 'Marcus', label: '陕西-秦川 Marcus', description: '面宽话短的老陕', category: 'dialect' },
  { value: 'Roy', label: '闽南-阿杰 Roy', description: '诩谐直爽的台湾哥仔', category: 'dialect' },
  { value: 'Peter', label: '天津-李彼得 Peter', description: '天津相声，专业捧哏', category: 'dialect' },
  { value: 'Rocky', label: '粤语-阿强 Rocky', description: '幽默风趣的阿强', category: 'dialect' },
  { value: 'Kiki', label: '粤语-阿清 Kiki', description: '甜美的港妹闺蜜', category: 'dialect' }
]

class TTSService {
  constructor() {
    this.proxyURL = TTS_CONFIG.proxyURL
    this.model = TTS_CONFIG.model
    this.audioContext = null
    this.currentSource = null
    this.currentAbortController = null  // 用于中断 fetch 请求
    this.currentPlaybackId = null  // 当前播放的唯一 ID
  }

  /**
   * 初始化 Web Audio API
   */
  async initAudioContext() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    }
    
    // 确保 AudioContext 处于运行状态
    if (this.audioContext.state === 'suspended') {
      try {
        await this.audioContext.resume()
      } catch (e) {
        console.warn('AudioContext resume failed:', e)
      }
    }
    
    return this.audioContext
  }

  /**
   * 停止当前播放和请求
   */
  stopCurrentAudio() {
    // 清除当前播放 ID，使正在进行的播放失效
    this.currentPlaybackId = null
    
    // 停止音频播放
    if (this.currentSource) {
      try {
        this.currentSource.stop()
      } catch (e) {
        // 忽略已停止的错误
      }
      this.currentSource = null
    }
    
    // 中断 fetch 请求
    if (this.currentAbortController) {
      const controller = this.currentAbortController
      this.currentAbortController = null  // 先清空引用
      try {
        controller.abort()
      } catch (e) {
        // 忽略已中断的错误
      }
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
      // 停止当前播放和请求
      this.stopCurrentAudio()

      // 生成新的播放 ID
      const playbackId = Date.now() + Math.random()
      this.currentPlaybackId = playbackId

      // 创建新的 AbortController
      this.currentAbortController = new AbortController()
      const signal = this.currentAbortController.signal

      // 初始化音频上下文（确保处于运行状态）
      const audioContext = await this.initAudioContext()

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
        }),
        signal: signal  // 使用局部变量而非实例属性
      })

      if (!response.ok) {
        throw new Error(`TTS API 请求失败: ${response.status}`)
      }

      // 读取流式响应
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      let hasStartedPlaying = false
      let audioQueue = []
      let isPlaying = false

      // 处理音频队列播放
      const playNextChunk = async () => {
        // 检查播放 ID 是否仍然有效
        if (this.currentPlaybackId !== playbackId || isPlaying || audioQueue.length === 0) return
        
        isPlaying = true
        const chunk = audioQueue.shift()
        
        try {
          // 再次检查播放 ID
          if (this.currentPlaybackId === playbackId) {
            await this.playPCMAudio(chunk, audioContext)
          }
        } catch (error) {
          console.error('播放音频块失败:', error)
        }
        
        isPlaying = false
        
        // 继续播放下一块（检查播放 ID）
        if (this.currentPlaybackId === playbackId && audioQueue.length > 0) {
          playNextChunk()
        }
      }

      while (true) {
        // 检查播放 ID 是否仍然有效
        if (this.currentPlaybackId !== playbackId) {
          break
        }
        
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
                
                // 第一次收到音频数据时调用 onStart
                if (!hasStartedPlaying && this.currentPlaybackId === playbackId) {
                  hasStartedPlaying = true
                  if (onStart) onStart()
                }
                
                // 添加到播放队列
                audioQueue.push(audioData)
                
                // 开始播放
                playNextChunk()
              }
            } catch (e) {
              console.error('解析 SSE 数据失败:', e)
            }
          }
        }
      }

      // 等待所有音频播放完成
      const waitForPlayback = () => {
        return new Promise((resolve) => {
          const checkInterval = setInterval(() => {
            // 如果播放 ID 已改变或播放完成，清理并返回
            if (this.currentPlaybackId !== playbackId || (!isPlaying && audioQueue.length === 0)) {
              clearInterval(checkInterval)
              resolve()
            }
          }, 100)
        })
      }

      await waitForPlayback()

      // 如果播放 ID 已改变（被停止），不调用 onEnd
      if (this.currentPlaybackId !== playbackId) {
        return
      }

      // 播放结束，清理 AbortController
      this.currentAbortController = null
      if (onEnd) onEnd()

    } catch (error) {
      // 如果是用户主动中断，不报错
      if (error.name === 'AbortError') {
        console.log('TTS 请求已取消')
        return
      }
      
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
