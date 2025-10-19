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
    meta: { title: '注册唤醒师', requiresAuth: true }
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