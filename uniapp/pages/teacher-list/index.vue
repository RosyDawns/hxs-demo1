<template>
  <view class="teacher-list-page">
    <!-- 自定义导航栏 -->
    <view class="header">
      <view class="nav-bar">
        <text class="back-btn" @tap="goBack">‹</text>
        <view class="tabs">
          <text 
            class="tab" 
            :class="{ active: topTab === 'discover' }" 
            @tap="topTab = 'discover'"
          >
            发现 ⇋
          </text>
          <text 
            class="tab" 
            :class="{ active: topTab === 'city' }" 
            @tap="topTab = 'city'"
          >
            上海
          </text>
          <text 
            class="tab" 
            :class="{ active: topTab === 'follow' }" 
            @tap="topTab = 'follow'"
          >
            关注
          </text>
        </view>
      </view>
    </view>

    <!-- 分类标签栏 -->
    <view class="category-tabs">
      <scroll-view scroll-x class="tabs-scroll">
        <template v-if="topTab === 'discover'">
          <text 
            v-for="tab in discoverTabs" 
            :key="tab"
            class="category-tab" 
            :class="{ active: selectedTab === tab }" 
            @tap="selectedTab = tab"
          >
            {{ tab }}
          </text>
        </template>
        <template v-else-if="topTab === 'city'">
          <text 
            v-for="tab in cityTabs" 
            :key="tab"
            class="category-tab" 
            :class="{ active: selectedTab === tab }" 
            @tap="selectedTab = tab"
          >
            {{ tab }}
          </text>
        </template>
        <template v-else-if="topTab === 'follow'">
          <text 
            v-for="tab in followTabs" 
            :key="tab"
            class="category-tab" 
            :class="{ active: selectedTab === tab }" 
            @tap="selectedTab = tab"
          >
            {{ tab }}
          </text>
        </template>
      </scroll-view>
      <text class="search-btn" @tap="goToSearch">🔍</text>
    </view>

    <!-- 内容区域 -->
    <scroll-view scroll-y class="content">
      <view class="coach-grid">
        <view 
          v-for="coach in filteredCoaches" 
          :key="coach.id"
          class="coach-card"
          @tap="goToCoachDetail(coach.id)"
        >
          <image :src="coach.pic" class="coach-pic" mode="aspectFill" />
          <view class="coach-info">
            <view class="coach-header">
              <image :src="coach.avatar" class="coach-avatar" mode="aspectFill" />
              <view class="coach-name-wrap">
                <text class="coach-name">{{ coach.name }}</text>
                <text class="coach-rating">⭐ {{ coach.rating }}</text>
              </view>
            </view>
            <text class="coach-qualification">{{ coach.qualification }}</text>
            <text class="coach-skills">{{ coach.skills }}</text>
            <view class="coach-label">{{ coach.label }}</view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: "TeacherListPage",
  data() {
    return {
      topTab: 'discover',
      selectedTab: '推荐',
      discoverTabs: ['推荐', '筛选', '主理人', '生活技能', '生活搭子'],
      cityTabs: ['附近', '全城', '主理人', '生活技能', '生活搭子'],
      followTabs: ['动态', '主理人', '生活技能', '生活搭子'],
      coaches: [
        {
          id: 1,
          name: '李教练',
          avatar: '/static/images/user_1.png',
          pic: '/static/images/img-18.jpg',
          qualification: '国家二级游泳运动员',
          skills: '长泳/自由泳',
          rating: 4.8,
          label: '线上服务'
        },
        {
          id: 2,
          name: '赵教练',
          avatar: '/static/images/user_2.png',
          pic: '/static/images/img-13.jpg',
          qualification: '国家一级游泳运动员',
          skills: '仰泳/自由泳',
          rating: 4.9,
          label: '到店服务'
        },
        {
          id: 3,
          name: '张设计',
          avatar: '/static/images/user_3.png',
          pic: '/static/images/img_39.jpg',
          qualification: '国家一级平面设计师',
          skills: '平面设计/包装设计',
          rating: 4.8,
          label: '上门服务'
        },
        {
          id: 4,
          name: '王教练',
          avatar: '/static/images/user_4.png',
          pic: '/static/images/img_38.jpg',
          qualification: '国家一级网球运动员',
          skills: '西式方正手/单反/发球',
          rating: 4.7,
          label: '上门服务'
        }
      ]
    }
  },
  computed: {
    filteredCoaches() {
      // 根据选中的 tab 过滤教练
      return this.coaches
    }
  },
  methods: {
    goBack() {
      uni.switchTab({ url: '/pages/index/index' })
    },
    goToSearch() {
      uni.navigateTo({ url: '/pages/search/index' })
    },
    goToCoachDetail(id) {
      uni.navigateTo({ url: `/pages/ouyang/index?id=${id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/uni.scss";

.teacher-list-page {
  min-height: 100vh;
  background-color: #f8f8f8;
  padding-bottom: 120rpx;
}

/* 导航栏 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border-bottom: 1rpx solid #f0f0f0;
  z-index: 100;
  padding: calc(var(--status-bar-height) + 20rpx) 30rpx 20rpx;
}

.nav-bar {
  display: flex;
  align-items: center;
}

.back-btn {
  font-size: 48rpx;
  color: #333;
  margin-right: 20rpx;
}

.tabs {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 40rpx;
}

.tab {
  font-size: 32rpx;
  color: #333;
  
  &.active {
    color: #ff6b6b;
    font-weight: 600;
  }
}

/* 分类标签栏 */
.category-tabs {
  position: fixed;
  top: calc(var(--status-bar-height) + 100rpx);
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 20rpx 0;
  border-bottom: 1rpx solid #f0f0f0;
  z-index: 99;
}

.tabs-scroll {
  flex: 1;
  white-space: nowrap;
  padding: 0 30rpx;
}

.category-tab {
  display: inline-block;
  padding: 16rpx 24rpx;
  margin-right: 32rpx;
  font-size: 28rpx;
  color: #333;
  
  &.active {
    color: #ff6b6b;
    border-bottom: 4rpx solid #ff6b6b;
    font-weight: 600;
  }
}

.search-btn {
  padding: 0 30rpx;
  font-size: 36rpx;
  color: #999;
}

/* 内容区域 */
.content {
  margin-top: calc(var(--status-bar-height) + 200rpx);
  height: calc(100vh - var(--status-bar-height) - 200rpx - 120rpx);
}

.coach-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24rpx;
  padding: 24rpx;
}

.coach-card {
  background-color: #fff;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
}

.coach-pic {
  width: 100%;
  height: 280rpx;
}

.coach-info {
  padding: 24rpx;
}

.coach-header {
  display: flex;
  align-items: center;
  margin-bottom: 16rpx;
}

.coach-avatar {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  margin-right: 16rpx;
}

.coach-name-wrap {
  flex: 1;
}

.coach-name {
  font-size: 28rpx;
  font-weight: 600;
  color: #333;
  display: block;
  margin-bottom: 4rpx;
}

.coach-rating {
  font-size: 24rpx;
  color: #ff9500;
}

.coach-qualification {
  font-size: 24rpx;
  color: #666;
  display: block;
  margin-bottom: 8rpx;
}

.coach-skills {
  font-size: 24rpx;
  color: #999;
  display: block;
  margin-bottom: 16rpx;
}

.coach-label {
  display: inline-block;
  padding: 8rpx 16rpx;
  background-color: #fff3e0;
  color: #ff6b6b;
  font-size: 20rpx;
  border-radius: 8rpx;
}
</style>
