# 唤醒兽平台 (HXS)

> 基于 Vue 3 的移动端生活服务平台

[![Vue 3](https://img.shields.io/badge/Vue-3.5.17-4FC08D?style=flat&logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-06B6D4?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

## 📖 项目简介

唤醒兽平台是一个创新的移动端生活服务应用，连接生活技能教练（"唤醒狮"）和用户，打造技能分享和学习的生态平台。平台提供AI智能推荐、多维度健康管理、社交化学习等特色功能。

## ✨ 最新更新 (2025-10-13)

- ✅ **首页双模式切换** - 列表模式 ⇄ 内容卡片模式
- ✅ **排行榜三模式切换** - 大师卡片 → 列表卡片 → 作品内容
- ✅ **健康打卡功能** - 5个维度的健康数据跟踪
- ✅ **日常页面** - 整合每日推荐和活动信息
- ✅ **组件化重构** - 代码量减少67%，可维护性大幅提升

## 🚀 快速开始

### 环境要求

- Node.js 16+
- pnpm (推荐) / npm / yarn

### 安装依赖

```bash
pnpm install
```

### 开发服务器

```bash
pnpm dev
```

访问 `http://localhost:5173` 查看应用

### 生产构建

```bash
pnpm build
```

### 预览构建结果

```bash
pnpm preview
```

## 🛠️ 技术栈

### 核心框架
- **Vue 3** (v3.5.17) - Composition API + `<script setup>`
- **Vue Router** (v4.5.1) - 单页应用路由管理
- **Vite** (v7.0.4) - 快速构建工具

### 样式方案
- **TailwindCSS** (v4.1.13) - 实用优先的CSS框架
- **PostCSS** (v8.5.6) - CSS后处理
- **Less** (v4.4.1) - CSS预处理器
- **Font Awesome** - 图标库

## 🎯 主要功能

### 1. 首页 ⭐ 双模式切换
- **模式1**：详细列表模式（资质、技能、评分、服务标签）
- **模式2**：简洁卡片模式（快速浏览、点赞功能）
- 重复点击标签即可切换模式

### 2. 排行榜 ⭐ 三模式切换
- **人气大师**：列表布局 + TOP排名
- **冠军大师/非遗大师**：三种显示模式循环切换
  - 模式1：大师卡片（264px头像）
  - 模式2：列表卡片（评分星级）
  - 模式3：作品内容（点赞功能）

### 3. AI助手
- 智能对话与教练推荐
- 多模态交互（文本/语音）
- 对话历史管理

### 4. 健康打卡 🆕
- 心情打卡 😊
- 睡眠打卡 😴
- 运动打卡 🏃
- 饮食打卡 🍎
- 代谢打卡 ⚡
- 打卡日历可视化

### 5. 日常页面 🆕
- 日常推荐聚合
- 教练动态展示
- 活动信息汇总

### 6. 其他功能
- 能量树成长系统
- 每日签到奖励
- 唤醒营训练
- 消息与社交
- 订单与支付

## 📦 项目结构

```
hxs/
├── src/
│   ├── components/        # 22个公共组件
│   │   ├── CoachListCard.vue         # 教练列表卡片
│   │   ├── CoachContentCard.vue      # 教练内容卡片
│   │   ├── ChampionMasterCard.vue    # 冠军/非遗大师卡片
│   │   ├── Mode2Card.vue             # 模式2卡片
│   │   ├── ContentCard.vue           # 作品内容卡片
│   │   ├── RankingCard.vue           # 排行榜卡片
│   │   ├── CheckInCalendar.vue       # 打卡日历
│   │   ├── MoodCheckIn.vue           # 心情打卡
│   │   ├── SleepCheckIn.vue          # 睡眠打卡
│   │   ├── ExerciseCheckIn.vue       # 运动打卡
│   │   ├── DietCheckIn.vue           # 饮食打卡
│   │   ├── MetabolismCheckIn.vue     # 代谢打卡
│   │   ├── DailyHome.vue             # 日常首页
│   │   ├── DailyCoach.vue            # 日常教练
│   │   ├── DailyActivity.vue         # 日常活动
│   │   └── ...
│   ├── views/             # 45个页面组件
│   │   ├── IndexPage.vue             # 首页（双模式）
│   │   ├── RankingPage.vue           # 排行榜（三模式）
│   │   ├── AIAssistantPage.vue       # AI助手
│   │   ├── CheckInPage.vue           # 健康打卡
│   │   ├── DailyPage.vue             # 日常页面
│   │   └── ...
│   ├── router/            # 路由配置
│   ├── assets/            # 静态资源
│   └── App.vue            # 根组件
├── public/                # 公共资源
└── package.json           # 项目配置
```

## 💡 技术亮点

### 1. 多模式切换体验
- **智能切换**：重复点击标签即可切换显示模式
- **自动重置**：切换标签时自动返回默认模式
- **流畅体验**：2-3种模式无缝循环切换

### 2. 组件化架构
- **22个公共组件**：高度模块化设计
- **代码减少67%**：首页模板从150行优化到50行
- **高度复用**：同一组件可在多个页面使用
- **易于维护**：单一职责原则，测试友好

### 3. 移动端优先
- 完整的触摸交互设计
- rem单位响应式适配
- 优化的移动端性能

### 4. 健康管理
- 5个维度的健康数据跟踪
- 可视化日历展示
- 成就徽章系统

## 📚 相关文档

详细的技术文档请查看：

- [项目文档.md](./项目文档.md) - 完整项目文档
- [COMPONENT_REFACTOR_SUMMARY.md](./COMPONENT_REFACTOR_SUMMARY.md) - 组件重构说明
- [THREE_MODE_TOGGLE_UPDATE.md](./THREE_MODE_TOGGLE_UPDATE.md) - 三模式切换说明
- [INDEX_PAGE_MODE_TOGGLE.md](./INDEX_PAGE_MODE_TOGGLE.md) - 首页双模式说明
- [FINAL_RANKING_PAGE_UPDATE.md](./FINAL_RANKING_PAGE_UPDATE.md) - 排行榜优化说明
- [CHAMPION_MASTER_UPDATE.md](./CHAMPION_MASTER_UPDATE.md) - 冠军大师说明
- [HERITAGE_MASTER_UPDATE.md](./HERITAGE_MASTER_UPDATE.md) - 非遗大师说明

## 📊 项目统计

- **页面组件**: 45个
- **公共组件**: 22个
- **路由配置**: 50+个
- **图片资源**: 56个
- **代码优化**: 67% ↓

## 🔮 未来规划

- [ ] 图片懒加载优化
- [ ] PWA支持
- [ ] TypeScript集成
- [ ] 单元测试覆盖
- [ ] 组件文档（Storybook）
- [ ] 视频通话功能
- [ ] 在线支付集成

## 📄 License

MIT

## 👥 开发团队

[团队信息]

---

**版本**: v0.1.0  
**最后更新**: 2025年10月13日
