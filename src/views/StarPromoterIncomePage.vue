<template>
  <div class="page flex flex-col h-screen" id="page-team">
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
        <h1 class="text-base font-bold text-gray-900">星推官收入</h1>
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

      <div class="bg-white mt-3 rounded-xl p-4">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-sm font-bold text-gray-900">佣金数据</h2>
          <div class="flex items-center">
            <span class="text-xs text-gray-500">查看全部</span>
            <i class="fa-solid fa-angle-right text-xs text-gray-400 ml-1"></i>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="text-center">
            <p class="text-sm text-gray-600 mb-1">成交金额(元)</p>
            <p class="text-2xl font-bold text-gray-900">0.00</p>
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-600 mb-1">核销金额(元)</p>
            <p class="text-2xl font-bold text-gray-900">0.00</p>
          </div>
        </div>
      </div>

      <!-- 我的服务橱窗 -->
      <div class="bg-white rounded-2xl p-4 mt-3">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-sm font-bold text-gray-900">星推官橱窗</h2>
          <div class="flex items-center text-gray-500 text-sm">
            <span>唤醒联盟</span>
            <i class="fa-solid fa-angle-right ml-1"></i>
          </div>
        </div>

        <!-- 服务列表 -->
        <div class="grid grid-cols-2 gap-3">
          <div class="bg-gray-50 rounded-xl overflow-hidden">
            <img
              src="@images/img-24.jpg"
              alt="游泳教学"
              class="w-full h-32 object-cover"
            />
            <div class="p-2.5">
              <h3 class="text-sm font-medium text-gray-900 line-clamp-1">
                蛙泳/自由泳（体验卡）
              </h3>
              <div class="flex justify-between items-center mt-1">
                <div class="flex items-center">
                  <span class="text-orange-500 font-bold">¥38</span>
                  <span class="text-xs text-gray-500">已售 5680</span>
                </div>
                <button
                  class="bg-orange-500 text-white text-xs py-1 rounded-full mt-1.5 px-2"
                >
                  购买
                </button>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-xl overflow-hidden">
            <img
              src="@images/img-24.jpg"
              alt="游泳教学"
              class="w-full h-32 object-cover"
            />
            <div class="p-2.5">
              <h3 class="text-sm font-medium text-gray-900 line-clamp-1">
                自由泳60分钟（单次卡）
              </h3>
              <div class="flex justify-between items-center mt-1">
                <div class="flex items-center">
                  <span class="text-orange-500 font-bold">¥200</span>
                  <span class="text-xs text-gray-500">已售 890</span>
                </div>
                <button
                  class="bg-orange-500 text-white text-xs py-1 rounded-full px-2"
                >
                  购买
                </button>
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
