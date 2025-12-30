<template>
  <div class="fixed inset-0 bg-[#0f172a] flex flex-col font-sans" id="page-agent-chat">
    <!-- 背景装饰 - 科幻光效 -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div class="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl filter"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl filter"></div>
      <div class="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-600/10 rounded-full blur-3xl filter"></div>
    </div>

    <!-- 顶部导航栏 -->
    <div class="flex-shrink-0 bg-[#0f172a]/80 backdrop-blur-md py-3 px-4 border-b border-white/10 z-10">
      <div class="flex items-center justify-between">
        <button class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" @click="handleBack">
          <i class="fa-solid fa-arrow-left text-white"></i>
        </button>

        <div class="flex items-center space-x-3">
          <div class="relative">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <i class="fa-solid fa-robot text-white text-lg"></i>
            </div>
            <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0f172a]"></div>
          </div>
          <!-- <div>
            <h1 class="text-base font-black italic text-white tracking-wide">AI COACH</h1>
            <p class="text-[10px] text-cyan-400 font-medium tracking-wider uppercase">Intelligent Agent</p>
          </div> -->
        </div>

        <button class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" @click="toggleSettings">
          <i class="fa-solid fa-gear text-white"></i>
        </button>
      </div>
    </div>

    <!-- 聊天消息区域 -->
    <div class="flex-1 overflow-y-auto px-4 py-4 z-10 scroll-smooth" ref="chatContainer">
      <!-- 欢迎消息 -->
      <div v-if="messages.length === 0" class="text-center py-12">
        <div class="relative w-28 h-28 mx-auto mb-6">
          <div class="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div
            class="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center border-4 border-[#0f172a] shadow-2xl">
            <i class="fa-solid fa-robot text-white text-5xl"></i>
          </div>
        </div>
        <h2 class="text-2xl font-black italic text-white mb-2 tracking-wide">READY TO TRAIN?</h2>
        <p class="text-sm text-gray-400 mb-8 max-w-xs mx-auto">我是你的专属 AI 运动教练，随时为你提供专业的训练建议和计划。</p>

        <!-- 快捷问题 -->
        <div class="space-y-3 max-w-sm mx-auto">
          <button v-for="(question, index) in quickQuestions" :key="index"
            class="w-full group bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 rounded-xl px-4 py-3.5 text-sm text-left transition-all duration-300 flex items-center"
            @click="sendQuickQuestion(question)">
            <span class="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-bolt text-cyan-400 text-xs"></i>
            </span>
            <span class="text-gray-200 group-hover:text-white transition-colors">{{ question }}</span>
            <i class="fa-solid fa-chevron-right text-gray-600 ml-auto group-hover:text-cyan-400 transition-colors text-xs"></i>
          </button>
        </div>
      </div>

      <!-- 聊天消息列表 -->
      <div v-else class="space-y-6">
        <div v-for="(message, index) in messages" :key="index" class="flex"
          :class="message.type === 'user' ? 'justify-end' : 'justify-start'">
          
          <!-- AI 消息 -->
          <div v-if="message.type === 'ai'" class="flex items-start space-x-3 max-w-[85%]">
            <div
              class="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-900/50 mt-1">
              <i class="fa-solid fa-robot text-white text-xs"></i>
            </div>
            <div class="flex-1">
              <div class="bg-[#1e293b] border border-white/10 rounded-2xl rounded-tl-none px-5 py-4 shadow-lg backdrop-blur-sm" 
                   :class="message.error ? 'border-red-500/50 bg-red-900/20' : ''">
                <!-- 使用 v-html 渲染 Markdown -->
                <div 
                  v-if="message.contentHtml && !message.error" 
                  class="text-sm markdown-content text-gray-200"
                  v-html="message.contentHtml">
                </div>
                <!-- 错误消息或纯文本 -->
                <p v-else class="text-sm whitespace-pre-wrap leading-relaxed" :class="message.error ? 'text-red-400' : 'text-gray-200'">
                  <i v-if="message.error" class="fa-solid fa-exclamation-circle mr-1"></i>
                  {{ message.content }}
                </p>
                
                <!-- 加载音频状态 -->
                <div v-if="message.isLoadingAudio" class="flex items-center space-x-2 mt-3 pt-3 border-t border-white/5 text-xs text-cyan-400">
                  <div class="flex space-x-1">
                    <div class="w-1 h-3 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 0s"></div>
                    <div class="w-1 h-3 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                    <div class="w-1 h-3 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
                  </div>
                  <span>正在生成语音...</span>
                </div>
                
                <!-- 正常状态 -->
                <div v-else class="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                  <span class="text-[10px] text-gray-500 font-mono">{{ message.time }}</span>
                  <button 
                    v-if="!message.error && ttsEnabled"
                    class="text-xs flex items-center space-x-1.5 transition-colors px-2 py-1 rounded-md hover:bg-white/5"
                    :class="isPlayingAudio ? 'text-cyan-400 cursor-not-allowed' : 'text-gray-400 hover:text-cyan-400'"
                    :disabled="isPlayingAudio"
                    @click="playTTS(message.content)">
                    <i class="fa-solid" :class="isPlayingAudio ? 'fa-spinner fa-spin' : 'fa-volume-high'"></i>
                    <span>{{ isPlayingAudio ? 'Playing' : 'Play' }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 用户消息 -->
          <div v-else class="flex items-start space-x-3 max-w-[85%]">
            <div class="order-1 flex-1">
              <div class="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl rounded-tr-none px-5 py-4 shadow-lg shadow-blue-900/30">
                <p class="text-sm text-white whitespace-pre-wrap leading-relaxed font-medium">{{ message.content }}</p>
              </div>
              <span class="text-[10px] text-gray-500 mt-1 block text-right font-mono mr-1">{{ message.time }}</span>
            </div>
          </div>
        </div>

        <!-- 正在输入提示 -->
        <div v-if="isTyping" class="flex items-start space-x-3">
          <div
            class="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-900/50 mt-1">
            <i class="fa-solid fa-robot text-white text-xs"></i>
          </div>
          <div class="bg-[#1e293b] border border-white/10 rounded-2xl rounded-tl-none px-4 py-3 shadow-lg">
            <div class="flex space-x-1.5 h-5 items-center">
              <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 0s"></div>
              <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
              <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 底部占位 -->
      <div class="h-10"></div>
    </div>

    <!-- 设置面板 -->
    <div v-if="showSettings" class="fixed inset-0 bg-black/80 z-50 flex items-end backdrop-blur-sm" @click="showSettings = false">
      <div class="bg-[#1e293b] rounded-t-3xl w-full max-h-[70vh] overflow-y-auto border-t border-white/10" @click.stop>
        <!-- 设置标题 -->
        
        <div class="sticky top-0 bg-[#1e293b] border-b border-white/10 px-6 py-5 z-100 backdrop-blur-md">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-black italic text-white tracking-wide">设置</h2>
            <button class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10" @click="showSettings = false">
              <i class="fa-solid fa-times text-gray-400"></i>
            </button>
          </div>
        </div>

        <!-- 设置内容 -->
        <div class="p-6 space-y-8">
          <!-- TTS 开关 -->
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-base font-bold text-white">声音输出</h3>
              <p class="text-xs text-gray-400 mt-1">开启AI反馈</p>
            </div>
            <button 
              class="relative w-12 h-6 rounded-full transition-colors duration-300"
              :class="ttsEnabled ? 'bg-cyan-600' : 'bg-gray-600'"
              @click="ttsEnabled = !ttsEnabled">
              <div 
                class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-md"
                :class="ttsEnabled ? 'transform translate-x-6' : ''">
              </div>
            </button>
          </div>

          <!-- 音色选择 -->
          <div v-if="ttsEnabled">
            <h3 class="text-base font-bold text-white mb-4">音色选择</h3>
            <div class="space-y-3">
              <button
                v-for="voice in VOICE_OPTIONS"
                :key="voice.value"
                class="w-full text-left px-4 py-4 rounded-xl transition-all border relative overflow-hidden group"
                :class="selectedVoice === voice.value 
                  ? 'bg-cyan-500/10 border-cyan-500' 
                  : 'bg-white/5 border-transparent hover:bg-white/10'"
                @click="selectedVoice = voice.value">
                <div class="flex items-center justify-between relative z-10">
                  <div class="flex-1">
                    <div class="font-bold text-gray-200" :class="selectedVoice === voice.value ? 'text-cyan-400' : ''">{{ voice.label }}</div>
                    <div class="text-xs text-gray-500 mt-1">{{ voice.description }}</div>
                  </div>
                  <div v-if="selectedVoice === voice.value" class="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <i class="fa-solid fa-check text-white text-xs"></i>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <!-- 当前播放状态 -->
          <div v-if="isPlayingAudio" class="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 rounded-xl p-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center animate-pulse">
                  <i class="fa-solid fa-volume-high text-white"></i>
                </div>
                <div>
                  <div class="font-bold text-white text-sm">Now Playing</div>
                  <div class="text-xs text-cyan-300">{{ VOICE_OPTIONS.find(v => v.value === selectedVoice)?.label }}</div>
                </div>
              </div>
              <button 
                class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                @click="stopTTS">
                <i class="fa-solid fa-stop text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部输入区域 -->
    <div class="flex-shrink-0 bg-[#0f172a] border-t border-white/10 px-4 py-4 z-20">
      <!-- 语音录音模式 -->
      <div v-if="isRecording" class="mb-4">
        <div class="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 border border-cyan-500/30 rounded-2xl p-6 text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-cyan-500/10 animate-pulse"></div>
          <div class="flex justify-center mb-3 relative z-10">
            <div
              class="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              <i class="fa-solid fa-microphone text-white text-2xl animate-pulse"></i>
            </div>
          </div>
          <p class="text-sm text-cyan-100 font-bold tracking-wider relative z-10">RECORDING...</p>
          <p class="text-xs text-cyan-300 mt-1 font-mono relative z-10">{{ recordingDuration }}s</p>
        </div>
      </div>

      <!-- 输入框区域 -->
      <div class="flex items-center space-x-3">
        <!-- 语音/文本切换按钮 -->
        <button class="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 hover:bg-white/20 transition-colors text-gray-300 hover:text-white border border-white/5"
          @click="toggleInputMode">
          <i v-if="isVoiceMode" class="fa-solid fa-keyboard"></i>
          <i v-else class="fa-solid fa-microphone"></i>
        </button>

        <!-- 文本输入模式 -->
        <div v-if="!isVoiceMode" class="flex-1 flex items-center space-x-3">
          <div class="flex-1 flex items-center relative">
            <textarea v-model="inputText" ref="textInput"
              class="w-full bg-[#1e293b] text-white rounded-2xl px-5 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-[#253248] transition-all max-h-32 placeholder-gray-500 border border-white/10"
              :class="isTyping ? 'opacity-50 cursor-not-allowed' : ''"
              placeholder="输入你的信息"
              rows="1" 
              :disabled="isTyping"
              @input="autoResize" 
              @keydown.enter.exact.prevent="sendMessage"></textarea>
          </div>
          <button
            class="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
            :disabled="!inputText.trim() || isTyping" 
            @click="sendMessage">
            <i class="fa-solid fa-paper-plane text-white text-sm"></i>
          </button>
        </div>

        <!-- 语音输入模式 -->
        <button v-else
          class="flex-1 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-900/50 active:scale-95 transition-all border border-cyan-400/20"
          :class="isTyping ? 'opacity-50 cursor-not-allowed' : ''"
          :disabled="isTyping"
          @touchstart="startRecording" 
          @touchend="stopRecording" 
          @mousedown="startRecording" 
          @mouseup="stopRecording">
          <i class="fa-solid fa-microphone text-white text-lg"></i>
          <span class="text-white font-bold tracking-wide">{{ isRecording ? '松开发送' : '长按说话' }}</span>
        </button>
      </div>

      <div class="safe-area-bottom"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import ChatService from '../services/chatService.js';
import TTSService, { VOICE_OPTIONS } from '../services/ttsService.js';
import { cleanMarkdownForTTS, markdownToHtml } from '../utils/textUtils.js';

export default {
  name: 'AgentChatPage',
  setup() {
    const router = useRouter();
    const chatContainer = ref(null);
    const textInput = ref(null);

    // Initialize ChatService
    const chatService = new ChatService();
    
    // Initialize TTSService
    const ttsService = new TTSService();
    
    // AbortController for API requests
    let abortController = null;

    // 状态管理
    const messages = ref([]);
    const inputText = ref('');
    const isVoiceMode = ref(false);
    const isRecording = ref(false);
    const recordingDuration = ref(0);
    const isTyping = ref(false);
    const showMoreOptions = ref(false);
    const showSettings = ref(false);
    const selectedVoice = ref('Cherry');
    const isPlayingAudio = ref(false);
    const ttsEnabled = ref(true);

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
      
      // 停止当前正在播放的 TTS
      ttsService.stopCurrentAudio();
      isPlayingAudio.value = false;
      
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

      // 创建新的 AbortController
      abortController = new AbortController();

      try {
        // 调用 DeepSeek API（传递不包含当前消息的历史和 abort signal）
        const response = await chatService.sendMessage(userMessage, conversationHistory, abortController.signal);
        
        // 如果启用了 TTS，先添加加载状态的消息
        if (ttsEnabled.value && response) {
          const loadingMessage = {
            type: 'ai',
            content: response,
            contentHtml: markdownToHtml(response),  // 添加 HTML 版本
            time: getCurrentTime(),
            isLoadingAudio: true  // 标记为正在加载音频
          };
          messages.value.push(loadingMessage);
          scrollToBottom();

          // 清理 Markdown 标记用于 TTS
          const cleanText = cleanMarkdownForTTS(response);

          // 异步生成 TTS，完成后更新消息状态并播放
          ttsService.synthesizeAndPlay(
            cleanText,  // 使用清理后的文本
            selectedVoice.value,
            () => {
              // TTS 开始播放，移除加载状态
              loadingMessage.isLoadingAudio = false;
              isPlayingAudio.value = true;
            },
            () => {
              isPlayingAudio.value = false;
            },
            (error) => {
              console.error('TTS 播放失败:', error);
              loadingMessage.isLoadingAudio = false;
              isPlayingAudio.value = false;
            }
          );
        } else {
          // 如果未启用 TTS，直接添加消息
          messages.value.push({
            type: 'ai',
            content: response,
            contentHtml: markdownToHtml(response),
            time: getCurrentTime()
          });
        }
      } catch (error) {
        // 如果是用户主动取消，不显示错误消息
        if (error.name === 'AbortError' || error.name === 'CanceledError') {
          console.log('请求已取消');
        } else {
          // 显示错误消息
          messages.value.push({
            type: 'ai',
            content: error.message,
            time: getCurrentTime(),
            error: true
          });
        }
      } finally {
        // 移除输入指示器
        isTyping.value = false;
        abortController = null;
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
        ttsService.stopCurrentAudio();
      }
    };

    // 播放 TTS
    const playTTS = (text) => {
      // 先停止当前播放
      ttsService.stopCurrentAudio();
      
      // 清理 Markdown 标记
      const cleanText = cleanMarkdownForTTS(text);
      
      ttsService.synthesizeAndPlay(
        cleanText,
        selectedVoice.value,
        () => {
          isPlayingAudio.value = true;
        },
        () => {
          isPlayingAudio.value = false;
        },
        (error) => {
          console.error('TTS 播放失败:', error);
          isPlayingAudio.value = false;
        }
      );
    };

    // 停止 TTS 播放
    const stopTTS = () => {
      ttsService.stopCurrentAudio();
      isPlayingAudio.value = false;
    };

    // 切换设置面板
    const toggleSettings = () => {
      showSettings.value = !showSettings.value;
      showMoreOptions.value = false;
    };

    // 清理函数 - 中断所有进行中的操作
    const cleanup = () => {
      // 中断 API 请求
      if (abortController) {
        abortController.abort();
        abortController = null;
      }
      
      // 停止 TTS 播放
      ttsService.stopCurrentAudio();
      
      // 清除输入状态
      isTyping.value = false;
      isPlayingAudio.value = false;
    };

    // 返回按钮处理
    const handleBack = () => {
      cleanup();
      router.back();
    };

    onMounted(() => {
      scrollToBottom();
    });

    // 组件卸载前清理
    onBeforeUnmount(() => {
      cleanup();
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
      showSettings,
      selectedVoice,
      isPlayingAudio,
      ttsEnabled,
      quickQuestions,
      VOICE_OPTIONS,
      sendMessage,
      sendQuickQuestion,
      toggleInputMode,
      startRecording,
      stopRecording,
      autoResize,
      clearChat,
      playTTS,
      stopTTS,
      toggleSettings,
      handleBack,
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
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Markdown 内容样式 - 深色模式适配 */
.markdown-content {
  color: #e2e8f0; /* gray-200 */
  line-height: 1.6;
}

.markdown-content :deep(h1),
.markdown-content :deep(h2),
.markdown-content :deep(h3) {
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #f8fafc; /* slate-50 */
}

.markdown-content :deep(h1) {
  font-size: 1.25rem;
}

.markdown-content :deep(h2) {
  font-size: 1.125rem;
}

.markdown-content :deep(h3) {
  font-size: 1rem;
}

.markdown-content :deep(p) {
  margin-bottom: 0.5rem;
}

.markdown-content :deep(strong) {
  font-weight: 700;
  color: #ffffff;
}

.markdown-content :deep(em) {
  font-style: italic;
  color: #22d3ee; /* cyan-400 */
}

.markdown-content :deep(code) {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
  font-family: 'Courier New', monospace;
  color: #22d3ee; /* cyan-400 */
}

.markdown-content :deep(pre) {
  background-color: #0f172a; /* slate-900 */
  color: #f8fafc;
  padding: 0.75rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 0.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.markdown-content :deep(pre code) {
  background-color: transparent;
  padding: 0;
  color: #f8fafc;
  font-size: 0.875rem;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
}

.markdown-content :deep(li) {
  margin-bottom: 0.25rem;
}

.markdown-content :deep(ul) {
  list-style-type: disc;
}

.markdown-content :deep(ol) {
  list-style-type: decimal;
}

.markdown-content :deep(blockquote) {
  border-left: 3px solid #06b6d4; /* cyan-500 */
  padding-left: 0.75rem;
  margin: 0.5rem 0;
  color: #94a3b8; /* slate-400 */
  font-style: italic;
  background: rgba(6, 182, 212, 0.05);
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.markdown-content :deep(a) {
  color: #22d3ee; /* cyan-400 */
  text-decoration: underline;
}

.markdown-content :deep(a:hover) {
  color: #67e8f9; /* cyan-300 */
}

.markdown-content :deep(hr) {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0.75rem 0;
}

.markdown-content :deep(del) {
  text-decoration: line-through;
  color: #64748b; /* slate-500 */
}
</style>
