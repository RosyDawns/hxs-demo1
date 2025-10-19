# 唤醒兽平台 - uniapp 小程序版

## 项目说明

这是从 Web 版迁移到 uniapp 的小程序项目，使用 Vue 3 语法。

## 项目结构

```
uniapp/
├── pages/              # 页面目录
│   ├── index/         # 首页
│   ├── ai-assistant/  # AI助手
│   ├── energy-tree/   # 能量树
│   ├── messages/      # 消息
│   └── me/            # 我的
├── components/        # 组件目录（待补充）
├── static/            # 静态资源
│   ├── images/       # 图片资源
│   └── tabbar/       # 底部导航图标
├── utils/             # 工具函数
├── api/               # 接口封装
├── App.vue            # 应用入口
├── main.js            # 入口文件
├── pages.json         # 页面配置
├── manifest.json      # 应用配置
└── uni.scss           # 全局样式变量
```

## 已完成页面

- ✅ 首页 (index) - 教练列表、搜索、分类筛选
- ✅ AI助手 (ai-assistant) - 智能推荐、语音/文字输入
- ✅ 能量树 (energy-tree) - 能量果实、摇一摇
- ✅ 消息 (messages) - 消息列表、分类功能
- ✅ 我的 (me) - 个人信息、功能入口

## 待补充

### 1. TabBar 图标 ⚠️

需要准备以下图标（推荐尺寸：81x81px）：

```
static/tabbar/
├── home.png          # 首页图标
├── home-active.png   # 首页选中图标
├── ai.png            # AI管家图标
├── ai-active.png     # AI管家选中图标
├── tree.png          # 能量树图标
├── tree-active.png   # 能量树选中图标
├── messages.png      # 消息图标
├── messages-active.png # 消息选中图标
├── me.png            # 我的图标
└── me-active.png     # 我的选中图标
```

添加图标后，在 `pages.json` 的 tabBar 配置中添加 `iconPath` 和 `selectedIconPath`：

```json
{
  "pagePath": "pages/index/index",
  "iconPath": "static/tabbar/home.png",
  "selectedIconPath": "static/tabbar/home-active.png",
  "text": "首页"
}
```

### 2. 页面图片资源 ✅

已从原项目复制图片到 `static/images/` 目录，包括：
- ✅ logo.png - AI助手 logo
- ✅ tree.png - 能量树背景
- ✅ user_*.png - 用户图标
- ✅ img-*.jpg - 各类图片资源（50+张）
- ✅ 所有页面图片路径已修正

### 3. 其他页面

根据原项目需要继续迁移的页面（共40+个）：
- 教练列表页
- 教练详情页
- 搜索页面
- 唤醒营页面
- 聊天页面
- 等等...

## 运行项目

### 微信小程序

1. 安装 HBuilderX
2. 导入本项目
3. 运行 -> 运行到小程序模拟器 -> 微信开发者工具

### 或使用 CLI

```bash
# 安装依赖（如果使用 CLI 模式）
npm install

# 运行到微信小程序
npm run dev:mp-weixin

# 运行到支付宝小程序
npm run dev:mp-alipay
```

## 关键迁移说明

### 1. 样式适配

- 使用 `rpx` 单位替代 Web 的 `px`/`rem`
- 移除 TailwindCSS，改用 SCSS
- 使用 uniapp 内置组件样式

### 2. API 适配

- `this.$router.push()` → `uni.navigateTo()`
- `this.$router.push('/tab')` → `uni.switchTab()`
- `localStorage` → `uni.getStorageSync()` / `uni.setStorageSync()`
- `alert()` → `uni.showModal()`
- `console.log()` → 保持不变

### 3. 组件适配

- `<div>` → `<view>`
- `<img>` → `<image>`
- `<span>` → `<text>`
- `@click` → `@tap`
- `v-show` → 保持不变
- `v-if` → 保持不变

### 4. 图标处理

原项目使用 Font Awesome 图标，小程序中改用：
- Emoji 表情符号
- iconfont 字体图标（需要配置）
- 图片图标

## 注意事项

1. **小程序包大小限制**：主包不能超过 2MB，总包不能超过 20MB
2. **分包加载**：建议按功能模块拆分成多个分包
3. **图片优化**：使用压缩后的图片，推荐使用 webp 格式
4. **网络请求**：需要在微信小程序后台配置合法域名
5. **用户授权**：获取用户信息、位置等需要用户授权

## 下一步开发建议

1. 补充 tabBar 图标
2. 补充页面图片资源
3. 创建公共组件（教练卡片、底部导航等）
4. 配置 API 接口
5. 添加分包配置
6. 测试各页面功能
7. 优化性能和加载速度

## 技术栈

- Vue 3 (Composition API)
- uniapp
- SCSS
- ES6+

## 开发规范

参考原项目的 `docs/warp_rules.md`:
- 使用中文注释
- 保持代码简洁（KISS 原则）
- 单文件不超过 500 行
- 及时重构冗余代码
