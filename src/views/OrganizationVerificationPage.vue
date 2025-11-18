<template>
  <div class="organization-verification-page">
    <!-- 顶部导航栏 -->
    <div class="header">
      <div class="nav-left" @click="goBack">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h1 class="nav-title pr-10">机构认证</h1>
    </div>

    <!-- 表单内容 -->
    <div class="form-container">
      <!-- 真实信息 -->
      <div class="form-section">
        <h2 class="section-title">
          真实信息
          <span class="required">*</span>
        </h2>
        
        <div class="form-item">
          <label class="form-label">真实姓名</label>
          <input 
            type="text" 
            class="form-input" 
            placeholder="输入真实姓名"
            v-model="formData.realName"
          />
        </div>

        <div class="form-item">
          <label class="form-label">身份证号</label>
          <input 
            type="text" 
            class="form-input" 
            placeholder="输入身份证号"
            v-model="formData.idNumber"
          />
        </div>

        <div class="form-item">
          <label class="form-label">手机号码</label>
          <input 
            type="tel" 
            class="form-input" 
            placeholder="输入手机号码"
            v-model="formData.phone"
          />
        </div>

        <div class="form-item">
          <label class="form-label">组织名称</label>
          <input 
            type="text" 
            class="form-input" 
            placeholder="填写你所在的俱乐部名称"
            v-model="formData.orgName"
          />
        </div>
      </div>

      <!-- 活动组织能力证明 -->
      <div class="form-section">
        <h2 class="section-title">活动组织能力证明</h2>
        
        <div class="form-item">
          <label class="form-label">
            图片证明
            <span class="required">*</span>
          </label>
          
          <div class="upload-box" @click="selectImage">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="#999" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <p class="upload-text">上传图片</p>
          </div>
          <input 
            type="file" 
            ref="fileInput" 
            @change="handleFileChange"
            accept="image/*"
            multiple
            style="display: none"
          />
        </div>

        <div class="instructions">
          <p class="instruction-hint">请上传以下两张截图（均为必填）：</p>
          <ol class="instruction-list">
            <li>
              <span class="instruction-number">1.</span>
              <span class="instruction-text">活动招募截图：展示你在抖音/小红书/微博/微信/相门/闪动等平台发布过的活动，需清晰显示活动名称、招募信息，以及活动现场照片。</span>
            </li>
            <li>
              <span class="instruction-number">2.</span>
              <span class="instruction-text">个人主页截图：提供发布该活动的平台个人主页截图，必须为本人帐号，不可使用他人截图。</span>
            </li>
          </ol>
        </div>
      </div>

      <!-- 营业执照 -->
      <div class="form-section">
        <h2 class="section-title">营业执照</h2>
        
        <div class="form-item">
          <div class="upload-box" @click="selectLicense">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="#999" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <p class="upload-text">上传图片</p>
          </div>
          <input 
            type="file" 
            ref="licenseInput" 
            @change="handleLicenseChange"
            accept="image/*"
            style="display: none"
          />
        </div>

        <div class="license-hint">
          <p>请上传最新的营业执照，格式要求：</p>
          <div class="hint-details">
            <p><span class="hint-icon">①</span>原件照片/彩色扫描件/加盖公章的复印件、证件清晰完整无反光；</p>
            <p><span class="hint-icon">②</span>证件须在有效期内且有效期大于3个月；</p>
            <p><span class="hint-icon">③</span>支持.jpg/.jpeg/.png格式照片，大小不超过5M。</p>
          </div>
        </div>
      </div>

      <!-- 同意条款 -->
      <div class="agreement-section">
        <label class="checkbox-container">
          <input 
            type="checkbox" 
            class="checkbox-input"
            v-model="formData.agreeStore"
          />
          <span class="checkbox-custom"></span>
          <span class="checkbox-label">同意唤醒兽留存信息(如个人身份及银行卡)开通钱包服务</span>
        </label>
        
        <label class="checkbox-container">
          <input 
            type="checkbox" 
            class="checkbox-input"
            v-model="formData.agreeTerms"
          />
          <span class="checkbox-custom"></span>
          <span class="checkbox-label">请阅读并遵守入驻<span class="link">认证申请须知</span></span>
        </label>
      </div>

      <!-- 提交按钮 -->
      <button class="submit-btn" @click="handleSubmit">提交审核</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrganizationVerificationPage',
  data() {
    return {
      formData: {
        realName: '',
        idNumber: '',
        phone: '',
        orgName: '',
        proofImages: [],
        licenseImage: null,
        agreeStore: false,
        agreeTerms: false
      }
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    selectImage() {
      this.$refs.fileInput.click()
    },
    selectLicense() {
      this.$refs.licenseInput.click()
    },
    handleFileChange(e) {
      const files = Array.from(e.target.files)
      this.formData.proofImages = files
      console.log('Selected proof images:', files)
    },
    handleLicenseChange(e) {
      const file = e.target.files[0]
      this.formData.licenseImage = file
      console.log('Selected license:', file)
    },
    handleSubmit() {
      // 验证表单
      if (!this.validateForm()) {
        alert('请填写完整的信息')
        return
      }
      console.log('Submitting:', this.formData)
      alert('提交成功，请等待审核')
    },
    validateForm() {
      return this.formData.realName &&
             this.formData.idNumber &&
             this.formData.phone &&
             this.formData.orgName &&
             this.formData.proofImages.length >= 2 &&
             this.formData.licenseImage &&
             this.formData.agreeStore &&
             this.formData.agreeTerms
    }
  }
}
</script>

