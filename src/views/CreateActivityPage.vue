<template>
  <div class="create-activity-page">
    <!-- 顶部导航 -->
    <header class="header">
      <button class="back-btn" @click="goBack">
        <i class="fa fa-angle-left"></i>
      </button>
      <h1 class="title">编辑活动</h1>
    </header>

    <!-- 主表单内容 -->
    <main class="main-content">
      <!-- 基础信息 -->
      <section class="form-section">
        <h2 class="section-title">
          基础信息
          <span class="required">*</span>
        </h2>

        <div class="form-group">
          <label class="form-label">活动名称</label>
          <input
            v-model="formData.title"
            type="text"
            placeholder="请输入"
            class="form-input"
            maxlength="25"
          />
          <span class="char-count">{{ formData.title.length }}/25</span>
        </div>

        <div class="form-group">
          <label class="form-label">活动时间</label>
          <div class="time-input" @click="showTimePicker = true">
            <span class="input-text">{{
              formData.time || "设置活动时间"
            }}</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">活动地点</label>
          <div class="location-input" @click="showLocationPicker = true">
            <span class="input-text">{{
              formData.location || "设置活动地点"
            }}</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">活动类型</label>
          <div class="type-input" @click="showTypePicker = true">
            <span class="input-text">{{
              formData.type || "设置活动类型"
            }}</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">活动人数</label>
          <input
            v-model="formData.maxPeople"
            type="text"
            placeholder="输入活动人数"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label class="form-label">截止报名</label>
          <div class="deadline-input" @click="showDeadlinePicker = true">
            <span class="input-text">{{
              formData.deadline || "设置报名截止时间"
            }}</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">费用类型</label>
          <div class="fee-type-radio">
            <label class="radio-item">
              <input type="radio" v-model="formData.feeType" value="free" />
              <span class="radio-label">免费参加</span>
            </label>
            <label class="radio-item">
              <input type="radio" v-model="formData.feeType" value="aa" />
              <span class="radio-label">AA制</span>
            </label>
            <label class="radio-item">
              <input
                type="radio"
                v-model="formData.feeType"
                value="paid"
                checked
              />
              <span class="radio-label">线上付费</span>
            </label>
          </div>
        </div>

        <div class="form-group" v-if="formData.feeType === 'paid'">
          <label class="form-label">付费金额</label>
          <input
            v-model="formData.fee"
            type="text"
            placeholder="输入金额"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label class="form-label">能量币可抵扣额度</label>
          <input
            v-model="formData.energyDeduction"
            type="text"
            placeholder="输入额度"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label class="form-label">添加星推荐佣金</label>
          <input
            v-model="formData.commission"
            type="text"
            placeholder="输入佣金"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label class="form-label">活动分组</label>
          <div class="group-radio">
            <label class="radio-item">
              <input type="radio" v-model="formData.hasGroup" value="no" />
              <span class="radio-label">不分组</span>
            </label>
            <label class="radio-item">
              <input type="radio" v-model="formData.hasGroup" value="yes" />
              <span class="radio-label">分组</span>
            </label>
          </div>
        </div>
      </section>

      <!-- 活动描述 -->
      <section class="form-section">
        <h2 class="section-title">
          活动描述
          <span class="required">*</span>
        </h2>

        <div class="form-group">
          <label class="form-label">活动摄影</label>
          <div class="photo-radio">
            <label class="radio-item">
              <input
                type="radio"
                v-model="formData.hasPhotography"
                value="included"
              />
              <span class="radio-label">含活动摄影</span>
            </label>
            <label class="radio-item">
              <input
                type="radio"
                v-model="formData.hasPhotography"
                value="notIncluded"
              />
              <span class="radio-label">不含摄影</span>
            </label>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">活动亮点</label>
          <div class="highlight-input" @click="showHighlightPicker = true">
            <span class="input-text">{{
              formData.highlights || "选择活动亮点"
            }}</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">活动退款</label>
          <div class="refund-input" @click="showRefundPicker = true">
            <span class="input-text">{{
              formData.refundPolicy || "请选择退款政策"
            }}</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">活动描述</label>
          <div class="description-input" @click="showDescriptionEditor = true">
            <span class="input-text">{{
              formData.description || "设置活动类型"
            }}</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
      </section>

      <!-- 活动图片 -->
      <section class="form-section">
        <div class="form-group">
          <label class="form-label">活动图片</label>
          <div class="image-upload-area">
            <div class="upload-box" @click="uploadImage">
              <i class="fa fa-cloud-upload"></i>
              <p>点击上传或拖拽图片到此处</p>
              <span class="upload-hint">支持 JPG、PNG 格式，最大 5MB</span>
            </div>
            <div class="upload-tips">
              <button class="select-btn">选择图片</button>
            </div>
          </div>
        </div>
      </section>

      <!-- 报名设置 -->
      <section class="form-section">
        <h2 class="section-title">报名设置</h2>

        <div class="form-group">
          <label class="checkbox-item">
            <input type="checkbox" v-model="formData.requireRealName" />
            <span class="checkbox-label">需要实名</span>
          </label>
        </div>

        <div class="form-group">
          <label class="checkbox-item">
            <input type="checkbox" v-model="formData.limitPerPerson" />
            <span class="checkbox-label">限制人数</span>
          </label>
        </div>

        <div class="form-group agreement-section">
          <label class="checkbox-item">
            <input
              type="checkbox"
              v-model="formData.agreementAccepted"
              checked
            />
            <span class="checkbox-label">
              同意确事萌商务分信息(如个人身份及联系卡)分通过该包服务
            </span>
          </label>
        </div>
      </section>
    </main>

    <!-- 底部按钮 -->
    <footer class="footer-buttons">
      <button class="btn-draft">保存草稿</button>
      <button class="btn-submit">提交申核</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "CreateActivityPage",
  data() {
    return {
      formData: {
        title: "",
        time: "",
        location: "",
        type: "",
        maxPeople: "",
        deadline: "",
        feeType: "paid",
        fee: "",
        energyDeduction: "",
        commission: "",
        hasGroup: "no",
        hasPhotography: "included",
        highlights: "",
        refundPolicy: "",
        description: "",
        requireRealName: false,
        limitPerPerson: false,
        agreementAccepted: true,
      },

      showTimePicker: false,
      showLocationPicker: false,
      showTypePicker: false,
      showDeadlinePicker: false,
      showHighlightPicker: false,
      showRefundPicker: false,
      showDescriptionEditor: false,
    };
  },
  mounted() {},
  methods: {
    goBack() {
      this.$router.back();
    },

    uploadImage() {
      // 触发图片上传
      console.log("Upload image");
    },
    saveAsDraft() {
      // 保存草稿
      console.log("Save as draft", this.formData);
    },
    submitForReview() {
      // 提交审核
      console.log("Submit for review", this.formData);
    },
  },
};
</script>

