<template>
  <div class="page" id="page-about">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.push('/me')">
        <i class="fa-solid fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">关于我们</h2>
    </header>

    <!-- 主要内容区 -->
    <main class="p-4">
      <div class="text-center mb-6">
        <img src="@/assets/images/tree.png" alt="唤醒兽" class="w-20 h-20 mx-auto mb-2">
        <h3 class="font-bold text-lg">唤醒兽平台</h3>
        <p class="text-xs text-gray mt-1">版本 1.0.0</p>
      </div>
      <div class="space-y-3">
        <div class="bg-light rounded-lg card-shadow p-3">
          <p class="text-xs text-gray">唤醒兽是一款连接用户与专业导师的智能平台，致力于帮助用户发现并培养自己的兴趣爱好，提升生活品质。</p>
        </div>
        <div class="bg-light rounded-lg card-shadow p-3">
          <h3 class="text-sm font-medium mb-2">联系我们</h3>
          <div class="text-xs text-gray">客服电话：400-123-4567</div>
          <div class="text-xs text-gray mt-1">邮箱：support@huanxingshou.com</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>