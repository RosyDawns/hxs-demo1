<template>
  <view class="exercise-checkin">
    <view class="content">
      <view class="title">你的每一滴汗水都是脂肪的眼泪</view>

      <!-- 运动宣传图 -->
      <view class="promo-image">
        <image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600"
          class="image"
          mode="aspectFill"
        />
      </view>
    </view>

    <view class="divider"></view>

    <!-- 运动类型选择 -->
    <view class="exercise-types">
      <view
        v-for="exercise in exerciseTypes"
        :key="exercise.type"
        :class="['type-item', selectedExerciseType === exercise.type ? 'active' : '']"
        @tap="selectExerciseType(exercise.type)"
      >
        <view :class="['icon-box', exercise.bgColor]">
          <text class="icon" :style="{ color: exercise.color }">{{ exercise.emoji }}</text>
        </view>
        <text class="type-label">{{ exercise.label }}</text>
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
  name: 'ExerciseCheckIn',
  emits: ['submit'],
  data() {
    return {
      selectedExerciseType: 'custom',
      exerciseTypes: [
        {
          type: 'custom',
          label: '自定义',
          emoji: '📏',
          color: '#f97316',
          bgColor: 'bg-orange'
        },
        {
          type: 'gym',
          label: '健身',
          emoji: '🏋️',
          color: '#06b6d4',
          bgColor: 'bg-cyan'
        },
        {
          type: 'ball',
          label: '球类运动',
          emoji: '🏀',
          color: '#f97316',
          bgColor: 'bg-orange'
        },
        {
          type: 'outdoor',
          label: '户外运动',
          emoji: '🏃',
          color: '#3b82f6',
          bgColor: 'bg-blue'
        }
      ]
    };
  },
  computed: {
    canSubmit() {
      return this.selectedExerciseType !== '';
    }
  },
  methods: {
    selectExerciseType(type) {
      this.selectedExerciseType = type;
    },
    
    submitCheckIn(visibility) {
      if (!this.canSubmit) return;
      
      const checkInData = {
        type: 'exercise',
        exerciseType: this.selectedExerciseType,
        visibility,
        timestamp: new Date().toISOString()
      };
      
      this.$emit('submit', checkInData);
      this.resetForm();
    },
    
    resetForm() {
      this.selectedExerciseType = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.exercise-checkin {
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

.promo-image {
  border-radius: 24rpx;
  overflow: hidden;
  margin-bottom: 32rpx;
}

.image {
  width: 100%;
  height: 384rpx;
}

.divider {
  height: 2rpx;
  background: #f5f5f5;
  margin: 32rpx 0;
}

.exercise-types {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24rpx;
  padding: 0 32rpx;
}

.type-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16rpx 0;
  border: 2rpx solid transparent;
  border-radius: 16rpx;
  transition: all 0.3s;
}

.type-item.active {
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

.bg-orange {
  background: #fff3e0;
}

.bg-cyan {
  background: #e0f7fa;
}

.bg-blue {
  background: #e3f2fd;
}

.icon {
  font-size: 48rpx;
}

.type-label {
  font-size: 24rpx;
  color: #666666;
  text-align: center;
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
  color: #ffffff;
}

.action-btn.secondary {
  background: #f5f5f5;
  color: #666666;
}

.action-btn.disabled {
  background: #e0e0e0;
  color: #999999;
}
</style>
