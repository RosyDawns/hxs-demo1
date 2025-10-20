<template>
  <view class="page">
    <!-- 顶部导航栏 -->
    <view class="header">
      <view class="back-btn" @tap="goBack">
        <text class="icon-back"></text>
      </view>
      <text class="header-title">编辑资料</text>
    </view>

    <!-- 主内容区 -->
    <scroll-view scroll-y class="main-content">
      <!-- 头像区域 -->
      <view class="avatar-section">
        <view class="avatar-wrapper">
          <image src="/static/images/img-15.jpg" class="avatar" mode="aspectFill" />
          <view class="camera-btn" @tap="handleAvatarClick">
            <text class="camera-icon"></text>
          </view>
        </view>
      </view>

      <!-- 基本信息组 -->
      <view class="section-wrapper">
        <view class="card">
          <view
            v-for="(item, index) in basicInfoGroup"
            :key="index"
            class="item-row border-bottom"
            @tap="handleItemClick(item)"
          >
            <text class="item-label">{{ item.label }}</text>
            <view class="item-right">
              <text class="item-value">{{ item.value }}</text>
              <text class="icon-arrow"></text>
            </view>
          </view>
          <!-- 背景图 -->
          <view class="item-row" @tap="handleItemClick(backgroundItem)">
            <text class="item-label">{{ backgroundItem.label }}</text>
            <view class="item-right">
              <view class="bg-preview"></view>
              <text class="icon-arrow"></text>
            </view>
          </view>
        </view>
      </view>

      <!-- 简介 -->
      <view class="section-wrapper">
        <view class="card">
          <view class="item-row" @tap="handleItemClick(introItem)">
            <text class="item-label">{{ introItem.label }}</text>
            <view class="item-right">
              <text class="item-value placeholder">{{ introItem.value }}</text>
              <text class="icon-arrow"></text>
            </view>
          </view>
        </view>
      </view>

      <!-- 详细信息组 -->
      <view class="section-wrapper">
        <view class="card">
          <view
            v-for="(item, index) in detailsGroup"
            :key="index"
            :class="['item-row', index !== detailsGroup.length - 1 ? 'border-bottom' : '']"
            @tap="handleItemClick(item)"
          >
            <text class="item-label">{{ item.label }}</text>
            <view class="item-right">
              <text :class="['item-value', item.placeholder ? 'placeholder' : '']">{{ item.value }}</text>
              <text class="icon-arrow"></text>
            </view>
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
      // 基本信息组
      basicInfoGroup: [
        { label: '名字', value: '张小明', key: 'name' },
        { label: '唤醒营号', value: '1009845189', key: 'id' }
      ],
      // 背景图
      backgroundItem: { label: '背景图', value: '', key: 'background' },
      // 简介
      introItem: {
        label: '简介',
        value: '介绍一下自己',
        key: 'intro',
        placeholder: true
      },
      // 详细信息组
      detailsGroup: [
        { label: '性别', value: '男', key: 'gender' },
        {
          label: '生日',
          value: '生日当天会收到平台祝福',
          key: 'birthday',
          placeholder: true
        },
        {
          label: '地区',
          value: '选择所在的地区',
          key: 'region',
          placeholder: true
        },
        { label: '职业', value: '选择职业', key: 'job', placeholder: true },
        { label: '学校', value: '选择学校', key: 'school', placeholder: true },
        {
          label: '视频认证',
          value: '增加平台粉丝信任度',
          key: 'verify',
          placeholder: true
        }
      ]
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    handleAvatarClick() {
      console.log('点击头像')
    },
    handleItemClick(item) {
      console.log('点击', item.label)
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f7f7f7;
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

.icon-back::before {
  content: '‹';
  font-size: 36rpx;
  color: #333;
}

.header-title {
  flex: 1;
  text-align: center;
  font-size: 28rpx;
  font-weight: 500;
  color: #333;
  padding-right: 64rpx;
}

.main-content {
  flex: 1;
  padding-top: 96rpx;
  padding-bottom: 32rpx;
  background: #f7f7f7;
}

/* 头像区域 */
.avatar-section {
  display: flex;
  justify-content: center;
  padding: 56rpx 0;
}

.avatar-wrapper {
  position: relative;
}

.avatar {
  width: 180rpx;
  height: 180rpx;
  border-radius: 50%;
  object-fit: cover;
}

.camera-btn {
  position: absolute;
  right: 4rpx;
  bottom: 4rpx;
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  background: #000;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.camera-icon::before {
  content: '📷';
  font-size: 20rpx;
  color: #fff;
}

.section-wrapper {
  padding: 0 32rpx;
  margin-top: 20rpx;
}

.card {
  background: #fff;
  border-radius: 16rpx;
  overflow: hidden;
}

.item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32rpx;
  height: 104rpx;
  
  &.border-bottom {
    border-bottom: 1rpx solid #f0f0f0;
  }
}

.item-label {
  font-size: 28rpx;
  color: #666;
  width: 160rpx;
}

.item-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16rpx;
}

.item-value {
  flex: 1;
  font-size: 28rpx;
  color: #333;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 360rpx;
  
  &.placeholder {
    color: #c7c7c7;
  }
}

.icon-arrow::before {
  content: '›';
  font-size: 24rpx;
  color: #d8d8d8;
}

.bg-preview {
  width: 96rpx;
  height: 56rpx;
  border-radius: 6rpx;
  overflow: hidden;
  background: linear-gradient(135deg, #FF6B35 0%, #FF8F5A 50%, #FFBF47 100%);
}
</style>
