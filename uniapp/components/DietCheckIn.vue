<template>
  <view class="diet-checkin">
    <view class="content">
      <view class="title">管住嘴，迈开腿，瘦成一道闪电！</view>

      <!-- 饮食类型选择 ---->
      <view class="meal-types">
        <view
          v-for="meal in mealTypes"
          :key="meal.type"
          :class="['meal-item', selectedMeal === meal.type ? 'active' : '']"
          @tap="selectMeal(meal.type)"
        >
          <view :class="['icon-box', meal.bgColor]">
            <text class="icon">{{ meal.emoji }}</text>
          </view>
          <text class="meal-label">{{ meal.label }}</text>
        </view>
      </view>

      <!-- 图片上传区 -->
      <view class="upload-area">
        <view v-if="!imageUrl" class="upload-placeholder" @tap="chooseImage">
          <text class="upload-icon">📷</text>
          <text class="upload-text">添加照片</text>
        </view>
        <view v-else class="image-preview">
          <image :src="imageUrl" class="preview-img" mode="aspectFill" />
          <text class="remove-btn" @tap="removeImage">×</text>
        </view>
      </view>

      <!-- 备注输入 -->
      <view class="note-input">
        <textarea
          v-model="note"
          placeholder="记录今天的美食心得..."
          class="textarea"
          maxlength="200"
          :show-confirm-bar="false"
        />
        <text class="char-count">{{ note.length }}/200</text>
      </view>
    </view>

    <view class="divider"></view>

    <!-- 动态按钮 -->
    <view class="actions">
      <view :class="['action-btn', 'primary', !canSubmit ? 'disabled' : '']" @tap="submitCheckIn('public')">
        公开动态
      </view>
      <view :class="['action-btn', 'secondary', !canSubmit ? 'disabled' : '']" @tap="submitCheckIn('private')">
        私密动态
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'DietCheckIn',
  emits: ['submit'],
  data() {
    return {
      selectedMeal: 'breakfast',
      imageUrl: '',
      note: '',
      mealTypes: [
        { type: 'breakfast', label: '早餐', emoji: '🌅', bgColor: 'bg-yellow' },
        { type: 'lunch', label: '午餐', emoji: '☀️', bgColor: 'bg-orange' },
        { type: 'dinner', label: '晚餐', emoji: '🌙', bgColor: 'bg-blue' },
        { type: 'snack', label: '加餐', emoji: '🍎', bgColor: 'bg-green' }
      ]
    }
  },
  computed: {
    canSubmit() {
      return this.selectedMeal !== ''
    }
  },
  methods: {
    selectMeal(type) {
      this.selectedMeal = type
    },

    chooseImage() {
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          this.imageUrl = res.tempFilePaths[0]
        }
      })
    },

    removeImage() {
      this.imageUrl = ''
    },

    submitCheckIn(visibility) {
      if (!this.canSubmit) return

      const checkInData = {
        type: 'diet',
        mealType: this.selectedMeal,
        imageUrl: this.imageUrl,
        note: this.note,
        visibility,
        timestamp: new Date().toISOString()
      }

      this.$emit('submit', checkInData)
      this.resetForm()
    },

    resetForm() {
      this.imageUrl = ''
      this.note = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.diet-checkin {
  padding-bottom: 32rpx;
}

.content {
  padding: 0 32rpx;
}

.title {
  font-size: 36rpx;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32rpx;
}

.meal-types {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24rpx;
  margin-bottom: 32rpx;
}

.meal-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16rpx 0;
  border: 2rpx solid transparent;
  border-radius: 16rpx;
  transition: all 0.3s;
}

.meal-item.active {
  border-color: #ff5722;
}

.icon-box {
  width: 128rpx;
  height: 128rpx;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8rpx;
}

.bg-yellow {
  background: #fff9c4;
}

.bg-orange {
  background: #fff3e0;
}

.bg-blue {
  background: #e3f2fd;
}

.bg-green {
  background: #e8f5e9;
}

.icon {
  font-size: 48rpx;
}

.meal-label {
  font-size: 24rpx;
  color: #666;
  text-align: center;
}

.upload-area {
  margin-bottom: 32rpx;
}

.upload-placeholder {
  height: 320rpx;
  border: 2rpx dashed #ddd;
  border-radius: 16rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fafafa;
}

.upload-icon {
  font-size: 64rpx;
  margin-bottom: 16rpx;
}

.upload-text {
  font-size: 28rpx;
  color: #999;
}

.image-preview {
  position: relative;
  height: 320rpx;
  border-radius: 16rpx;
  overflow: hidden;
}

.preview-img {
  width: 100%;
  height: 100%;
}

.remove-btn {
  position: absolute;
  top: 16rpx;
  right: 16rpx;
  width: 56rpx;
  height: 56rpx;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48rpx;
  line-height: 1;
}

.note-input {
  position: relative;
  background: #f5f5f5;
  border-radius: 16rpx;
  padding: 24rpx;
  margin-bottom: 32rpx;
}

.textarea {
  width: 100%;
  min-height: 200rpx;
  font-size: 28rpx;
  line-height: 1.6;
}

.char-count {
  position: absolute;
  bottom: 16rpx;
  right: 24rpx;
  font-size: 24rpx;
  color: #999;
}

.divider {
  height: 2rpx;
  background: #f5f5f5;
  margin: 32rpx 0;
}

.actions {
  display: flex;
  gap: 24rpx;
  padding: 0 32rpx;
}

.action-btn {
  flex: 1;
  padding: 24rpx 0;
  border-radius: 999rpx;
  font-size: 32rpx;
  font-weight: bold;
  text-align: center;
}

.action-btn.primary {
  background: linear-gradient(90deg, #ff9800 0%, #ff5722 100%);
  color: #fff;
}

.action-btn.secondary {
  background: #f5f5f5;
  color: #666;
}

.action-btn.disabled {
  background: #e0e0e0;
  color: #999;
}
</style>
