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
    path: '/wallet',
    name: 'Wallet',
    component: () => import('../../views/WalletPage.vue'),
    meta: { title: '我的钱包', requiresAuth: true }
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
