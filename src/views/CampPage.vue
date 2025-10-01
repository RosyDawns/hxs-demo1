<template>
  <div class="page" id="page-camp">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.push('/')">
        <i class="fa fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">唤醒营</h2>
    </header>

    <!-- 轮播图 -->
    <div class="relative w-full h-40 mb-3">
      <img src="/img-31.jpg" alt="唤醒营轮播图" class="w-full h-full object-cover">
      <div class="absolute bottom-0 left-0 right-0 p-3">
        <div class="text-white font-bold text-lg">唤醒营活动</div>
        <div class="text-white text-xs opacity-80">探索更多精彩内容</div>
      </div>
    </div>

    <!-- 筛选标签 -->
    <div class="p-3 flex space-x-2 overflow-x-auto scrollbar-hide">
      <button
        class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-primary bg-primary/10 rounded-full nav-action">
        全部
      </button>
      <button
        class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action">
        健身
      </button>
      <button
        class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action">
        减肥
      </button>
      <button
        class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action">
        瑜伽
      </button>
      <button
        class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action">
        舞蹈
      </button>
      <button
        class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action">
        冥想
      </button>
    </div>

    <!-- 唤醒营列表 -->
    <div class="p-3 space-y-3 mb-20">
      <!-- 唤醒营项1 -->
      <div class="bg-light rounded-lg card-shadow overflow-hidden nav-action" @click="$router.push('/camp-detail')">
        <div class="relative">
          <img src="/img-32.jpg" alt="体重唤醒营" class="w-full h-40 object-cover">
          <div class="absolute top-0 right-0 bg-red-500 text-white text-xs py-1 px-2">限时5折</div>
        </div>
        <div class="p-3">
          <div class="flex justify-between items-start">
            <h3 class="font-medium">体重唤醒营</h3>
            <div class="flex items-center">
              <i class="fa fa-users text-xs text-gray"></i>
              <span class="text-xs text-gray ml-1">258人参加</span>
            </div>
          </div>
          <p class="text-xs text-gray mt-1">科学减脂，健康生活，专业教练一对一指导</p>
          <div class="flex items-center mt-2">
            <div class="flex items-center">
              <img src="/img-20.jpg" alt="教练头像" class="w-6 h-6 rounded-full mr-1">
              <span class="text-xs">李教练</span>
            </div>
            <div class="flex space-x-1 ml-3">
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">科学</span>
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">高效</span>
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">健康</span>
            </div>
          </div>
          <div class="flex items-center justify-between mt-3">
            <div>
              <span class="text-primary font-bold">¥299</span>
              <span class="text-xs text-gray line-through ml-1">¥599</span>
            </div>
            <button class="bg-primary text-white text-xs py-1 px-3 rounded-full" @click.stop="$router.push('/camp-detail')">
              立即报名
            </button>
          </div>
        </div>
      </div>

      <!-- 唤醒营项2 -->
      <div class="bg-light rounded-lg card-shadow overflow-hidden nav-action" @click="$router.push('/camp-detail')">
        <div class="relative">
          <img src="/img-33.jpg" alt="瑜伽唤醒营" class="w-full h-40 object-cover">
          <div class="absolute top-0 right-0 bg-green-500 text-white text-xs py-1 px-2">新课上线</div>
        </div>
        <div class="p-3">
          <div class="flex justify-between items-start">
            <h3 class="font-medium">瑜伽唤醒营</h3>
            <div class="flex items-center">
              <i class="fa fa-users text-xs text-gray"></i>
              <span class="text-xs text-gray ml-1">189人参加</span>
            </div>
          </div>
          <p class="text-xs text-gray mt-1">身心平衡，放松压力，提升专注力和幸福感</p>
          <div class="flex items-center mt-2">
            <div class="flex items-center">
              <img src="/img-21.jpg" alt="教练头像" class="w-6 h-6 rounded-full mr-1">
              <span class="text-xs">张老师</span>
            </div>
            <div class="flex space-x-1 ml-3">
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">减压</span>
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">专注</span>
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">平衡</span>
            </div>
          </div>
          <div class="flex items-center justify-between mt-3">
            <div>
              <span class="text-primary font-bold">¥199</span>
              <span class="text-xs text-gray line-through ml-1">¥399</span>
            </div>
            <button class="bg-primary text-white text-xs py-1 px-3 rounded-full" @click.stop="$router.push('/camp-detail')">
              立即报名
            </button>
          </div>
        </div>
      </div>

      <!-- 唤醒营项3 -->
      <div class="bg-light rounded-lg card-shadow overflow-hidden nav-action" @click="$router.push('/camp-detail')">
        <div class="relative">
          <img src="/img-34.jpg" alt="健身唤醒营" class="w-full h-40 object-cover">
        </div>
        <div class="p-3">
          <div class="flex justify-between items-start">
            <h3 class="font-medium">健身唤醒营</h3>
            <div class="flex items-center">
              <i class="fa fa-users text-xs text-gray"></i>
              <span class="text-xs text-gray ml-1">156人参加</span>
            </div>
          </div>
          <p class="text-xs text-gray mt-1">提升体能，塑造身材，专业健身计划定制</p>
          <div class="flex items-center mt-2">
            <div class="flex items-center">
              <img src="/img-22.jpg" alt="教练头像" class="w-6 h-6 rounded-full mr-1">
              <span class="text-xs">王教练</span>
            </div>
            <div class="flex space-x-1 ml-3">
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">力量</span>
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">塑形</span>
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">体能</span>
            </div>
          </div>
          <div class="flex items-center justify-between mt-3">
            <div>
              <span class="text-primary font-bold">¥399</span>
              <span class="text-xs text-gray line-through ml-1">¥699</span>
            </div>
            <button class="bg-primary text-white text-xs py-1 px-3 rounded-full" @click.stop="$router.push('/camp-detail')">
              立即报名
            </button>
          </div>
        </div>
      </div>
    </div>

    <FooterNav activePage="camp" />
  </div>
</template>

<script>
import FooterNav from '../components/FooterNav.vue'

export default {
  name: 'CampPage',
  components: {
    FooterNav
  }
}
</script>