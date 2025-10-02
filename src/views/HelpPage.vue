<template>
  <div class="page" id="page-help">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.push('/me')">
        <i class="fa-solid fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">帮助中心</h2>
    </header>

    <!-- 主要内容区 -->
    <main class="p-4">
      <div class="space-y-3">
        <div class="bg-light rounded-lg card-shadow p-3">
          <h3 class="text-sm font-medium mb-2">常见问题</h3>
          <div class="space-y-2">
            <div class="text-xs text-gray">如何预约课程？</div>
            <div class="text-xs text-gray">如何使用优惠券？</div>
            <div class="text-xs text-gray">如何查看我的订单？</div>
          </div>
        </div>
        <div class="bg-light rounded-lg card-shadow p-3">
          <h3 class="text-sm font-medium mb-2">联系客服</h3>
          <div class="flex justify-center">
            <button class="bg-primary text-white text-sm px-4 py-2 rounded-full">
              <i class="fa-solid fa-headset mr-1"></i> 在线客服
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HelpPage'
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>