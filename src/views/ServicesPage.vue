<template>
  <div class="page pt-10" id="page-services">
    <!-- 顶部导航 -->
    <CommonHeader>
      <template #center>
        <h2 class="font-bold">推荐服务</h2>
      </template>
      <template #left>
        <button class="text-dark" @click="$router.back()">
          <i class="fa fa-arrow-left text-xl"></i>
        </button>
      </template>
      <template #right>
        <button class="text-dark">
          <i class="fa fa-ellipsis-h text-xl"></i>
        </button>
      </template>
    </CommonHeader>

    <!-- 服务内容 -->
    <div class="px-4 mt-4">
      <div class="bg-white rounded-lg p-3 card-shadow mb-4">
        <div class="flex items-center">
          <i class="fa fa-handshake-o text-gray-500 mr-2"></i>
          <p class="font-medium">我的推荐服务</p>
        </div>

        <!-- 服务分类 -->
        <div class="flex overflow-x-auto scrollbar-hide border-b border-gray-100 py-2 mt-2">
          <button class="px-3 py-1 text-sm font-medium text-primary border-b-2 border-primary whitespace-nowrap">全部服务</button>
          <button class="px-3 py-1 text-sm font-medium text-gray-500 whitespace-nowrap">徒步向导</button>
          <button class="px-3 py-1 text-sm font-medium text-gray-500 whitespace-nowrap">摄影指导</button>
          <button class="px-3 py-1 text-sm font-medium text-gray-500 whitespace-nowrap">装备咨询</button>
          <button class="px-3 py-1 text-sm font-medium text-gray-500 whitespace-nowrap">户外培训</button>
        </div>

        <!-- 服务列表 -->
        <div class="space-y-3 mt-3">
          <!-- 服务1 -->
          <div class="border border-gray-100 rounded-lg overflow-hidden">
            <div class="flex">
              <img src="https://picsum.photos/id/1061/200/200" alt="云南徒步向导" class="w-1/3 object-cover">
              <div class="w-2/3 p-2">
                <div class="flex justify-between">
                  <p class="text-sm font-medium">云南滇西徒步向导服务</p>
                  <span class="text-primary font-bold text-sm">¥399/天</span>
                </div>
                <p class="text-gray-500 text-xs mt-1 line-clamp-2">
                  专业户外向导带队，提供路线规划、安全保障、装备建议，适合新手入门
                </p>
                <div class="flex justify-between items-center mt-2">
                  <div class="flex items-center">
                    <i class="fa fa-star text-yellow-400 text-xs"></i>
                    <span class="text-gray-600 text-xs ml-1">4.9 (28评价)</span>
                  </div>
                  <button class="bg-primary text-white text-xs py-0.5 px-2 rounded">
                    预约
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 服务2 -->
          <div class="border border-gray-100 rounded-lg overflow-hidden">
            <div class="flex">
              <img src="https://picsum.photos/id/1063/200/200" alt="户外摄影指导" class="w-1/3 object-cover">
              <div class="w-2/3 p-2">
                <div class="flex justify-between">
                  <p class="text-sm font-medium">户外摄影技巧指导</p>
                  <span class="text-primary font-bold text-sm">¥299/小时</span>
                </div>
                <p class="text-gray-500 text-xs mt-1 line-clamp-2">
                  教你如何在户外拍摄绝美风景和人像，构图技巧、光线运用、后期处理
                </p>
                <div class="flex justify-between items-center mt-2">
                  <div class="flex items-center">
                    <i class="fa fa-star text-yellow-400 text-xs"></i>
                    <span class="text-gray-600 text-xs ml-1">4.8 (15评价)</span>
                  </div>
                  <button class="bg-primary text-white text-xs py-0.5 px-2 rounded">
                    预约
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 服务3 -->
          <div class="border border-gray-100 rounded-lg overflow-hidden">
            <div class="flex">
              <img src="https://picsum.photos/id/1060/200/200" alt="装备选购咨询" class="w-1/3 object-cover">
              <div class="w-2/3 p-2">
                <div class="flex justify-between">
                  <p class="text-sm font-medium">户外装备选购咨询</p>
                  <span class="text-primary font-bold text-sm">¥99/次</span>
                </div>
                <p class="text-gray-500 text-xs mt-1 line-clamp-2">
                  根据你的需求和预算，提供专业的户外装备选购建议，避免踩坑
                </p>
                <div class="flex justify-between items-center mt-2">
                  <div class="flex items-center">
                    <i class="fa fa-star text-yellow-400 text-xs"></i>
                    <span class="text-gray-600 text-xs ml-1">4.7 (32评价)</span>
                  </div>
                  <button class="bg-primary text-white text-xs py-0.5 px-2 rounded">
                    预约
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 服务4 -->
          <div class="border border-gray-100 rounded-lg overflow-hidden">
            <div class="flex">
              <img src="https://picsum.photos/id/1059/200/200" alt="初级户外培训" class="w-1/3 object-cover">
              <div class="w-2/3 p-2">
                <div class="flex justify-between">
                  <p class="text-sm font-medium">初级户外技能培训</p>
                  <span class="text-primary font-bold text-sm">¥599/天</span>
                </div>
                <p class="text-gray-500 text-xs mt-1 line-clamp-2">
                  适合新手的户外基础技能培训，包括地图使用、指南针、急救知识等
                </p>
                <div class="flex justify-between items-center mt-2">
                  <div class="flex items-center">
                    <i class="fa fa-star text-yellow-400 text-xs"></i>
                    <span class="text-gray-600 text-xs ml-1">4.9 (19评价)</span>
                  </div>
                  <button class="bg-primary text-white text-xs py-0.5 px-2 rounded">
                    预约
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader.vue";

export default {
  name: "ServicesPage",
  components: {
    CommonHeader
  },
  data() {
    return {
      // 可以添加服务列表数据和分类数据
    }
  }
}
</script>