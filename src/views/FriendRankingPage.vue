<template>
  <div class="page min-h-screen relative overflow-hidden">
    <!-- 背景装饰 -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    ></div>
    <div
      class="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
    ></div>
    <div
      class="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
    ></div>
    <div
      class="absolute bottom-0 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
    ></div>

    <!-- 内容层 -->
    <div class="relative z-10">
      <!-- 顶部导航栏 -->
      <header class="bg-white/80 backdrop-blur-md sticky top-0 z-20 shadow-sm">
        <div class="flex items-center px-4 py-3">
          <button
            @click="$router.go(-1)"
            class="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          >
            <i class="fas fa-chevron-left text-gray-700 text-lg"></i>
          </button>
          <div class="flex-1 text-center">
            <h1
              class="text-lg font-bold text-gray-800 flex items-center justify-center gap-2"
            >
              <i class="fas fa-trophy text-yellow-500"></i>
              好友排行榜
            </h1>
          </div>
          <div class="w-9"></div>
        </div>
      </header>

      <!-- 前三名领奖台 -->
      <div class="px-4 pt-6 pb-4">
        <div class="flex items-end justify-center gap-2 mb-6">
          <!-- 第二名 -->
          <div
            class="flex flex-col items-center flex-1 animate-fade-in-up animation-delay-200"
            v-if="friendList[1]"
          >
            <div class="relative mb-2">
              <img
                :src="friendList[1].avatar"
                class="w-16 h-16 rounded-full object-cover border-4 border-gray-400 shadow-lg"
                alt="avatar"
              />
              <div
                class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md"
              >
                2
              </div>
            </div>
            <div class="text-xs font-semibold text-gray-700 mb-1">
              {{ friendList[1].name }}
            </div>
            <div class="text-xs text-gray-500 mb-2">
              {{ friendList[1].energy }}
            </div>
            <div
              class="w-full h-20 bg-gradient-to-t from-gray-400 to-gray-300 rounded-t-lg flex items-center justify-center shadow-lg"
            >
              <i class="fas fa-medal text-white text-2xl"></i>
            </div>
          </div>

          <!-- 第一名 -->
          <div
            class="flex flex-col items-center flex-1 animate-fade-in-up"
            v-if="friendList[0]"
          >
            <div class="relative mb-2">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"
              ></div>
              <img
                :src="friendList[0].avatar"
                class="relative w-20 h-20 rounded-full object-cover border-4 border-yellow-400 shadow-xl"
                alt="avatar"
              />
              <div class="absolute -top-2 left-1/2 -translate-x-1/2">
                <i
                  class="fas fa-crown text-yellow-500 text-xl drop-shadow-lg animate-bounce"
                ></i>
              </div>
              <div
                class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                1
              </div>
            </div>
            <div class="text-sm font-bold text-gray-800 mb-1">
              {{ friendList[0].name }}
            </div>
            <div class="text-xs text-yellow-600 font-semibold mb-2">
              {{ friendList[0].energy }}
            </div>
            <div
              class="w-full h-28 bg-gradient-to-t from-yellow-500 to-yellow-400 rounded-t-lg flex items-center justify-center shadow-xl"
            >
              <i class="fas fa-trophy text-white text-3xl"></i>
            </div>
          </div>

          <!-- 第三名 -->
          <div
            class="flex flex-col items-center flex-1 animate-fade-in-up animation-delay-400"
            v-if="friendList[2]"
          >
            <div class="relative mb-2">
              <img
                :src="friendList[2].avatar"
                class="w-16 h-16 rounded-full object-cover border-4 border-orange-400 shadow-lg"
                alt="avatar"
              />
              <div
                class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md"
              >
                3
              </div>
            </div>
            <div class="text-xs font-semibold text-gray-700 mb-1">
              {{ friendList[2].name }}
            </div>
            <div class="text-xs text-gray-500 mb-2">
              {{ friendList[2].energy }}
            </div>
            <div
              class="w-full h-16 bg-gradient-to-t from-orange-400 to-orange-300 rounded-t-lg flex items-center justify-center shadow-lg"
            >
              <i class="fas fa-medal text-white text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- 排行榜列表 -->
      <main class="px-4 pb-20">
        <div
          class="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-4 mb-4"
        >
          <div class="flex items-center justify-between mb-3">
            <h2
              class="text-base font-bold text-gray-800 flex items-center gap-2"
            >
              <i class="fas fa-list-ol text-primary"></i>
              完整排名
            </h2>
            <div class="text-xs text-gray-500">
              共 {{ friendList.length }} 位好友
            </div>
          </div>

          <div class="space-y-2">
            <!-- 好友排行列表 -->
            <div
              v-for="(friend, index) in friendList"
              :key="friend.id"
              class="ranking-card flex items-center p-3 rounded-xl transition-all"
              :class="[
                index === 0
                  ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300'
                  : index === 1
                  ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-300'
                  : index === 2
                  ? 'bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300'
                  : 'bg-white border border-gray-200 hover:shadow-md',
              ]"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              <!-- 排名 -->
              <div
                class="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 relative"
                :class="getRankClass(index)"
              >
                <span v-if="index < 3" class="text-base">{{ index + 1 }}</span>
                <span v-else class="text-sm">{{ index + 1 }}</span>
                <div
                  v-if="index < 3"
                  class="absolute -inset-1 rounded-full animate-ping opacity-20"
                  :class="getRankPingClass(index)"
                ></div>
              </div>

              <!-- 头像 -->
              <div class="relative mr-3 flex-shrink-0">
                <img
                  :src="friend.avatar"
                  class="w-12 h-12 rounded-full object-cover border-2 transition-transform hover:scale-110"
                  :class="[
                    index === 0
                      ? 'border-yellow-400'
                      : index === 1
                      ? 'border-gray-400'
                      : index === 2
                      ? 'border-orange-400'
                      : 'border-gray-200',
                  ]"
                  alt="avatar"
                />
                <div v-if="index < 3" class="absolute -top-1 -right-1">
                  <i
                    class="fas fa-star text-yellow-400 text-xs drop-shadow"
                  ></i>
                </div>
              </div>

              <!-- 用户信息 -->
              <div class="flex-1 min-w-0">
                <div
                  class="font-semibold text-gray-800 flex items-center gap-2 mb-1"
                >
                  <span class="truncate">{{ friend.name }}</span>
                  <i
                    v-if="index < 3"
                    :class="getMedalIcon(index)"
                    class="text-sm"
                  ></i>
                </div>
                <div class="flex items-center gap-2 text-xs">
                  <div class="flex items-center gap-1 text-gray-600">
                    <i class="fas fa-bolt text-yellow-500 text-xs"></i>
                    <span class="font-semibold">{{ friend.energy }}</span>
                  </div>
                  <div
                    v-if="index < friendList.length - 1"
                    class="text-gray-400"
                  >
                    <i class="fas fa-arrow-up text-green-500"></i>
                    {{
                      friendList[index].energy - friendList[index + 1].energy
                    }}
                  </div>
                </div>
              </div>

              <!-- 查看按钮 -->
              <button
                class="px-4 py-2 text-sm font-medium rounded-full transition-all flex-shrink-0 active:scale-95"
                :class="[
                  index === 0
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-md hover:shadow-lg'
                    : index === 1
                    ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-md hover:shadow-lg'
                    : index === 2
                    ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-md hover:shadow-lg'
                    : 'bg-primary/10 text-primary hover:bg-primary/20',
                ]"
                @click="viewFriend(friend)"
              >
                <i class="fas fa-eye mr-1"></i>
                查看
              </button>
            </div>
          </div>
        </div>

        <!-- 空状态提示 -->
        <div v-if="friendList.length === 0" class="text-center py-16">
          <i class="fas fa-user-friends text-gray-300 text-5xl mb-4"></i>
          <p class="text-gray-400">暂无好友排行数据</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "FriendRankingPage",
  setup() {
    const router = useRouter();

    // 模拟好友排行数据
    const friendList = ref([
      {
        id: 1,
        name: "李浩然",
        avatar: "https://i.pravatar.cc/64?img=1",
        energy: 980,
      },
      {
        id: 2,
        name: "王小花",
        avatar: "https://i.pravatar.cc/64?img=2",
        energy: 860,
      },
      {
        id: 3,
        name: "张大山",
        avatar: "https://i.pravatar.cc/64?img=3",
        energy: 750,
      },
      {
        id: 4,
        name: "你",
        avatar: "https://i.pravatar.cc/64?img=40",
        energy: 520,
      },
      {
        id: 5,
        name: "赵小红",
        avatar: "https://i.pravatar.cc/64?img=5",
        energy: 480,
      },
      {
        id: 6,
        name: "刘明",
        avatar: "https://i.pravatar.cc/64?img=6",
        energy: 420,
      },
      {
        id: 7,
        name: "陈思思",
        avatar: "https://i.pravatar.cc/64?img=7",
        energy: 380,
      },
      {
        id: 8,
        name: "周杰",
        avatar: "https://i.pravatar.cc/64?img=8",
        energy: 320,
      },
    ]);

    // 获取排名样式
    const getRankClass = (index) => {
      if (index === 0)
        return "bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg";
      if (index === 1)
        return "bg-gradient-to-br from-gray-400 to-gray-600 shadow-md";
      if (index === 2)
        return "bg-gradient-to-br from-orange-400 to-red-500 shadow-md";
      return "bg-gradient-to-br from-gray-300 to-gray-400";
    };

    // 获取排名动画class
    const getRankPingClass = (index) => {
      if (index === 0) return "bg-yellow-400";
      if (index === 1) return "bg-gray-400";
      if (index === 2) return "bg-orange-400";
      return "";
    };

    // 获取奖牌图标
    const getMedalIcon = (index) => {
      if (index === 0) return "fas fa-crown text-yellow-500";
      if (index === 1) return "fas fa-medal text-gray-500";
      if (index === 2) return "fas fa-medal text-orange-500";
      return "";
    };

    // 查看好友详情，跳转到/call页面
    const viewFriend = (friend) => {
      console.log("查看好友:", friend.name);
      router.push("/call");
    };

    return {
      friendList,
      getRankClass,
      getRankPingClass,
      getMedalIcon,
      viewFriend,
    };
  },
};
</script>

<style scoped>
.page {
  padding-bottom: env(safe-area-inset-bottom);
}

/* 动画效果 */
@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -50px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(50px, 50px) scale(1.05);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.ranking-card {
  animation: slide-in-right 0.4s ease-out forwards;
  opacity: 0;
  animation-fill-mode: forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* 悬停效果 */
.ranking-card:hover {
  transform: translateX(-2px);
}
</style>
