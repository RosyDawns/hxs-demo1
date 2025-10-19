# 样式使用说明

## 关于 Tailwind CSS

**小程序不支持 Tailwind CSS**，本项目已将所有样式从 Tailwind 迁移到 SCSS。

## 全局样式变量

所有页面都引入了 `uni.scss`，可以直接使用以下变量：

### 颜色变量
```scss
$uni-color-primary: #FF6B6B;     // 主题色
$uni-color-success: #4CD964;     // 成功色
$uni-color-warning: #FFC107;     // 警告色
$uni-color-error: #F44336;       // 错误色

$uni-text-color: #333333;        // 主文字色
$uni-text-color-grey: #999999;   // 灰色文字
$uni-text-color-light: #CCCCCC;  // 浅色文字

$uni-bg-color: #FFFFFF;          // 背景色
$uni-bg-color-grey: #F8F8F8;     // 灰色背景
$uni-bg-color-hover: #F5F5F5;    // hover背景
```

### 字体大小
```scss
$uni-font-size-xs: 20rpx;
$uni-font-size-sm: 24rpx;
$uni-font-size-base: 28rpx;
$uni-font-size-lg: 32rpx;
$uni-font-size-xl: 36rpx;
```

### 间距
```scss
$uni-spacing-xs: 10rpx;
$uni-spacing-sm: 20rpx;
$uni-spacing-base: 30rpx;
$uni-spacing-lg: 40rpx;
$uni-spacing-xl: 50rpx;
```

### 圆角
```scss
$uni-border-radius-sm: 4rpx;
$uni-border-radius-base: 8rpx;
$uni-border-radius-lg: 16rpx;
$uni-border-radius-circle: 50%;
```

### 阴影
```scss
$uni-shadow-sm: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
$uni-shadow-base: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
$uni-shadow-lg: 0 8rpx 24rpx rgba(0, 0, 0, 0.15);
```

## 使用示例

```vue
<style lang="scss" scoped>
@import "@/uni.scss";

.my-button {
  background-color: $uni-color-primary;
  color: white;
  padding: $uni-spacing-sm $uni-spacing-lg;
  border-radius: $uni-border-radius-base;
  font-size: $uni-font-size-base;
  box-shadow: $uni-shadow-sm;
}
</style>
```

## 路径说明

如果 `@/` 路径不生效，可以使用：

1. **相对路径**（推荐）：
```scss
@import "../../uni.scss";  // 根据页面深度调整
```

2. **绝对路径**：
```scss
@import "/uni.scss";
```

3. **别名路径**（需要配置）：
```scss
@import "@/uni.scss";
```

## 注意事项

1. **单位使用 rpx**：小程序中使用 `rpx` 而非 `px`，会自动适配不同屏幕
2. **避免深层嵌套**：SCSS 嵌套不超过 3 层
3. **使用变量**：统一使用 `uni.scss` 中的变量，便于主题切换
4. **scoped 样式**：页面样式使用 `scoped` 避免污染

## Tailwind 迁移对照表

| Tailwind CSS | SCSS 替代 |
|-------------|----------|
| `flex` | `display: flex;` |
| `grid` | `display: grid;` |
| `p-4` | `padding: $uni-spacing-lg;` |
| `m-4` | `margin: $uni-spacing-lg;` |
| `text-primary` | `color: $uni-color-primary;` |
| `bg-white` | `background-color: $uni-bg-color;` |
| `rounded-lg` | `border-radius: $uni-border-radius-lg;` |
| `shadow-md` | `box-shadow: $uni-shadow-base;` |

## 故障排查

如果样式不生效：

1. **检查是否引入 uni.scss**
```scss
@import "@/uni.scss";
```

2. **检查路径是否正确**
- HBuilderX: `@/uni.scss`
- CLI: 可能需要 `../../uni.scss`

3. **检查变量名是否正确**
- 必须以 `$uni-` 开头
- 使用驼峰或连字符命名

4. **清理缓存**
- HBuilderX: 运行 -> 清理缓存
- CLI: 删除 `node_modules/.cache` 和 `unpackage` 目录

5. **重启开发工具**
