/**
 * DeepSeek API Configuration
 * API Documentation: https://api-docs.deepseek.com/zh-cn/
 */

export const DEEPSEEK_CONFIG = {
  // API Key - In production, use environment variables
  apiKey: import.meta.env.VITE_DEEPSEEK_API_KEY || 'sk-b816f2dde75341598dde441df259eca8',
  
  // API Base URL
  baseURL: 'https://api.deepseek.com',
  
  // API Endpoint
  chatEndpoint: '/chat/completions',
  
  // Model Configuration
  model: 'deepseek-chat',
  
  // Request Parameters
  temperature: 0.7,  // 0-2, higher = more creative
  maxTokens: 2000,   // Maximum response length
  timeout: 30000,    // 30 seconds
  
  // Streaming (not implemented in MVP)
  stream: false
}
