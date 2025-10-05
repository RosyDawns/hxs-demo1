<template>
  <div class="page" id="page-ouyang">
    <!-- 顶部导航 -->
    <CommonHeader>
      <template #center>
        <h2 class="font-bold">欧阳带你飞飞飞</h2>
      </template>
      <template #right>
        <button class="text-dark">
          <i class="fa fa-ellipsis-h text-xl"></i>
        </button>
      </template>
    </CommonHeader>
    
    <!-- 顶部封面区域 -->
    <div class="relative">
      <div class="w-full h-[160px] md:h-[220px] bg-cover bg-center" style="background-image: url('https://picsum.photos/id/1018/1000/500');">
        <!-- 顶部信息叠加 -->
        <div class="absolute top-4 right-4 text-white bg-black/30 px-2 py-1 rounded-full text-sm font-bold">
          8km
        </div>
      </div>

      <!-- 用户信息区域 -->
      <div class="relative -mt-16 px-4">
        <div class="flex flex-col sm:flex-row items-start sm:items-center">
          <img src="https://picsum.photos/id/1005/120/120" alt="欧阳带你飞飞飞" class="w-24 h-24 rounded-full border-4 border-white">
          <div class="ml-0 sm:ml-4 mt-2 sm:mt-0">
            <h1 class="text-xl font-bold">欧阳带你飞飞飞</h1>
            <p class="text-gray-500 text-sm mt-1">这是一串编号</p>
            <p class="text-gray-500 text-sm">IP属地: 广东</p>
          </div>
        </div>

        <!-- 标签和简介 -->
        <div class="mt-4 bg-white rounded-lg p-3 card-shadow">
          <p class="text-outdoor text-sm">
            <i class="fa fa-map-marker mr-1"></i>
            10月云南滇西 户外直播、徒步、越野跑、雪山攀登
            <i class="fa fa-helicopter mr-1"></i>
          </p>
          <p class="text-gray-600 text-xs mt-1 leading-relaxed">
            好物分享 | 种草测评 | 硬核徒步 | 雪山攀登<br>
            自驾旅行 | 户外模特 | 高山摄影 | 高能量成长
          </p>

          <!-- 标签 -->
          <div class="flex flex-wrap gap-2 mt-3">
            <span class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">广东佛山</span>
            <span class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">户外博主</span>
            <span class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">vlog博主</span>
            <span class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">高野山大学文学部</span>
          </div>
        </div>

        <!-- 数据统计 -->
        <div class="flex flex-wrap justify-between mt-4 gap-2">
          <div class="text-center flex-1 min-w-[60px]">
            <p class="text-xl font-bold">271</p>
            <p class="text-gray-500 text-xs">关注</p>
          </div>
          <div class="text-center flex-1 min-w-[60px]">
            <p class="text-xl font-bold">2.1万</p>
            <p class="text-gray-500 text-xs">粉丝</p>
          </div>
          <div class="text-center flex-1 min-w-[60px]">
            <p class="text-xl font-bold">10.3万</p>
            <p class="text-gray-500 text-xs">获赞与收藏</p>
          </div>
          <div class="text-center flex-1 min-w-[80px]">
            <button class="bg-black text-white text-xs py-1 px-2 rounded-full">
              视频验真<br>拒绝虚假
            </button>
          </div>
          <div class="text-center flex-1 min-w-[70px]">
            <button class="bg-red-500 text-white text-xs py-1 px-3 rounded-full">
              关注
            </button>
          </div>
          <div class="text-center flex-1 min-w-[70px]">
            <button class="border border-gray-300 text-gray-700 text-xs py-1 px-3 rounded-full">
              私信
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 功能区域 -->
    <div class="px-4 mt-4">
      <div class="grid grid-cols-3 gap-2 mb-4">
        <div class="bg-white rounded-lg p-2 card-shadow text-center">
          <p class="font-medium text-sm">证书/执照</p>
          <p class="text-gray-500 text-xs mt-1">查看 9.11 直播回顾</p>
        </div>
        <div class="bg-white rounded-lg p-2 card-shadow text-center">
          <p class="font-medium text-sm">脉圈</p>
          <p class="text-gray-500 text-xs mt-1">查看详情</p>
        </div>
        <div class="bg-white rounded-lg p-2 card-shadow text-center">
          <p class="font-medium text-sm">评价</p>
          <p class="text-gray-500 text-xs mt-1">1个评价</p>
        </div>
      </div>

      <!-- 内容标签栏 -->
      <div class="border-t border-b border-gray-100 mb-3">
        <div class="flex">
          <button :class="['tab-button flex-1 py-3 text-center font-medium text-sm', activeTab === 'notes' ? 'text-primary border-b-2 border-primary' : 'text-gray-500']" @click="activeTab = 'notes'">动态</button>
          <button :class="['tab-button flex-1 py-3 text-center font-medium text-sm', activeTab === 'store' ? 'text-primary border-b-2 border-primary' : 'text-gray-500']" @click="activeTab = 'store'">橱窗</button>
          <button :class="['tab-button flex-1 py-3 text-center font-medium text-sm', activeTab === 'services' ? 'text-primary border-b-2 border-primary' : 'text-gray-500']" @click="activeTab = 'services'">推荐服务</button>
        </div>
      </div>

      <!-- 动态内容区 -->
      <div v-show="activeTab === 'notes'" class="tab-content" id="notes">
        <div class="grid grid-cols-2 gap-2 p-1">
          <!-- 内容项1 -->
          <div class="bg-white rounded-lg overflow-hidden card-shadow">
            <div class="relative">
              <img src="https://picsum.photos/id/1059/300/200" alt="女性跑山" class="w-full h-36 object-cover">
              <span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">置顶</span>
              <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <i class="fa fa-play"></i>
              </button>
            </div>
            <div class="p-2">
              <p class="text-xs font-medium line-clamp-2">女生专属跑山包，终于不用将就男款啦</p>
            </div>
          </div>

          <!-- 内容项2 -->
          <div class="bg-white rounded-lg overflow-hidden card-shadow">
            <div class="relative">
              <img src="https://picsum.photos/id/1060/300/200" alt="装备分享" class="w-full h-36 object-cover">
              <span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">置顶</span>
              <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <i class="fa fa-play"></i>
              </button>
            </div>
            <div class="p-2">
              <p class="text-xs font-medium line-clamp-2">硬核装备分享 | 重装阿布吉措篇</p>
            </div>
          </div>

          <!-- 更多动态内容... -->
          <div class="bg-white rounded-lg overflow-hidden card-shadow">
            <img src="https://picsum.photos/id/1061/300/200" alt="徒步路线" class="w-full h-36 object-cover">
            <div class="p-2">
              <p class="text-xs font-medium line-clamp-2">云南滇西徒步路线分享，新手友好</p>
            </div>
          </div>

          <div class="bg-white rounded-lg overflow-hidden card-shadow">
            <img src="https://picsum.photos/id/1062/300/200" alt="雪山攀登" class="w-full h-36 object-cover">
            <div class="p-2">
              <p class="text-xs font-medium line-clamp-2">雪山攀登必备装备清单，小白也能轻松准备</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 橱窗内容区 -->
      <div v-show="activeTab === 'store'" class="tab-content" id="store">
        <div class="bg-white rounded-lg p-3 card-shadow mb-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <i class="fa fa-shopping-bag text-gray-500 mr-2"></i>
              <p class="font-medium">我的橱窗</p>
            </div>
            <p class="text-gray-500 text-xs">营业时间: 10:00-22:00 | 快递: 满99元包邮</p>
          </div>

          <!-- 商品分类 -->
          <div class="flex overflow-x-auto scrollbar-hide border-b border-gray-100 py-2 mt-2">
            <button class="px-3 py-1 text-sm font-medium text-primary border-b-2 border-primary whitespace-nowrap">全部商品</button>
            <button class="px-3 py-1 text-sm font-medium text-gray-500 whitespace-nowrap">户外装备</button>
            <button class="px-3 py-1 text-sm font-medium text-gray-500 whitespace-nowrap">运动服饰</button>
            <button class="px-3 py-1 text-sm font-medium text-gray-500 whitespace-nowrap">登山鞋靴</button>
            <button class="px-3 py-1 text-sm font-medium text-gray-500 whitespace-nowrap">露营用品</button>
            <button class="px-3 py-1 text-sm font-medium text-gray-500 whitespace-nowrap">户外配件</button>
          </div>

          <!-- 商品列表 -->
          <div class="grid grid-cols-2 gap-3 mt-3">
            <!-- 商品1 -->
            <div class="bg-gray-50 rounded-lg overflow-hidden">
              <div class="relative">
                <img src="https://picsum.photos/id/1025/300/300" alt="户外速干短裤" class="w-full h-40 object-cover">
                <span class="absolute top-1 right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">热销</span>
              </div>
              <div class="p-2">
                <p class="text-xs font-medium line-clamp-2">户外速干短裤女款 透气防泼水 多口袋设计</p>
                <div class="flex justify-between items-center mt-1">
                  <div>
                    <span class="text-red-500 font-bold text-sm">¥171.9</span>
                    <span class="text-gray-400 text-xs line-through ml-1">¥239</span>
                  </div>
                  <button class="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
                <p class="text-gray-500 text-xs mt-1">已售 126件</p>
              </div>
            </div>

            <!-- 商品2 -->
            <div class="bg-gray-50 rounded-lg overflow-hidden">
              <div class="relative">
                <img src="https://picsum.photos/id/1027/300/300" alt="户外防晒帽" class="w-full h-40 object-cover">
              </div>
              <div class="p-2">
                <p class="text-xs font-medium line-clamp-2">户外防晒帽 防紫外线 可折叠 男女通用</p>
                <div class="flex justify-between items-center mt-1">
                  <div>
                    <span class="text-red-500 font-bold text-sm">¥29.9</span>
                    <span class="text-gray-400 text-xs line-through ml-1">¥59</span>
                  </div>
                  <button class="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
                <p class="text-gray-500 text-xs mt-1">已售 358件</p>
              </div>
            </div>

            <!-- 商品3 -->
            <div class="bg-gray-50 rounded-lg overflow-hidden">
              <div class="relative">
                <img src="https://picsum.photos/id/1039/300/300" alt="户外冲锋衣" class="w-full h-40 object-cover">
                <span class="absolute top-1 right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">新品</span>
              </div>
              <div class="p-2">
                <p class="text-xs font-medium line-clamp-2">三合一冲锋衣 防风防水 保暖透气 登山必备</p>
                <div class="flex justify-between items-center mt-1">
                  <div>
                    <span class="text-red-500 font-bold text-sm">¥699</span>
                    <span class="text-gray-400 text-xs line-through ml-1">¥899</span>
                  </div>
                  <button class="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
                <p class="text-gray-500 text-xs mt-1">已售 42件</p>
              </div>
            </div>

            <!-- 商品4 -->
            <div class="bg-gray-50 rounded-lg overflow-hidden">
              <div class="relative">
                <img src="https://picsum.photos/id/1040/300/300" alt="登山背包" class="w-full h-40 object-cover">
              </div>
              <div class="p-2">
                <p class="text-xs font-medium line-clamp-2">40L登山背包 轻量防水 背负系统 徒步旅行</p>
                <div class="flex justify-between items-center mt-1">
                  <div>
                    <span class="text-red-500 font-bold text-sm">¥359</span>
                    <span class="text-gray-400 text-xs line-through ml-1">¥499</span>
                  </div>
                  <button class="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
                <p class="text-gray-500 text-xs mt-1">已售 89件</p>
              </div>
            </div>
          </div>

          <!-- 查看更多按钮 -->
          <div class="text-center mt-4">
            <button class="border border-primary text-primary text-sm py-1 px-6 rounded-full">
              查看更多商品
            </button>
          </div>
        </div>
      </div>

      <!-- 推荐服务内容区 -->
      <div v-show="activeTab === 'services'" class="tab-content" id="services">
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
  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader.vue";

export default {
  name: "OuyangPage",
  components: {
    CommonHeader
  },
  data() {
    return {
      activeTab: 'notes'
    }
  }
}
</script>