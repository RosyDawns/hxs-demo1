<template>
  <div class="page" id="page-teacher-list">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.push('/')">
        <i class="fa fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">唤醒狮列表</h2>
      <div class="flex-1 flex justify-end">
        <button class="nav-action text-gray" @click="$router.push('/filter')">
          <i class="fa fa-filter"></i>
        </button>
      </div>
    </header>

    <!-- 筛选标签 -->
    <div class="p-3 flex space-x-2 overflow-x-auto scrollbar-hide">
      <button
        class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-primary bg-primary/10 rounded-full nav-action">
        全部
      </button>
      <button
        class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action">
        羽毛球
      </button>
      <button
        class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action">
        瑜伽
      </button>
      <button
        class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action">
        健身
      </button>
      <button
        class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action">
        游泳
      </button>
      <button
        class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action">
        舞蹈
      </button>
      <button
        class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action">
        阅读
      </button>
      <button
        class="px-3 py-1.5 whitespace-nowrap text-sm font-medium text-gray bg-light rounded-full nav-action">
        冥想
      </button>
    </div>

    <!-- 排序选项 -->
    <div class="flex border-b border-gray-100 px-3">
      <button
        class="py-3 px-4 text-sm font-medium text-primary border-b-2 border-primary nav-action">
        推荐
      </button>
      <button
        class="py-3 px-4 text-sm font-medium text-gray nav-action">
        距离最近
      </button>
      <button
        class="py-3 px-4 text-sm font-medium text-gray nav-action">
        价格最低
      </button>
      <button
        class="py-3 px-4 text-sm font-medium text-gray nav-action">
        评分最高
      </button>
    </div>

    <!-- 唤醒狮列表 -->
    <div class="p-3 space-y-3 mb-20">
      <!-- 唤醒狮项1 -->
      <div class="bg-light rounded-lg card-shadow overflow-hidden nav-action" @click="$router.push('/ouyang')">
        <div class="flex p-3">
          <img src="@images/img-20.jpg" alt="唤醒狮头像" class="w-16 h-16 rounded-full mr-3">
          <div class="flex-1">
            <div class="flex justify-between items-start">
              <h3 class="font-medium">李教练（羽毛球）</h3>
              <span class="text-xs bg-success/10 text-success px-2 py-0.5 rounded">冠军大神</span>
            </div>
            <p class="text-xs text-gray mt-1">国家二级运动员 | 10年教学经验</p>
            <div class="flex items-center mt-1">
              <div class="flex space-x-0.5 text-warning text-xs">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <span class="text-xs text-gray ml-1">98%好评</span>
              <span class="text-xs text-gray ml-2">1.2km</span>
            </div>
            <div class="flex flex-wrap gap-1 mt-1">
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">一对一</span>
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">小班课</span>
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">团体课</span>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 p-3">
          <div class="flex items-center">
            <span class="text-primary font-bold">¥80</span>
            <span class="text-xs text-gray ml-1">/小时起</span>
            <button class="ml-auto bg-primary text-white text-xs py-1 px-3 rounded-full" @click.stop="$router.push('/ouyang')">
              立即预约
            </button>
          </div>
        </div>
      </div>

      <!-- 唤醒狮项2 -->
      <div class="bg-light rounded-lg card-shadow overflow-hidden nav-action" @click="$router.push('/ouyang')">
        <div class="flex p-3">
          <img src="@images/img-21.jpg" alt="唤醒狮头像" class="w-16 h-16 rounded-full mr-3">
          <div class="flex-1">
            <div class="flex justify-between items-start">
              <h3 class="font-medium">张老师（瑜伽）</h3>
              <span class="text-xs bg-warning/10 text-warning px-2 py-0.5 rounded">人气大神</span>
            </div>
            <p class="text-xs text-gray mt-1">高级瑜伽导师 | 5年教学经验</p>
            <div class="flex items-center mt-1">
              <div class="flex space-x-0.5 text-warning text-xs">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
              </div>
              <span class="text-xs text-gray ml-1">96%好评</span>
              <span class="text-xs text-gray ml-2">2.5km</span>
            </div>
            <div class="flex flex-wrap gap-1 mt-1">
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">一对一</span>
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">小班课</span>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 p-3">
          <div class="flex items-center">
            <span class="text-primary font-bold">¥60</span>
            <span class="text-xs text-gray ml-1">/小时起</span>
            <button class="ml-auto bg-primary text-white text-xs py-1 px-3 rounded-full" @click.stop="$router.push('/ouyang')">
              立即预约
            </button>
          </div>
        </div>
      </div>

      <!-- 唤醒狮项3 -->
      <div class="bg-light rounded-lg card-shadow overflow-hidden nav-action" @click="$router.push('/ouyang')">
        <div class="flex p-3">
          <img src="@images/img-22.jpg" alt="唤醒狮头像" class="w-16 h-16 rounded-full mr-3">
          <div class="flex-1">
            <div class="flex justify-between items-start">
              <h3 class="font-medium">王教练（健身）</h3>
              <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">新秀</span>
            </div>
            <p class="text-xs text-gray mt-1">健身教练 | 3年教学经验</p>
            <div class="flex items-center mt-1">
              <div class="flex space-x-0.5 text-warning text-xs">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <span class="text-xs text-gray ml-1">92%好评</span>
              <span class="text-xs text-gray ml-2">3.1km</span>
            </div>
            <div class="flex flex-wrap gap-1 mt-1">
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">一对一</span>
              <span class="text-xs bg-gray-100 text-gray px-2 py-0.5 rounded">体能训练</span>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 p-3">
          <div class="flex items-center">
            <span class="text-primary font-bold">¥100</span>
            <span class="text-xs text-gray ml-1">/小时起</span>
            <button class="ml-auto bg-primary text-white text-xs py-1 px-3 rounded-full" @click.stop="$router.push('/ouyang')">
              立即预约
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterNav from '../components/FooterNav.vue'

export default {
  name: 'TeacherListPage',
  components: {
    FooterNav
  }
}
</script>