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
    path: '/energy-tree',
    name: 'EnergyTree',
    component: () => import('../../views/EnergyTreePage.vue'),
    meta: { title: '能量树', icon: 'fa-tree', showInNav: true }
  },
  {
    path: '/call',
    name: 'Call',
    component: () => import('../../views/CallPage.vue'),
    meta: { title: '打Call', icon: 'fa-phone', showInNav: true }
  }
]

export default routes
