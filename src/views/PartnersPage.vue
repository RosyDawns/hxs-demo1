<template>
  <div class="page" id="page-partners">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.back()">
        <i class="fa fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">合作伙伴</h2>
    </header>

    <!-- 合作伙伴介绍 -->
    <div class="bg-light p-3 mt-3">
      <h3 class="font-medium mb-3">我们的合作伙伴</h3>
      <p class="text-sm text-gray">
        唤醒师平台与多家优质机构和品牌建立了战略合作关系，为用户提供全方位的健康服务和产品支持。
      </p>
    </div>

    <!-- 合作伙伴分类 -->
    <div class="p-3 mt-3 bg-light">
      <h3 class="font-medium mb-3">合作伙伴分类</h3>
      <div class="flex space-x-2 overflow-x-auto scrollbar-hide">
        <button 
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-primary bg-primary/10 rounded-full nav-action"
        >
          全部
        </button>
        <button 
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          健身场馆
        </button>
        <button 
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          瑜伽馆
        </button>
        <button 
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          舞蹈工作室
        </button>
        <button 
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          健康食品
        </button>
        <button 
          class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action"
        >
          运动装备
        </button>
      </div>
    </div>

    <!-- 合作伙伴列表 -->
    <div class="mt-3">
      <div class="bg-light p-3">
        <h3 class="font-medium mb-3">优质合作伙伴</h3>
        <div class="space-y-3">
          <!-- 合作伙伴1 -->
          <div class="flex items-center border-b border-gray-100 pb-3 nav-action" @click="$router.push('/partner-detail')">
            <img src="/img-3.jpg" alt="合作伙伴logo" class="w-16 h-16 rounded-lg mr-3">
            <div class="flex-1">
              <div class="flex justify-between items-start">
                <h4 class="font-medium">健体健身中心</h4>
                <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">官方认证</span>
              </div>
              <p class="text-xs text-gray mt-1">专业健身场馆 | 全国连锁 | 24小时营业</p>
              <div class="flex items-center mt-1">
                <div class="flex space-x-0.5 text-warning text-xs">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                </div>
                <span class="text-xs text-gray ml-1">4.8分</span>
                <span class="text-xs text-gray ml-2">12家门店</span>
              </div>
            </div>
            <i class="fa fa-angle-right text-gray"></i>
          </div>

          <!-- 合作伙伴2 -->
          <div class="flex items-center border-b border-gray-100 pb-3 nav-action" @click="$router.push('/partner-detail')">
            <img src="/img-4.jpg" alt="合作伙伴logo" class="w-16 h-16 rounded-lg mr-3">
            <div class="flex-1">
              <div class="flex justify-between items-start">
                <h4 class="font-medium">静心瑜伽馆</h4>
                <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">官方认证</span>
              </div>
              <p class="text-xs text-gray mt-1">专业瑜伽馆 | 环境优雅 | 资深教练</p>
              <div class="flex items-center mt-1">
                <div class="flex space-x-0.5 text-warning text-xs">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <span class="text-xs text-gray ml-1">5.0分</span>
                <span class="text-xs text-gray ml-2">5家门店</span>
              </div>
            </div>
            <i class="fa fa-angle-right text-gray"></i>
          </div>

          <!-- 合作伙伴3 -->
          <div class="flex items-center nav-action" @click="$router.push('/partner-detail')">
            <img src="/img-12.jpg" alt="合作伙伴logo" class="w-16 h-16 rounded-lg mr-3">
            <div class="flex-1">
              <div class="flex justify-between items-start">
                <h4 class="font-medium">舞动青春舞蹈工作室</h4>
                <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">官方认证</span>
              </div>
              <p class="text-xs text-gray mt-1">专业舞蹈培训 | 多种舞种 | 儿童成人课程</p>
              <div class="flex items-center mt-1">
                <div class="flex space-x-0.5 text-warning text-xs">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <span class="text-xs text-gray ml-1">4.5分</span>
                <span class="text-xs text-gray ml-2">8家门店</span>
              </div>
            </div>
            <i class="fa fa-angle-right text-gray"></i>
          </div>
        </div>
      </div>

      <!-- 更多合作伙伴 -->
      <div class="bg-light p-3 mt-3">
        <h3 class="font-medium mb-3">推荐品牌</h3>
        <div class="grid grid-cols-2 gap-3">
          <div class="bg-gray-50 rounded-lg p-3 flex flex-col items-center justify-center text-center nav-action" @click="$router.push('/partner-detail')">
            <img src="/img-13.jpg" alt="品牌logo" class="w-16 h-16 rounded-lg mb-2">
            <h4 class="text-sm font-medium">健康生活食品</h4>
            <p class="text-xs text-gray mt-1">天然健康食品供应商</p>
          </div>
          <div class="bg-gray-50 rounded-lg p-3 flex flex-col items-center justify-center text-center nav-action" @click="$router.push('/partner-detail')">
            <img src="/img-14.jpg" alt="品牌logo" class="w-16 h-16 rounded-lg mb-2">
            <h4 class="text-sm font-medium">活力运动装备</h4>
            <p class="text-xs text-gray mt-1">专业运动装备品牌</p>
          </div>
          <div class="bg-gray-50 rounded-lg p-3 flex flex-col items-center justify-center text-center nav-action" @click="$router.push('/partner-detail')">
            <img src="/img-15.jpg" alt="品牌logo" class="w-16 h-16 rounded-lg mb-2">
            <h4 class="text-sm font-medium">智能健身设备</h4>
            <p class="text-xs text-gray mt-1">智能健身器材制造商</p>
          </div>
          <div class="bg-gray-50 rounded-lg p-3 flex flex-col items-center justify-center text-center nav-action" @click="$router.push('/partner-detail')">
            <img src="/img-16.jpg" alt="品牌logo" class="w-16 h-16 rounded-lg mb-2">
            <h4 class="text-sm font-medium">健康管理平台</h4>
            <p class="text-xs text-gray mt-1">健康数据管理服务</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnersPage'
}
</script>