// 服务与电商
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
  }
]

export default routes