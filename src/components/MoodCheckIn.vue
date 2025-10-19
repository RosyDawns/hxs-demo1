<template>
  <div class="pb-4 pt-0">
    <div class="px-4">
      <!-- 心情打卡宣传卡片 -->
      <div class="text-lg font-bold text-gray-800 mb-2 text-center">
        好心情催生快乐素，别让坏情绪喂胖你!
      </div>
      <div
        class="bg-gradient-to-r from-pink-300 to-yellow-200 rounded-xl p-6 text-center mb-4"
      >
        <div
          class="bg-white/80 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center"
        >
          <div class="text-6xl">🦁</div>
        </div>

        <p class="text-sm text-gray-600">唤醒兽 WAKEBEAST</p>
      </div>
    </div>

    <div class="px-4 my-4 pt-3 border-t border-b border-gray-100">
      <!-- 心情选项 -->
      <div class="grid grid-cols-4 gap-4 mb-4">
        <div
          v-for="mood in moodOptions"
          :key="mood.value"
          @click="selectMood(mood.value)"
          :class="
            selectedMood === mood.value
              ? 'border border-primary rounded-lg scale-105'
              : 'border border-transparent'
          "
          class="py-2 flex flex-col items-center nav-action cursor-pointer transition-all"
        >
          <div class="text-5xl mb-2">{{ mood.emoji }}</div>
          <span class="text-xs text-gray-800 font-bold">{{ mood.label }}</span>
          <span class="text-gray-400 text-center mt-1" style="font-size: 10px">
            {{ mood.desc }}
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
  name: "MoodCheckIn",
  emits: ["submit"],
  setup(props, { emit }) {
    const moodOptions = [
      {
        value: "happy",
        label: "愉快",
        emoji: "😆",
        desc: "今天是心情愉快的一天",
      },
      {
        value: "good",
        label: "良好",
        emoji: "😊",
        desc: "今天是心情良好的一天",
      },
      {
        value: "normal",
        label: "一般",
        emoji: "😐",
        desc: "今天是心情一般的一天",
      },
      { value: "bad", label: "糟糕", emoji: "😣", desc: "今天心情糟糕的一天" },
    ];

    const emotionTags = [
      "开心",
      "平静",
      "焦虑",
      "兴奋",
      "疲惫",
      "感恩",
      "孤独",
      "满足",
    ];

    const selectedMood = ref("happy");
    const moodNote = ref("");
    const moodLevel = ref(5);
    const selectedTags = ref([]);

    const canSubmit = computed(() => {
      return selectedMood.value;
    });

    const selectMood = (mood) => {
      selectedMood.value = mood;
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
        type: "mood",
        mood: selectedMood.value,
        note: moodNote.value,
        level: moodLevel.value,
        tags: selectedTags.value,
        visibility,
        timestamp: new Date().toISOString(),
      };

      emit("submit", checkInData);

      // 重置表单
      resetForm();
    };

    const resetForm = () => {
      selectedMood.value = "";
      moodNote.value = "";
      moodLevel.value = 5;
      selectedTags.value = [];
    };

    return {
      moodOptions,
      emotionTags,
      selectedMood,
      moodNote,
      moodLevel,
      selectedTags,
      canSubmit,
      selectMood,
      toggleTag,
      submitCheckIn,
    };
  },
};
</script>
