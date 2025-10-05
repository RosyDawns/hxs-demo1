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
          <button class="tab-button flex-1 py-3 text-center font-medium text-sm text-primary border-b-2 border-primary">动态</button>
          <button class="tab-button flex-1 py-3 text-center font-medium text-sm text-gray-500" @click="$router.push('/store')">橱窗</button>
          <button class="tab-button flex-1 py-3 text-center font-medium text-sm text-gray-500" @click="$router.push('/services')">推荐服务</button>
        </div>
      </div>

      <!-- 动态内容区 - 使用组件 -->
      <div class="tab-content notes-content">
        <div class="grid grid-cols-2 gap-2 p-1">
          <NotesContent v-for="item in notes" :key="item.id" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader.vue";
import NotesContent from "../components/NotesContent.vue";

export default {
  name: "OuyangPage",
  components: {
    CommonHeader,
    NotesContent
  },
  data() {
    return {
      // 不需要activeTab了，因为我们现在使用页面跳转而不是标签切换
      // 动态内容数组
      notes: [
        {
          id: 1,
          title: '女生专属跑山包，终于不用将就男款啦',
          imageUrl: 'https://picsum.photos/id/1059/300/200',
          isTop: true,
          isVideo: true
        },
        {
          id: 2,
          title: '硬核装备分享 | 重装阿布吉措篇',
          imageUrl: 'https://picsum.photos/id/1060/300/200',
          isTop: true,
          isVideo: true
        },
        {
          id: 3,
          title: '云南滇西徒步路线分享，新手友好',
          imageUrl: 'https://picsum.photos/id/1061/300/200',
          isTop: false,
          isVideo: false
        },
        {
          id: 4,
          title: '雪山攀登必备装备清单，小白也能轻松准备',
          imageUrl: 'https://picsum.photos/id/1062/300/200',
          isTop: false,
          isVideo: false
        }
      ]
    }
  }
}
</script>