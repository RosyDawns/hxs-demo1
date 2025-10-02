<template>
  <div
    class="page bg-gradient-to-b from-white to-blue-50 min-h-screen flex flex-col"
    id="page-ai-assistant"
  >
    <div class=" sticky top-0 z-50 bg-white py-3 px-4 mb-2 flex justify-between items-center">
      <div class="flex items-center">
        <button
          class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          @click="toggleConversationList"
        >
          <i class="fa-solid fa-bars text-dark"></i>
        </button>
      </div>

      <div class="flex items-center space-x-3">
        <button
          class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          @click="handleNewConversation"
        >
          <i class="fa-solid fa-clone"></i>
        </button>
      </div>
    </div>

    <!-- 对话记录列表 - 根据showConversationList状态显示/隐藏 -->
    <div v-if="showConversationList" class="px-4 mb-4">
      <div class="bg-white rounded-xl p-4 shadow-md">
        <h3 class="text-sm font-bold mb-3">历史对话</h3>
        <div class="space-y-2">
          <div 
            v-for="(conversation, index) in conversationHistory" 
            :key="index" 
            class="p-2 rounded-lg hover:bg-gray-50 cursor-pointer text-sm"
            @click="selectConversation(index)"
          >
            {{ conversation.query }}
            <span class="text-xs text-gray-400 block">{{ conversation.time }}</span>
          </div>
        </div>
        <button class="text-xs text-primary mt-2" @click="toggleConversationList">关闭</button>
      </div>
    </div>

    <!-- 主体内容区 -->
    <div class="flex-1 px-4 py-2 flex flex-col pb-14">
      <!-- AI形象和时间 -->
      <div class="flex items-center mb-4">
        <img
          src="@images/img-8.jpg"
          alt="大狮兄"
          class="w-10 h-10 object-cover rounded-full mr-2"
        >
        <span class="text-xs text-gray">大狮兄</span>
        <span class="text-xs text-gray ml-2">9:41</span>
      </div>

      <!-- 快速查询卡片模块 - 只在未显示推荐列表时显示 -->
      <div v-if="!showRecommendations" class="mb-6 flex gap-3">
        <!-- 健身唤醒师推荐卡片 -->
        <div class="flex-1 bg-white rounded-xl p-4 shadow-sm border-2 border-pink-100 relative overflow-hidden">
          <div class="absolute top-0 right-0 text-3xl p-2 text-pink-200">
            👟
          </div>
          <div class="pt-4 pb-2">
            <p class="text-sm font-medium">帮我推荐一位附近的健身唤醒师</p>
          </div>
          <div class="flex justify-end">
            <button class="bg-black text-white text-xs py-1 px-3 rounded-full flex items-center" @click="handleRecommendationClick">
              <i class="fa-solid fa-comment-dots"></i>试试
            </button>
          </div>
        </div>
        
        <!-- 瑜伽老师推荐卡片 -->
        <div class="flex-1 bg-white rounded-xl p-4 shadow-sm border-2 border-blue-100 relative overflow-hidden">
          <div class="absolute top-0 right-0 text-3xl p-2 text-blue-200">
            🧘
          </div>
          <div class="pt-4 pb-2">
            <p class="text-sm font-medium">找瑜伽老师学习基础动作</p>
          </div>
          <div class="flex justify-end">
            <button class="bg-black text-white text-xs py-1 px-3 rounded-full flex items-center" @click="handleRecommendationClick">
              <i class="fa-solid fa-comment-dots"></i>试试
            </button>
          </div>
        </div>
      </div>

      <!-- 对话区域 - 只在显示推荐列表时显示 -->
      <div v-if="showRecommendations" class="mb-6">
        <!-- 用户提问 -->
        <div class="flex justify-end mb-4">
          <div class="bg-white rounded-2xl p-4 max-w-[80%] shadow-sm">
            <p class="text-sm">{{ currentQuery }}</p>
          </div>
        </div>
        
        <!-- AI回答 -->
        <div class="mb-4">
          <div class="bg-white rounded-2xl p-4 max-w-[80%] shadow-sm">
            <p class="text-sm mb-3">根据您的需求，我为您整理了以下推荐</p>
            <h3 class="font-bold text-sm mb-2">游泳一对一教练推荐</h3>
            <p class="text-sm mb-2">为您推荐李教练、赵教练和张教练，都擅长儿童游泳教学，需要为您展示他们的详细信息吗？</p>
          </div>
        </div>
      </div>

      <!-- 推荐列表区域 - 只在显示推荐列表时显示 -->
      <div v-if="showRecommendations" class="flex-1 overflow-y-auto">
        <!-- 推荐教练列表 -->
        <div class="space-y-4">
          <!-- 教练1 -->
          <div class="bg-white rounded-2xl p-4 shadow-sm">
            <div class="flex justify-between items-start mb-3">
              <img
                src="https://picsum.photos/id/1005/100/100"
                alt="李教练"
                class="w-16 h-16 object-cover rounded-full"
              >
              <div class="flex-1 ml-3">
                <h4 class="font-bold text-sm">李教练</h4>
                <p class="text-xs text-gray">游泳教练</p>
                <p class="text-xs text-gray mt-1">国家二级运动员 | 8年教学经验</p>
                <div class="flex items-center mt-1">
                  <div class="flex text-xs text-warning">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                  </div>
                  <span class="text-xs text-gray ml-1">评分4.8</span>
                </div>
                 <div class="text-xs text-gray">距离 <span class="text-primary">1.2</span> 公里</div>
              </div>
              <div class="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded">
                查看主页
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2 mb-3">
              <div class="bg-gray-50 p-2 rounded-lg">
                <p class="text-xs text-gray">体验课</p>
                <p class="text-sm font-bold text-primary">¥88</p>
              </div>
              <div class="bg-gray-50 p-2 rounded-lg">
                <p class="text-xs text-gray">单次课</p>
                <p class="text-sm font-bold text-primary">¥200</p>
              </div>
              <div class="bg-gray-50 p-2 rounded-lg">
                <p class="text-xs text-gray">10次卡</p>
                <p class="text-sm font-bold text-primary">¥1680</p>
              </div>
            </div>
          </div>
          <!-- 教练2 -->
          <div class="bg-white rounded-2xl p-4 shadow-sm">
            <div class="flex justify-between items-start mb-3">
              <img
                src="https://picsum.photos/id/1011/100/100"
                alt="赵教练"
                class="w-16 h-16 object-cover rounded-full"
              >
              <div class="flex-1 ml-3">
                <h4 class="font-bold text-sm">赵教练</h4>
                <p class="text-xs text-gray">游泳教练</p>
                <p class="text-xs text-gray mt-1">国家一级运动员 | 10年教学经验</p>
                <div class="flex items-center mt-1">
                  <div class="flex text-xs text-warning">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <span class="text-xs text-gray ml-1">评分4.9</span>
                </div>
                <div class="text-xs text-gray">距离 <span class="text-primary">1.5</span> 公里</div>
              </div>
              <div class="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded">
                查看主页
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2 mb-3">
              <div class="bg-gray-50 p-2 rounded-lg">
                <p class="text-xs text-gray">体验课</p>
                <p class="text-sm font-bold text-primary">¥98</p>
              </div>
              <div class="bg-gray-50 p-2 rounded-lg">
                <p class="text-xs text-gray">单次课</p>
                <p class="text-sm font-bold text-primary">¥220</p>
              </div>
              <div class="bg-gray-50 p-2 rounded-lg">
                <p class="text-xs text-gray">10次卡</p>
                <p class="text-sm font-bold text-primary">¥1880</p>
              </div>
            </div>
          </div>
          <!-- 教练3 -->
          <div class="bg-white rounded-2xl p-4 shadow-sm">
            <div class="flex justify-between items-start mb-3">
              <img
                src="https://picsum.photos/id/1012/100/100"
                alt="张教练"
                class="w-16 h-16 object-cover rounded-full"
              >
              <div class="flex-1 ml-3">
                <h4 class="font-bold text-sm">张教练</h4>
                <p class="text-xs text-gray">游泳教练</p>
                <p class="text-xs text-gray mt-1">国家二级运动员 | 6年教学经验</p>
                <div class="flex items-center mt-1">
                  <div class="flex text-xs text-warning">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                  </div>
                  <span class="text-xs text-gray ml-1">评分4.6</span>
                </div>
                <div class="text-xs text-gray">距离 <span class="text-primary">1.5</span> 公里</div>
              </div>
              <div class="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded">
                查看主页
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2 mb-3">
              <div class="bg-gray-50 p-2 rounded-lg">
                <p class="text-xs text-gray">体验课</p>
                <p class="text-sm font-bold text-primary">¥80</p>
              </div>
              <div class="bg-gray-50 p-2 rounded-lg">
                <p class="text-xs text-gray">单次课</p>
                <p class="text-sm font-bold text-primary">¥180</p>
              </div>
              <div class="bg-gray-50 p-2 rounded-lg">
                <p class="text-xs text-gray">10次卡</p>
                <p class="text-sm font-bold text-primary">¥1580</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 操作按钮区域 - 只在显示推荐列表时显示 -->
      <div v-if="showRecommendations" class="mt-4 mb-6">
        <div class="flex space-x-3 mb-3">
          <button class="flex-1 bg-gray-100 text-gray text-sm py-2 rounded-full">
            换一批
          </button>
          <button class="flex-1 bg-primary text-white text-sm py-2 rounded-full">
            去寻找
          </button>
        </div>
      </div>

      <!-- 输入区域 - 语音/文本切换 -->
      <div class="w-full flex fixed bottom-20 px-4 left-0">
        <!-- 切换按钮 -->
        <div @click="toggleInputMode" class="w-11 h-11 rounded-full mr-2 bg-white flex items-center justify-center">
          <i v-if="isVoiceMode" class="fa-solid fa-keyboard"></i>
          <i v-else class="fa-solid fa-microphone"></i>
        </div>
        
        <div class="flex items-center flex-1">
          <!-- 文本输入模式 -->
          <div v-if="!isVoiceMode" class="w-full flex items-center">
            <input
              v-model="inputText"
              type="text"
              class="h-11 flex-1 bg-white text-primary rounded-full font-medium px-4 shadow-lg focus:outline-none"
              placeholder="请输入您的问题..."
            >
            <button
              class="ml-2 h-11 w-11 bg-primary text-white rounded-full flex items-center justify-center"
              @click="handleTextInputConfirm"
            >
              OK
            </button>
          </div>
          
          <!-- 语音输入模式 -->
          <div v-else class="w-full flex items-center">
            <button
              class="h-11 flex-1 bg-white text-primary rounded-full font-medium flex items-center justify-center space-x-2 shadow-lg hover:bg-primary/90 transition-colors duration-300"
              @mousedown="startVoiceRecording"
              @mouseup="stopVoiceRecording"
              @touchstart="startVoiceRecording"
              @touchend="stopVoiceRecording"
            >
              <i class="fa-solid fa-microphone text-xl"></i>
              <span :class="isRecording ? 'text-primary animate-pulse' : ''">{{
                isRecording ? "正在录音..." : "按住说话"
              }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <FooterNav activePage="ai" />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import FooterNav from "../components/FooterNav.vue";

export default {
  name: "AIAssistantPage",
  components: {
    FooterNav,
  },
  setup() {
    const router = useRouter();
    const isRecording = ref(false);
    // 控制推荐列表显示状态
    const showRecommendations = ref(false);
    // 当前查询内容
    const currentQuery = ref("帮我在附近找一个游泳一对一教练，8岁2年经验小朋友，耐心一些，专业过硬，请推荐一下。");
    // 输入模式控制：true为语音模式，false为文本模式
    const isVoiceMode = ref(true);
    // 文本输入内容
    const inputText = ref('');
    // 对话记录列表显示状态
    const showConversationList = ref(false);
    // 模拟对话历史记录
    const conversationHistory = ref([
      {
        query: "帮我推荐一位附近的健身唤醒师",
        time: "今天 09:30"
      },
      {
        query: "找瑜伽老师学习基础动作",
        time: "今天 08:45"
      },
      {
        query: "帮我在附近找一个游泳一对一教练",
        time: "昨天 16:20"
      },
      {
        query: "推荐一位篮球私教",
        time: "昨天 14:10"
      }
    ]);

    // 处理推荐按钮点击
    const handleRecommendationClick = () => {
      showRecommendations.value = true;
      console.log("显示推荐列表");
    };

    // 开始录音
    const startVoiceRecording = () => {
      isRecording.value = true;
      console.log("开始录音");
    };

    // 停止录音并显示推荐列表
    const stopVoiceRecording = () => {
      isRecording.value = false;
      console.log("停止录音");
      // 显示推荐列表
      showRecommendations.value = true;
      // 模拟处理录音结果
      setTimeout(() => {
        // 这里可以根据实际录音内容更新currentQuery
        currentQuery.value = "我需要一位游泳教练";
        // 将新对话添加到历史记录
        addToConversationHistory(currentQuery.value);
      }, 500);
    };

    // 切换输入模式
    const toggleInputMode = () => {
      isVoiceMode.value = !isVoiceMode.value;
      console.log(`切换到${isVoiceMode.value ? '语音' : '文本'}输入模式`);
    };

    // 处理文本输入确认
    const handleTextInputConfirm = () => {
      if (inputText.value.trim()) {
        currentQuery.value = inputText.value.trim();
        showRecommendations.value = true;
        // 将新对话添加到历史记录
        addToConversationHistory(currentQuery.value);
        // 清空输入框
        inputText.value = '';
        console.log("确认文本输入：", currentQuery.value);
      }
    };

    // 切换对话列表显示
    const toggleConversationList = () => {
      showConversationList.value = !showConversationList.value;
      console.log(`对话列表${showConversationList.value ? '显示' : '隐藏'}`);
    };

    // 选择对话记录
    const selectConversation = (index) => {
      const selectedConversation = conversationHistory.value[index];
      currentQuery.value = selectedConversation.query;
      showRecommendations.value = true;
      showConversationList.value = false;
      console.log("选择对话记录：", selectedConversation.query);
    };

    // 添加到对话历史
    const addToConversationHistory = (query) => {
      // 检查是否已存在相同的查询
      const exists = conversationHistory.value.some(item => item.query === query);
      if (!exists) {
        // 获取当前时间
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeText = `今天 ${hours}:${minutes}`;
        
        // 添加到历史记录的开头
        conversationHistory.value.unshift({
          query: query,
          time: timeText
        });
        
        // 限制历史记录数量
        if (conversationHistory.value.length > 10) {
          conversationHistory.value.pop();
        }
      }
    };

    // 处理教练详情
    const handleCoachDetail = (coachId) => {
      console.log(`查看教练详情: ${coachId}`);
      router.push(`/ouyang`); // 使用现有的教练详情页路由
    };

    // 处理预约教练
    const handleReserveCoach = (coachId) => {
      console.log(`预约教练: ${coachId}`);
      // 实现预约逻辑
    };

    // 处理咨询教练
    const handleConsultCoach = (coachId) => {
      console.log(`咨询教练: ${coachId}`);
      router.push("/chat"); // 跳转到聊天页面
    };

    // 更换推荐
    const handleChangeRecommendations = () => {
      console.log("更换推荐教练");
      // 实现更换推荐的逻辑
    };

    // 前往搜索
    const handleGoSearch = () => {
      console.log("前往搜索页面");
      router.push("/teacher-list"); // 跳转到教练列表页
    };

    // 新建对话 - 重置页面内容
    const handleNewConversation = () => {
      console.log("新建对话");
      showRecommendations.value = false;
      currentQuery.value = "";
      inputText.value = '';
      // 可以添加其他重置逻辑
    };

    // 切换对话 - 这里保留原函数名但实际使用toggleConversationList
    const handleSwitchConversation = () => {
      toggleConversationList();
    };

    return {
      isRecording,
      showRecommendations,
      currentQuery,
      isVoiceMode,
      inputText,
      showConversationList,
      conversationHistory,
      startVoiceRecording,
      stopVoiceRecording,
      toggleInputMode,
      handleTextInputConfirm,
      toggleConversationList,
      selectConversation,
      handleRecommendationClick,
      handleCoachDetail,
      handleReserveCoach,
      handleConsultCoach,
      handleChangeRecommendations,
      handleGoSearch,
      handleNewConversation,
      handleSwitchConversation
    };
  },
};
</script>

<style scoped>
/* 自定义动画 */
@keyframes pulse {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
