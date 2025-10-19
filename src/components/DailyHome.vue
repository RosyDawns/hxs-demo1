<template>
  <div class="daily-home bg-gray-50">
    <!-- 目标体重卡片 -->
    <div class="bg-white px-5 pt-6 pb-5">
      <div class="flex items-start gap-2 mb-4">
        <div class="flex-1 flex flex-col items-center justify-center">
          <div class="flex items-baseline">
            <span class="text-[50px] font-bold text-primary leading-none">
              {{ targetWeight }}
            </span>
            <span class="text-xl font-medium text-dark ml-1">kg</span>
          </div>
          <div class="text-dark text-base mt-2 text-center">目标体重</div>
        </div>
        <div
          class="flex-1 flex flex-col items-center justify-around h-full pt-1"
        >
          <img
            src="@/assets/images/img-12.jpg"
            alt="用户头像"
            class="w-10 h-10 rounded-full mb-2"
          />
          <div class="text-sm flex items-baseline">
            <span class="text-gray-500 leading-none">剩余唤醒周期：</span>
            <span class="text-primary font-bold text-2xl mx-1 leading-none">
              {{ remainingDays }}
            </span>
            <span class="text-gray-500 leading-none">天</span>
          </div>
        </div>
      </div>

      <!-- 体重记录 -->
      <div class="flex items-center gap-2 mb-4">
        <div class="flex-1">
          <div class="bg-gray-50 rounded-full px-4 py-3">
            <div class="text-sm text-dark">上次体重：{{ lastWeight }}kg</div>
          </div>
          <div class="text-sm text-primary font-medium text-center">
            {{ lastWeightDate }}
          </div>
        </div>
        <div class="flex-1">
          <div class="bg-gray-50 rounded-full px-4 py-3">
            <div class="text-sm text-dark">今日体重：____ kg</div>
          </div>
          <div class="text-sm text-primary font-medium">&nbsp;</div>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="flex items-center gap-2">
        <button
          class="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2.5 rounded-full text-base font-medium shadow-sm"
          @click="showWeightChart"
        >
          体重曲线图
        </button>
        <button
          class="flex-1 bg-gray-50 text-dark py-2.5 rounded-full text-base font-medium"
          @click="manualRecord"
        >
          手动记录
        </button>
      </div>
    </div>

    <!-- 减脂宣言 -->
    <div class="bg-white mt-2.5 px-5 py-4">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-bold text-base text-dark">减脂宣言</h3>
        <button
          class="text-sm flex items-center"
          @click="showDeclarationHistory"
        >
          历史宣言
          <i class="fa-solid fa-angle-right ml-0.5 text-primary text-xs"></i>
        </button>
      </div>
      <div class="flex items-center">
        <div
          class="w-10 h-10 mr-2 rounded-full shadow-sm flex flex-col items-center justify-center"
          style="font-size: 10px"
        >
          <div class="text-gray-500 leading-none">今日</div>
          <div class="text-gray-500 leading-none">宣言</div>
        </div>
        <div class="flex-1">
          <input
            v-model="todayDeclaration"
            type="text"
            placeholder="我要瘦10斤"
            class="w-full bg-white shadow-sm rounded-full px-4 h-10 border-none outline-none text-sm text-gray-400"
          />
        </div>
        <button
          class="bg-gradient-to-r from-orange-400 to-orange-500 text-white w-10 h-10 rounded-full text-base font-bold ml-2 shadow-sm flex items-center justify-center"
          @click="submitDeclaration"
        >
          ok
        </button>
      </div>
    </div>

    <!-- 唤醒任务 -->
    <div class="bg-white mt-2.5 px-5 pt-4 pb-8">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-base text-dark">唤醒任务</h3>
        <div class="flex items-center">
          <span class="text-sm text-gray-500 mr-2">今日唤醒分</span>
          <span class="text-[40px] font-bold text-primary leading-none">
            {{ todayScore }}
          </span>
        </div>
        <div class="flex items-center" @click="$router.push('/checkin')">
          <span>去打卡</span>
          <i class="fa-solid fa-angle-right text-xs text-gray-400 ml-1"></i>
        </div>
      </div>

      <!-- 打卡进度圈 -->
      <div
        class="relative flex items-center justify-center"
        style="height: 340px; margin-top: 20px"
      >
        <!-- SVG 圆环 -->
        <svg
          class="absolute"
          width="220"
          height="220"
          viewBox="0 0 220 220"
          style="top: 60px"
        >
          <defs>
            <linearGradient
              id="gradient-yellow"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" style="stop-color: #ffb800; stop-opacity: 1" />
              <stop
                offset="100%"
                style="stop-color: #ff9500; stop-opacity: 1"
              />
            </linearGradient>
            <linearGradient
              id="gradient-pink"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" style="stop-color: #ff66b8; stop-opacity: 1" />
              <stop
                offset="100%"
                style="stop-color: #ff3399; stop-opacity: 1"
              />
            </linearGradient>
          </defs>

          <!-- 背景圆环 -->
          <circle
            cx="110"
            cy="110"
            r="85"
            fill="none"
            stroke="#E8E8E8"
            stroke-width="14"
          />

          <!-- 进度圆环 -->
          <circle
            cx="110"
            cy="110"
            r="85"
            fill="none"
            stroke="url(#gradient-yellow)"
            stroke-width="14"
            stroke-dasharray="534"
            :stroke-dashoffset="534 * 0.2"
            transform="rotate(-90 110 110)"
            stroke-linecap="round"
          />
          <circle
            cx="110"
            cy="110"
            r="85"
            fill="none"
            stroke="url(#gradient-pink)"
            stroke-width="14"
            stroke-dasharray="534"
            :stroke-dashoffset="534 * 0.6"
            transform="rotate(90 110 110)"
            stroke-linecap="round"
          />
        </svg>

        <!-- 中心文字 -->
        <div class="absolute" style="top: 130px">
          <span class="text-[56px] font-bold text-dark leading-none">80%</span>
        </div>

        <!-- 打卡标签 - 饮食打卡 (左上) -->
        <div
          class="absolute cursor-pointer"
          style="top: 10px; left: 10px"
          @click="handleCheckIn('diet')"
        >
          <div
            class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-1.5 rounded-full text-xs font-medium shadow-md"
          >
            饮食打卡
          </div>
          <div
            class="bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full text-xs mt-1.5 text-center"
          >
            已打卡
          </div>
        </div>

        <!-- 打卡标签 - 心情打卡 (右上) -->
        <div
          class="absolute cursor-pointer"
          style="top: 10px; right: 10px"
          @click="handleCheckIn('mood')"
        >
          <div
            class="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-1.5 rounded-full text-xs font-medium shadow-md"
          >
            心情打卡
          </div>
          <div
            class="bg-pink-50 text-pink-400 px-3 py-1 rounded-full text-xs mt-1.5 text-center"
          >
            已打卡
          </div>
        </div>

        <!-- 打卡标签 - 运动打卡 (左下) -->
        <div
          class="absolute cursor-pointer"
          style="bottom: 10px; left: 10px"
          @click="handleCheckIn('exercise')"
        >
          <div
            class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-1.5 rounded-full text-xs font-medium shadow-md"
          >
            运动打卡
          </div>
          <div
            class="bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full text-xs mt-1.5 text-center"
          >
            已打卡
          </div>
        </div>

        <!-- 打卡标签 - 睡眠打卡 (左下位置，调整) -->
        <div
          class="absolute cursor-pointer"
          style="bottom: 70px; left: 0"
          @click="handleCheckIn('sleep')"
        >
          <div
            class="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-medium shadow-md"
          >
            睡眠打卡
          </div>
          <div
            class="bg-orange-50 text-orange-500 px-3 py-1 rounded-full text-xs mt-1.5 text-center"
          >
            已打卡
          </div>
        </div>

        <!-- 打卡标签 - 代谢打卡 (右下) -->
        <div
          class="absolute cursor-pointer"
          style="bottom: 70px; right: 0"
          @click="handleCheckIn('metabolism')"
        >
          <div
            class="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-1.5 rounded-full text-xs font-medium shadow-md"
          >
            代谢打卡
          </div>
          <div
            class="bg-gray-100 text-gray-400 px-3 py-1 rounded-full text-xs mt-1.5 text-center"
          >
            未打卡
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DailyHome",
  data() {
    return {
      targetWeight: 49.5,
      remainingDays: 14,
      lastWeight: 80,
      lastWeightDate: "2025-10-10",
      todayDeclaration: "",
      todayScore: 80,
    };
  },
  methods: {
    showDeclarationHistory() {
      console.log("显示历史宣言");
      // TODO: 跳转到历史宣言页面
      // this.$router.push('/declaration-history')
    },
    showWeightChart() {
      console.log("显示体重曲线图");
      // TODO: 跳转到体重曲线图页面
      // this.$router.push('/weight-chart')
    },
    manualRecord() {
      console.log("手动记录体重");
      // TODO: 打开手动记录弹窗或跳转页面
      // this.$router.push('/manual-weight-record')
    },
    submitDeclaration() {
      if (!this.todayDeclaration.trim()) {
        console.log("请输入宣言内容");
        return;
      }
      console.log("提交减脂宣言:", this.todayDeclaration);
      // TODO: 调用API提交宣言
      // this.$toast.success('宣言提交成功！')
    },
    handleCheckIn(type) {
      console.log("打卡类型:", type);
      const typeNames = {
        diet: "饮食打卡",
        mood: "心情打卡",
        exercise: "运动打卡",
        sleep: "睡眠打卡",
        metabolism: "代谢打卡",
      };
      // TODO: 跳转到对应的打卡页面
      // this.$router.push(`/check-in/${type}`)
      console.log(`跳转到${typeNames[type]}页面`);
    },
  },
};
</script>
