<template>
  <div class="pb-4 pt-0">
    <div class="px-4">
      <!-- 饮食打卡宣传卡片 -->
      <h3 class="text-xl text-center font-bold mb-2">饮食低热量，成功一大半</h3>

      <div class="rounded-xl text-white my-4">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"
          alt="健康饮食"
          class="w-full h-40 object-cover rounded-lg"
        />
      </div>
    </div>

    <div class="px-4 my-4 py-3 border-t border-b border-gray-100">
      <!-- 餐食类型选择 -->
      <div class="grid grid-cols-4 gap-3">
        <div
          v-for="meal in mealTypes"
          :key="meal.type"
          @click="selectMealType(meal.type)"
          :class="selectedMealType === meal.type ? 'ring-2 ring-primary' : ''"
          class="flex flex-col items-center nav-action cursor-pointer transition-all"
        >
          <div
            :class="meal.bgColor"
            class="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-1"
          >
            {{ meal.emoji }}
          </div>
          <span class="text-xs text-gray-600">{{ meal.label }}</span>
        </div>
      </div>
    </div>

    <div class="px-4">
      <!-- 已选择的餐食信息 -->
      <div
        v-if="selectedMealType"
        class="bg-white rounded-xl p-4 mb-4 card-shadow"
      >
        <h4 class="font-bold text-sm mb-3">{{ getMealTypeLabel() }}</h4>

        <!-- 照片上传区 -->
        <div class="mb-4">
          <div
            v-if="!uploadedImage"
            @click="triggerFileUpload"
            class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
          >
            <i class="fa fa-camera text-3xl text-gray-400 mb-2"></i>
            <p class="text-sm text-gray-500">点击上传食物照片</p>
          </div>
          <div v-else class="relative">
            <img
              :src="uploadedImage"
              alt="食物照片"
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

        <!-- 食物信息输入 -->
        <div class="space-y-3">
          <div>
            <label class="text-xs text-gray-500 mb-1 block">食物名称</label>
            <input
              v-model="foodName"
              type="text"
              placeholder="例如：鸡胸肉沙拉"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-xs text-gray-500 mb-1 block"
                >热量 (kcal)</label
              >
              <input
                v-model.number="calories"
                type="number"
                placeholder="300"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label class="text-xs text-gray-500 mb-1 block">份量 (g)</label>
              <input
                v-model.number="portion"
                type="number"
                placeholder="250"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label class="text-xs text-gray-500 mb-1 block">备注</label>
            <textarea
              v-model="notes"
              rows="2"
              placeholder="记录一下今天的饮食心得..."
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
            ></textarea>
          </div>
        </div>

        <!-- 营养成分快捷选择 -->
        <div class="mt-3">
          <p class="text-xs text-gray-500 mb-2">营养标签</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="tag in nutritionTags"
              :key="tag"
              @click="toggleTag(tag)"
              :class="
                selectedTags.includes(tag)
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600'
              "
              class="px-3 py-1 rounded-full text-xs transition-colors"
            >
              {{ tag }}
            </button>
          </div>
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
  name: "DietCheckIn",
  emits: ["submit"],
  setup(props, { emit }) {
    const mealTypes = [
      {
        type: "breakfast",
        label: "+早餐",
        emoji: "🍳",
        bgColor: "bg-yellow-50",
      },
      { type: "lunch", label: "+午餐", emoji: "🍜", bgColor: "bg-orange-50" },
      { type: "dinner", label: "+晚餐", emoji: "🥘", bgColor: "bg-red-50" },
      { type: "snack", label: "+加餐", emoji: "🍎", bgColor: "bg-pink-50" },
    ];

    const nutritionTags = [
      "高蛋白",
      "低脂肪",
      "低碳水",
      "高纤维",
      "有机食品",
      "素食",
    ];

    const selectedMealType = ref("");
    const uploadedImage = ref("");
    const foodName = ref("");
    const calories = ref(0);
    const portion = ref(0);
    const notes = ref("");
    const selectedTags = ref([]);
    const fileInput = ref(null);

    // 模拟今日统计数据
    const totalCalories = ref(850);
    const mealsCount = ref(2);
    const dailyTarget = 2000;

    const remainingCalories = computed(() => {
      return Math.max(0, dailyTarget - totalCalories.value);
    });

    const canSubmit = computed(() => {
      return selectedMealType.value && (foodName.value || uploadedImage.value);
    });

    const selectMealType = (type) => {
      selectedMealType.value = type;
    };

    const getMealTypeLabel = () => {
      const meal = mealTypes.find((m) => m.type === selectedMealType.value);
      return meal ? meal.label : "";
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

    const toggleTag = (tag) => {
      const index = selectedTags.value.indexOf(tag);
      if (index > -1) {
        selectedTags.value.splice(index, 1);
      } else {
        selectedTags.value.push(tag);
      }
    };

    const submitCheckIn = (visibility) => {
      if (!canSubmit.value) return;

      const checkInData = {
        type: "diet",
        mealType: selectedMealType.value,
        foodName: foodName.value,
        calories: calories.value,
        portion: portion.value,
        notes: notes.value,
        tags: selectedTags.value,
        image: uploadedImage.value,
        visibility,
        timestamp: new Date().toISOString(),
      };

      emit("submit", checkInData);

      // 更新统计数据
      if (calories.value > 0) {
        totalCalories.value += calories.value;
        mealsCount.value += 1;
      }

      // 重置表单
      resetForm();
    };

    const resetForm = () => {
      selectedMealType.value = "";
      uploadedImage.value = "";
      foodName.value = "";
      calories.value = 0;
      portion.value = 0;
      notes.value = "";
      selectedTags.value = [];
    };

    return {
      mealTypes,
      nutritionTags,
      selectedMealType,
      uploadedImage,
      foodName,
      calories,
      portion,
      notes,
      selectedTags,
      fileInput,
      totalCalories,
      mealsCount,
      remainingCalories,
      canSubmit,
      selectMealType,
      getMealTypeLabel,
      triggerFileUpload,
      handleFileUpload,
      removeImage,
      toggleTag,
      submitCheckIn,
    };
  },
};
</script>
