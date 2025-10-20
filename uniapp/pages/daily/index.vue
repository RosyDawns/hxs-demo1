<template>
  <view class="page">
    <!-- 顶部导航 -->
    <view class="header" :style="{paddingTop: statusBarHeight + 'px'}">
      <view class="nav-bar">
        <view class="back-btn" @tap="goBack">
          <text>‹</text>
        </view>
        <view class="tabs">
          <text 
            v-for="tab in tabs" 
            :key="tab.key"
            :class="['tab', activeTab === tab.key ? 'active' : '']"
            @tap="activeTab = tab.key"
          >
            {{ tab.label }}
          </text>
        </view>
      </view>
    </view>

    <!-- 内容区域 -->
    <scroll-view scroll-y class="content">
      <!-- 主页 - 每日任务 -->
      <view v-if="activeTab === 'home'" class="tasks-container">
        <!-- 能量统计 -->
        <view class="energy-stats">
          <view class="stats-card">
            <text class="stats-label">今日获得能量</text>
            <text class="stats-value">+{{ todayEnergy }}</text>
          </view>
          <view class="stats-card">
            <text class="stats-label">累计能量</text>
            <text class="stats-value">{{ totalEnergy }}</text>
          </view>
        </view>

        <!-- 每日任务列表 -->
        <view class="task-section">
          <view class="section-title">
            <text class="title">每日任务</text>
            <text class="subtitle">完成任务获得能量奖励</text>
          </view>

          <view class="task-list">
            <view 
              v-for="task in dailyTasks" 
              :key="task.id"
              class="task-item"
              :class="{'completed': task.completed}"
            >
              <view class="task-icon">
                <text>{{ task.icon }}</text>
              </view>
              <view class="task-info">
                <text class="task-name">{{ task.name }}</text>
                <text class="task-desc">{{ task.desc }}</text>
                <view class="task-progress">
                  <view class="progress-bar">
                    <view class="progress-fill" :style="{width: task.progress + '%'}"></view>
                  </view>
                  <text class="progress-text">{{ task.current }}/{{ task.target }}</text>
                </view>
              </view>
              <view class="task-reward">
                <view v-if="!task.completed" class="reward-badge">
                  <text>+{{ task.reward }}</text>
                </view>
                <view v-else class="completed-badge">
                  <text>✓</text>
                </view>
              </view>
            </view>
          </view>
        </view>

        <!-- 特殊任务 -->
        <view class="task-section">
          <view class="section-title">
            <text class="title">特殊任务</text>
            <text class="subtitle">限时活动，奖励更丰富</text>
          </view>

          <view class="special-tasks">
            <view 
              v-for="task in specialTasks" 
              :key="task.id"
              class="special-task-item"
            >
              <view class="special-task-header">
                <text class="special-task-icon">{{ task.icon }}</text>
                <view class="special-task-info">
                  <text class="special-task-name">{{ task.name }}</text>
                  <text class="special-task-time">剩余时间: {{ task.timeLeft }}</text>
                </view>
                <view class="special-reward">
                  <text>+{{ task.reward }}</text>
                </view>
              </view>
              <text class="special-task-desc">{{ task.desc }}</text>
              <view class="special-task-action">
                <view class="action-btn" @tap="doTask(task)">
                  <text>{{ task.completed ? '已完成' : '去完成' }}</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>

      <!-- 动态标签 -->
      <view v-else-if="activeTab === 'activity'" class="tab-content">
        <view class="empty-state">
          <text class="empty-icon">📝</text>
          <text class="empty-text">暂无动态内容</text>
        </view>
      </view>

      <!-- 唤醒师标签 -->
      <view v-else-if="activeTab === 'coach'" class="tab-content">
        <view class="empty-state">
          <text class="empty-icon">👨‍🏫</text>
          <text class="empty-text">暂无唤醒师内容</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 44,
      activeTab: 'home',
      todayEnergy: 45,
      totalEnergy: 890,
      tabs: [
        { key: 'home', label: '主页' },
        { key: 'activity', label: '动态' },
        { key: 'coach', label: '唤醒师' }
      ],
      dailyTasks: [
        {
          id: 1,
          icon: '✅',
          name: '每日签到',
          desc: '连续签到获得更多奖励',
          current: 1,
          target: 1,
          progress: 100,
          reward: 10,
          completed: true
        },
        {
          id: 2,
          icon: '📱',
          name: '完成3次唤醒',
          desc: '帮助3位朋友唤醒潜能',
          current: 2,
          target: 3,
          progress: 66,
          reward: 15,
          completed: false
        },
        {
          id: 3,
          icon: '✍️',
          name: '发布动态',
          desc: '分享今日感悟或收获',
          current: 0,
          target: 1,
          progress: 0,
          reward: 10,
          completed: false
        },
        {
          id: 4,
          icon: '👥',
          name: '邀请好友',
          desc: '成功邀请一位好友注册',
          current: 0,
          target: 1,
          progress: 0,
          reward: 20,
          completed: false
        }
      ],
      specialTasks: [
        {
          id: 1,
          icon: '🎯',
          name: '周末挑战',
          desc: '完成5次唤醒并分享3条动态',
          timeLeft: '2天23小时',
          reward: 50,
          completed: false
        },
        {
          id: 2,
          icon: '🌟',
          name: '新手任务',
          desc: '完善个人资料，上传头像和简介',
          timeLeft: '7天',
          reward: 30,
          completed: false
        }
      ]
    }
  },
  
  onLoad() {
    const info = uni.getSystemInfoSync()
    this.statusBarHeight = info.statusBarHeight || 44
  },
  
  methods: {
    goBack() {
      uni.navigateBack()
    },
    
    doTask(task) {
      if (task.completed) {
        return
      }
      uni.showToast({
        title: '功能开发中',
        icon: 'none'
      })
    }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #f5f5f5;
}

