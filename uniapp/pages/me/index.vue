<template>
  <view class="page">
    <view class="custom-header" :style="{paddingTop: statusBarHeight + 'px'}">
      <button class="add-friends-btn" @tap="goToAddFriends">
        <text>👤+ 添加好友</text>
      </button>
    </view>

    <view class="profile-section">
      <view class="user-card">
        <image src="/static/images/img-15.jpg" class="user-avatar" mode="aspectFill" />
        <view class="user-info">
          <view class="user-name-row">
            <text class="name">张小明</text>
            <text class="gender male">♂</text>
          </view>
          <text class="user-id">唤醒兽ID: 123456789</text>
          <view class="user-stats">
            <text><text class="num">982</text> 粉丝</text>
            <text><text class="num">1780</text> 关注</text>
            <text><text class="num">1563</text> 收藏</text>
          </view>
        </view>
        <view class="settings-icon" @tap="goToSettings">
          <text>⚙️</text>
        </view>
      </view>

      <view class="tags-row">
        <text class="tag">上海</text>
        <text class="tag">实名认证</text>
        <text class="tag">技能派</text>
        <text class="tag">到店服务</text>
      </view>
    </view>

    <view class="functions-card">
      <view class="func-grid">
        <view class="func-item" @tap="goToOrders">
          <text class="func-icon">📄</text>
          <text class="func-label">订单</text>
        </view>
        <view class="func-item" @tap="goToFavorites">
          <text class="func-icon">⭐</text>
          <text class="func-label">收藏</text>
        </view>
        <view class="func-item" @tap="goToPendingReview">
          <text class="func-icon">💬</text>
          <text class="func-label">待评价</text>
        </view>
        <view class="func-item" @tap="goToReviews">
          <text class="func-icon">✅</text>
          <text class="func-label">真实评价</text>
        </view>
      </view>
    </view>

    <view class="all-functions-card">
      <view class="card-header">
        <text class="card-title">全部功能</text>
        <text class="more-arrow">›</text>
      </view>
      <view class="func-grid">
        <view class="func-item" @tap="goToWallet">
          <text class="func-icon">💰</text>
          <text class="func-label">我的钱包</text>
        </view>
        <view class="func-item" @tap="goToRegisterWaker">
          <text class="func-icon">✓</text>
          <text class="func-label">注册唤醒师</text>
        </view>
        <view class="func-item" @tap="goToAlliance">
          <text class="func-icon">🔷</text>
          <text class="func-label">唤醒联盟</text>
        </view>
        <view class="func-item" @tap="goToTeam">
          <text class="func-icon">👥</text>
          <text class="func-label">醒狮团队</text>
        </view>
      </view>
    </view>

    <view class="tabs-section">
      <scroll-view scroll-x class="tabs-bar">
        <text 
          v-for="(tab, idx) in tabs" 
          :key="idx"
          :class="['tab', activeTab === idx ? 'active' : '']"
          @tap="activeTab = idx"
        >
          {{ tab }}
        </text>
      </scroll-view>

      <view class="tab-content">
        <!-- 动态内容 -->
        <view v-if="activeTab === 0" class="dynamics-grid">
          <view v-for="item in dynamicList" :key="item.id" class="dynamic-item" @tap="handleDynamicClick(item.id)">
            <image :src="item.image" class="dynamic-img" mode="aspectFill" />
            <text class="dynamic-title">{{ item.title }}</text>
            <view class="dynamic-footer">
              <image :src="item.avatar" class="author-avatar" mode="aspectFill" />
              <text class="likes">❤️ {{ item.likes }}</text>
            </view>
          </view>
        </view>
        
        <!-- 关注内容 -->
        <view v-else-if="activeTab === 1">
          <view v-if="followViewMode === 'mode1'" class="coaches-grid">
            <view v-for="coach in followCoachesList" :key="coach.id" class="coach-card" @tap="handleCoachClick(coach.id)">
              <image :src="coach.pic" class="coach-img" mode="aspectFill" />
              <view class="coach-info">
                <text class="coach-name">{{ coach.name }}</text>
                <text class="coach-qual">{{ coach.qualification }}</text>
                <text class="coach-skills">{{ coach.skills }}</text>
                <view class="coach-meta">
                  <text class="rating">⭐ {{ coach.rating }}</text>
                  <text class="label">{{ coach.label }}</text>
                </view>
              </view>
            </view>
          </view>
          <view v-else class="dynamics-grid">
            <view v-for="item in followDynamicsList" :key="item.id" class="dynamic-item" @tap="handleDynamicClick(item.id)">
              <image :src="item.image" class="dynamic-img" mode="aspectFill" />
              <text class="dynamic-title">{{ item.title }}</text>
              <view class="dynamic-footer">
                <image :src="item.avatar" class="author-avatar" mode="aspectFill" />
                <text class="likes">❤️ {{ item.likes }}</text>
              </view>
            </view>
          </view>
        </view>
        
        <!-- 橱窗内容 -->
        <view v-else-if="activeTab === 2" class="products-grid">
          <view v-for="product in products" :key="product.id" class="product-card" @tap="handleProductClick(product.id)">
            <view class="product-img-wrapper">
              <image :src="product.image" class="product-img" mode="aspectFill" />
              <view v-if="product.isNew" class="new-badge">新品</view>
            </view>
            <view class="product-info">
              <text class="product-title">{{ product.title }}</text>
              <view class="product-footer">
                <text class="price">¥{{ product.price }}</text>
                <text class="sales">已售 {{ product.sales }}</text>
              </view>
            </view>
          </view>
        </view>
        
        <!-- 推荐橱窗 -->
        <view v-else-if="activeTab === 3">
          <view class="empty-placeholder">
            <text class="empty-icon">📦</text>
            <text class="empty-text">推荐橱窗内容为空</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 悬浮发布按钮 -->
    <view class="publish-btn" @tap="goToPublish">
      <text class="icon">✈️</text>
      <text class="text">发布</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 44,
      activeTab: 0,
      tabs: ['动态', '关注', '橱窗', '推荐橱窗'],
      followViewMode: 'mode1', // mode1 或 mode2
      
      // 动态列表
      dynamicList: [
        {
          id: 1,
          title: '9月的仪式感, 从纵身跃入泳池开始',
          image: '/static/images/img_39.jpg',
          avatar: '/static/images/img-1.jpg',
          author: '张小明',
          likes: 128
        },
        {
          id: 2,
          title: '始于兴趣, 终于坚持, 让游泳成为一种习惯',
          image: '/static/images/img_40.jpg',
          avatar: '/static/images/img-1.jpg',
          author: '张小明',
          likes: 256
        }
      ],
      
      // 关注的教练列表 - mode1
      followCoachesList: [
        {
          id: 'coach1',
          name: '李教练',
          avatar: '/static/images/img_39.jpeg',
          pic: '/static/images/img-1.jpg',
          qualification: '国家二级运动员',
          skills: '游泳/长泳/自由泳',
          rating: 4.8,
          label: '到店服务'
        },
        {
          id: 'coach2',
          name: '王老师',
          avatar: '/static/images/img_39.jpeg',
          pic: '/static/images/img-2.jpg',
          qualification: '专业瑜伽导师',
          skills: '瑜伽/冥想/塑形',
          rating: 4.9,
          label: '上门服务'
        },
        {
          id: 'coach3',
          name: '赵教练',
          avatar: '/static/images/img-6.jpg',
          pic: '/static/images/img-3.jpg',
          qualification: '专业健身私教',
          skills: '力量训练/增肌/减脂',
          rating: 4.7,
          label: '线上服务'
        }
      ],
      
      // 关注的动态列表 - mode2
      followDynamicsList: [
        {
          id: 1,
          title: '今天完成了人生第一个5公里，坚持就是胜利！',
          image: '/static/images/img_39.jpg',
          avatar: '/static/images/img-1.jpg',
          author: '李教练',
          likes: 88
        },
        {
          id: 2,
          title: '瑜伽让我找到了内心的平静，分享给大家',
          image: '/static/images/img_40.jpg',
          avatar: '/static/images/img-2.jpg',
          author: '王老师',
          likes: 156
        },
        {
          id: 3,
          title: '健身路上没有捷径，只有坚持和努力',
          image: '/static/images/img-6.jpg',
          avatar: '/static/images/img-3.jpg',
          author: '赵教练',
          likes: 203
        }
      ],
      
      // 橱窗商品
      products: [
        {
          id: 'product1',
          title: '蝎泳/自由泳（体验卡）',
          price: 38,
          sales: 5680,
          image: '/static/images/img-4.jpg',
          isNew: false
        },
        {
          id: 'product2',
          title: '自由泳60分钟（单次卡）',
          price: 200,
          sales: 890,
          image: '/static/images/img-5.jpg',
          isNew: true
        },
        {
          id: 'product3',
          title: '蝎泳/自由泳（10次卡）',
          price: 1680,
          sales: 538,
          image: '/static/images/img-6.jpg',
          isNew: false
        },
        {
          id: 'product4',
          title: '蝎泳/自由泳（20次卡）',
          price: 2980,
          sales: 136,
          image: '/static/images/img_39.jpg',
          isNew: true
        }
      ]
    }
  },
  
  onLoad() {
    const info = uni.getSystemInfoSync()
    this.statusBarHeight = info.statusBarHeight || 44
  },
  
  methods: {
    goToAddFriends() {
      uni.navigateTo({ url: '/pages/add-friends/index' })
    },
    
    goToSettings() {
      uni.navigateTo({ url: '/pages/settings/index' })
    },
    
    goToOrders() {
      uni.navigateTo({ url: '/pages/my-orders/index' })
    },
    
    goToFavorites() {
      uni.navigateTo({ url: '/pages/favorites/index' })
    },
    
    goToPendingReview() {
      uni.navigateTo({ url: '/pages/pending-review/index' })
    },
    
    goToReviews() {
      uni.navigateTo({ url: '/pages/my-reviews/index' })
    },
    
    goToWallet() {
      uni.navigateTo({ url: '/pages/wallet/index' })
    },
    
    goToRegisterWaker() {
      uni.navigateTo({ url: '/pages/register-waker/index' })
    },
    
    goToAlliance() {
      uni.navigateTo({ url: '/pages/waker-alliance/index' })
    },
    
    goToTeam() {
      uni.navigateTo({ url: '/pages/team/index' })
    },
    
    goToPublish() {
      uni.navigateTo({ url: '/pages/publish-activity/index' })
    },
    
    handleDynamicClick(id) {
      uni.navigateTo({ url: `/pages/dynamic-detail/index?id=${id}` })
    },
    
    handleCoachClick(id) {
      uni.navigateTo({ url: '/pages/ouyang/index' })
    },
    
    handleProductClick(id) {
      uni.navigateTo({ url: `/pages/product-detail/index?id=${id}` })
    }
  }
}
</script>

