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
      <h1 class="text-lg font-bold text-[#333] ml-2">技能唤醒师注册</h1>
    </header>

    <!-- 主要内容区域 -->
    <div class="pt-20 px-4 pb-20">
      <div class="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <div class="px-5 py-4">
          <h2 class="text-base font-medium text-[#333] mb-3">技能唤醒师注册</h2>
          <p class="text-xs text-gray-500 mb-6">填写您的技能信息，成为平台认证的技能唤醒师</p>

          <!-- 表单区域 -->
          <form @submit.prevent="submitForm" class="space-y-4">
            <!-- 技能名称 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">技能名称 <span class="text-red-500">*</span></label>
              <input 
                v-model="skillInfo.skillName"
                type="text" 
                class="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500"
                :class="{ 'border-red-300': errors.skillName }"
                placeholder="请输入您的技能名称（2-20个字符）"
              />
              <p v-if="errors.skillName" class="text-xs text-red-500">{{ errors.skillName }}</p>
            </div>

            <!-- 技能等级 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">技能等级 <span class="text-red-500">*</span></label>
              <select 
                v-model="skillInfo.skillLevel"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500"
                :class="{ 'border-red-300': errors.skillLevel }"
              >
                <option value="">请选择技能等级</option>
                <option value="初级">初级（1年以下经验）</option>
                <option value="中级">中级（1-3年经验）</option>
                <option value="高级">高级（3-5年经验）</option>
                <option value="专家">专家（5年以上经验）</option>
              </select>
              <p v-if="errors.skillLevel" class="text-xs text-red-500">{{ errors.skillLevel }}</p>
            </div>

            <!-- 技能描述 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">技能描述 <span class="text-red-500">*</span></label>
              <textarea 
                v-model="skillInfo.skillDescription"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500"
                :class="{ 'border-red-300': errors.skillDescription }"
                placeholder="请详细描述您的技能和服务内容（50-500字）"
                rows="3"
              ></textarea>
              <p class="text-xs text-gray-400">{{ skillInfo.skillDescription.length }}/500</p>
              <p v-if="errors.skillDescription" class="text-xs text-red-500">{{ errors.skillDescription }}</p>
            </div>

            <!-- 服务案例 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">服务案例（可选）</label>
              <textarea 
                v-model="skillInfo.serviceCases"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500"
                placeholder="请描述您的成功服务案例（有助于提高认证通过率）"
                rows="2"
              ></textarea>
            </div>

            <!-- 技能证书 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">技能证书 <span class="text-red-500">*</span></label>
              <div class="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-amber-500 transition-colors">
                <i class="fa-solid fa-cloud-arrow-up text-gray-400 text-xl mb-2"></i>
                <p class="text-xs text-gray-500">上传技能证书或相关资质证明（支持JPG、PNG格式，最大5MB）</p>
                <input 
                  ref="certificateInput"
                  type="file" 
                  class="hidden"
                  @change="handleCertificateUpload"
                  accept="image/jpeg,image/png"
                />
                <button 
                  type="button" 
                  class="mt-2 px-4 py-2 bg-amber-50 text-amber-600 text-xs rounded-full"
                  @click="$refs.certificateInput.click()"
                >
                  选择文件
                </button>
              </div>
              <!-- 文件预览 -->
              <div v-if="skillInfo.certificateFile" class="mt-2 flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span class="text-xs truncate">{{ skillInfo.certificateFile.name }}</span>
                <button type="button" class="text-red-500 text-sm" @click="removeCertificate">
                  <i class="fa-solid fa-times"></i>
                </button>
              </div>
              <p v-if="errors.certificateFile" class="text-xs text-red-500">{{ errors.certificateFile }}</p>
            </div>

            <!-- 服务方式 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">服务方式 <span class="text-red-500">*</span></label>
              <div class="grid grid-cols-2 gap-3">
                <label class="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-amber-500">
                  <input 
                    type="checkbox" 
                    :value="'线上服务'" 
                    v-model="skillInfo.serviceMethods"
                    class="mr-2 text-amber-500"
                  />
                  <span class="text-sm">线上服务</span>
                </label>
                <label class="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-amber-500">
                  <input 
                    type="checkbox" 
                    :value="'线下服务'" 
                    v-model="skillInfo.serviceMethods"
                    class="mr-2 text-amber-500"
                  />
                  <span class="text-sm">线下服务</span>
                </label>
              </div>
              <p v-if="errors.serviceMethods" class="text-xs text-red-500">{{ errors.serviceMethods }}</p>
            </div>

            <!-- 线下服务地址（仅当选择线下服务时显示） -->
            <div v-if="skillInfo.serviceMethods.includes('线下服务')" class="space-y-3">
              <div class="space-y-1">
                <label class="block text-sm font-medium text-[#333]">详细地址 <span class="text-red-500">*</span></label>
                <textarea 
                  v-model="skillInfo.offlineServiceAddress"
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500"
                  :class="{ 'border-red-300': errors.offlineServiceAddress }"
                  placeholder="请输入详细地址（如：北京市朝阳区建国路88号）"
                  rows="2"
                ></textarea>
                <p v-if="errors.offlineServiceAddress" class="text-xs text-red-500">{{ errors.offlineServiceAddress }}</p>
              </div>
              
              <div class="space-y-1">
                <label class="block text-sm font-medium text-[#333]">精确位置（可选）</label>
                <input 
                  v-model="skillInfo.exactLocation"
                  type="text" 
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500"
                  placeholder="可通过地图定位或手动输入"
                />
                <button 
                  type="button" 
                  class="mt-1 px-3 py-1.5 bg-amber-50 text-amber-600 text-xs rounded-full"
                  @click="getLocation"
                >
                  <i class="fa-solid fa-location-dot mr-1"></i>获取当前位置
                </button>
              </div>
            </div>

            <!-- 联系方式 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">联系方式 <span class="text-red-500">*</span></label>
              <input 
                v-model="skillInfo.contactPhone"
                type="tel" 
                class="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500"
                :class="{ 'border-red-300': errors.contactPhone }"
                placeholder="请输入手机号码"
              />
              <p v-if="errors.contactPhone" class="text-xs text-red-500">{{ errors.contactPhone }}</p>
            </div>

            <!-- 验证码 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">验证码 <span class="text-red-500">*</span></label>
              <div class="flex gap-3">
                <input 
                  v-model="skillInfo.verificationCode"
                  type="text" 
                  class="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500"
                  :class="{ 'border-red-300': errors.verificationCode }"
                  placeholder="请输入验证码"
                />
                <button 
                  type="button" 
                  class="px-4 py-3 bg-amber-50 text-amber-600 text-xs rounded-lg whitespace-nowrap"
                  :disabled="countdown > 0"
                  @click="sendVerificationCode"
                >
                  {{ countdown > 0 ? `${countdown}秒后重新发送` : '获取验证码' }}
                </button>
              </div>
              <p v-if="errors.verificationCode" class="text-xs text-red-500">{{ errors.verificationCode }}</p>
            </div>

            <!-- 身份证正反面上传 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">身份证正面 <span class="text-red-500">*</span></label>
              <div class="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-amber-500 transition-colors">
                <i class="fa-solid fa-id-card text-gray-400 text-xl mb-2"></i>
                <p class="text-xs text-gray-500">上传清晰的身份证人像面照片（支持JPG、PNG格式，最大5MB）</p>
                <input 
                  ref="idCardFrontInput"
                  type="file" 
                  class="hidden"
                  @change="handleIdCardFrontUpload"
                  accept="image/jpeg,image/png"
                />
                <button 
                  type="button" 
                  class="mt-2 px-4 py-2 bg-amber-50 text-amber-600 text-xs rounded-full"
                  @click="$refs.idCardFrontInput.click()"
                >
                  选择照片
                </button>
              </div>
              <div v-if="skillInfo.idCardFront" class="mt-2 flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span class="text-xs truncate">{{ skillInfo.idCardFront.name }}</span>
                <button type="button" class="text-red-500 text-sm" @click="removeIdCardFront">
                  <i class="fa-solid fa-times"></i>
                </button>
              </div>
              <p v-if="errors.idCardFront" class="text-xs text-red-500">{{ errors.idCardFront }}</p>
            </div>

            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">身份证反面 <span class="text-red-500">*</span></label>
              <div class="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-amber-500 transition-colors">
                <i class="fa-solid fa-id-card-clip text-gray-400 text-xl mb-2"></i>
                <p class="text-xs text-gray-500">上传清晰的身份证国徽面照片（支持JPG、PNG格式，最大5MB）</p>
                <input 
                  ref="idCardBackInput"
                  type="file" 
                  class="hidden"
                  @change="handleIdCardBackUpload"
                  accept="image/jpeg,image/png"
                />
                <button 
                  type="button" 
                  class="mt-2 px-4 py-2 bg-amber-50 text-amber-600 text-xs rounded-full"
                  @click="$refs.idCardBackInput.click()"
                >
                  选择照片
                </button>
              </div>
              <div v-if="skillInfo.idCardBack" class="mt-2 flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span class="text-xs truncate">{{ skillInfo.idCardBack.name }}</span>
                <button type="button" class="text-red-500 text-sm" @click="removeIdCardBack">
                  <i class="fa-solid fa-times"></i>
                </button>
              </div>
              <p v-if="errors.idCardBack" class="text-xs text-red-500">{{ errors.idCardBack }}</p>
              <p class="text-xs text-gray-500 mt-1">* 平台将对您的身份信息严格保密，仅用于身份验证</p>
            </div>

            <!-- 视频认证 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">视频认证 <span class="text-red-500">*</span></label>
              <div class="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-amber-500 transition-colors">
                <i class="fa-solid fa-video text-gray-400 text-xl mb-2"></i>
                <p class="text-xs text-gray-500">录制一段10-30秒的视频，说明您的技能特长（支持MP4、MOV格式，最大20MB）</p>
                <input 
                  ref="videoVerificationInput"
                  type="file" 
                  class="hidden"
                  @change="handleVideoVerificationUpload"
                  accept="video/mp4,video/quicktime"
                />
                <button 
                  type="button" 
                  class="mt-2 px-4 py-2 bg-amber-50 text-amber-600 text-xs rounded-full"
                  @click="$refs.videoVerificationInput.click()"
                >
                  选择视频
                </button>
              </div>
              <div v-if="skillInfo.videoVerification" class="mt-2 flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span class="text-xs truncate">{{ skillInfo.videoVerification.name }}</span>
                <button type="button" class="text-red-500 text-sm" @click="removeVideoVerification">
                  <i class="fa-solid fa-times"></i>
                </button>
              </div>
              <p v-if="errors.videoVerification" class="text-xs text-red-500">{{ errors.videoVerification }}</p>
            </div>

            <!-- 隐私协议 -->
            <div class="flex items-start space-x-2 pt-2">
              <input 
                type="checkbox" 
                v-model="skillInfo.agreeTerms"
                class="mt-1 text-amber-500"
              />
              <p class="text-xs text-gray-600">
                我已阅读并同意<a href="/user-agreement" class="text-amber-500">《技能唤醒师服务协议》</a>和
                <a href="/privacy-policy" class="text-amber-500">《隐私政策》</a>，承诺所提供的信息真实有效，如有虚假，愿承担相应法律责任。
              </p>
            </div>
            <p v-if="errors.agreeTerms" class="text-xs text-red-500">{{ errors.agreeTerms }}</p>
          </form>
        </div>
      </div>

      <!-- 提交按钮 -->
      <button 
        class="w-full py-3 bg-amber-500 text-white font-medium rounded-lg shadow-md hover:bg-amber-600 transition-colors"
        :disabled="isSubmitting"
        @click="submitForm"
      >
        {{ isSubmitting ? '提交中...' : '提交注册申请' }}
      </button>

      <!-- 认证说明 -->
      <div class="mt-6 bg-gray-50 rounded-lg p-4">
        <h3 class="text-sm font-medium text-[#333] mb-2 flex items-center">
          <i class="fa-solid fa-circle-info text-amber-500 mr-2"></i>
          认证流程
        </h3>
        <div class="flex justify-between text-xs text-gray-500 mb-3">
          <div class="flex flex-col items-center">
            <div class="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center mb-1">1</div>
            <span>提交申请</span>
          </div>
          <div class="flex-1 flex items-center justify-center">
            <div class="h-0.5 bg-gray-300 w-full max-w-10"></div>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center mb-1">2</div>
            <span>资质审核</span>
          </div>
          <div class="flex-1 flex items-center justify-center">
            <div class="h-0.5 bg-gray-300 w-full max-w-10"></div>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center mb-1">3</div>
            <span>技能认证</span>
          </div>
          <div class="flex-1 flex items-center justify-center">
            <div class="h-0.5 bg-gray-300 w-full max-w-10"></div>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center mb-1">4</div>
            <span>认证通过</span>
          </div>
        </div>
        <ul class="text-xs text-gray-500 space-y-2">
          <li class="flex">
            <span class="mr-1">·</span>
            <span>请确保提供真实、有效的技能信息和证明材料</span>
          </li>
          <li class="flex">
            <span class="mr-1">·</span>
            <span>平台将在2-5个工作日内完成审核，审核结果将通过短信通知</span>
          </li>
          <li class="flex">
            <span class="mr-1">·</span>
            <span>认证成功后，您将获得技能唤醒师专属标识和服务权限</span>
          </li>
          <li class="flex">
            <span class="mr-1">·</span>
            <span>平台有权对虚假信息进行审核并拒绝认证申请</span>
          </li>
        </ul>
      </div>

      <!-- Toast提示 -->
      <div v-if="showToast" class="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm z-50">
        {{ toastMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillPage",
  data() {
    return {
      skillInfo: {
        skillName: '',
        skillLevel: '',
        skillDescription: '',
        serviceCases: '',
        certificateFile: null,
        serviceMethods: [],
        contactPhone: '',
        verificationCode: '',
        agreeTerms: false,
        // 新增身份验证相关字段
        idCardFront: null,
        idCardBack: null,
        videoVerification: null,
        // 线下服务地址字段
        offlineServiceAddress: '',
        exactLocation: ''
      },
      errors: {},
      isSubmitting: false,
      countdown: 0,
      showToast: false,
      toastMessage: ''
    };
  },
  methods: {
    // 处理证书上传
    handleCertificateUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // 文件类型验证
        const validTypes = ['image/jpeg', 'image/png'];
        if (!validTypes.includes(file.type)) {
          this.showToastMessage('请上传JPG或PNG格式的图片');
          return;
        }
        
        // 文件大小验证（5MB）
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
          this.showToastMessage('文件大小不能超过5MB');
          return;
        }
        
        this.skillInfo.certificateFile = file;
        this.errors.certificateFile = '';
        this.showToastMessage('文件上传成功');
      }
    },
    
    // 移除证书
    removeCertificate() {
      this.skillInfo.certificateFile = null;
      if (this.$refs.certificateInput) {
        this.$refs.certificateInput.value = '';
      }
    },
    
    // 获取当前位置
    getLocation() {
      if (navigator.geolocation) {
        this.showToastMessage('正在获取位置信息...');
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // 模拟转换坐标为地址
            this.skillInfo.exactLocation = `纬度: ${position.coords.latitude.toFixed(6)}, 经度: ${position.coords.longitude.toFixed(6)}`;
            this.showToastMessage('位置获取成功');
          },
          (error) => {
            this.showToastMessage('位置获取失败，请手动输入');
            console.error('Geolocation error:', error);
          }
        );
      } else {
        this.showToastMessage('您的浏览器不支持位置定位');
      }
    },
    
    // 处理身份证正面上传
    handleIdCardFrontUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // 文件类型验证
        const validTypes = ['image/jpeg', 'image/png'];
        if (!validTypes.includes(file.type)) {
          this.showToastMessage('请上传JPG或PNG格式的图片');
          return;
        }
        
        // 文件大小验证（5MB）
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
          this.showToastMessage('文件大小不能超过5MB');
          return;
        }
        
        this.skillInfo.idCardFront = file;
        this.errors.idCardFront = '';
        this.showToastMessage('身份证正面上传成功');
      }
    },
    
    // 移除身份证正面
    removeIdCardFront() {
      this.skillInfo.idCardFront = null;
      if (this.$refs.idCardFrontInput) {
        this.$refs.idCardFrontInput.value = '';
      }
    },
    
    // 处理身份证反面上传
    handleIdCardBackUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // 文件类型验证
        const validTypes = ['image/jpeg', 'image/png'];
        if (!validTypes.includes(file.type)) {
          this.showToastMessage('请上传JPG或PNG格式的图片');
          return;
        }
        
        // 文件大小验证（5MB）
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
          this.showToastMessage('文件大小不能超过5MB');
          return;
        }
        
        this.skillInfo.idCardBack = file;
        this.errors.idCardBack = '';
        this.showToastMessage('身份证反面上传成功');
      }
    },
    
    // 移除身份证反面
    removeIdCardBack() {
      this.skillInfo.idCardBack = null;
      if (this.$refs.idCardBackInput) {
        this.$refs.idCardBackInput.value = '';
      }
    },
    
    // 处理视频认证上传
    handleVideoVerificationUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // 文件类型验证
        const validTypes = ['video/mp4', 'video/quicktime'];
        if (!validTypes.includes(file.type)) {
          this.showToastMessage('请上传MP4或MOV格式的视频');
          return;
        }
        
        // 文件大小验证（20MB）
        const maxSize = 20 * 1024 * 1024;
        if (file.size > maxSize) {
          this.showToastMessage('文件大小不能超过20MB');
          return;
        }
        
        this.skillInfo.videoVerification = file;
        this.errors.videoVerification = '';
        this.showToastMessage('视频认证上传成功');
      }
    },
    
    // 移除视频认证
    removeVideoVerification() {
      this.skillInfo.videoVerification = null;
      if (this.$refs.videoVerificationInput) {
        this.$refs.videoVerificationInput.value = '';
      }
    },
    
    // 发送验证码
    sendVerificationCode() {
      // 验证手机号
      const phoneRegex = /^1[3-9]\d{9}$/;
      if (!this.skillInfo.contactPhone) {
        this.errors.contactPhone = '请输入手机号';
        return;
      }
      if (!phoneRegex.test(this.skillInfo.contactPhone)) {
        this.errors.contactPhone = '请输入正确的手机号';
        return;
      }
      
      // 清除错误提示
      this.errors.contactPhone = '';
      
      // 模拟发送验证码
      console.log('发送验证码到:', this.skillInfo.contactPhone);
      this.showToastMessage('验证码已发送，请查收');
      
      // 开始倒计时
      this.countdown = 60;
      const timer = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(timer);
        }
      }, 1000);
    },
    
    // 显示Toast提示
    showToastMessage(message) {
      this.toastMessage = message;
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    },
    
    // 表单验证
    validateForm() {
      const errors = {};
      const phoneRegex = /^1[3-9]\d{9}$/;
      
      // 技能名称验证
      if (!this.skillInfo.skillName.trim()) {
        errors.skillName = '请输入技能名称';
      } else if (this.skillInfo.skillName.trim().length < 2 || this.skillInfo.skillName.trim().length > 20) {
        errors.skillName = '技能名称长度应为2-20个字符';
      }
      
      // 技能等级验证
      if (!this.skillInfo.skillLevel) {
        errors.skillLevel = '请选择技能等级';
      }
      
      // 技能描述验证
      if (!this.skillInfo.skillDescription.trim()) {
        errors.skillDescription = '请输入技能描述';
      } else if (this.skillInfo.skillDescription.trim().length < 50) {
        errors.skillDescription = '技能描述至少需要50个字符';
      } else if (this.skillInfo.skillDescription.trim().length > 500) {
        errors.skillDescription = '技能描述不能超过500个字符';
      }
      
      // 证书上传验证
      if (!this.skillInfo.certificateFile) {
        errors.certificateFile = '请上传技能证书';
      }
      
      // 服务方式验证
      if (this.skillInfo.serviceMethods.length === 0) {
        errors.serviceMethods = '请选择至少一种服务方式';
      }
      
      // 线下服务地址验证
      if (this.skillInfo.serviceMethods.includes('线下服务') && !this.skillInfo.offlineServiceAddress.trim()) {
        errors.offlineServiceAddress = '请输入线下服务详细地址';
      } else if (this.skillInfo.serviceMethods.includes('线下服务') && this.skillInfo.offlineServiceAddress.trim().length < 5) {
        errors.offlineServiceAddress = '详细地址信息不完整';
      }
      
      // 身份证正反面验证
      if (!this.skillInfo.idCardFront) {
        errors.idCardFront = '请上传身份证正面照片';
      }
      
      if (!this.skillInfo.idCardBack) {
        errors.idCardBack = '请上传身份证反面照片';
      }
      
      // 视频认证验证
      if (!this.skillInfo.videoVerification) {
        errors.videoVerification = '请上传视频认证文件';
      }
      
      // 手机号验证
      if (!this.skillInfo.contactPhone) {
        errors.contactPhone = '请输入手机号';
      } else if (!phoneRegex.test(this.skillInfo.contactPhone)) {
        errors.contactPhone = '请输入正确的手机号';
      }
      
      // 验证码验证
      if (!this.skillInfo.verificationCode) {
        errors.verificationCode = '请输入验证码';
      } else if (!/^\d{6}$/.test(this.skillInfo.verificationCode)) {
        errors.verificationCode = '验证码应为6位数字';
      }
      
      // 隐私协议验证
      if (!this.skillInfo.agreeTerms) {
        errors.agreeTerms = '请阅读并同意服务协议和隐私政策';
      }
      
      this.errors = errors;
      return Object.keys(errors).length === 0;
    },
    
    // 提交表单
    submitForm() {
      // 表单验证
      if (!this.validateForm()) {
        return;
      }
      
      // 设置提交中状态
      this.isSubmitting = true;
      
      // 模拟提交数据
      console.log('提交的技能信息:', this.skillInfo);
      
      // 模拟网络请求延迟
      setTimeout(() => {
        this.isSubmitting = false;
        this.showToastMessage('注册申请提交成功');
        // 跳转到提交成功页面
        setTimeout(() => {
          this.$router.push('/register-waker/submit-success');
        }, 1500);
      }, 1500);
    }
  }
};
</script>

<style scoped>
/* 自定义样式 */
input:focus, textarea:focus, select:focus {
  box-shadow: 0 0 0 2px rgba(251, 191, 36, 0.2);
}
</style>