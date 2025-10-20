<template>
  <view class="calendar">
    <!-- 日历头部 -->
    <view class="calendar-header">
      <view class="flex-spacer"></view>
      <view class="header-center">
        <text class="month-nav" @tap="previousMonth">‹</text>
        <text class="month-title">{{ currentYear }}年{{ currentMonth }}月</text>
        <text class="month-nav" @tap="nextMonth">›</text>
      </view>
      <view class="header-right">
        <text class="toggle-btn" @tap="toggleExpand">
          {{ expanded ? '收起日历' : '展开日历' }}
        </text>
      </view>
    </view>
    
    <!-- 星期标题 -->
    <view class="weekdays">
      <text v-for="day in weekdays" :key="day" class="weekday">{{ day }}</text>
    </view>
    
    <!-- 日历格子 -->
    <view class="days-wrapper" :style="{ maxHeight: expanded ? '1000rpx' : '120rpx' }">
      <view class="days">
        <!-- 上个月的日期 -->
        <view
          v-for="(day, index) in displayPrevMonthDays"
          :key="'prev-' + index"
          class="day-cell prev-month"
        >
          <text class="day-number">{{ day }}</text>
          <text class="day-icon">🏀</text>
        </view>
        
        <!-- 当月日期 -->
        <view
          v-for="day in displayCurrentMonthDays"
          :key="day"
          :class="getDayClass(day)"
          @tap="selectDay(day)"
        >
          <text v-if="isChecked(day)" class="check-icon">✓</text>
          <text v-if="!isChecked(day)" class="day-number">{{ day }}</text>
          <text class="day-icon" :class="{ 'checked': isChecked(day) }">🏀</text>
        </view>
        
        <!-- 下个月的日期 -->
        <view
          v-for="(day, index) in displayNextMonthDays"
          :key="'next-' + index"
          class="day-cell next-month"
        >
          <text class="day-number">{{ day }}</text>
          <text class="day-icon">🏀</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'CheckInCalendar',
  props: {
    checkedDates: {
      type: Array,
      default: () => []
    }
  },
  data() {
    const today = new Date()
    return {
      currentYear: today.getFullYear(),
      currentMonth: today.getMonth() + 1,
      currentDay: today.getDate(),
      expanded: false,
      weekdays: ['日', '一', '二', '三', '四', '五', '六']
    }
  },
  computed: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth, 0).getDate()
    },
    
    firstDayOfMonth() {
      return new Date(this.currentYear, this.currentMonth - 1, 1).getDay()
    },
    
    currentDayOfWeek() {
      const today = new Date()
      const isCurrentMonth = this.currentMonth === today.getMonth() + 1 && this.currentYear === today.getFullYear()
      if (!isCurrentMonth) return 0
      return new Date(this.currentYear, this.currentMonth - 1, this.currentDay).getDay()
    },
    
    currentWeekRange() {
      const today = new Date()
      const isCurrentMonth = this.currentMonth === today.getMonth() + 1 && this.currentYear === today.getFullYear()
      if (!isCurrentMonth) {
        return {
          start: 1,
          end: Math.min(7 - this.firstDayOfMonth, this.daysInMonth)
        }
      }
      
      const dayOfWeek = this.currentDayOfWeek
      const weekStart = this.currentDay - dayOfWeek
      const weekEnd = weekStart + 6
      
      return {
        start: Math.max(1, weekStart),
        end: Math.min(this.daysInMonth, weekEnd)
      }
    },
    
    prevMonthDays() {
      const days = []
      const prevMonth = new Date(this.currentYear, this.currentMonth - 1, 0)
      const prevMonthLastDay = prevMonth.getDate()
      
      for (let i = this.firstDayOfMonth - 1; i >= 0; i--) {
        days.push(prevMonthLastDay - i)
      }
      return days
    },
    
    nextMonthDays() {
      const days = []
      const totalDaysDisplayed = this.prevMonthDays.length + this.daysInMonth
      const remainingDays = 42 - totalDaysDisplayed
      
      for (let i = 1; i <= remainingDays; i++) {
        days.push(i)
      }
      return days
    },
    
    displayPrevMonthDays() {
      if (this.expanded) return this.prevMonthDays
      
      const weekStart = this.currentWeekRange.start
      if (weekStart > 1) return []
      
      const firstDayWeek = new Date(this.currentYear, this.currentMonth - 1, 1).getDay()
      return this.prevMonthDays.slice(-firstDayWeek)
    },
    
    displayCurrentMonthDays() {
      if (this.expanded) {
        return Array.from({ length: this.daysInMonth }, (_, i) => i + 1)
      }
      
      const range = this.currentWeekRange
      const days = []
      for (let i = range.start; i <= range.end; i++) {
        days.push(i)
      }
      return days
    },
    
    displayNextMonthDays() {
      if (this.expanded) return this.nextMonthDays
      
      const totalDisplayed = this.displayPrevMonthDays.length + this.displayCurrentMonthDays.length
      const needed = 7 - totalDisplayed
      return needed > 0 ? Array.from({ length: needed }, (_, i) => i + 1) : []
    }
  },
  methods: {
    isToday(day) {
      const today = new Date()
      return (
        this.currentYear === today.getFullYear() &&
        this.currentMonth === today.getMonth() + 1 &&
        day === today.getDate()
      )
    },
    
    isChecked(day) {
      const dateStr = `${this.currentYear}-${String(this.currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      return this.checkedDates.includes(dateStr)
    },
    
    getDayClass(day) {
      const classes = ['day-cell']
      const isToday = this.isToday(day)
      const checked = this.isChecked(day)
      
      if (isToday && checked) {
        classes.push('today', 'checked')
      } else if (checked) {
        classes.push('checked')
      } else if (isToday) {
        classes.push('today')
      }
      
      return classes.join(' ')
    },
    
    selectDay(day) {
      const dateStr = `${this.currentYear}-${String(this.currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      this.$emit('day-selected', dateStr)
    },
    
    previousMonth() {
      if (this.currentMonth === 1) {
        this.currentMonth = 12
        this.currentYear--
      } else {
        this.currentMonth--
      }
      this.$emit('month-changed', { year: this.currentYear, month: this.currentMonth })
    },
    
    nextMonth() {
      if (this.currentMonth === 12) {
        this.currentMonth = 1
        this.currentYear++
      } else {
        this.currentMonth++
      }
      this.$emit('month-changed', { year: this.currentYear, month: this.currentMonth })
    },
    
    toggleExpand() {
      this.expanded = !this.expanded
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar {
  background: #fff;
  padding: 32rpx;
  margin: 0 32rpx 32rpx;
  border-radius: 24rpx;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24rpx;
}

.flex-spacer {
  flex: 1;
}

.header-center {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.month-nav {
  font-size: 28rpx;
  color: #999;
  padding: 0 16rpx;
}

.month-title {
  font-size: 28rpx;
  color: #333;
}

.toggle-btn {
  font-size: 22rpx;
  color: #999;
  border: 1rpx solid #999;
  border-radius: 999rpx;
  padding: 8rpx 24rpx;
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 16rpx;
}

.weekday {
  font-size: 24rpx;
  color: #999;
}

.days-wrapper {
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 16rpx;
}

.day-cell {
  aspect-ratio: 1;
  border-radius: 16rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 24rpx;
  background: #f5f5f5;
  
  &.prev-month,
  &.next-month {
    background: #f5f5f5;
    color: #ccc;
  }
  
  &.today {
    border: 1rpx solid #ff5722;
    color: #ff5722;
    font-weight: 700;
  }
  
  &.checked {
    background: #e8f5e9;
    border: 1rpx solid #4caf50;
    
    .day-number {
      color: #4caf50;
    }
  }
  
  &.today.checked {
    background: #e8f5e9;
    border: 1rpx solid #4caf50;
  }
}

.day-number {
  font-size: 24rpx;
  color: #666;
}

.check-icon {
  font-size: 20rpx;
  margin-bottom: 4rpx;
  color: #4caf50;
}

.day-icon {
  font-size: 20rpx;
  
  &.checked {
    color: #4caf50;
  }
}
</style>
