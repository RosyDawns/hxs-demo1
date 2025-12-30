<template>
  <div class="page flex flex-col h-screen bg-gray-50" id="page-me"
    style="background-image: linear-gradient(to bottom, #fae9de, #fff)">
    <!-- 顶部栏 -->
    <header class="p-3 flex items-center justify-between">
      <button class="flex items-center text-sm px-3 py-1.5 border border-gray-300 rounded-full nav-action bg-white"
        @click="$router.push('/add-friends')">
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
          <img src="@images/img-15.jpg" alt="用户头像" class="w-20 h-20 rounded-full border-2 border-gray-200" />
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
          <button class="nav-action text-black" @click="$router.push('/settings')">
            <i class="fa-solid fa-gear text-xl"></i>
          </button>
        </div>

        <!-- 标签 -->
        <div class="flex flex-wrap gap-2 mt-3">
          <span class="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
            上海
          </span>
          <span class="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
            实名认证
          </span>
          <span class="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
            技能派
          </span>
          <span class="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
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
          <div class="nav-action" @click="$router.push('/business-admin')">
            <div class="flex justify-center mb-2">
              <i class="fa-solid fa-user-check text-xl text-gray-800"></i>
            </div>
            <p class="text-xs text-gray-700">醒师掌柜</p>
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
            <button :class="[
              'pb-2 text-sm font-medium transition-colors flex items-center',
              activeTab === 'dynamics'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-500',
            ]" @click="activeTab = 'dynamics'">
              动态
            </button>
            <button :class="[
              'pb-2 text-sm font-medium transition-colors flex items-center',
              activeTab === 'follow'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-500',
            ]" @click="handleFollowClick">
              关注
              <i class="fa-solid fa-right-left ml-1" style="font-size: 10px"></i>
            </button>
            <button :class="[
              'pb-2 text-sm font-medium transition-colors flex items-center',
              activeTab === 'showcase'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-500',
            ]" @click="activeTab = 'showcase'">
              橱窗
            </button>
            <button :class="[
              'pb-2 text-sm font-medium transition-colors flex items-center',
              activeTab === 'recommend'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-500',
            ]" @click="activeTab = 'recommend'">
              推荐橱窗
            </button>
          </div>
        </div>

        <!-- 内容区 -->
        <div>
          <!-- 动态内容 -->
          <div class="pt-3" v-if="activeTab === 'dynamics'">
            <WaterfallLayout :items="dynamicList" :columnCount="2" @click="(itemId) => handleDynamicClick(itemId)" />
            
            <!-- 加载提示 -->
            <div v-if="loading" class="text-center py-4 text-gray-500">
              <i class="fa-solid fa-spinner fa-spin mr-2"></i>
              加载中...
            </div>
            
            <!-- 没有更多数据提示 -->
            <div v-if="noMore && dynamicList.length > 0" class="text-center py-4 text-gray-400 text-sm pb-20">
              没有更多了
            </div>
          </div>

          <!-- 关注内容 -->
          <div class="px-2 py-2 pt-4" v-else-if="activeTab === 'follow'">
            <!-- 模式1：CoachListCard模式 -->
            <div v-if="followViewMode === 'mode1'" class="grid grid-cols-2 gap-2">
              <CoachListCard v-for="coach in followCoachesList" :key="coach.id" :coach="coach"
                @click="$router.push('/ouyang')" />
            </div>
            <!-- 模式2：动态列表模式 -->
            <div v-else>
              <WaterfallLayout :items="followDynamicsList" :columnCount="2" @click="(itemId) => handleDynamicClick(itemId)" />
              
              <!-- 加载提示 -->
              <div v-if="loading" class="text-center py-4 text-gray-500">
                <i class="fa-solid fa-spinner fa-spin mr-2"></i>
                加载中...
              </div>
              
              <!-- 没有更多数据提示 -->
              <div v-if="noMore && followDynamicsList.length > 0" class="text-center py-4 text-gray-400 text-sm pb-20">
                没有更多了
              </div>
            </div>
          </div>

          <!-- 橱窗内容 -->
          <div class="px-2 py-2" v-else-if="activeTab === 'showcase'">
            <div class="grid grid-cols-2 gap-4 mt-2">
              <div v-for="product in products" :key="product.id" class="bg-white rounded-lg overflow-hidden shadow-md"
                @click="handleProductClick(product.id)">
                <div class="relative">
                  <img :src="product.image" :alt="product.title" class="w-full h-48 object-cover" />
                  <div v-if="product.isNew"
                    class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
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
          </div>

          <!-- 推荐橱窗内容 -->
          <div v-else-if="activeTab === 'recommend'" class="px-2 py-2">
            <div class="space-y-4">
              <hxs-item v-for="coach in recommendCoaches" :key="coach.id" :coach="coach" className="bg-white"
                @view-profile="handleViewProfile" />
            </div>
          </div>
        </div>
      </div>
    </main>

    <div
      class="fixed bottom-18 shadow-md left-1/2 transform -translate-x-1/2 w-12 h-12 text-xs bg-orange-500 z-30 rounded-full flex flex-col items-center justify-center text-white"
      @click="handlePublish">
      <i class="fa-solid fa-paper-plane text-sm"></i>
    </div>
    <FooterNav activePage="me" />
  </div>
