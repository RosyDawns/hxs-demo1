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
      <h1 class="text-lg font-bold text-gray-800 flex-1 text-center">地图认领</h1>
      <div class="w-8"></div> <!-- 占位，保持标题居中 -->
    </header>

    <!-- 主要内容区域 -->
    <div class="pt-20 pb-6">
      <!-- 地图区域 -->
    <div class="w-full h-[300px] bg-gray-200 relative">
        <div class="w-full h-full flex items-center justify-center text-gray-500">
          <!-- 这里应该是地图组件，由于是示例，使用占位符 -->
          <div class="text-center">
            <i class="fa-solid fa-map text-4xl mb-2"></i>
            <p class="text-sm">地图加载中...</p>
          </div>
        </div>
        <!-- 地图控制器 -->
        <div class="absolute bottom-4 right-4 flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
          <button class="w-10 h-10 flex items-center justify-center border-b border-gray-200">
            <i class="fa-solid fa-plus text-gray-600"></i>
          </button>
          <button class="w-10 h-10 flex items-center justify-center">
            <i class="fa-solid fa-minus text-gray-600"></i>
          </button>
        </div>
        <!-- 当前位置按钮 -->
        <button class="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
          <i class="fa-solid fa-location-dot text-blue-500"></i>
        </button>
      </div>

      <div class="px-4 mt-5">
        <div class="bg-white rounded-xl p-5 mb-5 shadow-sm">
          <h2 class="text-base font-medium text-gray-800 mb-4">门店信息</h2>

          <!-- 门店名称 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">门店名称 *</label>
            <input 
              type="text" 
              v-model="storeName" 
              placeholder="请输入您的门店名称"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <!-- 门店地址 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">门店地址 *</label>
            <input 
              type="text" 
              v-model="storeAddress" 
              placeholder="请输入您的详细地址"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <p class="text-xs text-gray-500 mt-1">请确保地址与地图上的标记位置一致</p>
          </div>

          <!-- 联系人信息 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">联系人姓名 *</label>
            <input 
              type="text" 
              v-model="contactName" 
              placeholder="请输入联系人姓名"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <!-- 联系电话 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">联系电话 *</label>
            <input 
              type="tel" 
              v-model="contactPhone" 
              placeholder="请输入联系电话"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <!-- 营业执照上传 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">营业执照 *</label>
            <div class="flex items-center justify-center w-full">
              <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <i class="fa-solid fa-cloud-arrow-up text-gray-400 text-3xl mb-2"></i>
                  <p class="mb-2 text-sm text-gray-500">点击上传或拖拽营业执照图片</p>
                  <p class="text-xs text-gray-400">支持 JPG、PNG 格式，不超过5MB</p>
                </div>
                <input type="file" class="hidden" accept="image/*" />
              </label>
            </div>
          </div>
        </div>

        <!-- 提交按钮 -->
        <button 
          class="w-full py-3 bg-amber-500 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:bg-amber-600 disabled:bg-gray-400"
          :disabled="!isFormValid"
          @click="submitClaim"
        >
          提交认领申请
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterWakerMapClaim",
  data() {
    return {
      storeName: '',
      storeAddress: '',
      contactName: '',
      contactPhone: ''
    }
  },
  computed: {
    // 表单验证
    isFormValid() {
      return this.storeName && this.storeAddress && this.contactName && this.contactPhone;
    }
  },
  methods: {
    // 提交认领申请
    submitClaim() {
      if (!this.isFormValid) {
        alert('请填写完整信息');
        return;
      }
      
      // 模拟提交成功
      alert('认领申请已提交，请等待审核');
      // 跳转到成功页面
      this.$router.push('/register-waker/submit-success');
    }
  },
  mounted() {
    // 模拟地图加载
    setTimeout(() => {
      console.log('地图组件已加载');
      // 实际项目中应该在这里初始化地图组件
    }, 1000);
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