<template>
  <div class="page flex flex-col h-screen" id="page-me">
    <!-- 顶部导航 -->
    <!-- <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.push('/')">
        <i class="fa-solid fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">我的</h2>
      <div class="flex-1 flex justify-end">
        <button class="nav-action text-gray" @click="$router.push('/settings')">
          <i class="fa-solid fa-gear"></i>
        </button>
      </div>
    </header> -->

    <!-- 主要内容区 - 纵向布局 -->
    <main class="flex-1 overflow-y-auto">
      <!-- 用户信息卡片 -->
      <div class="bg-gradient-to-r from-primary to-orange-500 p-4 text-white">
        <div class="flex items-center">
          <img src="@/assets/images/img-12.jpg" alt="用户头像" class="w-16 h-16 rounded-full border-2 border-white">
          <div class="ml-3">
            <h3 class="font-bold text-lg">小乖狼</h3>
            <div class="flex items-center mt-1">
              <span class="text-xs bg-white/30 px-2 py-0.5 rounded-full">L1 新手</span>
              <i class="fa-solid fa-qrcode ml-2 text-xs"></i>
            </div>
          </div>
          <div class="ml-auto">
            <button class="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
              <i class="fa-solid fa-plus mr-1"></i> 编辑资料
            </button>
          </div>
        </div>
      </div>

      <!-- 功能入口区 - 改为纵向布局 -->
      <div class="mt-3 p-3 space-y-3">
        <!-- 我的能量 -->
        <div class="bg-light rounded-lg card-shadow">
          <div class="flex justify-between items-center p-3 border-b border-gray-100">
            <div class="flex items-center">
              <i class="fa-solid fa-tree text-primary mr-2"></i>
              <span class="text-sm">我的能量</span>
            </div>
            <div class="flex items-center">
              <span class="text-xs text-gray mr-1">100</span>
              <i class="fa-solid fa-angle-right text-gray"></i>
            </div>
          </div>
          <div class="grid grid-cols-3 p-3 text-center">
            <div class="nav-action" @click="$router.push('/my-orders')">
              <div class="text-primary font-bold">0</div>
              <div class="text-xs text-gray mt-1">待支付</div>
            </div>
            <div class="nav-action" @click="$router.push('/my-orders')">
              <div class="text-primary font-bold">0</div>
              <div class="text-xs text-gray mt-1">待使用</div>
            </div>
            <div class="nav-action" @click="$router.push('/my-orders')">
              <div class="text-primary font-bold">0</div>
              <div class="text-xs text-gray mt-1">待评价</div>
            </div>
          </div>
        </div>

        <!-- 我的服务 - 改为纵向卡片式布局 -->
        <div class="bg-light rounded-lg card-shadow">
          <div class="flex items-center p-3 border-b border-gray-100 nav-action" @click="$router.push('/checkin')">
            <i class="fa-solid fa-calendar-check text-primary mr-2"></i>
            <span class="text-sm">健康打卡</span>
            <i class="fa-solid fa-angle-right text-gray ml-auto"></i>
          </div>
          <div class="flex items-center p-3 border-b border-gray-100 nav-action" @click="$router.push('/my-orders')">
            <i class="fa-solid fa-file-invoice text-primary mr-2"></i>
            <span class="text-sm">我的订单</span>
            <i class="fa-solid fa-angle-right text-gray ml-auto"></i>
          </div>
          <div class="flex items-center p-3 border-b border-gray-100 nav-action" @click="$router.push('/coupons')">
            <i class="fa-solid fa-ticket text-primary mr-2"></i>
            <span class="text-sm">优惠券</span>
            <i class="fa-solid fa-angle-right text-gray ml-auto"></i>
          </div>
          <div class="flex items-center p-3 border-b border-gray-100 nav-action" @click="$router.push('/favorites')">
            <i class="fa-solid fa-heart text-primary mr-2"></i>
            <span class="text-sm">我的收藏</span>
            <i class="fa-solid fa-angle-right text-gray ml-auto"></i>
          </div>
          <div class="flex items-center p-3 nav-action" @click="$router.push('/address')">
            <i class="fa-solid fa-map-marker-alt text-primary mr-2"></i>
            <span class="text-sm">收货地址</span>
            <i class="fa-solid fa-angle-right text-gray ml-auto"></i>
          </div>
        </div>

        <!-- 帮助与支持 - 改为纵向卡片式布局 -->
        <div class="bg-light rounded-lg card-shadow">
          <div class="flex items-center p-3 border-b border-gray-100 nav-action" @click="$router.push('/help')">
            <i class="fa-solid fa-circle-question text-primary mr-2"></i>
            <span class="text-sm">帮助中心</span>
            <i class="fa-solid fa-angle-right text-gray ml-auto"></i>
          </div>
          <div class="flex items-center p-3 border-b border-gray-100 nav-action" @click="$router.push('/feedback')">
            <i class="fa-solid fa-comment-dots text-primary mr-2"></i>
            <span class="text-sm">意见反馈</span>
            <i class="fa-solid fa-angle-right text-gray ml-auto"></i>
          </div>
          <div class="flex items-center p-3 border-b border-gray-100 nav-action" @click="$router.push('/about')">
            <i class="fa-solid fa-circle-info text-primary mr-2"></i>
            <span class="text-sm">关于我们</span>
            <i class="fa-solid fa-angle-right text-gray ml-auto"></i>
          </div>
          <div class="flex items-center p-3 nav-action" @click="$router.push('/signin')">
            <i class="fa-solid fa-right-from-bracket text-primary mr-2"></i>
            <span class="text-sm">退出登录</span>
            <i class="fa-solid fa-angle-right text-gray ml-auto"></i>
          </div>
        </div>

        <!-- 推荐唤醒狮 -->
        <!-- <div>
          <h3 class="font-bold text-sm mb-2">为你推荐</h3>
          <div class="bg-light rounded-lg card-shadow p-3 nav-action" @click="$router.push('/ouyang')">
            <div class="flex items-center">
              <img src="@/assets/images/img-11.jpg" alt="唤醒狮头像" class="w-14 h-14 rounded-full mr-3">
              <div class="flex-1">
                <div class="flex justify-between items-start">
                  <h4 class="text-sm font-medium">李教练（羽毛球）</h4>
                  <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">专业认证</span>
                </div>
                <div class="flex space-x-0.5 text-warning text-xs mt-1">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </main>

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