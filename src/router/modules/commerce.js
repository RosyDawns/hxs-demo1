const routes = [
  {
    path: '/store',
    name: 'Store',
    component: () => import('../../views/StorePage.vue'),
    meta: { title: '我的橱窗' }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../../views/ServicesPage.vue'),
    meta: { title: '推荐服务' }
  },
  {
    path: '/product-detail/:id',
    name: 'ProductDetail',
    component: () => import('../../views/ProductDetailPage.vue'),
    meta: { title: '商品详情' }
  },
  {
    path: '/coupons',
    name: 'Coupons',
    component: () => import('../../views/CouponsPage.vue'),
    meta: { title: '优惠券', requiresAuth: true }
  },
  {
    path: '/my-orders',
    name: 'MyOrders',
    component: () => import('../../views/MyOrdersPage.vue'),
    meta: { title: '我的订单', requiresAuth: true }
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../../views/AddressPage.vue'),
    meta: { title: '收货地址', requiresAuth: true }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../../views/SearchPage.vue'),
    meta: { title: '搜索' }
  },
  {
    path: '/search-results',
    name: 'SearchResults',
    component: () => import('../../views/SearchResultsPage.vue'),
    meta: { title: '搜索结果' }
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('../../views/FavoritesPage.vue'),
    meta: { title: '我的收藏', requiresAuth: true }
  },
  {
    path: '/business-admin',
    name: 'BusinessAdmin',
    component: () => import('../../views/BusinessAdminPage.vue'),
    meta: { title: '商家后台', requiresAuth: true }
  },
  {
    path: '/business-admin/profile-edit',
    name: 'BusinessProfileEdit',
    component: () => import('../../views/BusinessProfileEditPage.vue'),
    meta: { title: '主页装修', requiresAuth: true }
  },
  {
    path: '/business-admin/data-center',
    name: 'BusinessAdminDataCenter',
    component: () => import('../../views/BusinessAdminDataCenterPage.vue'),
    meta: { title: '数据中心', requiresAuth: true }
  },
  {
    path: '/business-admin/reviews',
    name: 'BusinessAdminReviews',
    component: () => import('../../views/BusinessAdminReviewPage.vue'),
    meta: { title: '评价管理', requiresAuth: true }
  },
  {
    path: '/verification',
    name: 'Verification',
    component: () => import('../../views/VerificationPage.vue'),
    meta: { title: '验券及退款', requiresAuth: true }
  },
  {
    path: '/refund',
    name: 'Refund',
    component: () => import('../../views/RefundPage.vue'),
    meta: { title: '发起退款', requiresAuth: true }
  },
  {
    path: '/order-detail',
    name: 'OrderDetail',
    component: () => import('../../views/OrderDetailPage.vue'),
    meta: { title: '买单明细', requiresAuth: true }
  },
  {
    path: '/verification-detail',
    name: 'VerificationDetail',
    component: () => import('../../views/VerificationDetailPage.vue'),
    meta: { title: '核销明细', requiresAuth: true }
  },
  {
    path: '/refund-process',
    name: 'RefundProcess',
    component: () => import('../../views/RefundProcessPage.vue'),
    meta: { title: '处理售后', requiresAuth: true }
  },
  {
    path: '/financial-reconciliation',
    name: 'FinancialReconciliation',
    component: () => import('../../views/FinancialReconciliationPage.vue'),
    meta: { title: '财务对账', requiresAuth: true }
  },
  {
    path: '/energy-theater',
    name: 'EnergyTheater',
    component: () => import('../../views/EnergyTheaterPage.vue'),
    meta: { title: '能量剧场', requiresAuth: true }
  },
  {
    path: '/finance-management',
    name: 'FinanceManagement',
    component: () => import('../../views/FinanceManagementPage.vue'),
    meta: { title: '财务管理', requiresAuth: true }
  },
  {
    path: '/ad-plan-management',
    name: 'AdPlanManagement',
    component: () => import('../../views/AdPlanManagementPage.vue'),
    meta: { title: '新建广告计划', requiresAuth: true }
  },
  {
    path: '/business-admin/free-trial',
    name: 'BusinessAdminFreeTrial',
    component: () => import('../../views/BusinessAdminFreeTrialPage.vue'),
    meta: { title: '免费体验管理', requiresAuth: true }
  },
  {
    path: '/business-admin/sub-accounts',
    name: 'SubAccountManagement',
    component: () => import('../../views/SubAccountManagementPage.vue'),
    meta: { title: '子账户管理', requiresAuth: true }
  },
  {
    path: '/business-admin/sub-accounts/:id',
    name: 'SubAccountDetail',
    component: () => import('../../views/SubAccountDetailPage.vue'),
    meta: { title: '子账户详情', requiresAuth: true }
  },
  {
    path: '/business-admin/popularity-ranking',
    name: 'PopularityRanking',
    component: () => import('../../views/PopularityRankingPage.vue'),
    meta: { title: '人气榜单', requiresAuth: true }
  },
  {
    path: '/business-admin/star-promotion',
    name: 'StarPromotion',
    component: () => import('../../views/StarPromotionPage.vue'),
    meta: { title: '星推官带货', requiresAuth: true }
  },
  {
    path: '/business-admin/star-promotion/plan',
    name: 'StarPromotionPlan',
    component: () => import('../../views/StarPromotionPlanPage.vue'),
    meta: { title: '超级星推官定向计划', requiresAuth: true }
  },
  {
    path: '/group-buying-orders',
    name: 'GroupBuyingOrders',
    component: () => import('../../views/GroupBuyingOrdersPage.vue'),
    meta: { title: '团购订单管理', requiresAuth: true }
  },
  {
    path: '/business-admin/casual-promotion',
    name: 'CasualPromotion',
    component: () => import('../../views/CasualPromotionPage.vue'),
    meta: { title: '随心推', requiresAuth: true }
  },
  {
    path: '/business-admin/service-management',
    name: 'ServiceManagement',
    component: () => import('../../views/ServiceManagementPage.vue'),
    meta: { title: '服务管理', requiresAuth: true }
  },
  {
    path: '/business-admin/voucher-create',
    name: 'VoucherCreate',
    component: () => import('../../views/VoucherCreatePage.vue'),
    meta: { title: '代金券创建', requiresAuth: true }
  }
]

export default routes
