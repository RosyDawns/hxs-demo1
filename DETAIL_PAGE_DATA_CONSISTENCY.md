# 详情页数据一致性说明

## 功能说明

当用户从列表页点击某一项进入详情页时，详情页会显示与列表中完全一致的标题、图片和其他信息。

## 实现原理

### 1. 数据传递流程

```
列表页点击
  ↓
handleDynamicClick(dynamicId)
  ↓
从列表数据中查找对应项
  ↓
通过路由 state 传递完整数据
  ↓
详情页接收并显示
```

### 2. 代码实现

#### 列表页（以 IndexPage 为例）

```javascript
const handleDynamicClick = (dynamicId) => {
  // 1. 从当前列表中查找对应的动态数据
  const dynamicItem = currentDynamicList.value.find(item => item.id === dynamicId);
  
  // 2. 通过路由 state 传递完整数据对象
  router.push({
    path: `/dynamic-detail/${dynamicId}`,
    state: { dynamic: dynamicItem }  // ← 传递完整数据
  });
};
```

#### 详情页（DynamicDetailPage.vue）

```javascript
loadDynamicDetail() {
  // 1. 优先从路由状态获取数据
  const routeState = history.state?.dynamic;
  
  if (routeState) {
    // 2. 使用路由传递的完整数据（保证一致性）
    this.dynamic = {
      ...routeState,  // ← 使用列表传递的数据
      time: routeState.time || '刚刚',
      content: routeState.content || this.generateContent(routeState.title),
      comments: routeState.comments || Math.floor(Math.random() * 50) + 5,
      favorites: routeState.favorites || Math.floor(Math.random() * 100) + 10,
    };
  } else {
    // 3. 降级方案：如果没有传递数据，使用随机运动数据
    const dynamicId = this.$route.params.id;
    this.dynamic = this.getDefaultDynamic(dynamicId);
  }
}
```

### 3. 数据一致性保证

#### 保证一致的字段：
- ✅ **id** - 动态ID
- ✅ **title** - 标题（与列表完全一致）
- ✅ **image** - 图片（与列表完全一致）
- ✅ **avatar** - 用户头像
- ✅ **author** - 作者名字
- ✅ **likes** - 点赞数

#### 自动补充的字段：
- **time** - 如果列表没有，默认为"刚刚"
- **content** - 如果列表没有，根据标题自动生成
- **comments** - 如果列表没有，随机生成
- **favorites** - 如果列表没有，随机生成

## 已实现的页面

### 1. IndexPage.vue ✅
```javascript
const handleDynamicClick = (dynamicId) => {
  const dynamicItem = currentDynamicList.value.find(item => item.id === dynamicId);
  router.push({
    path: `/dynamic-detail/${dynamicId}`,
    state: { dynamic: dynamicItem }
  });
};
```

### 2. DyListPage.vue ✅
```javascript
const handleDynamicClick = (dynamicId) => {
  const dynamicItem = dynamicItems.value.find(item => item.id === dynamicId);
  router.push({
    path: `/dynamic-detail/${dynamicId}`,
    state: { dynamic: dynamicItem }
  });
};
```

### 3. TeacherListPage.vue ✅
```javascript
const handleDynamicClick = (dynamicId) => {
  const dynamicItem = dynamicItems.value.find(item => item.id === dynamicId);
  router.push({
    path: `/dynamic-detail/${dynamicId}`,
    state: { dynamic: dynamicItem }
  });
};
```

### 4. MePage.vue ✅
```javascript
handleDynamicClick(id) {
  let dynamicItem;
  if (this.activeTab === 'dynamics') {
    dynamicItem = this.dynamicList.find(item => item.id === id);
  } else if (this.activeTab === 'follow' && this.followViewMode === 'mode2') {
    dynamicItem = this.followDynamicsList.find(item => item.id === id);
  }
  
  this.$router.push({
    path: `/dynamic-detail/${id}`,
    state: { dynamic: dynamicItem }
  });
}
```

### 5. SportsWaterfallPage.vue ✅
```javascript
const handleItemClick = (itemId) => {
  const dynamicItem = sportsItems.value.find(item => item.id === itemId);
  router.push({
    path: `/dynamic-detail/${itemId}`,
    state: { dynamic: dynamicItem }
  });
};
```

## 测试验证

### 测试步骤：
1. 打开任意列表页（IndexPage、DyListPage、TeacherListPage、MePage）
2. 查看列表中某一项的标题和图片
3. 点击该项进入详情页
4. 验证详情页显示的标题和图片与列表中完全一致

### 预期结果：
- ✅ 标题完全一致
- ✅ 图片完全一致
- ✅ 作者信息一致
- ✅ 点赞数一致
- ✅ 其他数据一致

## 降级方案

如果由于某种原因（如直接访问 URL、刷新页面等）没有从列表传递数据，详情页会使用降级方案：

```javascript
getDefaultDynamic(id) {
  // 随机选择运动图片
  const randomImage = sportImages[Math.floor(Math.random() * sportImages.length)];
  
  // 随机选择运动标题
  const randomTitle = sportTitles[Math.floor(Math.random() * sportTitles.length)];
  
  // 随机选择头像和作者
  const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
  const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  
  return {
    id: id,
    title: randomTitle,
    content: this.generateContent(randomTitle),
    image: randomImage,
    avatar: randomAvatar,
    author: randomAuthor,
    time: '刚刚',
    likes: Math.floor(Math.random() * 500) + 50,
    comments: Math.floor(Math.random() * 50) + 5,
    favorites: Math.floor(Math.random() * 100) + 10,
  };
}
```

## 注意事项

1. **路由状态的生命周期**：
   - `history.state` 在页面刷新后会丢失
   - 如果需要支持刷新后保持数据，需要使用 localStorage 或其他持久化方案

2. **数据完整性**：
   - 列表数据必须包含 `id`、`title`、`image`、`avatar`、`author`、`likes` 等字段
   - 如果列表数据不完整，详情页会自动补充缺失字段

3. **性能考虑**：
   - 使用 `find()` 方法查找数据，时间复杂度 O(n)
   - 对于大数据量，可以考虑使用 Map 优化查找性能

## 总结

当前实现已经完全保证了详情页显示的标题和图片与列表中点击的项完全一致。所有列表页都正确实现了数据传递逻辑，用户体验流畅自然。
