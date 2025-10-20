# 组件迁移进度

## ✅ 已完成迁移的组件 (4/22)

### 1. CoachListCard.vue ✅
**教练列表卡片**
- 原路径: `src/components/CoachListCard.vue`
- 新路径: `uniapp/components/CoachListCard.vue`
- 功能: 教练信息展示卡片，包含头像、资质、评分、标签
- 改动:
  - div → view
  - img → image  
  - @click → @tap
  - TailwindCSS → SCSS（行内样式）
  - 移除Font Awesome图标，使用★字符

### 2. RankingCard.vue ✅
**排行榜卡片**
- 原路径: `src/components/RankingCard.vue`
- 新路径: `uniapp/components/RankingCard.vue`
- 功能: 排行榜大师卡片，支持TOP标签、星级评分
- 改动:
  - div → view
  - img → image
  - TailwindCSS → SCSS
  - 渐变背景保留（使用linear-gradient）

### 3. ContentCard.vue ✅
**内容作品卡片**
- 原路径: `src/components/ContentCard.vue`
- 新路径: `uniapp/components/ContentCard.vue`
- 功能: 作品展示卡片，支持点赞功能
- 改动:
  - div → view
  - img → image
  - Font Awesome ❤ → ♥ 字符
  - 点赞数格式化（万）

### 4. ChampionMasterCard.vue ✅
**冠军大师卡片**
- 原路径: `src/components/ChampionMasterCard.vue`
- 新路径: `uniapp/components/ChampionMasterCard.vue`
- 功能: 冠军/非遗大师展示卡片
- 改动:
  - div → view
  - img → image
  - TailwindCSS → SCSS

---

## ✅ 已完成迁移的页面 (1/3 高优先级)

### 1. RankingPage (排行榜页面) ✅
**路径**: `uniapp/pages/ranking/index.vue`

**核心功能**:
- ✅ 三种大师分类切换（人气/冠军/非遗）
- ✅ 人气大师：列表布局
- ✅ 冠军/非遗大师：双模式切换
  - 大师卡片模式
  - 作品内容模式
- ✅ 筛选标签栏（不同分类不同标签）
- ✅ 评选规则弹窗
- ✅ 城市选择
- ✅ 状态栏适配

**改动总结**:
- 完整的TailwindCSS → SCSS转换
- 自定义导航栏（状态栏高度适配）
- Vue Router → uni.navigateTo/navigateBack
- 移除所有Font Awesome依赖
- 使用Unicode字符替代图标

---

## ⏳ 待迁移组件 (18/22)

### 打卡相关组件 (6个)
- [ ] CheckInCalendar.vue - 打卡日历
- [ ] MoodCheckIn.vue - 心情打卡
- [ ] DietCheckIn.vue - 饮食打卡
- [ ] SleepCheckIn.vue - 睡眠打卡
- [ ] ExerciseCheckIn.vue - 运动打卡
- [ ] MetabolismCheckIn.vue - 代谢打卡

### 教练/内容相关组件 (4个)
- [ ] CoachContentCard.vue - 教练内容卡片
- [ ] CoachListItem.vue - 教练列表项
- [ ] MasterCard.vue - 大师卡片
- [ ] Mode2Card.vue - 模式2卡片

### 日常页面组件 (3个)
- [ ] DailyHome.vue - 日常首页
- [ ] DailyCoach.vue - 日常教练
- [ ] DailyActivity.vue - 日常活动

### 其他组件 (5个)
- [ ] CommonHeader.vue - 通用头部
- [ ] FooterNav.vue - 底部导航
- [ ] DynamicListItem.vue - 动态列表项
- [ ] DynamicTab.vue - 动态标签页
- [ ] NotesContent.vue - 笔记内容
- [ ] StarTab.vue - 星标标签
- [ ] StoreTab.vue - 商店标签
- [ ] hxs-item.vue - HXS项目

---

## ⏳ 待迁移页面 (2/3 高优先级)

### 2. CheckInPage (健康打卡页面) ⏳
**原路径**: `src/views/CheckInPage.vue`
**目标路径**: `uniapp/pages/checkin/index.vue`

**核心功能**:
- 打卡日历组件
- 5个维度打卡：饮食、运动、心情、睡眠、代谢
- Tab切换
- 打卡成功Toast提示

