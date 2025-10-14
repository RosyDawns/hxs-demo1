<template>
  <div class="page" id="page-favorites">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.back()">
        <i class="fa-solid fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">我的收藏</h2>
    </header>

    <!-- 主要内容区 -->
    <main class="p-4">
      <div class="text-center py-10">
        <i class="fa-solid fa-heart text-4xl text-gray-300 mb-4"></i>
        <p class="text-gray">暂无收藏</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'FavoritesPage'
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>