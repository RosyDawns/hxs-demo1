<template>
  <div class="page flex flex-col h-screen bg-[#f8f8f8]">
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 bg-white z-50 px-4 py-3 flex items-center justify-between">
      <div class="flex items-center">
        <div class="mr-3" @click="goBack">
          <i class="fa-solid fa-chevron-left text-gray-800"></i>
        </div>
        <span class="text-base font-medium text-gray-900">免费体验管理</span>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto pt-14 pb-4">
      <!-- 商品列表区域 -->
      <div class="bg-white px-4 pt-4 pb-4">
        <div class="flex items-center mb-3">
          <h2 class="text-sm font-medium text-gray-900 mr-3">商品列表</h2>
          <div class="flex-1 relative">
            <input 
              type="text" 
              placeholder="搜索活动" 
              class="w-full h-8 pl-8 pr-3 rounded-full bg-[#f5f5f5] text-xs text-gray-700 placeholder-gray-400 border-none outline-none"
              v-model="searchText"
            />
            <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
          </div>
        </div>

        <!-- 标签切换 -->
        <div class="flex items-center space-x-2 mb-3">
          <button 
            v-for="tab in tabs" 
            :key="tab.value"
            @click="activeTab = tab.value"
            :class="[
              'px-4 py-1.5 rounded-full text-xs transition-colors',
              activeTab === tab.value 
                ? 'bg-[#ff6b35] text-white font-medium' 
                : 'bg-[#f0f0f0] text-gray-600'
            ]"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- 商品卡片 -->
        <div class="bg-white rounded-xl border border-gray-100 p-3 flex items-center justify-between">
          <div class="flex items-center flex-1">
            <div class="w-[72px] h-[72px] rounded-lg overflow-hidden mr-3 shrink-0 bg-gray-100">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%2393C5FD' width='200' height='200'/%3E%3Cg opacity='0.5'%3E%3Ccircle cx='50' cy='50' r='40' fill='%236366F1'/%3E%3Ccircle cx='150' cy='50' r='40' fill='%236366F1'/%3E%3Ccircle cx='50' cy='150' r='40' fill='%236366F1'/%3E%3Ccircle cx='150' cy='150' r='40' fill='%236366F1'/%3E%3C/g%3E%3C/svg%3E"
                alt="蛙泳/自由泳"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-sm font-medium text-gray-900 mb-0.5">蛙泳/自由泳（体验卡）</h3>
              <p class="text-xs text-gray-500">一对一60分钟</p>
            </div>
          </div>
          <div class="ml-3 shrink-0 flex flex-col items-center">
            <button class="px-4 py-1.5 rounded-full bg-[#ff6b35] text-white text-xs font-medium mb-1">
              免费体验
            </button>
            <p class="text-xs text-gray-400">查看详情</p>
          </div>
        </div>
      </div>

      <!-- 待处理报名 -->
      <div class="mt-2 bg-white px-4 pt-4 pb-20">
        <div class="flex items-center justify-between mb-3.5">
          <h2 class="text-sm font-medium text-gray-800">待处理报名</h2>
          <span class="text-xs text-gray-400">{{ registrations.length }}个待处理</span>
        </div>

        <!-- 表头 -->
        <div class="flex items-center pb-2.5 mb-2 border-b border-gray-100 text-xs text-gray-500">
          <div class="w-12 shrink-0">姓名</div>
          <div class="flex-1 min-w-0 ml-2">商品</div>
          <div class="w-24 shrink-0 ml-2">报名时间</div>
          <div class="w-32 shrink-0 text-center ml-2">操作</div>
        </div>

        <!-- 报名列表 -->
        <div class="space-y-3">
          <div 
            v-for="item in registrations" 
            :key="item.id"
            class="flex items-center text-xs"
          >
            <div class="w-12 shrink-0 text-gray-900">{{ item.name }}</div>
            <div class="flex-1 min-w-0 text-gray-600 truncate ml-2">{{ item.product }}</div>
            <div class="w-24 shrink-0 text-gray-500 ml-2">{{ item.time }}</div>
            <div class="w-32 shrink-0 flex items-center justify-center space-x-2 ml-2">
              <button 
                @click="handleApprove(item)"
                class="px-3 py-1 rounded-full bg-[#ff6b35] text-white"
              >
                通过
              </button>
              <button 
                @click="handleReject(item)"
                class="px-3 py-1 rounded-full bg-[#f0f0f0] text-gray-600"
              >
                拒绝
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部滚动指示器 -->
      <div class="fixed bottom-0 left-0 right-0 flex justify-center py-2 bg-transparent">
        <div class="w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'BusinessAdminFreeTrialPage',
  data() {
    return {
      searchText: '',
      activeTab: 'trial',
      tabs: [
        { label: '体验商品', value: 'trial' },
        { label: '进行中', value: 'ongoing' },
        { label: '已结束', value: 'finished' }
      ],
      registrations: [
        { id: 1, name: '张三', product: '蛙泳/自由泳..', time: '10分钟前' },
        { id: 2, name: '李四', product: '蛙泳/自由泳..', time: '30分钟前' },
        { id: 3, name: '王五', product: '蛙泳/自由泳..', time: '1小时前' },
        { id: 4, name: '张三', product: '蛙泳/自由泳..', time: '1小时前' },
        { id: 5, name: '赵六', product: '蛙泳/自由泳..', time: '1小时前' },
        { id: 6, name: '孙七', product: '蛙泳/自由泳..', time: '2小时前' },
        { id: 7, name: '周八', product: '蛙泳/自由泳..', time: '2分钟前' },
        { id: 8, name: '吴九', product: '蛙泳/自由泳..', time: '3分钟前' },
        { id: 9, name: '郑十', product: '蛙泳/自由泳..', time: '3小时前' }
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    handleApprove(item) {
      console.log('通过申请:', item)
      // 这里添加通过申请的逻辑
    },
    handleReject(item) {
      console.log('拒绝申请:', item)
      // 这里添加拒绝申请的逻辑
    }
  }
}
</script>

<style scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}

/* 去除输入框默认样式 */
input:focus {
  outline: none;
}
</style>
