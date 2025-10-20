<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header">
      <view class="back-btn" @tap="goBack">
        <text class="back-icon">‹</text>
      </view>
      <text class="title">隐私管理</text>
    </view>

    <!-- 主内容 -->
    <scroll-view scroll-y class="content">
      <view class="section">
        <view class="card">
          <view
            v-for="(item, index) in privacySettings"
            :key="index"
            :class="['item', index < privacySettings.length - 1 ? 'border' : '']"
          >
            <view class="left">
              <view :class="['icon-box', item.iconBg]">
                <text :class="item.icon" :style="{ color: item.iconColor }"></text>
              </view>
              <view class="text-box">
                <text class="label">{{ item.label }}</text>
                <text v-if="item.desc" class="desc">{{ item.desc }}</text>
              </view>
            </view>
            <switch :checked="item.enabled" @change="onSwitchChange($event, item)" color="#FF6B6B" />
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      privacySettings: [
        {
          label: '允许他人查看我的资料',
          desc: '开启后他人可以查看你的个人资料',
          enabled: true,
          icon: 'icon-eye',
          iconBg: 'blue',
          iconColor: '#3b82f6'
        },
        {
          label: '允许陌生人添加好友',
          desc: '开启后陌生人可以添加你为好友',
          enabled: false,
          icon: 'icon-user-plus',
          iconBg: 'green',
          iconColor: '#10b981'
        },
        {
          label: '显示在线状态',
          desc: '开启后他人可以看到你的在线状态',
          enabled: true,
          icon: 'icon-signal',
          iconBg: 'orange',
          iconColor: '#f97316'
        },
        {
          label: '个性化推荐',
          desc: '根据你的使用习惯推荐内容',
          enabled: true,
          icon: 'icon-magic',
          iconBg: 'purple',
          iconColor: '#a855f7'
        }
      ]
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    onSwitchChange(e, item) {
      item.enabled = e.detail.value
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #f7f7f7, #f0f0f0);
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 96rpx;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 24rpx;
  z-index: 50;
}

.back-btn {
  width: 80rpx;
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -16rpx;
}

.back-icon {
  font-size: 36rpx;
  color: #333;
}

.title {
  flex: 1;
  text-align: center;
  font-size: 28rpx;
  font-weight: 500;
  color: #333;
  margin-left: -64rpx;
}

.content {
  padding-top: 96rpx;
  padding-bottom: 32rpx;
}

.section {
  padding: 0 32rpx;
}

.card {
  background: #fff;
  border-radius: 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.03);
  overflow: hidden;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32rpx;
  
  &.border {
    border-bottom: 1rpx solid #f0f0f0;
  }
}

.left {
  display: flex;
  align-items: center;
  gap: 24rpx;
  flex: 1;
}

.icon-box {
  width: 72rpx;
  height: 72rpx;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
  flex-shrink: 0;
  
  &.blue {
    background: rgba(59, 130, 246, 0.1);
  }
  &.green {
    background: rgba(16, 185, 129, 0.1);
  }
  &.orange {
    background: rgba(249, 115, 22, 0.1);
  }
  &.purple {
    background: rgba(168, 85, 247, 0.1);
  }
}

.icon-eye::before { content: '👁️'; }
.icon-user-plus::before { content: '➕'; }
.icon-signal::before { content: '📶'; }
.icon-magic::before { content: '✨'; }

.text-box {
  display: flex;
  flex-direction: column;
  gap: 4rpx;
}

.label {
  font-size: 28rpx;
  font-weight: 500;
  color: #333;
}

.desc {
  font-size: 24rpx;
  color: #999;
}
</style>
