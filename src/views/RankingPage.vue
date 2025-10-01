<template>
  <div class="page" id="page-ranking">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.back()">
        <i class="fa fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">排行榜</h2>
    </header>

    <!-- 排行榜分类 -->
    <div class="bg-light p-3 mt-3">
      <div class="flex space-x-3">
        <button class="flex-1 py-2 bg-primary text-white rounded-lg text-sm font-medium nav-action">
          综合榜
        </button>
        <button class="flex-1 py-2 bg-light border border-gray-100 text-gray rounded-lg text-sm font-medium nav-action">
          人气榜
        </button>
        <button class="flex-1 py-2 bg-light border border-gray-100 text-gray rounded-lg text-sm font-medium nav-action">
          好评榜
        </button>
      </div>
    </div>

    <!-- 排行榜列表 -->
    <div class="bg-light p-3 mt-3">
      <!-- 前三名 -->
      <div class="flex justify-center items-end space-x-4 mb-6">
        <!-- 第二名 -->
        <div class="flex flex-col items-center">
          <div class="w-20 h-20 rounded-full border-2 border-gray-100 overflow-hidden mb-2">
            <img src="/img-6.jpg" alt="第二名" class="w-full h-full object-cover">
          </div>
          <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-white font-bold mb-1">2</div>
          <h4 class="text-sm font-medium">张教练</h4>
          <p class="text-xs text-gray">健身教练</p>
        </div>

        <!-- 第一名 -->
        <div class="flex flex-col items-center">
          <div class="w-24 h-24 rounded-full border-2 border-warning overflow-hidden mb-2">
            <img src="/img-7.jpg" alt="第一名" class="w-full h-full object-cover">
          </div>
          <div class="w-10 h-10 bg-warning rounded-full flex items-center justify-center text-white font-bold mb-1">1</div>
          <h4 class="text-sm font-medium">李教练</h4>
          <p class="text-xs text-primary">瑜伽教练</p>
        </div>

        <!-- 第三名 -->
        <div class="flex flex-col items-center">
          <div class="w-18 h-18 rounded-full border-2 border-gray-100 overflow-hidden mb-2">
            <img src="/img-8.jpg" alt="第三名" class="w-full h-full object-cover">
          </div>
          <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-white font-bold mb-1">3</div>
          <h4 class="text-sm font-medium">王教练</h4>
          <p class="text-xs text-gray">舞蹈教练</p>
        </div>
      </div>

      <!-- 排名列表 -->
      <div class="space-y-3">
        <!-- 第4名 -->
        <div class="flex items-center border-b border-gray-100 pb-3 nav-action" @click="$router.push('/ouyang')">
          <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray font-medium mr-3">4</div>
          <img src="/img-9.jpg" alt="第四名" class="w-12 h-12 rounded-full mr-3">
          <div class="flex-1">
            <h4 class="font-medium">陈教练</h4>
            <p class="text-xs text-gray mt-0.5">游泳教练 | 5年经验</p>
          </div>
          <div class="flex items-center">
            <div class="flex space-x-0.5 text-warning text-xs mr-2">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
            <span class="text-sm font-medium">4.8</span>
          </div>
        </div>

        <!-- 第5名 -->
        <div class="flex items-center border-b border-gray-100 pb-3 nav-action" @click="$router.push('/ouyang')">
          <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray font-medium mr-3">5</div>
          <img src="/img-10.jpg" alt="第五名" class="w-12 h-12 rounded-full mr-3">
          <div class="flex-1">
            <h4 class="font-medium">刘教练</h4>
            <p class="text-xs text-gray mt-0.5">羽毛球教练 | 8年经验</p>
          </div>
          <div class="flex items-center">
            <div class="flex space-x-0.5 text-warning text-xs mr-2">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <span class="text-sm font-medium">4.6</span>
          </div>
        </div>

        <!-- 第6名 -->
        <div class="flex items-center border-b border-gray-100 pb-3 nav-action" @click="$router.push('/ouyang')">
          <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray font-medium mr-3">6</div>
          <img src="/img-17.jpg" alt="第六名" class="w-12 h-12 rounded-full mr-3">
          <div class="flex-1">
            <h4 class="font-medium">赵教练</h4>
            <p class="text-xs text-gray mt-0.5">跑步教练 | 6年经验</p>
          </div>
          <div class="flex items-center">
            <div class="flex space-x-0.5 text-warning text-xs mr-2">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <span class="text-sm font-medium">4.5</span>
          </div>
        </div>

        <!-- 第7名 -->
        <div class="flex items-center border-b border-gray-100 pb-3 nav-action" @click="$router.push('/ouyang')">
          <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray font-medium mr-3">7</div>
          <img src="/img-18.jpg" alt="第七名" class="w-12 h-12 rounded-full mr-3">
          <div class="flex-1">
            <h4 class="font-medium">黄教练</h4>
            <p class="text-xs text-gray mt-0.5">冥想教练 | 4年经验</p>
          </div>
          <div class="flex items-center">
            <div class="flex space-x-0.5 text-warning text-xs mr-2">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <span class="text-sm font-medium">4.5</span>
          </div>
        </div>

        <!-- 第8名 -->
        <div class="flex items-center border-b border-gray-100 pb-3 nav-action" @click="$router.push('/ouyang')">
          <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray font-medium mr-3">8</div>
          <img src="/img-19.jpg" alt="第八名" class="w-12 h-12 rounded-full mr-3">
          <div class="flex-1">
            <h4 class="font-medium">周教练</h4>
            <p class="text-xs text-gray mt-0.5">拳击教练 | 7年经验</p>
          </div>
          <div class="flex items-center">
            <div class="flex space-x-0.5 text-warning text-xs mr-2">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <span class="text-sm font-medium">4.4</span>
          </div>
        </div>

        <!-- 加载更多 -->
        <div class="text-center py-3">
          <button class="text-sm text-gray nav-action">
            加载更多 <i class="fa fa-angle-down ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RankingPage'
}
</script>