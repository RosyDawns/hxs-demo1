<template>
  <div class="page" id="page-signin">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-white border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.back()">
        <i class="fa fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">每日签到</h2>
    </header>
    
    <!-- 签到卡片 -->
    <div class="p-4">
      <div class="bg-gradient-to-r from-primary to-orange-500 rounded-xl p-5 text-white mb-4">
        <div class="flex justify-between items-center mb-4">
          <div>
            <h3 class="text-2xl font-bold">签到成功！</h3>
            <p class="text-white/80">已连续签到 <span class="font-bold text-white">{{ consecutiveDays }}</span> 天</p>
          </div>
          <div class="bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
            <i class="fa fa-gift mr-1"></i> 今日奖励: +20能量
          </div>
        </div>
        
        <!-- 签到进度条 -->
        <div class="relative h-2 bg-white/20 rounded-full overflow-hidden">
          <div class="absolute left-0 top-0 h-full bg-white rounded-full" :style="{ width: progressPercentage + '%' }"></div>
        </div>
        <div class="flex justify-between mt-2 text-xs">
          <span>进度: {{ consecutiveDays }}/30天</span>
          <span>距离大奖还剩: {{ 30 - consecutiveDays }}天</span>
        </div>
      </div>
      
      <!-- 签到日历 -->
      <div class="bg-white rounded-xl p-4 mb-4 card-shadow">
        <div class="flex justify-between items-center mb-4">
          <h3 class="font-bold">签到日历</h3>
          <span class="text-sm text-gray-500">{{ currentYear }}年{{ currentMonth }}月</span>
        </div>
        
        <!-- 星期标题 -->
        <div class="grid grid-cols-7 text-center text-sm text-gray-500 mb-2">
          <div>日</div>
          <div>一</div>
          <div>二</div>
          <div>三</div>
          <div>四</div>
          <div>五</div>
          <div>六</div>
        </div>
        
        <!-- 日历格子 -->
        <div class="grid grid-cols-7 gap-1">
          <!-- 上个月的日期 -->
          <div v-for="(day, index) in prevMonthDays" :key="'prev-' + index" 
               class="aspect-square rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
            {{ day }}
          </div>
          
          <!-- 当月日期 -->
          <div v-for="day in daysInMonth" :key="day" 
               :class="getDayClass(day)"
               class="aspect-square rounded-lg flex items-center justify-center text-sm">
            {{ day }}
          </div>
          
          <!-- 下个月的日期 -->
          <div v-for="(day, index) in nextMonthDays" :key="'next-' + index" 
               class="aspect-square rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
            {{ day }}
          </div>
        </div>
      </div>
      
      <!-- 签到奖励 -->
      <div class="bg-white rounded-xl p-4 mb-4 card-shadow">
        <h3 class="font-bold mb-3">连续签到奖励</h3>
        
        <div class="flex overflow-x-auto space-x-3 pb-2">
          <div class="flex-shrink-0 w-20">
            <div class="h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-1">
              <i class="fa fa-bolt text-2xl text-primary"></i>
            </div>
            <div class="text-xs text-center">+5能量</div>
            <div class="text-xs text-center text-gray-400">第1天</div>
          </div>
          
          <div class="flex-shrink-0 w-20">
            <div class="h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-1">
              <i class="fa fa-bolt text-2xl text-primary"></i>
            </div>
            <div class="text-xs text-center">+10能量</div>
            <div class="text-xs text-center text-gray-400">第3天</div>
          </div>
          
          <div class="flex-shrink-0 w-20">
            <div class="h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-1">
              <i class="fa fa-gift text-2xl text-primary"></i>
            </div>
            <div class="text-xs text-center">小礼包</div>
            <div class="text-xs text-center text-gray-400">第7天</div>
          </div>
          
          <div class="flex-shrink-0 w-20">
            <div :class="consecutiveDays >= 15 ? 'bg-primary/10' : 'bg-gray-100'" class="h-20 rounded-lg flex items-center justify-center mb-1">
              <i :class="consecutiveDays >= 15 ? 'text-primary' : 'text-gray-400'" class="fa fa-bolt text-2xl"></i>
            </div>
            <div class="text-xs text-center">+20能量</div>
            <div class="text-xs text-center text-gray-400">第15天</div>
          </div>
          
          <div class="flex-shrink-0 w-20">
            <div :class="consecutiveDays >= 25 ? 'bg-primary/10' : 'bg-gray-100'" class="h-20 rounded-lg flex items-center justify-center mb-1">
              <i :class="consecutiveDays >= 25 ? 'text-primary' : 'text-gray-400'" class="fa fa-gift text-2xl"></i>
            </div>
            <div class="text-xs text-center">中礼包</div>
            <div class="text-xs text-center text-gray-400">第25天</div>
          </div>
          
          <div class="flex-shrink-0 w-20">
            <div class="h-20 bg-yellow-100 rounded-lg flex items-center justify-center mb-1">
              <i class="fa fa-trophy text-2xl text-yellow-500"></i>
            </div>
            <div class="text-xs text-center">大奖</div>
            <div class="text-xs text-center text-gray-400">第30天</div>
          </div>
        </div>
      </div>
      
      <!-- 签到按钮 -->
      <button id="signin-button" class="w-full bg-primary text-white py-3 rounded-lg font-medium" :disabled="isSignedToday">
        {{ isSignedToday ? '今日已签到' : '立即签到' }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'DailySigninPage',
  setup() {
    // 模拟数据
    const consecutiveDays = ref(7)
    const isSignedToday = ref(true)
    const progressPercentage = ref(25)
    
    // 获取当前日期信息
    const today = new Date()
    const currentYear = ref(today.getFullYear())
    const currentMonth = ref(today.getMonth() + 1)
    const currentDay = ref(today.getDate())
    
    // 计算当月天数
    const daysInMonth = ref(new Date(currentYear.value, currentMonth.value, 0).getDate())
    
    // 计算第一天是星期几
    const firstDayOfMonth = ref(new Date(currentYear.value, currentMonth.value - 1, 1).getDay())
    
    // 上个月的日期
    const prevMonthDays = computed(() => {
      const days = []
      const prevMonth = new Date(currentYear.value, currentMonth.value - 1, 0)
      const prevMonthLastDay = prevMonth.getDate()
      
      for (let i = firstDayOfMonth.value - 1; i >= 0; i--) {
        days.push(prevMonthLastDay - i)
      }
      return days
    })
    
    // 下个月的日期
    const nextMonthDays = computed(() => {
      const days = []
      const totalDaysDisplayed = prevMonthDays.value.length + daysInMonth.value
      const remainingDays = 42 - totalDaysDisplayed // 6 weeks * 7 days
      
      for (let i = 1; i <= remainingDays; i++) {
        days.push(i)
      }
      return days
    })
    
    // 获取日期单元格样式
    const getDayClass = (day) => {
      if (day === currentDay.value) {
        return 'bg-primary text-white font-bold border border-gray-200'
      } else if (day <= consecutiveDays.value) {
        return 'bg-success text-white border border-gray-200'
      } else {
        return 'border border-gray-200'
      }
    }
    
    return {
      consecutiveDays,
      isSignedToday,
      progressPercentage,
      currentYear,
      currentMonth,
      currentDay,
      daysInMonth,
      prevMonthDays,
      nextMonthDays,
      getDayClass
    }
  }
}
</script>