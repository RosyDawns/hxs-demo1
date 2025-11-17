<template>
  <div class="page pb-6" id="group-play-page">
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center">
          <button @click="goBack" class="text-black mr-4">
            <i class="fa fa-angle-left text-xl"></i>
          </button>
          <h1 class="text-lg font-bold text-black">组团去玩</h1>
        </div>
        
      </div>
    </header>

    <!-- 主内容区 -->
    <main class="pt-16 pb-16 px-4">
      <!-- 搜索框 -->
      <div class="relative mb-4">
        <input 
          type="text" 
          placeholder="搜索活动名称、俱乐部名称..." 
          class="w-full bg-white rounded-full py-2 pl-10 pr-4 text-sm border-none focus:outline-none"
        />
        <i class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
      </div>

      <!-- 筛选标签 -->
      <div class="flex items-center overflow-x-auto whitespace-nowrap mb-2 pb-2 -mx-4 px-4">
        <button class="flex items-center bg-white rounded-full px-3 py-1.5 text-sm mr-2">
          附近
          <i class="fa fa-angle-down ml-1 text-xs"></i>
        </button>
        <button class="flex items-center bg-white rounded-full px-3 py-1.5 text-sm mr-2">
          户外运动
          <i class="fa fa-angle-down ml-1 text-xs"></i>
        </button>
        <button class="flex items-center bg-white rounded-full px-3 py-1.5 text-sm mr-2">
          时间
          <i class="fa fa-angle-down ml-1 text-xs"></i>
        </button>
        <button class="flex items-center bg-white rounded-full px-3 py-1.5 text-sm">
          费用
          <i class="fa fa-angle-down ml-1 text-xs"></i>
        </button>
      </div>

      <!-- 活动列表 -->
      <div class="space-y-4">
        <!-- 活动项1 -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
          <div class="p-3">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center">
                <span class="bg-green-50 text-green-500 text-xs px-2 py-0.5 rounded-full mr-2">跑步</span>
                <h3 class="font-medium">大宁沪跑团冬训第1期</h3>
              </div>
              <span class="text-red-500 font-medium text-sm">免费</span>
            </div>
            <p class="text-xs text-gray-500 mb-2">11.01 周六 06:00-10:30 · 大宁公园</p>
            <div class="flex flex-wrap gap-1 mb-3">
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-users mr-1"></i>
                大宁沪跑团
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-camera mr-1"></i>
                摄影跟拍
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-heart mr-1"></i>
                跑量积累
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-truck mr-1"></i>
                补给到位
              </span>
            </div>
          </div>
          
          <!-- 活动图片 -->
          <div class="flex gap-1 px-3 mb-3">
              <img src="@images/img_39.jpg" class="w-1/3 h-24 object-cover rounded" />
              <img src="@images/img_39.jpg" class="w-1/3 h-24 object-cover rounded" />
              <img src="@images/img_39.jpg" class="w-1/3 h-24 object-cover rounded" />
            </div>
          
          <div class="flex items-center justify-between px-3 pb-3">
            <div class="flex items-center">
              <span class="text-xs text-blue-500 mr-2">报名中</span>
              <div class="flex -space-x-1">
                  <img src="@images/img_39.jpg" class="w-5 h-5 rounded-full border border-white" />
                  <img src="@images/img_39.jpg" class="w-5 h-5 rounded-full border border-white" />
                  <img src="@images/img_39.jpg" class="w-5 h-5 rounded-full border border-white" />
                </div>
              <span class="text-xs text-gray-500 ml-1">28人已报名</span>
            </div>
            <button class="bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-full">
              报名
            </button>
          </div>
        </div>

        <!-- 活动项2 -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
          <div class="p-3">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center">
                <span class="bg-blue-50 text-blue-500 text-xs px-2 py-0.5 rounded-full mr-2">垂钓</span>
                <h3 class="font-medium">11.1海上游乐园，路亚钓鱼爆箱</h3>
              </div>
              <span class="text-gray-500 font-medium text-sm">AA制</span>
            </div>
            <p class="text-xs text-gray-500 mb-2">11.01 周六 06:00 - 11.02 周日 11:00 · 金沙江路[地铁站]</p>
            <div class="flex flex-wrap gap-1 mb-3">
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-user mr-1"></i>
                理查
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-bolt mr-1"></i>
                狂口
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-map-marker mr-1"></i>
                绝佳钓点
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-diamond mr-1"></i>
                大神带钓
              </span>
            </div>
          </div>
          
          <!-- 活动图片 -->
          <div class="flex gap-1 px-3 mb-3">
              <img src="@images/img_39.jpg" class="w-1/3 h-24 object-cover rounded" />
              <img src="@images/img_39.jpg" class="w-1/3 h-24 object-cover rounded" />
              <img src="@images/img_39.jpg" class="w-1/3 h-24 object-cover rounded" />
            </div>
          
          <div class="flex items-center justify-between px-3 pb-3">
            <div class="flex items-center">
              <span class="text-xs text-blue-500 mr-2">报名中</span>
              <div class="flex -space-x-1">
                  <img src="@images/img_39.jpg" class="w-5 h-5 rounded-full border border-white" />
                </div>
              <span class="text-xs text-gray-500 ml-1">1人已报名</span>
            </div>
            <button class="bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-full">
              报名
            </button>
          </div>
        </div>

        <!-- 活动项3 -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
          <div class="p-3">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center">
                <span class="bg-amber-50 text-amber-500 text-xs px-2 py-0.5 rounded-full mr-2">徒步</span>
                <h3 class="font-medium">11.01周六韩妃江古道徒步赏江南</h3>
              </div>
              <span class="text-red-500 font-medium text-sm">¥188</span>
            </div>
            <p class="text-xs text-gray-500 mb-2">11.01 周六 07:30-18:00 · 人民广场[地铁站]</p>
            <div class="flex flex-wrap gap-1 mb-3">
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-tree mr-1"></i>
                古道徒步
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-image mr-1"></i>
                山水风景
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-cutlery mr-1"></i>
                特色午餐
              </span>
            </div>
          </div>
          
          <!-- 活动图片 -->
          <div class="flex gap-1 px-3 mb-3">
            <img src="@images/img_39.jpg" class="w-1/3 h-24 object-cover rounded" />
            <img src="@images/img_39.jpg" class="w-1/3 h-24 object-cover rounded" />
            <img src="@images/img_39.jpg" class="w-1/3 h-24 object-cover rounded" />
          </div>
          
          <div class="flex items-center justify-between px-3 pb-3">
            <div class="flex items-center">
              <span class="text-xs text-blue-500 mr-2">报名中</span>
              <div class="flex -space-x-1">
                  <img src="@images/img_39.jpg" class="w-5 h-5 rounded-full border border-white" />
                  <img src="@images/img_39.jpg" class="w-5 h-5 rounded-full border border-white" />
                  <img src="@images/img_39.jpg" class="w-5 h-5 rounded-full border border-white" />
                  <img src="@images/img_39.jpg" class="w-5 h-5 rounded-full border border-white" />
                </div>
              <span class="text-xs text-gray-500 ml-1">15人已报名</span>
            </div>
            <button class="bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-full">
              报名
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部导航栏 -->
    <footer class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center py-2">
      <button class="flex flex-col items-center justify-center text-orange-500">
        <i class="fa fa-compass text-xl mb-1"></i>
        <span class="text-xs">活动广场</span>
      </button>
      <button class="flex flex-col items-center justify-center text-gray-500">
        <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center -mt-5">
          <i class="fa fa-plus text-white text-xl"></i>
        </div>
        <span class="text-xs mt-1">发布</span>
      </button>
      <button class="flex flex-col items-center justify-center text-gray-500">
        <i class="fa fa-comment-o text-xl mb-1"></i>
        <span class="text-xs">消息</span>
      </button>
      <button class="flex flex-col items-center justify-center text-gray-500">
        <i class="fa fa-user-o text-xl mb-1"></i>
        <span class="text-xs">我的</span>
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'GroupPlayPage',
  data() {
    return {
      // 可以在这里添加页面需要的数据
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

/* 自定义滚动条样式 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}

::-webkit-scrollbar-thumb {
  background: transparent;
}

::-webkit-scrollbar-track {
  background: transparent;
}
</style>