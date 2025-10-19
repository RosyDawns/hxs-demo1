import { createRouter, createWebHistory } from "vue-router";

// 路由模块（按功能域拆分，懒加载组件）
import coreRoutes from "./modules/core";
import campRoutes from "./modules/camp";
import accountRoutes from "./modules/account";
import commerceRoutes from "./modules/commerce";
import socialRoutes from "./modules/social";
import orgRoutes from "./modules/org";
import helpRoutes from "./modules/help";

// 合并路由
const routes = [
  ...coreRoutes,
  ...campRoutes,
  ...accountRoutes,
  ...commerceRoutes,
  ...socialRoutes,
  ...orgRoutes,
  ...helpRoutes,
];

// 存储每个页面的滚动位置
const scrollPositions = {};

// 存储访问历史，用于处理嵌套跳转
const visitHistory = new Set();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // 保存和恢复页面滚动位置
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      visitHistory.delete(from.fullPath);
      return savedPosition;
    }
    if (visitHistory.has(to.fullPath)) {
      return { top: 0 };
    }
    visitHistory.add(to.fullPath);
    if (scrollPositions[to.fullPath]) {
      const position = scrollPositions[to.fullPath];
      delete scrollPositions[to.fullPath];
      return position;
    }
    return { top: 0 };
  },
});

// 简单登录态判断（可替换为实际鉴权逻辑）
function isAuthenticated() {
  try {
    return !!localStorage.getItem("token");
  } catch (e) {
    return false;
  }
}

// 在导航离开页面时保存滚动位置 + 登录守卫
router.beforeEach((to, from, next) => {
  if (from.fullPath && from.fullPath !== to.fullPath) {
    scrollPositions[from.fullPath] = {
      top:
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop,
      left: 0,
    };
  }

  // // 登录守卫
  // if (to.meta && to.meta.requiresAuth && !isAuthenticated()) {
  //   return next({ path: '/signin', query: { redirect: to.fullPath } })
  // }
  // // 已登录访问登录页则跳首页
  // if (to.path === '/signin' && isAuthenticated()) {
  //   return next({ path: '/' })
  // }

  next();
});

export default router;
