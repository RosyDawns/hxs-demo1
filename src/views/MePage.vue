<template>
  <div class="page" id="page-me">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.push('/')">
        <i class="fa fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">我的</h2>
      <div class="flex-1 flex justify-end">
        <button class="nav-action text-gray" @click="$router.push('/settings')">
          <i class="fa fa-cog"></i>
        </button>
      </div>
    </header>

    <!-- 用户信息卡片 -->
    <div class="bg-gradient-to-r from-primary to-orange-500 p-4 text-white">
      <div class="flex items-center">
        <img src="https://picsum.photos/id/64/60/60" alt="用户头像" class="w-16 h-16 rounded-full border-2 border-white">
        <div class="ml-3">
          <h3 class="font-bold text-lg">用户昵称</h3>
          <div class="flex items-center mt-1">
            <span class="text-xs bg-white/30 px-2 py-0.5 rounded-full">L1 新手</span>
            <i class="fa fa-qrcode ml-2 text-xs"></i>
          </div>
        </div>
        <div class="ml-auto">
          <button class="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
            <i class="fa fa-plus mr-1"></i> 编辑资料
          </button>
        </div>
      </div>
    </div>

    <!-- 功能入口区 -->
    <div class="mt-3">
      <!-- 我的能量 -->
      <div class="bg-light rounded-lg card-shadow mb-3">
        <div class="flex justify-between items-center p-3 border-b border-gray-100">
          <div class="flex items-center">
            <i class="fa fa-tree text-primary mr-2"></i>
            <span class="text-sm">我的能量</span>
          </div>
          <div class="flex items-center">
            <span class="text-xs text-gray mr-1">100</span>
            <i class="fa fa-angle-right text-gray"></i>
          </div>
        </div>
        <div class="grid grid-cols-3 p-3 text-center">
          <div class="nav-action" @click="$router.push('/orders')">
            <div class="text-primary font-bold">0</div>
            <div class="text-xs text-gray mt-1">待支付</div>
          </div>
          <div class="nav-action" @click="$router.push('/orders')">
            <div class="text-primary font-bold">0</div>
            <div class="text-xs text-gray mt-1">待使用</div>
          </div>
          <div class="nav-action" @click="$router.push('/orders')">
            <div class="text-primary font-bold">0</div>
            <div class="text-xs text-gray mt-1">待评价</div>
          </div>
        </div>
      </div>

      <!-- 我的服务 -->
      <div class="bg-light rounded-lg card-shadow mb-3">
        <div class="grid grid-cols-4">
          <div class="flex flex-col items-center p-4 nav-action" @click="$router.push('/orders')">
            <i class="fa fa-file-text-o text-primary text-xl mb-1"></i>
            <span class="text-xs">我的订单</span>
          </div>
          <div class="flex flex-col items-center p-4 nav-action" @click="$router.push('/coupons')">
            <i class="fa fa-ticket text-primary text-xl mb-1"></i>
            <span class="text-xs">优惠券</span>
          </div>
          <div class="flex flex-col items-center p-4 nav-action" @click="$router.push('/favorites')">
            <i class="fa fa-heart-o text-primary text-xl mb-1"></i>
            <span class="text-xs">我的收藏</span>
          </div>
          <div class="flex flex-col items-center p-4 nav-action" @click="$router.push('/address')">
            <i class="fa fa-map-marker text-primary text-xl mb-1"></i>
            <span class="text-xs">收货地址</span>
          </div>
        </div>
      </div>

      <!-- 帮助与支持 -->
      <div class="bg-light rounded-lg card-shadow">
        <div class="grid grid-cols-4">
          <div class="flex flex-col items-center p-4 nav-action" @click="$router.push('/help')">
            <i class="fa fa-question-circle text-primary text-xl mb-1"></i>
            <span class="text-xs">帮助中心</span>
          </div>
          <div class="flex flex-col items-center p-4 nav-action" @click="$router.push('/feedback')">
            <i class="fa fa-commenting-o text-primary text-xl mb-1"></i>
            <span class="text-xs">意见反馈</span>
          </div>
          <div class="flex flex-col items-center p-4 nav-action" @click="$router.push('/about')">
            <i class="fa fa-info-circle text-primary text-xl mb-1"></i>
            <span class="text-xs">关于我们</span>
          </div>
          <div class="flex flex-col items-center p-4 nav-action" @click="$router.push('/signin')">
            <i class="fa fa-sign-out text-primary text-xl mb-1"></i>
            <span class="text-xs">退出登录</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 推荐唤醒师 -->
    <div class="mt-3 p-3">
      <h3 class="font-bold text-sm mb-2">为你推荐</h3>
      <div class="space-y-2">
        <div class="flex bg-light rounded-lg card-shadow p-2 nav-action" @click="$router.push('/ouyang')">
          <img src="/img-11.jpg" alt="唤醒师头像" class="w-12 h-12 rounded-full mr-2">
          <div class="flex-1">
            <div class="flex justify-between items-start">
              <h4 class="text-sm font-medium">李教练（羽毛球）</h4>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">专业认证</span>
            </div>
            <div class="flex space-x-0.5 text-warning text-xs mt-1">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterNav activePage="me" />
  </div>
</template>

<script>
import FooterNav from '../components/FooterNav.vue'

export default {
  name: 'MePage',
  components: {
    FooterNav
  }
}
</script>