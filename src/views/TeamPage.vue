<template>
  <div class="page flex flex-col h-screen bg-gray-50" id="page-team">
    <CommonHeader>
      <template #center>
        <h2 class="text-base font-bold text-black">醒狮团队</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-12 pb-4">
      <!-- 我的团队信息 -->
      <div class="bg-gradient-to-r from-orange-400 to-orange-500 mx-4 mt-4 rounded-2xl p-6 text-white">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-bold mb-1">我的团队</h3>
            <p class="text-sm opacity-90">团队ID: {{ teamId }}</p>
          </div>
          <div class="text-right">
            <p class="text-2xl font-bold">{{ teamMembers }}</p>
            <p class="text-xs opacity-90">成员数</p>
          </div>
        </div>
      </div>

      <!-- 团队数据 -->
      <div class="grid grid-cols-3 gap-3 px-4 mt-4">
        <div class="bg-white rounded-xl p-3 text-center">
          <p class="text-2xl font-bold text-orange-500">{{ teamOrders }}</p>
          <p class="text-xs text-gray-500 mt-1">团队订单</p>
        </div>
        <div class="bg-white rounded-xl p-3 text-center">
          <p class="text-2xl font-bold text-orange-500">¥{{ teamIncome }}</p>
          <p class="text-xs text-gray-500 mt-1">团队收益</p>
        </div>
        <div class="bg-white rounded-xl p-3 text-center">
          <p class="text-2xl font-bold text-orange-500">{{ activeMembers }}</p>
          <p class="text-xs text-gray-500 mt-1">活跃成员</p>
        </div>
      </div>

      <!-- 邀请奖励 -->
      <div class="bg-white mx-4 mt-4 rounded-2xl p-4">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-sm font-bold">邀请奖励</h4>
          <span class="text-xs text-orange-500">规则说明 ></span>
        </div>
        <div class="bg-orange-50 rounded-lg p-3">
          <p class="text-sm font-medium mb-2">邀请好友加入，双方均可获得：</p>
          <div class="space-y-1 text-xs text-gray-600">
            <p>• 新人礼包：价值100元优惠券</p>
            <p>• 现金奖励：每成功邀请1人奖励20元</p>
            <p>• 团队提成：团队成员订单可获得5%提成</p>
          </div>
        </div>
      </div>

      <!-- 团队成员列表 -->
      <div class="bg-white mx-4 mt-4 rounded-2xl p-4">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-sm font-bold">团队成员</h4>
          <button class="text-xs text-orange-500 nav-action">查看全部 <i class="fa-solid fa-angle-right ml-1"></i></button>
        </div>
        <div class="space-y-3">
          <div v-for="member in members" :key="member.id" class="flex items-center">
            <img :src="member.avatar" alt="" class="w-10 h-10 rounded-full object-cover">
            <div class="ml-3 flex-1">
              <p class="text-sm font-medium">{{ member.name }}</p>
              <p class="text-xs text-gray-500 mt-0.5">加入于 {{ member.joinDate }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm font-bold text-orange-500">{{ member.contribution }}</p>
              <p class="text-xs text-gray-400">贡献值</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 邀请按钮 -->
      <div class="px-4 mt-6 mb-4 space-y-3">
        <button class="w-full bg-orange-500 text-white py-3 rounded-full font-medium nav-action shadow-lg" @click="handleInvite">
          <i class="fa-solid fa-user-plus mr-2"></i>
          邀请好友加入
        </button>
        <button class="w-full bg-white text-orange-500 py-3 rounded-full font-medium nav-action border border-orange-500" @click="handleCreateTeam">
          <i class="fa-solid fa-users mr-2"></i>
          创建我的团队
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "TeamPage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      teamId: "T20240115",
      teamMembers: 28,
      teamOrders: 156,
      teamIncome: "12,880",
      activeMembers: 24,
      members: [
        { id: 1, name: "张三", joinDate: "2024-01-10", contribution: 1200, avatar: "https://picsum.photos/id/1005/100/100" },
        { id: 2, name: "李四", joinDate: "2024-01-12", contribution: 980, avatar: "https://picsum.photos/id/1027/100/100" },
        { id: 3, name: "王五", joinDate: "2024-01-14", contribution: 1500, avatar: "https://picsum.photos/id/1011/100/100" },
      ],
    };
  },
  methods: {
    handleInvite() {
      alert("邀请功能开发中");
    },
    handleCreateTeam() {
      alert("创建团队功能开发中");
    },
  },
};
</script>
