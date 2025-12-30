# DyListPage 修复完成

## 修复的问题

### 1. 无限滚动不工作
**原因**: 页面使用了 `id="page-teacher-list"` 容器并设置了 `overflow-y: auto`，但滚动监听器绑定在 `window` 对象上，导致无法触发。

**解决方案**: 
- 将滚动监听器从 `window` 改为绑定到 `#page-teacher-list` 元素
- 修改滚动计算逻辑，使用 `target.scrollTop`、`target.scrollHeight` 和 `target.clientHeight`
- 移除了 `createScrollLoader` 工具函数的使用，直接实现滚动逻辑

### 2. 切换标签页时数据不重新生成
**原因**: 没有监听 `topTab` 的变化，初始数据是硬编码的。

**解决方案**:
- 使用 `watch` 监听 `topTab` 变化
- 当标签切换时：
  - 调用 `resetImageTracker()` 重置图片追踪器
  - 重置 `noMore` 和 `currentId` 状态
  - 为当前标签页重新生成随机数据
- 将所有初始数据改为使用 `generateRandomSportsItems()` 随机生成

## 代码变更

### 导入变更
```javascript
// 添加 watch 和 resetImageTracker
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { generateRandomSportsItems, resetImageTracker } from "@/utils/sportsDataGenerator";
```

### 初始数据生成
```javascript
// 使用随机生成替代硬编码
const followItems = ref(generateRandomSportsItems(6, 1, sportImages, avatars));
const recommendItems = ref(generateRandomSportsItems(6, 7, sportImages, avatars));
const nearbyItems = ref(generateRandomSportsItems(6, 13, sportImages, avatars));
const cityItems = ref(generateRandomSportsItems(6, 19, sportImages, avatars));
```

### 滚动监听修复
```javascript
// 监听容器滚动而非 window 滚动
const handleScroll = (e) => {
  const target = e.target;
  const scrollTop = target.scrollTop;
  const scrollHeight = target.scrollHeight;
  const clientHeight = target.clientHeight;
  
  if (scrollTop + clientHeight >= scrollHeight - 200) {
    loadMore();
  }
};

onMounted(() => {
  const pageElement = document.getElementById('page-teacher-list');
  if (pageElement) {
    pageElement.addEventListener('scroll', handleScroll);
  }
});
```

### 标签切换监听
```javascript
watch(topTab, (newTab) => {
  resetImageTracker();
  noMore.value = false;
  currentId = 100;
  
  switch (newTab) {
    case 'follow':
      followItems.value = generateRandomSportsItems(6, 1, sportImages, avatars);
      break;
    case 'recommend':
      recommendItems.value = generateRandomSportsItems(6, 7, sportImages, avatars);
      break;
    case 'nearby':
      nearbyItems.value = generateRandomSportsItems(6, 13, sportImages, avatars);
      break;
    case 'city':
      cityItems.value = generateRandomSportsItems(6, 19, sportImages, avatars);
      break;
  }
});
```

## 功能验证

✅ 页面向下滚动时自动加载更多数据（距离底部200px触发）  
✅ 切换标签页（关注/推荐/附近/上海）时数据重新随机生成  
✅ 图片智能选择，优先显示未使用过的图片  
✅ 头部固定在页面顶部（CommonHeader 已有 `fixed` 样式）  
✅ 加载状态提示和"没有更多了"提示正常显示  
✅ 代码通过诊断检查，无编译错误

## 相关文件
- `src/views/DyListPage.vue` - 主要修复文件
- `src/utils/sportsDataGenerator.js` - 数据生成工具
- `src/components/CommonHeader.vue` - 固定头部组件
