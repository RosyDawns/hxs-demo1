<template>
  <div class="page flex flex-col h-screen bg-gray-50" id="page-wallet">
    <CommonHeader>
      <template #center>
        <h2 class="text-base font-bold text-black">我的钱包</h2>
      </template>
    </CommonHeader>

    <main class="flex-1 overflow-y-auto pt-12 pb-4">
      <!-- 余额卡片 -->
      <div class="bg-gradient-to-r from-orange-400 to-orange-500 mx-4 mt-4 rounded-2xl p-6 text-white shadow-lg">
        <div class="text-sm opacity-90 mb-2">账户余额</div>
        <div class="text-4xl font-bold mb-4">¥{{ balance }}</div>
        <div class="flex space-x-3">
          <button class="flex-1 bg-white/20 py-2 rounded-lg text-sm font-medium nav-action" @click="handleRecharge">
            充值
          </button>
          <button class="flex-1 bg-white/20 py-2 rounded-lg text-sm font-medium nav-action" @click="handleWithdraw">
            提现
          </button>
        </div>
      </div>

      <!-- 功能入口 -->
      <div class="grid grid-cols-4 gap-4 px-4 mt-6 text-center">
        <div class="nav-action">
          <div class="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center shadow">
            <i class="fa-solid fa-wallet text-2xl text-orange-500"></i>
          </div>
          <p class="text-xs text-gray-700 mt-2">余额明细</p>
        </div>
        <div class="nav-action">
          <div class="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center shadow">
            <i class="fa-solid fa-credit-card text-2xl text-orange-500"></i>
          </div>
          <p class="text-xs text-gray-700 mt-2">银行卡</p>
        </div>
        <div class="nav-action">
          <div class="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center shadow">
            <i class="fa-solid fa-ticket text-2xl text-orange-500"></i>
          </div>
          <p class="text-xs text-gray-700 mt-2">优惠券</p>
        </div>
        <div class="nav-action">
          <div class="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center shadow">
            <i class="fa-solid fa-gift text-2xl text-orange-500"></i>
          </div>
          <p class="text-xs text-gray-700 mt-2">红包</p>
        </div>
      </div>

      <!-- 交易记录 -->
      <div class="bg-white mt-6 mx-4 rounded-2xl overflow-hidden">
        <div class="flex items-center justify-between p-4 border-b border-gray-100">
          <h3 class="text-sm font-bold">交易记录</h3>
          <button class="text-xs text-gray-500 nav-action">
            全部 <i class="fa-solid fa-angle-right ml-1"></i>
          </button>
        </div>
        
        <div v-if="transactions.length === 0" class="py-12 text-center">
          <i class="fa-solid fa-inbox text-4xl text-gray-300"></i>
          <p class="text-sm text-gray-400 mt-3">暂无交易记录</p>
        </div>

        <div v-else>
          <div
            v-for="item in transactions"
            :key="item.id"
            class="flex items-center justify-between p-4 border-b border-gray-100 nav-action"
          >
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                <i :class="item.icon + ' text-lg text-gray-600'"></i>
              </div>
              <div>
                <p class="text-sm font-medium">{{ item.title }}</p>
                <p class="text-xs text-gray-400 mt-1">{{ item.time }}</p>
              </div>
            </div>
            <div :class="item.amount > 0 ? 'text-green-500' : 'text-gray-800'" class="font-bold">
              {{ item.amount > 0 ? '+' : '' }}¥{{ Math.abs(item.amount) }}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "WalletPage",
  components: {
    CommonHeader,
  },
  data() {
    return {
      balance: 1288.00,
      transactions: [
        { id: 1, title: "充值", amount: 500, time: "2024-01-15 14:30", icon: "fa-solid fa-arrow-down" },
        { id: 2, title: "购买课程", amount: -199, time: "2024-01-14 10:20", icon: "fa-solid fa-shopping-cart" },
        { id: 3, title: "提现", amount: -300, time: "2024-01-13 16:45", icon: "fa-solid fa-arrow-up" },
      ],
    };
  },
  methods: {
    handleRecharge() {
      alert("充值功能");
    },
    handleWithdraw() {
      alert("提现功能");
    },
  },
};
</script>
