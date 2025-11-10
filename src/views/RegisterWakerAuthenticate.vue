<template>
  <div class="w-full min-h-screen bg-[#F5F5F5] overflow-x-hidden">
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex items-center bg-white border-b border-gray-200">
      <button
        class="text-gray-700 w-8 h-8 flex items-center justify-center"
        @click="$router.back()"
      >
        <i class="fa-solid fa-chevron-left text-sm"></i>
      </button>
      <h1 class="text-lg font-bold text-gray-800 flex-1 text-center">主理人认证</h1>
      <div class="w-8"></div> <!-- 占位，保持标题居中 -->
    </header>

    <!-- 主要内容区域 -->
    <div class="px-4 pt-20 pb-6">
      <div class="bg-white rounded-xl p-5 mb-5 shadow-sm">
        <h2 class="text-base font-medium text-gray-800 mb-4">请选择认证方式</h2>
        <p class="text-xs text-gray-500 mb-6">
          我们提供两种认证方式，请根据您的实际情况选择最适合的方式进行认证。
        </p>

        <!-- 认证方式选择 -->
        <div class="space-y-4">
          <!-- 地图认领模式 -->
          <div 
            class="border border-gray-200 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:border-amber-500 hover:bg-amber-50"
            @click="selectMode('map')"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <i class="fa-solid fa-map-marker-alt text-blue-500"></i>
                </div>
                <div>
                  <h3 class="text-sm font-medium text-gray-800">地图认领模式</h3>
                  <p class="text-xs text-gray-500 mt-1">适合有实体门店的主理人，通过地图定位确认门店位置</p>
                </div>
              </div>
              <div class="text-amber-500">
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <!-- 线上门店执照认证 -->
          <div 
            class="border border-gray-200 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:border-amber-500 hover:bg-amber-50"
            @click="selectMode('license')"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <i class="fa-solid fa-file-certificate text-green-500"></i>
                </div>
                <div>
                  <h3 class="text-sm font-medium text-gray-800">线上门店执照认证</h3>
                  <p class="text-xs text-gray-500 mt-1">适合线上店铺或品牌，通过营业执照信息进行认证</p>
                </div>
              </div>
              <div class="text-amber-500">
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 认证提示 -->
      <div class="bg-blue-50 rounded-lg p-4">
        <h3 class="text-sm font-medium text-blue-700 mb-2 flex items-center">
          <i class="fa-solid fa-info-circle mr-2"></i>认证提示
        </h3>
        <ul class="text-xs text-blue-600 space-y-2">
          <li class="flex">
            <span class="mr-2">·</span>
            <span>认证信息将严格保密，请确保提供真实有效的资料</span>
          </li>
          <li class="flex">
            <span class="mr-2">·</span>
            <span>认证审核时间为1-3个工作日，请耐心等待</span>
          </li>
          <li class="flex">
            <span class="mr-2">·</span>
            <span>如有疑问，请联系客服热线400-123-4567</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterWakerAuthenticate",
  methods: {
    // 选择认证方式
    selectMode(mode) {
      if (mode === 'map') {
        // 地图认领模式
        this.$router.push('/register-waker/map-claim');
      } else if (mode === 'license') {
        // 线上门店执照认证
        this.$router.push('/register-waker/license-input');
      }
    }
  }
};
</script>

<style scoped>
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