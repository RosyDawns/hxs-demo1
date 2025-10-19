<template>
  <div class="page flex flex-col h-screen bg-gray-50" id="page-checkin">
    <!-- 顶部导航 -->
    <header
      class="sticky top-0 z-50 bg-white border-b border-gray-100 p-3 flex items-center"
    >
      <button class="nav-back mr-3 text-dark" @click="$router.back()">
        <i class="fa fa-angle-left text-xl"></i>
      </button>
      <div class="flex items-center">
        <img
          src="@images/img-15.jpg"
          alt="用户头像"
          class="w-8 h-8 mr-2 rounded-full border-2 border-gray-200"
        />
        <span class="text-xs">张晓明</span>
      </div>
    </header>

    <!-- 打卡类型标签页 -->
    <div class="bg-white border-b border-gray-100">
      <div class="flex items-center justify-between px-3">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="switchTab(tab.id)"
          :class="
            activeTab === tab.id
              ? 'text-black border-b-2 border-primary font-bold'
              : 'text-black'
          "
          class="py-3 whitespace-nowrap text-sm transition-colors"
        >
          {{ tab.name }}
        </button>
      </div>
    </div>

    <!-- 主要内容区 -->
    <main class="flex-1 overflow-y-auto">
      <!-- 日历组件 -->
      <CheckInCalendar
        :checked-dates="checkedDates"
        @day-selected="onDaySelected"
        @month-changed="onMonthChanged"
      />

      <!-- 动态组件切换 -->
      <component :is="currentComponent" @submit="handleCheckInSubmit" />

      <!-- 底部提示 -->
      <div class="px-4 pb-4">
        <p class="text-center text-gray-400" style="font-size: 10px">
          为了您的隐私，唤醒兽的公开动态仅唤醒家可见，私密动态则仅您己可见
        </p>
      </div>
    </main>

    <!-- 成功提示Toast -->
    <transition name="fade">
      <div
        v-if="showToast"
        class="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
      >
        <i class="fa fa-check-circle mr-2"></i>
        {{ toastMessage }}
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import CheckInCalendar from "../components/CheckInCalendar.vue";
import DietCheckIn from "../components/DietCheckIn.vue";
import ExerciseCheckIn from "../components/ExerciseCheckIn.vue";
import MoodCheckIn from "../components/MoodCheckIn.vue";
import SleepCheckIn from "../components/SleepCheckIn.vue";
import MetabolismCheckIn from "../components/MetabolismCheckIn.vue";

export default {
  name: "CheckInPage",
  components: {
    CheckInCalendar,
    DietCheckIn,
    ExerciseCheckIn,
    MoodCheckIn,
    SleepCheckIn,
    MetabolismCheckIn,
  },
  setup() {
    const activeTab = ref("diet");

    const tabs = [
      { id: "diet", name: "饮食打卡", component: "DietCheckIn" },
      { id: "exercise", name: "运动打卡", component: "ExerciseCheckIn" },
      { id: "mood", name: "心情打卡", component: "MoodCheckIn" },
      { id: "sleep", name: "睡眠打卡", component: "SleepCheckIn" },
      { id: "metabolism", name: "代谢打卡", component: "MetabolismCheckIn" },
    ];

    // 模拟已打卡日期数据
    const checkedDates = ref(["2025-10-12", "2025-10-13"]);

    const showToast = ref(false);
    const toastMessage = ref("");

    // 当前显示的组件
    const currentComponent = computed(() => {
      const tab = tabs.find((t) => t.id === activeTab.value);
      return tab ? tab.component : "DietCheckIn";
    });

    const activeTabName = computed(() => {
      const tab = tabs.find((t) => t.id === activeTab.value);
      return tab ? tab.name : "打卡";
    });

    const switchTab = (tabId) => {
      activeTab.value = tabId;
    };

    const onDaySelected = (dateStr) => {
      console.log("选择日期:", dateStr);
      // 这里可以加载该日期的打卡记录
    };

    const onMonthChanged = ({ year, month }) => {
      console.log("切换月份:", year, month);
      // 这里可以加载新月份的打卡数据
    };

    const handleCheckInSubmit = (checkInData) => {
      console.log("打卡数据:", checkInData);

      // 添加今天到已打卡日期
      const today = new Date().toISOString().split("T")[0];
      if (!checkedDates.value.includes(today)) {
        checkedDates.value.push(today);
      }

      // 显示成功提示
      const visibilityText =
        checkInData.visibility === "public" ? "公开" : "私密";
      toastMessage.value = `${visibilityText}打卡成功！`;
      showToast.value = true;

      // 3秒后隐藏提示
      setTimeout(() => {
        showToast.value = false;
      }, 3000);

      // 这里可以调用API保存打卡数据
      // saveTCheckIn(checkInData)
    };

    const showHistory = () => {
      console.log("查看打卡记录");
      // 这里可以跳转到打卡记录页面或显示记录列表
    };

    return {
      activeTab,
      tabs,
      activeTabName,
      currentComponent,
      checkedDates,
      showToast,
      toastMessage,
      switchTab,
      onDaySelected,
      onMonthChanged,
      handleCheckInSubmit,
      showHistory,
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
