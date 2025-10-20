<template>
  <view class="champion-card">
    <!-- 大师头像 -->
    <view class="avatar-box">
      <image
        :src="master.avatar"
        :alt="master.name"
        class="avatar"
        mode="aspectFill"
        @error="handleImageError"
      />
    </view>

    <!-- 大师信息 -->
    <view class="info">
      <!-- 姓名和头像 -->
      <view class="header">
        <view class="avatar-name">
          <image
            :src="master.avatar"
            :alt="master.name"
            class="small-avatar"
            mode="aspectFill"
            @error="handleImageError"
          />
          <text class="name">{{ master.name }}</text>
        </view>
        <view class="call-btn" @tap="handleCall">去打Call</view>
      </view>

      <!-- 标题 -->
      <text class="title">{{ master.title }}</text>

      <!-- 资质信息 -->
      <text class="specialty">擅长：{{ master.specialty }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'ChampionMasterCard',
  props: {
    master: {
      type: Object,
      required: true,
      default: () => ({
        id: '',
        name: '',
        title: '',
        specialty: '',
        avatar: ''
      })
    }
  },
  methods: {
    handleCall() {
      this.$emit('call', this.master.id);
    },

    handleImageError(event) {
      console.log('图片加载失败', event);
    }
  }
};
</script>

<style lang="scss" scoped>
.champion-card {
  background: #ffffff;
  border-radius: 32rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.avatar-box {
  position: relative;
  width: 100%;
  height: 320rpx;
  background: #f5f5f5;
}

.avatar {
  width: 100%;
  height: 100%;
}

.info {
  padding: 16rpx;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24rpx;
}

.avatar-name {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
}

.small-avatar {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  overflow: hidden;
  background: #f5f5f5;
  margin-right: 8rpx;
  flex-shrink: 0;
}

.name {
  font-size: 22rpx;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.call-btn {
  padding: 4rpx 16rpx;
  color: #ff5722;
  font-size: 20rpx;
  border-radius: 999rpx;
  border: 2rpx solid #ff5722;
  white-space: nowrap;
  flex-shrink: 0;
  margin-left: 8rpx;
}

.title {
  display: block;
  font-size: 28rpx;
  font-weight: bold;
  color: #333333;
  margin-bottom: 8rpx;
}

.specialty {
  display: block;
  font-size: 24rpx;
  color: #666666;
  padding-bottom: 16rpx;
}
</style>
