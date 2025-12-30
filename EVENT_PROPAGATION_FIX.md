# 事件传递修复

## 问题描述

点击瀑布流的每一项时，跳转地址变成 `/dynamic-detail/[object%20PointerEvent]`，说明传递的是事件对象而不是 ID。

## 问题原因

Vue 的自定义事件在传递时，如果不明确指定参数，可能会传递整个事件对象。

## 解决方案

### 修改 WaterfallLayout.vue

**修改前**:
```vue
<DynamicListItem 
  @click="handleItemClick"
/>
```

**修改后**:
```vue
<DynamicListItem 
  @click="(itemId) => handleItemClick(itemId)"
/>
```

通过使用箭头函数明确指定参数，确保只传递 `itemId` 而不是事件对象。

## 完整的事件传递链

```
用户点击 DynamicListItem
  ↓
DynamicListItem.handleClick(event)
  - event.stopPropagation()
  - this.$emit('click', this.item.id)  ← 传递 ID
  ↓
WaterfallLayout 接收
  - @click="(itemId) => handleItemClick(itemId)"  ← 明确参数
  ↓
WaterfallLayout.handleItemClick(itemId)
  - emit('click', itemId)  ← 传递 ID
  ↓
页面组件接收
  - @click="handleDynamicClick"
  ↓
handleDynamicClick(dynamicId)
  - 查找完整数据
  - 路由跳转
```

## 修改的文件

1. ✅ `src/components/WaterfallLayout.vue` - 明确事件参数传递
2. ✅ `src/components/DynamicListItem.vue` - 确保传递 ID
3. ✅ `src/views/IndexPage.vue` - 移除调试代码

## 测试步骤

1. 打开任意包含瀑布流的页面
2. 点击任意一项
3. 验证跳转地址格式正确：`/dynamic-detail/数字ID`
4. 验证详情页显示的标题和图片与列表一致

## 预期结果

- ✅ 跳转地址正确：`/dynamic-detail/1`、`/dynamic-detail/2` 等
- ✅ 详情页标题与列表一致
- ✅ 详情页图片与列表一致
- ✅ 详情页其他信息与列表一致
