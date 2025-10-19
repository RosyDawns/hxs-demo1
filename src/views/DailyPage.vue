<template>
  <div class="page flex flex-col h-screen bg-gray-50" id="page-daily">
    <!-- 顶部导航 -->
    <header
      class="sticky top-0 z-50 bg-white border-b border-gray-100 pl-2 pr-8 flex items-center"
    >
      <button class="nav-back mr-3 text-dark" @click="$router.back()">
        <i class="fa-solid fa-angle-left text-xl"></i>
      </button>
      <div class="flex-1 flex items-center justify-center">
        <button
          class="px-3 py-3 text-sm"
          :class="
            activeTab === 'home'
              ? 'text-primary border-b-2 border-primary font-bold'
              : 'border-b-2 border-transparent text-gray'
          "
          @click="activeTab = 'home'"
        >
          主页
        </button>
        <button
          class="px-3 py-3 text-sm ml-5"
          :class="
            activeTab === 'activity'
              ? 'text-primary border-b-2 border-primary font-bold'
              : 'border-b-2 border-transparent text-gray'
          "
          @click="activeTab = 'activity'"
        >
          动态
        </button>
        <button
          class="px-3 py-3 text-sm ml-5"
          :class="
            activeTab === 'coach'
              ? 'text-primary border-b-2 border-primary font-bold'
              : 'border-b-2 border-transparent text-gray'
          "
          @click="activeTab = 'coach'"
        >
          唤醒师
        </button>
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="flex-1 overflow-y-auto pb-16">
      <DailyHome v-if="activeTab === 'home'" />
      <DailyActivity v-else-if="activeTab === 'activity'" />
      <DailyCoach v-else-if="activeTab === 'coach'" />
    </main>

    <!-- <FooterNav activePage="me" /> -->
  </div>
</template>

<script>
import FooterNav from "../components/FooterNav.vue";
import DailyHome from "../components/DailyHome.vue";
import DailyActivity from "../components/DailyActivity.vue";
import DailyCoach from "../components/DailyCoach.vue";

export default {
  name: "DailyPage",
  components: {
    FooterNav,
    DailyHome,
    DailyActivity,
    DailyCoach,
  },
  data() {
    return {
      activeTab: "home",
    };
  },
};
</script>

<style scoped>
.nav-back:active,
.nav-action:active {
  opacity: 0.7;
}
</style>
