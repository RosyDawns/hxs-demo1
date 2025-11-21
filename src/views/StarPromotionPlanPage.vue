<template>
  <div class="page flex flex-col h-screen bg-[#f8f8f8]">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 px-4 py-3 flex items-center justify-between"
    >
      <div class="flex items-center">
        <div class="mr-3" @click="goBack">
          <i class="fa-solid fa-chevron-left text-gray-800 text-lg"></i>
        </div>
        <span class="text-base font-medium text-gray-900"
          >超级星推官定向计划</span
        >
      </div>
      
    </header>

    <main class="flex-1 overflow-y-auto pt-14 pb-20 px-4">
      <!-- 结算方式 -->
      <div class="bg-white rounded-2xl p-5 mt-4 shadow-sm">
        <h2 class="text-base font-medium text-gray-900 mb-4">结算方式</h2>
        <div class="space-y-3">
          <div
            class="border border-gray-200 rounded-xl p-4 text-center cursor-pointer hover:border-orange-400 transition-colors"
            :class="{ 'border-orange-400 bg-orange-50': settlementType === 1 }"
            @click="settlementType = 1"
          >
            <p class="text-[15px] font-medium text-gray-900 mb-1">
              保底费+佣金
            </p>
            <p class="text-xs text-gray-400">
              提供固定费用，同时按商品核销量结算
            </p>
          </div>
          <div
            class="border border-gray-200 rounded-xl p-4 text-center cursor-pointer hover:border-orange-400 transition-colors"
            :class="{ 'border-orange-400 bg-orange-50': settlementType === 2 }"
            @click="settlementType = 2"
          >
            <p class="text-[15px] font-medium text-gray-900 mb-1">佣金</p>
            <p class="text-xs text-gray-400">按商品核销量结算</p>
          </div>
        </div>
      </div>

      <!-- 指定带货星推官 -->
      <div class="bg-white rounded-2xl p-5 mt-3 shadow-sm">
        <h2 class="text-base font-medium text-gray-900 mb-4">
          指定带货星推官
        </h2>
        <button
          class="w-full border border-dashed border-gray-300 rounded-xl py-3 flex items-center justify-center text-gray-600 hover:border-orange-400 hover:text-orange-500 transition-colors"
        >
          <i class="fa-solid fa-plus text-sm mr-2"></i>
          <span class="text-sm">添加星推官</span>
        </button>
      </div>

      <!-- 选择星推官 -->
      <div class="bg-white rounded-2xl p-5 mt-3 mb-4 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-base font-medium text-gray-900">选择星推官</h2>
          <button class="flex items-center text-sm text-gray-500">
            <span>上海</span>
            <i class="fa-solid fa-chevron-right text-xs ml-1"></i>
          </button>
        </div>

        <!-- 搜索框 -->
        <div
          class="flex items-center bg-gray-100 rounded-lg px-3 py-2.5 mb-4"
        >
          <i class="fa-solid fa-magnifying-glass text-gray-400 text-sm mr-2"></i>
          <input
            type="text"
            placeholder="搜索唤醒号或用户名"
            class="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
            v-model="searchText"
          />
        </div>

        <!-- 星推官列表 -->
        <div class="space-y-0 -mx-1">
          <div
            v-for="promoter in filteredPromoters"
            :key="promoter.id"
            class="flex items-center py-3 px-1 hover:bg-gray-50 rounded-lg transition-colors"
            @click="toggleSelect(promoter.id)"
          >
            <!-- 复选框 -->
            <div class="mr-3">
              <div
                class="w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer"
                :class="
                  selectedIds.includes(promoter.id)
                    ? 'border-orange-500 bg-orange-500'
                    : 'border-gray-300'
                "
              >
                <i
                  v-if="selectedIds.includes(promoter.id)"
                  class="fa-solid fa-check text-white text-[10px]"
                ></i>
              </div>
            </div>

            <!-- 头像 -->
            <div class="relative mr-3">
              <img
                :src="promoter.avatar"
                :alt="promoter.name"
                class="w-14 h-14 rounded-full object-cover"
              />
              <div
                v-if="promoter.verified"
                class="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center border-2 border-white"
              >
                <i class="fa-solid fa-check text-white text-[10px]"></i>
              </div>
            </div>

            <!-- 信息 -->
            <div class="flex-1">
              <div class="flex items-center mb-1">
                <span class="text-[15px] font-medium text-gray-900 mr-2">{{
                  promoter.name
                }}</span>
                <span class="text-xs text-gray-500 mr-1">{{
                  promoter.location
                }}</span>
                <i
                  v-if="promoter.gender === 'female'"
                  class="fa-solid fa-venus text-pink-400 text-xs mr-2"
                ></i>
                <i
                  v-if="promoter.gender === 'male'"
                  class="fa-solid fa-mars text-blue-400 text-xs mr-2"
                ></i>
                <span class="text-xs text-gray-400"
                  >唤醒号:{{ promoter.wakeupId }}</span
                >
              </div>
              <p class="text-xs text-gray-500">
                粉丝数： {{ promoter.followers }}
              </p>
            </div>

            <!-- 箭头 -->
            <i class="fa-solid fa-chevron-right text-gray-300 text-sm"></i>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部操作栏 -->
    <footer
      class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3 flex items-center justify-between"
    >
      <div class="flex items-center" @click="toggleSelectAll">
        <div
          class="w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer mr-2"
          :class="
            isAllSelected
              ? 'border-orange-500 bg-orange-500'
              : 'border-gray-300'
          "
        >
          <i
            v-if="isAllSelected"
            class="fa-solid fa-check text-white text-[10px]"
          ></i>
        </div>
        <span class="text-sm text-gray-900">全选</span>
      </div>
      <div class="flex items-center space-x-3">
        <span class="text-sm text-gray-500"
          >已选{{ selectedIds.length }}人</span
        >
        <button
          class="bg-orange-500 text-white px-8 py-2.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors"
          @click="confirmSelection"
        >
          确认
        </button>
      </div>
    </footer>

    <!-- 客服悬浮按钮 -->
    <div class="fixed bottom-24 right-4 z-40">
      <button
        class="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg"
      >
        <i class="fa-solid fa-headset text-white text-xl"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarPromotionPlanPage",
  data() {
    return {
      settlementType: 1,
      searchText: "",
      selectedIds: [],
      promoters: [
        {
          id: 1,
          name: "赵教练",
          location: "上海",
          gender: "female",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
          followers: "2.7万",
          wakeupId: "123456789",
          verified: true,
        },
        {
          id: 2,
          name: "张教练",
          location: "上海",
          gender: "male",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
          followers: "10.4万",
          wakeupId: "723456781",
          verified: true,
        },
        {
          id: 3,
          name: "王教练",
          location: "上海",
          gender: "female",
          avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
          followers: "4.2万",
          wakeupId: "823486703",
          verified: true,
        },
        {
          id: 4,
          name: "林设计",
          location: "上海",
          gender: "male",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
          followers: "5.1万",
          wakeupId: "313466659",
          verified: true,
        },
        {
          id: 5,
          name: "咖啡师Echo",
          location: "上海",
          gender: "male",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
          followers: "3.6万",
          wakeupId: "813436421",
          verified: true,
        },
      ],
    };
  },
  computed: {
    filteredPromoters() {
      if (!this.searchText.trim()) {
        return this.promoters;
      }
      const keyword = this.searchText.toLowerCase();
      return this.promoters.filter(
        (p) =>
          p.name.toLowerCase().includes(keyword) ||
          p.wakeupId.includes(keyword)
      );
    },
    isAllSelected() {
      return (
        this.filteredPromoters.length > 0 &&
        this.filteredPromoters.every((p) => this.selectedIds.includes(p.id))
      );
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    toggleSelect(id) {
      const index = this.selectedIds.indexOf(id);
      if (index > -1) {
        this.selectedIds.splice(index, 1);
      } else {
        this.selectedIds.push(id);
      }
    },
    toggleSelectAll() {
      if (this.isAllSelected) {
        this.filteredPromoters.forEach((p) => {
          const index = this.selectedIds.indexOf(p.id);
          if (index > -1) {
            this.selectedIds.splice(index, 1);
          }
        });
      } else {
        this.filteredPromoters.forEach((p) => {
          if (!this.selectedIds.includes(p.id)) {
            this.selectedIds.push(p.id);
          }
        });
      }
    },
    confirmSelection() {
      if (this.selectedIds.length === 0) {
        alert("请选择至少一位星推官");
        return;
      }
      console.log("已选择的星推官:", this.selectedIds);
    },
  },
};
</script>

<style scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}
</style>