<style scoped>
.create-activity-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 80px;
}

/* 顶部导航 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid #eee;
  z-index: 100;
}

.back-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
}

.title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: 500;
  color: #222;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #666;
}

.rating i {
  color: #ffb800;
  font-size: 14px;
}

.history-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 18px;
  color: #666;
}

/* 主内容 */
.main-content {
  padding-top: 56px;
  background: white;
}

.form-section {
  background: white;
  margin-bottom: 8px;
  padding: 16px;
}

.section-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.required {
  color: #ff4d4f;
  font-size: 14px;
}

.form-group {
  margin-bottom: 16px;
  position: relative;
}

.form-label {
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  height: 44px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 14px;
  color: #333;
  background: #fafafa;
}

.form-input::placeholder {
  color: #999;
}

.char-count {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: #999;
}

/* 点击输入项 */
.time-input,
.location-input,
.type-input,
.deadline-input,
.highlight-input,
.refund-input,
.description-input {
  width: 100%;
  height: 44px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fafafa;
  cursor: pointer;
}

.input-text {
  font-size: 14px;
  color: #333;
}

.time-input .input-text:empty::before,
.location-input .input-text:empty::before,
.type-input .input-text:empty::before,
.deadline-input .input-text:empty::before,
.highlight-input .input-text:empty::before,
.refund-input .input-text:empty::before,
.description-input .input-text:empty::before {
  content: attr(placeholder);
  color: #999;
}

/* Radio 样式 */
.fee-type-radio,
.group-radio,
.photo-radio {
  display: flex;
  gap: 16px;
}

.radio-item {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-item input[type="radio"] {
  width: 18px;
  height: 18px;
  margin-right: 6px;
  accent-color: #ff6b35;
}

.radio-label {
  font-size: 14px;
  color: #333;
}

/* Checkbox 样式 */
.checkbox-item {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
}

.checkbox-item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin-right: 8px;
  margin-top: 2px;
  accent-color: #ff6b35;
}

.checkbox-label {
  font-size: 14px;
  color: #333;
  line-height: 1.5;
}

.agreement-section {
  padding: 12px;
  background: #fff5f0;
  border-radius: 8px;
  margin-top: 16px;
}

.agreement-section .checkbox-label {
  font-size: 13px;
  color: #666;
}

/* 图片上传区域 */
.image-upload-area {
  margin-top: 8px;
}

.upload-box {
  width: 100%;
  height: 180px;
  border: 2px dashed #d9d9d9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  background: #fafafa;
}

.upload-box:hover {
  border-color: #ff6b35;
  background: #fff9f7;
}

.upload-box i {
  font-size: 32px;
  color: #bfbfbf;
  margin-bottom: 8px;
}

.upload-box p {
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
}

.upload-hint {
  font-size: 12px;
  color: #999;
}

.upload-tips {
  margin-top: 12px;
  text-align: center;
}

.select-btn {
  padding: 8px 24px;
  background: #ff6b35;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}

/* 底部按钮 */
.footer-buttons {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 12px 16px;
  padding-bottom: calc(12px + env(safe-area-inset-bottom));
  display: flex;
  gap: 12px;
  border-top: 1px solid #eee;
  z-index: 100;
}

.btn-draft,
.btn-submit {
  flex: 1;
  height: 44px;
  border-radius: 22px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-draft {
  background: #f5f5f5;
  color: #666;
}

.btn-draft:hover {
  background: #ebebeb;
}

.btn-submit {
  background: linear-gradient(90deg, #ff8a4c, #ff6b35);
  color: white;
}

.btn-submit:hover {
  opacity: 0.9;
}

</style>
