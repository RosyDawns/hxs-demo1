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
      <h1 class="text-lg font-bold text-[#333] ml-2">搭子唤醒师注册</h1>
    </header>

    <!-- 主要内容区域 -->
    <div class="pt-20 px-4 pb-20">
      <div class="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <div class="px-5 py-4">
          <h2 class="text-base font-medium text-[#333] mb-3">搭子唤醒师注册</h2>
          <p class="text-xs text-gray-500 mb-6">填写您的兴趣爱好和技能，成为平台认证的搭子唤醒师</p>

          <!-- 表单区域 -->
            <form @submit.prevent="submitForm" class="space-y-4">
              <!-- 昵称 -->
              <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">昵称 <span class="text-red-500">*</span></label>
              <input 
                v-model="partnerInfo.nickname"
                type="text" 
                class="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500"
                :class="{ 'border-red-300': errors.nickname }"
                placeholder="请输入您的昵称（2-12个字符）"
              />
              <p v-if="errors.nickname" class="text-xs text-red-500">{{ errors.nickname }}</p>
            </div>

            <!-- 擅长领域 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">擅长领域 <span class="text-red-500">*</span></label>
              <div class="flex flex-wrap gap-2">
                <label v-for="field in interestFields" :key="field.value" 
                  class="px-3 py-1.5 rounded-full text-xs cursor-pointer transition-all"
                  :class="selectedFields.includes(field.value) ? 
                    'bg-amber-100 text-amber-600 border border-amber-300' : 
                    'bg-gray-50 text-gray-600 border border-gray-200 hover:border-amber-300'"
                >
                  <input 
                    type="checkbox" 
                    :value="field.value" 
                    v-model="selectedFields"
                    class="hidden"
                  />
                  {{ field.label }}
                </label>
              </div>
              <p v-if="errors.selectedFields" class="text-xs text-red-500">{{ errors.selectedFields }}</p>
              <p v-else class="text-xs text-gray-400">请至少选择2个领域（最多5个）</p>
            </div>

            <!-- 自我介绍 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">自我介绍 <span class="text-red-500">*</span></label>
              <textarea 
                v-model="partnerInfo.selfIntroduction"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500"
                :class="{ 'border-red-300': errors.selfIntroduction }"
                placeholder="请详细介绍您的兴趣爱好、特长和交友理念（50-300字）"
                rows="3"
              ></textarea>
              <p class="text-xs text-gray-400">{{ partnerInfo.selfIntroduction.length }}/300</p>
              <p v-if="errors.selfIntroduction" class="text-xs text-red-500">{{ errors.selfIntroduction }}</p>
            </div>

            <!-- 交友期望 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">交友期望 <span class="text-red-500">*</span></label>
              <textarea 
                v-model="partnerInfo.expectation"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500"
                :class="{ 'border-red-300': errors.expectation }"
                placeholder="您希望找到什么样的搭子？（50-300字）"
                rows="3"
              ></textarea>
              <p class="text-xs text-gray-400">{{ partnerInfo.expectation.length }}/300</p>
              <p v-if="errors.expectation" class="text-xs text-red-500">{{ errors.expectation }}</p>
            </div>

            <!-- 服务经验 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">服务经验描述（可选）</label>
              <textarea 
                v-model="partnerInfo.serviceExperience"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500"
                placeholder="请描述您帮助他人找到志同道合朋友的经验（有助于提高认证通过率）"
                rows="2"
              ></textarea>
            </div>

            <!-- 活跃区域 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">活跃区域 <span class="text-red-500">*</span></label>
              <input 
                v-model="partnerInfo.activeArea"
                type="text" 
                class="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500"
                :class="{ 'border-red-300': errors.activeArea }"
                placeholder="请输入您常活跃的城市或区域（如：北京市朝阳区）"
              />
              <p v-if="errors.activeArea" class="text-xs text-red-500">{{ errors.activeArea }}</p>
            </div>

            <!-- 服务方式 -->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">服务方式 <span class="text-red-500">*</span></label>
              <div class="grid grid-cols-2 gap-3">
                <label class="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-amber-500">
                  <input 
                    type="checkbox" 
                    :value="'线上活动'" 
                    v-model="partnerInfo.serviceMethods"
                    class="mr-2 text-amber-500"
                  />
                  <span class="text-sm">线上活动</span>
                </label>
                <label class="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-amber-500">
                  <input 
                    type="checkbox" 
                    :value="'线下活动'" 
                    v-model="partnerInfo.serviceMethods"
                    class="mr-2 text-amber-500"
                  />
                  <span class="text-sm">线下活动</span>
                </label>
              </div>
              <p v-if="errors.serviceMethods" class="text-xs text-red-500">{{ errors.serviceMethods }}</p>
            </div>

            <!-- 线下服务地址（仅当选择线下服务时显示） -->
            <div v-if="partnerInfo.serviceMethods.includes('线下活动')" class="space-y-3">
              <div class="space-y-1">
                <label class="block text-sm font-medium text-[#333]">活动地点 <span class="text-red-500">*</span></label>
                <textarea 
                  v-model="partnerInfo.offlineServiceAddress"
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500"
                  :class="{ 'border-red-300': errors.offlineServiceAddress }"
                  placeholder="请输入常用活动地点（如：北京市朝阳区三里屯太古里）"
                  rows="2"
                ></textarea>
                <p v-if="errors.offlineServiceAddress" class="text-xs text-red-500">{{ errors.offlineServiceAddress }}</p>
              </div>
              
              <div class="space-y-1">
                <label class="block text-sm font-medium text-[#333]">精确位置（可选）</label>
                <input 
                  v-model="partnerInfo.exactLocation"
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
                v-model="partnerInfo.contactPhone"
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
                  v-model="partnerInfo.verificationCode"
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

            <!-- 身份验证照片（个人正面照）-->
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#333]">个人正面照 <span class="text-red-500">*</span></label>
              <div class="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-amber-500 transition-colors">
                <i class="fa-solid fa-user text-gray-400 text-xl mb-2"></i>
                <p class="text-xs text-gray-500">上传清晰的个人正面照片（支持JPG、PNG格式，最大5MB）</p>
                <input 
                  ref="idPhotoInput"
                  type="file" 
                  class="hidden"
                  @change="handleIdPhotoUpload"
                  accept="image/jpeg,image/png"
                />
                <button 
                  type="button" 
                  class="mt-2 px-4 py-2 bg-amber-50 text-amber-600 text-xs rounded-full"
                  @click="$refs.idPhotoInput.click()"
                >
                  选择照片
                </button>
              </div>
              <div v-if="partnerInfo.idPhoto" class="mt-2 flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span class="text-xs truncate">{{ partnerInfo.idPhoto.name }}</span>
                <button type="button" class="text-red-500 text-sm" @click="removeIdPhoto">
                  <i class="fa-solid fa-times"></i>
                </button>
              </div>
              <p v-if="errors.idPhoto" class="text-xs text-red-500">{{ errors.idPhoto }}</p>
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
              <div v-if="partnerInfo.idCardFront" class="mt-2 flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span class="text-xs truncate">{{ partnerInfo.idCardFront.name }}</span>
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
              <div v-if="partnerInfo.idCardBack" class="mt-2 flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span class="text-xs truncate">{{ partnerInfo.idCardBack.name }}</span>
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
                <p class="text-xs text-gray-500">录制一段10-30秒的视频，介绍您的兴趣爱好和交友理念（支持MP4、MOV格式，最大20MB）</p>
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
              <div v-if="partnerInfo.videoVerification" class="mt-2 flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span class="text-xs truncate">{{ partnerInfo.videoVerification.name }}</span>
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
                v-model="partnerInfo.agreeTerms"
                class="mt-1 text-amber-500"
              />
              <p class="text-xs text-gray-600">
                我已阅读并同意<a href="/user-agreement" class="text-amber-500">《搭子唤醒师服务协议》</a>和
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

      <!-- 注册说明 -->
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
            <span>身份审核</span>
          </div>
          <div class="flex-1 flex items-center justify-center">
            <div class="h-0.5 bg-gray-300 w-full max-w-10"></div>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center mb-1">3</div>
            <span>资质认证</span>
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
            <span>请确保提供真实、有效的个人信息和证明材料</span>
          </li>
          <li class="flex">
            <span class="mr-1">·</span>
            <span>平台将在1-3个工作日内完成审核，审核结果将通过短信通知</span>
          </li>
          <li class="flex">
            <span class="mr-1">·</span>
            <span>认证成功后，您将获得搭子唤醒师专属标识和服务权限</span>
          </li>
          <li class="flex">
            <span class="mr-1">·</span>
            <span>平台有权对虚假信息进行审核并拒绝认证申请</span>
          </li>
          <li class="flex">
            <span class="mr-1">·</span>
            <span>所有用户信息将严格保密，仅用于身份验证和匹配服务</span>
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
  name: "PartnerPage",
  data() {
    return {
      partnerInfo: {
        nickname: '',
        selfIntroduction: '',
        expectation: '',
        serviceExperience: '',
        activeArea: '',
        contactPhone: '',
        verificationCode: '',
        idPhoto: null,
        agreeTerms: false,
        // 新增身份验证相关字段
        idCardFront: null,
        idCardBack: null,
        videoVerification: null,
        // 线下服务地址字段
        offlineServiceAddress: '',
        exactLocation: '',
        // 服务方式字段
        serviceMethods: []
      },
      selectedFields: [],
      interestFields: [
        { label: '运动健身', value: 'sports' },
        { label: '户外活动', value: 'outdoor' },
        { label: '美食探店', value: 'food' },
        { label: '文化艺术', value: 'culture' },
        { label: '音乐电影', value: 'music' },
        { label: '旅游出行', value: 'travel' },
        { label: '读书会', value: 'reading' },
        { label: '游戏电竞', value: 'gaming' },
        { label: '宠物爱好者', value: 'pets' },
        { label: '摄影拍照', value: 'photography' },
        { label: '手工制作', value: 'crafts' },
        { label: '其他爱好', value: 'other' }
      ],
      errors: {},
      isSubmitting: false,
      countdown: 0,
      showToast: false,
      toastMessage: ''
    };
  },
  methods: {
    // 处理身份照片上传
    handleIdPhotoUpload(event) {
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
        
        this.partnerInfo.idPhoto = file;
        this.errors.idPhoto = '';
        this.showToastMessage('照片上传成功');
      }
    },
    
    // 移除照片
    removeIdPhoto() {
      this.partnerInfo.idPhoto = null;
      if (this.$refs.idPhotoInput) {
        this.$refs.idPhotoInput.value = '';
      }
    },
    
    // 获取当前位置
    getLocation() {
      if (navigator.geolocation) {
        this.showToastMessage('正在获取位置信息...');
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // 模拟转换坐标为地址
            this.partnerInfo.exactLocation = `纬度: ${position.coords.latitude.toFixed(6)}, 经度: ${position.coords.longitude.toFixed(6)}`;
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
        
        this.partnerInfo.idCardFront = file;
        this.errors.idCardFront = '';
        this.showToastMessage('身份证正面上传成功');
      }
    },
    
    // 移除身份证正面
    removeIdCardFront() {
      this.partnerInfo.idCardFront = null;
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
        
        this.partnerInfo.idCardBack = file;
        this.errors.idCardBack = '';
        this.showToastMessage('身份证反面上传成功');
      }
    },
    
    // 移除身份证反面
    removeIdCardBack() {
      this.partnerInfo.idCardBack = null;
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
        
        this.partnerInfo.videoVerification = file;
        this.errors.videoVerification = '';
        this.showToastMessage('视频认证上传成功');
      }
    },
    
    // 移除视频认证
    removeVideoVerification() {
      this.partnerInfo.videoVerification = null;
      if (this.$refs.videoVerificationInput) {
        this.$refs.videoVerificationInput.value = '';
      }
    },
    
    // 发送验证码
    sendVerificationCode() {
      // 验证手机号
      const phoneRegex = /^1[3-9]\d{9}$/;
      if (!this.partnerInfo.contactPhone) {
        this.errors.contactPhone = '请输入手机号';
        return;
      }
      if (!phoneRegex.test(this.partnerInfo.contactPhone)) {
        this.errors.contactPhone = '请输入正确的手机号';
        return;
      }
      
      // 清除错误提示
      this.errors.contactPhone = '';
      
      // 模拟发送验证码
      console.log('发送验证码到:', this.partnerInfo.contactPhone);
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
      
      // 昵称验证
      if (!this.partnerInfo.nickname.trim()) {
        errors.nickname = '请输入昵称';
      } else if (this.partnerInfo.nickname.trim().length < 2 || this.partnerInfo.nickname.trim().length > 12) {
        errors.nickname = '昵称长度应为2-12个字符';
      }
      
      // 擅长领域验证
      if (this.selectedFields.length < 2) {
        errors.selectedFields = '请至少选择2个擅长领域';
      } else if (this.selectedFields.length > 5) {
        errors.selectedFields = '擅长领域最多选择5个';
      }
      
      // 自我介绍验证
      if (!this.partnerInfo.selfIntroduction.trim()) {
        errors.selfIntroduction = '请输入自我介绍';
      } else if (this.partnerInfo.selfIntroduction.trim().length < 50) {
        errors.selfIntroduction = '自我介绍至少需要50个字符';
      } else if (this.partnerInfo.selfIntroduction.trim().length > 300) {
        errors.selfIntroduction = '自我介绍不能超过300个字符';
      }
      
      // 交友期望验证
      if (!this.partnerInfo.expectation.trim()) {
        errors.expectation = '请输入交友期望';
      } else if (this.partnerInfo.expectation.trim().length < 50) {
        errors.expectation = '交友期望至少需要50个字符';
      } else if (this.partnerInfo.expectation.trim().length > 300) {
        errors.expectation = '交友期望不能超过300个字符';
      }
      
      // 活跃区域验证
      if (!this.partnerInfo.activeArea.trim()) {
        errors.activeArea = '请输入活跃区域';
      } else if (this.partnerInfo.activeArea.trim().length < 2) {
        errors.activeArea = '活跃区域信息不完整';
      }
      
      // 服务方式验证
      if (this.partnerInfo.serviceMethods.length === 0) {
        errors.serviceMethods = '请选择至少一种服务方式';
      }
      
      // 线下服务地址验证
      if (this.partnerInfo.serviceMethods.includes('线下活动') && !this.partnerInfo.offlineServiceAddress.trim()) {
        errors.offlineServiceAddress = '请输入活动地点';
      } else if (this.partnerInfo.serviceMethods.includes('线下活动') && this.partnerInfo.offlineServiceAddress.trim().length < 5) {
        errors.offlineServiceAddress = '活动地点信息不完整';
      }
      
      // 身份证正反面验证
      if (!this.partnerInfo.idCardFront) {
        errors.idCardFront = '请上传身份证正面照片';
      }
      
      if (!this.partnerInfo.idCardBack) {
        errors.idCardBack = '请上传身份证反面照片';
      }
      
      // 视频认证验证
      if (!this.partnerInfo.videoVerification) {
        errors.videoVerification = '请上传视频认证文件';
      }
      
      // 手机号验证
      if (!this.partnerInfo.contactPhone) {
        errors.contactPhone = '请输入手机号';
      } else if (!phoneRegex.test(this.partnerInfo.contactPhone)) {
        errors.contactPhone = '请输入正确的手机号';
      }
      
      // 验证码验证
      if (!this.partnerInfo.verificationCode) {
        errors.verificationCode = '请输入验证码';
      } else if (!/^\d{6}$/.test(this.partnerInfo.verificationCode)) {
        errors.verificationCode = '验证码应为6位数字';
      }
      
      // 身份照片验证
      if (!this.partnerInfo.idPhoto) {
        errors.idPhoto = '请上传个人正面照片';
      }
      
      // 隐私协议验证
      if (!this.partnerInfo.agreeTerms) {
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
      
      // 整合提交数据
      const submitData = {
        ...this.partnerInfo,
        fields: this.selectedFields
      };
      
      // 模拟提交数据
      console.log('提交的搭子信息:', submitData);
      
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