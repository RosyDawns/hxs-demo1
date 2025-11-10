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
      <h1 class="text-lg font-bold text-gray-800 flex-1 text-center">执照认证</h1>
      <div class="w-8"></div> <!-- 占位，保持标题居中 -->
    </header>

    <!-- 主要内容区域 -->
    <div class="px-4 pt-20 pb-6">
      <div class="bg-white rounded-xl p-5 mb-5 shadow-sm">
        <h2 class="text-base font-medium text-gray-800 mb-4">执照信息</h2>

        <!-- 执照抬头（企业名称） -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">执照抬头（企业名称） *</label>
          <input 
            type="text" 
            v-model="licenseName" 
            placeholder="请输入营业执照上的企业名称"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        <!-- 统一社会信用代码 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">统一社会信用代码 *</label>
          <input 
            type="text" 
            v-model="creditCode" 
            placeholder="请输入统一社会信用代码"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
          <p class="text-xs text-gray-500 mt-1">统一社会信用代码为18位，请确保输入正确</p>
        </div>

        <!-- 法定代表人 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">法定代表人 *</label>
          <input 
            type="text" 
            v-model="legalPerson" 
            placeholder="请输入法定代表人姓名"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        <!-- 企业地址 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">企业地址 *</label>
          <input 
            type="text" 
            v-model="companyAddress" 
            placeholder="请输入营业执照上的企业地址"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        <!-- 经营范围 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">经营范围</label>
          <textarea 
            v-model="businessScope" 
            placeholder="请输入经营范围（选填）"
            rows="3"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          ></textarea>
        </div>

        <!-- 营业执照图片上传 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">营业执照照片 *</label>
          <div class="flex items-center justify-center w-full">
            <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-300">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <i class="fa-solid fa-cloud-arrow-up text-gray-400 text-3xl mb-2"></i>
                <p class="mb-2 text-sm text-gray-500">点击上传或拖拽营业执照照片</p>
                <p class="text-xs text-gray-400">支持 JPG、PNG 格式，不超过5MB，请确保照片清晰可见</p>
              </div>
              <input type="file" class="hidden" accept="image/*" />
            </label>
          </div>
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

        <!-- 品牌/店铺名称 -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">品牌/店铺名称 *</label>
          <input 
            type="text" 
            v-model="brandName" 
            placeholder="请输入您的品牌或店铺名称"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
      </div>

      <!-- 认证协议 -->
      <div class="flex items-start mb-5">
        <div class="flex items-center h-5 mt-0.5">
          <input 
            id="agreement" 
            type="checkbox" 
            v-model="agreedToTerms"
            class="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500"
          />
        </div>
        <div class="ml-2 text-xs text-gray-600">
          <label for="agreement" class="cursor-pointer">
            我已阅读并同意<span class="text-amber-500">《平台服务协议》</span>和<span class="text-amber-500">《隐私政策》</span>，保证提供的所有信息真实有效
          </label>
        </div>
      </div>

      <!-- 提交按钮 -->
      <button 
        class="w-full py-3 bg-amber-500 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:bg-amber-600 disabled:bg-gray-400"
        :disabled="!isFormValid"
        @click="submitLicense"
      >
        提交认证申请
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterWakerLicense",
  data() {
    return {
      licenseName: '',
      creditCode: '',
      legalPerson: '',
      companyAddress: '',
      businessScope: '',
      contactName: '',
      contactPhone: '',
      brandName: '',
      agreedToTerms: false
    }
  },
  computed: {
    // 表单验证
    isFormValid() {
      return this.licenseName && 
             this.creditCode && 
             this.creditCode.length === 18 &&
             this.legalPerson && 
             this.companyAddress && 
             this.contactName && 
             this.contactPhone && 
             this.brandName && 
             this.agreedToTerms;
    }
  },
  methods: {
    // 提交执照认证
    submitLicense() {
      if (!this.isFormValid) {
        alert('请填写完整信息并同意协议');
        return;
      }
      
      // 模拟提交成功
      alert('认证申请已提交，请等待审核');
      // 跳转到成功页面
      this.$router.push('/register-waker/submit-success');
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