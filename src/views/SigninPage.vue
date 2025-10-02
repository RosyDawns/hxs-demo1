<template>
  <div class="page" id="page-signin">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.back()">
        <i class="fa fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">登录</h2>
    </header>

    <!-- 登录表单 -->
    <div class="bg-light p-5 mt-3">
      <div class="text-center mb-6">
        <img src="https://picsum.photos/id/20/80/80" alt="Logo" class="w-20 h-20 rounded-full mx-auto">
        <h1 class="font-bold text-xl mt-3">唤醒狮</h1>
        <p class="text-xs text-gray mt-1">发现最好的自己</p>
      </div>

      <div class="space-y-4">
        <!-- 手机号输入 -->
        <div class="relative">
          <input 
            type="tel" 
            placeholder="请输入手机号"
            class="w-full px-4 py-3 border border-gray-100 rounded-lg text-sm"
          >
        </div>

        <!-- 验证码输入 -->
        <div class="relative flex space-x-3">
          <input 
            type="text" 
            placeholder="请输入验证码"
            class="flex-1 px-4 py-3 border border-gray-100 rounded-lg text-sm"
          >
          <button class="whitespace-nowrap px-4 py-3 border border-primary text-primary rounded-lg text-sm font-medium nav-action">
            获取验证码
          </button>
        </div>

        <!-- 登录按钮 -->
        <button class="w-full bg-primary text-white py-3 rounded-lg font-medium nav-action">
          登录
        </button>

        <!-- 其他登录方式 -->
        <div class="flex items-center justify-center mt-6">
          <div class="flex-1 h-px bg-gray-100"></div>
          <span class="px-4 text-xs text-gray">其他登录方式</span>
          <div class="flex-1 h-px bg-gray-100"></div>
        </div>

        <div class="flex justify-center space-x-8 mt-6">
          <button class="flex flex-col items-center nav-action">
            <div class="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-xl">
              <i class="fa fa-weixin"></i>
            </div>
            <span class="text-xs text-gray mt-1">微信登录</span>
          </button>
          <button class="flex flex-col items-center nav-action">
            <div class="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-xl">
              <i class="fa fa-weibo"></i>
            </div>
            <span class="text-xs text-gray mt-1">微博登录</span>
          </button>
          <button class="flex flex-col items-center nav-action">
            <div class="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-xl">
              <i class="fa fa-qq"></i>
            </div>
            <span class="text-xs text-gray mt-1">QQ登录</span>
          </button>
        </div>

        <!-- 用户协议 -->
        <div class="text-center mt-6">
          <p class="text-xs text-gray">
            登录即表示您同意我们的
            <span class="text-primary">《用户协议》</span>
            和
            <span class="text-primary">《隐私政策》</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SigninPage'
}
</script>