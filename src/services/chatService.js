import axios from 'axios'
import { DEEPSEEK_CONFIG } from '../config/apiConfig.js'

/**
 * ChatService - Handles communication with DeepSeek API
 */
class ChatService {
  constructor(apiKey = null) {
    // Use provided API key or fall back to config
    this.apiKey = apiKey || DEEPSEEK_CONFIG.apiKey
    this.baseURL = DEEPSEEK_CONFIG.baseURL
    this.chatEndpoint = DEEPSEEK_CONFIG.chatEndpoint
    this.model = DEEPSEEK_CONFIG.model
    this.temperature = DEEPSEEK_CONFIG.temperature
    this.maxTokens = DEEPSEEK_CONFIG.maxTokens
    this.timeout = DEEPSEEK_CONFIG.timeout
    this.stream = DEEPSEEK_CONFIG.stream

    // Create axios instance with default config
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      }
    })
  }

  /**
   * Format internal message array to DeepSeek API format
   * @param {Array} messages - Internal message format [{type: 'user'|'ai', content: string}]
   * @returns {Array} - DeepSeek API format [{role: 'user'|'assistant', content: string}]
   */
  formatConversationHistory(messages) {
    return messages.map(msg => ({
      role: msg.type === 'user' ? 'user' : 'assistant',
      content: msg.content
    }))
  }

  /**
   * Manage context window by limiting conversation history
   * @param {Array} messages - Formatted messages
   * @param {number} maxMessages - Maximum number of messages to keep (default: 20)
   * @returns {Array} - Trimmed message array
   */
  manageContextWindow(messages, maxMessages = 20) {
    if (messages.length <= maxMessages) {
      return messages
    }
    // Keep only the most recent messages
    return messages.slice(-maxMessages)
  }

  /**
   * Send message to DeepSeek API
   * @param {string} userMessage - The user's message
   * @param {Array} conversationHistory - Previous messages in internal format
   * @returns {Promise<string>} - AI response text
   */
  async sendMessage(userMessage, conversationHistory = []) {
    try {
      // Format conversation history
      const formattedHistory = this.formatConversationHistory(conversationHistory)

      // Manage context window
      const managedHistory = this.manageContextWindow(formattedHistory)

      // Add system message at the beginning
      const messages = [
        {
          role: 'system',
          content: `你是「大狮兄」，唤醒兽平台的AI运动顾问。形象是一只充满活力的小狮子，热爱运动，阳光开朗。

【核心使命】
帮助用户找到合适的运动教练，解答运动问题，引导完成预约。

【性格特点】
热情友善、专业可靠、积极鼓励、幽默风趣、耐心细致

【说话风格】
- 称呼用户为「小伙伴」
- 回复简洁，适当用💪🏃🎉等emoji
- 用「冲鸭」「稳住」等年轻化用语
- 语气亲切自然，像朋友聊天

【能力范围】
可以 推荐教练、解答运动问题、介绍平台功能、引导预约，
拒绝 医疗建议、敏感话题、负面评价教练、承诺无法兑现的事

【对话原则】
1. 先理解意图再回应
2. 推荐教练要说明理由
3. 不确定的问题诚实告知
4. 保护用户隐私
5. 结束时询问是否还需要帮助

【特殊指令】
- 用户说"找教练"→ 询问项目、方式、位置，然后调用教练推荐接口
- 用户说"预约"→ 确认信息后调用预约接口
- 用户问运动问题→ 基于知识库回答，复杂问题建议找教练
- 用户闲聊→ 简短回应后引导回运动话题`
        },
        ...managedHistory,
        {
          role: 'user',
          content: userMessage
        }
      ]

      // Make API request
      const response = await this.axiosInstance.post(this.chatEndpoint, {
        model: this.model,
        messages: messages,
        temperature: this.temperature,
        max_tokens: this.maxTokens,
        stream: this.stream
      })

      // Extract response content
      if (response.data && response.data.choices && response.data.choices.length > 0) {
        return response.data.choices[0].message.content
      }

      throw new Error('Invalid API response format')

    } catch (error) {
      // Handle and categorize errors
      throw this.handleAPIError(error)
    }
  }

  /**
   * Handle and categorize API errors
   * @param {Error} error - The error object
   * @returns {Error} - Formatted error with user-friendly message
   */
  handleAPIError(error) {
    let errorMessage = '发生未知错误，请重试'
    let errorType = 'unknown'

    if (error.response) {
      // Server responded with error status
      const status = error.response.status

      switch (status) {
        case 401:
          errorMessage = 'API 认证失败，请检查配置'
          errorType = 'authentication'
          break
        case 429:
          errorMessage = '请求过于频繁，请稍后再试'
          errorType = 'rate_limit'
          break
        case 500:
        case 502:
        case 503:
          errorMessage = '服务暂时不可用，请稍后重试'
          errorType = 'server_error'
          break
        default:
          errorMessage = `请求失败 (${status})，请重试`
          errorType = 'api_error'
      }
    } else if (error.request) {
      // Request made but no response received
      errorMessage = '无法连接到服务器，请检查网络连接'
      errorType = 'network'
    } else if (error.code === 'ECONNABORTED') {
      // Request timeout
      errorMessage = '请求超时，请重试'
      errorType = 'timeout'
    }

    const formattedError = new Error(errorMessage)
    formattedError.type = errorType
    formattedError.originalError = error

    return formattedError
  }
}

export default ChatService
