<template>
  <view class="mood-checkin">
    <view class="content">
      <view class="title">记录今天的心情</view>

      <!-- 心情选择 -->
      <view class="mood-types">
        <view
          v-for="mood in moodTypes"
          :key="mood.type"
          :class="['mood-item', selectedMood === mood.type ? 'active' : '']"
          @tap="selectMood(mood.type)"
        >
          <text class="mood-emoji">{{ mood.emoji }}</text>
          <text class="mood-label">{{ mood.label }}</text>
        </view>
      </view>

      <!-- 心情描述 -->
      <view class="mood-note">
        <textarea
          v-model="moodNote"
          placeholder="分享你的心情故事..."
          class="textarea"
          maxlength="200"
          :show-confirm-bar="false"
        />
        <text class="char-count">{{ moodNote.length }}/200</text>
      </view>

      <!-- 标签选择 -->
      <view class="tags-section">
        <text class="tags-title">选择标签</text>
        <view class="tags">
          <view
            v-for="tag in availableTags"
            :key="tag"
            :class="['tag', selectedTags.includes(tag) ? 'selected' : '']"
            @tap="toggleTag(tag)"
          >
            {{ tag }}
          </view>
        </view>
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
  name: 'MoodCheckIn',
  emits: ['submit'],
  data() {
    return {
      selectedMood: '',
      moodNote: '',
      selectedTags: [],
      moodTypes: [
        { type: 'happy', emoji: '😊', label: '开心' },
        { type: 'excited', emoji: '🤩', label: '兴奋' },
        { type: 'calm', emoji: '😌', label: '平静' },
        { type: 'tired', emoji: '😴', label: '疲惫' },
        { type: 'sad', emoji: '😢', label: '难过' },
        { type: 'angry', emoji: '😠', label: '生气' }
      ],
      availableTags: ['运动后', '工作中', '休息时', '吃饭后', '聚会中', '独处时']
    }
  },
  computed: {
    canSubmit() {
      return this.selectedMood !== ''
    }
  },
  methods: {
    selectMood(type) {
      this.selectedMood = type
    },

    toggleTag(tag) {
      const index = this.selectedTags.indexOf(tag)
      if (index > -1) {
        this.selectedTags.splice(index, 1)
      } else {
        if (this.selectedTags.length < 3) {
          this.selectedTags.push(tag)
        } else {
          uni.showToast({
            title: '最多选择3个标签',
            icon: 'none'
          })
        }
      }
    },

    submitCheckIn(visibility) {
      if (!this.canSubmit) return

      const checkInData = {
        type: 'mood',
        mood: this.selectedMood,
        note: this.moodNote,
        tags: this.selectedTags,
        visibility,
        timestamp: new Date().toISOString()
      }

      this.$emit('submit', checkInData)
      this.resetForm()
    },

    resetForm() {
      this.selectedMood = ''
      this.moodNote = ''
      this.selectedTags = []
    }
  }
}
</script>

<style lang="scss" scoped>
.mood-checkin {
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

.mood-types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24rpx;
  margin-bottom: 32rpx;
}

.mood-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24rpx 16rpx;
  background: #f5f5f5;
  border: 2rpx solid transparent;
  border-radius: 16rpx;
  transition: all 0.3s;
}

.mood-item.active {
  background: #fff3e0;
  border-color: #ff5722;
}

.mood-emoji {
  font-size: 56rpx;
  margin-bottom: 12rpx;
}

.mood-label {
  font-size: 26rpx;
  color: #666;
}

.mood-note {
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

.tags-section {
  margin-bottom: 32rpx;
}

.tags-title {
  display: block;
  font-size: 28rpx;
  color: #333;
  margin-bottom: 16rpx;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
}

.tag {
  padding: 12rpx 24rpx;
  background: #f5f5f5;
  border: 2rpx solid transparent;
  border-radius: 999rpx;
  font-size: 24rpx;
  color: #666;
  transition: all 0.3s;
}

.tag.selected {
  background: #fff3e0;
  border-color: #ff5722;
  color: #ff5722;
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
