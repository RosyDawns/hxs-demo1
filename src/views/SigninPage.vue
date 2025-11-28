<template>
  <div class="page relative overflow-hidden min-h-screen" id="page-signin">
    <!-- 背景装饰 -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
      ></div>
      <div
        class="absolute -bottom-32 -right-16 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl"
      ></div>
      <div
        class="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-pink-400/10 blur-2xl"
      ></div>
    </div>

    <!-- 顶部导航 -->
    <CommonHeader>
      <template #center>
        <h2 class="font-bold">登录</h2>
      </template>
    </CommonHeader>

    <!-- 登录卡片 -->
    <div class="px-4 pt-16 pb-4">
      <div
        class="max-w-md mx-auto bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl shadow-lg p-6"
      >
        <div class="text-center mb-6">
          <img
            src="https://picsum.photos/id/20/96/96"
            alt="Logo"
            class="w-20 h-20 rounded-2xl mx-auto shadow-md"
          />
          <h1 class="font-extrabold text-2xl mt-3 tracking-wide">唤醒师</h1>
          <p class="text-xs text-gray mt-1">发现最好的自己</p>
        </div>

        <div class="space-y-4">
          <!-- 手机号输入 -->
          <div class="relative">
            <span
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <i class="fa fa-mobile"></i>
            </span>
            <input
              type="tel"
              placeholder="请输入手机号"
              class="w-full pl-9 px-4 py-3 border border-gray-100 rounded-lg text-sm bg-white/80 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
            />
          </div>

          <!-- 验证码输入 -->
          <div class="relative flex space-x-3">
            <div class="relative flex-1">
              <span
                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <i class="fa fa-shield"></i>
              </span>
              <input
                type="text"
                placeholder="请输入验证码"
                class="w-full pl-9 px-4 py-3 border border-gray-100 rounded-lg text-sm bg-white/80 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
              />
            </div>
            <button
              class="whitespace-nowrap px-4 py-3 border border-primary text-primary rounded-lg text-sm font-medium nav-action hover:bg-primary hover:text-white transition"
            >
              获取验证码
            </button>
          </div>

          <!-- 登录按钮 -->
          <button
            class="w-full bg-primary text-white py-3 rounded-lg font-medium nav-action hover:opacity-90 active:scale-[0.99] transition"
          >
            登录
          </button>

          <!-- 其他登录方式 -->
          <div class="flex items-center justify-center mt-6">
            <div class="flex-1 h-px bg-gray-100"></div>
            <span class="px-4 text-xs text-gray">其他登录方式</span>
            <div class="flex-1 h-px bg-gray-100"></div>
          </div>

          <div class="flex justify-center gap-8 mt-6">
            <button
              class="flex flex-col items-center nav-action hover:opacity-90 active:scale-95 transition"
            >
              <div
                class="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 text-xl shadow-sm"
              >
                <i class="fa fa-weixin"></i>
              </div>
              <span class="text-xs text-gray mt-1">微信登录</span>
            </button>
            <button
              class="flex flex-col items-center nav-action hover:opacity-90 active:scale-95 transition"
            >
              <div
                class="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 text-xl shadow-sm"
              >
                <i class="fa fa-weibo"></i>
              </div>
              <span class="text-xs text-gray mt-1">微博登录</span>
            </button>
            <button
              class="flex flex-col items-center nav-action hover:opacity-90 active:scale-95 transition"
            >
              <div
                class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-xl shadow-sm"
              >
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
  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader.vue";

export default {
  name: "SigninPage",
  components: {
    CommonHeader,
  },
};
</script>

<style scoped>
#page-signin {
  background: radial-gradient(
      1200px 600px at 80% -10%,
      rgba(59, 130, 246, 0.08),
      transparent 60%
    ),
    radial-gradient(
      1000px 500px at -10% 110%,
      rgba(236, 72, 153, 0.08),
      transparent 60%
    ),
    linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}
</style>
