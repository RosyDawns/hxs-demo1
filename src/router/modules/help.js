// 帮助与信息
const routes = [
  {
    path: '/help',
    name: 'Help',
    component: () => import('../../views/HelpPage.vue'),
    meta: { title: '帮助中心' }
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import('../../views/FeedbackPage.vue'),
    meta: { title: '意见反馈' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../../views/AboutPage.vue'),
    meta: { title: '关于我们' }
  }
]

export default routes