<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header">
      <view class="back-btn" @tap="goBack">
        <text class="back-icon">‹</text>
      </view>
      <text class="title">通用</text>
    </view>

    <!-- 主内容 -->
    <scroll-view scroll-y class="content">
      <view class="section">
        <view class="card">
          <view
            v-for="(item, index) in generalSettings"
            :key="index"
            :class="['item', index < generalSettings.length - 1 ? 'border' : '']"
            @tap="handleItemClick(item)"
          >
            <view class="left">
              <view :class="['icon-box', item.iconBg]">
                <text :class="item.icon" :style="{ color: item.iconColor }"></text>
              </view>
              <text class="label">{{ item.label }}</text>
            </view>
            <view class="right">
              <text class="value">{{ item.value }}</text>
              <text class="arrow">›</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 缓存清理 -->
      <view class="section">
        <view class="card">
          <view class="item" @tap="clearCache">
            <view class="left">
              <view class="icon-box red">
                <text class="icon-trash"></text>
              </view>
              <text class="label">清除缓存</text>
            </view>
            <text class="value">128.5 MB</text>
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
      generalSettings: [
        {
          label: '语言',
          value: '简体中文',
          icon: 'icon-language',
          iconBg: 'blue',
          iconColor: '#3b82f6'
        },
        {
          label: '字体大小',
          value: '标准',
          icon: 'icon-font',
          iconBg: 'green',
          iconColor: '#10b981'
        },
        {
          label: '深色模式',
          value: '跟随系统',
          icon: 'icon-moon',
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
    handleItemClick(item) {
      console.log('点击', item.label)
      uni.showToast({ title: `${item.label}设置`, icon: 'none' })
    },
    clearCache() {
      uni.showModal({
        title: '提示',
        content: '确定要清除缓存吗？',
        success: (res) => {
          if (res.confirm) {
            uni.showToast({ title: '清除成功', icon: 'success' })
          }
        }
      })
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
  margin-bottom: 20rpx;
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
}

.icon-box {
  width: 72rpx;
  height: 72rpx;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
  
  &.blue {
    background: rgba(59, 130, 246, 0.1);
  }
  &.green {
    background: rgba(16, 185, 129, 0.1);
  }
  &.purple {
    background: rgba(168, 85, 247, 0.1);
  }
  &.red {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }
}

.icon-language::before {
  content: '🌐';
}
.icon-font::before {
  content: 'A';
}
.icon-moon::before {
  content: '🌙';
}
.icon-trash::before {
  content: '🗑️';
}

.label {
  font-size: 28rpx;
  font-weight: 500;
  color: #333;
}

.right {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.value {
  font-size: 26rpx;
  color: #999;
}

.arrow {
  font-size: 24rpx;
  color: #d8d8d8;
}
</style>
