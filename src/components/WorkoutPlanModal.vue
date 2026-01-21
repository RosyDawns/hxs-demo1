<template>
  <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center" @click.self="close">
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    <div class="relative bg-white rounded-2xl w-[90%] max-w-md mx-4 max-h-[85vh] overflow-y-auto shadow-2xl">
      <!-- 头部 -->
      <div class="sticky top-0 bg-white flex items-center justify-between p-4 border-b z-10">
        <h2 class="text-lg font-bold text-gray-800">锻炼计划</h2>
        <button @click="close" class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <i class="fa fa-times text-lg"></i>
        </button>
      </div>

      <!-- 模式切换 -->
      <div class="flex bg-gray-50 mx-4 mt-4 rounded-xl p-1">
        <button 
          @click="mode = 'fixed'"
          :class="mode === 'fixed' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'"
          class="flex-1 py-2.5 font-medium rounded-lg transition-all"
        >
          固定模式
        </button>
        <button 
          @click="mode = 'random'"
          :class="mode === 'random' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'"
          class="flex-1 py-2.5 font-medium rounded-lg transition-all"
        >
          随机模式
        </button>
      </div>

      <!-- 内容区域 -->
      <div class="p-4">
        <!-- 固定模式 -->
        <template v-if="mode === 'fixed'">
          <!-- 每周运动次数 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">每周运动次数</label>
            <div class="relative">
              <select 
                v-model="weeklyFrequency" 
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white appearance-none transition-colors"
              >
                <option value="3">3次/周</option>
                <option value="4">4次/周</option>
                <option value="5">5次/周</option>
                <option value="6">6次/周</option>
              </select>
              <i class="fa fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            </div>
          </div>

          <!-- 运动难度 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">运动难度</label>
            <div class="relative">
              <select 
                v-model="difficulty" 
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white appearance-none transition-colors"
              >
                <option value="beginner">初级</option>
                <option value="intermediate">中级</option>
                <option value="advanced">高级</option>
              </select>
              <i class="fa fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            </div>
          </div>

          <!-- 周计划展示 -->
          <div class="space-y-3">
            <div 
              v-for="(plan, index) in weeklyPlan" 
              :key="index"
              class="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-100 hover:shadow-sm transition-shadow"
            >
              <div class="font-bold text-gray-800 mb-1">
                <span class="text-blue-500">{{ plan.day }}</span>：{{ plan.title }}
              </div>
              <div class="text-sm text-gray-500">{{ plan.exercises }}</div>
            </div>
          </div>

          <!-- 生成计划按钮 -->
          <button 
            @click="generateFixedPlan"
            class="w-full mt-4 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200"
          >
            确认生成计划
          </button>
        </template>

        <!-- 随机模式 -->
        <template v-else>
          <!-- 运动时长 -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">运动时长</label>
            <div class="relative">
              <select 
                v-model="duration" 
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white appearance-none transition-colors"
              >
                <option value="15">15分钟</option>
                <option value="20">20分钟</option>
                <option value="30">30分钟</option>
                <option value="45">45分钟</option>
                <option value="60">60分钟</option>
              </select>
              <i class="fa fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            </div>
          </div>

          <!-- 随机生成的运动 -->
          <div v-if="randomWorkout" class="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-2xl p-5 mb-4 border border-orange-100">
            <div class="text-center mb-4">
              <div class="text-5xl mb-2">{{ randomWorkout.icon }}</div>
              <div class="font-bold text-xl text-gray-800">{{ randomWorkout.name }}</div>
              <div class="text-sm text-orange-600 font-medium mt-1">预计消耗 {{ randomWorkout.calories }} 千卡</div>
            </div>
            <div class="space-y-2">
              <div v-for="(exercise, idx) in randomWorkout.exercises" :key="idx" class="flex items-center bg-white/60 rounded-lg p-2.5">
                <div class="w-7 h-7 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mr-3 text-white font-bold text-xs shadow-sm">
                  {{ idx + 1 }}
                </div>
                <span class="text-gray-700 font-medium">{{ exercise }}</span>
              </div>
            </div>
          </div>

          <!-- 随机生成按钮 -->
          <div class="flex space-x-3">
            <button 
              @click="generateRandomWorkout"
              class="flex-1 py-3.5 bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white font-bold rounded-xl transition-all flex items-center justify-center shadow-lg shadow-orange-200"
            >
              <i class="fa fa-random mr-2"></i>
              {{ randomWorkout ? '换一个' : '随机生成' }}
            </button>
            <button 
              v-if="randomWorkout"
              @click="confirmRandomWorkout"
              class="flex-1 py-3.5 bg-white text-orange-500 font-bold rounded-xl border border-orange-200 hover:bg-orange-50 transition-all"
            >
              采用此计划
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'

