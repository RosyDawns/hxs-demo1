// 社交与内容互动
const routes = [
  {
    path: '/messages',
    name: 'Messages',
    component: () => import('../../views/MessagesPage.vue'),
    meta: { title: '消息', icon: 'fa-envelope', showInNav: true, requiresAuth: true }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../../views/ChatPage.vue'),
    meta: { title: '聊天', requiresAuth: true }
  },
  {
    path: '/partners',
    name: 'Partners',
    component: () => import('../../views/PartnersPage.vue'),
    meta: { title: '生活搭子' }
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('../../views/RankingPage.vue'),
    meta: { title: '城市大神老狮榜单' }
  },
  {
    path: '/daily',
    name: 'Daily',
    component: () => import('../../views/DailyPage.vue'),
    meta: { title: '日常' }
  },
  {
    path: '/publish-activity',
    name: 'PublishActivity',
    component: () => import('../../views/PublishActivityPage.vue'),
    meta: { title: '发布动态', requiresAuth: true }
  },
  {
    path: '/dynamic-detail/:id',
    name: 'DynamicDetail',
    component: () => import('../../views/DynamicDetailPage.vue'),
    meta: { title: '动态详情' }
  },
  {
    path: '/follow',
    name: 'Follow',
    component: () => import('../../views/FollowPage.vue'),
    meta: { title: '新增关注', requiresAuth: true }
  },
  {
    path: '/comments',
    name: 'Comments',
    component: () => import('../../views/CommentsPage.vue'),
    meta: { title: '评论和@', requiresAuth: true }
  },
  {
    path: '/add-friends',
    name: 'AddFriends',
    component: () => import('../../views/AddFriendsPage.vue'),
    meta: { title: '添加好友', requiresAuth: true }
  },
  {
    path: '/friend-ranking',
    name: 'FriendRanking',
    component: () => import('../../views/FriendRankingPage.vue'),
    meta: { title: '好友排行' }
  },
  {
    path: '/create-activity',
    name: 'CreateActivity',
    component: () => import('../../views/CreateActivityPage.vue'),
    meta: { title: '创建活动', requiresAuth: true }
  }
]

export default routes
