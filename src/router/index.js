import { createRouter, createWebHistory } from 'vue-router'

// 导入所有页面组件
import IndexPage from '../views/IndexPage.vue' // 首页 - 对应hss_v3.html中的page-index
import AIAssistantPage from '../views/AIAssistantPage.vue' // AI管家（大狮兄）页面 - 对应hss_v3.html中的page-ai-assistant
import EnergyTreePage from '../views/EnergyTreePage.vue' // 能量树页面 - 对应hss_v3.html中的page-energy-tree
import CallPage from '../views/CallPage.vue' // 打Call页面
import TeacherListPage from '../views/TeacherListPage.vue' // 唤醒狮列表页面
import LeaderChannelPage from '../views/LeaderChannelPage.vue' // 主理人频道页面
import BuddyWakerPage from '../views/BuddyWakerPage.vue' // 搭子唤醒师页面
import CampPage from '../views/CampPage.vue' // 唤醒营页面
import MessagesPage from '../views/MessagesPage.vue' // 消息页面
import MePage from '../views/MePage.vue' // 我的页面
import OuyangPage from '../views/OuyangPage.vue' // 欧阳老师详情页面
import StorePage from '../views/StorePage.vue' // 橱窗页面
import ServicesPage from '../views/ServicesPage.vue' // 推荐服务页面
import MatchingPage from '../views/MatchingPage.vue' // 一键匹配页面
import SigninPage from '../views/SigninPage.vue' // 登录页面
import PartnersPage from '../views/PartnersPage.vue' // 生活搭子页面
import RankingPage from '../views/RankingPage.vue' // 城市大神老狮榜单页面
import CampRegisterPage from '../views/CampRegisterPage.vue' // 唤醒营注册页面
import CampDetailPage from '../views/CampDetailPage.vue' // 唤醒营详情页面
import MyOrdersPage from '../views/MyOrdersPage.vue' // 我的订单页面
import DailySigninPage from '../views/DailySigninPage.vue' // 每日签到页面
import ChatPage from '../views/ChatPage.vue' // 聊天页面
import CouponsPage from '../views/CouponsPage.vue' // 优惠券页面
import FavoritesPage from '../views/FavoritesPage.vue' // 我的收藏页面
import AddressPage from '../views/AddressPage.vue' // 收货地址页面
import HelpPage from '../views/HelpPage.vue' // 帮助中心页面
import FeedbackPage from '../views/FeedbackPage.vue' // 意见反馈页面
import AboutPage from '../views/AboutPage.vue' // 关于我们页面
import ProductDetailPage from '../views/ProductDetailPage.vue' // 商品详情页面
import SearchPage from '../views/SearchPage.vue' // 搜索页面
import SearchResultsPage from '../views/SearchResultsPage.vue' // 搜索结果页面
import FollowPage from '../views/FollowPage.vue' // 新增关注页面
import CommentsPage from '../views/CommentsPage.vue' // 评论和@页面
import AddFriendsPage from '../views/AddFriendsPage.vue' // 添加好友页面
import WeightManagementCampPage from '../views/WeightManagementCampPage.vue' // 体重管理唤醒营页面
import CheckInPage from '../views/CheckInPage.vue' // 健康打卡页面
import DailyPage from '../views/DailyPage.vue' // 日常页面
import PublishActivityPage from '../views/PublishActivityPage.vue' // 发布动态页面
import SettingsPage from '../views/SettingsPage.vue' // 设置页面
import WalletPage from '../views/WalletPage.vue' // 我的钱包页面
import RegisterWakerPage from '../views/RegisterWakerPage.vue' // 注册唤醒师页面
import WakerAlliancePage from '../views/WakerAlliancePage.vue' // 唤醒联盟页面
import TeamPage from '../views/TeamPage.vue' // 醒狮团队页面
import PendingReviewPage from '../views/PendingReviewPage.vue' // 待评价页面
import MyReviewsPage from '../views/MyReviewsPage.vue' // 真实评价页面
import WriteReviewPage from '../views/WriteReviewPage.vue' // 写评价页面
import DynamicDetailPage from '../views/DynamicDetailPage.vue' // 动态详情页面
import FriendRankingPage from '../views/FriendRankingPage.vue' // 好友排行页面

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
  // 打Call页面路由
  {
    path: '/call',
    name: 'Call',
    component: CallPage,
    meta: {
      title: '打Call',
      icon: 'fa-phone',
      showInNav: true
    }
  },
  // 唤醒狮列表页面路由
  {
    path: '/teacher-list',
    name: 'TeacherList',
    component: TeacherListPage,
    meta: {
      title: '唤醒狮列表',
      icon: 'fa-user-circle',
      showInNav: true
    }
  },
  // 主理人频道页面路由
  {
    path: '/leader-channel',
    name: 'LeaderChannel',
    component: LeaderChannelPage,
    meta: {
      title: '主理人频道',
      showInNav: false
    }
  },
  // 搭子唤醒师页面路由
  {
    path: '/buddy-waker',
    name: 'BuddyWaker',
    component: BuddyWakerPage,
    meta: {
      title: '搭子唤醒师',
      showInNav: false
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
  // 橱窗页面路由
  {
    path: '/store',
    name: 'Store',
    component: StorePage,
    meta: {
      title: '我的橱窗',
      showInNav: false
    }
  },
  // 推荐服务页面路由
  {
    path: '/services',
    name: 'Services',
    component: ServicesPage,
    meta: {
      title: '推荐服务',
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
  // 每日签到页面路由
  {
    path: '/daily-signin',
    name: 'DailySignin',
    component: DailySigninPage,
    meta: {
      title: '每日签到',
      showInNav: false
    }
  },
  // 聊天页面路由
  {
    path: '/chat',
    name: 'Chat',
    component: ChatPage,
    meta: {
      title: '聊天',
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
    path: '/camp-detail/:id',
    name: 'CampDetail',
    component: CampDetailPage,
    meta: {
      title: '免费体验活动详情',
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
  // 优惠券页面路由
  {
    path: '/coupons',
    name: 'Coupons',
    component: CouponsPage,
    meta: {
      title: '优惠券',
      showInNav: false
    }
  },
  // 我的收藏页面路由
  {
    path: '/favorites',
    name: 'Favorites',
    component: FavoritesPage,
    meta: {
      title: '我的收藏',
      showInNav: false
    }
  },
  // 收货地址页面路由
  {
    path: '/address',
    name: 'Address',
    component: AddressPage,
    meta: {
      title: '收货地址',
      showInNav: false
    }
  },
  // 帮助中心页面路由
  {
    path: '/help',
    name: 'Help',
    component: HelpPage,
    meta: {
      title: '帮助中心',
      showInNav: false
    }
  },
  // 意见反馈页面路由
  {
    path: '/feedback',
    name: 'Feedback',
    component: FeedbackPage,
    meta: {
      title: '意见反馈',
      showInNav: false
    }
  },
  // 商品详情页面路由
  {
    path: '/product-detail/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
    meta: {
      title: '商品详情',
      showInNav: false
    }
  },
  // 关于我们页面路由
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: {
      title: '关于我们',
      showInNav: false
    }
  },
  // 搜索页面路由
  {
    path: '/search',
    name: 'Search',
    component: SearchPage,
    meta: {
      title: '搜索',
      showInNav: false
    }
  },
  // 搜索结果页面路由
  {
    path: '/search-results',
    name: 'SearchResults',
    component: SearchResultsPage,
    meta: {
      title: '搜索结果',
      showInNav: false
    }
  },
  // 新增关注页面路由
  {
    path: '/follow',
    name: 'Follow',
    component: FollowPage,
    meta: {
      title: '新增关注',
      showInNav: false
    }
  },
  // 评论和@页面路由
  {
    path: '/comments',
    name: 'Comments',
    component: CommentsPage,
    meta: {
      title: '评论和@',
      showInNav: false
    }
  },
  // 添加好友页面路由
  {
    path: '/add-friends',
    name: 'AddFriends',
    component: AddFriendsPage,
    meta: {
      title: '添加好友',
      showInNav: false
    }
  },
  // 体重管理唤醒营页面路由
  {
    path: '/weight-management-camp',
    name: 'WeightManagementCamp',
    component: WeightManagementCampPage,
    meta: {
      title: '体重管理唤醒营',
      showInNav: false
    }
  },
  // 健康打卡页面路由
  {
    path: '/checkin',
    name: 'CheckIn',
    component: CheckInPage,
    meta: {
      title: '健康打卡',
      showInNav: false
    }
  },
  // 日常页面路由
  {
    path: '/daily',
    name: 'Daily',
    component: DailyPage,
    meta: {
      title: '日常',
      showInNav: false
    }
  },
  // 发布动态页面路由
  {
    path: '/publish-activity',
    name: 'PublishActivity',
    component: PublishActivityPage,
    meta: {
      title: '发布动态',
      showInNav: false
    }
  },
  // 设置页面路由
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsPage,
    meta: {
      title: '设置',
      showInNav: false
    }
  },
  // 我的钱包页面路由
  {
    path: '/wallet',
    name: 'Wallet',
    component: WalletPage,
    meta: {
      title: '我的钱包',
      showInNav: false
    }
  },
  // 注册唤醒师页面路由
  {
    path: '/register-waker',
    name: 'RegisterWaker',
    component: RegisterWakerPage,
    meta: {
      title: '注册唤醒师',
      showInNav: false
    }
  },
  // 唤醒联盟页面路由
  {
    path: '/waker-alliance',
    name: 'WakerAlliance',
    component: WakerAlliancePage,
    meta: {
      title: '唤醒联盟',
      showInNav: false
    }
  },
  // 醒狮团队页面路由
  {
    path: '/team',
    name: 'Team',
    component: TeamPage,
    meta: {
      title: '醒狮团队',
      showInNav: false
    }
  },
  // 待评价页面路由
  {
    path: '/pending-review',
    name: 'PendingReview',
    component: PendingReviewPage,
    meta: {
      title: '待评价',
      showInNav: false
    }
  },
  // 真实评价页面路由
  {
    path: '/my-reviews',
    name: 'MyReviews',
    component: MyReviewsPage,
    meta: {
      title: '真实评价',
      showInNav: false
    }
  },
  // 写评价页面路由
  {
    path: '/write-review/:orderId',
    name: 'WriteReview',
    component: WriteReviewPage,
    meta: {
      title: '评价',
      showInNav: false
    }
  },
  // 动态详情页面路由
  {
    path: '/dynamic-detail/:id',
    name: 'DynamicDetail',
    component: DynamicDetailPage,
    meta: {
      title: '动态详情',
      showInNav: false
    }
  },
  // 好友排行页面路由
  {
    path: '/friend-ranking',
    name: 'FriendRanking',
    component: FriendRankingPage,
    meta: {
      title: '好友排行',
      showInNav: false
    }
  }
]

// 存储每个页面的滚动位置
const scrollPositions = {}

// 存储访问历史，用于处理嵌套跳转
const visitHistory = new Set()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // 改进的滚动行为配置，保存和恢复所有页面的滚动位置
  scrollBehavior(to, from, savedPosition) {
    // 如果是后退导航，使用Vue Router默认的savedPosition
    if (savedPosition) {
      // 从访问历史中移除当前要离开的页面
      visitHistory.delete(from.fullPath);
      return savedPosition
    }
    
    // 判断是否是嵌套跳转访问过的页面
    if (visitHistory.has(to.fullPath)) {
      // 多次访问同一页面，重置滚动高度
      return { top: 0 }
    }
    
    // 记录新的访问历史
    visitHistory.add(to.fullPath);
    
    // 如果是进入页面，尝试恢复之前保存的滚动位置
    if (scrollPositions[to.fullPath]) {
      const position = scrollPositions[to.fullPath]
      // 清除保存的位置，防止重复使用
      delete scrollPositions[to.fullPath]
      return position
    }
    
    // 默认滚动到顶部
    return { top: 0 }
  }
})

// 在导航离开页面时保存滚动位置
router.beforeEach((to, from, next) => {
  // 使用fullPath而不是path，这样可以区分带有不同参数的相同路径
  if (from.fullPath && from.fullPath !== to.fullPath) {
    scrollPositions[from.fullPath] = {
      top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
      left: 0
    }
  }
  next()
})

export default router