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
      <h1 class="text-lg font-bold text-[#333] ml-2">地图认领认证</h1>
    </header>

    <!-- 主要内容区域 -->
    <div class="pt-20 px-4 pb-20">
      <!-- 地图显示区域 -->
      <div class="w-full h-[250px] bg-gray-100 rounded-lg mb-6 relative overflow-hidden">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center">
            <i class="fa-solid fa-map text-gray-400 text-3xl mb-2"></i>
            <p class="text-xs text-gray-500">地图加载中...</p>
          </div>
        </div>
        <!-- 地图控件 -->
        <div class="absolute bottom-4 left-4 right-4">
          <div class="bg-white rounded-lg shadow-md p-3">
            <div class="flex items-center mb-2">
              <div class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                <i class="fa-solid fa-location-dot text-amber-500 text-xs"></i>
              </div>
              <input 
                type="text" 
                v-model="searchKeyword" 
                class="flex-1 text-sm focus:outline-none" 
                placeholder="搜索您的店铺位置"
              />
              <button class="text-amber-500 text-sm">搜索</button>
            </div>
            <div class="text-xs text-gray-500">当前位置：北京市朝阳区三里屯</div>
          </div>
        </div>
      </div>

      <!-- 店铺信息表单 -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <div class="px-5 py-4">
          <h2 class="text-base font-medium text-[#333] mb-4">店铺基本信息</h2>
          
          <div class="space-y-4">
            <div>
              <label class="block text-xs text-gray-500 mb-1">店铺名称 <span class="text-red-500">*</span></label>
              <input 
                type="text" 
                v-model="storeInfo.name" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                placeholder="请输入店铺名称"
              />
            </div>
            
            <div>
              <label class="block text-xs text-gray-500 mb-1">店铺地址 <span class="text-red-500">*</span></label>
              <input 
                type="text" 
                v-model="storeInfo.address" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                placeholder="请输入详细地址"
              />
            </div>
            
            <div>
              <label class="block text-xs text-gray-500 mb-1">店铺类型 <span class="text-red-500">*</span></label>
              <select 
                v-model="storeInfo.type" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 appearance-none bg-white"
              >
                <option value="">请选择店铺类型</option>
                <option value="gym">健身房</option>
                <option value="studio">工作室</option>
                <option value="club">俱乐部</option>
                <option value="center">运动中心</option>
                <option value="other">其他</option>
              </select>
            </div>
            
            <div>
              <label class="block text-xs text-gray-500 mb-1">联系电话 <span class="text-red-500">*</span></label>
              <input 
                type="tel" 
                v-model="storeInfo.phone" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                placeholder="请输入联系电话"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 营业执照上传 -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div class="px-5 py-4">
          <h2 class="text-base font-medium text-[#333] mb-3">营业执照上传 <span class="text-red-500">*</span></h2>
          <p class="text-xs text-gray-500 mb-4">请上传清晰的营业执照照片，确保信息完整可见</p>
          
          <div class="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
            <input 
              type="file" 
              ref="licenseInput" 
              accept="image/*" 
              class="hidden"
              @change="handleLicenseUpload"
            />
            <button 
              class="w-full py-3 border border-amber-500 text-amber-500 rounded-lg text-sm font-medium flex flex-col items-center justify-center"
              @click="$refs.licenseInput.click()"
            >
              <i class="fa-solid fa-cloud-arrow-up mb-2"></i>
              点击上传营业执照照片
            </button>
            <p class="text-xs text-gray-500 mt-3">支持 JPG、PNG 格式，大小不超过 5MB</p>
          </div>
          
          <!-- 预览区域 -->
          <div v-if="licensePreview" class="mt-4">
            <img :src="licensePreview" alt="营业执照预览" class="w-full h-40 object-contain border border-gray-100 rounded-lg">
            <button class="text-xs text-red-500 mt-2" @click="removeLicense">移除</button>
          </div>
        </div>
      </div>

      <!-- 提交按钮 -->
      <button 
        class="w-full py-3 bg-amber-500 text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:bg-amber-600 mb-4"
        @click="submitMapClaim"
      >
        提交认证申请
      </button>
      <p class="text-xs text-center text-gray-500">提交后，平台将在 1-3 个工作日内完成审核</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapClaimPage",
  data() {
    return {
      searchKeyword: '',
      licensePreview: null,
      storeInfo: {
        name: '',
        address: '',
        type: '',
        phone: ''
      }
    }
  },
  methods: {
    // 处理营业执照上传
    handleLicenseUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // 简单的文件验证
        if (file.size > 5 * 1024 * 1024) {
          alert('文件大小不能超过 5MB');
          return;
        }
        
        // 创建预览
        const reader = new FileReader();
        reader.onload = (e) => {
          this.licensePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    // 移除营业执照
    removeLicense() {
      this.licensePreview = null;
      this.$refs.licenseInput.value = '';
    },
    // 提交地图认领认证
    submitMapClaim() {
      // 表单验证
      if (!this.storeInfo.name || !this.storeInfo.address || !this.storeInfo.type || !this.storeInfo.phone) {
        alert('请填写完整的店铺信息');
        return;
      }
      
      if (!this.licensePreview) {
        alert('请上传营业执照照片');
        return;
      }
      
      // 这里应该是提交到后端的逻辑
      console.log('提交地图认领认证信息:', {
        ...this.storeInfo,
        hasLicense: !!this.licensePreview
      });
      
      // 跳转到提交成功页面
      this.$router.push('/register-waker/submit-success');
    }
  },
  mounted() {
    // 在实际项目中，这里应该初始化地图
    console.log('初始化地图');
  }
};
</script>

<style scoped>
/* 自定义样式 */
</style>