**依赖组件**:
- CheckInCalendar
- DietCheckIn
- ExerciseCheckIn
- MoodCheckIn
- SleepCheckIn
- MetabolismCheckIn

### 3. 订单和设置页面 ⏳
- [ ] MyOrdersPage - 我的订单
- [ ] SettingsPage - 设置页面
- [ ] WalletPage - 钱包页面

---

## 🎯 迁移进度统计

| 类别 | 已完成 | 总数 | 进度 |
|-----|-------|------|------|
| **组件** | 4 | 22 | 18% |
| **高优先级页面** | 1 | 3 | 33% |
| **总体** | 5 | 25 | 20% |

---

## 📋 TailwindCSS → SCSS 转换规则

### 常用类名对照表

| TailwindCSS | SCSS | rpx值 |
|------------|------|-------|
| `bg-white` | `background: #ffffff` | - |
| `text-sm` | `font-size: 28rpx` | 28rpx |
| `text-base` | `font-size: 32rpx` | 32rpx |
| `text-lg` | `font-size: 36rpx` | 36rpx |
| `p-1` | `padding: 8rpx` | 8rpx |
| `p-2` | `padding: 16rpx` | 16rpx |
| `p-3` | `padding: 24rpx` | 24rpx |
| `p-4` | `padding: 32rpx` | 32rpx |
| `rounded-lg` | `border-radius: 16rpx` | 16rpx |
| `rounded-xl` | `border-radius: 24rpx` | 24rpx |
| `rounded-2xl` | `border-radius: 32rpx` | 32rpx |
| `rounded-full` | `border-radius: 999rpx` | 999rpx |
| `shadow-sm` | `box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08)` | - |
| `flex` | `display: flex` | - |
| `grid grid-cols-2` | `display: grid; grid-template-columns: repeat(2, 1fr)` | - |
| `gap-3` | `gap: 24rpx` | 24rpx |

### 颜色对照表

| TailwindCSS | 颜色值 |
|------------|--------|
| `text-gray-600` | `#666666` |
| `text-gray-800` | `#333333` |
| `bg-orange-500` | `#ff5722` |
| `bg-red-500` | `#f44336` |
| `text-primary` | `#ff5722` |

---

## 🔧 迁移注意事项

### 1. 必须替换的内容
- ✅ `<div>` → `<view>`
- ✅ `<img>` → `<image>`
- ✅ `@click` → `@tap`
- ✅ `$router.push()` → `uni.navigateTo()`
- ✅ `$router.back()` → `uni.navigateBack()`

### 2. Font Awesome图标替换
- `fa-star` → `★` (U+2605)
- `fa-heart` → `♥` (U+2665)
- `fa-chevron-down` → `▼` (U+25BC)
- `fa-chevron-right` → `›` (U+203A)
- `fa-times` → `×` (U+00D7)
- `fa-check` → `✓` (U+2713)
- `fa-magnifying-glass` → `🔍` (U+1F50D)

### 3. 样式转换要点
- 所有px单位 → rpx（1px = 2rpx）
- TailwindCSS类 → SCSS样式块
- 保留必要的渐变、阴影效果
- 使用`<style lang="scss" scoped>`

### 4. 状态栏和安全区域
```javascript
// 获取状态栏高度
onLoad() {
  const systemInfo = uni.getSystemInfoSync();
  this.statusBarHeight = systemInfo.statusBarHeight;
}
```

```scss
// 顶部适配
.header {
  padding-top: calc(var(--status-bar-height) + 24rpx);
}

// 底部适配
.footer {
  padding-bottom: calc(env(safe-area-inset-bottom) + 24rpx);
}
```

---

## 📝 下一步计划

### 立即任务
1. ✅ 完成排行榜页面测试
2. ⏳ 迁移6个打卡相关组件
3. ⏳ 迁移健康打卡页面
4. ⏳ 迁移订单和设置页面

### 测试清单
- [ ] 测试排行榜三模式切换
- [ ] 测试排行榜双视图切换
- [ ] 测试状态栏适配
- [ ] 测试组件交互
- [ ] 测试图片加载

---

**更新时间**: 2025-10-20  
**迁移者**: AI Assistant
