# 非遗大师页面更新说明

## 更新时间
2025-10-13

## 更新内容

### 1. 新增非遗大师数据
为非遗大师分类添加了专门的数据列表 `heritageMastersList`，包含：
- 非遗剪纸张颖莹
- 非遗年画霍庆有  
- 京剧大师王佩瑜
- 景泰蓝大师
- 苏绣传承人
- 紫砂壶大师

每个大师数据包含：
- `id`: 唯一标识
- `name`: 大师姓名
- `title`: 大师称号/头衔
- `specialty`: 擅长领域
- `avatar`: 头像图片URL

### 2. 优化分类数据加载逻辑
更新了 `championMasters` 计算属性，根据选中的分类动态返回对应数据：
- `champion` (冠军大师) → 返回 `championMastersList`
- `heritage` (非遗大师) → 返回 `heritageMastersList`

```javascript
championMasters() {
  if (this.selectedCategory === "champion") {
    return this.championMastersList;
  } else if (this.selectedCategory === "heritage") {
    return this.heritageMastersList;
  }
  return this.championMastersList;
}
```

### 3. 添加搜索功能入口
在筛选标签栏右侧添加了搜索图标按钮：
- 图标：放大镜 (fa-magnifying-glass)
- 位置：筛选标签栏最右侧，固定不滚动
- 交互：点击跳转到搜索页面 `/search`
- 样式：灰色图标，悬停时加深颜色

### 4. 页面布局结构
```
非遗大师页面
├── 顶部导航栏
├── Banner区域（城市大师频道）
├── 大师分类卡片（选中"非遗大师"）
├── 当前分类信息
│   ├── 标题：非遗大师 + 更新时间
│   ├── 评选规则按钮
│   └── 二级分类标签
├── 筛选标签栏
│   ├── 关注 | 推荐 | 附近 | 筛选 | 直播
│   └── 搜索图标 (🔍)
└── 内容区域（2列网格布局）
    └── ChampionMasterCard × N
```

### 5. 页面特性

#### 数据展示
- **2列网格布局**：使用 `grid-cols-2 gap-3` 实现响应式卡片布局
- **大师卡片**：每张卡片包含大幅头像、姓名、称号、擅长领域
- **去打Call按钮**：每个卡片底部的渐变色按钮

#### 交互功能
- ✅ **分类切换**：点击"非遗大师"卡片显示非遗大师数据
- ✅ **筛选标签**：关注、推荐、附近、筛选、直播可点击切换
- ✅ **搜索入口**：点击搜索图标跳转到搜索页面
- ✅ **打Call功能**：点击"去打Call"按钮为大师打Call
- ✅ **加载更多**：底部加载更多按钮

#### 样式特点
- **卡片阴影**：轻微阴影效果提升层次感
- **圆角设计**：统一使用 `rounded-2xl` 圆角风格
- **渐变按钮**：橙红色渐变 (#f97316 → #f53e2d)
- **图标样式**：Font Awesome 图标库
- **响应式**：自适应不同屏幕尺寸

### 6. 与其他分类的区别

| 特性 | 人气大师 | 冠军大师 | 非遗大师 |
|------|---------|---------|---------|
| 布局方式 | 列表布局 | 网格布局 | 网格布局 |
| 卡片组件 | RankingCard | ChampionMasterCard | ChampionMasterCard |
| 排名标签 | ✓ (TOP 01-03) | ✗ | ✗ |
| 筛选标签 | 行业分类 | 关注/推荐 | 关注/推荐 |
| 数据来源 | rankedMastersList | championMastersList | heritageMastersList |

### 7. 代码位置
- **页面文件**: `src/views/RankingPage.vue`
- **卡片组件**: `src/components/ChampionMasterCard.vue`
- **数据定义**: RankingPage.vue 中的 `heritageMastersList`

### 8. 测试要点
1. ✅ 点击"非遗大师"卡片，确认显示非遗大师数据
2. ✅ 验证2列网格布局正确显示
3. ✅ 测试筛选标签切换功能
4. ✅ 点击搜索图标，确认跳转到搜索页面
5. ✅ 点击"去打Call"按钮，确认交互效果
6. ✅ 滚动查看所有非遗大师卡片
7. ✅ 测试"加载更多"功能

## 下一步优化建议
1. 为非遗大师添加更多真实数据和图片
2. 实现筛选标签的实际过滤功能
3. 添加大师详情页跳转
4. 优化图片加载性能（懒加载）
5. 添加收藏和分享功能
6. 实现"打Call"的动画效果和计数功能
