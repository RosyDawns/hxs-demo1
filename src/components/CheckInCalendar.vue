<template>
  <div class="bg-white p-4 mb-3 rounded-lg">
    <div class="flex justify-between items-center mb-3">
      <button class="text-gray-400" @click="previousMonth">
        <i class="fa fa-angle-left"></i>
      </button>
      <h3 class="font-bold">{{ currentYear }}年{{ currentMonth }}月</h3>
      <button class="text-gray-400" @click="nextMonth">
        <i class="fa fa-angle-right"></i>
      </button>
    </div>

    <!-- 星期标题 -->
    <div class="grid grid-cols-7 text-center text-xs text-gray-500 mb-2">
      <div>日</div>
      <div>一</div>
      <div>二</div>
      <div>三</div>
      <div>四</div>
      <div>五</div>
      <div>六</div>
    </div>

    <!-- 日历格子 - 根据展开状态显示 -->
    <div class="overflow-hidden transition-all duration-300" :style="{ maxHeight: expanded ? '1000px' : calendarHeight }">
      <div class="grid grid-cols-7 gap-2">
        <!-- 上个月的日期 -->
        <div v-for="(day, index) in displayPrevMonthDays" :key="'prev-' + index" 
             class="aspect-square rounded-lg bg-gray-50 flex flex-col items-center justify-center text-sm text-gray-400">
          <span>{{ day }}</span>
        </div>
        
        <!-- 当月日期 -->
        <div v-for="day in displayCurrentMonthDays" :key="day" 
             :class="getDayClass(day)"
             class="aspect-square rounded-lg flex flex-col items-center justify-center text-sm relative cursor-pointer transition-all"
             @click="selectDay(day)">
          <span>{{ day }}</span>
          <i v-if="isChecked(day)" class="fa fa-check text-xs absolute bottom-1"></i>
        </div>
        
        <!-- 下个月的日期 -->
        <div v-for="(day, index) in displayNextMonthDays" :key="'next-' + index" 
             class="aspect-square rounded-lg bg-gray-50 flex flex-col items-center justify-center text-sm text-gray-400">
          {{ day }}
        </div>
      </div>
    </div>

    <button @click="toggleExpand" class="w-full mt-3 text-sm text-primary flex items-center justify-center hover:text-primary-dark transition-colors">
      <i :class="expanded ? 'fa fa-angle-up' : 'fa fa-angle-down'" class="mr-1"></i>
      {{ expanded ? '收起日历' : '展开日历' }}
    </button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'CheckInCalendar',
  props: {
    checkedDates: {
      type: Array,
      default: () => []
    }
  },
  emits: ['day-selected', 'month-changed'],
  setup(props, { emit }) {
    const today = new Date()
    const currentYear = ref(today.getFullYear())
    const currentMonth = ref(today.getMonth() + 1)
    const currentDay = ref(today.getDate())
    const expanded = ref(false)

    // 计算当月天数
    const daysInMonth = computed(() => {
      return new Date(currentYear.value, currentMonth.value, 0).getDate()
    })

    // 计算第一天是星期几
    const firstDayOfMonth = computed(() => {
      return new Date(currentYear.value, currentMonth.value - 1, 1).getDay()
    })

    // 计算当前日期是星期几 (0=周日, 1=周一, ...)
    const currentDayOfWeek = computed(() => {
      const isCurrentMonth = currentMonth.value === today.getMonth() + 1 && currentYear.value === today.getFullYear()
      if (!isCurrentMonth) return 0
      return new Date(currentYear.value, currentMonth.value - 1, currentDay.value).getDay()
    })

    // 计算当前周的开始和结束日期
    const currentWeekRange = computed(() => {
      const isCurrentMonth = currentMonth.value === today.getMonth() + 1 && currentYear.value === today.getFullYear()
      if (!isCurrentMonth) {
        // 如果不是当前月，显示该月第一周
        return {
          start: 1,
          end: Math.min(7 - firstDayOfMonth.value, daysInMonth.value)
        }
      }
      
      const dayOfWeek = currentDayOfWeek.value
      const weekStart = currentDay.value - dayOfWeek // 周日为起点
      const weekEnd = weekStart + 6
      
      return {
        start: Math.max(1, weekStart),
        end: Math.min(daysInMonth.value, weekEnd)
      }
    })

    // 上个月的日期（完整）
    const prevMonthDays = computed(() => {
      const days = []
      const prevMonth = new Date(currentYear.value, currentMonth.value - 1, 0)
      const prevMonthLastDay = prevMonth.getDate()
      
      for (let i = firstDayOfMonth.value - 1; i >= 0; i--) {
        days.push(prevMonthLastDay - i)
      }
      return days
    })

    // 下个月的日期（完整）
    const nextMonthDays = computed(() => {
      const days = []
      const totalDaysDisplayed = prevMonthDays.value.length + daysInMonth.value
      const remainingDays = 42 - totalDaysDisplayed
      
      for (let i = 1; i <= remainingDays; i++) {
        days.push(i)
      }
      return days
    })

    // 根据展开状态显示的上个月日期
    const displayPrevMonthDays = computed(() => {
      if (expanded.value) {
        return prevMonthDays.value
      }
      
      // 收起时，只显示当前周需要的上个月日期
      const weekStart = currentWeekRange.value.start
      if (weekStart > 1) {
        return [] // 当前周不需要上个月的日期
      }
      
      // 计算需要显示多少个上个月的日期
      const firstDayWeek = new Date(currentYear.value, currentMonth.value - 1, 1).getDay()
      return prevMonthDays.value.slice(-firstDayWeek)
    })

    // 根据展开状态显示的当月日期
    const displayCurrentMonthDays = computed(() => {
      if (expanded.value) {
        // 展开时显示所有日期
        return Array.from({ length: daysInMonth.value }, (_, i) => i + 1)
      }
      
      // 收起时只显示当前周
      const range = currentWeekRange.value
      const days = []
      for (let i = range.start; i <= range.end; i++) {
        days.push(i)
      }
      return days
    })

    // 根据展开状态显示的下个月日期
    const displayNextMonthDays = computed(() => {
      if (expanded.value) {
        return nextMonthDays.value
      }
      
      // 收起时，计算需要多少个下个月的日期来填满一周
      const totalDisplayed = displayPrevMonthDays.value.length + displayCurrentMonthDays.value.length
      const needed = 7 - totalDisplayed
      return needed > 0 ? Array.from({ length: needed }, (_, i) => i + 1) : []
    })

    // 计算日历高度（收起时只显示一周）
    const calendarHeight = computed(() => {
      return '60px' // 一周的高度
    })

    // 检查日期是否已打卡
    const isChecked = (day) => {
      const dateStr = `${currentYear.value}-${String(currentMonth.value).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      return props.checkedDates.includes(dateStr)
    }

    // 获取日期单元格样式
    const getDayClass = (day) => {
      const isToday = day === currentDay.value && 
                      currentMonth.value === today.getMonth() + 1 && 
                      currentYear.value === today.getFullYear()
      const checked = isChecked(day)

      if (isToday && checked) {
        return 'bg-primary text-white border-2 border-primary font-bold'
      } else if (checked) {
        return 'bg-green-500 text-white'
      } else if (isToday) {
        return 'border-2 border-primary text-primary font-bold'
      } else {
        return 'bg-gray-50 text-gray-600 border border-gray-200 hover:border-primary'
      }
    }

    const previousMonth = () => {
      if (currentMonth.value === 1) {
        currentMonth.value = 12
        currentYear.value--
      } else {
        currentMonth.value--
      }
      emit('month-changed', { year: currentYear.value, month: currentMonth.value })
    }

    const nextMonth = () => {
      if (currentMonth.value === 12) {
        currentMonth.value = 1
        currentYear.value++
      } else {
        currentMonth.value++
      }
      emit('month-changed', { year: currentYear.value, month: currentMonth.value })
    }

    const selectDay = (day) => {
      const dateStr = `${currentYear.value}-${String(currentMonth.value).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      emit('day-selected', dateStr)
    }

    const toggleExpand = () => {
      expanded.value = !expanded.value
    }

    return {
      currentYear,
      currentMonth,
      currentDay,
      expanded,
      calendarHeight,
      displayPrevMonthDays,
      displayCurrentMonthDays,
      displayNextMonthDays,
      isChecked,
      getDayClass,
      previousMonth,
      nextMonth,
      selectDay,
      toggleExpand
    }
  }
}
</script>