<style scoped>
.organization-verification-page {
  min-height: 100vh;
  background: #FDF4F0;
}

/* 顶部导航 */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #FDF4F0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-left {
  width: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.nav-title {
  flex: 1;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0;
}

.nav-right {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
}

.star-icon {
  width: 16px;
  height: 16px;
}

.rating {
  font-size: 14px;
  color: #1a1a1a;
  font-weight: 500;
}

.menu-icon {
  margin-left: 4px;
}

/* 表单容器 */
.form-container {
  padding: 8px 0 24px;
}

/* 表单区块 */
.form-section {
  background: white;
  margin-bottom: 8px;
  padding: 16px;
}

.section-title {
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
}

.required {
  color: #FF6B6B;
  margin-left: 4px;
}

/* 表单项 */
.form-item {
  margin-bottom: 12px;
}

.form-item:last-child {
  margin-bottom: 0;
}

.form-label {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: none;
  background: #F5F5F5;
  border-radius: 4px;
  font-size: 14px;
  color: #1a1a1a;
  box-sizing: border-box;
}

.form-input::placeholder {
  color: #999;
}

.form-input:focus {
  outline: none;
  background: #F0F0F0;
}

/* 上传区域 */
.upload-box {
  width: 96px;
  height: 96px;
  border: 1px dashed #D9D9D9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
}

.upload-box:active {
  background: #F9F9F9;
}

.upload-text {
  font-size: 13px;
  color: #999;
  margin: 4px 0 0 0;
}

/* 说明文字 */
.instructions {
  margin-top: 12px;
  padding: 12px;
  background: #F9F9F9;
  border-radius: 4px;
  font-size: 13px;
  color: #666;
  line-height: 1.6;
}

.instruction-hint {
  margin: 0 0 8px 0;
  color: #666;
}

.instruction-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.instruction-list li {
  display: flex;
  margin-bottom: 8px;
}

.instruction-list li:last-child {
  margin-bottom: 0;
}

.instruction-number {
  color: #1a1a1a;
  margin-right: 4px;
  flex-shrink: 0;
}

.instruction-text {
  flex: 1;
  line-height: 1.5;
}

/* 营业执照说明 */
.license-hint {
  margin-top: 12px;
  font-size: 13px;
  color: #666;
  line-height: 1.6;
}

.license-hint > p {
  margin: 0 0 8px 0;
}

.hint-details {
  margin-top: 4px;
}

.hint-details p {
  margin: 0 0 6px 0;
  display: flex;
  align-items: flex-start;
}

.hint-details p:last-child {
  margin-bottom: 0;
}

.hint-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  background: #F0F0F0;
  border-radius: 50%;
  font-size: 11px;
  margin-right: 6px;
  flex-shrink: 0;
}

/* 同意条款 */
.agreement-section {
  padding: 16px;
  background: transparent;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  cursor: pointer;
}

.checkbox-container:last-child {
  margin-bottom: 0;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.checkbox-custom {
  width: 18px;
  height: 18px;
  border: 1px solid #D9D9D9;
  border-radius: 50%;
  background: white;
  margin-right: 8px;
  flex-shrink: 0;
  position: relative;
  margin-top: 1px;
}

.checkbox-input:checked + .checkbox-custom {
  border-color: #FF6B6B;
  background: white;
}

.checkbox-input:checked + .checkbox-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: #FF6B6B;
  border-radius: 50%;
}

.checkbox-label {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
  flex: 1;
}

.link {
  color: #4A90E2;
  text-decoration: none;
}

/* 提交按钮 */
.submit-btn {
  margin: 8px 16px 20px;
  width: calc(100% - 32px);
  height: 44px;
  background: #FFE082;
  border: none;
  border-radius: 22px;
  font-size: 16px;
  font-weight: 500;
  color: #8B6914;
  cursor: pointer;
  transition: all 0.3s;
}

.submit-btn:active {
  background: #FFD54F;
}
</style>