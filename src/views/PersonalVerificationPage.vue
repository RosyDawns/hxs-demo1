<template>
  <div class="personal-verification-page">
    <!-- 顶部导航栏 -->
    <div class="header">
      <div class="header-left" @click="goBack">
        <i class="fas fa-arrow-left"></i>
      </div>
      <div class="header-center pr-20">
        <h1>个人认证</h1>
      </div>
    </div>

    <!-- 表单内容 -->
    <div class="form-container">
      <!-- 真实信息部分 -->
      <div class="form-section">
        <h2 class="section-title">真实信息 <span class="required">*</span></h2>
        <div class="form-group">
          <label class="form-label">真实姓名</label>
          <input
            type="text"
            class="form-input"
            placeholder="输入真实姓名"
            v-model="formData.realName"
          />
        </div>
        <div class="form-group">
          <label class="form-label">身份证号</label>
          <input
            type="text"
            class="form-input"
            placeholder="输入身份证号"
            v-model="formData.idNumber"
          />
        </div>
        <div class="form-group">
          <label class="form-label">手机号码</label>
          <input
            type="tel"
            class="form-input"
            placeholder="输入手机号码"
            v-model="formData.phoneNumber"
          />
        </div>
      </div>

      <!-- 活动组织能力证明 -->
      <div class="form-section">
        <h2 class="section-title">活动组织能力证明</h2>
        <div class="form-group">
          <label class="form-label"
            >图片证明 <span class="required">*</span></label
          >
          <div class="upload-area" @click="triggerUpload">
            <i class="fas fa-plus"></i>
            <p>上传图片</p>
          </div>
          <input
            type="file"
            ref="fileInput"
            style="display: none"
            accept="image/*"
            @change="handleFileUpload"
            multiple
          />
        </div>

        <div class="upload-instructions">
          <p class="instruction-title">请上传以下两张截图（均为必填）：</p>
          <ol class="instruction-list">
            <li>
              活动招募截图：展示你在抖音/小红书/微博/微信/闲鱼/闪动等平台发布过的活动，需清晰显示活动名称、招募信息，以及活动现场照片。
            </li>
            <li>
              个人主页截图：提供发布该活动的平台个人主页截图，必须为本人帐号，不可使用他人截图。
            </li>
          </ol>
        </div>
      </div>

      <!-- 其他说明 -->
      <div class="form-section">
        <h2 class="section-title">其他说明</h2>
        <textarea
          class="form-textarea"
          placeholder="简要介绍自己的活动组织经验与能力，或上传过往组织活动的相关链接，更容易通过审核哦～"
          v-model="formData.otherDescription"
        ></textarea>
      </div>

      <!-- 同意条款 -->
      <div class="agreement-section">
        <label class="checkbox-label">
          <input
            type="checkbox"
            v-model="formData.agreeInfo"
            class="form-checkbox"
          />
          <span class="checkbox-text"
            >同意唤醒兽留存信息(如个人身份及银行卡开通钱包服务)</span
          >
        </label>
        <label class="checkbox-label">
          <input
            type="checkbox"
            v-model="formData.agreeTerms"
            class="form-checkbox"
          />
          <span class="checkbox-text">已阅读并遵守入驻认证申请须知</span>
        </label>
      </div>

      <!-- 确认提交按钮 -->
      <div class="submit-section">
        <button class="submit-button" @click="submitForm">确认提交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalVerificationPage",
  data() {
    return {
      formData: {
        realName: "",
        idNumber: "",
        phoneNumber: "",
        uploadedFiles: [],
        otherDescription: "",
        agreeInfo: false,
        agreeTerms: false,
      },
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    triggerUpload() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const files = event.target.files;
      if (files && files.length > 0) {
        // 这里可以处理文件上传逻辑
        console.log("Selected files:", files);
        // 在实际应用中，这里会有文件上传的API调用
        // 将选中的文件添加到uploadedFiles数组
        for (let i = 0; i < files.length; i++) {
          this.formData.uploadedFiles.push(files[i]);
        }
      }
    },
    submitForm() {
      // 表单提交逻辑
      if (!this.validateForm()) {
        alert("请填写完整的认证信息");
        return;
      }
      // 提交表单数据
      console.log("Form data submitted:", this.formData);
      // 在实际应用中，这里会有表单提交的API调用
      alert("提交成功！等待审核结果");
    },
    validateForm() {
      // 表单验证逻辑
      return (
        this.formData.realName &&
        this.formData.idNumber &&
        this.formData.phoneNumber &&
        this.formData.uploadedFiles.length >= 2 &&
        this.formData.agreeInfo &&
        this.formData.agreeTerms
      );
    },
  },
};
</script>

