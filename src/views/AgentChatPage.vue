<template>
  <div class="fixed inset-0 bg-gradient-to-b from-purple-50 to-pink-50 flex flex-col" id="page-agent-chat">
    <!-- 顶部导航栏 -->
    <div class="flex-shrink-0 bg-white/80 backdrop-blur-md py-3 px-4 shadow-sm">
      <div class="flex items-center justify-between">
        <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center" @click="$router.back()">
          <i class="fa-solid fa-arrow-left text-gray-700"></i>
        </button>

        <div class="flex items-center space-x-2">
          <div
            class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <i class="fa-solid fa-robot text-white text-lg"></i>
          </div>
          <div>
            <h1 class="text-base font-bold text-gray-800">AI 智能体</h1>
          </div>
        </div>

        <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center" @click="clearChat">
          <i class="fa-solid fa-trash text-gray-700"></i>
        </button>
      </div>
    </div>

    <!-- 聊天消息区域 -->
    <div class="flex-1 overflow-y-auto px-4 py-4" ref="chatContainer">
      <!-- 欢迎消息 -->
      <div v-if="messages.length === 0" class="text-center py-12">
        <div
          class="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <i class="fa-solid fa-robot text-white text-5xl"></i>
        </div>
        <h2 class="text-xl font-bold text-gray-800 mb-2">你好！我是 AI 智能体</h2>
        <p class="text-sm text-gray-600 mb-6">我可以帮你找到合适的运动教练和课程</p>

        <!-- 快捷问题 -->
        <div class="space-y-2 max-w-sm mx-auto">
          <button v-for="(question, index) in quickQuestions" :key="index"
            class="w-full bg-white rounded-xl px-4 py-3 text-sm text-left shadow-sm hover:shadow-md transition-shadow"
            @click="sendQuickQuestion(question)">
            <i class="fa-solid fa-comment-dots text-purple-500 mr-2"></i>
            {{ question }}
          </button>
        </div>
      </div>

      <!-- 聊天消息列表 -->
      <div v-else class="space-y-4">
        <div v-for="(message, index) in messages" :key="index" class="flex"
          :class="message.type === 'user' ? 'justify-end' : 'justify-start'">
          <!-- AI 消息 -->
          <div v-if="message.type === 'ai'" class="flex items-start space-x-2 max-w-[80%]">
            <div
              class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <i class="fa-solid fa-robot text-white text-sm"></i>
            </div>
            <div class="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm" :class="message.error ? 'border-2 border-red-300' : ''">
              <p class="text-sm whitespace-pre-wrap" :class="message.error ? 'text-red-600' : 'text-gray-800'">
                <i v-if="message.error" class="fa-solid fa-exclamation-circle mr-1"></i>
                {{ message.content }}
              </p>
              <span class="text-xs text-gray-400 mt-1 block">{{ message.time }}</span>
            </div>
          </div>

          <!-- 用户消息 -->
          <div v-else class="flex items-start space-x-2 max-w-[80%]">
            <div class="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rounded-tr-none px-4 py-3 shadow-sm">
              <p class="text-sm text-white whitespace-pre-wrap">{{ message.content }}</p>
              <span class="text-xs text-purple-100 mt-1 block text-right">{{ message.time }}</span>
            </div>
          </div>
        </div>

        <!-- 正在输入提示 -->
        <div v-if="isTyping" class="flex items-start space-x-2">
          <div
            class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <i class="fa-solid fa-robot text-white text-sm"></i>
          </div>
          <div class="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
            <div class="flex space-x-1">
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0s"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 底部占位，防止内容被输入框遮挡 -->
      <div class="h-40"></div>
    </div>

    <!-- 底部输入区域 -->
    <div class="flex-shrink-0 bg-white border-t border-gray-200 px-4 py-3">
      <!-- 语音录音模式 -->
      <div v-if="isRecording" class="mb-3">
        <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 text-center">
          <div class="flex justify-center mb-2">
            <div
              class="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center animate-pulse">
              <i class="fa-solid fa-microphone text-white text-2xl"></i>
            </div>
          </div>
          <p class="text-sm text-gray-700 font-medium">正在录音...</p>
          <p class="text-xs text-gray-500 mt-1">{{ recordingDuration }}s</p>
        </div>
      </div>

      <!-- 输入框区域 -->
      <div class="flex items-end space-x-2">
        <!-- 语音/文本切换按钮 -->
        <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0"
          @click="toggleInputMode">
          <i v-if="isVoiceMode" class="fa-solid fa-keyboard text-gray-700"></i>
          <i v-else class="fa-solid fa-microphone text-gray-700"></i>
        </button>

        <!-- 文本输入模式 -->
        <div v-if="!isVoiceMode" class="flex-1 flex items-end space-x-2">
          <textarea v-model="inputText" ref="textInput"
            class="flex-1 bg-gray-100 rounded-2xl px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 max-h-32"
            placeholder="输入消息..." rows="1" @input="autoResize" @keydown.enter.exact.prevent="sendMessage"></textarea>
          <button
            class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0"
            :disabled="!inputText.trim() || isTyping" 
            :class="(inputText.trim() && !isTyping) ? 'opacity-100' : 'opacity-50'" 
            @click="sendMessage">
            <i class="fa-solid fa-paper-plane text-white"></i>
          </button>
        </div>

        <!-- 语音输入模式 -->
        <button v-else
          class="flex-1 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center space-x-2"
          @touchstart="startRecording" @touchend="stopRecording" @mousedown="startRecording" @mouseup="stopRecording">
          <i class="fa-solid fa-microphone text-white text-lg"></i>
          <span class="text-white font-medium">{{ isRecording ? '松开发送' : '按住说话' }}</span>
        </button>

        <!-- 更多功能按钮 -->
        <button v-if="!isVoiceMode"
          class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0"
          @click="showMoreOptions = !showMoreOptions">
          <i class="fa-solid fa-plus text-gray-700"></i>
        </button>
      </div>

      <!-- 更多选项面板 -->
      <div v-if="showMoreOptions && !isVoiceMode" class="mt-3 grid grid-cols-4 gap-3">
        <button class="flex flex-col items-center space-y-1">
          <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <i class="fa-solid fa-image text-blue-500"></i>
          </div>
          <span class="text-xs text-gray-600">图片</span>
        </button>
        <button class="flex flex-col items-center space-y-1">
          <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <i class="fa-solid fa-location-dot text-green-500"></i>
          </div>
          <span class="text-xs text-gray-600">位置</span>
        </button>
        <button class="flex flex-col items-center space-y-1">
          <div class="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
            <i class="fa-solid fa-file text-yellow-500"></i>
          </div>
          <span class="text-xs text-gray-600">文件</span>
        </button>
        <button class="flex flex-col items-center space-y-1">
          <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
            <i class="fa-solid fa-video text-purple-500"></i>
          </div>
          <span class="text-xs text-gray-600">视频</span>
        </button>
      </div>

      <div class="safe-area-bottom"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import ChatService from '../services/chatService.js';

