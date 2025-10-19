<template>
  <div class="pb-4 pt-0">
    <div class="px-4">
      <div class="text-xl font-bold mb-2 text-center">
        你的每一滴汗水都是脂肪的眼泪
      </div>

      <!-- 运动打卡宣传卡片 -->
      <div class="rounded-xl overflow-hidden my-4">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600"
          alt="运动"
          class="w-full h-48 object-cover"
        />
      </div>
    </div>

    <div class="px-4 my-4 py-3 border-t border-b border-gray-100">
      <!-- 运动类型选择 -->
      <div class="grid grid-cols-4 gap-3">
        <div
          v-for="exercise in exerciseTypes"
          :key="exercise.type"
          @click="selectExerciseType(exercise.type)"
          :class="
            selectedExerciseType === exercise.type ? 'ring-2 ring-primary' : ''
          "
          class="flex flex-col items-center nav-action cursor-pointer transition-all"
        >
          <div
            :class="exercise.bgColor"
            class="w-16 h-16 rounded-lg flex items-center justify-center mb-1"
          >
            <i
              :class="exercise.icon"
              class="text-2xl"
              :style="{ color: exercise.color }"
            ></i>
          </div>
          <span class="text-xs text-gray-600">{{ exercise.label }}</span>
        </div>
      </div>
    </div>

    <div class="px-4">
      <!-- 已选择的运动信息 -->
      <div
        v-if="selectedExerciseType"
        class="bg-white rounded-xl p-4 mb-4 card-shadow"
      >
        <h4 class="font-bold text-sm mb-3">{{ getExerciseTypeLabel() }}</h4>

        <!-- 运动详情输入 -->
        <div class="space-y-3">
          <div>
            <label class="text-xs text-gray-500 mb-1 block">运动名称</label>
            <input
              v-model="exerciseName"
              type="text"
              :placeholder="getExercisePlaceholder()"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-xs text-gray-500 mb-1 block"
                >时长 (分钟)</label
              >
              <input
                v-model.number="duration"
                type="number"
                placeholder="30"
                @input="calculateCalories"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label class="text-xs text-gray-500 mb-1 block"
                >消耗 (kcal)</label
              >
              <input
                v-model.number="caloriesBurned"
                type="number"
                placeholder="200"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <!-- 强度选择 -->
          <div>
            <label class="text-xs text-gray-500 mb-1 block">运动强度</label>
            <div class="flex gap-2">
              <button
                v-for="level in intensityLevels"
                :key="level.value"
                @click="intensity = level.value"
                :class="
                  intensity === level.value
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600'
                "
                class="flex-1 py-2 rounded-lg text-sm transition-colors"
              >
                {{ level.label }}
              </button>
            </div>
          </div>

          <div>
            <label class="text-xs text-gray-500 mb-1 block">运动心得</label>
            <textarea
              v-model="notes"
              rows="2"
              placeholder="记录一下今天的运动感受..."
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
            ></textarea>
          </div>
        </div>

        <!-- 运动照片上传 -->
        <div class="mt-3">
          <label class="text-xs text-gray-500 mb-1 block"
            >运动照片（可选）</label
          >
          <div
            v-if="!uploadedImage"
            @click="triggerFileUpload"
            class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors"
          >
            <i class="fa fa-camera text-2xl text-gray-400 mb-1"></i>
            <p class="text-xs text-gray-500">点击上传运动照片</p>
          </div>
          <div v-else class="relative">
            <img
              :src="uploadedImage"
              alt="运动照片"
              class="w-full h-48 object-cover rounded-lg"
            />
            <button
              @click="removeImage"
              class="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600"
            >
              <i class="fa fa-times"></i>
            </button>
          </div>
          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            @change="handleFileUpload"
            class="hidden"
          />
        </div>
      </div>

      <!-- 动态按钮 -->
      <div class="flex gap-3">
        <button
          @click="submitCheckIn('public')"
          :disabled="!canSubmit"
          :class="
            canSubmit
              ? 'bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700'
              : 'bg-gray-300 cursor-not-allowed'
          "
          class="flex-1 text-white py-3 rounded-full font-bold transition-all"
        >
          公开动态
        </button>
        <button
          @click="submitCheckIn('private')"
          :disabled="!canSubmit"
          :class="
            canSubmit
              ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          "
          class="flex-1 py-3 rounded-full font-bold transition-all"
        >
          私密动态
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "ExerciseCheckIn",
  emits: ["submit"],
  setup(props, { emit }) {
    const exerciseTypes = [
      {
        type: "custom",
        label: "自定义",
        icon: "fa fa-ruler",
        color: "#f97316",
        bgColor: "bg-orange-50",
      },
      {
        type: "gym",
        label: "健身",
        icon: "fa fa-dumbbell",
        color: "#06b6d4",
        bgColor: "bg-cyan-50",
      },
      {
        type: "ball",
        label: "球类运动",
        icon: "fa fa-basketball-ball",
        color: "#f97316",
        bgColor: "bg-orange-50",
      },
      {
        type: "outdoor",
        label: "户外运动",
        icon: "fa fa-running",
        color: "#3b82f6",
        bgColor: "bg-blue-50",
      },
    ];

    const intensityLevels = [
      { value: "low", label: "轻度" },
      { value: "medium", label: "中度" },
      { value: "high", label: "高强度" },
    ];

    // 运动类型对应的平均卡路里消耗（每分钟）
    const calorieRates = {
      custom: 5,
      gym: 8,
      ball: 7,
      outdoor: 6,
    };

    const selectedExerciseType = ref("");
    const exerciseName = ref("");
    const duration = ref(0);
    const caloriesBurned = ref(0);
    const intensity = ref("medium");
    const notes = ref("");
    const uploadedImage = ref("");
    const fileInput = ref(null);

    // 模拟今日统计数据
    const totalDuration = ref(45);
    const totalCaloriesBurned = ref(320);
    const exerciseCount = ref(1);

    const canSubmit = computed(() => {
      return (
        selectedExerciseType.value && exerciseName.value && duration.value > 0
      );
    });

    const selectExerciseType = (type) => {
      selectedExerciseType.value = type;
      calculateCalories();
    };

    const getExerciseTypeLabel = () => {
      const exercise = exerciseTypes.find(
        (e) => e.type === selectedExerciseType.value
      );
      return exercise ? exercise.label : "";
    };

    const getExercisePlaceholder = () => {
      const placeholders = {
        custom: "例如：瑜伽",
        gym: "例如：力量训练",
        ball: "例如：羽毛球",
        outdoor: "例如：慢跑",
      };
      return placeholders[selectedExerciseType.value] || "输入运动名称";
    };

    const calculateCalories = () => {
      if (selectedExerciseType.value && duration.value > 0) {
        const baseRate = calorieRates[selectedExerciseType.value];
        const intensityMultiplier =
          intensity.value === "low"
            ? 0.8
            : intensity.value === "high"
            ? 1.2
            : 1;
        caloriesBurned.value = Math.round(
          baseRate * duration.value * intensityMultiplier
        );
      }
    };

    const triggerFileUpload = () => {
      fileInput.value?.click();
    };

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          uploadedImage.value = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    const removeImage = () => {
      uploadedImage.value = "";
      if (fileInput.value) {
        fileInput.value.value = "";
      }
    };

    const submitCheckIn = (visibility) => {
      if (!canSubmit.value) return;

      const checkInData = {
        type: "exercise",
        exerciseType: selectedExerciseType.value,
        exerciseName: exerciseName.value,
        duration: duration.value,
        caloriesBurned: caloriesBurned.value,
        intensity: intensity.value,
        notes: notes.value,
        image: uploadedImage.value,
        visibility,
        timestamp: new Date().toISOString(),
      };

      emit("submit", checkInData);

      // 更新统计数据
      totalDuration.value += duration.value;
      totalCaloriesBurned.value += caloriesBurned.value;
      exerciseCount.value += 1;

      // 重置表单
      resetForm();
    };

    const resetForm = () => {
      selectedExerciseType.value = "";
      exerciseName.value = "";
      duration.value = 0;
      caloriesBurned.value = 0;
      intensity.value = "medium";
      notes.value = "";
      uploadedImage.value = "";
    };

    return {
      exerciseTypes,
      intensityLevels,
      selectedExerciseType,
      exerciseName,
      duration,
      caloriesBurned,
      intensity,
      notes,
      uploadedImage,
      fileInput,
      totalDuration,
      totalCaloriesBurned,
      exerciseCount,
      canSubmit,
      selectExerciseType,
      getExerciseTypeLabel,
      getExercisePlaceholder,
      calculateCalories,
      triggerFileUpload,
      handleFileUpload,
      removeImage,
      submitCheckIn,
    };
  },
};
</script>
