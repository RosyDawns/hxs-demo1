<template>
  <div class="page" id="page-ouyang">
    <!-- 顶部导航 -->
    <CommonHeader arrowColor="#fff">
      <!-- <template #left>
        <button>
          <i class="fa fa-arrow-left text-xl"></i>
        </button>
      </template> -->
      <template #center></template>
      <template #right>
        <button class="text-white">
          <i class="fa fa-ellipsis-h text-xl"></i>
        </button>
      </template>
    </CommonHeader>

    <!-- 顶部封面区域 -->
    <div class="relative">
      <div
        class="w-full bg-cover bg-center pt-10 pb-16"
        style="
          background-position: center top;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        "
        :style="{
          backgroundImage: `url(${BgImage})`,
        }"
      >
        <!-- 用户信息区域 -->
        <div class="px-4 py-3 text-white">
          <div class="flex items-center mb-5">
            <img
              src="https://picsum.photos/id/1005/120/120"
              alt="李教练"
              class="w-20 h-20 rounded-full border-2 border-white"
            />
            <div class="ml-4">
              <div class="text-xl font-bold">李教练</div>
              <p class="text-xs mt-3">唤醒兽号: 123456789</p>
              <p class="text-xs mt-1">IP属地: 上海</p>
            </div>
            <button
              class="ml-auto bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-medium"
            >
              关注
            </button>
          </div>

          <!-- 个人简介 -->
          <div class="mt-3">
            <p class="text-sm leading-relaxed">
              国家二级运动员,从事游泳行业8年,至今学员1万+<br />
              特长: 青少年长训专业训练, 蛙泳, 自由泳<br />
              您身边的游泳教练, 普及游泳知识!
            </p>
          </div>

          <!-- 标签 -->
          <div class="flex flex-wrap gap-2 mt-3">
            <span
              class="flex items-center bg-orange-50 text-orange-500 text-xs px-2 py-1 rounded-full"
            >
              <i class="fa fa-fire mr-1"></i>
              上海浦东
            </span>
            <span
              class="text-xs px-2 py-1 rounded-full"
              style="background-color: rgba(255, 255, 255, 0.2)"
              >技能派</span
            >
            <span
              class="text-xs px-2 py-1 rounded-full"
              style="background-color: rgba(255, 255, 255, 0.2)"
              >游泳唤醒师</span
            >
            <span
              class="text-xs px-2 py-1 rounded-full"
              style="background-color: rgba(255, 255, 255, 0.2)"
              >游泳教练</span
            >
          </div>

          <!-- 数据统计 -->
          <div class="flex items-center justify-between mt-4 py-3">
            <div class="text-center">
              <p class="text-xl font-bold">280</p>
              <p class="text-xs">关注</p>
            </div>
            <div class="text-center">
              <p class="text-xl font-bold">2.1万</p>
              <p class="text-xs">粉丝</p>
            </div>
            <div class="text-center">
              <p class="text-xl font-bold">10.3万</p>
              <p class="text-xs">获赞与收藏</p>
            </div>
            <div class="text-center">
              <button
                class="border border-gray-300 text-xs py-1 px-2 rounded-full"
              >
                脉圈
              </button>
            </div>
            <div class="text-center">
              <button
                class="border border-blue-400 bg-blue-50 text-blue-500 text-xs py-1 px-2 rounded-full"
              >
                真实评价 4.8分
              </button>
            </div>
          </div>

          <!-- 营业信息 -->
          <div class="mt-3">
            <div class="flex items-center justify-between w-full">
              <span class="text-sm font-medium">营业中 10:00-22:00</span>
              <button class="text-gray-300 flex items-center text-sm">
                <span>信息/设施</span>
                <i class="fa fa-angle-right"></i>
              </button>
            </div>
            <p class="text-sm mt-2">
              <span
                class="py-1 mr-1 px-2 rounded-full"
                style="background-color: rgba(255, 255, 255, 0.2)"
              >
                有登山机
              </span>
              <span
                class="py-1 mr-1 px-2 rounded-full"
                style="background-color: rgba(255, 255, 255, 0.2)"
              >
                按月付费
              </span>
              <span
                class="py-1 mr-1 px-2 rounded-full"
                style="background-color: rgba(255, 255, 255, 0.2)"
              >
                恒温泳池
              </span>
              <span
                class="py-1 px-2 rounded-full"
                style="background-color: rgba(255, 255, 255, 0.2)"
              >
                休息区
              </span>
            </p>
          </div>

          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm mt-2">徐泾镇叶联路333弄金地天御18号001</p>
              <p class="text-xs">驾车1km,需约3分钟</p>
            </div>
            <div class="flex justify-end mt-4">
              <button class="bg-gray-100 p-2 rounded-full mr-3 w-10 h-10">
                <i class="fa fa-comment text-gray-600"></i>
              </button>
              <button class="bg-gray-100 p-2 rounded-full w-10 h-10">
                <i class="fa fa-phone text-gray-600"></i>
              </button>
            </div>
          </div>

          <!-- 课程卡片 -->
          <div class="mt-4">
            <h3 class="text-base font-bold mb-3">服务</h3>
            <div
              class="p-2 rounded-lg overflow-hidden"
              style="background-color: rgba(255, 255, 255, 0.4)"
            >
              <div class="grid grid-cols-3 gap-2">
                <div
                  class="bg-gray-50 rounded-lg overflow-hidden relative text-center"
                >
                  <img
                    class="w-full h-22 object-cover"
                    src="@images/img_40.jpg"
                  />
                  <p class="text-xs text-black bg-white py-1">体验课</p>
                  <p
                    class="text-white w-full absolute top-0 left-0 py-1 text-xs"
                    style="
                      background-image: linear-gradient(
                        to bottom,
                        #000,
                        rgba(255, 255, 255, 0)
                      );
                    "
                  >
                    体验卡：¥100
                  </p>
                </div>
                <div
                  class="bg-gray-50 rounded-lg overflow-hidden relative text-center"
                >
                  <img
                    class="w-full h-22 object-cover"
                    src="@images/img_40.jpg"
                    alt=""
                  />
                  <p class="text-xs text-black bg-white py-1">单次课</p>
                  <p
                    class="text-xs text-white w-full absolute top-0 left-0 py-0.5"
                    style="
                      background-image: linear-gradient(
                        to bottom,
                        #000,
                        rgba(255, 255, 255, 0)
                      );
                    "
                  >
                    体验卡：¥200
                  </p>
                </div>
                <div
                  class="bg-gray-50 rounded-lg overflow-hidden relative text-center"
                >
                  <img
                    class="w-full h-22 object-cover"
                    src="@images/img_40.jpg"
                    alt=""
                  />
                  <p class="text-xs text-black bg-white py-1">10次卡</p>
                  <p
                    class="text-xs text-white w-full absolute top-0 left-0 py-0.5"
                    style="
                      background-image: linear-gradient(
                        to bottom,
                        #000,
                        rgba(255, 255, 255, 0)
                      );
                    "
                  >
                    体验卡：¥300
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="relative bg-white z-10 -mt-[60px] rounded-l-4xl rounded-r-4xl overflow-hidden"
    >
      <!-- 内容标签栏 -->
      <div class="mb-3">
        <div class="flex">
          <button
            class="tab-button flex-1 py-3 text-center font-medium text-sm text-primary border-b-2 border-primary"
          >
            动态
          </button>
          <button
            class="tab-button flex-1 py-3 text-center font-medium text-sm"
            @click="$router.push('/store')"
          >
            橱窗
          </button>
          <button
            class="tab-button flex-1 py-3 text-center font-medium text-sm"
            @click="$router.push('/services')"
          >
            推荐服务
          </button>
        </div>
      </div>

      <div class="px-3 pb-3">
        <!-- 动态内容区 - 使用组件 -->
        <div class="tab-content notes-content">
          <div class="grid grid-cols-2 gap-2 p-1">
            <NotesContent v-for="item in notes" :key="item.id" :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader.vue";
