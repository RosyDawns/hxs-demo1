<template>
  <div class="page flex flex-col h-screen" id="page-energy-coin">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100 pl-2 pr-10 py-3 flex items-center"
    >
      <button
        class="w-8 h-8 flex items-center justify-center text-gray-600"
        @click="$router.back()"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <div class="flex-1 text-center">
        <h1 class="text-base font-medium text-gray-900">能量币</h1>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto pt-14 px-4 pb-4 bg-[#f5f5f5]">
      <div class="pt-4">
        <!-- 能量币余额区域 -->
        <div class="bg-white rounded-xl overflow-hidden">
          <div class="px-6 py-8">
            <p class="text-center text-gray-600 text-sm mb-3">我的能量币(枚)</p>
            <p class="text-center text-4xl font-bold text-gray-900">198</p>
          </div>
          <div
            class="flex justify-between items-center px-4 py-4 bg-white mt-2 border-t border-gray-100"
          >
            <div class="flex items-center">
              <i class="fa-solid fa-list-ul text-orange-500 mr-2"></i>
              <span class="text-base font-medium text-gray-900">
                能量币明细
              </span>
            </div>
            <i class="fa-solid fa-angle-right text-gray-400"></i>
          </div>
        </div>

        <!-- 微任务赚能量币标题 -->
        <div class="bg-white mt-3 rounded-xl">
          <div class="flex items-center justify-between">
            <div class="px-4 py-5">
              <h2 class="text-sm font-bold text-gray-900">微任务赚能量币</h2>
            </div>
            <div class="flex items-center px-4">
              <span class="text-xs font-medium text-gray-500">
                我的能量树
              </span>
              <i class="fa-solid fa-angle-right text-gray-400"></i>
            </div>
          </div>
          <!-- 任务列表 -->
          <div class="-mt-2">
            <!-- 任务项 -->
            <div
              class="px-4 py-4 border-b border-gray-100 flex justify-between items-center"
            >
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500"
                >
                  <i class="fa-solid fa-calendar-check"></i>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-900">
                    每日登录
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    采撷后可获得5枚能量币
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-1 bg-gray-100 rounded-full text-xs text-gray-500"
              >
                已完成
              </div>
            </div>

            <div
              class="px-4 py-4 border-b border-gray-100 flex justify-between items-center"
            >
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500"
                >
                  <i class="fa-solid fa-heart"></i>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-900">
                    关注唤醒师
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    采撷后可获得5枚能量币
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-1 bg-orange-500 text-white rounded-full text-xs font-medium"
              >
                去关注
              </div>
            </div>

            <div
              class="px-4 py-4 border-b border-gray-100 flex justify-between items-center"
            >
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500"
                >
                  <i class="fa-solid fa-user-plus"></i>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-900">
                    成功邀请好友
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    采撷后可获得5枚能量币
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-1 bg-orange-500 text-white rounded-full text-xs font-medium"
              >
                去看看
              </div>
            </div>

            <div
              class="px-4 py-4 border-b border-gray-100 flex justify-between items-center"
            >
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500"
                >
                  <i class="fa-solid fa-share-alt"></i>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-900">
                    分享服务/内容
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    采撷后可获得5枚能量币
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-1 bg-orange-500 text-white rounded-full text-xs font-medium"
              >
                去参加
              </div>
            </div>

            <div
              class="px-4 py-4 border-b border-gray-100 flex justify-between items-center"
            >
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500"
                >
                  <i class="fa-solid fa-thumbs-up"></i>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-900">
                    为唤醒师打call
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    采撷后可获得5枚能量币
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-1 bg-orange-500 text-white rounded-full text-xs font-medium"
              >
                去打call
              </div>
            </div>

            <div
              class="px-4 py-4 border-b border-gray-100 flex justify-between items-center"
            >
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500"
                >
                  <i class="fa-solid fa-shopping-cart"></i>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-900">
                    购买唤醒师服务
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    采撷后可获得10枚能量币
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-1 bg-orange-500 text-white rounded-full text-xs font-medium"
              >
                去购买
              </div>
            </div>

            <div
              class="px-4 py-4 border-b border-gray-100 flex justify-between items-center"
            >
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500"
                >
                  <i class="fa-solid fa-user-tie"></i>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-900">
                    添加星推官服务
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    采撷后可获得10枚能量币
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-1 bg-orange-500 text-white rounded-full text-xs font-medium"
              >
                去添加
              </div>
            </div>

            <div
              class="px-4 py-4 border-b border-gray-100 flex justify-between items-center"
            >
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500"
                >
                  <i class="fa-solid fa-comment-alt"></i>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-900">
                    发布真实评价
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    采撷后可获得10枚能量币
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-1 bg-orange-500 text-white rounded-full text-xs font-medium"
              >
                去发布
              </div>
            </div>

            <div
              class="px-4 py-4 border-b border-gray-100 flex justify-between items-center"
            >
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500"
                >
                  <i class="fa-solid fa-edit"></i>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-900">
                    发布有效动态
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    采撷后可获得10枚能量币
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-1 bg-orange-500 text-white rounded-full text-xs font-medium"
              >
                去发布
              </div>
            </div>

            <div
              class="px-4 py-4 border-b border-gray-100 flex justify-between items-center"
            >
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500"
                >
                  <i class="fa-solid fa-robot"></i>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-900">
                    使用AI大师匹配
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    采撷后可获得1枚能量币
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-1 bg-orange-500 text-white rounded-full text-xs font-medium"
              >
                去匹配
              </div>
            </div>

            <div
              class="px-4 py-4 border-b border-gray-100 flex justify-between items-center"
            >
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500"
                >
                  <i class="fa-solid fa-users"></i>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-900">
                    醍醐队员注册唤醒师
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    采撷后可获得5枚能量币
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-1 bg-orange-500 text-white rounded-full text-xs font-medium"
              >
                去引荐
              </div>
            </div>

            <div
              class="px-4 py-4 border-b border-gray-100 flex justify-between items-center"
            >
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500"
                >
                  <i class="fa-solid fa-tent"></i>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-900">
                    登录唤醒营
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    采撷后可获得1枚能量币
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-1 bg-orange-500 text-white rounded-full text-xs font-medium"
              >
                去登录
              </div>
            </div>

            <div
              class="px-4 py-4 border-b border-gray-100 flex justify-between items-center"
            >
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500"
                >
                  <i class="fa-solid fa-id-card"></i>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-900">
                    唤唤醒营打卡
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    采撷后可获得10枚能量币
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-1 bg-orange-500 text-white rounded-full text-xs font-medium"
              >
                去打卡
              </div>
            </div>

            <div
              class="px-4 py-4 border-b border-gray-100 flex justify-between items-center"
            >
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500"
                >
                  <i class="fa-solid fa-seedling"></i>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-900">
                    掘一种神秘果实
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    采撷后可获得随机能量币
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-1 bg-orange-500 text-white rounded-full text-xs font-medium"
              >
                去试试
              </div>
            </div>

            <div class="px-4 py-4 flex justify-between items-center">
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500"
                >
                  <i class="fa-solid fa-coins"></i>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-gray-900">
                    充值唤醒豆
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    采撷后可获得20枚能量币
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-1 bg-orange-500 text-white rounded-full text-xs font-medium"
              >
                去充值
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "EnergyCoinPage",
  data() {
    return {
      // 可以根据需要添加数据
    };
  },
  methods: {
    // 可以根据需要添加方法
  },
};
</script>

<style scoped>
/* 可以根据需要添加自定义样式 */
</style>
