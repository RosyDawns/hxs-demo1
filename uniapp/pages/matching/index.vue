<template>
  <view class="page">
    <view class="filters">
      <view class="row">
        <text class="label">城市</text>
        <input class="input" v-model="city" placeholder="输入城市，如：广州" />
      </view>
      <view class="row">
        <text class="label">兴趣</text>
        <view class="tags">
          <view v-for="tag in tags" :key="tag" :class="['tag', selectedTags.includes(tag)?'on':'']" @tap="toggleTag(tag)">{{ tag }}</view>
        </view>
      </view>
      <button class="match-btn" @tap="doMatch">开始匹配</button>
    </view>

    <view class="result" v-if="matched.length">
      <text class="tip">为你找到 {{ matched.length }} 位可能合拍的伙伴</text>
      <view class="cards">
        <view v-for="u in matched" :key="u.id" class="card">
          <image class="avatar" :src="u.avatar" mode="aspectFill" />
          <view class="info">
            <text class="name">{{ u.name }} · {{ u.age }}岁 · {{ u.city }}</text>
            <view class="itags">
              <text v-for="(t,idx) in u.tags" :key="idx" class="itag">#{{ t }}</text>
            </view>
            <view class="ops">
              <button class="btn gray" @tap="viewProfile(u)">看资料</button>
              <button class="btn" @tap="chat(u)">发起聊天</button>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view v-else class="placeholder">设置筛选并点击“开始匹配”试试～</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      city: '',
      tags: ['早起', '运动', '阅读', '减脂', '学习', '摄影', '旅行'],
      selectedTags: [],
      matched: []
    }
  },
  methods: {
    toggleTag(tag) {
      const i = this.selectedTags.indexOf(tag)
      if (i >= 0) this.selectedTags.splice(i,1)
      else this.selectedTags.push(tag)
    },
    doMatch() {
      // mock 匹配：根据已选标签随机生成
      const pool = [
        { id: 1, name: '清晨', age: 25, city: this.city || '广州', tags: ['早起','运动'], avatar: 'https://dummyimage.com/160x160/eee/999.png&text=A' },
        { id: 2, name: '阿旅', age: 27, city: this.city || '广州', tags: ['旅行','摄影'], avatar: 'https://dummyimage.com/160x160/eee/999.png&text=B' },
        { id: 3, name: '小读', age: 22, city: this.city || '广州', tags: ['阅读','学习'], avatar: 'https://dummyimage.com/160x160/eee/999.png&text=C' },
      ]
      const hasTag = (u) => !this.selectedTags.length || u.tags.some(t => this.selectedTags.includes(t))
      this.matched = pool.filter(hasTag)
      if (!this.matched.length) uni.showToast({ title: '暂未匹配到，换些标签试试', icon: 'none' })
    },
    viewProfile(u) { uni.navigateTo({ url: `/pages/profile/index?id=${u.id}` }) },
    chat(u) { uni.navigateTo({ url: `/pages/chat/index?uid=${u.id}` }) }
  }
}
</script>

<style scoped>
.page { min-height: 100vh; background: #f7f7f7; }
.filters { background: #fff; padding: 16rpx; }
.row { margin-bottom: 12rpx; }
.label { display: block; font-size: 26rpx; color: #666; margin-bottom: 8rpx; }
.input { background: #f9fafb; border-radius: 12rpx; padding: 16rpx; font-size: 28rpx; }
.tags { display: flex; flex-wrap: wrap; gap: 12rpx; }
.tag { padding: 12rpx 20rpx; border-radius: 32rpx; background: #f3f4f6; color: #666; font-size: 26rpx; }
.tag.on { background: #ffefec; color: #ff6b6b; }
.match-btn { width: 100%; margin-top: 8rpx; background: linear-gradient(135deg, #ff9a56, #ff6b6b); color: #fff; border: none; border-radius: 48rpx; padding: 24rpx; }
.placeholder { text-align: center; color: #999; padding: 80rpx 0; }
.result { padding: 16rpx; }
.cards { display: flex; flex-direction: column; gap: 16rpx; }
.card { background: #fff; border-radius: 16rpx; padding: 16rpx; display: flex; }
.avatar { width: 120rpx; height: 120rpx; border-radius: 12rpx; margin-right: 16rpx; }
.info { flex: 1; }
.name { font-size: 30rpx; color: #333; }
.itags { display: flex; flex-wrap: wrap; gap: 8rpx; margin: 8rpx 0; }
.itag { font-size: 22rpx; color: #666; background: #f9fafb; padding: 6rpx 10rpx; border-radius: 24rpx; }
.ops { display: flex; gap: 12rpx; margin-top: 8rpx; }
.btn { flex: 1; background: linear-gradient(135deg, #ff9a56, #ff6b6b); color: #fff; border: none; border-radius: 48rpx; padding: 16rpx; }
.btn.gray { background: #f3f4f6; color: #333; }
</style>
