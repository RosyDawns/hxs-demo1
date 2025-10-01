<template>
  <div class="page" id="page-my-orders">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.back()">
        <i class="fa fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">我的订单</h2>
    </header>

    <!-- 订单状态筛选 -->
    <div class="bg-light p-3 mt-3">
      <div class="flex space-x-2 overflow-x-auto scrollbar-hide">
        <button 
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-primary bg-primary/10 rounded-full nav-action"
        >
          全部订单
        </button>
        <button 
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          待付款
        </button>
        <button 
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          进行中
        </button>
        <button 
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          已完成
        </button>
        <button 
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          已取消
        </button>
      </div>
    </div>

    <!-- 订单列表 -->
    <div class="mt-3 space-y-3">
      <!-- 订单1 -->
      <div class="bg-light">
        <div class="p-3 border-b border-gray-100">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <span class="text-sm font-medium mr-3">健体健身中心</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">进行中</span>
            </div>
            <span class="text-xs text-gray">订单号：20230701001</span>
          </div>
        </div>
        
        <div class="p-3">
          <div class="flex items-center mb-3">
            <img src="/img-3.jpg" alt="服务图片" class="w-20 h-20 rounded-lg mr-3">
            <div class="flex-1">
              <h4 class="font-medium text-sm">羽毛球一对一私教</h4>
              <p class="text-xs text-gray mt-1">2023-07-15 19:00-20:00</p>
              <p class="text-xs text-gray mt-0.5">李教练（羽毛球）</p>
            </div>
            <div class="text-right">
              <span class="text-sm font-medium text-primary">¥80</span>
              <span class="text-xs text-gray">x1</span>
            </div>
          </div>
          
          <div class="flex justify-between items-center">
            <div class="text-xs text-gray">
              共1项服务 合计：<span class="text-primary font-medium">¥80</span>
            </div>
            <div class="flex space-x-2">
              <button class="text-xs text-gray border border-gray-100 px-3 py-1 rounded-full nav-action">
                联系教练
              </button>
              <button class="text-xs text-white bg-primary px-3 py-1 rounded-full nav-action">
                确认完成
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 订单2 -->
      <div class="bg-light">
        <div class="p-3 border-b border-gray-100">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <span class="text-sm font-medium mr-3">静心瑜伽馆</span>
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">已完成</span>
            </div>
            <span class="text-xs text-gray">订单号：20230625002</span>
          </div>
        </div>
        
        <div class="p-3">
          <div class="flex items-center mb-3">
            <img src="/img-4.jpg" alt="服务图片" class="w-20 h-20 rounded-lg mr-3">
            <div class="flex-1">
              <h4 class="font-medium text-sm">瑜伽初级课程</h4>
              <p class="text-xs text-gray mt-1">2023-06-30 18:00-19:30</p>
              <p class="text-xs text-gray mt-0.5">王教练（瑜伽）</p>
            </div>
            <div class="text-right">
              <span class="text-sm font-medium text-primary">¥120</span>
              <span class="text-xs text-gray">x1</span>
            </div>
          </div>
          
          <div class="flex justify-between items-center">
            <div class="text-xs text-gray">
              共1项服务 合计：<span class="text-primary font-medium">¥120</span>
            </div>
            <div class="flex space-x-2">
              <button class="text-xs text-gray border border-gray-100 px-3 py-1 rounded-full nav-action">
                再次预约
              </button>
              <button class="text-xs text-gray border border-gray-100 px-3 py-1 rounded-full nav-action">
                评价
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 订单3 -->
      <div class="bg-light">
        <div class="p-3 border-b border-gray-100">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <span class="text-sm font-medium mr-3">夏日减脂训练营</span>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">待付款</span>
            </div>
            <span class="text-xs text-gray">订单号：20230702003</span>
          </div>
        </div>
        
        <div class="p-3">
          <div class="flex items-center mb-3">
            <img src="/img-5.jpg" alt="服务图片" class="w-20 h-20 rounded-lg mr-3">
            <div class="flex-1">
              <h4 class="font-medium text-sm">夏日减脂训练营</h4>
              <p class="text-xs text-gray mt-1">2023-07-10 至 2023-07-20</p>
              <p class="text-xs text-gray mt-0.5">李教练、张教练</p>
            </div>
            <div class="text-right">
              <span class="text-sm font-medium text-primary">¥1999</span>
              <span class="text-xs text-gray">x1</span>
            </div>
          </div>
          
          <div class="flex justify-between items-center">
            <div class="text-xs text-gray">
              共1项服务 合计：<span class="text-primary font-medium">¥1999</span>
            </div>
            <div class="flex space-x-2">
              <button class="text-xs text-gray border border-gray-100 px-3 py-1 rounded-full nav-action">
                取消订单
              </button>
              <button class="text-xs text-white bg-primary px-3 py-1 rounded-full nav-action">
                去支付
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyOrdersPage'
}
</script>