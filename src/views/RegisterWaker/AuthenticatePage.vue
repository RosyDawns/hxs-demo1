<template>
  <div class="w-full min-h-screen bg-[#fff] overflow-x-hidden">
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex items-center bg-white border-b border-gray-100">
      <button
        class="text-[#333] w-8 h-8 flex items-center justify-center nav-action"
        @click="$router.back()"
      >
        <i class="fa-solid fa-chevron-left text-xs"></i>
      </button>
      <h1 class="text-lg font-bold text-[#333] ml-2">选择认证方式</h1>
    </header>

    <!-- 主要内容区域 -->
    <div class="pt-20 px-4">
      <div class="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <div class="px-5 py-4">
          <h2 class="text-base font-medium text-[#333] mb-3">生活主理人认证方式</h2>
          <p class="text-xs text-gray-500 mb-6">请选择适合您的认证方式，完成后即可成为平台认证主理人</p>

          <!-- 认证方式选择卡片 -->
          <div class="space-y-4">
            <button 
              class="w-full bg-white p-4 rounded-lg border-2 border-gray-100 flex items-center transition-all duration-300 hover:border-amber-500"
              @click="selectMapClaim"
            >
              <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-amber-600 mr-3">
                <i class="fa-solid fa-map-location-dot"></i>
              </div>
              <div class="flex-1 text-left">
                <h3 class="text-base font-medium text-[#333] mb-1">地图认领认证</h3>
                <p class="text-xs text-gray-500">适合有实体门店的商家，通过地图定位认领您的店铺位置</p>
              </div>
              <div class="text-gray-500">
                <i class="fa-solid fa-chevron-right text-xs"></i>
              </div>
            </button>

            <button 
              class="w-full bg-white p-4 rounded-lg border-2 border-gray-100 flex items-center transition-all duration-300 hover:border-amber-500"
              @click="selectLicenseInput"
            >
              <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                <i class="fa-solid fa-file-lines"></i>
              </div>
              <div class="flex-1 text-left">
                <h3 class="text-base font-medium text-[#333] mb-1">执照信息认证</h3>
                <p class="text-xs text-gray-500">适合线上门店或服务机构，通过输入营业执照信息完成认证</p>
              </div>
              <div class="text-gray-400">
                <i class="fa-solid fa-chevron-right text-xs"></i>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- 认证说明 -->
      <div class="bg-gray-50 rounded-lg p-4">
        <h3 class="text-sm font-medium text-[#333] mb-2 flex items-center">
          <i class="fa-solid fa-circle-info text-amber-500 mr-2"></i>
          认证说明
        </h3>
        <ul class="text-xs text-gray-500 space-y-2">
          <li class="flex">
            <span class="mr-1">·</span>
            <span>认证信息仅用于身份验证，平台将严格保护您的隐私</span>
          </li>
          <li class="flex">
            <span class="mr-1">·</span>
            <span>认证成功后，您将获得平台认证标识，提升用户信任度</span>
          </li>
          <li class="flex">
            <span class="mr-1">·</span>
            <span>如有疑问，请联系客服获取帮助</span>
          </li>
        </ul>
      </div>
      
      <!-- 隐私协议提示 -->
      <div class="mt-6 text-xs text-gray-500 text-center">
        <p>继续操作即表示您已阅读并同意</p>
        <div class="mt-1 flex justify-center space-x-2">
          <a href="/user-agreement" class="text-amber-500">《认证服务协议》</a>
          <span>和</span>
          <a href="/privacy-policy" class="text-amber-500">《隐私政策》</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthenticatePage",
  methods: {
    // 选择地图认领认证
    selectMapClaim() {
      // 记录用户已看到隐私协议
      this.$router.push('/register-waker/map-claim');
    },
    // 选择执照信息认证
    selectLicenseInput() {
      // 记录用户已看到隐私协议
      this.$router.push('/register-waker/license-input');
    }
  }
};
</script>

<style scoped>
/* 自定义样式 */
</style>