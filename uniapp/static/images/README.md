# 图片资源说明

## 需要准备的图片

将以下图片放到此目录：

### 1. 首页相关
- `banner.jpg` - 首页横幅图 (750x400px)
- `user_1.png` - 主理人频道图标
- `user_2.png` - 技能唤醒狮图标  
- `user_3.png` - 搭子唤醒狮图标
- `coach1.jpg` - 教练照片1
- `coach2.jpg` - 教练照片2
- `avatar1.jpg` - 教练头像1
- `avatar2.jpg` - 教练头像2

### 2. AI助手相关
- `logo.png` - AI logo (400x200px)

### 3. 能量树相关
- `avatar.jpg` - 用户头像
- `tree.png` - 能量树背景图

### 4. 唤醒营相关
- `camp-banner.jpg` - 营地横幅
- `camp1.jpg` - 营地图片1
- `camp2.jpg` - 营地图片2

## 临时方案

在正式图片准备好之前，可以：

1. **从原项目复制**
```bash
cp /Users/crazycattle/Desktop/hxs/src/assets/images/* /Users/crazycattle/Desktop/hxs/uniapp/static/images/
```

2. **使用在线占位图**
将页面中的图片路径改为：
```
https://via.placeholder.com/750x400?text=Banner
```

3. **使用原项目 public 目录的图片**
```bash
cp /Users/crazycattle/Desktop/hxs/public/images/* /Users/crazycattle/Desktop/hxs/uniapp/static/images/
```

## 图片规范

- 格式：jpg, png, webp
- 大小：单张不超过 500KB
- 命名：小写字母+数字，用下划线或中划线分隔
- 尺寸：根据实际需要，建议使用 2x 图（如 750px 宽的设计稿用 1500px 图片）

## 图片优化建议

1. 使用 TinyPNG 或 ImageOptim 压缩
2. 横幅图推荐使用 jpg
3. 图标推荐使用 png
4. 支持的话使用 webp 格式