</template>

<script>
import FooterNav from "../components/FooterNav.vue";
import WaterfallLayout from "../components/WaterfallLayout.vue";
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

// 导入运动图片（13张）
import sport1 from '@/assets/images/sports/sport1.webp';
import sport2 from '@/assets/images/sports/sport2.webp';
import sport3 from '@/assets/images/sports/sport3.webp';
import sport4 from '@/assets/images/sports/sport4.webp';
import sport5 from '@/assets/images/sports/sport5.webp';
import sport6 from '@/assets/images/sports/sport6.webp';
import sport7 from '@/assets/images/sports/sport7.webp';
import sport8 from '@/assets/images/sports/sport8.webp';
import sport9 from '@/assets/images/sports/sport9.webp';
import sport10 from '@/assets/images/sports/sport10.webp';
import sport11 from '@/assets/images/sports/sport11.webp';
import sport12 from '@/assets/images/sports/sport12.webp';
import sport13 from '@/assets/images/sports/sport13.webp';

// 导入头像
import user1 from "@/assets/images/user_1.png";
import user2 from "@/assets/images/user_2.png";
import user3 from "@/assets/images/user_3.png";
import user4 from "@/assets/images/user_4.jpg";

// 导入工具函数
import { generateRandomSportsItems, createScrollLoader } from "@/utils/sportsDataGenerator";

export default {
  name: "MePage",
  components: {
    FooterNav,
    WaterfallLayout,
    HxsItem,
    CoachListCard,
    CoachContentCard,
  },
  data() {
    return {
      // 运动数据相关
      sportImages: [sport1, sport2, sport3, sport4, sport5, sport6, sport7, sport8, sport9, sport10, sport11, sport12, sport13],
      avatars: [user1, user2, user3, user4],
      loading: false,
      noMore: false,
      currentId: 100,
      
      activeTab: "dynamics",
      followViewMode: "mode1", // mode1 或 mode2
      dynamicList: [
        {
          id: 1,
          title: "晨跑打卡！今天跑了10公里，感觉超棒",
          image: sport1,
          avatar: user1,
          author: "跑步达人小李",
          likes: 328,
        },
        {
          id: 2,
          title: "瑜伽让我找到内心的平静，每天坚持30分钟",
          image: sport2,
          avatar: user2,
          author: "瑜伽教练Anna",
          likes: 256,
        },
        {
          id: 3,
          title: "健身房撸铁日常，今天练背，状态很好",
          image: sport3,
          avatar: user3,
          author: "健身教练Mike",
          likes: 445,
        },
        {
          id: 4,
          title: "篮球场上挥洒汗水，这才是青春该有的样子",
          image: sport4,
          avatar: user4,
          author: "篮球少年",
          likes: 198,
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
      // 关注的动态列表 - mode2（使用运动图片）
      followDynamicsList: [
        {
          id: 5,
          title: "游泳是最好的全身运动，坚持就是胜利",
          image: sport5,
          avatar: user1,
          author: "游泳健将",
          likes: 367,
        },
        {
          id: 6,
          title: "骑行穿越城市，感受不一样的风景",
          image: sport6,
          avatar: user2,
          author: "骑行爱好者",
          likes: 289,
        },
        {
          id: 7,
          title: "早起晨跑，迎接美好的一天，加油！",
          image: sport1,
          avatar: user3,
          author: "晨跑小队长",
          likes: 156,
        },
        {
          id: 8,
          title: "瑜伽不仅塑形，更能修心养性",
          image: sport2,
          avatar: user4,
          author: "瑜伽爱好者",
          likes: 234,
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
      // 根据当前标签页找到对应的数据源
      let dynamicItem;
      if (this.activeTab === 'dynamics') {
        dynamicItem = this.dynamicList.find(item => item.id === id);
      } else if (this.activeTab === 'follow' && this.followViewMode === 'mode2') {
        dynamicItem = this.followDynamicsList.find(item => item.id === id);
      }
      
      if (!dynamicItem) {
        console.error('Dynamic item not found for ID:', id);
        return;
      }
      
      // 将数据存储到 sessionStorage
      sessionStorage.setItem(`dynamic_${id}`, JSON.stringify(dynamicItem));
      
      // 跳转到详情页
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
    // 加载更多数据
    loadMore() {
      if (this.loading || this.noMore) return;
      
      this.loading = true;
      setTimeout(() => {
        const newItems = generateRandomSportsItems(
          6, 
          this.currentId, 
          this.sportImages, 
          this.avatars
        );
        this.currentId += 6;
        
        // 根据当前激活的 tab 添加到对应列表
        if (this.activeTab === 'dynamics') {
          this.dynamicList.push(...newItems);
          if (this.dynamicList.length >= 50) {
            this.noMore = true;
          }
        } else if (this.activeTab === 'follow' && this.followViewMode === 'mode2') {
          this.followDynamicsList.push(...newItems);
          if (this.followDynamicsList.length >= 50) {
            this.noMore = true;
          }
        }
        
        this.loading = false;
      }, 800);
    },
    // 滚动事件处理
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (scrollTop + windowHeight >= documentHeight - 200) {
        this.loadMore();
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
