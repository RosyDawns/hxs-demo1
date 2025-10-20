<template>
  <view class="page">
    <view class="cate-bar">
      <view v-for="c in cates" :key="c" :class="['cate', cur===c?'on':'']" @tap="cur=c">{{ c }}</view>
      <view class="search" @tap="goSearch">搜索搭子</view>
    </view>

    <view class="list">
      <view v-for="g in groups" :key="g.id" class="card">
        <image class="cover" :src="g.cover" mode="aspectFill" />
        <view class="info">
          <text class="title">{{ g.title }}</text>
          <text class="desc">{{ g.desc }}</text>
          <view class="meta">
            <text>成员 {{ g.members }}</text>
            <text>活跃 {{ g.active }}/7</text>
          </view>
          <view class="ops">
            <button class="btn gray" @tap="view(g)">详情</button>
            <button class="btn" @tap="join(g)">加入搭子</button>
          </view>
        </view>
      </view>
    </view>

    <button class="create" @tap="create">+ 创建我的搭子</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      cates: ['全部','早起','运动','学习','旅行','摄影'],
      cur: '全部',
      groups: [
        { id: 1, title: '6:30早起打卡团', desc: '互相监督，连续早起更轻松', members: 128, active: 6, cover: 'https://dummyimage.com/240x240/eee/999.png&text=R' },
        { id: 2, title: '周末徒步搭子', desc: '城市周边轻徒步，欢迎萌新', members: 56, active: 4, cover: 'https://dummyimage.com/240x240/eee/999.png&text=H' }
      ]
    }
  },
  methods: {
    goSearch() { uni.navigateTo({ url: '/pages/search/index?scope=partners' }) },
    view(g) { uni.navigateTo({ url: `/pages/dynamic-detail/index?id=${g.id}` }) },
    join(g) { uni.showToast({ title: '已提交加入申请', icon: 'success' }) },
    create() { uni.navigateTo({ url: '/pages/publish-activity/index?type=partner' }) }
  }
}
</script>

<style scoped>
.page { min-height: 100vh; background: #f7f7f7; }
.cate-bar { display: flex; gap: 12rpx; padding: 12rpx; background: #fff; align-items: center; }
.cate { padding: 10rpx 18rpx; border-radius: 32rpx; background: #f3f4f6; color: #666; font-size: 26rpx; }
.cate.on { background: #ffefec; color: #ff6b6b; }
.search { margin-left: auto; color: #2563eb; font-size: 26rpx; }
.list { padding: 16rpx; display: flex; flex-direction: column; gap: 16rpx; }
.card { background: #fff; border-radius: 16rpx; display: flex; overflow: hidden; }
.cover { width: 200rpx; height: 200rpx; }
.info { flex: 1; padding: 16rpx; }
.title { font-size: 30rpx; color: #333; }
.desc { font-size: 26rpx; color: #666; margin: 6rpx 0 12rpx; }
.meta { display: flex; gap: 16rpx; font-size: 22rpx; color: #999; }
.ops { display: flex; gap: 12rpx; margin-top: 12rpx; }
.btn { flex: 1; background: linear-gradient(135deg, #ff9a56, #ff6b6b); color: #fff; border: none; border-radius: 48rpx; padding: 16rpx; }
.btn.gray { background: #f3f4f6; color: #333; }
.create { position: sticky; bottom: 0; margin: 16rpx; background: linear-gradient(135deg, #ff9a56, #ff6b6b); color: #fff; border: none; border-radius: 48rpx; padding: 24rpx; }
</style>
