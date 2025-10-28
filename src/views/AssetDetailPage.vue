<template>
  <div class="page flex flex-col h-screen bg-white" id="page-asset-detail">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100 pl-2 pr-10 py-3 flex items-center"
    >
      <button
        class="w-8 h-8 flex items-center justify-center text-gray-600"
        @click="$router.back()"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <div class="flex-1 text-center">
        <h1 class="text-base font-bold text-gray-900">总资产</h1>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto pt-14 pb-4 px-4 bg-[#f3f3f3]">
      <div class="pt-4">
        <div class="bg-white pt-8 pb-4 px-4 rounded-xl">
          <!-- 收入余额区域 -->
          <div class="text-center">
            <p class="text-gray-600 text-sm mb-1">收入余额(元)</p>
            <p class="text-4xl font-bold text-gray-900">0.00</p>
          </div>
          <!-- 资产卡片网格 -->
          <div class="grid grid-cols-2 gap-4 mt-6">
            <div class="bg-gray-50 rounded-xl p-4 flex flex-col">
              <p class="text-gray-600 text-sm mb-2">我的服务</p>
              <p class="text-2xl font-bold text-gray-900 mb-1">0.00</p>
              <div class="flex items-center text-orange-500 text-xs mt-auto">
                查看详情
                <i class="fa-solid fa-angle-right ml-1"></i>
              </div>
            </div>

            <div class="bg-gray-50 rounded-xl p-4 flex flex-col">
              <p class="text-gray-600 text-sm mb-2">星推官推荐</p>
              <p class="text-2xl font-bold text-gray-900 mb-1">0.00</p>
              <div class="flex items-center text-orange-500 text-xs mt-auto">
                查看详情
                <i class="fa-solid fa-angle-right ml-1"></i>
              </div>
            </div>

            <div class="bg-gray-50 rounded-xl p-4 flex flex-col nav-action" @click="$router.push('/team')">
              <p class="text-gray-600 text-sm mb-2">醒狮团队</p>
              <p class="text-2xl font-bold text-gray-900 mb-1">0.00</p>
              <div class="flex items-center text-orange-500 text-xs mt-auto">
                查看详情
                <i class="fa-solid fa-angle-right ml-1"></i>
              </div>
            </div>

            <div class="bg-gray-50 rounded-xl p-4 flex flex-col">
              <p class="text-gray-600 text-sm mb-2">礼物打赏</p>
              <p class="text-2xl font-bold text-gray-900 mb-1">0.00</p>
              <div class="flex items-center text-orange-500 text-xs mt-auto">
                查看详情
                <i class="fa-solid fa-angle-right ml-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 提升收入提示 -->
      <div class="mt-8 mb-4">
        <p class="text-gray-900 text-sm font-medium text-center">
          如何提升收入？试试以下方式
        </p>
      </div>

      <!-- 变现方式列表 -->
      <div class="space-y-4">
        <div
          class="bg-gray-50 rounded-xl p-4 flex items-center justify-between"
        >
          <div class="flex items-start">
            <div
              class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500"
            >
              <i class="fa-solid fa-paw text-xl"></i>
            </div>
            <div class="ml-3">
              <p class="text-gray-900 text-sm font-medium">成为唤醒师</p>
              <p class="text-gray-600 text-xs mt-0.5">技能变现，上线服务</p>
              <div class="flex items-center mt-1">
                <span
                  class="text-orange-500 text-xs bg-orange-50 px-1.5 py-0.5 rounded"
                >
                  匹配度高</span
                >
                <span
                  class="text-orange-500 text-xs bg-orange-50 px-1.5 py-0.5 rounded ml-2"
                >
                  简单任务
                </span>
              </div>
            </div>
          </div>
          <button
            class="bg-orange-500 text-white text-xs font-medium px-4 py-1.5 rounded-full nav-action"
          >
            去开通
          </button>
        </div>

        <div
          class="bg-gray-50 rounded-xl p-4 flex items-center justify-between"
        >
          <div class="flex items-start">
            <div
              class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500"
            >
              <i class="fa-solid fa-bullhorn text-xl"></i>
            </div>
            <div class="ml-3">
              <p class="text-gray-900 text-sm font-medium">星推官推荐</p>
              <p class="text-gray-600 text-xs mt-0.5">帮唤醒师推荐服务赚佣金</p>
              <div class="flex items-center mt-1">
                <span
                  class="text-orange-500 text-xs bg-orange-50 px-1.5 py-0.5 rounded"
                >
                  匹配度高</span
                >
                <span
                  class="text-orange-500 text-xs bg-orange-50 px-1.5 py-0.5 rounded ml-2"
                >
                  带货任务
                </span>
              </div>
            </div>
          </div>
          <button
            class="bg-orange-500 text-white text-xs font-medium px-4 py-1.5 rounded-full nav-action"
          >
            去推荐
          </button>
        </div>

        <div
          class="bg-gray-50 rounded-xl p-4 flex items-center justify-between"
        >
          <div class="flex items-start">
            <div
              class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500"
            >
              <i class="fa-solid fa-user-tie text-xl"></i>
            </div>
            <div class="ml-3">
              <p class="text-gray-900 text-sm font-medium">成为醒狮合伙人</p>
              <p class="text-gray-600 text-xs mt-0.5">
                慧眼识英雄，介绍优秀人才
              </p>
              <div class="flex items-center mt-1">
                <span
                  class="text-orange-500 text-xs bg-orange-50 px-1.5 py-0.5 rounded"
                >
                  匹配度高
                </span>
              </div>
            </div>
          </div>
          <button
            class="bg-orange-500 text-white text-xs font-medium px-4 py-1.5 rounded-full nav-action"
          >
            去分享
          </button>
        </div>
      </div>

      <!-- 查看全部变现方式 -->
      <div class="mt-6 mb-4">
        <button
          class="w-full flex items-center justify-center text-orange-500 text-sm font-medium nav-action"
        >
          查看全部变现方式
          <i class="fa-solid fa-angle-right ml-1"></i>
        </button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "AssetDetailPage",
  data() {
    return {
      // 可以根据需要添加数据
    };
  },
  methods: {
    // 可以根据需要添加方法
  },
};
</script>

<style scoped>
/* 可以根据需要添加自定义样式 */
</style>
