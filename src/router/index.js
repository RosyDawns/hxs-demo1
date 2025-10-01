import { createRouter, createWebHistory } from 'vue-router'

// 导入所有页面组件
import IndexPage from '../views/IndexPage.vue' // 首页 - 对应hss_v3.html中的page-index
import AIAssistantPage from '../views/AIAssistantPage.vue' // AI管家（大狮兄）页面 - 对应hss_v3.html中的page-ai-assistant
import EnergyTreePage from '../views/EnergyTreePage.vue' // 能量树页面 - 对应hss_v3.html中的page-energy-tree
import TeacherListPage from '../views/TeacherListPage.vue' // 唤醒师列表页面
import CampPage from '../views/CampPage.vue' // 唤醒营页面
import MessagesPage from '../views/MessagesPage.vue' // 消息页面
import MePage from '../views/MePage.vue' // 我的页面
import OuyangPage from '../views/OuyangPage.vue' // 欧阳老师详情页面
import MatchingPage from '../views/MatchingPage.vue' // 一键匹配页面
import SigninPage from '../views/SigninPage.vue' // 登录页面
import PartnersPage from '../views/PartnersPage.vue' // 生活搭子页面
import RankingPage from '../views/RankingPage.vue' // 城市大神老狮榜单页面
import CampRegisterPage from '../views/CampRegisterPage.vue' // 唤醒营注册页面
import CampDetailPage from '../views/CampDetailPage.vue' // 唤醒营详情页面
import MyOrdersPage from '../views/MyOrdersPage.vue' // 我的订单页面
import AITResultPage from '../views/AITResultPage.vue' // AI匹配结果页面

// 路由配置数组
const routes = [
  // 首页路由
  {
    path: '/',
    name: 'Index',
    component: IndexPage,
    meta: {
      title: '唤醒兽平台 - 首页',
      icon: 'fa-home',
      showInNav: true
    }
  },
  // AI管家页面路由
  {
    path: '/ai-assistant',
    name: 'AIAssistant',
    component: AIAssistantPage,
    meta: {
      title: 'AI管家·大狮兄',
      icon: 'fa-robot',
      showInNav: true
    }
  },
  // 能量树页面路由
  {
    path: '/energy-tree',
    name: 'EnergyTree',
    component: EnergyTreePage,
    meta: {
      title: '能量树',
      icon: 'fa-tree',
      showInNav: true
    }
  },
  // 唤醒师列表页面路由
  {
    path: '/teacher-list',
    name: 'TeacherList',
    component: TeacherListPage,
    meta: {
      title: '唤醒师列表',
      icon: 'fa-user-circle',
      showInNav: true
    }
  },
  // 唤醒营页面路由
  {
    path: '/camp',
    name: 'Camp',
    component: CampPage,
    meta: {
      title: '唤醒营',
      icon: 'fa-heartbeat',
      showInNav: true
    }
  },
  // 消息页面路由
  {
    path: '/messages',
    name: 'Messages',
    component: MessagesPage,
    meta: {
      title: '消息',
      icon: 'fa-envelope',
      showInNav: true
    }
  },
  // 我的页面路由
  {
    path: '/me',
    name: 'Me',
    component: MePage,
    meta: {
      title: '我的',
      icon: 'fa-user',
      showInNav: true
    }
  },
  // 欧阳老师详情页面路由
  {
    path: '/ouyang',
    name: 'Ouyang',
    component: OuyangPage,
    meta: {
      title: '欧阳老师详情',
      showInNav: false
    }
  },
  // 一键匹配页面路由
  {
    path: '/matching',
    name: 'Matching',
    component: MatchingPage,
    meta: {
      title: '一键匹配',
      showInNav: false
    }
  },
  // 登录页面路由
  {
    path: '/signin',
    name: 'Signin',
    component: SigninPage,
    meta: {
      title: '登录',
      showInNav: false
    }
  },
  // 生活搭子页面路由
  {
    path: '/partners',
    name: 'Partners',
    component: PartnersPage,
    meta: {
      title: '生活搭子',
      showInNav: false
    }
  },
  // 城市大神老狮榜单页面路由
  {
    path: '/ranking',
    name: 'Ranking',
    component: RankingPage,
    meta: {
      title: '城市大神老狮榜单',
      showInNav: false
    }
  },
  // 唤醒营注册页面路由
  {
    path: '/camp-register',
    name: 'CampRegister',
    component: CampRegisterPage,
    meta: {
      title: '唤醒营注册',
      showInNav: false
    }
  },
  // 唤醒营详情页面路由
  {
    path: '/camp-detail',
    name: 'CampDetail',
    component: CampDetailPage,
    meta: {
      title: '唤醒营详情',
      showInNav: false
    }
  },
  // 我的订单页面路由
  {
    path: '/my-orders',
    name: 'MyOrders',
    component: MyOrdersPage,
    meta: {
      title: '我的订单',
      showInNav: false
    }
  },
  // AI匹配结果页面路由
  {
    path: '/ai-result',
    name: 'AIResult',
    component: AITResultPage,
    meta: {
      title: 'AI匹配结果',
      showInNav: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router