<template>
  <div class="page" id="page-daily-tasks">
    <!-- 顶部导航栏 -->
    <div class="header absolute top-8 left-4 right-4 z-10">
      <div class="header-content flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-full py-3 px-4 shadow-lg">
        <div class="header-left flex items-center justify-center w-10 h-10 rounded-full bg-white/50 hover:bg-white transition-all duration-200" @click="goBack">
          <i class="fas fa-chevron-left text-white text-base"></i>
        </div>
        <div class="header-title text-white font-bold text-lg">每日任务</div>
        <div class="header-right w-10"></div>
      </div>
    </div>

    <!-- 任务统计卡片 -->
    <div class="stats-card">
      <div class="stats-item">
        <div class="stats-value">{{ completedTasks }}</div>
        <div class="stats-label">已完成</div>
      </div>
      <div class="stats-divider"></div>
      <div class="stats-item">
        <div class="stats-value">{{ totalTasks }}</div>
        <div class="stats-label">总任务</div>
      </div>
      <div class="stats-divider"></div>
      <div class="stats-item">
        <div class="stats-value">{{ totalEnergy }}</div>
        <div class="stats-label">总能量</div>
      </div>
    </div>

    <!-- 任务列表 -->
    <div class="tasks-container">
      <div class="tasks-title">今日任务</div>
      
      <div class="tasks-list">
        <!-- 每日登录任务 -->
        <div class="task-item" :class="{ 'completed': tasks.login.completed }">
          <div class="task-left">
            <div class="task-icon" :class="tasks.login.icon"></div>
            <div class="task-info">
              <div class="task-name">{{ tasks.login.name }}</div>
              <div class="task-desc">{{ tasks.login.desc }}</div>
            </div>
          </div>
          <div class="task-right">
            <div class="task-reward">+{{ tasks.login.energy }} 能量</div>
            <div v-if="tasks.login.completed" class="task-status completed">已完成</div>
            <div v-else class="task-status pending" @click="completeTask('login')">去完成</div>
          </div>
        </div>

        <!-- 唤醒好友任务 -->
        <div class="task-item" :class="{ 'completed': tasks.wakeup.completed }">
          <div class="task-left">
            <div class="task-icon" :class="tasks.wakeup.icon"></div>
            <div class="task-info">
              <div class="task-name">{{ tasks.wakeup.name }}</div>
              <div class="task-desc">{{ tasks.wakeup.desc }}</div>
            </div>
          </div>
          <div class="task-right">
            <div class="task-reward">+{{ tasks.wakeup.energy }} 能量</div>
            <div v-if="tasks.wakeup.completed" class="task-status completed">已完成</div>
            <div v-else class="task-status pending" @click="completeTask('wakeup')">去完成</div>
          </div>
        </div>

        <!-- 发布动态任务 -->
        <div class="task-item" :class="{ 'completed': tasks.publish.completed }">
          <div class="task-left">
            <div class="task-icon" :class="tasks.publish.icon"></div>
            <div class="task-info">
              <div class="task-name">{{ tasks.publish.name }}</div>
              <div class="task-desc">{{ tasks.publish.desc }}</div>
            </div>
          </div>
          <div class="task-right">
            <div class="task-reward">+{{ tasks.publish.energy }} 能量</div>
            <div v-if="tasks.publish.completed" class="task-status completed">已完成</div>
            <div v-else class="task-status pending" @click="completeTask('publish')">去完成</div>
          </div>
        </div>

        <!-- 浏览内容任务 -->
        <div class="task-item" :class="{ 'completed': tasks.browse.completed }">
          <div class="task-left">
            <div class="task-icon" :class="tasks.browse.icon"></div>
            <div class="task-info">
              <div class="task-name">{{ tasks.browse.name }}</div>
              <div class="task-desc">{{ tasks.browse.desc }}</div>
            </div>
          </div>
          <div class="task-right">
            <div class="task-reward">+{{ tasks.browse.energy }} 能量</div>
            <div v-if="tasks.browse.completed" class="task-status completed">已完成</div>
            <div v-else class="task-status pending" @click="completeTask('browse')">去完成</div>
          </div>
        </div>

        <!-- 邀请好友任务 -->
        <div class="task-item" :class="{ 'completed': tasks.invite.completed }">
          <div class="task-left">
            <div class="task-icon" :class="tasks.invite.icon"></div>
            <div class="task-info">
              <div class="task-name">{{ tasks.invite.name }}</div>
              <div class="task-desc">{{ tasks.invite.desc }}</div>
            </div>
          </div>
          <div class="task-right">
            <div class="task-reward">+{{ tasks.invite.energy }} 能量</div>
            <div v-if="tasks.invite.completed" class="task-status completed">已完成</div>
            <div v-else class="task-status pending" @click="completeTask('invite')">去完成</div>
          </div>
        </div>

        <!-- 完成学习任务 -->
        <div class="task-item" :class="{ 'completed': tasks.learn.completed }">
          <div class="task-left">
            <div class="task-icon" :class="tasks.learn.icon"></div>
            <div class="task-info">
              <div class="task-name">{{ tasks.learn.name }}</div>
              <div class="task-desc">{{ tasks.learn.desc }}</div>
            </div>
          </div>
          <div class="task-right">
            <div class="task-reward">+{{ tasks.learn.energy }} 能量</div>
            <div v-if="tasks.learn.completed" class="task-status completed">已完成</div>
            <div v-else class="task-status pending" @click="completeTask('learn')">去完成</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 任务规则说明 -->
    <div class="rules-container">
      <div class="rules-title">任务规则</div>
      <div class="rules-content">
        <ul>
          <li>每日任务0点刷新，逾期未完成的任务将失效</li>
          <li>完成任务后可立即获得相应的能量奖励</li>
          <li>部分任务有次数限制，请留意任务说明</li>
          <li>通过作弊手段完成任务将被取消奖励并可能受到处罚</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 返回上一页