export default {
  name: 'AgentChatPage',
  setup() {
    const router = useRouter();
    const chatContainer = ref(null);
    const textInput = ref(null);

    // Initialize ChatService
    const chatService = new ChatService();

    // 状态管理
    const messages = ref([]);
    const inputText = ref('');
    const isVoiceMode = ref(true);
    const isRecording = ref(false);
    const recordingDuration = ref(0);
    const isTyping = ref(false);
    const showMoreOptions = ref(false);

    let recordingTimer = null;

    // 快捷问题
    const quickQuestions = ref([
      '帮我推荐附近的健身教练',
      '我想学游泳，有什么建议吗？',
      '找一个瑜伽老师',
      '篮球私教推荐'
    ]);

    // 获取当前时间
    const getCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    };

    // 滚动到底部 - 简化版
    const scrollToBottom = () => {
      setTimeout(() => {
        if (chatContainer.value) {
          chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
        }
      }, 100);
    };

    // 发送消息
    const sendMessage = async () => {
      if (!inputText.value.trim()) return;

      const userMessage = inputText.value.trim();
      
      // 保存当前对话历史（不包括即将发送的消息）
      const conversationHistory = [...messages.value];
      
      // 添加用户消息到界面
      messages.value.push({
        type: 'user',
        content: userMessage,
        time: getCurrentTime()
      });

      inputText.value = '';
      scrollToBottom();

      // 显示输入指示器
      isTyping.value = true;

      try {
        // 调用 DeepSeek API（传递不包含当前消息的历史）
        const response = await chatService.sendMessage(userMessage, conversationHistory);
        
        // 添加 AI 回复
        messages.value.push({
          type: 'ai',
          content: response,
          time: getCurrentTime()
        });
      } catch (error) {
        // 显示错误消息
        messages.value.push({
          type: 'ai',
          content: error.message,
          time: getCurrentTime(),
          error: true
        });
      } finally {
        // 移除输入指示器
        isTyping.value = false;
        scrollToBottom();
      }
    };

    // 发送快捷问题
    const sendQuickQuestion = (question) => {
      inputText.value = question;
      sendMessage();
    };

    // 切换输入模式
    const toggleInputMode = () => {
      isVoiceMode.value = !isVoiceMode.value;
      showMoreOptions.value = false;
    };

    // 开始录音
    const startRecording = () => {
      isRecording.value = true;
      recordingDuration.value = 0;

      recordingTimer = setInterval(() => {
        recordingDuration.value++;
      }, 1000);
    };

    // 停止录音
    const stopRecording = () => {
      if (!isRecording.value) return;

      isRecording.value = false;
      clearInterval(recordingTimer);

      // 模拟语音识别结果
      if (recordingDuration.value > 0) {
        const voiceTexts = [
          '帮我推荐一位游泳教练',
          '我想学习健身',
          '附近有瑜伽课程吗',
          '找个篮球私教'
        ];
        inputText.value = voiceTexts[Math.floor(Math.random() * voiceTexts.length)];

        setTimeout(() => {
          sendMessage();
        }, 500);
      }

      recordingDuration.value = 0;
    };

    // 自动调整文本框高度
    const autoResize = () => {
      nextTick(() => {
        if (textInput.value) {
          textInput.value.style.height = 'auto';
          textInput.value.style.height = textInput.value.scrollHeight + 'px';
        }
      });
    };

    // 清空聊天
    const clearChat = () => {
      if (confirm('确定要清空聊天记录吗？')) {
        messages.value = [];
      }
    };

    onMounted(() => {
      scrollToBottom();
    });

    // 监听消息变化
    watch(() => messages.value, () => {
      scrollToBottom();
    }, { deep: true });

    return {
      chatContainer,
      textInput,
      messages,
      inputText,
      isVoiceMode,
      isRecording,
      recordingDuration,
      isTyping,
      showMoreOptions,
      quickQuestions,
      sendMessage,
      sendQuickQuestion,
      toggleInputMode,
      startRecording,
      stopRecording,
      autoResize,
      clearChat,
    };
  }
};
</script>

<style scoped>
.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}

/* 自定义滚动条 */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.3);
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.5);
}
</style>
