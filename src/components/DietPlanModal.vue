<template>
  <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center" @click.self="close">
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    <div class="relative bg-white rounded-2xl w-[90%] max-w-md mx-4 max-h-[85vh] overflow-y-auto shadow-2xl">
      <!-- 头部 -->
      <div class="sticky top-0 bg-white flex items-center justify-between p-4 border-b z-10">
        <h2 class="text-lg font-bold text-gray-800">饮食计划</h2>
        <button @click="close" class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <i class="fa fa-times text-lg"></i>
        </button>
      </div>

      <!-- 内容 -->
      <div class="p-4">
        <!-- 健身目标选择 -->
        <div class="mb-5">
          <label class="block text-sm font-medium text-gray-700 mb-3">健身目标</label>
          <div class="flex space-x-3">
            <label 
              v-for="goal in goals" 
              :key="goal.value"
              class="flex-1 cursor-pointer"
              @click="selectedGoal = goal.value"
            >
              <div 
                :class="[
                  selectedGoal === goal.value ? 'ring-2' : 'hover:border-gray-300',
                  selectedGoal === goal.value && goal.value === 'lose' ? 'border-red-500 bg-red-50 ring-red-200' : '',
                  selectedGoal === goal.value && goal.value === 'maintain' ? 'border-blue-500 bg-blue-50 ring-blue-200' : '',
                  selectedGoal === goal.value && goal.value === 'gain' ? 'border-green-500 bg-green-50 ring-green-200' : '',
                  selectedGoal !== goal.value ? 'border-gray-200' : ''
                ]"
                class="border-2 rounded-xl p-3 text-center transition-all"
              >
                <div class="text-2xl mb-1">{{ goal.icon }}</div>
                <div 
                  :class="[
                    selectedGoal === goal.value && goal.value === 'lose' ? 'text-red-600 font-bold' : '',
                    selectedGoal === goal.value && goal.value === 'maintain' ? 'text-blue-600 font-bold' : '',
                    selectedGoal === goal.value && goal.value === 'gain' ? 'text-green-600 font-bold' : '',
                    selectedGoal !== goal.value ? 'text-gray-600' : ''
                  ]" 
                  class="text-sm"
                >
                  {{ goal.label }}
                </div>
              </div>
            </label>
          </div>
        </div>

        <!-- 热量计算展示 -->
        <div class="bg-gray-50 rounded-2xl p-4 mb-4 border border-gray-100">
          <div class="space-y-3 text-sm">
            <div class="flex justify-between items-center">
              <span class="text-gray-500">基础代谢</span>
              <span class="font-medium text-gray-700">{{ bmr }}千卡</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-500">活动消耗</span>
              <span class="font-medium text-gray-700">{{ activityCalories }}千卡</span>
            </div>
            <div class="flex justify-between items-center pt-3 border-t border-gray-200">
              <span class="text-gray-800 font-medium">每日总消耗</span>
              <span class="font-bold text-gray-900 text-base">{{ tdee }}千卡</span>
            </div>
          </div>
        </div>

        <!-- 推荐摄入热量 -->
        <div class="bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-2xl p-5 text-white text-center mb-5 shadow-lg shadow-blue-200">
          <div class="text-sm opacity-90 mb-2">推荐每日摄入热量</div>
          <div class="text-5xl font-bold">{{ recommendedCalories }}</div>
          <div class="text-sm opacity-80 mt-2">{{ calorieDeficitText }}</div>
        </div>

        <!-- 饮食建议 -->
        <div class="mb-5">
          <h3 class="font-bold text-gray-800 mb-3">饮食建议</h3>
          <div class="space-y-3">
            <div v-for="(meal, index) in dietSuggestions" :key="index" class="flex items-start bg-green-50/50 rounded-xl p-3 border border-green-100">
              <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <i class="fa fa-check text-white text-xs"></i>
              </div>
              <div>
                <span class="font-bold text-gray-800">{{ meal.name }}：</span>
                <span class="text-gray-600">{{ meal.suggestion }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 生成详细食谱按钮 -->
        <button 
          @click="generateRecipe"
          class="w-full py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200"
        >
          生成详细食谱
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'DietPlanModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    userBmr: {
      type: Number,
      default: 1680
    },
    userTdee: {
      type: Number,
      default: 2200
    }
  },
  emits: ['close', 'generate-recipe'],
  setup(props, { emit }) {
    const selectedGoal = ref('lose')
    
    const goals = [
      { value: 'lose', label: '减脂', icon: '🔥' },
      { value: 'maintain', label: '维持', icon: '⚖️' },
      { value: 'gain', label: '增肌', icon: '💪' }
    ]

    const bmr = computed(() => props.userBmr || 1680)
    const tdee = computed(() => props.userTdee || 2200)
    const activityCalories = computed(() => tdee.value - bmr.value)

    // 根据目标计算推荐热量
    const recommendedCalories = computed(() => {
      switch (selectedGoal.value) {
        case 'lose':
          return Math.round(tdee.value - 400) // 减脂：制造400千卡热量缺口
        case 'maintain':
          return tdee.value // 维持：等于TDEE
        case 'gain':
          return Math.round(tdee.value + 300) // 增肌：增加300千卡
        default:
          return tdee.value
      }
    })

    const calorieDeficitText = computed(() => {
      switch (selectedGoal.value) {
        case 'lose':
          return `（创造${tdee.value - recommendedCalories.value}千卡热量缺口）`
        case 'maintain':
          return '（维持当前体重）'
        case 'gain':
          return `（增加${recommendedCalories.value - tdee.value}千卡热量盈余）`
        default:
          return ''
      }
    })

    // 根据目标生成饮食建议
    const dietSuggestions = computed(() => {
      const baseSuggestions = {
        lose: [
          { name: '早餐', suggestion: '燕麦粥+鸡蛋+水果' },
          { name: '午餐', suggestion: '鸡胸肉+糙米饭+蔬菜' },
          { name: '晚餐', suggestion: '鱼肉+杂粮馒头+西兰花' },
          { name: '加餐', suggestion: '坚果、酸奶、水果' }
        ],
        maintain: [
          { name: '早餐', suggestion: '全麦面包+牛奶+鸡蛋+水果' },
          { name: '午餐', suggestion: '瘦肉+米饭+时蔬+汤' },
          { name: '晚餐', suggestion: '清蒸鱼+杂粮+绿叶蔬菜' },
          { name: '加餐', suggestion: '水果、坚果、酸奶' }
        ],
        gain: [
          { name: '早餐', suggestion: '燕麦+牛奶+鸡蛋3个+香蕉' },
          { name: '午餐', suggestion: '牛肉+糙米饭+蔬菜+蛋白粉' },
          { name: '晚餐', suggestion: '鸡胸肉+意面+蔬菜沙拉' },
          { name: '加餐', suggestion: '蛋白粉、坚果、全麦面包' }
        ]
      }
      return baseSuggestions[selectedGoal.value] || baseSuggestions.maintain
    })

    const close = () => {
      emit('close')
    }

    const generateRecipe = () => {
      emit('generate-recipe', {
        goal: selectedGoal.value,
        recommendedCalories: recommendedCalories.value,
        suggestions: dietSuggestions.value,
        bmr: bmr.value,
        tdee: tdee.value
      })
    }

    return {
      selectedGoal,
      goals,
      bmr,
      tdee,
      activityCalories,
      recommendedCalories,
      calorieDeficitText,
      dietSuggestions,
      close,
      generateRecipe
    }
  }
}
</script>
