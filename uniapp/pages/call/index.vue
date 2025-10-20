<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header">
      <view class="back" @tap="goBack">‹</view>
      <view class="tabs">
        <text v-for="t in tabs" :key="t" class="tab" :class="{ active: activeTab === t }" @tap="activeTab = t">{{ t }}</text>
      </view>
    </view>

    <!-- 用户信息 -->
    <view v-if="activeTab === '打Call'" class="user-info">
      <image src="/static/images/img_38.jpeg" class="avatar" mode="aspectFill" />
      <view class="meta">
        <view class="name-row">
          <text class="name">张小明</text>
          <text class="badge">唤醒师</text>
        </view>
        <text class="stats">关注 25 | 粉丝 560</text>
      </view>
      <view class="actions">
        <view class="action-btn">
          <text class="icon">☎</text>
          <text class="label">打Call</text>
        </view>
        <view class="action-btn">
          <text class="icon">🎁</text>
          <text class="label">送礼物</text>
        </view>
      </view>
    </view>

    <!-- 能量树主区 -->
    <view v-if="activeTab === '打Call'" class="tree-area">
      <image src="/static/images/tree_2.png" class="tree" mode="aspectFit" />
      <!-- 果实点位 -->
      <view class="fruit fruit-orange" style="left: 18%; top: 25%;" @tap="clickFruit('登入')">
        <text class="fruit-label">登入</text>
        <text class="fruit-badge">-10%</text>
      </view>
      <view class="fruit fruit-purple" style="left: 57%; top: 32%;" @tap="clickFruit('动态')">
        <text class="fruit-label">动态</text>
        <text class="fruit-time">02:16</text>
      </view>
      <view class="fruit fruit-red" style="left: 73%; top: 52%;" @tap="clickFruit('唤醒')">
        <text class="fruit-label">唤醒</text>
        <text class="fruit-badge">-10%</text>
      </view>
      <view class="fruit fruit-blue" style="left: 26%; top: 48%;" @tap="clickFruit('灵兽孵化')">
        <text class="fruit-label">灵兽孵化</text>
        <text class="fruit-time">10-4#</text>
      </view>
      <view class="fruit fruit-green" style="left: 42%; top: 62%;" @tap="clickFruit('赏金')">
        <text class="fruit-label">赏金</text>
        <text class="fruit-time">03:25</text>
      </view>
    </view>

    <!-- 其他tab内容区 -->
    <view v-if="activeTab !== '打Call'" class="content-area">
      <text class="placeholder">{{ activeTab }}（内容占位）</text>
    </view>

    <!-- 底部输入栏 -->
    <view v-if="activeTab === '打Call'" class="input-bar">
      <view class="mic">🎤</view>
      <view class="input-box">
        <input v-model="messageText" placeholder="发消息" />
      </view>
      <view class="send" @tap="sendMessage">OK</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabs: ['打Call', '动态', '橱窗', '星推官'],
      activeTab: '打Call',
      messageText: ''
    }
  },
  methods: {
    goBack() { uni.navigateBack() },
    clickFruit(name) { uni.showToast({ title: `点击${name}果实`, icon: 'none' }) },
    sendMessage() {
      if (!this.messageText.trim()) return
      uni.showToast({ title: `发送: ${this.messageText}`, icon: 'none' })
      this.messageText = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.page { background: linear-gradient(180deg, #1d7df0, #79c6f9); min-height: 100vh; position: relative; }
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 99; display: flex; align-items: center; padding: 20rpx 30rpx; }
.back { width: 60rpx; height: 60rpx; display: flex; align-items: center; justify-content: center; font-size: 40rpx; color: #fff; margin-right: 20rpx; }
.tabs { display: flex; }
.tab { color: #fff; font-size: 28rpx; margin-right: 30rpx; padding-bottom: 10rpx; }
.tab.active { border-bottom: 4rpx solid #fff; font-weight: 600; }
.user-info { position: fixed; top: 120rpx; left: 30rpx; z-index: 98; display: flex; align-items: center; background: rgba(255,255,255,.15); border-radius: 999rpx 0 0 999rpx; padding: 12rpx 30rpx 12rpx 12rpx; }
.avatar { width: 100rpx; height: 100rpx; border-radius: 50%; margin-right: 20rpx; }
.meta { flex: 1; }
.name-row { display: flex; align-items: center; margin-bottom: 10rpx; }
.name { color: #fff; font-size: 32rpx; font-weight: 700; margin-right: 12rpx; }
.badge { background: rgba(255,255,255,.2); color: #fff; font-size: 20rpx; padding: 4rpx 12rpx; border-radius: 999rpx; }
.stats { color: #fff; font-size: 22rpx; }
.actions { display: flex; margin-left: 40rpx; }
.action-btn { display: flex; flex-direction: column; align-items: center; margin-left: 30rpx; }
.action-btn .icon { font-size: 32rpx; margin-bottom: 8rpx; }
.action-btn .label { color: #fff; font-size: 20rpx; }
.tree-area { position: absolute; top: 0; left: 0; right: 0; bottom: 300rpx; display: flex; align-items: center; justify-content: center; }
.tree { width: 100%; height: 100%; }
.fruit { position: absolute; width: 100rpx; height: 100rpx; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 8rpx 16rpx rgba(0,0,0,.2); }
.fruit-orange { background: linear-gradient(135deg, #ff8a4c, #ff6b6b); }
.fruit-purple { background: linear-gradient(135deg, #9c4dff, #7f3fff); }
.fruit-red { background: linear-gradient(135deg, #ff4757, #ff3838); }
.fruit-blue { background: linear-gradient(135deg, #45b7ff, #2a9dff); }
.fruit-green { background: linear-gradient(135deg, #26de81, #20bf6b); }
.fruit-label { color: #fff; font-size: 22rpx; font-weight: 700; }
.fruit-badge, .fruit-time { color: #fff; font-size: 18rpx; margin-top: 6rpx; }
.content-area { position: absolute; top: 140rpx; bottom: 100rpx; left: 0; right: 0; background: #fff; border-radius: 48rpx 48rpx 0 0; display: flex; align-items: center; justify-content: center; }
.placeholder { color: #999; font-size: 28rpx; }
.input-bar { position: fixed; bottom: 120rpx; left: 30rpx; right: 30rpx; display: flex; align-items: center; gap: 20rpx; }
.mic { width: 96rpx; height: 96rpx; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 36rpx; }
.input-box { flex: 1; background: #fff; border-radius: 999rpx; height: 96rpx; padding: 0 32rpx; }
.input-box input { width: 100%; height: 100%; font-size: 26rpx; }
.send { width: 96rpx; height: 96rpx; background: linear-gradient(90deg, #ff8a4c, #ff6b6b); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 28rpx; font-weight: 700; }
</style>