const goBack = () => {
  router.back();
};

// 任务数据
const tasks = ref({
  login: {
    name: '每日登录',
    desc: '每天登录唤醒兽平台',
    icon: 'icon-login',
    energy: 5,
    completed: true
  },
  wakeup: {
    name: '唤醒好友',
    desc: '帮助3位朋友唤醒潜能',
    icon: 'icon-wakeup',
    energy: 10,
    completed: false
  },
  publish: {
    name: '发布动态',
    desc: '分享今日感悟或收获',
    icon: 'icon-publish',
    energy: 10,
    completed: false
  },
  browse: {
    name: '浏览内容',
    desc: '浏览5篇平台内容',
    icon: 'icon-browse',
    energy: 8,
    completed: false
  },
  invite: {
    name: '邀请好友',
    desc: '邀请1位新用户注册',
    icon: 'icon-invite',
    energy: 20,
    completed: false
  },
  learn: {
    name: '完成学习',
    desc: '完成1节学习课程',
    icon: 'icon-learn',
    energy: 15,
    completed: false
  }
});

// 计算属性
const completedTasks = computed(() => {
  return Object.values(tasks.value).filter(task => task.completed).length;
});

const totalTasks = computed(() => {
  return Object.values(tasks.value).length;
});

const totalEnergy = computed(() => {
  return Object.values(tasks.value)
    .filter(task => task.completed)
    .reduce((sum, task) => sum + task.energy, 0);
});

// 完成任务
const completeTask = (taskKey) => {
  // 这里可以添加任务完成的逻辑，比如跳转到对应的页面
  console.log('完成任务:', taskKey);
  
  // 模拟任务完成
  tasks.value[taskKey].completed = true;
};
</script>

<style lang="less" scoped>
/* 页面基础样式 */
#page-daily-tasks {
  background: linear-gradient(to bottom, #a1e9c5, #499f9b);
  min-height: 100vh;
  padding: 120px 0 30px;
  position: relative;
}

