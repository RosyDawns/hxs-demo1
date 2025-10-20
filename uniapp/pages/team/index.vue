<template>
  <view class="page">
    <view class="team-header">
      <view class="team-info">
        <view class="team-title">我的团队</view>
        <text class="team-id">团队ID: {{ teamId }}</text>
      </view>
      <view class="team-members">
        <text class="members-count">{{ teamMembers }}</text>
        <text class="members-label">成员数</text>
      </view>
    </view>

    <view class="stats-grid">
      <view class="stat-card">
        <text class="stat-value">{{ teamOrders }}</text>
        <text class="stat-label">团队订单</text>
      </view>
      <view class="stat-card">
        <text class="stat-value">¥{{ teamIncome }}</text>
        <text class="stat-label">团队收益</text>
      </view>
      <view class="stat-card">
        <text class="stat-value">{{ activeMembers }}</text>
        <text class="stat-label">活跃成员</text>
      </view>
    </view>

    <view class="reward-section">
      <text class="section-title">邀请奖励</text>
      <view class="reward-content">
        <text class="reward-title">邀请好友加入，双方均可获得：</text>
        <text class="reward-item">• 新人礼包：价值100元优惠券</text>
        <text class="reward-item">• 现金奖励：每成功邀请1人奖励20元</text>
        <text class="reward-item">• 团队提成：团队成员订单可获得5%提成</text>
      </view>
    </view>

    <view class="members-section">
      <text class="section-title">团队成员</text>
      <view
        v-for="member in members"
        :key="member.id"
        class="member-item"
      >
        <image :src="member.avatar" class="member-avatar" mode="aspectFill" />
        <view class="member-info">
          <text class="member-name">{{ member.name }}</text>
          <text class="member-join">加入于 {{ member.joinDate }}</text>
        </view>
        <view class="member-contribution">
          <text class="contribution-value">{{ member.contribution }}</text>
          <text class="contribution-label">贡献值</text>
        </view>
      </view>
    </view>

    <view class="action-buttons">
      <button class="invite-btn" @tap="handleInvite">
        邀请好友加入
      </button>
      <button class="create-btn" @tap="handleCreateTeam">
        创建我的团队
      </button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      teamId: "T20240115",
      teamMembers: 28,
      teamOrders: 156,
      teamIncome: "12,880",
      activeMembers: 24,
      members: [
        { id: 1, name: "张三", joinDate: "2024-01-10", contribution: 1200, avatar: "https://picsum.photos/id/1005/100/100" },
        { id: 2, name: "李四", joinDate: "2024-01-12", contribution: 980, avatar: "https://picsum.photos/id/1027/100/100" },
        { id: 3, name: "王五", joinDate: "2024-01-14", contribution: 1500, avatar: "https://picsum.photos/id/1011/100/100" },
      ],
    };
  },
  methods: {
    handleInvite() {
      uni.showToast({ title: "邀请功能开发中", icon: "none" });
    },
    handleCreateTeam() {
      uni.showToast({ title: "创建团队功能开发中", icon: "none" });
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 24rpx;
}

.team-header {
  background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%);
  border-radius: 24rpx;
  padding: 48rpx 32rpx;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24rpx;
}

.team-info {
  flex: 1;
}

.team-title {
  font-size: 36rpx;
  font-weight: bold;
  margin-bottom: 8rpx;
}

.team-id {
  font-size: 24rpx;
  opacity: 0.9;
}

.team-members {
  text-align: right;
}

.members-count {
  font-size: 48rpx;
  font-weight: bold;
  display: block;
}

.members-label {
  font-size: 20rpx;
  opacity: 0.9;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24rpx;
  margin-bottom: 24rpx;
}

.stat-card {
  background: white;
  border-radius: 16rpx;
  padding: 24rpx;
  text-align: center;
}

.stat-value {
  font-size: 36rpx;
  font-weight: bold;
  color: #ff6b6b;
  display: block;
}

.stat-label {
  font-size: 20rpx;
  color: #999;
  margin-top: 8rpx;
  display: block;
}

.reward-section,
.members-section {
  background: white;
  border-radius: 24rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 24rpx;
  display: block;
}

.reward-content {
  background: #fff5f0;
  border-radius: 16rpx;
  padding: 24rpx;
}

.reward-title {
  font-size: 26rpx;
  font-weight: 500;
  margin-bottom: 16rpx;
  display: block;
}

.reward-item {
  font-size: 24rpx;
  color: #666;
  display: block;
  margin-bottom: 8rpx;
  line-height: 1.6;
}

.member-item {
  display: flex;
  align-items: center;
  margin-bottom: 24rpx;
}

.member-avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin-right: 24rpx;
}

.member-info {
  flex: 1;
}

.member-name {
  font-size: 28rpx;
  font-weight: 500;
  display: block;
  margin-bottom: 4rpx;
}

.member-join {
  font-size: 22rpx;
  color: #999;
  display: block;
}

.member-contribution {
  text-align: right;
}

.contribution-value {
  font-size: 28rpx;
  font-weight: bold;
  color: #ff6b6b;
  display: block;
}

.contribution-label {
  font-size: 20rpx;
  color: #999;
}

.action-buttons {
  padding: 32rpx 0;
}

.invite-btn,
.create-btn {
  width: 100%;
  border-radius: 50rpx;
  padding: 24rpx;
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 24rpx;
}

.invite-btn {
  background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%);
  color: white;
  border: none;
}

.create-btn {
  background: white;
  color: #ff6b6b;
  border: 2rpx solid #ff6b6b;
}
</style>
