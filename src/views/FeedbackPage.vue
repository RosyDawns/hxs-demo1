<template>
  <div class="page" id="page-feedback">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.push('/me')">
        <i class="fa-solid fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">意见反馈</h2>
    </header>

    <!-- 主要内容区 -->
    <main class="p-4">
      <div class="bg-light rounded-lg card-shadow p-3 mb-3">
        <textarea 
          placeholder="请输入您的宝贵意见..." 
          class="w-full p-2 border border-gray-200 rounded-lg h-32 text-sm resize-none"
        ></textarea>
      </div>
      <div class="flex justify-center">
        <button class="bg-primary text-white text-sm px-6 py-2 rounded-full">
          提交反馈
        </button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'FeedbackPage'
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>