<style scoped>
.page { min-height: 100vh; background: linear-gradient(180deg, #fae9de 0%, #fff 300rpx); }

.custom-header { padding: 16rpx 24rpx; }
.add-friends-btn { background: #fff; border: 2rpx solid #e5e7eb; border-radius: 48rpx; padding: 16rpx 32rpx; font-size: 28rpx; }

.profile-section { padding: 24rpx; }
.user-card { display: flex; align-items: flex-start; margin-bottom: 24rpx; }
.user-avatar { width: 140rpx; height: 140rpx; border-radius: 50%; border: 4rpx solid #fff; box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.1); }
.user-info { flex: 1; margin-left: 24rpx; }
.user-name-row { display: flex; align-items: center; gap: 12rpx; margin-bottom: 12rpx; }
.name { font-size: 40rpx; font-weight: bold; }
.gender { font-size: 28rpx; }
.male { color: #3b82f6; }
.user-id { font-size: 24rpx; color: #999; display: block; margin-bottom: 16rpx; }
.user-stats { display: flex; gap: 32rpx; font-size: 24rpx; color: #666; }
.num { color: #333; font-weight: 500; }
.settings-icon { font-size: 40rpx; padding: 8rpx; }

.tags-row { display: flex; flex-wrap: wrap; gap: 16rpx; }
.tag { background: #f3f4f6; color: #666; font-size: 24rpx; padding: 12rpx 24rpx; border-radius: 32rpx; }

.functions-card, .all-functions-card { background: #fff; border-radius: 24rpx; padding: 32rpx; margin: 0 24rpx 24rpx; box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.05); }

.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24rpx; }
.card-title { font-size: 28rpx; font-weight: bold; }
.more-arrow { font-size: 40rpx; color: #999; }

.func-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32rpx; text-align: center; }
.func-item { display: flex; flex-direction: column; align-items: center; }
.func-icon { font-size: 48rpx; margin-bottom: 12rpx; }
.func-label { font-size: 24rpx; color: #333; }

.tabs-section { background: #fff; border-radius: 24rpx 24rpx 0 0; margin: 0 24rpx; padding: 24rpx; min-height: 400rpx; }
.tabs-bar { white-space: nowrap; border-bottom: 2rpx solid #f0f0f0; padding-bottom: 16rpx; }
.tab { display: inline-block; padding: 16rpx 32rpx; font-size: 28rpx; color: #999; }
.tab.active { color: #ff6b6b; border-bottom: 4rpx solid #ff6b6b; }

.tab-content { padding: 40rpx 0; }
.empty-placeholder { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 80rpx 0; }
.empty-icon { font-size: 80rpx; margin-bottom: 24rpx; opacity: 0.3; }
.empty-text { font-size: 28rpx; color: #999; }

/* 悬浮发布按钮 */
.publish-btn {
  position: fixed;
  bottom: calc(256rpx + env(safe-area-inset-bottom));
  left: 50%;
  transform: translateX(-50%);
  width: 128rpx;
  height: 128rpx;
  background: #ff6500;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 8rpx 24rpx rgba(255,101,0,0.3);
  z-index: 30;
}

.publish-btn .icon {
  font-size: 36rpx;
  margin-bottom: 4rpx;
}

.publish-btn .text {
  font-size: 20rpx;
  font-weight: 500;
}

/* 动态列表 */
.dynamics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16rpx;
}

.dynamic-item {
  background: #fff;
  border-radius: 16rpx;
  overflow: hidden;
}

.dynamic-img {
  width: 100%;
  height: 300rpx;
}

.dynamic-title {
  display: block;
  padding: 16rpx;
  font-size: 24rpx;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.dynamic-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16rpx 16rpx;
}

.author-avatar {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
}

.likes {
  font-size: 22rpx;
  color: #999;
}

/* 教练列表 */
.coaches-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16rpx;
}

.coach-card {
  background: #fff;
  border-radius: 16rpx;
  overflow: hidden;
}

.coach-img {
  width: 100%;
  height: 300rpx;
}

.coach-info {
  padding: 16rpx;
}

.coach-name {
  display: block;
  font-size: 28rpx;
  font-weight: bold;
  margin-bottom: 8rpx;
}

.coach-qual {
  display: block;
  font-size: 22rpx;
  color: #666;
  margin-bottom: 8rpx;
}

.coach-skills {
  display: block;
  font-size: 20rpx;
  color: #999;
  margin-bottom: 12rpx;
}

.coach-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rating {
  font-size: 22rpx;
  color: #ff6b6b;
}

.label {
  font-size: 20rpx;
  color: #10b981;
  background: #d1fae5;
  padding: 4rpx 12rpx;
  border-radius: 8rpx;
}

/* 商品列表 */
.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24rpx;
}

.product-card {
  background: #fff;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.05);
}

.product-img-wrapper {
  position: relative;
}

.product-img {
  width: 100%;
  height: 300rpx;
}

.new-badge {
  position: absolute;
  top: 16rpx;
  left: 16rpx;
  background: #ff0000;
  color: #fff;
  font-size: 20rpx;
  padding: 4rpx 16rpx;
  border-radius: 8rpx;
}

.product-info {
  padding: 16rpx;
}

.product-title {
  display: block;
  font-size: 24rpx;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 16rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 32rpx;
  font-weight: bold;
  color: #ff0000;
}

.sales {
  font-size: 20rpx;
  color: #999;
}
</style>
