# TabBar 优化说明

## ✅ 已完成的优化

### 1. 隐藏原生导航栏
为首页、AI助手、能量树三个页面添加自定义导航栏配置：

```json
// pages.json
{
  "path": "pages/index/index",
  "style": {
    "navigationStyle": "custom"  // 隐藏原生导航栏
  }
}
```

### 2. 适配状态栏高度
所有 TabBar 页面的顶部元素都适配了状态栏高度：

```scss
.header {
  // 原来: padding: 30rpx;
  // 现在: 
  padding: calc(var(--status-bar-height) + 30rpx) 30rpx 30rpx;
}
```

**适配说明**：
- `var(--status-bar-height)` 获取设备状态栏高度（刘海屏适配）
- 不同设备状态栏高度不同，使用 CSS 变量自动适配

### 3. 统一底部间距
所有 TabBar 页面统一设置底部间距：

```scss
.page {
  padding-bottom: 120rpx;  // 为 TabBar 预留空间
}
```

**底部间距对照**：
- 首页: 120rpx
- AI助手: 220rpx（因为有底部输入框）
- 能量树: 120rpx
- 消息: 120rpx
- 我的: 120rpx

### 4. 修正固定元素位置
修正底部固定元素（能量树按钮、AI输入框）的位置：

```scss
.bottom-element {
  position: fixed;
  // 原来: bottom: 160rpx;
  // 现在:
  bottom: calc(100rpx + env(safe-area-inset-bottom));
}
```

**说明**：
- `env(safe-area-inset-bottom)` 适配 iPhone X 等设备的底部安全区域
- 确保固定元素不被 TabBar 遮挡

## 📱 各页面具体优化

### 首页 (index)
- ✅ 自定义导航栏（透明渐变效果）
- ✅ 顶部 header 适配状态栏
- ✅ Banner 位置调整
- ✅ 底部预留 120rpx

**关键样式**：
```scss
.header {
  padding: calc(var(--status-bar-height) + 20rpx) 30rpx 20rpx;
}
.banner {
  margin-top: calc(var(--status-bar-height) + 140rpx);
}
```

### AI助手 (ai-assistant)
- ✅ 自定义导航栏
- ✅ 顶部按钮适配状态栏
- ✅ 底部输入框适配安全区域
- ✅ 底部预留 220rpx（输入框占用）

**关键样式**：
```scss
.input-section {
  bottom: calc(100rpx + env(safe-area-inset-bottom));
}
```

### 能量树 (energy-tree)
- ✅ 自定义导航栏（全屏背景）
- ✅ 用户信息栏适配状态栏
- ✅ 底部按钮组适配安全区域
- ✅ 底部预留 120rpx

**关键样式**：
```scss
.user-info {
  top: calc(var(--status-bar-height) + 20rpx);
}
.bottom-btns {
  bottom: calc(100rpx + env(safe-area-inset-bottom));
}
```

### 消息 (messages)
- ✅ 自定义导航栏
- ✅ 顶部 header 适配状态栏
- ✅ 功能分类图标
- ✅ 消息列表显示
- ✅ 底部预留 120rpx

### 我的 (me)
- ✅ 原生导航栏（保留）
- ✅ 顶部 header 适配状态栏
- ✅ 底部预留 120rpx

## 🎨 TabBar 配置

```json
"tabBar": {
  "color": "#999999",              // 未选中文字颜色
  "selectedColor": "#FF6B6B",      // 选中文字颜色
  "backgroundColor": "#FFFFFF",    // 背景色
  "borderStyle": "black",          // 边框样式
  "list": [
    {
      "pagePath": "pages/index/index",
      "text": "首页"
    },
    {
      "pagePath": "pages/ai-assistant/index",
      "text": "AI管家"
    },
    {
      "pagePath": "pages/energy-tree/index",
      "text": "能量树"
    },
    {
      "pagePath": "pages/messages/index",
      "text": "消息"
    },
    {
      "pagePath": "pages/me/index",
      "text": "我的"
    }
  ]
}
```

**注意**：暂未添加图标，只显示文字。

## 📐 尺寸规范

### 状态栏高度
- iPhone X 及以上: 44px
- iPhone 8 及以下: 20px
- Android: 24px - 48px（根据设备）

### TabBar 高度
- 小程序标准: 50px
- 加上安全区域: 50px + env(safe-area-inset-bottom)

### 安全区域
- iPhone X 系列底部: 34px
- 其他设备: 0px

## 🔧 CSS 变量说明

### --status-bar-height
- **说明**: 设备状态栏高度
- **用法**: `calc(var(--status-bar-height) + 额外高度)`
- **示例**: `padding-top: calc(var(--status-bar-height) + 20rpx)`

### env(safe-area-inset-bottom)
- **说明**: 底部安全区域高度
- **用法**: `calc(固定高度 + env(safe-area-inset-bottom))`
- **示例**: `bottom: calc(100rpx + env(safe-area-inset-bottom))`

### env(safe-area-inset-top)
- **说明**: 顶部安全区域高度
- **用法**: 同上
- **注意**: 通常与 `--status-bar-height` 配合使用

## ✅ 测试要点

### 1. 不同设备测试
- [ ] iPhone 8/SE (无刘海)
- [ ] iPhone X/11/12 (刘海屏)
- [ ] iPhone 14 Pro (灵动岛)
- [ ] Android 各尺寸

### 2. 功能测试
- [x] TabBar 切换正常
- [x] 顶部不被状态栏遮挡
- [x] 底部不被 TabBar 遮挡
- [x] 固定元素位置正确
- [x] 滚动流畅无抖动

### 3. 样式测试
- [x] 状态栏颜色适配
- [x] TabBar 颜色正确
- [x] 页面间距统一
- [x] 安全区域适配

## 🚀 下一步优化

1. **添加 TabBar 图标** (81x81px)
   - 首页图标
   - AI管家图标
   - 能量树图标
   - 消息图标
   - 我的图标

2. **自定义 TabBar**（可选）
   - 更灵活的样式
   - 动画效果
   - 中间凸起按钮

3. **性能优化**
   - 页面切换动画
   - 预加载优化

## 📝 注意事项

1. **不同平台差异**
   - iOS: 使用 `env(safe-area-inset-*)`
   - Android: 部分设备不支持
   - H5: 需要额外适配

2. **调试技巧**
   - 使用真机调试查看状态栏效果
   - 模拟器可能不准确
   - 多测试不同设备

3. **常见问题**
   - 状态栏被遮挡 → 检查 `--status-bar-height`
   - TabBar 遮挡内容 → 检查 `padding-bottom`
   - 底部按钮位置不对 → 检查 `env(safe-area-inset-bottom)`
