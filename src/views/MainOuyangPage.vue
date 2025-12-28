<template>
  <div class="page" id="page-ouyang">
    <!-- 顶部导航 -->
    <CommonHeader arrowColor="#fff">
      <template #center></template>
      <template #right>
        <button class="text-white">
          <i class="fa fa-ellipsis-h text-xl"></i>
        </button>
      </template>
    </CommonHeader>

    <!-- 顶部封面区域 -->
    <div class="relative">
      <div class="pt-10 pb-16 relative">
        <div
          class="absolute w-full h-full left-0 top-0"
          style="
            background-position: center top;
            background-repeat: no-repeat;
            background-size: 100% 100%;
          "
          :style="{
            backgroundImage: `url(${BgImage})`,
          }"
        ></div>
        <!-- 用户信息区域 -->
        <div class="px-4 py-3 text-white relative z-1">
          <div class="flex items-center mb-5 relative">
            <img
              src="@images/img-15.jpg"
              alt="李教练"
              class="w-20 h-20 rounded-full border-2 border-white"
            />
            <div class="ml-4">
              <div class="text-xl font-bold">普陀新村路健身房</div>
              <p class="text-xs mt-3">唤醒兽号: 123456789</p>
              <p class="text-xs mt-1">IP属地: 上海</p>
            </div>
            <button
              class="absolute right-0 top-0 bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-medium"
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
              class="flex items-center text-xs px-2 py-1 rounded-full text-red-500"
              style="background-color: rgba(255, 255, 255, 0.2)"
            >
              <i class="fa-solid fa-venus"></i>
            </span>
            <span
              class="flex items-center text-xs px-2 py-1 rounded-full"
              style="background-color: rgba(255, 255, 255, 0.2)"
            >
              上海浦东
            </span>
            <span
              class="text-xs px-2 py-1 rounded-full"
              style="background-color: rgba(255, 255, 255, 0.2)"
            >
              技能派
            </span>
            <span
              class="text-xs px-2 py-1 rounded-full"
              style="background-color: rgba(255, 255, 255, 0.2)"
            >
              游泳唤醒师
            </span>
            <span
              class="text-xs px-2 py-1 rounded-full"
              style="background-color: rgba(255, 255, 255, 0.2)"
            >
              游泳教练
            </span>
          </div>

          <!-- 数据统计 -->
          <div class="flex items-center justify-between mt-4 py-1">
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
                class="border border-white text-xs py-1 px-2 rounded-full"
                style="background-color: rgba(255, 255, 255, 0.2)"
              >
                脉圈
              </button>
            </div>
            <div class="text-center">
              <button
                class="border border-white text-xs py-1 px-2 rounded-full"
                style="background-color: rgba(255, 255, 255, 0.2)"
              >
                真实评价 4.8分
              </button>
            </div>
          </div>

          <template v-if="variant == '1'">
            <div class="mt-3">
              <div class="flex items-center justify-between w-full">
                <span class="text-sm font-medium">营业中 10:00-22:00</span>
                <button class="text-white flex items-center text-sm">
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

            <div class="flex items-center justify-between mt-3">
              <div>
                <p class="text-sm">徐泾镇叶联路333弄金地天御18号001</p>
                <p class="text-xs">驾车1km,需约3分钟</p>
              </div>
              <div class="flex justify-end items-center">
                <button class="bg-gray-100 p-2 rounded-full mr-3 w-10 h-10">
                  <i class="fa fa-comment text-gray-600"></i>
                </button>
                <button class="bg-gray-100 p-2 rounded-full w-10 h-10">
                  <i class="fa fa-phone text-gray-600"></i>
                </button>
              </div>
            </div>

            <div
              class="p-2 rounded-lg overflow-hidden mt-3"
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
          </template>

          <template v-if="variant == 2">
            <div class="mt-3 space-y-2 text-sm">
              <div class="flex items-center">
                <div class="flex-1">
                  <div class="flex items-center">
                    <span class="text-sm font-medium">营业中 10:00-22:00</span>
                    <button class="text-white flex items-center text-sm">
                      <span>其他</span>
                      <i class="fa fa-angle-right"></i>
                    </button>
                  </div>
                  <div class="flex items-start">
                    <span class="w-16 text-gray-200/90">服务项目</span>
                    <div class="flex flex-wrap gap-2">
                      <span
                        class="px-2 py-0.5 rounded-full"
                        style="background-color: rgba(255, 255, 255, 0.2)"
                      >
                        游泳教学｜体能教学
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  class="border border-white text-xs py-1 px-2 rounded-full"
                  style="background-color: rgba(255, 255, 255, 0.2)"
                >
                  <i class="fa-solid fa-video mr-1"></i>
                  <span>验真</span>
                </button>
              </div>

              <div class="flex items-center mt-3">
                <div class="flex-1">
                  <div class="flex items-start mb-1">
                    <span class="w-16 text-gray-200/90">服务区域</span>
                    <div class="flex flex-wrap gap-2">
                      <span
                        class="px-2 py-0.5 rounded-full"
                        style="background-color: rgba(255, 255, 255, 0.2)"
                      >
                        静安区｜黄埔区
                      </span>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <span class="w-16 text-gray-200/90">服务场地</span>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="t in serviceSites"
                        :key="t"
                        class="px-2 py-0.5 rounded-full"
                        style="background-color: rgba(255, 255, 255, 0.2)"
                        >{{ t }}</span
                      >
                    </div>
                  </div>
                </div>
                <div class="flex justify-end items-center">
                  <button class="bg-gray-100 p-2 rounded-full mr-3 w-10 h-10">
                    <i class="fa fa-comment text-gray-600"></i>
                  </button>
                  <button class="bg-gray-100 p-2 rounded-full w-10 h-10">
                    <i class="fa fa-phone text-gray-600"></i>
                  </button>
                </div>
              </div>
            </div>

            <div
              class="p-2 rounded-lg overflow-hidden mt-3"
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
          </template>

          <template v-if="variant == '3'">
            <div class="flex items-center justify-between mt-4 text-sm">
              <div class="flex-1">
                <div class="flex items-center">
                  <span class="font-medium mr-3"> 营业中 10:00-22:00 </span>
                  <button class="text-white flex items-center text-sm">
                    <span>信息/设施</span>
                    <i class="fa fa-angle-right"></i>
                  </button>
                </div>
                <div class="flex items-center">
                  <span>服务项目</span>
                  <div></div>
                  <div class="flex flex-wrap gap-2 ml-1">
                    <span
                      class="px-2 py-0.5 rounded-full"
                      style="background-color: rgba(255, 255, 255, 0.2)"
                    >
                      品牌设计｜平面设计｜包装设计
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex justify-end items-center">
                <button class="bg-gray-100 p-2 rounded-full mr-3 w-10 h-10">
                  <i class="fa fa-comment text-gray-600"></i>
                </button>
                <button class="bg-gray-100 p-2 rounded-full w-10 h-10">
                  <i class="fa fa-phone text-gray-600"></i>
                </button>
              </div>
            </div>
            <div class="text-white/95 text-xl mb-2 mt-4">线上服务</div>
            <div
              class="rounded-2xl overflow-hidden flex items-center p-3"
              style="background-color: rgba(255, 255, 255, 0.2)"
            >
              <img
                class="w-28 h-20 object-cover rounded-xl"
                src="@images/img_40.jpg"
                alt="线上服务"
              />
              <div class="ml-2 flex-1">
                <div class="text-white">
                  <div class="text-lg font-semibold">品牌设计</div>
                  <div class="text-xs opacity-90 mt-0.5 mb-1">
                    logo+VI基础+VI应用
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="text-right text-white flex items-center">
                    <div class="text-xl font-bold">2W</div>
                    <div class="text-xs opacity-90">元/起</div>
                  </div>
                  <button
                    class="bg-red-500 text-white text-sm px-3 py-1 rounded-full"
                  >
                    立即购买
                  </button>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div
      class="relative bg-white z-10 -mt-[60px] rounded-l-4xl rounded-r-4xl overflow-hidden"
    >
      <!-- 内容标签栏 -->
      <div class="mb-3">
        <div class="flex items-center justify-between">
          <div class="flex pt-3">
            <button
              class="tab-button px-5 py-2 text-center font-medium text-sm text-primary border-b-2 border-primary"
            >
              动态
            </button>
            <button
              class="tab-button px-5 py-2 text-center font-medium text-sm"
              @click="$router.push('/store')"
            >
              橱窗
            </button>
            <button
              class="tab-button px-5 py-2 text-center font-medium text-sm"
              @click="$router.push('/services')"
            >
              星推官
            </button>
            <button
              class="tab-button px-5 py-2 text-center font-medium text-sm"
              @click="$router.push('/call')"
            >
              打Call
            </button>
          </div>
          <div class="flex items-center">
            <i class="mr-4 fa-solid fa-magnifying-glass text-gray-400"></i>
            <i class="mr-5 fa-solid fa-gift text-gray-400"></i>
          </div>
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
import CommonHeader from "@/components/CommonHeader.vue";
import NotesContent from "@/components/NotesContent.vue";
import BgImage from "@/assets/images/img_40.jpg";
export default {
  name: "OuyangPage",
  components: {
    CommonHeader,
    NotesContent,
  },
  data() {
    return {
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
      serviceSites: ["双方协商", "10公里内免费"],
    };
  },
  setup() {
    return {
      BgImage,
      // variant: Math.random() * 3 > 1 ? "1" : Math.random() * 2 > 1 ? "2" : "3",
      variant: 2
    };
  },
};
</script>
