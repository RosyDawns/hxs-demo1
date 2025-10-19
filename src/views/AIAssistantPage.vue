<template>
  <div class="page bg-white min-h-screen flex flex-col" id="page-ai-assistant">
    <div
      class="sticky top-0 z-50 bg-white py-3 px-4 mb-2 flex justify-between items-center"
    >
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

    <!-- 对话记录列表 - 全屏遮罩显示 -->
    <div
      v-if="showConversationList"
      class="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20"
      @click.self="toggleConversationList"
    >
      <div
        class="bg-white rounded-3xl p-6 mx-4 w-full max-w-md shadow-2xl max-h-[70vh] overflow-y-auto"
      >
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-bold">历史对话</h3>
          <button
            class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
            @click="toggleConversationList"
          >
            <i class="fa-solid fa-xmark text-gray-600"></i>
          </button>
        </div>
        <div class="space-y-3">
          <div
            v-for="(conversation, index) in conversationHistory"
            :key="index"
            class="p-3 rounded-xl hover:bg-gray-50 cursor-pointer border border-gray-100 transition-all"
            @click="selectConversation(index)"
          >
            <p class="text-sm font-medium text-gray-800">
              {{ conversation.query }}
            </p>
            <span class="text-xs text-gray-400 mt-1 block">{{
              conversation.time
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 主体内容区 -->
    <div class="flex-1 px-4 py-2 flex flex-col pb-14">
      <!-- AI形象和时间 -->
      <div class="flex items-center mb-5">
        <img
          src="@images/logo.png"
          alt="大狮兄"
          class="w-1/2 mx-auto object-cover"
        />
      </div>

      <!-- 快速查询卡片模块 - 只在未显示推荐列表时显示 -->
      <template v-if="!showRecommendations">
        <div class="mb-6 relative">
          <!-- 轮播容器 -->
          <div
            class="overflow-hidden py-3 px-3"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <div
              class="flex transition-transform duration-300 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <!-- 第一页 - 两个卡片 -->
              <div class="w-full flex-shrink-0 flex px-3">
                <!-- 健身唤醒师推荐卡片 -->
                <div
                  class="flex-1 bg-white rounded-4xl px-4 py-2 shadow-sm border-6 border-pink-100 relative overflow-hidden -rotate-z-6 z-1"
                  @click="
                    handleRecommendationClick('帮我推荐一位附近的健身唤醒师💪')
                  "
                >
                  <div class="pb-2">
                    <p class="text-pink-100 text-6xl">"</p>
                    <p class="text-sm font-medium">
                      帮我推荐一位附近的健身唤醒师💪
                    </p>
                  </div>
                  <div class="flex justify-end mt-2">
                    <button
                      class="bg-black text-white text-xs py-1 px-3 rounded-full flex items-center"
                    >
                      <i class="fa-solid fa-comment-dots mr-1"></i>试试
                    </button>
                  </div>
                </div>

                <!-- 瑜伽老师推荐卡片 -->
                <div
                  class="flex-1 bg-white rounded-4xl px-4 py-5 shadow-sm border-6 border-blue-100 relative overflow-hidden rotate-z-6"
                  @click="handleRecommendationClick('找瑜伽老师学习基础动作🧘')"
                >
                  <div class="pb-2">
                    <p class="text-blue-100 text-6xl">"</p>
                    <p class="text-sm font-medium">找瑜伽老师学习基础动作🧘</p>
                  </div>
                  <div class="flex justify-end mt-2">
                    <button
                      class="bg-black text-white text-xs py-1 px-3 rounded-full flex items-center"
                    >
                      <i class="fa-solid fa-comment-dots mr-1"></i>试试
                    </button>
                  </div>
                </div>
              </div>

              <!-- 第二页 - 两个卡片 -->
              <div class="w-full flex-shrink-0 flex px-3">
                <!-- 游泳教练推荐卡片 -->
                <div
                  class="flex-1 bg-white rounded-4xl px-4 py-2 shadow-sm border-6 border-green-100 relative overflow-hidden -rotate-z-6 z-1"
                  @click="
                    handleRecommendationClick('想找一位游泳教练学习蛙泳🏊')
                  "
                >
                  <div class="pb-2">
                    <p class="text-green-100 text-6xl">"</p>
                    <p class="text-sm font-medium">
                      想找一位游泳教练学习蛙泳🏊
                    </p>
                  </div>
                  <div class="flex justify-end mt-2">
                    <button
                      class="bg-black text-white text-xs py-1 px-3 rounded-full flex items-center"
                    >
                      <i class="fa-solid fa-comment-dots mr-1"></i>试试
                    </button>
                  </div>
                </div>

                <!-- 篮球教练推荐卡片 -->
                <div
                  class="flex-1 bg-white rounded-4xl px-4 py-5 shadow-sm border-6 border-orange-100 relative overflow-hidden rotate-z-6"
                  @click="
                    handleRecommendationClick('找个篮球私教提升投篮技巧🏀')
                  "
                >
                  <div class="pb-2">
                    <p class="text-orange-100 text-6xl">"</p>
                    <p class="text-sm font-medium">
                      找个篮球私教提升投篮技巧🏀
                    </p>
                  </div>
                  <div class="flex justify-end mt-2">
                    <button
                      class="bg-black text-white text-xs py-1 px-3 rounded-full flex items-center"
                    >
                      <i class="fa-solid fa-comment-dots mr-1"></i>试试
                    </button>
                  </div>
                </div>
              </div>

              <!-- 第三页 - 两个卡片 -->
              <div class="w-full flex-shrink-0 flex px-3">
                <!-- 舞蹈教练推荐卡片 -->
                <div
                  class="flex-1 bg-white rounded-4xl px-4 py-2 shadow-sm border-6 border-purple-100 relative overflow-hidden -rotate-z-6 z-1"
                  @click="handleRecommendationClick('想学习街舞找个专业老师💃')"
                >
                  <div class="pb-2">
                    <p class="text-purple-100 text-6xl">"</p>
                    <p class="text-sm font-medium">想学习街舞找个专业老师💃</p>
                  </div>
                  <div class="flex justify-end mt-2">
                    <button
                      class="bg-black text-white text-xs py-1 px-3 rounded-full flex items-center"
                    >
                      <i class="fa-solid fa-comment-dots mr-1"></i>试试
                    </button>
                  </div>
                </div>

                <!-- 羽毛球教练推荐卡片 -->
                <div
                  class="flex-1 bg-white rounded-4xl px-4 py-5 shadow-sm border-6 border-red-100 relative overflow-hidden rotate-z-6"
                  @click="handleRecommendationClick('想提升羽毛球水平找教练🏸')"
                >
                  <div class="pb-2">
                    <p class="text-red-100 text-6xl">"</p>
                    <p class="text-sm font-medium">想提升羽毛球水平找教练🏸</p>
                  </div>
                  <div class="flex justify-end mt-2">
                    <button
                      class="bg-black text-white text-xs py-1 px-3 rounded-full flex items-center"
                    >
                      <i class="fa-solid fa-comment-dots mr-1"></i>试试
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 左右切换按钮 -->
          <button
            v-if="currentSlide > 0"
            @click="previousSlide"
            class="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full shadow-lg flex items-center justify-center z-10"
          >
            <i class="fa-solid fa-chevron-left text-sm"></i>
          </button>
          <button
            v-if="currentSlide < totalSlides - 1"
            @click="nextSlide"
            class="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full shadow-lg flex items-center justify-center z-10"
          >
            <i class="fa-solid fa-chevron-right text-sm"></i>
          </button>

          <!-- 页面指示器 -->
          <div class="flex justify-center mt-4 space-x-2">
            <button
              v-for="index in totalSlides"
              :key="index"
              @click="goToSlide(index - 1)"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="
                currentSlide === index - 1 ? 'bg-primary w-6' : 'bg-gray-300'
              "
            ></button>
          </div>
        </div>
      </template>

      <!-- 对话区域 - 只在显示推荐列表时显示 -->
      <div v-if="showRecommendations" class="mb-2">
        <!-- 用户提问 -->
        <div class="flex justify-end mb-4">
          <div
            class="rounded-2xl p-4 max-w-[80%] shadow-sm"
            style="
              background-image: linear-gradient(
                to right,
                rgb(255 222 161),
                rgb(253 220 155)
              );
            "
          >
            <p class="text-sm">{{ currentQuery }}</p>
          </div>
        </div>

        <!-- AI回答 -->
        <div class="mb-2">
          <div class="bg-white rounded-2xl p-4 max-w-[80%] shadow-sm">
            <p class="text-sm mb-3">根据您的需求，我为您整理了以下推荐</p>
            <h3 class="font-bold text-sm mb-2">游泳一对一教练推荐</h3>
            <p class="text-sm mb-2">
              为您推荐李教练、赵教练和张教练，都擅长儿童游泳教学，需要为您展示他们的详细信息吗？
            </p>
          </div>
        </div>
      </div>

      <!-- 推荐列表区域 - 只在显示推荐列表时显示 -->
      <div v-if="showRecommendations" class="flex-1 overflow-y-auto">
        <!-- 推荐教练列表 -->
        <div class="space-y-4">
          <!-- 使用可复用组件渲染教练卡片 -->
          <HxsItem
            v-for="(coach, index) in recommendedCoaches"
            :key="coach.id"
            :coach="coach"
            @view-profile="handleCoachDetail"
          />
        </div>
      </div>

      <!-- 操作按钮区域 - 只在显示推荐列表时显示 -->
      <div v-if="showRecommendations" class="mt-4 mb-6">
        <div class="flex space-x-3 mb-3">
          <button
            class="flex-1 bg-gray-50 text-sm py-2 rounded-full"
            @click="handleChangeRecommendations"
          >
            换一批
          </button>
          <button
            class="flex-1 bg-gray-50 text-sm py-2 rounded-full"
            @click="handleGoSearch"
          >
            去寻找
          </button>
        </div>
      </div>

      <!-- 输入区域 - 语音/文本切换 -->
      <div class="w-full flex fixed bottom-20 px-4 left-0">
        <!-- 切换按钮 -->
        <div
          @click="toggleInputMode"
          class="w-11 h-11 rounded-full mr-2 bg-white shadow-lg flex items-center justify-center"
        >
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
            />
            <button
              class="ml-2 h-11 w-11 bg-primary text-white rounded-full shadow-lg flex items-center justify-center"
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
import FooterNav from "@/components/FooterNav.vue";
import HxsItem from "@/components/hxs-item.vue";

export default {
  name: "AIAssistantPage",
  components: {
    FooterNav,
    HxsItem,
  },
  setup() {
    const router = useRouter();
    const isRecording = ref(false);
    // 控制推荐列表显示状态
    const showRecommendations = ref(false);
    // 当前查询内容
    const currentQuery = ref(
      "帮我在附近找一个游泳一对一教练，8岁2年经验小朋友，耐心一些，专业过硬，请推荐一下。"
    );
    // 输入模式控制：true为语音模式，false为文本模式
    const isVoiceMode = ref(true);
    // 文本输入内容
    const inputText = ref("");
    // 对话记录列表显示状态
    const showConversationList = ref(false);
    // 轮播相关状态
    const currentSlide = ref(0);
    const totalSlides = ref(3); // 总共3页，每页2个卡片
    // 触摸滑动相关状态
    const touchStartX = ref(0);
    const touchEndX = ref(0);
    const minSwipeDistance = 50; // 最小滑动距离（像素）
    // 模拟对话历史记录
    const conversationHistory = ref([
      {
        query: "帮我推荐一位附近的健身唤醒师",
        time: "今天 09:30",
      },
      {
        query: "找瑜伽老师学习基础动作",
        time: "今天 08:45",
      },
      {
        query: "帮我在附近找一个游泳一对一教练",
        time: "昨天 16:20",
      },
      {
        query: "推荐一位篮球私教",
        time: "昨天 14:10",
      },
    ]);

    // 推荐教练数据
    const recommendedCoaches = ref([
      {
        id: "coach1",
        name: "李教练",
        type: "游泳教练",
        title: "国家二级运动员 | 8年教学经验",
        rating: 4.8,
        distance: 1.2,
        image: "https://picsum.photos/id/1005/100/100",
        prices: {
          trial: 88,
          single: 200,
          card10: 1680,
        },
      },
      {
        id: "coach2",
        name: "赵教练",
        type: "游泳教练",
        title: "国家一级运动员 | 10年教学经验",
        rating: 4.9,
        distance: 1.5,
        image: "https://picsum.photos/id/1011/100/100",
        prices: {
          trial: 98,
          single: 220,
          card10: 1880,
        },
      },
      {
        id: "coach3",
        name: "张教练",
        type: "游泳教练",
        title: "国家二级运动员 | 6年教学经验",
        rating: 4.6,
        distance: 1.5,
        image: "https://picsum.photos/id/1012/100/100",
        prices: {
          trial: 80,
          single: 180,
          card10: 1580,
        },
      },
    ]);

    // 处理推荐按钮点击
    const handleRecommendationClick = (content) => {
      currentQuery.value = content || "";
      showRecommendations.value = true;
      addToConversationHistory(currentQuery.value);
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
      console.log(`切换到${isVoiceMode.value ? "语音" : "文本"}输入模式`);
    };

    // 处理文本输入确认
    const handleTextInputConfirm = () => {
      if (inputText.value.trim()) {
        currentQuery.value = inputText.value.trim();
        showRecommendations.value = true;
        // 将新对话添加到历史记录
        addToConversationHistory(currentQuery.value);
        // 清空输入框
        inputText.value = "";
        console.log("确认文本输入：", currentQuery.value);
      }
    };

    // 切换对话列表显示
    const toggleConversationList = () => {
      showConversationList.value = !showConversationList.value;
      console.log(`对话列表${showConversationList.value ? "显示" : "隐藏"}`);
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
      const exists = conversationHistory.value.some(
        (item) => item.query === query
      );
      if (!exists) {
        // 获取当前时间
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const timeText = `今天 ${hours}:${minutes}`;

        // 添加到历史记录的开头
        conversationHistory.value.unshift({
          query: query,
          time: timeText,
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
      // 模拟更换推荐数据
      // 教练数据模拟数组
      const coachData = [
        {
          id: "coach1",
          name: "李教练",
          type: "游泳教练",
          title: "国家二级运动员 | 8年教学经验",
          rating: 4.8,
          distance: 1.2,
          image: "https://picsum.photos/id/1005/100/100",
        },
        {
          id: "coach2",
          name: "赵教练",
          type: "游泳教练",
          title: "国家一级运动员 | 10年教学经验",
          rating: 4.9,
          distance: 1.5,
          image: "https://picsum.photos/id/1011/100/100",
        },
        {
          id: "coach3",
          name: "张教练",
          type: "游泳教练",
          title: "国家二级运动员 | 6年教学经验",
          rating: 4.6,
          distance: 1.5,
          image: "https://picsum.photos/id/1012/100/100",
        },
        {
          id: "coach4",
          name: "王教练",
          type: "健身教练",
          title: "国际健身教练认证 | 5年教学经验",
          rating: 4.7,
          distance: 0.8,
          image: "https://picsum.photos/id/1010/100/100",
        },
        {
          id: "coach5",
          name: "陈教练",
          type: "瑜伽教练",
          title: "国际瑜伽联盟认证 | 7年教学经验",
          rating: 4.9,
          distance: 2.1,
          image: "https://picsum.photos/id/1000/100/100",
        },
        {
          id: "coach6",
          name: "刘教练",
          type: "篮球教练",
          title: "前职业运动员 | 9年教学经验",
          rating: 4.8,
          distance: 1.7,
          image: "https://picsum.photos/id/1001/100/100",
        },
      ];

      // 随机选择3个教练作为新的推荐
      const shuffledCoaches = [...coachData].sort(() => 0.5 - Math.random());
      const selectedCoaches = shuffledCoaches.slice(0, 3);

      // 更新对话内容和推荐标题
      currentQuery.value = `我需要${selectedCoaches[0].type}`;
      // 在实际应用中，这里应该更新UI显示新的教练数据
      // 这里通过重新显示推荐列表来模拟更新效果
      showRecommendations.value = false;
      setTimeout(() => {
        showRecommendations.value = true;
      }, 100);
      console.log(
        "已更换推荐教练：",
        selectedCoaches.map((c) => c.name)
      );
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
      inputText.value = "";
      // 可以添加其他重置逻辑
    };

    // 切换对话 - 这里保留原函数名但实际使用toggleConversationList
    const handleSwitchConversation = () => {
      toggleConversationList();
    };

    // 轮播控制方法
    const nextSlide = () => {
      if (currentSlide.value < totalSlides.value - 1) {
        currentSlide.value++;
      }
    };

    const previousSlide = () => {
      if (currentSlide.value > 0) {
        currentSlide.value--;
      }
    };

    const goToSlide = (index) => {
      currentSlide.value = index;
    };

    // 触摸事件处理
    const handleTouchStart = (e) => {
      touchStartX.value = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX.value = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const swipeDistance = touchStartX.value - touchEndX.value;

      // 向左滑动（显示下一页）
      if (swipeDistance > minSwipeDistance) {
        nextSlide();
      }
      // 向右滑动（显示上一页）
      else if (swipeDistance < -minSwipeDistance) {
        previousSlide();
      }

      // 重置触摸位置
      touchStartX.value = 0;
      touchEndX.value = 0;
    };

    return {
      isRecording,
      showRecommendations,
      currentQuery,
      isVoiceMode,
      inputText,
      showConversationList,
      conversationHistory,
      recommendedCoaches,
      currentSlide,
      totalSlides,
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
      handleSwitchConversation,
      nextSlide,
      previousSlide,
      goToSlide,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
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
