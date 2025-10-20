<template>
  <view class="page">
    <!-- 顶部封面区域 -->
    <view class="header-bg" :style="{ backgroundImage: 'url(/static/images/img_40.jpg)' }">
      <!-- 返回和更多按钮 -->
      <view class="top-bar">
        <view class="back-btn" @tap="goBack">
          <text class="back-icon">‹</text>
        </view>
        <view class="more-btn">
          <text class="more-icon">⋯</text>
        </view>
      </view>

      <!-- 用户信息区域 -->
      <view class="user-section">
        <view class="user-header">
          <image src="/static/images/img-15.jpg" class="user-avatar" mode="aspectFill" />
          <view class="user-info">
            <text class="user-name">李教练</text>
            <text class="user-id">唤醒兽号: 123456789</text>
            <text class="user-location">IP属地: 上海</text>
          </view>
          <view class="follow-btn">关注</view>
        </view>

        <!-- 个人简介 -->
        <view class="bio">
          <text class="bio-text">国家二级运动员,从事游泳行业8年,至今学员1万+</text>
          <text class="bio-text">特长: 青少年长训专业训练, 蛙泳, 自由泳</text>
          <text class="bio-text">您身边的游泳教练, 普及游泳知识!</text>
        </view>

        <!-- 标签 -->
        <view class="tags">
          <text class="tag gender">♀</text>
          <text class="tag">上海浦东</text>
          <text class="tag">技能派</text>
          <text class="tag">游泳唤醒师</text>
          <text class="tag">游泳教练</text>
        </view>

        <!-- 数据统计 -->
        <view class="stats">
          <view class="stat-item">
            <text class="stat-num">280</text>
            <text class="stat-label">关注</text>
          </view>
          <view class="stat-item">
            <text class="stat-num">2.1万</text>
            <text class="stat-label">粉丝</text>
          </view>
          <view class="stat-item">
            <text class="stat-num">10.3万</text>
            <text class="stat-label">获赞与收藏</text>
          </view>
          <view class="stat-item">
            <view class="stat-btn">脉圈</view>
          </view>
          <view class="stat-item">
            <view class="stat-btn">真实评价 4.8分</view>
          </view>
        </view>

        <!-- 服务信息 -->
        <view class="service-info">
          <view class="service-header">
            <text class="service-status">营业中 10:00-22:00</text>
            <text class="service-more">信息/设施 ›</text>
          </view>
          <view class="facilities">
            <text class="facility">有登山机</text>
            <text class="facility">按月付费</text>
            <text class="facility">恒温泳池</text>
            <text class="facility">休息区</text>
          </view>
        </view>

        <!-- 地址和联系方式 -->
        <view class="contact-section">
          <view class="address">
            <text class="address-text">徐泾镇叶联路333弄金地天御18号001</text>
            <text class="distance">驾车1km,需约3分钟</text>
          </view>
          <view class="contact-btns">
            <view class="contact-btn" @tap="handleChat">
              <text class="btn-icon">💬</text>
            </view>
            <view class="contact-btn" @tap="handleCall">
              <text class="btn-icon">📞</text>
            </view>
          </view>
        </view>

        <!-- 服务卡片 -->
        <view class="service-cards">
          <view class="service-card-item" v-for="(card, idx) in serviceCards" :key="idx">
            <image :src="card.image" class="card-img" mode="aspectFill" />
            <view class="card-price">{{ card.price }}</view>
            <text class="card-name">{{ card.name }}</text>
          </view>
        </view>
      </view>

    </view>

    <!-- 底部内容区 -->
    <view class="content-area">
      <!-- 标签栏 -->
      <view class="tabs">
        <view class="tabs-scroll">
          <view :class="['tab', activeTab === 0 ? 'active' : '']" @tap="activeTab = 0">
            <text class="tab-text">动态</text>
          </view>
          <view class="tab" @tap="navTo('/pages/store/index')">
            <text class="tab-text">橱窗</text>
          </view>
          <view class="tab" @tap="navTo('/pages/services/index')">
            <text class="tab-text">星推官</text>
          </view>
          <view class="tab" @tap="navTo('/pages/call/index')">
            <text class="tab-text">打Call</text>
          </view>
        </view>
        <view class="tab-actions">
          <text class="tab-icon">🔍</text>
          <text class="tab-icon">🎁</text>
        </view>
      </view>

      <!-- 动态列表 -->
      <view class="notes-grid">
        <view v-for="note in notes" :key="note.id" class="note-item" @tap="viewNote(note.id)">
          <image :src="note.imageUrl" class="note-img" mode="aspectFill" />
          <view class="note-info">
            <text class="note-title">{{ note.title }}</text>
            <view v-if="note.isVideo" class="video-badge">▶</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'OuyangPage',
  data() {
    return {
      activeTab: 0,
      serviceCards: [
        { name: '体验课', price: '体验卡：￥100', image: '/static/images/img_40.jpg' },
        { name: '单次课', price: '体验卡：￥200', image: '/static/images/img_40.jpg' },
        { name: '10次卡', price: '体验卡：￥300', image: '/static/images/img_40.jpg' }
      ],
      notes: [
        {
          id: 1,
          title: '女生专属跑山包，终于不用将就男款啦',
          imageUrl: 'https://picsum.photos/id/1059/300/200',
          isTop: true,
          isVideo: true
        },
        {
          id: 2,
          title: '硬核装备分享 | 重装阿布吉措篇',
          imageUrl: 'https://picsum.photos/id/1060/300/200',
          isTop: true,
          isVideo: true
        },
        {
          id: 3,
          title: '云南滇西徒步路线分享，新手友好',
          imageUrl: 'https://picsum.photos/id/1061/300/200',
          isTop: false,
          isVideo: false
        },
        {
          id: 4,
          title: '雪山攀登必备装备清单，小白也能轻松准备',
          imageUrl: 'https://picsum.photos/id/1062/300/200',
          isTop: false,
          isVideo: false
        }
      ]
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    handleChat() {
      uni.setStorageSync('chatUsername', '李教练')
      uni.navigateTo({ url: '/pages/chat/index' })
    },
    handleCall() {
      uni.showToast({ title: '拨打电话功能', icon: 'none' })
    },
    navTo(url) {
      uni.navigateTo({ url })
    },
    viewNote(id) {
      uni.navigateTo({ url: `/pages/dynamic-detail/index?id=${id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #f5f5f5;
}

/* 顶部背景区 */
.header-bg {
  position: relative;
  padding: 80rpx 30rpx 120rpx;
  background-size: cover;
  background-position: center;
  color: #fff;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40rpx;
}

.back-btn, .more-btn {
  width: 64rpx;
  height: 64rpx;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-icon, .more-icon {
  font-size: 48rpx;
  color: #fff;
}

/* 用户信息区 */
.user-section {
  padding: 30rpx;
}

.user-header {
  display: flex;
  align-items: center;
  margin-bottom: 30rpx;
  position: relative;
}

.user-avatar {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  border: 4rpx solid #fff;
  margin-right: 30rpx;
}

.user-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12rpx;
}

.user-name {
  font-size: 40rpx;
  font-weight: 700;
}

.user-id, .user-location {
  font-size: 24rpx;
  opacity: 0.9;
}

.follow-btn {
  position: absolute;
  right: 0;
  top: 0;
  background: #ff4757;
  color: #fff;
  padding: 12rpx 40rpx;
  border-radius: 999rpx;
  font-size: 28rpx;
  font-weight: 600;
}

/* 简介 */
.bio {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
  margin-bottom: 30rpx;
}

.bio-text {
  font-size: 26rpx;
  line-height: 1.6;
  opacity: 0.95;
}

/* 标签 */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
  margin-bottom: 30rpx;
}

.tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 12rpx 24rpx;
  border-radius: 999rpx;
  font-size: 24rpx;
  
  &.gender {
    color: #ff6b9d;
  }
}

/* 统计 */
.stats {
  display: flex;
  justify-content: space-between;
  padding: 20rpx 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rpx;
}

.stat-num {
  font-size: 36rpx;
  font-weight: 700;
}

.stat-label {
  font-size: 22rpx;
  opacity: 0.9;
}

.stat-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1rpx solid #fff;
  padding: 8rpx 20rpx;
  border-radius: 999rpx;
  font-size: 22rpx;
}

/* 服务信息 */
.service-info {
  margin-top: 30rpx;
}

.service-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20rpx;
}

.service-status {
  font-size: 26rpx;
  font-weight: 600;
}

.service-more {
  font-size: 26rpx;
  opacity: 0.9;
}

.facilities {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
}

.facility {
  background: rgba(255, 255, 255, 0.2);
  padding: 8rpx 24rpx;
  border-radius: 999rpx;
  font-size: 24rpx;
}

/* 联系信息 */
.contact-section {
  display: flex;
  justify-content: space-between;
  margin-top: 30rpx;
}

.address {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.address-text {
  font-size: 26rpx;
}

.distance {
  font-size: 22rpx;
  opacity: 0.8;
}

.contact-btns {
  display: flex;
  gap: 20rpx;
}

.contact-btn {
  width: 80rpx;
  height: 80rpx;
  background: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon {
  font-size: 40rpx;
}

/* 服务卡片 */
.service-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16rpx;
  padding: 16rpx;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 16rpx;
  margin-top: 30rpx;
}

.service-card-item {
  position: relative;
  border-radius: 16rpx;
  overflow: hidden;
  background: #fff;
}

.card-img {
  width: 100%;
  height: 176rpx;
}

.card-price {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 12rpx;
  background: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent);
  color: #fff;
  font-size: 22rpx;
  text-align: center;
}

.card-name {
  display: block;
  padding: 12rpx;
  text-align: center;
  font-size: 24rpx;
  background: #fff;
  color: #333;
}

/* 底部内容区 */
.content-area {
  background: #fff;
  border-radius: 48rpx 48rpx 0 0;
  margin-top: -80rpx;
  position: relative;
  z-index: 10;
}

/* 标签栏 */
.tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1rpx solid #f0f0f0;
}

.tabs-scroll {
  display: flex;
  padding: 30rpx 0 20rpx 30rpx;
}

.tab {
  padding: 20rpx 40rpx;
  position: relative;
  
  &.active {
    .tab-text {
      color: #ff6b6b;
      font-weight: 700;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 48rpx;
      height: 4rpx;
      background: #ff6b6b;
      border-radius: 2rpx;
    }
  }
}

.tab-text {
  font-size: 28rpx;
  color: #666;
}

.tab-actions {
  display: flex;
  gap: 32rpx;
  padding-right: 40rpx;
}

.tab-icon {
  font-size: 36rpx;
  color: #999;
}

/* 动态列表 */
.notes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16rpx;
  padding: 30rpx;
}

.note-item {
  border-radius: 16rpx;
  overflow: hidden;
  position: relative;
  background: #f5f5f5;
}

.note-img {
  width: 100%;
  height: 320rpx;
}

.note-info {
  padding: 16rpx;
  position: relative;
}

.note-title {
  font-size: 26rpx;
  color: #333;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.video-badge {
  position: absolute;
  bottom: 16rpx;
  right: 16rpx;
  width: 48rpx;
  height: 48rpx;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20rpx;
}
</style>
