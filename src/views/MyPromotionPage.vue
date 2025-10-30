<template>
  <div class="page flex flex-col h-screen bg-black" id="page-my-promotion">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-black z-50 py-5 pl-2 pr-10 flex items-center"
    >
      <button
        class="w-8 h-8 flex items-center justify-center text-white"
        @click="$router.back()"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <div class="flex-1 text-center">
        <h1 class="text-base font-medium text-white">邀请好友</h1>
      </div>
    </header>

    <main class="flex-1 pt-20 px-5">
      <!-- 邀请标题 -->
      <h2 class="text-xl font-bold text-orange-400 text-center mb-16">
        邀请好友注册唤醒师
      </h2>

      <!-- 主要内容区 -->
      <div class="flex flex-col items-center">
        <div class="bg-white w-full rounded-xl p-6 relative">
          <img
            src="@images/img-29.jpg"
            alt="用户头像"
            class="w-24 h-24 rounded-full object-cover border-4 border-orange-400 mb-4 absolute left-1/2 -top-10 -translate-x-1/2"
          />
          <!-- 头像和名字 -->
          <div class="flex flex-col items-center mb-2 pt-10">
            <div class="text-lg font-bold text-black">李教练</div>
          </div>

          <!-- 邀请语 -->
          <div class="text-center border-t border-gray-100 py-4">
            <p class="text-black">你的热爱终将被兑现！</p>
          </div>

          <!-- 二维码区域 -->
          <div class="w-full max-w-xs">
            <!-- 二维码边框 -->
            <div class="relative mx-auto w-56 h-56 mb-4">
              <!-- 左上角角标 -->
              <div
                class="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-orange-400 rounded-tl-xl"
              ></div>
              <!-- 右上角角标 -->
              <div
                class="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-orange-400 rounded-tr-xl"
              ></div>
              <!-- 左下角角标 -->
              <div
                class="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-orange-400 rounded-bl-xl"
              ></div>
              <!-- 右下角角标 -->
              <div
                class="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-orange-400 rounded-br-xl"
              ></div>
              <!-- 二维码占位 -->
              <div class="w-full h-full flex items-center justify-center">
                <div class="w-48 h-48 grid grid-cols-8 gap-0.5">
                  <div
                    v-for="i in 64"
                    :key="`qr-${i}`"
                    :class="getQRPattern(i) ? 'bg-black' : 'bg-white'"
                  ></div>
                </div>
              </div>
            </div>

            <!-- 品牌名称 -->
            <div class="text-center">
              <p class="text-lg font-bold text-black">唤醒兽</p>
              <p class="text-sm text-gray-500">WAKEBEAST</p>
            </div>
          </div>
        </div>

        <!-- 按钮区域 -->
        <div class="flex w-full gap-4 mt-5">
          <button
            class="bg-gray-800 text-white py-3 rounded-full text-base font-medium flex-1"
          >
            保存图片
          </button>
          <button
            class="bg-orange-500 text-white py-3 rounded-full text-base font-medium flex-2"
          >
            马上邀请好友
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "MyPromotionPage",
  data() {
    return {
      // 可以根据需要添加数据
    };
  },
  methods: {
    // 生成一个简单的二维码图案（实际项目中应使用真实二维码）
    getQRPattern(index) {
      // 简单的图案生成逻辑
      const pattern = [
        1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0,
        1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1,
        1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0,
        1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      return pattern[index - 1] === 1;
    },

    // 保存图片功能（实际项目中需要实现）
    saveImage() {
      // 实现保存图片到本地的逻辑
      console.log("保存图片");
    },

    // 邀请好友功能（实际项目中需要实现）
    inviteFriends() {
      // 实现分享到社交平台的逻辑
      console.log("邀请好友");
    },
  },
};
</script>

<style scoped>
/* 自定义样式 */
.page {
  background-color: #000;
  color: #fff;
}

/* 按钮悬停效果 */
button:active {
  opacity: 0.8;
  transform: scale(0.98);
}
</style>
