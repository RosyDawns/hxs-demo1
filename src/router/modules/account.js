// 账户与个人中心
const routes = [
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../../views/SigninPage.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/daily-signin',
    name: 'DailySignin',
    component: () => import('../../views/DailySigninPage.vue'),
    meta: { title: '每日签到', requiresAuth: true }
  },
  {
    path: '/checkin',
    name: 'CheckIn',
    component: () => import('../../views/CheckInPage.vue'),
    meta: { title: '健康打卡', requiresAuth: true }
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('../../views/MePage.vue'),
    meta: { title: '我的', icon: 'fa-user', showInNav: true, requiresAuth: true }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../../views/SettingsPage.vue'),
    meta: { title: '设置', requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../../views/ProfilePage.vue'),
    meta: { title: '个人资料', requiresAuth: true }
  },
  {
    path: '/account-security',
    name: 'AccountSecurity',
    component: () => import('../../views/AccountSecurityPage.vue'),
    meta: { title: '账号与安全', requiresAuth: true }
  },
  {
    path: '/notification-settings',
    name: 'NotificationSettings',
    component: () => import('../../views/NotificationSettingsPage.vue'),
    meta: { title: '消息通知设置', requiresAuth: true }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../../views/PrivacyPage.vue'),
    meta: { title: '隐私管理', requiresAuth: true }
  },
  {
    path: '/general',
    name: 'General',
    component: () => import('../../views/GeneralPage.vue'),
    meta: { title: '通用', requiresAuth: true }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../../views/PrivacyPolicyPage.vue'),
    meta: { title: '隐私政策' }
  },
  {
    path: '/data-collection',
    name: 'DataCollection',
    component: () => import('../../views/DataCollectionPage.vue'),
    meta: { title: '个人信息收集清单' }
  },
  {
    path: '/data-sharing',
    name: 'DataSharing',
    component: () => import('../../views/DataSharingPage.vue'),
    meta: { title: '第三方信息共享' }
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import('../../views/WalletPage.vue'),
    meta: { title: '我的钱包', requiresAuth: true }
  },
  {  
    path: '/asset-detail',
    name: 'AssetDetail',
    component: () => import('../../views/AssetDetailPage.vue'),
    meta: { title: '总资产', requiresAuth: true }
  },
  {  
    path: '/wallet-detail',
    name: 'WalletDetail',
    component: () => import('../../views/WalletDetailPage.vue'),
    meta: { title: '唤醒兽支付·零钱', requiresAuth: true }
  },
  {
    path: '/energy-coin',
    name: 'EnergyCoin',
    component: () => import('../../views/EnergyCoinPage.vue'),
    meta: { title: '能量币', requiresAuth: true }
  },
  {
    path: '/gift-reward',
    name: 'GiftReward',
    component: () => import('../../views/GiftRewardPage.vue'),
    meta: { title: '礼物打赏', requiresAuth: true }
  },
  {
    path: '/service-income',
    name: 'ServiceIncome',
    component: () => import('../../views/ServiceIncomePage.vue'),
    meta: { title: '服务收入', requiresAuth: true }
  },
  {
    path: '/star-promoter-income',
    name: 'StarPromoterIncome',
    component: () => import('../../views/StarPromoterIncomePage.vue'),
    meta: { title: '星推官收入', requiresAuth: true }
  },
  {
    path: '/identity-info',
    name: 'IdentityInfo',
    component: () => import('../../views/IdentityInfoPage.vue'),
    meta: { title: '身份信息管理', requiresAuth: true }
  },
  {
    path: '/my-reviews',
    name: 'MyReviews',
    component: () => import('../../views/MyReviewsPage.vue'),
    meta: { title: '真实评价', requiresAuth: true }
  },
  {
    path: '/pending-review',
    name: 'PendingReview',
    component: () => import('../../views/PendingReviewPage.vue'),
    meta: { title: '待评价', requiresAuth: true }
  },
  {
    path: '/write-review/:orderId',
    name: 'WriteReview',
    component: () => import('../../views/WriteReviewPage.vue'),
    meta: { title: '评价', requiresAuth: true }
  }
]

export default routes
