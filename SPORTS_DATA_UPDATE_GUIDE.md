# 运动数据更新完成指南

## ✅ 已完成的页面

### 1. IndexPage.vue ✅
- ✅ 已添加运动图片导入
- ✅ 已更新所有动态列表数据（推荐、关注、附近、上海）
- ✅ 已添加滚动加载功能
- ✅ 已添加加载提示UI

### 2. DyListPage.vue ✅
- ✅ 已添加运动图片导入
- ✅ 已更新所有动态列表数据（关注、推荐、附近、上海）
- ✅ 已添加滚动加载功能
- ✅ 已添加加载提示UI
- ✅ 使用了工具函数 `generateRandomSportsItems`

### 3. SportsWaterfallPage.vue ✅
- ✅ 完整的滚动加载示例页面
- ✅ 48种运动标题
- ✅ 随机数据生成

## 📝 待完成的页面

### 4. MePage.vue
### 5. TeacherListPage.vue

## 🛠️ 更新步骤（针对 MePage 和 TeacherListPage）

### 步骤1: 添加导入

在 script 部分的导入区域添加：

```javascript
// 添加到现有导入之后
import { onMounted, onUnmounted } from 'vue'; // 如果还没有导入
import { generateRandomSportsItems, createScrollLoader } from "@/utils/sportsDataGenerator";

// 导入运动图片
import sport1 from '@/assets/images/sports/sport1.webp';
import sport2 from '@/assets/images/sports/sport2.webp';
import sport3 from '@/assets/images/sports/sport3.webp';
import sport4 from '@/assets/images/sports/sport4.webp';
import sport5 from '@/assets/images/sports/sport5.webp';
import sport6 from '@/assets/images/sports/sport6.webp';
```

### 步骤2: 在 setup/data 函数中添加变量

```javascript
// 在 setup() 或 data() 函数开始处添加
const sportImages = [sport1, sport2, sport3, sport4, sport5, sport6];
const avatars = [user1, user2, user3, user4]; // 使用现有的头像变量
const loading = ref(false); // 或 loading: false
const noMore = ref(false); // 或 noMore: false
let currentId = 100;
```

### 步骤3: 更新动态列表数据

将现有的动态列表数据中的 `image` 字段替换为运动图片：

```javascript
// 示例：将
{
  id: 1,
  title: "某个标题",
  image: img39, // 旧图片
  avatar: user1,
  author: "作者",
  likes: 128
}

// 替换为
{
  id: 1,
  title: "晨跑打卡！今天跑了10公里，感觉超棒", // 运动相关标题
  image: sport1, // 运动图片
  avatar: user1,
  author: "跑步达人小李", // 运动相关作者
  likes: 328
}
```

### 步骤4: 添加加载更多函数

```javascript
// 加载更多数据
const loadMore = () => {
  if (loading.value || noMore.value) return;
  
  loading.value = true;
  setTimeout(() => {
    const newItems = generateRandomSportsItems(6, currentId, sportImages, avatars);
    currentId += 6;
    
    // 添加到对应的列表
    dynamicList.value.push(...newItems); // 根据实际的列表变量名调整
    
    loading.value = false;
    
    if (dynamicList.value.length >= 50) {
      noMore.value = true;
    }
  }, 800);
};
```

### 步骤5: 添加滚动监听

```javascript
// 在 setup() 函数中添加
const handleScroll = createScrollLoader(loadMore);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
```

### 步骤6: 更新 return 语句

```javascript
// 在 return 对象中添加
return {
  // ... 现有的返回值
  loading,
  noMore,
};
```

### 步骤7: 添加加载提示UI

在瀑布流组件后面添加：

```vue
<!-- 加载提示 -->
<div v-if="loading" class="text-center py-4 text-gray-500">
  <i class="fa-solid fa-spinner fa-spin mr-2"></i>
  加载中...
</div>

<!-- 没有更多数据提示 -->
<div v-if="noMore && dynamicList.length > 0" class="text-center py-4 text-gray-400 text-sm pb-20">
  没有更多了
</div>
```

## 📋 MePage.vue 具体更新点

MePage 有两个动态列表需要更新：

1. **dynamicList** - 个人动态列表
2. **followDynamicsList** - 关注的动态列表

需要为这两个列表分别更新数据，并在 `loadMore` 函数中根据当前激活的 tab 来决定向哪个列表添加数据：

