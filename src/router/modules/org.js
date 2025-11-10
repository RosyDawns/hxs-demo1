// 组织与唤醒师
const routes = [
  {
    path: '/leader-channel',
    name: 'LeaderChannel',
    component: () => import('../../views/LeaderChannelPage.vue'),
    meta: { title: '主理人频道' }
  },
  {
    path: '/buddy-waker',
    name: 'BuddyWaker',
    component: () => import('../../views/BuddyWakerPage.vue'),
    meta: { title: '搭子唤醒师' }
  },
  {
    path: '/teacher-list',
    name: 'TeacherList',
    component: () => import('../../views/TeacherListPage.vue'),
    meta: { title: '唤醒狮列表', icon: 'fa-user-circle', showInNav: true }
  },
  {
    path: '/ouyang',
    name: 'Ouyang',
    component: () => import('../../views/OuyangPage.vue'),
    meta: { title: '欧阳老师详情' }
  },
  {
    path: '/register-waker',
    name: 'RegisterWaker',
    component: () => import('../../views/RegisterWakerPage.vue'),
    meta: { title: '注册唤醒师' }
  },
  {
    path: '/register-waker/authenticate',
    name: 'RegisterWakerAuthenticate',
    component: () => import('../../views/RegisterWakerAuthenticate.vue'),
    meta: { title: '主理人认证' }
  },
  {
    path: '/register-waker/map-claim',
    name: 'RegisterWakerMapClaim',
    component: () => import('../../views/RegisterWakerMapClaim.vue'),
    meta: { title: '地图认领' }
  },
  {
    path: '/register-waker/license',
    name: 'RegisterWakerLicense',
    component: () => import('../../views/RegisterWakerLicense.vue'),
    meta: { title: '执照认证' }
  },
  {
    path: '/register-waker/success',
    name: 'RegisterWakerSuccess',
    component: () => import('../../views/RegisterWakerSuccess.vue'),
    meta: { title: '认证申请成功' }
  },
  {
    path: '/register-waker/skill',
    name: 'RegisterWakerSkill',
    component: () => import('../../views/RegisterWakerPage.vue'),
    meta: { title: '技能唤醒师注册' }
  },
  {
    path: '/register-waker/partner',
    name: 'RegisterWakerPartner',
    component: () => import('../../views/RegisterWakerPage.vue'),
    meta: { title: '搭子唤醒师注册' }
  },
  {
    path: '/waker-alliance',
    name: 'WakerAlliance',
    component: () => import('../../views/WakerAlliancePage.vue'),
    meta: { title: '唤醒联盟' }
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../../views/TeamPage.vue'),
    meta: { title: '醒狮团队' }
  }
]

export default routes