<template>
  <div class="page flex flex-col h-screen" id="page-team">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100 px-4 py-3 flex items-center"
    >
      <button
        class="w-8 h-8 flex items-center justify-center text-gray-600"
        @click="$router.back()"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <div class="flex-1 text-center">
        <h1 class="text-base font-bold text-gray-900">醒狮团队收入</h1>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto pt-14 pb-4 px-4 bg-[#f3f3f3]">
      <!-- 收入到账规则提示 -->
      <div class="mt-4 rounded-lg flex items-center">
        <i class="fa-solid fa-circle-info text-orange-400 mr-2 text-xs"></i>
        <p class="text-xs text-gray-600 flex-1 flex-wrap">
          收入到账时间规则调整，收入将在顾客核销后的T+7内到账<span
            class="text-xs text-orange-500"
          >
            收入结算规则详情
          </span>
        </p>
      </div>

      <!-- 账户余额区域 -->
      <div class="bg-white mt-3 rounded-2xl p-5">
        <div class="flex items-end justify-between">
          <div>
            <p class="text-sm text-gray-600 flex items-center mb-1">
              账户余额(元)
              <i
                class="fa-solid fa-circle-info text-xs text-gray-400 ml-1 mr-2"
              ></i>
            </p>
            <p class="text-3xl font-bold text-gray-900">0</p>
          </div>
          <button
            class="bg-orange-500 text-white text-xs font-medium px-4 py-1 rounded-full nav-action shadow-md"
          >
            去提现
          </button>
        </div>
        <div class="flex items-center py-3">
          <div class="flex items-center">
            <p class="text-sm text-gray-600">入账中(元)</p>
            <i
              class="fa-solid fa-circle-info text-xs text-gray-400 ml-1 mr-2"
            ></i>
          </div>
          <div class="flex items-center">
            <p class="text-sm font-bold text-gray-900">0.00</p>
            <i class="fa-solid fa-angle-right text-xs text-gray-400 ml-1"></i>
          </div>
        </div>

        <div
          class="flex items-center justify-between py-3 border-t border-gray-100"
        >
          <div class="flex items-center">
            <i class="fa-solid fa-file-invoice-dollar text-orange-500 mr-3"></i>
            <p class="text-sm text-gray-900">收支记录</p>
          </div>
          <i class="fa-solid fa-angle-right text-xs text-gray-400"></i>
        </div>
        <div
          class="flex items-center justify-between pt-3 border-t border-gray-100"
        >
          <div class="flex items-center">
            <i class="fa-solid fa-hand-holding-dollar text-orange-500 mr-3"></i>
            <p class="text-sm text-gray-900">佣金明细</p>
          </div>
          <i class="fa-solid fa-angle-right text-xs text-gray-400"></i>
        </div>
      </div>

      <!-- 佣金数据 -->
      <div class="bg-white mt-3 rounded-xl p-4">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-sm font-bold text-gray-900">佣金数据</h2>
          <div class="flex items-center nav-action" @click="$router.push('/business-admin')">
            <span class="text-xs text-gray-500">查看全部</span>
            <i class="fa-solid fa-angle-right text-xs text-gray-400 ml-1"></i>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="text-center">
            <p class="text-sm text-gray-600 mb-1">成交额(元)</p>
            <p class="text-2xl font-bold text-gray-900">0.00</p>
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-600 mb-1">核销佣金(元)</p>
            <p class="text-2xl font-bold text-gray-900">0.00</p>
          </div>
        </div>
      </div>

      <!-- 我的团队 -->
      <div class="bg-white mt-3 rounded-xl px-4 pt-4">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-sm font-bold text-gray-900">我的团队</h2>
          <div class="flex items-center nav-action" @click="$router.push('/my-promotion')">
            <span class="text-xs text-gray-500">分享推广</span>
            <i class="fa-solid fa-angle-right text-xs text-gray-400 ml-1"></i>
          </div>
        </div>

        <!-- 团队人数 -->
        <div class="flex mb-4 space-x-3">
          <div
            class="flex-1 text-center bg-yellow-50 text-orange-500 text-xs font-medium px-3 py-1.5 rounded-full"
          >
            一级团队: 38人
          </div>
          <div
            class="flex-1 text-center bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full"
          >
            二级团队: 398人
          </div>
        </div>

        <!-- 筛选栏 -->
        <div
          class="flex items-center justify-between border-b border-gray-100 pb-3 mb-3"
        >
          <div class="flex-shrink-0 text-xs text-orange-500 mr-5 font-medium">
            全部
          </div>
          <div
            class="flex-shrink-0 text-xs text-gray-600 mr-5 flex items-center"
          >
            青浦区
            <i class="fa-solid fa-chevron-down text-xs ml-1"></i>
          </div>
          <div
            class="flex-shrink-0 text-xs text-gray-600 mr-5 flex items-center"
          >
            分类
            <i class="fa-solid fa-chevron-down text-xs ml-1"></i>
          </div>
          <div
            class="flex-shrink-0 text-xs text-gray-600 mr-5 flex items-center"
          >
            筛选
            <i class="fa-solid fa-chevron-down text-xs ml-1"></i>
          </div>
          <div class="flex-shrink-0 text-xs text-gray-600 flex items-center">
            按时间
            <i class="fa-solid fa-chevron-down text-xs ml-1"></i>
          </div>
        </div>

        <!-- 团队成员列表 -->
        <div class="space-y-4">
          <div
            v-for="(member, index) in teamMembers"
            :key="member.id"
            class="flex pb-4 border-b border-gray-100"
            :class="{ 'border-b-0': index === teamMembers.length - 1 }"
          >
            <img
              src="@images/img-27.jpg"
              alt=""
              class="w-18 h-18 rounded-lg object-cover"
            />
            <div class="ml-3 flex-1">
              <div class="flex items-center">
                <h3 class="text-sm font-bold text-gray-900 mr-2">
                  {{ member.name }}
                </h3>
                <span
                  class="text-xs text-orange-500 bg-orange-50 px-2 py-0.5 rounded"
                >
                  {{ member.title }}
                </span>
              </div>
              <div class="flex items-center mt-0.5">
                <div class="flex items-center mr-2">
                  <i
                    v-for="n in 5"
                    :key="n"
                    class="fa-solid fa-star text-yellow-400 text-xs"
                  ></i>
                </div>
                <span class="text-xs text-gray-600 mr-2">
                  {{ member.rating }}
                </span>
                <span class="text-xs text-gray-600 mr-2">
                  {{ member.orderCount }}条
                </span>
                <span class="text-xs text-orange-500">¥{{ member.price }}</span>
              </div>
              <div class="flex items-center justify-between flex-warp mt-0.5">
                <p class="text-gray-500" style="font-size: 10px">
                  {{ member.location }}
                </p>
                <span class="text-gray-500" style="font-size: 10px">
                  {{ member.distance }}
                </span>
              </div>
              <div class="flex items-center mt-1">
                <span
                  style="font-size: 10px"
                  class="text-gray-500 mr-1 px-1.5 rounded-full bg-gray-100"
                >
                  {{ member.school }}
                </span>
                <span
                  style="font-size: 10px"
                  class="text-gray-500 mr-1 px-1.5 rounded-full bg-gray-100"
                >
                  {{ member.department }}
                </span>
                <span
                  style="font-size: 10px"
                  class="text-gray-500 mr-1 px-1.5 rounded-full bg-gray-100"
                >
                  {{ member.skill }}
                </span>
                <span
                  style="font-size: 10px"
                  class="text-gray-500 px-1.5 rounded-full bg-gray-100"
                >
                  {{ member.serviceType }}
                </span>
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
  name: "TeamPage",
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: "李教练",
          title: "游泳唤醒师",
          rating: 4.8,
          orderCount: 185,
          price: 98.0,
          location: "徐泾镇叶联路333弄金地天街1601",
          school: "985大学",
          department: "体育硕士",
          skill: "技能派",
          serviceType: "到店服务",
          distance: "896m",
          avatar:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='48' fill='%23F0F0F0' stroke='%23E0E0E0' stroke-width='1'/%3E%3Ctext x='50' y='55' font-family='Arial' font-size='14' text-anchor='middle' fill='%23999'%3E李教练%3C/text%3E%3C/svg%3E",
        },
        {
          id: 2,
          name: "赵教练",
          title: "游泳唤醒师",
          rating: 4.9,
          orderCount: 216,
          price: 96.0,
          location: "青浦区华新镇新府中路1399号",
          school: "211大学",
          department: "体育教育",
          skill: "学院派",
          serviceType: "到家服务",
          distance: "2.1km",
          avatar:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='48' fill='%23F0F0F0' stroke='%23E0E0E0' stroke-width='1'/%3E%3Ctext x='50' y='55' font-family='Arial' font-size='14' text-anchor='middle' fill='%23999'%3E赵教练%3C/text%3E%3C/svg%3E",
        },
      ],
    };
  },
  methods: {
    // 可以根据需要添加方法
  },
};
</script>

<style scoped>
/* 自定义样式，去除滚动条 */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
