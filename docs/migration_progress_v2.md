# Vue3 H5 → Uniapp 迁移进度总结 (v2)

更新时间：2025-10-20

## 一、迁移概览

### 1.1 迁移统计

| 类别 | 总数 | 已迁移 | 进度 |
|------|------|--------|------|
| 核心页面 | ~53 | 15+ | ~28% |
| 组件 | ~22 | 14 | ~64% |
| 总体 | ~75 | 29 | ~39% |

### 1.2 本次新增迁移（第二批）

#### 新增页面（7个）
1. **Daily 日常页面** (`pages/daily/index.vue`) - ✅ 完成
   - 含三子页面标签切换（主页/动态/唤醒师）
   
2. **CampRegister 免费体验** (`pages/camp-register/index.vue`) - ✅ 完成
   - 课程列表、筛选标签、抽奖功能

3. **WeightManagementCamp 体重管理营** (`pages/weight-management-camp/index.vue`) - ✅ 完成
   - 图片展示、底部购买栏

4. **Wallet 钱包** (`pages/wallet/index.vue`) - ✅ 完成
   - 余额卡片、交易记录、功能入口

5. **Call 打Call** (`pages/call/index.vue`) - ✅ 完成（简化版）
   - 能量树展示、果实交互、消息输入

6. **ProductDetail 商品详情** (`pages/product-detail/index.vue`) - ✅ 完成（简化版）
   - 商品信息、评价、购买

7. **CampDetail 课程详情** (`pages/camp-detail/index.vue`) - ✅ 占位页

#### 新增组件（3个）
1. **DailyHome** (`components/daily/DailyHome.vue`) - ✅ 完成
   - 目标体重、减脂宣言、唤醒任务

2. **DailyActivity** (`components/daily/DailyActivity.vue`) - ✅ 完成
   - 发布动态入口、动态网格展示

3. **DailyCoach** (`components/daily/DailyCoach.vue`) - ✅ 完成
   - 唤醒师筛选、列表展示

#### 新增占位页（2个）
- `pages/publish-activity/index.vue` - 发布动态
- `pages/dynamic-detail/index.vue` - 动态详情

---

## 二、已迁移内容汇总

### 2.1 完整功能页面（15个）

#### 核心功能
1. ✅ **Index 首页** (`pages/index/index.vue`)
   - 顶部导航、Banner、核心功能、教练列表、城市选择

2. ✅ **Ranking 榜单** (`pages/ranking/index.vue`)
   - 三标签切换（排行榜/赛事/积分商城）

3. ✅ **CheckIn 健康打卡** (`pages/checkin/index.vue`)
   - 5类打卡（饮食/心情/运动/睡眠/代谢）

4. ✅ **Daily 日常** (`pages/daily/index.vue`)
   - 主页/动态/唤醒师三标签

5. ✅ **MyOrders 我的订单** (`pages/my-orders/index.vue`)
   - 订单状态切换、列表展示

6. ✅ **Settings 设置** (`pages/settings/index.vue`)
   - 设置项列表、版本信息

#### 营销相关
7. ✅ **CampRegister 免费体验** (`pages/camp-register/index.vue`)
8. ✅ **WeightManagementCamp 体重管理营** (`pages/weight-management-camp/index.vue`)
9. ✅ **ProductDetail 商品详情** (`pages/product-detail/index.vue`)
10. ✅ **CampDetail 课程详情** (`pages/camp-detail/index.vue`) - 占位

#### 用户相关
11. ✅ **Me 我的** (`pages/me/index.vue`)
12. ✅ **Wallet 钱包** (`pages/wallet/index.vue`)

#### 其他
13. ✅ **Call 打Call** (`pages/call/index.vue`) - 能量树交互
14. ✅ **AIAssistant AI管家** (`pages/ai-assistant/index.vue`)
15. ✅ **EnergyTree 能量树** (`pages/energy-tree/index.vue`)

### 2.2 已迁移组件（14个）

#### 核心教练组件
1. ✅ `CoachContentCard` - 教练内容卡片
2. ✅ `CoachListCard` - 教练列表卡片
3. ✅ `Mode2Card` - 模式2卡片

#### 打卡组件
4. ✅ `SleepCheckIn` - 睡眠打卡
5. ✅ `ExerciseCheckIn` - 运动打卡
6. ✅ `MetabolismCheckIn` - 代谢打卡
7. ✅ `MoodCheckIn` - 心情打卡
8. ✅ `DietCheckIn` - 饮食打卡

#### Daily 日常组件
9. ✅ `DailyHome` - 日常主页
10. ✅ `DailyActivity` - 日常动态
11. ✅ `DailyCoach` - 日常唤醒师

#### 其他
12. ✅ `RankingLeaderboard` - 排行榜
13. ✅ `RankingEvents` - 赛事
14. ✅ `RankingStore` - 积分商城

---

## 三、配置文件更新

### 3.1 pages.json
- ✅ 修复重复的 ranking 页面配置
- ✅ 修复 checkin 页面配置语法错误
- ✅ 新增 daily 页面配置
- ✅ 新增 camp-register、weight-management-camp、wallet 等页面配置
- ✅ 维护 TabBar 配置（首页/AI管家/能量树/消息/我的）

### 3.2 导航配置
- ✅ TabBar: 5个标签页已配置
- ✅ 页面间导航：uni.navigateTo / uni.switchTab / uni.navigateBack 全部适配
- ✅ 路由参数传递：通过 URL query 传递