/* 顶部导航 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: #fff;
  border-bottom: 2rpx solid #f0f0f0;
}

.nav-bar {
  display: flex;
  align-items: center;
  padding: 16rpx 32rpx;
}

.back-btn {
  width: 72rpx;
  height: 72rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 56rpx;
  color: #333;
  margin-right: 16rpx;
}

.tabs {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 80rpx;
}

.tab {
  padding: 24rpx 0;
  font-size: 28rpx;
  color: #666;
  border-bottom: 4rpx solid transparent;
}

.tab.active {
  color: #ff6b6b;
  border-bottom-color: #ff6b6b;
  font-weight: bold;
}

/* 内容区域 */
.content {
  padding-top: 160rpx;
  height: 100vh;
}

.tasks-container {
  padding: 32rpx;
}

/* 能量统计 */
.energy-stats {
  display: flex;
  gap: 24rpx;
  margin-bottom: 32rpx;
}

.stats-card {
  flex: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24rpx;
  padding: 32rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stats-label {
  font-size: 24rpx;
  color: rgba(255,255,255,0.8);
  margin-bottom: 16rpx;
}

.stats-value {
  font-size: 48rpx;
  font-weight: bold;
  color: #fff;
}

/* 任务区域 */
.task-section {
  background: #fff;
  border-radius: 24rpx;
  padding: 32rpx;
  margin-bottom: 32rpx;
}

.section-title {
  margin-bottom: 32rpx;
}

.title {
  display: block;
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 8rpx;
}

.subtitle {
  display: block;
  font-size: 24rpx;
  color: #999;
}

/* 任务列表 */
.task-list {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.task-item {
  display: flex;
  align-items: flex-start;
  gap: 24rpx;
  padding: 24rpx;
  background: #f8f9fa;
  border-radius: 16rpx;
}

.task-item.completed {
  opacity: 0.6;
}

.task-icon {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40rpx;
  flex-shrink: 0;
}

.task-info {
  flex: 1;
  min-width: 0;
}

.task-name {
  display: block;
  font-size: 28rpx;
  font-weight: 600;
  color: #333;
  margin-bottom: 8rpx;
}

.task-desc {
  display: block;
  font-size: 24rpx;
  color: #666;
  margin-bottom: 16rpx;
}

.task-progress {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.progress-bar {
  flex: 1;
  height: 8rpx;
  background: #e0e0e0;
  border-radius: 8rpx;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(to right, #667eea, #764ba2);
  border-radius: 8rpx;
  transition: width 0.3s;
}

.progress-text {
  font-size: 20rpx;
  color: #999;
}

.task-reward {
  flex-shrink: 0;
}

.reward-badge {
  width: 80rpx;
  height: 80rpx;
  border-radius: 16rpx;
  background: linear-gradient(135deg, #ffd700, #ff6b35);
  color: #fff;
  font-size: 24rpx;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.completed-badge {
  width: 80rpx;
  height: 80rpx;
  border-radius: 16rpx;
  background: #10b981;
  color: #fff;
  font-size: 40rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 特殊任务 */
.special-tasks {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.special-task-item {
  padding: 32rpx;
  background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
  border-radius: 24rpx;
  position: relative;
  overflow: hidden;
}

.special-task-header {
  display: flex;
  align-items: center;
  gap: 24rpx;
  margin-bottom: 16rpx;
}

.special-task-icon {
  font-size: 48rpx;
}

.special-task-info {
  flex: 1;
}

.special-task-name {
  display: block;
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 8rpx;
}

.special-task-time {
  display: block;
  font-size: 24rpx;
  color: #666;
}

.special-reward {
  padding: 8rpx 24rpx;
  background: rgba(255,255,255,0.5);
  border-radius: 32rpx;
  font-size: 28rpx;
  font-weight: bold;
  color: #ff6b35;
}

.special-task-desc {
  display: block;
  font-size: 24rpx;
  color: #666;
  margin-bottom: 24rpx;
}

.special-task-action {
  display: flex;
  justify-content: flex-end;
}

.action-btn {
  padding: 16rpx 48rpx;
  background: #fff;
  border-radius: 48rpx;
  font-size: 28rpx;
  font-weight: 600;
  color: #ff6b35;
}

/* 其他标签内容 */
.tab-content {
  padding: 160rpx 0;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 160rpx 0;
}

.empty-icon {
  font-size: 160rpx;
  margin-bottom: 32rpx;
  opacity: 0.3;
}

.empty-text {
  font-size: 28rpx;
  color: #999;
}
</style>
