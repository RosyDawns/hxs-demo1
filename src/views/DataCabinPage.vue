<template>
  <div class="page bg-[#FFF8F2] min-h-screen pb-6">
    <!-- 顶部Tab切换 -->
    <div class="sticky top-0 z-50 bg-[#FFF8F2]/95 backdrop-blur-sm pt-2 pb-2 px-4 flex items-center gap-2">
      <button @click="router.push('/ai-assistant')" class="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white rounded-full shadow-sm border border-orange-100 text-gray-600 active:scale-95 transition-transform">
        <i class="fa-solid fa-chevron-left text-lg"></i>
      </button>
      <div class="flex-1 flex justify-between items-center bg-white rounded-full p-1 shadow-sm border border-orange-100 overflow-x-auto">
        <button v-for="tab in tabs" :key="tab.key" @click="navigateTab(tab.key)"
          class="flex-1 min-w-[60px] py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap"
          :class="tab.key === 'datacabin' ? 'bg-[#FF8A50] text-white shadow-md' : 'text-gray-400 hover:text-gray-600'">
          {{ tab.name }}
        </button>
      </div>
    </div>

    <!-- 今日数据概览 -->
    <div class="mx-3 mt-3 bg-white rounded-3xl p-4 shadow-sm relative overflow-hidden">
      <!-- 标题栏 -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <div class="w-1 h-4 bg-green-500 rounded-full"></div>
          <span class="font-bold text-gray-800 text-lg">今日数据概览</span>
        </div>
        <div class="w-6 h-6 text-gray-300">
          <i class="fa-solid fa-gear"></i>
        </div>
      </div>

      <div class="flex gap-3">
        <!-- 左侧：体重 -->
        <div class="flex-1 bg-[#FFF5EE] rounded-2xl p-4 flex flex-col justify-between">
          <div class="text-center">
            <p class="text-xs text-gray-500">当前体重</p>
            <p class="text-2xl font-bold text-[#FF6B00] mb-1 h-10 leading-10">{{ currentWeight }} <span
                class="text-sm font-normal">kg</span></p>
            <p class="text-[10px] text-gray-400">📅 今天 08:30</p>
          </div>
        </div>
        <!-- 右侧：打卡 -->
        <div class="flex-1 bg-[#FFF5EE] rounded-2xl p-4 flex flex-col justify-between">
          <div class="text-center">
            <p class="text-xs text-gray-500">今日运动</p>
            <p class="text-sm font-bold mb-1 h-10 leading-10" :class="hasExercise ? 'text-green-500' : 'text-red-500'">
              {{ hasExercise ? '已打卡' : '今日不练' }}</p>
            <button v-if="!hasExercise" @click="navigateTab('exercise')"
              class="text-xs text-[#EAB308] border border-[#EAB308] rounded-full px-2 py-0.5 bg-yellow-50">去打卡</button>
            <span v-else
              class="text-xs text-green-600 bg-green-50 rounded-full px-2 py-0.5 border border-green-200">很棒</span>
          </div>
        </div>
      </div>

      <div class="flex gap-3 mt-3">
        <!-- 左侧：代谢热量 -->
        <div class="flex-1 bg-[#FFF5EE] rounded-2xl p-4 flex flex-col justify-between">
          <div class="text-center">
            <p class="text-xs text-gray-500">代谢指数</p>
            <p class="text-2xl font-bold text-[#3B82F6] mb-1 h-10 leading-10">1680</p>
            <span class="text-[10px] bg-green-100 text-green-600 px-1.5 py-0.5 rounded">正常</span>
          </div>
        </div>
        <!-- 右侧：饮食打卡 -->
        <div class="flex-1 bg-[#FFF5EE] rounded-2xl p-4 flex flex-col justify-between">
          <div class="text-center">
            <p class="text-xs text-gray-500">饮食打卡</p>
            <p class="text-sm font-bold mb-1 h-10 leading-10" :class="hasDiet ? 'text-green-500' : 'text-red-500'">{{
              hasDiet ? '已打卡' : '未打卡' }}</p>
            <button v-if="!hasDiet" @click="navigateTab('diet')"
              class="text-xs text-[#EAB308] border border-[#EAB308] rounded-full px-2 py-0.5 bg-yellow-50">去打卡</button>
            <span v-else
              class="text-xs text-green-600 bg-green-50 rounded-full px-2 py-0.5 border border-green-200">继续保持</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 每日数据打卡 -->
    <div class="mx-3 mt-3 bg-white rounded-3xl p-4 shadow-sm">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <span class="text-xl">📝</span>
          <span class="font-bold text-gray-800 text-lg">每日数据打卡</span>
        </div>
        <span class="text-xs text-gray-400">历史记录 ></span>
      </div>

      <!-- 打卡类型切换 -->
      <div class="flex gap-2 mb-4">
        <button v-for="type in checkInTypes" :key="type.key" @click="checkInType = type.key"
          class="flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 bg-white border"
          :class="checkInType === type.key ? 'text-[#FF8A50] border-orange-200 shadow-sm' : 'text-gray-400 border-gray-100'">
          {{ type.icon }} {{ type.name }}
        </button>
      </div>

      <!-- 不同的打卡内容 -->
      <div v-if="checkInType === 'weight'">
        <div class="flex gap-3 mb-4">
          <div class="flex-1">
            <p class="text-xs text-gray-500 mb-2">当前体重</p>
            <div class="bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
              <input type="text" v-model="weightInput"
                class="w-full text-center text-xl font-bold text-gray-800 focus:outline-none" placeholder="85.5" />
            </div>
          </div>
          <div class="flex-1">
            <p class="text-xs text-gray-500 mb-2">目标体重</p>
            <div class="bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
              <input type="text" v-model="medicineInput"
                class="w-full text-center text-xl font-bold text-gray-800 focus:outline-none" placeholder="75.0" />
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="checkInType === 'exercise'">
        <p class="text-sm text-gray-600 mb-2">今日运动状态</p>
        <div class="flex gap-3 mb-4">
          <button @click="exerciseStatus = true"
            class="flex-1 py-3 rounded-xl font-bold shadow-sm flex items-center justify-center gap-1 transition-colors"
            :class="exerciseStatus ? 'bg-green-500 text-white' : 'bg-white border border-gray-200 text-gray-500'">
            <i class="fa-solid fa-check"></i> 已练不欠
          </button>
          <button @click="exerciseStatus = false"
            class="flex-1 py-3 rounded-xl font-bold shadow-sm flex items-center justify-center gap-1 transition-colors"
            :class="!exerciseStatus ? 'bg-red-500 text-white' : 'bg-white border border-gray-200 text-gray-500'">
            <i class="fa-solid fa-xmark"></i> 今日不练
          </button>
        </div>
      </div>

      <div v-else-if="checkInType === 'diet'">
        <div class="flex gap-2 mb-4">
          <button
            class="flex-1 bg-white border border-gray-100 py-2 rounded-lg text-xs text-gray-600 flex items-center justify-center gap-1">
            🌅 早餐
          </button>
          <button
            class="flex-1 bg-white border border-gray-100 py-2 rounded-lg text-xs text-gray-600 flex items-center justify-center gap-1">
            ☀️ 午餐
          </button>
          <button
            class="flex-1 bg-white border border-gray-100 py-2 rounded-lg text-xs text-gray-600 flex items-center justify-center gap-1">
            🌙 晚餐
          </button>
        </div>
        <p class="text-sm text-gray-600 mb-2">是否按饮食计划执行</p>
        <div class="flex gap-3 mb-4">
          <button @click="dietStatus = true"
            class="flex-1 py-3 rounded-xl font-bold shadow-sm flex items-center justify-center gap-1 transition-colors"
            :class="dietStatus ? 'bg-orange-400 text-white' : 'bg-white border border-gray-200 text-gray-500'">
            <i class="fa-solid fa-check"></i> 是
          </button>
          <button @click="dietStatus = false"
            class="flex-1 py-3 rounded-xl font-bold shadow-sm flex items-center justify-center gap-1 transition-colors"
            :class="!dietStatus ? 'bg-red-500 text-white' : 'bg-white border border-gray-200 text-gray-500'">
            <i class="fa-solid fa-xmark"></i> 否
          </button>
        </div>
      </div>

      <!-- 打卡按钮 -->
      <button @click="checkIn"
        class="w-full bg-[#FF7D40] text-white py-3 rounded-full font-bold shadow-lg shadow-orange-200 mb-4">
        🗡️ 打卡
      </button>

      <!-- 进度条 -->
      <div class="flex gap-2 mb-2">
        <div class="flex-1 bg-[#FFEDD5] rounded-l-full py-2 text-center text-xs font-bold text-[#FF7D40]">🔥 减脂进度</div>
        <div class="flex-1 bg-white border border-gray-100 rounded-r-full py-2 text-center text-xs text-gray-400">💪
          增肌进度</div>
      </div>

      <div class="relative pt-4 pb-2">
        <div class="flex justify-between text-xs text-gray-500 mb-1">
          <span>目标: 75kg</span>
          <span>已完成 45%</span>
        </div>
        <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div class="h-full bg-[#FF7D40] rounded-full w-[45%]"></div>
        </div>
      </div>

      <!-- 去挑战按钮 -->
      <button @click="navigateTab('slim')"
        class="w-full mt-2 bg-gradient-to-r from-[#FF7D40] to-[#FF5500] text-white py-3 rounded-2xl font-bold shadow-lg shadow-orange-200">
        🔥 去唤醒
      </button>
    </div>

    <!-- 好友组队 -->
    <div class="mx-3 mt-3 bg-[#E0F2FE] rounded-3xl p-4 shadow-sm relative overflow-hidden">
      <div class="flex items-center justify-between mb-4 relative z-10">
        <div class="flex items-center gap-2">
          <span class="text-xl">👥</span>
          <span class="font-bold text-gray-800 text-lg">好友组队</span>
        </div>
        <div class="flex bg-white rounded-full p-0.5">
          <button @click="teamTab = 'recruit'" class="px-3 py-1 rounded-full text-xs font-bold transition-all" :class="teamTab === 'recruit' ? 'bg-[#3B82F6] text-white shadow-sm' : 'text-gray-400'">招募</button>
          <button @click="teamTab = 'friend'" class="px-3 py-1 rounded-full text-xs font-bold transition-all" :class="teamTab === 'friend' ? 'bg-[#3B82F6] text-white shadow-sm' : 'text-gray-400'">好友</button>
        </div>
      </div>

      <div class="relative z-10" v-if="teamTab === 'recruit'">
        <div class="flex space-x-1">
          <div class="w-10 h-10 rounded-full border-2 border-white bg-orange-200 flex items-center justify-center">🐯</div>
          <div class="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">🐰</div>
          <div class="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">🐻</div>
          <div class="w-10 h-10 rounded-full border-2 border-dashed border-blue-300 bg-white flex items-center justify-center text-blue-400 text-xl font-light">+</div>
        </div>

        <div class="bg-white rounded-2xl p-4 shadow-sm mt-2">
          <div class="flex items-center justify-between text-center">
            <div>
              <p class="text-lg font-bold text-[#3B82F6]">3</p>
              <p class="text-[10px] text-gray-400">坚持达标</p>
            </div>
            <div>
              <p class="text-lg font-bold text-[#3B82F6]">12</p>
              <p class="text-[10px] text-gray-400">组队天数</p>
            </div>
            <div>
              <p class="text-lg font-bold text-[#3B82F6]">92%</p>
              <p class="text-[10px] text-gray-400">组队打卡率</p>
            </div>
          </div>
        </div>

        <button class="w-full mt-3 bg-[#FF7D40] text-white py-3 rounded-full font-bold shadow-sm relative z-10">
          🔔 去提醒
        </button>
      </div>

      <div class="relative z-10" v-else>
         <div class="bg-white rounded-2xl p-3 shadow-sm space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-gray-50">
               <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">👩</div>
                  <div>
                     <p class="text-sm font-bold text-gray-800">小红书运动搭子</p>
                     <p class="text-[10px] text-gray-400">今日已打卡</p>
                  </div>
               </div>
               <span class="text-xs text-green-500 font-bold">已完成</span>
            </div>
            <div class="flex items-center justify-between">
               <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">👨</div>
                  <div>
                     <p class="text-sm font-bold text-gray-800">隔壁老王</p>
                     <p class="text-[10px] text-gray-400">今日未打卡</p>
                  </div>
               </div>
               <button @click="remindTeam" class="text-xs border border-[#FF7D40] text-[#FF7D40] px-2 py-1 rounded-full">提醒TA</button>
            </div>
         </div>
      </div>
    </div>

    <!-- 盲盒计划挑战赛 -->
    <div class="mx-3 mt-3 bg-[#FFF3E0] rounded-3xl p-4 shadow-sm border border-orange-100">
      <div class="text-center mb-4">
        <div class="flex items-center justify-center gap-2 mb-1">
          <span class="text-xl">🎁</span>
          <span class="font-bold text-gray-800 text-lg">盲盒计划挑战赛</span>
        </div>
        <p class="text-xs text-gray-500">创建你的专属计划，发现无限盲盒灵感</p>
      </div>

      <!-- 数据卡片 -->
      <div
        class="bg-gradient-to-br from-[#FF9F43] to-[#FF6B00] rounded-2xl p-4 text-white shadow-md relative overflow-hidden">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="text-lg">📊</span>
            <span class="font-bold">我的话题数据</span>
          </div>
          <span class="bg-white/20 px-2 py-0.5 rounded text-xs">Top 12</span>
        </div>

        <div class="flex gap-4 mb-4">
          <div class="flex-1 text-center border-r border-white/20">
            <p class="text-2xl font-bold">2,456</p>
            <p class="text-xs opacity-80">❤️ 收藏数</p>
          </div>
          <div class="flex-1 text-center">
            <p class="text-2xl font-bold">1,893</p>
            <p class="text-xs opacity-80">⚡ 消耗排行</p>
          </div>
        </div>

        <div class="flex justify-between text-xs bg-white/10 rounded-lg p-2">
          <span>🎁 28 奖励</span>
          <span>⚪ 156 积分</span>
          <span>🏆 Top 12 排名</span>
        </div>

        <!-- 列表 -->
        <div class="mt-3 bg-white/20 rounded-xl p-2 space-y-2">
          <div class="flex justify-between items-center p-2">
            <span class="text-sm text-gray-700">📝 我创建的盲盒话题</span>
          </div>
          <div class="flex justify-between items-center p-2 border-t border-solid border-gray-100">
            <span class="text-sm text-gray-700">🐰 996高效燃脂计划</span>
            <span class="text-xs text-orange-500">❤️ 1.2k</span>
          </div>
          <div class="flex justify-between items-center p-2 border-t border-gray-100">
            <span class="text-sm text-gray-700">🥗 健康减脂饮食</span>
            <span class="text-xs text-orange-500">❤️ 892</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 热门盲盒推荐 -->
    <div class="mx-3 mt-4 mb-6">
      <div class="flex items-center justify-between mb-3 px-1">
        <div class="flex items-center gap-1">
          <span class="text-orange-500">🔥</span>
          <span class="font-bold text-gray-800">热门盲盒推荐</span>
        </div>
        <span class="text-xs text-gray-400">查看更多 ></span>
      </div>

      <div class="space-y-3">
        <div v-for="item in hotBoxes" :key="item.id"
          class="bg-white rounded-2xl p-4 shadow-sm flex justify-between items-start">
          <div>
            <p class="font-bold text-gray-800 text-sm mb-1">{{ item.title }}</p>
            <p class="text-xs text-gray-400 mb-2">{{ item.desc }}</p>
            <div class="flex items-center gap-3 text-xs text-gray-400">
              <span class="flex items-center gap-1"><i class="fa-solid fa-heart text-red-400"></i> {{ item.likes
                }}</span>
              <span class="flex items-center gap-1"><i class="fa-solid fa-thumbs-up text-yellow-400"></i> {{
                item.comments }}</span>
              <span class="flex items-center gap-1"><i class="fa-solid fa-share text-blue-400"></i> {{ item.shares
                }}</span>
              <span class="flex items-center gap-1"><i class="fa-regular fa-comment text-gray-400"></i> {{ item.views
                }}</span>
            </div>
          </div>
          <div class="text-orange-500 text-lg">
            <i v-if="item.id === 1" class="fa-solid fa-fire"></i>
            <i v-if="item.id === 2" class="fa-solid fa-trophy"></i>
            <i v-if="item.id === 3" class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'DataCabinPage',
  setup() {
    const router = useRouter()
    const checkInType = ref('weight')
    const weightInput = ref('')
    const medicineInput = ref('')

    // 概览数据状态
    const currentWeight = ref('85.5')
    const hasExercise = ref(false)
    const hasDiet = ref(false)

    // 打卡表单临时状态
    const exerciseStatus = ref(true)
    const dietStatus = ref(true)

    // 好友组队Tab
    const teamTab = ref('recruit')

    const tabs = [
      { key: 'datacabin', name: '数据舱' },
      { key: 'exercise', name: '练了么' },
      { key: 'diet', name: '吃了么' },
      { key: 'slim', name: '瘦了么' }
    ]

    const checkInTypes = [
      { key: 'weight', name: '体重', icon: '⚖️' },
      { key: 'exercise', name: '运动', icon: '🏃' },
      { key: 'diet', name: '饮食', icon: '🍎' }
    ]

    const hotBoxes = ref([
      { id: 1, title: '996牛马如何高效燃脂计划', desc: '收藏·二斗约10分', likes: '2,456', comments: '1,893', shares: '528', views: '88' },
      { id: 2, title: '200斤大胖子稳30斤减肥', desc: '推广大金7斤吃', likes: '5,892', comments: '3,258', shares: '1,158', views: '234' },
      { id: 3, title: '懒人居家瘦腰计划', desc: '每天30min训练', likes: '1,756', comments: '982', shares: '342', views: '67' }
    ])

    const goBack = () => {
      router.back()
    }

    const navigateTab = (key) => {
      const routes = {
        datacabin: '/data-cabin',
        exercise: '/exercise',
        diet: '/diet',
        slim: '/slim'
      }
      if (routes[key] && key !== 'datacabin') {
        router.replace(routes[key])
      }
    }

    const checkIn = () => {
      if (checkInType.value === 'weight') {
        if (weightInput.value) {
          currentWeight.value = weightInput.value
          alert('体重打卡成功！')
        } else {
          alert('请输入体重')
        }
      } else if (checkInType.value === 'exercise') {
        hasExercise.value = exerciseStatus.value
        alert(exerciseStatus.value ? '运动打卡成功！' : '已记录今日休息')
      } else if (checkInType.value === 'diet') {
        hasDiet.value = dietStatus.value
        alert(dietStatus.value ? '饮食打卡成功！' : '已记录饮食情况')
      }
    }

    const remindTeam = () => {
      alert('已发送提醒给队友！')
    }

    return {
      tabs,
      checkInType,
      checkInTypes,
      weightInput,
      medicineInput,
      hotBoxes,
      currentWeight,
      hasExercise,
      hasDiet,
      exerciseStatus,
      dietStatus,
      teamTab,
      goBack,
      navigateTab,
      checkIn,
      remindTeam,
      router
    }
  }
}
</script>
