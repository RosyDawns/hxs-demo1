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
      <h1 class="text-lg font-bold text-[#333] ml-2">执照信息认证</h1>
    </header>

    <!-- 主要内容区域 -->
    <div class="pt-20 px-4 pb-20">
      <div class="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <div class="px-5 py-4">
          <h2 class="text-base font-medium text-[#333] mb-4">执照信息填写 <span class="text-red-500">*</span></h2>
          <p class="text-xs text-gray-500 mb-6">请准确填写营业执照上的信息，确保与执照内容一致</p>

          <div class="space-y-4">
            <div>
              <label class="block text-xs text-gray-500 mb-1">执照抬头名称 <span class="text-red-500">*</span></label>
              <input 
                type="text" 
                v-model="licenseInfo.companyName" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                placeholder="请输入营业执照上的公司名称"
              />
            </div>

            <div>
              <label class="block text-xs text-gray-500 mb-1">统一社会信用代码 <span class="text-red-500">*</span></label>
              <input 
                type="text" 
                v-model="licenseInfo.creditCode" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                placeholder="请输入统一社会信用代码"
              />
            </div>

            <div>
              <label class="block text-xs text-gray-500 mb-1">法定代表人姓名 <span class="text-red-500">*</span></label>
              <input 
                type="text" 
                v-model="licenseInfo.legalPerson" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                placeholder="请输入法定代表人姓名"
              />
            </div>

            <div>
              <label class="block text-xs text-gray-500 mb-1">注册地址 <span class="text-red-500">*</span></label>
              <input 
                type="text" 
                v-model="licenseInfo.registerAddress" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                placeholder="请输入注册地址"
              />
            </div>

            <div>
              <label class="block text-xs text-gray-500 mb-1">经营范围 <span class="text-red-500">*</span></label>
              <textarea 
                v-model="licenseInfo.businessScope" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 min-h-[100px]"
                placeholder="请输入经营范围"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- 营业执照照片上传 -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div class="px-5 py-4">
          <h2 class="text-base font-medium text-[#333] mb-3">营业执照照片 <span class="text-red-500">*</span></h2>
          <p class="text-xs text-gray-500 mb-4">请上传清晰的营业执照照片，确保信息完整可见</p>

          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
              <input 
                type="file" 
                ref="licenseFrontInput" 
                accept="image/*" 
                class="hidden"
                @change="handleLicenseFrontUpload"
              />
              <button 
                class="w-full py-3 border border-gray-200 text-gray-500 rounded-lg text-sm font-medium flex flex-col items-center justify-center"
                @click="$refs.licenseFrontInput.click()"
              >
                <i class="fa-solid fa-cloud-arrow-up mb-2"></i>
                正面照片
              </button>
              <!-- 预览区域 -->
              <div v-if="licenseFrontPreview" class="mt-2">
                <img :src="licenseFrontPreview" alt="执照正面预览" class="w-full h-24 object-contain border border-gray-100 rounded-lg">
                <button class="text-xs text-red-500 mt-1" @click="removeLicenseFront">移除</button>
              </div>
            </div>

            <div class="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
              <input 
                type="file" 
                ref="licenseBackInput" 
                accept="image/*" 
                class="hidden"
                @change="handleLicenseBackUpload"
              />
              <button 
                class="w-full py-3 border border-gray-200 text-gray-500 rounded-lg text-sm font-medium flex flex-col items-center justify-center"
                @click="$refs.licenseBackInput.click()"
              >
                <i class="fa-solid fa-cloud-arrow-up mb-2"></i>
                反面照片（如有）
              </button>
              <!-- 预览区域 -->
              <div v-if="licenseBackPreview" class="mt-2">
                <img :src="licenseBackPreview" alt="执照反面预览" class="w-full h-24 object-contain border border-gray-100 rounded-lg">
                <button class="text-xs text-red-500 mt-1" @click="removeLicenseBack">移除</button>
              </div>
            </div>
          </div>

          <p class="text-xs text-gray-500">支持 JPG、PNG 格式，大小不超过 5MB/张</p>
        </div>
      </div>

      <!-- 联系人信息 -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div class="px-5 py-4">
          <h2 class="text-base font-medium text-[#333] mb-4">联系人信息 <span class="text-red-500">*</span></h2>

          <div class="space-y-4">
            <div>
              <label class="block text-xs text-gray-500 mb-1">联系人姓名 <span class="text-red-500">*</span></label>
              <input 
                type="text" 
                v-model="contactInfo.name" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                placeholder="请输入联系人姓名"
            />
            </div>
            
            <div>
              <label class="block text-xs text-gray-500 mb-1">联系电话 <span class="text-red-500">*</span></label>
              <input 
                type="tel" 
                v-model="contactInfo.phone" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                placeholder="请输入联系电话"
              />
            </div>

            <div>
              <label class="block text-xs text-gray-500 mb-1">电子邮箱 </label>
              <input 
                type="email" 
                v-model="contactInfo.email" 
                class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                placeholder="请输入电子邮箱（选填）"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 提交按钮 -->
      <button 
        class="w-full py-3 bg-amber-500 text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:bg-amber-600 mb-4"
        @click="submitLicenseInfo"
      >
        提交认证申请
      </button>
      <p class="text-xs text-center text-gray-500">提交后，平台将在 1-3 个工作日内完成审核</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LicenseInputPage",
  data() {
    return {
      licenseInfo: {
        companyName: '',
        creditCode: '',
        legalPerson: '',
        registerAddress: '',
        businessScope: ''
      },
      contactInfo: {
        name: '',
        phone: '',
        email: ''
      },
      licenseFrontPreview: null,
      licenseBackPreview: null
    }
  },
  methods: {
    // 处理执照正面上传
    handleLicenseFrontUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.handleFileUpload(file, (preview) => {
          this.licenseFrontPreview = preview;
        });
      }
    },
    // 处理执照反面上传
    handleLicenseBackUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.handleFileUpload(file, (preview) => {
          this.licenseBackPreview = preview;
        });
      }
    },
    // 通用文件上传处理
    handleFileUpload(file, callback) {
      // 简单的文件验证
      if (file.size > 5 * 1024 * 1024) {
        alert('文件大小不能超过 5MB');
        return;
      }
      
      // 创建预览
      const reader = new FileReader();
      reader.onload = (e) => {
        callback(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    // 移除执照正面
    removeLicenseFront() {
      this.licenseFrontPreview = null;
      this.$refs.licenseFrontInput.value = '';
    },
    // 移除执照反面
    removeLicenseBack() {
      this.licenseBackPreview = null;
      this.$refs.licenseBackInput.value = '';
    },
    // 提交执照信息认证
    submitLicenseInfo() {
      console.log('提交按钮被点击，开始验证表单');
      
      // 表单验证 - 更详细的错误提示
      const { companyName, creditCode, legalPerson, registerAddress, businessScope } = this.licenseInfo;
      const { name, phone } = this.contactInfo;
      
      if (!companyName.trim()) {
        alert('请输入执照抬头名称');
        return;
      }
      
      if (!creditCode.trim()) {
        alert('请输入统一社会信用代码');
        return;
      }
      
      if (!legalPerson.trim()) {
        alert('请输入法定代表人姓名');
        return;
      }
      
      if (!registerAddress.trim()) {
        alert('请输入注册地址');
        return;
      }
      
      if (!businessScope.trim()) {
        alert('请输入经营范围');
        return;
      }
      
      if (!name.trim()) {
        alert('请输入联系人姓名');
        return;
      }
      
      if (!phone.trim()) {
        alert('请输入联系电话');
        return;
      }
      
      if (!this.licenseFrontPreview) {
        alert('请上传营业执照正面照片');
        return;
      }
      
      console.log('表单验证通过，准备提交数据');
      
      // 这里应该是提交到后端的逻辑
      console.log('提交执照信息认证:', {
        licenseInfo: this.licenseInfo,
        contactInfo: this.contactInfo,
        hasLicenseFront: !!this.licenseFrontPreview,
        hasLicenseBack: !!this.licenseBackPreview
      });
      
      // 跳转到提交成功页面
      console.log('准备跳转到提交成功页面');
      this.$router.push('/register-waker/submit-success');
    }
  }
};
</script>

<style scoped>
/* 自定义样式 */
</style>