---

## 四、迁移规则（持续执行）

### 4.1 HTML → 组件映射
```
div / section / article → view
img                    → image
a / router-link        → navigator / view + @tap
input / textarea       → input / textarea
button                 → button / view + @tap
```

### 4.2 事件映射
```
@click       → @tap
@touchstart  → @touchstart
@touchmove   → @touchmove
v-model      → v-model (保持)
```

### 4.3 样式转换
- **TailwindCSS → SCSS + rpx 单位**
- **Font Awesome 图标 → Unicode 字符** (如 ☎ 📍 🎁 ❤ ⭐ 等)
- **渐变、阴影保持** CSS 语法

### 4.4 路由与导航
```javascript
// Vue Router → uni API
this.$router.push('/path')      → uni.navigateTo({ url: '/pages/path/index' })
this.$router.back()             → uni.navigateBack()
this.$router.replace('/path')   → uni.redirectTo({ url: '/pages/path/index' })
// TabBar 页面
this.$router.push('/tabbar')    → uni.switchTab({ url: '/pages/tabbar/index' })
```

### 4.5 资源路径
```
@images/xxx.jpg  → /static/images/xxx.jpg
@/assets/        → /static/
相对路径         → 绝对路径 /static/
```

---

## 五、待迁移内容（优先级排序）

### 5.1 高优先级页面（下一批）
1. ⏳ **Messages 消息** - TabBar 页面之一
2. ⏳ **TeacherList 唤醒狮列表** - 从首页多处入口
3. ⏳ **Search 搜索** - 从首页搜索框
4. ⏳ **Ouyang 唤醒师详情** - 教练列表点击进入
5. ⏳ **Camp 唤醒营** - 营销相关

### 5.2 中优先级页面
6. ⏳ **Chat 聊天**
7. ⏳ **PublishActivity 发布动态** - 现为占位页
8. ⏳ **DynamicDetail 动态详情** - 现为占位页
9. ⏳ **Favorites 收藏**
10. ⏳ **Address 地址管理**
11. ⏳ **Coupons 优惠券**
12. ⏳ **MyReviews 我的评价**
13. ⏳ **PendingReview 待评价**

### 5.3 低优先级页面
14. ⏳ **About 关于我们**
15. ⏳ **Help 帮助中心**
16. ⏳ **Feedback 意见反馈**
17. ⏳ **Profile 个人资料**
18. ⏳ **AccountSecurity 账号安全**
19. ⏳ **Privacy 隐私设置**
20. ⏳ 其他辅助页面...

### 5.4 待迁移组件
1. ⏳ `FooterNav` - 底部导航（可能被 TabBar 替代）
2. ⏳ `DynamicTab` - 动态标签
3. ⏳ `StoreTab` - 橱窗标签
4. ⏳ `StarTab` - 星推官标签
5. ⏳ 其他辅助组件...

---

## 六、技术要点总结

### 6.1 响应式单位
- 使用 `rpx` 作为主要单位（1rpx = 屏幕宽度 / 750）
- 字体：24rpx - 32rpx 常规，40rpx+ 标题
- 间距：20rpx、30rpx、40rpx 为常用档位

### 6.2 布局方式
- Flexbox：主流布局（display: flex）
- Grid：复杂网格（如教练列表、动态网格）
- Position：fixed/absolute 用于悬浮导航

### 6.3 生命周期适配
```javascript
// Vue3 → Uniapp
mounted()          → onMounted() / onReady()
created()          → onLoad()
beforeUnmount()    → onUnload()
// 新增
onPageScroll()     → 页面滚动监听
onPullDownRefresh() → 下拉刷新
```

### 6.4 API 替换
```javascript
// DOM 操作 → uni API
document.querySelector → uni.createSelectorQuery()
window.scrollTo       → uni.pageScrollTo()
alert()               → uni.showToast() / uni.showModal()
localStorage          → uni.setStorageSync() / uni.getStorageSync()
```

---

## 七、下一步计划

1. **继续迁移高优先级页面**：Messages、TeacherList、Search、Ouyang 等
2. **完善占位页功能**：PublishActivity、DynamicDetail 补充完整实现
3. **补充必要组件**：FooterNav 或确认使用 TabBar、DynamicTab 等
4. **功能测试**：各页面导航跳转、数据交互、样式适配
5. **优化性能**：图片懒加载、列表虚拟滚动等

---

## 八、已知问题与注意事项

### 8.1 待解决
- [ ] 部分复杂动画可能需要简化或使用 Lottie
- [ ] 视频播放需适配小程序 video 组件
- [ ] 地图组件需使用 uni 的 map 组件
- [ ] 第三方库兼容性（如支付、分享）

### 8.2 已解决
- [x] TailwindCSS → SCSS 转换规则
- [x] Font Awesome → Unicode 替换
- [x] Vue Router → uni.navigateTo
- [x] @images 别名 → /static/images 绝对路径
- [x] pages.json 配置重复和语法错误

---

## 九、迁移质量检查清单

每个页面迁移后需检查：
- [ ] 页面可正常访问（pages.json 已配置）
- [ ] 样式正常（rpx 单位、响应式布局）
- [ ] 图标显示（Unicode 或图片）
- [ ] 导航正常（uni API 替换完成）
- [ ] 交互功能（事件绑定正确）
- [ ] 代码简洁（<500行/文件）

---

**项目进度：约 39%**  
**下一里程碑：高优先级页面迁移完成（预计进度 60%）**
