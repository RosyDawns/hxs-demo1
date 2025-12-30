# 使用 SessionStorage 传递数据

## 问题

使用 Vue Router 的 `state` 参数传递数据时，`history.state` 在详情页中为空，导致无法获取列表传递的数据。

## 原因

Vue Router 的 `state` 参数在某些情况下不可靠：
- 可能在组件生命周期中丢失
- 浏览器兼容性问题
- Vue Router 版本差异

## 解决方案

改用 `sessionStorage` 来传递数据，这是一个更可靠的方案。

### 优点
- ✅ 可靠性高，不会丢失数据
- ✅ 浏览器原生支持
- ✅ 会话级别存储，关闭标签页自动清除
- ✅ 支持复杂对象（通过 JSON 序列化）

### 缺点
- ⚠️ 需要手动管理存储和清理
- ⚠️ 存储大小有限制（通常 5-10MB）

## 实现方式

### 列表页（发送数据）

```javascript
const handleDynamicClick = (dynamicId) => {
  // 1. 找到对应的动态数据
  const dynamicItem = currentDynamicList.value.find(item => item.id === dynamicId);
  
  if (!dynamicItem) {
    console.error('Dynamic item not found for ID:', dynamicId);
    return;
  }
  
  // 2. 将数据存储到 sessionStorage
  sessionStorage.setItem(`dynamic_${dynamicId}`, JSON.stringify(dynamicItem));
  
  // 3. 跳转到详情页
  router.push(`/dynamic-detail/${dynamicId}`);
};
```

### 详情页（接收数据）

```javascript
created() {
  // 1. 获取路由参数中的 ID
  const dynamicId = this.$route.params.id;
  
  // 2. 从 sessionStorage 读取数据
  const cachedData = sessionStorage.getItem(`dynamic_${dynamicId}`);
  
  if (cachedData) {
    try {
      // 3. 解析 JSON 数据
      this.cachedDynamic = JSON.parse(cachedData);
      console.log('Loaded dynamic data from sessionStorage:', this.cachedDynamic);
      
      // 4. 读取后立即删除，避免占用存储空间
      sessionStorage.removeItem(`dynamic_${dynamicId}`);
    } catch (e) {
      console.error('Failed to parse cached dynamic data:', e);
    }
  } else {
    console.log('No cached data found, using fallback');
  }
}
```

## 数据流程

```
用户点击列表项
  ↓
handleDynamicClick(dynamicId)
  ↓
查找完整数据 (find by id)
  ↓
存储到 sessionStorage
  key: `dynamic_${id}`
  value: JSON.stringify(dynamicItem)
  ↓
router.push(`/dynamic-detail/${id}`)
  ↓
详情页 created 钩子
  ↓
从 sessionStorage 读取数据
  ↓
解析 JSON 并使用
  ↓
删除 sessionStorage 中的数据
```

## 修改的文件

### 1. src/views/IndexPage.vue ✅
```javascript
// 存储数据到 sessionStorage
sessionStorage.setItem(`dynamic_${actualId}`, JSON.stringify(dynamicItem));
router.push(`/dynamic-detail/${actualId}`);
```

### 2. src/views/DyListPage.vue ✅
```javascript
sessionStorage.setItem(`dynamic_${dynamicId}`, JSON.stringify(dynamicItem));
router.push(`/dynamic-detail/${dynamicId}`);
```

### 3. src/views/TeacherListPage.vue ✅
```javascript
sessionStorage.setItem(`dynamic_${dynamicId}`, JSON.stringify(dynamicItem));
router.push(`/dynamic-detail/${dynamicId}`);
```

### 4. src/views/MePage.vue ✅
```javascript
sessionStorage.setItem(`dynamic_${id}`, JSON.stringify(dynamicItem));
this.$router.push(`/dynamic-detail/${id}`);
```

### 5. src/views/SportsWaterfallPage.vue ✅
```javascript
sessionStorage.setItem(`dynamic_${itemId}`, JSON.stringify(dynamicItem));
router.push(`/dynamic-detail/${itemId}`);
```

### 6. src/views/DynamicDetailPage.vue ✅
```javascript
created() {
  const dynamicId = this.$route.params.id;
  const cachedData = sessionStorage.getItem(`dynamic_${dynamicId}`);
  if (cachedData) {
    this.cachedDynamic = JSON.parse(cachedData);
    sessionStorage.removeItem(`dynamic_${dynamicId}`);
  }
}
```

## 数据一致性保证

现在详情页显示的数据与列表完全一致：
- ✅ 标题一致
- ✅ 图片一致
- ✅ 作者信息一致
- ✅ 点赞数一致
- ✅ 所有其他字段一致

## 降级方案

如果 sessionStorage 中没有数据（如直接访问 URL），详情页会使用降级方案：
- 随机选择运动图片
- 随机选择运动标题
- 随机生成其他数据

## 测试验证

### 测试步骤：
1. 打开任意列表页
2. 记住某一项的标题和图片
3. 点击该项
4. 验证详情页显示的标题和图片与列表一致
5. 刷新详情页，会使用降级方案（随机数据）

### 预期结果：
- ✅ 首次进入：显示列表中的数据
- ✅ 数据完全一致
- ✅ 不会"刷新"或"内容变化"
- ✅ 控制台显示：`Loaded dynamic data from sessionStorage`

## 注意事项

1. **数据清理**：读取后立即删除，避免占用存储空间
2. **错误处理**：使用 try-catch 处理 JSON 解析错误
3. **降级方案**：确保没有数据时也能正常显示
4. **存储键名**：使用 `dynamic_${id}` 格式，避免冲突

## 总结

通过使用 sessionStorage 替代 Vue Router 的 state 参数，我们实现了：
- ✅ 可靠的数据传递
- ✅ 详情页与列表数据完全一致
- ✅ 不会出现"刷新"或"内容变化"的问题
- ✅ 所有页面都已更新并通过诊断检查
