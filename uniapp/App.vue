<script>
export default {
  onLaunch: function() {
    console.log('App Launch')
    // 检查登录状态
    const token = uni.getStorageSync('token')
    if (token) {
      // 验证 token 有效性
      this.validateToken(token)
    }
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  },
  methods: {
    validateToken(token) {
      // TODO: 实现 token 验证逻辑
    }
  }
}
</script>

<style lang="scss">
/* 注意：全局样式应保持简洁，避免影响性能 */
@import "uni.scss";

/* 全局样式重置 */
page {
  background-color: $uni-bg-color-grey;
  font-size: $uni-font-size-base;
  color: $uni-text-color;
  line-height: 1.6;
}

/* 通用容器 */
.container {
  padding: $uni-spacing-base;
}

/* 安全区域适配 */
.safe-area-inset-bottom {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

/* 通用按钮样式 */
.btn-primary {
  background-color: $uni-color-primary;
  color: #FFFFFF;
  border-radius: $uni-border-radius-base;
  padding: $uni-spacing-sm $uni-spacing-lg;
  
  &:active {
    opacity: 0.8;
  }
}

/* 通用卡片样式 */
.card {
  background-color: $uni-bg-color;
  border-radius: $uni-border-radius-lg;
  padding: $uni-spacing-base;
  margin-bottom: $uni-spacing-base;
  box-shadow: $uni-shadow-base;
}

/* 通用列表项样式 */
.list-item {
  background-color: $uni-bg-color;
  padding: $uni-spacing-base;
  border-bottom: 1rpx solid $uni-border-color;
  
  &:active {
    background-color: $uni-bg-color-hover;
  }
}
</style>
