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
      <div class="flex items-center justify-between mb-2">
        <h3 class="font-bold text-base text-dark">唤醒任务</h3>
        <div class="flex items-center">
          <span class="text-sm text-gray-500 mr-2">今日唤醒分</span>
          <span class="text-[40px] font-bold text-primary leading-none">
            {{ todayScore }}
          </span>
        </div>
        <div class="flex items-center" @click="$router.push('/checkin')">
          <span>去打卡</span>
          <i class="fa-solid fa-angle-right text-xs text-primary ml-0.5"></i>
        </div>
      </div>

      <!-- 打卡进度圈 -->
      <div class="relative flex items-center justify-center mt-4">
        <img src="@images/card-icon.png" alt="" />
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
