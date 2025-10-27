<template>
  <div
    class="page flex flex-col h-screen bg-gray-50"
    id="page-me"
    style="background-image: linear-gradient(to bottom, #fae9de, #fff)"
  >
    <!-- 顶部栏 -->
    <header class="p-3 flex items-center justify-between">
      <button
        class="flex items-center text-sm px-3 py-1.5 border border-gray-300 rounded-full nav-action bg-white"
        @click="$router.push('/add-friends')"
      >
        <i class="fa-solid fa-user-plus mr-1.5 text-black"></i>
        <span class="text-black">添加好友</span>
      </button>
      <div class="flex items-center space-x-3">
        <!-- <div class="flex items-center">
          <i class="fa-solid fa-star text-yellow-400 mr-1"></i>
          <span class="text-sm font-bold">4.9</span>
        </div>
        <button class="w-9 h-9 rounded-full bg-black flex items-center justify-center" @click="$router.push('/settings')">
          <div class="w-2 h-2 rounded-full bg-white"></div>
        </button> -->
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="flex-1 overflow-y-auto py-2 px-3">
      <!-- 用户信息区 -->
      <div>
        <div class="flex items-start">
          <img
            src="@images/img-15.jpg"
            alt="用户头像"
            class="w-20 h-20 rounded-full border-2 border-gray-200"
          />
          <div class="ml-3 flex-1">
            <div class="flex items-center">
              <h3 class="font-bold text-xl">张小明</h3>
              <i class="fa-solid fa-mars text-blue-400 ml-2"></i>
            </div>
            <p class="text-xs mt-2">唤醒兽ID: 123456789</p>
            <div class="flex items-center space-x-3 mt-2 text-xs">
              <span><span class="font-bold text-black">982</span> 粉丝</span>
              <span><span class="font-bold text-black">1780</span> 关注</span>
              <span>
                <span class="font-bold text-black">1563</span> 收藏 | 获赞
              </span>
            </div>
          </div>
          <button
            class="nav-action text-black"
            @click="$router.push('/settings')"
          >
            <i class="fa-solid fa-gear text-xl"></i>
          </button>
        </div>

        <!-- 标签 -->
        <div class="flex flex-wrap gap-2 mt-3">
          <span
            class="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
          >
            上海
          </span>
          <span
            class="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
          >
            实名认证
          </span>
          <span
            class="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
          >
            技能派
          </span>
          <span
            class="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
          >
            到店服务
          </span>
        </div>
      </div>

      <!-- 功能卡片区 -->
      <div class="bg-white mt-3 px-4 py-4 rounded-2xl shadow-sm">
        <div class="grid grid-cols-4 gap-4 text-center">
          <div class="nav-action" @click="$router.push('/my-orders')">
            <i class="fa-solid fa-file-invoice text-2xl text-primary mb-2"></i>
            <p class="text-xs text-black">订单</p>
          </div>
          <div class="nav-action" @click="$router.push('/favorites')">
            <i class="fa-solid fa-star text-2xl text-primary mb-2"></i>
            <p class="text-xs text-black">收藏</p>
          </div>
          <div class="nav-action" @click="$router.push('/pending-review')">
            <i class="fa-solid fa-comment-dots text-2xl text-primary mb-2"></i>
            <p class="text-xs text-black">待评价</p>
          </div>
          <div class="nav-action" @click="$router.push('/my-reviews')">
            <i class="fa-solid fa-check-circle text-2xl text-primary mb-2"></i>
            <p class="text-xs text-black">真实评价</p>
          </div>
        </div>
      </div>

      <!-- 全部功能 -->
      <div class="bg-white mt-3 px-4 py-3 rounded-2xl shadow-sm">
        <div class="flex items-center justify-between mb-3 text-sm">
          <h3 class="font-bold">全部功能</h3>
          <i class="fa-solid fa-angle-right text-gray-400"></i>
        </div>
        <div class="grid grid-cols-4 gap-4 text-center">
          <div class="nav-action" @click="$router.push('/wallet')">
            <div class="flex justify-center mb-2">
              <i class="fa-solid fa-wallet text-xl text-gray-800"></i>
            </div>
            <p class="text-xs text-gray-700">我的钱包</p>
          </div>
          <div class="nav-action" @click="$router.push('/register-waker')">
            <div class="flex justify-center mb-2">
              <i class="fa-solid fa-user-check text-xl text-gray-800"></i>
            </div>
            <p class="text-xs text-gray-700">注册唤醒师</p>
          </div>
          <div class="nav-action" @click="$router.push('/waker-alliance')">
            <div class="flex justify-center mb-2">
              <i class="fa-solid fa-cube text-xl text-gray-800"></i>
            </div>
            <p class="text-xs text-gray-700">唤醒联盟</p>
          </div>
          <div class="nav-action" @click="$router.push('/team')">
            <div class="flex justify-center mb-2">
              <i class="fa-solid fa-users text-xl text-gray-800"></i>
            </div>
            <p class="text-xs text-gray-700">醒狮团队</p>
          </div>
        </div>
      </div>

      <!-- 标签切换 -->
      <div class="bg-white mt-3 rounded-2xl shadow-sm">
        <div class="flex items-center justify-between px-4 pt-3">
          <div class="flex space-x-6">
            <button
              :class="[
                'pb-2 text-sm font-medium transition-colors flex items-center',
                activeTab === 'dynamics'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500',
              ]"
              @click="activeTab = 'dynamics'"
            >
              动态
            </button>
            <button
              :class="[
                'pb-2 text-sm font-medium transition-colors flex items-center',
                activeTab === 'follow'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500',
              ]"
              @click="handleFollowClick"
            >
              关注
              <i
                class="fa-solid fa-right-left ml-1"
                style="font-size: 10px"
              ></i>
            </button>
            <button
              :class="[
                'pb-2 text-sm font-medium transition-colors flex items-center',
                activeTab === 'showcase'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500',
              ]"
              @click="activeTab = 'showcase'"
            >
              橱窗
            </button>
            <button
              :class="[
                'pb-2 text-sm font-medium transition-colors flex items-center',
                activeTab === 'recommend'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500',
              ]"
              @click="activeTab = 'recommend'"
            >
              推荐橱窗
            </button>
          </div>
        </div>

        <!-- 内容区 -->
        <div class="px-2 py-2">
          <!-- 动态内容 -->
          <div v-if="activeTab === 'dynamics'" class="grid grid-cols-2 gap-2">
            <DynamicListItem
              v-for="item in dynamicList"
              :key="item.id"
              :item="item"
              @click="handleDynamicClick"
            />
          </div>

          <!-- 关注内容 -->
          <div v-else-if="activeTab === 'follow'">
            <!-- 模式1：CoachListCard模式 -->
            <div
              v-if="followViewMode === 'mode1'"
              class="grid grid-cols-2 gap-2"
            >
              <CoachListCard
                v-for="coach in followCoachesList"
                :key="coach.id"
                :coach="coach"
                @click="$router.push('/ouyang')"
              />
            </div>
            <!-- 模式2：动态列表模式 -->
            <div v-else class="grid grid-cols-2 gap-2">
              <DynamicListItem
                v-for="item in followDynamicsList"
                :key="item.id"
                :item="item"
                @click="handleDynamicClick"
              />
            </div>
          </div>

          <!-- 橱窗内容 -->
          <div
            v-else-if="activeTab === 'showcase'"
            class="grid grid-cols-2 gap-4 mt-2"
          >
            <div
              v-for="product in products"
              :key="product.id"
              class="bg-white rounded-lg overflow-hidden shadow-md"
              @click="handleProductClick(product.id)"
            >
              <div class="relative">
                <img
                  :src="product.image"
                  :alt="product.title"
                  class="w-full h-48 object-cover"
                />
                <div
                  v-if="product.isNew"
                  class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
                >
                  新品
                </div>
              </div>
              <div class="p-2">
                <h3 class="text-xs font-medium line-clamp-2 mb-1">
                  {{ product.title }}
                </h3>
                <div class="flex items-center justify-between">
                  <div class="text-red-500 font-bold text-sm">
                    ¥{{ product.price }}
                  </div>
                  <div class="text-xs text-gray-400">
                    已售 {{ product.sales }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 推荐橱窗内容 -->
          <div v-else-if="activeTab === 'recommend'" class="space-y-4">
            <hxs-item
              v-for="coach in recommendCoaches"
              :key="coach.id"
              :coach="coach"
              className="bg-white"
              @view-profile="handleViewProfile"
            />
          </div>
        </div>
      </div>
    </main>

    <div
      class="fixed bottom-18 shadow-md left-1/2 transform -translate-x-1/2 w-12 h-12 text-xs bg-orange-500 z-30 rounded-full flex flex-col items-center justify-center text-white"
      @click="handlePublish"
    >
      <i class="fa-solid fa-paper-plane text-sm mb-1"></i>
      <span style="font-size: 10px">发布</span>
    </div>
    <FooterNav activePage="me" />
  </div>
</template>

<script>
import FooterNav from "../components/FooterNav.vue";
import DynamicListItem from "../components/DynamicListItem.vue";
import HxsItem from "@/components/hxs-item.vue";
import CoachListCard from "@/components/CoachListCard.vue";
import CoachContentCard from "@/components/CoachContentCard.vue";

// 导入本地图片资源
import img1 from "@/assets/images/img-1.jpg";
import img2 from "@/assets/images/img-2.jpg";
import img3 from "@/assets/images/img-3.jpg";
import img4 from "@/assets/images/img-4.jpg";
import img5 from "@/assets/images/img-5.jpg";
import img6 from "@/assets/images/img-6.jpg";
import img13 from "@/assets/images/img-13.jpg";
import img14 from "@/assets/images/img-14.jpg";
import img15 from "@/assets/images/img-15.jpg";
import img39 from "@/assets/images/img_39.jpg";
import img40 from "@/assets/images/img_40.jpg";

export default {
  name: "MePage",
  components: {
    FooterNav,
    DynamicListItem,
    HxsItem,
    CoachListCard,
    CoachContentCard,
  },
  data() {
    return {
      activeTab: "dynamics",
      followViewMode: "mode1", // mode1 或 mode2
      dynamicList: [
        {
          id: 1,
          title: "9月的仪式感, 从纵身跃入泳池开始",
          image: img39,
          avatar: img1,
          author: "张小明",
          likes: 128,
        },
        {
          id: 2,
          title: "始于兴趣, 终于坚持, 让游泳成为一种习惯",
          image: img40,
          avatar: img1,
          author: "张小明",
          likes: 256,
        },
      ],
      // 关注的教练列表 - mode1
      followCoachesList: [
        {
          id: "coach1",
          name: "李教练",
          avatar: img39,
          pic: img1,
          qualification: "国家二级运动员",
          skills: "游泳/长泳/自由泳",
          rating: 4.8,
          label: "到店服务",
        },
        {
          id: "coach2",
          name: "王老师",
          avatar: img40,
          pic: img2,
          qualification: "专业瑜伽导师",
          skills: "瑜伽/冥想/塑形",
          rating: 4.9,
          label: "上门服务",
        },
        {
          id: "coach3",
          name: "赵教练",
          avatar: img6,
          pic: img3,
          qualification: "专业健身私教",
          skills: "力量训练/增肌/减脂",
          rating: 4.7,
          label: "线上服务",
        },
      ],
      // 关注的动态列表 - mode2
      followDynamicsList: [
        {
          id: 1,
          title: "今天完成了人生第一个5公里，坚持就是胜利！",
          image: img39,
          avatar: img1,
          author: "李教练",
          likes: 88,
        },
        {
          id: 2,
          title: "瑜伽让我找到了内心的平静，分享给大家",
          image: img40,
          avatar: img2,
          author: "王老师",
          likes: 156,
        },
        {
          id: 3,
          title: "健身路上没有捷径，只有坚持和努力",
          image: img6,
          avatar: img3,
          author: "赵教练",
          likes: 203,
        },
        {
          id: 4,
          title: "早起晨跑，迎接美好的一天",
          image: img4,
          avatar: img1,
          author: "张小明",
          likes: 95,
        },
      ],
      // 关注的教练列表 - mode2 (备用)
      followCoachesListMode2: [
        {
          id: "coach1",
          name: "李教练",
          avatar: img39,
          qualification: "专业力量训练，器材齐全环境超棒",
          type: "游泳教练",
          rating: 4.8,
          level: "高级教练",
          price: 200,
          label: "到店服务",
          pic: img13,
        },
        {
          id: "coach2",
          name: "王老师",
          avatar: img40,
          qualification: "高蛋白低脂餐单推荐，帮你高效增肌减脂",
          type: "瑜伽导师",
          rating: 4.9,
          level: "专业教练",
          price: 180,
          label: "上门服务",
          pic: img14,
        },
        {
          id: "coach3",
          name: "赵教练",
          avatar: img6,
          qualification: "专业力量训练，器材齐全环境超棒",
          type: "健身教练",
          rating: 4.7,
          level: "初级教练",
          price: 180,
          label: "到店服务",
          pic: img15,
        },
      ],
      products: [
        {
          id: "product1",
          title: "蛙泳/自由泳（体验卡）",
          price: 38,
          sales: 5680,
          image: img4,
          isNew: false,
        },
        {
          id: "product2",
          title: "自由泳60分钟（单次卡）",
          price: 200,
          sales: 890,
          image: img5,
          isNew: true,
        },
        {
          id: "product3",
          title: "蛙泳/自由泳（10次卡）",
          price: 1680,
          sales: 538,
          image: img6,
          isNew: false,
        },
        {
          id: "product4",
          title: "蛙泳/自由泳（20次卡）",
          price: 2980,
          sales: 136,
          image: img39,
          isNew: true,
        },
      ],
      recommendCoaches: [
        {
          id: "coach1",
          name: "李教练",
          type: "游泳教练",
          title: "国家二级运动员 | 8年教学经验",
          rating: 4.8,
          distance: 1.2,
          image: img1,
          prices: {
            trial: 88,
            single: 200,
            tenPack: 1680,
          },
        },
        {
          id: "coach2",
          name: "赵教练",
          type: "游泳教练",
          title: "国家一级运动员 | 10年教学经验",
          rating: 4.9,
          distance: 1.5,
          image: img3,
          prices: {
            trial: 98,
            single: 220,
            tenPack: 1880,
          },
        },
        {
          id: "coach3",
          name: "张教练",
          type: "游泳教练",
          title: "国家二级运动员 | 6年教学经验",
          rating: 4.6,
          distance: 1.5,
          image: img2,
          prices: {
            trial: 80,
            single: 180,
            tenPack: 1580,
          },
        },
      ],
    };
  },
  methods: {
    handleDynamicClick(id) {
      this.$router.push(`/dynamic-detail/${id}`);
    },
    handlePublish() {
      this.$router.push("/publish-activity");
    },
    handleFollowClick() {
      // 如果当前已经在关注标签，切换模式
      if (this.activeTab === "follow") {
        this.followViewMode =
          this.followViewMode === "mode1" ? "mode2" : "mode1";
      } else {
        // 切换到关注标签，重置为mode1
        this.activeTab = "follow";
        this.followViewMode = "mode1";
      }
    },
    handleCoachLike(coachId, isLiked) {
      console.log(`教练 ${coachId} 点赞状态:`, isLiked);
    },
    handleProductClick(productId) {
      this.$router.push(`/product-detail/${productId}`);
    },
    handleViewProfile(coachId) {
      this.$router.push({ path: "/ouyang", params: { id: coachId } });
    },
  },
};
</script>
