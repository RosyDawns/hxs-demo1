<template>
  <div class="pb-4 pt-0">
    <div class="px-4">
      <h3 class="text-xl font-bold text-center mb-2">肠胃通，减重才轻松</h3>
      <!-- 代谢打卡宣传卡片 -->
      <div
        class="bg-gradient-to-r from-cyan-300 to-blue-400 rounded-xl p-6 text-white mb-4"
      >
        <div class="flex items-center justify-center mb-4">
          <div class="text-6xl">🚽</div>
        </div>

        <div class="mt-4 text-center">
          <p class="text-sm">加强膳食纤维</p>
          <p class="text-sm">每日多喝水</p>
        </div>
      </div>
    </div>

    <!-- 代谢状态选项 -->
    <div class="px-4 my-4 pt-3 border-t border-b border-gray-100">
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div
          v-for="status in metabolismStatuses"
          :key="status.value"
          @click="selectStatus(status.value)"
          :class="[
            selectedStatus === status.value ? ' scale-105' : ' opacity-70',
            selectedStatus === status.value ? '' : '',
          ]"
          class="py-3 flex flex-col items-center nav-action cursor-pointer transition-all"
        >
          <div
            :class="
              selectedStatus === status.value ? 'bg-orange-100' : 'bg-gray-100'
            "
            class="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-2 transition-colors"
          >
            {{ status.emoji }}
          </div>
          <span
            :class="
              selectedStatus === status.value
                ? 'text-gray-800 font-bold'
                : 'text-gray-600'
            "
            class="text-sm"
          >
            {{ status.label }}
          </span>
        </div>
      </div>
    </div>

    <!-- 动态按钮 -->
    <div class="px-4">
      <div class="flex gap-3">
        <button
          @click="submitCheckIn('private')"
          :disabled="!canSubmit"
          :class="
            canSubmit
              ? 'bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700'
              : 'bg-gray-300 cursor-not-allowed'
          "
          class="flex-1 text-white py-3 rounded-full font-bold transition-all"
        >
          私密保存
        </button>
        <button
          @click="submitCheckIn('public')"
          :disabled="!canSubmit"
          :class="
            canSubmit
              ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          "
          class="flex-1 py-3 rounded-full font-bold transition-all"
        >
          同步动态
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "MetabolismCheckIn",
  emits: ["submit"],
  setup(props, { emit }) {
    const metabolismStatuses = [
      { value: "smooth", label: "顺畅", emoji: "💧" },
      { value: "fair", label: "意犹未尽", emoji: "😐" },
      { value: "difficult", label: "困难", emoji: "😣" },
    ];

    const selectedStatus = ref("smooth");
    const metabolismCount = ref(1);
    const metabolismTime = ref(new Date().toTimeString().slice(0, 5));
    const notes = ref("");
    const waterIntake = ref(1500);

    // 模拟本周数据
    const weekMetabolismStats = ref([
      { day: "周一", count: 2 },
      { day: "周二", count: 1 },
      { day: "周三", count: 2 },
      { day: "周四", count: 1 },
      { day: "周五", count: 2 },
      { day: "周六", count: 1 },
      { day: "周日", count: 0 },
    ]);

    const canSubmit = computed(() => {
      return selectedStatus.value && metabolismCount.value > 0;
    });

    const selectStatus = (status) => {
      selectedStatus.value = status;
    };

    const incrementCount = () => {
      if (metabolismCount.value < 10) {
        metabolismCount.value++;
      }
    };

    const decrementCount = () => {
      if (metabolismCount.value > 0) {
        metabolismCount.value--;
      }
    };

    const addWater = () => {
      waterIntake.value += 250;
    };

    const submitCheckIn = (visibility) => {
      if (!canSubmit.value) return;

      const checkInData = {
        type: "metabolism",
        status: selectedStatus.value,
        count: metabolismCount.value,
        time: metabolismTime.value,
        waterIntake: waterIntake.value,
        notes: notes.value,
        visibility,
        timestamp: new Date().toISOString(),
      };

      emit("submit", checkInData);

      // 重置表单
      resetForm();
    };

    const resetForm = () => {
      selectedStatus.value = "";
      metabolismCount.value = 1;
      notes.value = "";
    };

    return {
      metabolismStatuses,
      selectedStatus,
      metabolismCount,
      metabolismTime,
      notes,
      waterIntake,
      weekMetabolismStats,
      canSubmit,
      selectStatus,
      incrementCount,
      decrementCount,
      addWater,
      submitCheckIn,
    };
  },
};
</script>
