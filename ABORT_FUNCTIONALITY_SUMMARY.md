# API Request & TTS Abort Functionality

## 实现概述
当用户点击返回按钮或离开 `/agent-chat` 页面时，自动中断正在进行的 DeepSeek API 请求和 TTS 语音播放。

## 修改的文件

### 1. `src/views/AgentChatPage.vue`
**新增功能：**
- 添加 `AbortController` 用于取消 API 请求
- 添加 `cleanup()` 函数统一处理清理逻辑
- 添加 `handleBack()` 函数处理返回按钮点击
- 添加 `onBeforeUnmount()` 生命周期钩子，在组件卸载前自动清理

**关键代码：**
```javascript
// 创建 AbortController
let abortController = null;

// 发送消息时创建新的 controller
abortController = new AbortController();
const response = await chatService.sendMessage(
  userMessage, 
  conversationHistory, 
  abortController.signal  // 传递 signal
);

// 清理函数
const cleanup = () => {
  // 中断 API 请求
  if (abortController) {
    abortController.abort();
    abortController = null;
  }
  
  // 停止 TTS 播放
  ttsService.stopCurrentAudio();
  
  // 清除状态
  isTyping.value = false;
  isPlayingAudio.value = false;
};

// 返回按钮处理
const handleBack = () => {
  cleanup();
  router.back();
};

// 组件卸载前清理
onBeforeUnmount(() => {
  cleanup();
});
```

**错误处理：**
```javascript
catch (error) {
  // 如果是用户主动取消，不显示错误消息
  if (error.name === 'AbortError' || error.name === 'CanceledError') {
    console.log('请求已取消');
  } else {
    // 显示其他错误消息
    messages.value.push({
      type: 'ai',
      content: error.message,
      time: getCurrentTime(),
      error: true
    });
  }
}
```

### 2. `src/services/chatService.js`
**修改：**
- `sendMessage()` 方法新增 `signal` 参数（可选）
- 将 `signal` 传递给 axios 请求配置

**关键代码：**
```javascript
async sendMessage(userMessage, conversationHistory = [], signal = null) {
  // ... 其他代码
  
  const requestConfig = {
    model: this.model,
    messages: messages,
    temperature: this.temperature,
    max_tokens: this.maxTokens,
    stream: this.stream
  };

  const axiosConfig = signal ? { signal } : {};
  
  const response = await this.axiosInstance.post(
    this.chatEndpoint, 
    requestConfig, 
    axiosConfig
  );
  
  // ... 其他代码
}
```

## 功能特性

### 1. 自动中断 API 请求
- 使用 `AbortController` API 标准
- 当用户点击返回或页面卸载时，立即取消正在进行的 DeepSeek API 请求
- 避免不必要的网络流量和资源消耗

### 2. 停止 TTS 播放
- 调用 `ttsService.stopCurrentAudio()` 停止当前音频
- 清除音频播放状态

### 3. 清理 UI 状态
- 重置 `isTyping` 状态（移除"正在输入"动画）
- 重置 `isPlayingAudio` 状态（移除播放中标识）

### 4. 优雅的错误处理
- 区分用户主动取消和真实错误
- 用户取消时不显示错误消息，避免困扰
- 其他错误正常显示给用户

## 用户体验改进

1. **即时响应**：点击返回按钮立即停止所有操作
2. **资源节约**：不再浪费网络流量和 API 配额
3. **无干扰**：取消操作不会显示错误提示
4. **状态一致**：确保 UI 状态与实际操作同步

## 测试场景

1. ✅ 发送消息后立即点击返回 → API 请求被取消
2. ✅ TTS 播放中点击返回 → 音频立即停止
3. ✅ 正在输入状态下点击返回 → 状态正确清理
4. ✅ 通过浏览器后退按钮离开 → 自动清理
5. ✅ 路由跳转到其他页面 → 自动清理

## 技术细节

- **AbortController**：现代浏览器标准 API，用于取消 fetch/axios 请求
- **onBeforeUnmount**：Vue 3 生命周期钩子，在组件卸载前执行
- **cleanup 模式**：集中管理清理逻辑，避免代码重复
- **向后兼容**：signal 参数为可选，不影响现有调用

## 部署说明

代码已通过构建测试，可以直接部署到生产环境：
```bash
npm run build
# 将 dist 目录上传到服务器 /var/www/projects/hxs-demo/dist
```
