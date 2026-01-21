<template>
  <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center" @click.self="close">
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    <div class="relative bg-white rounded-2xl w-[90%] max-w-md mx-4 max-h-[85vh] overflow-y-auto shadow-2xl">
      <!-- 头部 -->
      <div class="sticky top-0 bg-white flex items-center justify-between p-4 border-b border-b-gray-200 z-10">
        <h2 class="text-lg font-bold text-gray-800">设置档案</h2>
        <button @click="close" class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <i class="fa fa-times text-lg"></i>
        </button>
      </div>

      <!-- 表单内容 -->
      <div class="p-4 space-y-4">
        <!-- 性别选择 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-3">性别</label>
          <div class="flex space-x-3">
            <label 
              class="flex-1 cursor-pointer"
              @click="gender = 'male'"
            >
              <div 
                :class="gender === 'male' ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'"
                class="border-2 rounded-xl p-3 text-center transition-all"
              >
                <div class="text-2xl mb-1">👨</div>
                <div :class="gender === 'male' ? 'text-blue-600 font-bold' : 'text-gray-600'" class="text-sm">男</div>
              </div>
            </label>
            <label 
              class="flex-1 cursor-pointer"
              @click="gender = 'female'"
            >
              <div 
                :class="gender === 'female' ? 'border-pink-500 bg-pink-50 ring-2 ring-pink-200' : 'border-gray-200 hover:border-gray-300'"
                class="border-2 rounded-xl p-3 text-center transition-all"
              >
                <div class="text-2xl mb-1">👩</div>
                <div :class="gender === 'female' ? 'text-pink-600 font-bold' : 'text-gray-600'" class="text-sm">女</div>
              </div>
            </label>
          </div>
        </div>

        <!-- 出生日期 (自动计算年龄) -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">出生日期</label>
          <input 
            type="date" 
            v-model="birthDate" 
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
          >
          <div v-if="age" class="text-xs text-gray-500 mt-1 ml-1">当前年龄: {{ age }} 岁</div>
        </div>

        <!-- 身高 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">身高 (cm)</label>
          <input 
            type="number" 
            v-model.number="height" 
            placeholder="请输入身高"
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
          >
        </div>

        <!-- 体重 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">体重 (kg)</label>
          <input 
            type="number" 
            v-model.number="weight" 
            placeholder="请输入体重"
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
          >
        </div>

        <!-- 活动量 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">活动量</label>
          <div class="relative">
            <select 
              v-model="activityLevel" 
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white appearance-none transition-colors"
            >
              <option value="sedentary">久坐（几乎不运动）</option>
              <option value="light">轻度运动（每周运动1-3次）</option>
              <option value="moderate">中度运动（每周运动3-5次）</option>
              <option value="active">高度活跃（每周运动6-7次）</option>
              <option value="very_active">非常活跃（高强度运动或体力劳动）</option>
            </select>
            <i class="fa fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
          </div>
        </div>

        <!-- 计算结果 -->
        <div v-if="showResult" class="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 rounded-2xl p-5 border border-blue-100">
          <div class="text-center">
            <div class="text-sm text-gray-500 mb-1">您的基础代谢率 (BMR)</div>
            <div class="text-5xl font-bold text-blue-600">{{ bmr }}</div>
            <div class="text-sm text-gray-400 mt-1">千卡/天</div>
          </div>
          <div class="mt-4 pt-4 border-t border-blue-200/50">
            <div class="flex justify-between items-center">
              <div class="text-sm text-gray-500">每日总消耗 (TDEE)</div>
              <div class="text-2xl font-bold text-cyan-600">{{ tdee }} <span class="text-sm font-normal text-gray-400">千卡</span></div>
            </div>
          </div>
        </div>

        <!-- 计算按钮 -->
        <button 
          @click="calculate"
          :disabled="!canCalculate"
          :class="canCalculate ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-200' : 'bg-gray-300 cursor-not-allowed'"
          class="w-full py-3.5 text-white font-bold rounded-xl transition-all"
        >
          {{ showResult ? '更新并保存' : '设置档案' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'

export default {
  name: 'BMRCalculatorModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    initialData: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['close', 'calculate'],
  setup(props, { emit }) {
    const gender = ref('male')
    const birthDate = ref('1995-01-01') // Default birthdate
    const height = ref(175)
    const weight = ref(68)
    const activityLevel = ref('moderate')
    const showResult = ref(false)
    const bmr = ref(0)
    const tdee = ref(0)

    // Calculate age from birthDate
    const age = computed(() => {
      if (!birthDate.value) return 25
      const birth = new Date(birthDate.value)
      const today = new Date()
      let a = today.getFullYear() - birth.getFullYear()
      const m = today.getMonth() - birth.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        a--
      }
      return a
    })

    // 监听初始数据变化
    watch(() => props.initialData, (newVal) => {
      if (newVal) {
        if (newVal.gender) gender.value = newVal.gender
        if (newVal.birthDate) {
          birthDate.value = newVal.birthDate
        } else if (newVal.age) {
          // Backward compatibility or if only age is provided: Estimate birth year
          const estimatedYear = new Date().getFullYear() - newVal.age
          birthDate.value = `${estimatedYear}-01-01`
        }
        if (newVal.height) height.value = newVal.height
        if (newVal.weight) weight.value = newVal.weight
        if (newVal.activityLevel) activityLevel.value = newVal.activityLevel
      }
    }, { immediate: true })

    // 活动系数
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9
    }

    const canCalculate = computed(() => {
      return gender.value && age.value > 0 && height.value > 0 && weight.value > 0
    })

    // 使用 Mifflin-St Jeor 公式计算 BMR
    const calculate = () => {
      if (!canCalculate.value) return

      let calculatedBMR
      if (gender.value === 'male') {
        // 男性: BMR = 10 × 体重(kg) + 6.25 × 身高(cm) - 5 × 年龄 + 5
        calculatedBMR = 10 * weight.value + 6.25 * height.value - 5 * age.value + 5
      } else {
        // 女性: BMR = 10 × 体重(kg) + 6.25 × 身高(cm) - 5 × 年龄 - 161
        calculatedBMR = 10 * weight.value + 6.25 * height.value - 5 * age.value - 161
      }

      bmr.value = Math.round(calculatedBMR)
      tdee.value = Math.round(calculatedBMR * activityMultipliers[activityLevel.value])
      showResult.value = true

      emit('calculate', {
        bmr: bmr.value,
        tdee: tdee.value,
        gender: gender.value,
        age: age.value,
        birthDate: birthDate.value,
        height: height.value,
        weight: weight.value,
        activityLevel: activityLevel.value
      })
    }

    const close = () => {
      emit('close')
    }

    return {
      gender,
      age,
      birthDate,
      height,
      weight,
      activityLevel,
      showResult,
      bmr,
      tdee,
      canCalculate,
      calculate,
      close
    }
  }
}
</script>
