<template>
  <view class="star-tab">
    <!-- 筛选标签栏 -->
    <view class="filter-bar">
      <view class="filter-left">
        <text
          v-for="filter in filters"
          :key="filter.key"
          :class="['filter-btn', { active: sortBy === filter.key }]"
          @tap="sortCoaches(filter.key)"
        >{{ filter.label }}</text>
      </view>
      <view class="filter-right">
        <text class="icon">🔍</text>
        <text class="icon">🎁</text>
      </view>
    </view>

    <!-- 教练列表 -->
    <view class="coach-list">
      <view
        v-for="coach in coaches"
        :key="coach.id"
        class="coach-item"
        @tap="handleViewProfile(coach.id)"
      >
        <image :src="coach.image" class="coach-avatar" mode="aspectFill" />
        <view class="coach-info">
          <view class="coach-header">
            <text class="coach-name">{{ coach.name }}</text>
            <text class="coach-type">{{ coach.type }}</text>
          </view>
          <text class="coach-title">{{ coach.title }}</text>
          <view class="coach-footer">
            <view class="coach-rating">
              <text class="star">★</text>
              <text class="rating-num">{{ coach.rating }}</text>
            </view>
            <text class="coach-distance">{{ coach.distance }}km</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'StarTab',
  data() {
    return {
      sortBy: 'recommend',
      filters: [
        { key: 'recommend', label: '推荐' },
        { key: 'distance', label: '距离' },
        { key: 'rating', label: '服务分' }
      ],
      originalCoaches: [
        {
          id: 'coach1',
          name: '李教练',
          type: '游泳教练',
          title: '国家二级运动员 | 8年教学经验',
          rating: 4.8,
          distance: 1.2,
          image: 'https://picsum.photos/id/1005/100/100',
          prices: {
            trial: 88,
            single: 200,
            tenPack: 1680
          }
        },
        {
          id: 'coach2',
          name: '赵教练',
          type: '游泳教练',
          title: '国家一级运动员 | 10年教学经验',
          rating: 4.9,
          distance: 1.5,
          image: 'https://picsum.photos/id/1011/100/100',
          prices: {
            trial: 98,
            single: 220,
            tenPack: 1880
          }
        },
        {
          id: 'coach3',
          name: '张教练',
          type: '游泳教练',
          title: '国家二级运动员 | 6年教学经验',
          rating: 4.6,
          distance: 2.8,
          image: 'https://picsum.photos/id/1012/100/100',
          prices: {
            trial: 80,
            single: 180,
            tenPack: 1580
          }
        },
        {
          id: 'coach4',
          name: '王教练',
          type: '游泳教练',
          title: '国家一级运动员 | 12年教学经验',
          rating: 4.7,
          distance: 3.2,
          image: 'https://picsum.photos/id/1013/100/100',
          prices: {
            trial: 95,
            single: 210,
            tenPack: 1780
          }
        }
      ],
      coaches: []
    }
  },
  created() {
    this.coaches = [...this.originalCoaches]
  },
  methods: {
    sortCoaches(sortType) {
      this.sortBy = sortType
      const sorted = [...this.originalCoaches]

      switch (sortType) {
        case 'distance':
          sorted.sort((a, b) => a.distance - b.distance)
          break
        case 'rating':
          sorted.sort((a, b) => b.rating - a.rating)
          break
        default:
          break
      }

      this.coaches = sorted
    },
    handleViewProfile(coachId) {
      uni.navigateTo({ url: `/pages/ouyang/index?id=${coachId}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.star-tab {
  min-height: 400rpx;
  padding: 16rpx;
}

.filter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24rpx;
}

.filter-left {
  display: flex;
  gap: 32rpx;
}

.filter-btn {
  padding: 8rpx 16rpx;
  font-size: 26rpx;
  color: #666;
  transition: all 0.3s;
}

.filter-btn.active {
  color: #1d4ed8;
  border-bottom: 2rpx solid #1d4ed8;
}

.filter-right {
  display: flex;
  align-items: center;
  gap: 24rpx;
}

.icon {
  font-size: 32rpx;
  color: #999;
}

.coach-list {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
  margin-top: 24rpx;
}

.coach-item {
  display: flex;
  background: #fff;
  border-radius: 16rpx;
  padding: 24rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);
}

.coach-avatar {
  width: 160rpx;
  height: 160rpx;
  border-radius: 16rpx;
  margin-right: 24rpx;
  flex-shrink: 0;
}

.coach-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.coach-header {
  display: flex;
  align-items: center;
  gap: 16rpx;
  margin-bottom: 8rpx;
}

.coach-name {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
}

.coach-type {
  font-size: 24rpx;
  color: #666;
  background: #e3f2fd;
  padding: 4rpx 16rpx;
  border-radius: 32rpx;
}

.coach-title {
  font-size: 24rpx;
  color: #666;
  margin-bottom: 16rpx;
}

.coach-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.coach-rating {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.star {
  color: #ff9800;
  font-size: 28rpx;
}

.rating-num {
  font-size: 26rpx;
  color: #333;
  font-weight: 600;
}

.coach-distance {
  font-size: 24rpx;
  color: #999;
}
</style>
