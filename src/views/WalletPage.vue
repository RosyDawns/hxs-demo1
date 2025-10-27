<template>
  <div class="page flex flex-col h-screen bg-gray-50" id="page-wallet">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 px-4 py-3 flex items-center"
    >
      <button class="text-black nav-action" @click="$router.back()">
        <i class="fa-solid fa-chevron-left text-lg"></i>
      </button>
      <h1 class="ml-2 text-black font-bold text-lg">**明的钱包</h1>

      <div
        style="font-size: 10px"
        class="ml-2 text-black border border-gray-300 rounded-full px-2 py-0.5 nav-action"
        @click="$router.push('/identity-info')"
      >
        身份信息管理
      </div>
    </header>

    <main class="flex-1 overflow-y-auto pt-16 pb-4">
      <!-- 余额卡片 -->
      <div
        class="bg-gradient-to-r from-orange-400 to-orange-500 mx-4 rounded-2xl p-5 text-white shadow-lg"
      >
        <div class="flex items-center mb-2">
          <div class="text-sm">总资产（元）</div>
          <div
            class="rounded-full px-2 py-0.5"
            style="font-size: 10px; background-color: rgba(255, 255, 255, 0.2)"
          >
            <i class="fa-solid fa-shield-alt mr-1"></i>
            <span>安全支付保障</span>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="text-4xl font-bold">98.10</div>
          <span class="fa-solid fa-angle-right text-white"></span>
        </div>

        <!-- 资产明细 -->
        <div class="grid grid-cols-2 gap-4 mt-4">
          <div class="py-2">
            <div class="text-xs text-white mb-1">我的零钱</div>
            <div class="flex items-center">
              <div class="text-xl font-bold">10.80</div>
              <i class="fa-solid fa-angle-right text-white"></i>
            </div>
          </div>
          <div class="py-2">
            <div class="text-xs text-white mb-1">我的收入</div>
            <div class="flex items-center">
              <div class="text-xl font-bold">02.50</div>
              <i class="fa-solid fa-angle-right text-white"></i>
            </div>
          </div>
        </div>

        <!-- 虚拟货币 -->
        <div class="grid grid-cols-3 gap-5 border-t border-orange-400">
          <div class="pt-4">
            <div class="text-xs text-white mb-1">能量币</div>
            <div class="flex items-center">
              <div class="text-xl font-bold">12700</div>
              <i class="fa-solid fa-angle-right text-white"></i>
            </div>
          </div>
          <div class="pt-4">
            <div class="text-xs text-white mb-1">唤醒豆</div>
            <div class="flex items-center">
              <div class="text-xl font-bold">1830</div>
              <i class="fa-solid fa-angle-right text-white"></i>
            </div>
          </div>
          <div class="pt-4">
            <div class="text-xs text-white mb-1">随心推</div>
            <div class="flex items-center">
              <div class="text-xl font-bold">10273</div>
              <i class="fa-solid fa-angle-right text-white"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- 账单 -->
      <div class="bg-white mt-4 mx-4 rounded-2xl overflow-hidden">
        <div
          class="flex items-center justify-between p-4 border-b border-gray-100"
        >
          <div class="text-sm flex items-center">
            <div class="font-bold mr-2">账单</div>
            <div class="text-gray-500">唤醒兽储值到账 ¥26.90 90天前</div>
          </div>
          <button class="text-xs text-gray-500 nav-action">
            全部 <i class="fa-solid fa-angle-right ml-0.5"></i>
          </button>
        </div>
      </div>

      <!-- 做任务赚能量币 -->
      <div class="bg-white mt-4 mx-4 rounded-2xl overflow-hidden">
        <div
          class="flex items-center justify-between p-4 border-b border-gray-100"
        >
          <h3 class="text-sm font-bold">做任务赚能量币</h3>
          <button class="text-xs text-gray-500 nav-action">
            更多 <i class="fa-solid fa-angle-right ml-1"></i>
          </button>
        </div>

        <!-- 任务列表 -->
        <div class="divide-y divide-gray-100">
          <div
            v-for="task in tasks"
            :key="task.id"
            class="flex items-center justify-between p-4"
          >
            <div class="flex items-center">
              <div
                class="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mr-3"
              >
                <i :class="task.icon + ' text-orange-500'"></i>
              </div>
              <div>
                <p class="text-sm font-medium">{{ task.title }}</p>
                <p class="text-xs text-gray-400 mt-1">{{ task.description }}</p>
              </div>
            </div>
            <button
              class="text-xs px-3 py-1.5 rounded-full font-medium nav-action"
              :class="
                task.status === '已完成'
                  ? 'bg-gray-100 text-gray-500'
                  : 'bg-orange-100 text-orange-500'
              "
              :disabled="task.status === '已完成'"
              @click="handleTaskClick(task)"
            >
              {{ task.status === "已完成" ? "已完成" : task.action }}
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "WalletPage",
  components: {},
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "每日登录",
          description: "登录后可获取能量币",
          icon: "fa-solid fa-calendar-check",
          status: "已完成",
          action: "去登录",
        },
        {
          id: 2,
          title: "关注唤醒狮",
          description: "关注后可领取能量币",
          icon: "fa-solid fa-user-plus",
          status: "未完成",
          action: "去关注",
        },
        {
          id: 3,
          title: "成功邀请好友",
          description: "成功后可获取能量币",
          icon: "fa-solid fa-user-group",
          status: "未完成",
          action: "去看看",
        },
        {
          id: 4,
          title: "分享服务/内容",
          description: "分享后可获取能量币",
          icon: "fa-solid fa-share-alt",
          status: "未完成",
          action: "去参加",
        },
        {
          id: 5,
          title: "为唤醒狮打Call",
          description: "购买后可获取能量币",
          icon: "fa-solid fa-phone",
          status: "未完成",
          action: "去打Call",
        },
        {
          id: 6,
          title: "购买唤醒狮服务",
          description: "购买后可获取能量币",
          icon: "fa-solid fa-shopping-cart",
          status: "未完成",
          action: "去购买",
        },
        {
          id: 7,
          title: "添加推荐服务",
          description: "添加后可获取能量币",
          icon: "fa-solid fa-star-plus",
          status: "未完成",
          action: "去添加",
        },
        {
          id: 8,
          title: "发布真实评价",
          description: "发布后可获取能量币",
          icon: "fa-solid fa-comment-dots",
          status: "未完成",
          action: "去发布",
        },
        {
          id: 9,
          title: "发布有效动态",
          description: "发布后可获取能量币",
          icon: "fa-solid fa-pen",
          status: "未完成",
          action: "去发布",
        },
        {
          id: 10,
          title: "使用AI大狮兄匹配",
          description: "使用后可获取能量币",
          icon: "fa-solid fa-robot",
          status: "未完成",
          action: "去匹配",
        },
        {
          id: 11,
          title: "唤醒狮队员注册唤醒狮",
          description: "来体验可获取能量币",
          icon: "fa-solid fa-certificate",
          status: "未完成",
          action: "去前置",
        },
        {
          id: 12,
          title: "登录唤醒营",
          description: "登录后可获取能量币",
          icon: "fa-solid fa-campground",
          status: "未完成",
          action: "去登录",
        },
        {
          id: 13,
          title: "唤醒营打卡",
          description: "来体验可获取能量币",
          icon: "fa-solid fa-check-circle",
          status: "未完成",
          action: "去打卡",
        },
        {
          id: 14,
          title: "摇一摇神秘果实",
          description: "摇摆后可获取能量币",
          icon: "fa-solid fa-hand",
          status: "未完成",
          action: "去试试",
        },
        {
          id: 15,
          title: "充值唤醒豆",
          description: "充值后可获取能量币",
          icon: "fa-solid fa-coins",
          status: "未完成",
          action: "去充值",
        },
      ],
    };
  },
  methods: {
    handleTaskClick(task) {
      alert(task.title);
      if (task.status !== "已完成") {
        // 根据任务类型执行不同操作
        // switch (task.action) {
        //   case "去关注":
        //     this.$router.push("/follow");
        //     break;
        //   case "去打Call":
        //     this.$router.push("/call");
        //     break;
        //   case "去购买":
        //     this.$router.push("/store");
        //     break;
        //   case "去发布":
        //     this.$router.push("/publish-activity");
        //     break;
        //   case "去匹配":
        //     this.$router.push("/ai-assistant");
        //     break;
        //   case "去充值":
        //     // 充值功能
        //     break;
        //   case "去前置":
        //     this.$router.push("/register");
        //     break;
        //   case "去登录":
        //     this.$router.push("/login");
        //     break;
        //   case "去打卡":
        //     this.$router.push("/daily");
        //     break;
        //   case "去试试":
        //     this.$router.push("/energy-tree");
        //     break;
        //   default:
        //     console.log("执行任务:", task.title);
        // }
      }
    },
  },
};
</script>

<style scoped>
.page {
  background-color: #f5f5f5;
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}
</style>
