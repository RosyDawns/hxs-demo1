// 首页与核心导航
const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../../views/IndexPage.vue'),
    meta: { title: '唤醒兽平台 - 首页', icon: 'fa-home', showInNav: true }
  },
  {
    path: '/ai-assistant',
    name: 'AIAssistant',
    component: () => import('../../views/AIAssistantPage.vue'),
    meta: { title: 'AI管家·大狮兄', icon: 'fa-robot', showInNav: true }
  },
  {
    path: '/agent-chat',
    name: 'AgentChat',
    component: () => import('../../views/AgentChatPage.vue'),
    meta: { title: 'AI智能体聊天', icon: 'fa-robot', showInNav: false }
  },
  {
    path: '/energy-tree',
    name: 'EnergyTree',
    component: () => import('../../views/EnergyTreePage.vue'),
    meta: { title: '能量树', icon: 'fa-tree', showInNav: true }
  },
  {
    path: '/daily-tasks',
    name: 'DailyTasks',
    component: () => import('../../views/DailyTasksPage.vue'),
    meta: { title: '每日任务', icon: 'fa-tasks', showInNav: false }
  },
  {
    path: '/energy-items',
    name: 'EnergyItems',
    component: () => import('../../views/EnergyItemsPage.vue'),
    meta: { title: '能量道具', icon: 'fa-box-open', showInNav: false }
  },
  {
    path: '/call',
    name: 'Call',
    component: () => import('../../views/CallPage.vue'),
    meta: { title: '打Call', icon: 'fa-phone', showInNav: true }
  },
  {
    path: '/group-play',
    name: 'GroupPlay',
    component: () => import('../../views/GroupPlayPage.vue'),
    meta: { title: '组团去玩', icon: 'fa-users', showInNav: false }
  },
  {
    path: '/activity-detail/:id',
    name: 'ActivityDetail',
    component: () => import('../../views/ActivityDetailPage.vue'),
    meta: { title: '活动详情', showInNav: false }
  },
  {
    path: '/activity-signup/:id',
    name: 'ActivitySignUp',
    component: () => import('../../views/ActivitySignUpPage.vue'),
    meta: { title: '活动报名', showInNav: false }
  },
  {
    path: '/activity-payment/:id',
    name: 'ActivityPayment',
    component: () => import('../../views/ActivityPaymentPage.vue'),
    meta: { title: '待付款', showInNav: false }
  },
  {
    path: '/activity-pending/:id',
    name: 'ActivityPending',
    component: () => import('../../views/ActivityPendingPage.vue'),
    meta: { title: '待出行', showInNav: false }
  },
  {
    path: '/map-demo',
    name: 'MapDemo',
    component: () => import('../../views/MapDemoPage.vue'),
    meta: { title: '高德地图标记演示', showInNav: false }
  },
  {
    path: '/sports-waterfall',
    name: 'SportsWaterfall',
    component: () => import('../../views/SportsWaterfallPage.vue'),
    meta: { title: '运动动态瀑布流', showInNav: false }
  },
  {
    path: '/data-cabin',
    name: 'DataCabin',
    component: () => import('../../views/DataCabinPage.vue'),
    meta: { title: '数据舱', showInNav: false }
  },
  {
    path: '/exercise',
    name: 'Exercise',
    component: () => import('../../views/ExercisePage.vue'),
    meta: { title: '练了么', showInNav: false }
  },
  {
    path: '/diet',
    name: 'Diet',
    component: () => import('../../views/DietPage.vue'),
    meta: { title: '吃了么', showInNav: false }
  },
  {
    path: '/slim',
    name: 'Slim',
    component: () => import('../../views/SlimPage.vue'),
    meta: { title: '瘦了么', showInNav: false }
  }
]

export default routes
