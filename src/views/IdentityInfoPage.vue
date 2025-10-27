<template>
  <div class="page flex flex-col h-screen bg-white">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 px-4 py-3 flex items-center border-b border-gray-100"
    >
      <button class="text-black nav-action" @click="$router.back()">
        <i class="fa-solid fa-chevron-left text-lg"></i>
      </button>
      <h1 class="ml-2 text-black font-bold text-base">唤醒兽支付 · 身份信息</h1>
    </header>

    <main class="flex-1 overflow-y-auto pt-12 pb-4 px-4">
      <div class="bg-orange-50 rounded-lg">
        <!-- 隐私保护提示 -->
        <div class="p-3 mt-4">
          <div class="flex items-center">
            <i class="fa-solid fa-shield-alt text-orange-500 mr-2"></i>
            <span class="text-xs text-orange-500">个人信息隐私保护中</span>
          </div>
        </div>

        <!-- 身份信息卡片 -->
        <div
          class="bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl p-4 text-white"
        >
          <h2 class="text-xl font-bold mb-2">**明</h2>
          <div class="text-xs mb-3 flex items-center">
            <div
              class="mr-2 px-2 py-0.5 rounded-full"
              style="background-color: rgba(255, 255, 255, 0.2)"
            >
              中国
            </div>
            <div
              class="px-2 py-0.5 rounded-full"
              style="background-color: rgba(255, 255, 255, 0.2)"
            >
              身份证
            </div>
          </div>
          <div class="text-sm font-medium">3******* ********** ****X</div>
        </div>
      </div>

      <!-- 证件验证状态 -->
      <div class="grid grid-cols-2 gap-3 mt-3">
        <div class="bg-orange-50 rounded-xl p-3 border border-orange-100">
          <div class="flex items-center">
            <i class="fa-solid fa-id-card text-orange-500 mr-2"></i>
            <span class="text-sm font-medium">证件照片</span>
          </div>
          <div class="text-xs text-orange-600 mt-2">请补充证件信息</div>
        </div>
        <div class="bg-green-50 rounded-xl p-3 border border-green-100">
          <div class="flex items-center">
            <i class="fa-solid fa-user-check text-green-500 mr-2"></i>
            <span class="text-sm font-medium">人脸验证</span>
          </div>
          <div class="text-xs text-green-600 mt-2">已完成验证</div>
        </div>
      </div>

      <!-- 信息完善列表 -->
      <div class="mt-3">
        <div class="rounded-xl py-2 px-1 overflow-hidden bg-white">
          <div class="flex items-center justify-between p-3">
            <span class="text-sm">银行卡</span>
            <div class="flex items-center text-gray-400">
              <span class="text-xs mr-1">去添加</span>
              <i class="fa-solid fa-chevron-right text-xs"></i>
            </div>
          </div>
          <div class="flex items-center justify-between p-3">
            <span class="text-sm">职业类型</span>
            <div class="flex items-center text-gray-400">
              <span class="text-xs mr-1">去完善</span>
              <i class="fa-solid fa-chevron-right text-xs"></i>
            </div>
          </div>
          <div class="flex items-center justify-between p-3">
            <span class="text-sm">联系地址</span>
            <div class="flex items-center text-gray-400">
              <span class="text-xs mr-1">去完善</span>
              <i class="fa-solid fa-chevron-right text-xs"></i>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "IdentityInfoPage",
  methods: {
    // 可以在这里添加各种操作方法
    handleAddBankCard() {
      // 添加银行卡逻辑
    },
    handleCompleteProfession() {
      // 完善职业信息逻辑
    },
    handleCompleteAddress() {
      // 完善地址信息逻辑
    },
  },
};
</script>

<style scoped>
.page {
  background-color: #f9f9f9;
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}
</style>
