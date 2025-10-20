<template>
  <view class="dynamic-tab">
    <view class="notes-grid">
      <view
        v-for="item in dynamicList"
        :key="item.id"
        class="note-item"
        @tap="handleClick(item.id)"
      >
        <image :src="item.imageUrl" class="note-img" mode="aspectFill" />
        <view class="note-info">
          <text class="note-title">{{ item.title }}</text>
          <view v-if="item.isVideo" class="video-badge">▶</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'DynamicTab',
  data() {
    return {
      dynamicList: [
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
        },
        {
          id: 5,
          title: '户外露营装备推荐，让你的旅程更舒适',
          imageUrl: 'https://picsum.photos/id/1063/300/200',
          isTop: false,
          isVideo: true
        },
        {
          id: 6,
          title: '川西秘境探索｜四姑娘山完整攻略',
          imageUrl: 'https://picsum.photos/id/1064/300/200',
          isTop: false,
          isVideo: false
        }
      ]
    }
  },
  methods: {
    handleClick(id) {
      uni.navigateTo({ url: `/pages/dynamic-detail/index?id=${id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.dynamic-tab {
  min-height: 400rpx;
  padding: 16rpx;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16rpx;
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