/* 顶部导航栏 - 使用Tailwind类实现，此处仅保留必要的补充样式 */
.header {
  /* 绝对定位已在模板中设置 */
}

.header-content {
  /* 背景、圆角和阴影已在模板中设置 */
}

.header-left {
  cursor: pointer;
}

.header-right {
  /* 占位元素，用于平衡布局 */
}

/* 任务统计卡片 */
.stats-card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.95);
  margin: 0 16px 16px;
  padding: 20px 0;
  border-radius: 16px;
  border: 2px solid #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15),
              0 3px 10px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 5;
}

.stats-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.stats-value {
  font-size: 24px;
  font-weight: bold;
  color: #499f9b;
  margin-bottom: 4px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.stats-label {
  font-size: 12px;
  color: #666;
}

.stats-divider {
  width: 1px;
  height: 40px;
  background: rgba(0, 0, 0, 0.1);
}

/* 任务列表 */
.tasks-container {
  background: rgba(255, 255, 255, 0.95);
  margin: 0 16px 16px;
  border-radius: 16px;
  border: 2px solid #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15),
              0 3px 10px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
  padding: 16px;
  position: relative;
  z-index: 5;
}

.tasks-title {
  font-size: 16px;
  font-weight: bold;
  color: #499f9b;
  margin-bottom: 16px;
  text-align: center;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(73, 159, 155, 0.2);
}

.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* 任务项 */
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.25s ease;
  border: 2px solid transparent;
  position: relative;
}

.task-item:active {
  transform: scale(0.98);
}

.task-item.completed {
  background: linear-gradient(to right, #e8f5e8, #c8e6c9);
  border-color: #4caf50;
}

.task-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

/* 任务图标 */
.task-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.icon-login {
  background: linear-gradient(to bottom, #ff9800, #f57c00);
}

.icon-wakeup {
  background: linear-gradient(to bottom, #2196f3, #1976d2);
}

.icon-publish {
  background: linear-gradient(to bottom, #9c27b0, #7b1fa2);
}

.icon-browse {
  background: linear-gradient(to bottom, #00bcd4, #0097a7);
}

.icon-invite {
  background: linear-gradient(to bottom, #4caf50, #388e3c);
}

.icon-learn {
  background: linear-gradient(to bottom, #ff5722, #e64a19);
}

/* 任务信息 */
.task-info {
  flex: 1;
}

.task-name {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.task-desc {
  font-size: 12px;
  color: #666;
  line-height: 1.4;
}

.task-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.task-reward {
  font-size: 14px;
  font-weight: bold;
  color: #4caf50;
  background: rgba(76, 175, 80, 0.1);
  padding: 4px 8px;
  border-radius: 12px;
  border: 1px solid rgba(76, 175, 80, 0.2);
}

/* 任务状态按钮 */
.task-status {
  font-size: 12px;
  font-weight: bold;
  padding: 6px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  border: none;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.task-status:active {
  transform: scale(0.95);
}

.task-status.pending {
  background: linear-gradient(to bottom, #a1e9c5, #499f9b);
  color: white;
}

.task-status.completed {
  background: linear-gradient(to bottom, #4caf50, #388e3c);
  color: white;
}

/* 任务规则 */
.rules-container {
  background: rgba(255, 255, 255, 0.95);
  margin: 0 16px 16px;
  border-radius: 16px;
  border: 2px solid #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15),
              0 3px 10px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
  padding: 16px;
  position: relative;
  z-index: 5;
}

.rules-title {
  font-size: 16px;
  font-weight: bold;
  color: #499f9b;
  margin-bottom: 12px;
  text-align: center;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(73, 159, 155, 0.2);
}

.rules-content {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}

.rules-content ul {
  margin: 0;
}

.rules-content li {
  margin-bottom: 8px;
  position: relative;
}

.rules-content li:last-child {
  margin-bottom: 0;
}

/* 底部安全距离 */
.safe-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>