<style scoped>
/* 基础样式 - 调整背景色为淡粉色 */
.personal-verification-page {
  min-height: 100vh;
  background-color: #fff5f5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

/* 顶部导航栏样式 */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #f0f0f0;
}

.header-left,
.header-right {
  display: flex;
  align-items: center;
  width: 60px;
}

.header-left {
  justify-content: flex-start;
}

.header-center {
  flex: 1;
  text-align: center;
}

.header-right {
  justify-content: flex-end;
}

.header-left i {
  font-size: 18px;
  color: #333;
  cursor: pointer;
}

.header-center h1 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-right i {
  font-size: 18px;
  color: #333;
}

.score {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

/* 表单容器样式 - 移除内边距 */
.form-container {
  padding: 0;
  background-color: transparent;
}

/* 表单区块样式 - 调整为简洁的白色块 */
.form-section {
  margin-bottom: 16px;
  background-color: #fff;
  border-radius: 0;
  padding: 16px 20px;
  box-shadow: none;
}

/* 标题样式 - 调整间距 */
.section-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
  position: relative;
}

.required {
  color: #ff7875;
  margin-left: 4px;
}

/* 表单项样式 - 调整间距 */
.form-group {
  margin-bottom: 16px;
}

.form-group:last-child {
  margin-bottom: 0;
}

.form-label {
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  font-weight: normal;
}

/* 输入框样式 - 调整圆角和背景色 */
.form-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  font-size: 15px;
  box-sizing: border-box;
  transition: all 0.3s;
  background-color: #fff;
}

.form-input:focus {
  outline: none;
  border-color: #ff7875;
  background-color: #fff;
  box-shadow: 0 0 0 2px rgba(255, 120, 117, 0.1);
}

/* 上传区域样式 - 调整圆角和背景色 */
.upload-area {
  width: 100px;
  height: 100px;
  border: 1px dashed #d9d9d9;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  background-color: #fff;
}

.upload-area:hover {
  border-color: #ff7875;
  background-color: #fff5f5;
}

.upload-area i {
  font-size: 24px;
  color: #ff7875;
  margin-bottom: 8px;
}

.upload-area p {
  font-size: 14px;
  color: #999;
  margin: 0;
}

/* 上传说明样式 - 移除左侧边框，调整内边距 */
.upload-instructions {
  margin-top: 16px;
  padding: 12px 16px;
  background-color: #f9f9f9;
  border-radius: 4px;
  border-left: none;
}

.instruction-title {
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 10px;
  color: #333;
}

.instruction-list {
  margin: 0;
  padding-left: 20px;
}

.instruction-list li {
  font-size: 13px;
  line-height: 1.7;
  color: #666;
  margin-bottom: 8px;
  position: relative;
}

.instruction-list li:last-child {
  margin-bottom: 0;
}

/* 文本域样式 - 调整圆角和背景色 */
.form-textarea {
  width: 100%;
  height: 120px;
  padding: 12px 15px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  font-size: 15px;
  resize: none;
  box-sizing: border-box;
  transition: all 0.3s;
  background-color: #fff;
  line-height: 1.6;
}

.form-textarea:focus {
  outline: none;
  border-color: #ff7875;
  background-color: #fff;
  box-shadow: 0 0 0 2px rgba(255, 120, 117, 0.1);
}

/* 同意条款样式 - 调整间距 */
.agreement-section {
  margin-top: 24px;
  padding: 0 20px 40px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  cursor: pointer;
  transition: color 0.3s;
}

.checkbox-label:hover .checkbox-text {
  color: #ff7875;
}

/* 自定义复选框样式 */
.form-checkbox {
  margin-right: 8px;
  margin-top: 3px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  position: relative;
  background-color: #fff;
}

.form-checkbox:checked {
  background-color: #ff7875;
  border-color: #ff7875;
}

.form-checkbox:checked::after {
  content: "✓";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.checkbox-text {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  flex: 1;
}

/* 提交按钮样式 */
.submit-section {
  padding: 0 20px 40px;
  margin-top: -20px;
}

.submit-button {
  width: 100%;
  padding: 14px;
  background-color: #ff7875;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #ff5a55;
}

.submit-button:active {
  background-color: #ff4a45;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .form-section {
    padding: 16px 16px;
    margin-bottom: 12px;
  }

  .agreement-section {
    padding: 0 16px 32px;
    margin-top: 20px;
  }

  .submit-section {
    padding: 0 16px 32px;
    margin-top: -16px;
  }

  .upload-area {
    width: 90px;
    height: 90px;
  }

  .header {
    padding: 14px 16px;
  }

  .header-center h1 {
    font-size: 17px;
  }
}
</style>
