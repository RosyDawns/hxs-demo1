// 唤醒营与活动
const routes = [
  {
    path: '/camp',
    name: 'Camp',
    component: () => import('../../views/CampPage.vue'),
    meta: { title: '唤醒营', icon: 'fa-heartbeat', showInNav: true }
  },
  {
    path: '/camp-detail/:id',
    name: 'CampDetail',
    component: () => import('../../views/CampDetailPage.vue'),
    meta: { title: '免费体验活动详情' }
  },
  {
    path: '/camp-register',
    name: 'CampRegister',
    component: () => import('../../views/CampRegisterPage.vue'),
    meta: { title: '唤醒营注册', requiresAuth: true }
  },
  {
    path: '/weight-management-camp',
    name: 'WeightManagementCamp',
    component: () => import('../../views/WeightManagementCampPage.vue'),
    meta: { title: '体重管理唤醒营' }
  }
]

export default routes
