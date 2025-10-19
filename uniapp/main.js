import App from './App'
import { createSSRApp } from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  
  // 全局配置
  app.config.globalProperties.$apiUrl = 'https://api.example.com'
  
  // 全局方法：页面跳转封装
  app.config.globalProperties.$nav = {
    // 跳转到指定页面
    to(url) {
      uni.navigateTo({ url })
    },
    // 返回上一页
    back(delta = 1) {
      uni.navigateBack({ delta })
    },
    // 跳转到 tabBar 页面
    switchTab(url) {
      uni.switchTab({ url })
    },
    // 重定向
    redirect(url) {
      uni.redirectTo({ url })
    }
  }
  
  // 全局方法：Toast 提示
  app.config.globalProperties.$toast = (title, icon = 'none', duration = 2000) => {
    uni.showToast({ title, icon, duration })
  }
  
  // 全局方法：Loading
  app.config.globalProperties.$loading = {
    show(title = '加载中...') {
      uni.showLoading({ title, mask: true })
    },
    hide() {
      uni.hideLoading()
    }
  }
  
  // 全局方法：确认对话框
  app.config.globalProperties.$confirm = (content, title = '提示') => {
    return new Promise((resolve, reject) => {
      uni.showModal({
        title,
        content,
        success: (res) => {
          if (res.confirm) {
            resolve(true)
          } else {
            reject(false)
          }
        }
      })
    })
  }
  
  return {
    app
  }
}