import NotesContent from "../components/NotesContent.vue";
import BgImage from "@/assets/images/img_40.jpg";
export default {
  name: "OuyangPage",
  components: {
    CommonHeader,
    NotesContent,
  },
  data() {
    return {
      // 不需要activeTab了，因为我们现在使用页面跳转而不是标签切换
      // 动态内容数组
      notes: [
        {
          id: 1,
          title: "女生专属跑山包，终于不用将就男款啦",
          imageUrl: "https://picsum.photos/id/1059/300/200",
          isTop: true,
          isVideo: true,
        },
        {
          id: 2,
          title: "硬核装备分享 | 重装阿布吉措篇",
          imageUrl: "https://picsum.photos/id/1060/300/200",
          isTop: true,
          isVideo: true,
        },
        {
          id: 3,
          title: "云南滇西徒步路线分享，新手友好",
          imageUrl: "https://picsum.photos/id/1061/300/200",
          isTop: false,
          isVideo: false,
        },
        {
          id: 4,
          title: "雪山攀登必备装备清单，小白也能轻松准备",
          imageUrl: "https://picsum.photos/id/1062/300/200",
          isTop: false,
          isVideo: false,
        },
      ],
    };
  },
  setup() {
    return {
      BgImage,
    };
  },
};
</script>