export default {
  name: 'WorkoutPlanModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close', 'generate-plan'],
  setup(props, { emit }) {
    const mode = ref('fixed')
    const weeklyFrequency = ref('5')
    const difficulty = ref('beginner')
    const duration = ref('30')
    const randomWorkout = ref(null)

    // 固定模式的周计划
    const workoutPlans = {
      beginner: {
        3: [
          { day: '周一', title: '上肢训练', exercises: '俯卧撑、哑铃弯举、三头臂屈伸' },
          { day: '周三', title: '核心训练', exercises: '平板支撑、仰卧起坐、俄罗斯转体' },
          { day: '周五', title: '下肢训练', exercises: '深蹲、箭步蹲、提踵' }
        ],
        4: [
          { day: '周一', title: '上肢训练', exercises: '俯卧撑、哑铃弯举、三头臂屈伸' },
          { day: '周二', title: '有氧训练', exercises: '慢跑30分钟、跳绳10分钟' },
          { day: '周四', title: '核心训练', exercises: '平板支撑、仰卧起坐、俄罗斯转体' },
          { day: '周六', title: '下肢训练', exercises: '深蹲、箭步蹲、提踵' }
        ],
        5: [
          { day: '周一', title: '上肢训练', exercises: '俯卧撑、哑铃弯举、三头臂屈伸' },
          { day: '周二', title: '有氧训练', exercises: '慢跑30分钟、跳绳10分钟' },
          { day: '周三', title: '核心训练', exercises: '平板支撑、仰卧起坐、俄罗斯转体' },
          { day: '周四', title: '下肢训练', exercises: '深蹲、箭步蹲、提踵' },
          { day: '周五', title: '全身训练', exercises: '波比跳、登山跑、开合跳' }
        ],
        6: [
          { day: '周一', title: '上肢训练', exercises: '俯卧撑、哑铃弯举、三头臂屈伸' },
          { day: '周二', title: '有氧训练', exercises: '慢跑30分钟、跳绳10分钟' },
          { day: '周三', title: '核心训练', exercises: '平板支撑、仰卧起坐、俄罗斯转体' },
          { day: '周四', title: '下肢训练', exercises: '深蹲、箭步蹲、提踵' },
          { day: '周五', title: '全身训练', exercises: '波比跳、登山跑、开合跳' },
          { day: '周六', title: '灵活性训练', exercises: '瑜伽拉伸、泡沫轴放松' }
        ]
      },
      intermediate: {
        3: [
          { day: '周一', title: '推力训练', exercises: '杠铃卧推、哑铃肩推、绳索下压' },
          { day: '周三', title: '拉力训练', exercises: '引体向上、杠铃划船、哑铃弯举' },
          { day: '周五', title: '腿部训练', exercises: '杠铃深蹲、腿举、腿弯举' }
        ],
        4: [
          { day: '周一', title: '推力训练', exercises: '杠铃卧推、哑铃肩推、绳索下压' },
          { day: '周二', title: '拉力训练', exercises: '引体向上、杠铃划船、哑铃弯举' },
          { day: '周四', title: '腿部训练', exercises: '杠铃深蹲、腿举、腿弯举' },
          { day: '周六', title: 'HIIT训练', exercises: '战绳、壶铃摇摆、跳箱' }
        ],
        5: [
          { day: '周一', title: '胸部训练', exercises: '杠铃卧推、哑铃飞鸟、绳索夹胸' },
          { day: '周二', title: '背部训练', exercises: '引体向上、杠铃划船、单臂哑铃划船' },
          { day: '周三', title: '腿部训练', exercises: '杠铃深蹲、腿举、腿弯举' },
          { day: '周四', title: '肩部/手臂', exercises: '哑铃肩推、侧平举、弯举、臂屈伸' },
          { day: '周五', title: '核心/有氧', exercises: '悬垂举腿、平板支撑、HIIT' }
        ],
        6: [
          { day: '周一', title: '胸部训练', exercises: '杠铃卧推、哑铃飞鸟、绳索夹胸' },
          { day: '周二', title: '背部训练', exercises: '引体向上、杠铃划船、单臂哑铃划船' },
          { day: '周三', title: '腿部训练', exercises: '杠铃深蹲、腿举、腿弯举' },
          { day: '周四', title: '肩部训练', exercises: '哑铃肩推、侧平举、面拉' },
          { day: '周五', title: '手臂训练', exercises: '弯举、锤式弯举、臂屈伸、下压' },
          { day: '周六', title: '核心/有氧', exercises: '悬垂举腿、平板支撑、HIIT' }
        ]
      },
      advanced: {
        3: [
          { day: '周一', title: '上半身力量', exercises: '卧推5x5、划船5x5、肩推3x8' },
          { day: '周三', title: '下半身力量', exercises: '深蹲5x5、硬拉5x5、腿举3x10' },
          { day: '周五', title: '全身功能性', exercises: '抓举、挺举、波比跳组合' }
        ],
        4: [
          { day: '周一', title: '力量训练A', exercises: '深蹲5x5、卧推5x5、划船5x5' },
          { day: '周二', title: '力量训练B', exercises: '硬拉5x5、肩推5x5、引体5x5' },
          { day: '周四', title: '爆发力训练', exercises: '抓举、挺举、壶铃摇摆' },
          { day: '周六', title: 'HIIT/体能', exercises: '战绳Tabata、跳箱、农夫行走' }
        ],
        5: [
          { day: '周一', title: '胸部/三头', exercises: '卧推5x5、上斜哑铃4x8、臂屈伸4x10' },
          { day: '周二', title: '背部/二头', exercises: '硬拉5x5、引体4x8、弯举4x10' },
          { day: '周三', title: '腿部', exercises: '深蹲5x5、前蹲4x6、腿弯举4x10' },
          { day: '周四', title: '肩部/核心', exercises: '肩推5x5、侧平举4x12、悬垂举腿4x15' },
          { day: '周五', title: '全身功能性', exercises: '奥举组合、壶铃流、冲刺训练' }
        ],
        6: [
          { day: '周一', title: '胸部', exercises: '卧推5x5、上斜4x8、飞鸟4x12' },
          { day: '周二', title: '背部', exercises: '硬拉5x5、划船4x8、下拉4x10' },
          { day: '周三', title: '腿部', exercises: '深蹲5x5、前蹲4x6、腿弯举4x10' },
          { day: '周四', title: '肩部', exercises: '肩推5x5、侧平举4x12、面拉4x15' },
          { day: '周五', title: '手臂', exercises: '弯举4x10、锤式4x10、臂屈伸4x10' },
          { day: '周六', title: '功能性/体能', exercises: '奥举、HIIT、核心训练' }
        ]
      }
    }

    // 随机运动数据库
    const randomWorkouts = [
      {
        name: '全身燃脂HIIT',
        icon: '🔥',
        baseCalories: 8,
        exercises: ['开合跳 30秒', '高抬腿 30秒', '波比跳 30秒', '登山跑 30秒', '深蹲跳 30秒']
      },
      {
        name: '核心强化训练',
        icon: '💪',
        baseCalories: 6,
        exercises: ['平板支撑 45秒', '仰卧起坐 20个', '俄罗斯转体 30个', '死虫式 20个', '侧平板 30秒/侧']
      },
      {
        name: '下肢力量训练',
        icon: '🦵',
        baseCalories: 7,
        exercises: ['深蹲 15个', '箭步蹲 12个/侧', '臀桥 20个', '提踵 25个', '靠墙静蹲 45秒']
      },
      {
        name: '上肢塑形训练',
        icon: '💪',
        baseCalories: 5,
        exercises: ['俯卧撑 15个', '三头臂屈伸 15个', '平板支撑转体 20个', '钻石俯卧撑 10个', '墙壁俯卧撑 20个']
      },
      {
        name: '有氧舞蹈',
        icon: '💃',
        baseCalories: 9,
        exercises: ['热身活动 2分钟', '基础步伐组合', '手臂摆动组合', '全身律动', '放松拉伸 2分钟']
      },
      {
        name: '瑜伽拉伸',
        icon: '🧘',
        baseCalories: 4,
        exercises: ['猫牛式 10次', '下犬式 60秒', '战士一式 30秒/侧', '鸽子式 30秒/侧', '婴儿式放松 60秒']
      }
    ]

    const weeklyPlan = computed(() => {
      return workoutPlans[difficulty.value][weeklyFrequency.value] || []
    })

    const generateRandomWorkout = () => {
      const workout = randomWorkouts[Math.floor(Math.random() * randomWorkouts.length)]
      randomWorkout.value = {
        ...workout,
        calories: workout.baseCalories * parseInt(duration.value)
      }
    }

    const confirmRandomWorkout = () => {
      emit('generate-plan', {
        mode: 'random',
        plan: randomWorkout.value,
        duration: duration.value
      })
    }

    const generateFixedPlan = () => {
      emit('generate-plan', {
        mode: 'fixed',
        plan: weeklyPlan.value,
        frequency: weeklyFrequency.value,
        difficulty: difficulty.value
      })
    }

    const close = () => {
      emit('close')
    }

    // 初始化时生成一个随机运动
    watch(() => props.visible, (newVal) => {
      if (newVal && mode.value === 'random' && !randomWorkout.value) {
        generateRandomWorkout()
      }
    })

    return {
      mode,
      weeklyFrequency,
      difficulty,
      duration,
      randomWorkout,
      weeklyPlan,
      generateRandomWorkout,
      confirmRandomWorkout,
      generateFixedPlan,
      close
    }
  }
}
</script>