```javascript
const loadMore = () => {
  if (loading.value || noMore.value) return;
  
  loading.value = true;
  setTimeout(() => {
    const newItems = generateRandomSportsItems(6, currentId, sportImages, avatars);
    currentId += 6;
    
    // 根据当前激活的 tab 添加到对应列表
    if (activeTab.value === 'dynamics') {
      dynamicList.value.push(...newItems);
    } else if (activeTab.value === 'follow' && followViewMode.value === 'mode2') {
      followDynamicsList.value.push(...newItems);
    }
    
    loading.value = false;
  }, 800);
};
```

## 📋 TeacherListPage.vue 具体更新点

TeacherListPage 有两个动态列表需要更新：

1. **dynamicItems** - 推荐动态列表
2. **followedDynamicItems** - 关注的动态列表

需要根据当前的 `topTab` 和 `selectedTab` 来决定向哪个列表添加数据：

```javascript
const loadMore = () => {
  if (loading.value || noMore.value) return;
  
  loading.value = true;
  setTimeout(() => {
    const newItems = generateRandomSportsItems(6, currentId, sportImages, avatars);
    currentId += 6;
    
    // 根据当前选中的标签添加到对应列表
    if (topTab.value === 'discover' && selectedTab.value === '动态') {
      dynamicItems.value.push(...newItems);
    } else if (topTab.value === 'follow' && selectedTab.value === '动态') {
      followedDynamicItems.value.push(...newItems);
    }
    
    loading.value = false;
  }, 800);
};
```

## 🎯 运动数据示例

使用以下数据结构替换现有的动态列表：

```javascript
const dynamicList = ref([
  {
    id: 1,
    title: "晨跑打卡！今天跑了10公里，感觉超棒",
    image: sport1,
    avatar: user1,
    author: "跑步达人小李",
    likes: 328,
  },
  {
    id: 2,
    title: "瑜伽让我找到内心的平静，每天坚持30分钟",
    image: sport2,
    avatar: user2,
    author: "瑜伽教练Anna",
    likes: 256,
  },
  {
    id: 3,
    title: "健身房撸铁日常，今天练背，状态很好",
    image: sport3,
    avatar: user3,
    author: "健身教练Mike",
    likes: 445,
  },
  {
    id: 4,
    title: "篮球场上挥洒汗水，这才是青春该有的样子",
    image: sport4,
    avatar: user4,
    author: "篮球少年",
    likes: 198,
  },
  {
    id: 5,
    title: "游泳是最好的全身运动，坚持就是胜利",
    image: sport5,
    avatar: user1,
    author: "游泳健将",
    likes: 367,
  },
  {
    id: 6,
    title: "骑行穿越城市，感受不一样的风景",
    image: sport6,
    avatar: user2,
    author: "骑行爱好者",
    likes: 289,
  },
]);
```

## 🔧 工具函数说明

已创建 `src/utils/sportsDataGenerator.js` 工具文件，包含：

- `sportTitles` - 48种运动标题
- `authors` - 24个运动相关作者名
- `generateRandomSportsItems(count, startId, sportImages, avatars)` - 生成随机运动数据
- `createScrollLoader(loadMoreCallback)` - 创建滚动加载处理器

## ✅ 测试清单

更新完成后，测试以下功能：

- [ ] 页面加载时显示运动相关的图片和标题
- [ ] 向下滚动到接近底部时自动加载新数据
- [ ] 显示"加载中..."提示
- [ ] 新数据使用随机的运动图片和标题
- [ ] 达到50条后显示"没有更多了"
- [ ] 切换不同的 tab 时，每个 tab 独立加载数据

## 📚 参考文件

- ✅ `src/views/IndexPage.vue` - 完整实现示例
- ✅ `src/views/DyListPage.vue` - 完整实现示例
- ✅ `src/views/SportsWaterfallPage.vue` - 滚动加载示例
- ✅ `src/utils/sportsDataGenerator.js` - 工具函数
- ✅ `src/components/WaterfallLayout.vue` - 瀑布流组件

## 🚀 快速开始

1. 打开 `src/views/MePage.vue`
2. 按照上述步骤1-7依次更新
3. 保存并测试
4. 重复步骤1-3更新 `TeacherListPage.vue`

所有需要的工具函数和组件都已准备好，只需要按照步骤更新即可！
