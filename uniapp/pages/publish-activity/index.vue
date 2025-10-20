<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header">
      <text class="back" @tap="goBack">‹</text>
      <text class="title">发布动态</text>
    </view>

    <!-- 图片上传区 -->
    <view class="images-area">
      <view v-for="(img, idx) in images" :key="idx" class="image-item">
        <image :src="img" class="img" mode="aspectFill" />
        <text class="remove" @tap="removeImage(idx)">×</text>
      </view>
      <view v-if="images.length < 9" class="add-btn" @tap="addImage">+</view>
    </view>

    <!-- 标题输入 -->
    <view class="input-section">
      <input v-model="title" placeholder="添加标题" class="title-input" />
    </view>

    <!-- 内容输入 -->
    <view class="input-section">
      <textarea v-model="content" placeholder="这一刻的想法… 支持 @用户 / #话题" class="content-textarea" auto-height maxlength="500" />
    </view>

    <!-- 推荐话题 -->
    <view class="tags-section">
      <text class="tag-label">推荐话题</text>
      <view class="tags">
        <text v-for="tag in recommendTags" :key="tag" class="tag" @tap="insertTag(tag)">{{ tag }}</text>
      </view>
    </view>

    <!-- 功能按钮 -->
    <view class="actions">
      <view class="action-btn" @tap="insertTopic"># 话题</view>
      <view class="action-btn" @tap="mentionUser">@ 用户</view>
    </view>

    <!-- 位置和可见性 -->
    <view class="settings">
      <view class="setting-item" @tap="selectLocation">
        <text class="setting-icon">📍</text>
        <text class="setting-text">{{ location || '选择位置' }}</text>
        <text class="arrow">›</text>
      </view>
      <view class="setting-item">
        <text class="setting-icon">🔓</text>
        <text class="setting-text">公开可见</text>
        <text class="arrow">›</text>
      </view>
    </view>

    <!-- 底部发布 -->
    <view class="footer">
      <view class="draft-btn" @tap="saveDraft">💾 存草稿</view>
      <view class="publish-btn" @tap="publish">发布动态</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      title: '',
      content: '',
      location: '',
      recommendTags: ['#周末健身指南', '#上海健身教练', '#周末健身搭子']
    }
  },
  methods: {
    goBack() { uni.navigateBack() },
    addImage() {
      uni.chooseImage({
        count: 9 - this.images.length,
        success: (res) => {
          this.images.push(...res.tempFilePaths)
        }
      })
    },
    removeImage(idx) { this.images.splice(idx, 1) },
    insertTag(tag) { this.content += ` ${tag} ` },
    insertTopic() { this.content += ' #话题 ' },
    mentionUser() { this.content += ' @用户 ' },
    selectLocation() { uni.showToast({ title: '位置选择功能', icon: 'none' }) },
    saveDraft() { uni.showToast({ title: '已存草稿', icon: 'success' }) },
    publish() {
      if (!this.title && !this.content) {
        uni.showToast({ title: '请输入内容', icon: 'none' })
        return
      }
      uni.showToast({ title: '发布成功', icon: 'success' })
      setTimeout(() => { uni.navigateBack() }, 1500)
    }
  }
}
</script>

<style lang="scss" scoped>
.page { background: #fff; min-height: 100vh; padding-bottom: 180rpx; }
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 99; background: #fff; display: flex; align-items: center; padding: calc(var(--status-bar-height) + 20rpx) 30rpx 20rpx; border-bottom: 1rpx solid #f0f0f0; }
.back { width: 48rpx; height: 48rpx; display: flex; align-items: center; justify-content: center; font-size: 40rpx; color: #333; margin-right: 20rpx; }
.title { font-size: 32rpx; font-weight: 700; color: #222; }
.images-area { display: flex; flex-wrap: wrap; gap: 16rpx; padding: calc(var(--status-bar-height) + 120rpx) 30rpx 30rpx; }
.image-item { position: relative; width: 200rpx; height: 200rpx; border-radius: 16rpx; overflow: hidden; }
.img { width: 100%; height: 100%; }
.remove { position: absolute; top: 8rpx; right: 8rpx; width: 48rpx; height: 48rpx; background: rgba(0,0,0,.5); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32rpx; }
.add-btn { width: 200rpx; height: 200rpx; border: 2rpx dashed #ddd; border-radius: 16rpx; display: flex; align-items: center; justify-content: center; font-size: 80rpx; color: #ddd; }
.input-section { padding: 0 30rpx 30rpx; }
.title-input { width: 100%; font-size: 30rpx; color: #222; }
.content-textarea { width: 100%; min-height: 300rpx; font-size: 26rpx; color: #333; line-height: 1.6; }
.tags-section { padding: 0 30rpx 30rpx; }
.tag-label { font-size: 24rpx; color: #999; display: block; margin-bottom: 16rpx; }
.tags { display: flex; flex-wrap: wrap; gap: 16rpx; }
.tag { background: #f5f5f5; color: #666; padding: 12rpx 24rpx; border-radius: 999rpx; font-size: 24rpx; }
.actions { display: flex; gap: 20rpx; padding: 0 30rpx 30rpx; }
.action-btn { background: #f5f5f5; color: #333; padding: 16rpx 32rpx; border-radius: 999rpx; font-size: 24rpx; }
.settings { padding: 0 30rpx; }
.setting-item { display: flex; align-items: center; padding: 30rpx 0; border-bottom: 1rpx solid #f0f0f0; }
.setting-icon { font-size: 32rpx; margin-right: 16rpx; }
.setting-text { flex: 1; font-size: 26rpx; color: #333; }
.arrow { font-size: 28rpx; color: #999; }
.footer { position: fixed; bottom: 0; left: 0; right: 0; background: #fff; padding: 30rpx; padding-bottom: calc(30rpx + env(safe-area-inset-bottom)); display: flex; gap: 20rpx; box-shadow: 0 -2rpx 16rpx rgba(0,0,0,.06); }
.draft-btn { background: #f5f5f5; color: #666; padding: 24rpx 32rpx; border-radius: 999rpx; font-size: 26rpx; }
.publish-btn { flex: 1; background: linear-gradient(90deg, #ff8a4c, #ff6b6b); color: #fff; text-align: center; padding: 24rpx 0; border-radius: 999rpx; font-size: 28rpx; font-weight: 700; }
</style>
