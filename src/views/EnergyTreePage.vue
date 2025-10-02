<template>
  <div class="page" id="page-energy-tree">
    <!-- 顶部用户信息 -->
    <header class="top-bar glass py-1 px-4 left-0 top-3 absolute z-10">
      <div class="max-w-md mx-auto flex items-center gap-4">
        <img src="@images/img_38.jpeg" alt="avatar" class="w-16 h-16 rounded-full border-2 border-white object-cover" />
        <div class="flex-1">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-lg font-semibold text-white">张小明</div>
              <div class="text-xs text-white/80">关注 25 | 粉丝 560</div>
            </div>
            <div class="text-right">
              <div class="text-sm text-white">LV 15</div>
              <div class="text-sm text-white">唤醒币: <span class="font-semibold">200</span></div>
              <div class="text-sm text-white">能量币: <span class="font-semibold">35</span></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- 主体：能量树和交互元素 -->
    <main class="relative overflow-hidden" style="height: calc(100vh - 60px); background: linear-gradient(to bottom, #1D4ED8 0%, #60A5FA 60%, #A9D0FE 100%);">
      <!-- 背景装饰 -->
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-200 rounded-full opacity-10 blur-3xl"></div>
      <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-200 rounded-full opacity-10 blur-3xl"></div>

      <!-- 能量树背景图 -->
      <div class="absolute top-2/9 inset-0 flex items-center justify-center relative">
        <img src="@images/tree_2.png" class="w-full">

        <!-- 能量果实（使用绝对定位） -->
        <div class="absolute inset-0 pointer-events-none z-100">
          <!-- 左上 - 赏金 -->
          <div class="absolute" style="left:16%; top:20%;">
            <div class="fruit fruit-green pointer-events-auto relative">
              <div class="text-center text-white">
                <div class="text-sm font-bold">赏金</div>
                <div class="text-xs mt-1">03:25</div>
              </div>
            </div>
          </div>
          <!-- 中上 - 登录 -->
          <div class="absolute" style="left:58%; top:11%;">
            <div class="fruit fruit-orange pointer-events-auto relative">
              <div class="text-center text-white">
                <div class="text-xs">登录</div>
              </div>
              <div class="minus-badge">-10%</div>
            </div>
          </div>
          <!-- 中 - 动态 -->
          <div class="absolute" style="left:56%; top:28%;">
            <div class="fruit fruit-purple pointer-events-auto relative">
              <div class="text-center text-white">
                <div class="text-sm font-bold">动态</div>
                <div class="text-xs mt-1">02:16</div>
              </div>
            </div>
          </div>
          <!-- 右下 - 唤醒 -->
          <div class="absolute" style="left:75%; top:20%;">
            <div class="fruit fruit-red pointer-events-auto relative">
              <div class="text-center text-white">
                <div class="text-sm font-bold">唤醒</div>
              </div>
              <div class="minus-badge">-10%</div>
            </div>
          </div>
          <!-- 中左 - 灵兽孵化 -->
          <div class="absolute" style="left:24%; top:54%;">
            <div class="fruit fruit-orange pointer-events-auto relative">
              <div class="text-center text-white">
                <div class="text-sm font-bold">灵兽孵化</div>
                <div class="text-xs mt-1">10-4#</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 能量树内容区域 -->
      <div class=" absolute top-0 left-0 w-full h-full">
        <!-- 顶部左侧聊天提示 -->
        <div class="absolute left-4 top-28 flex items-start gap-3">
          <div class="relative">
            <img src="@images/img_39.jpeg" class="w-14 h-14 rounded-full ring-2 ring-green-400 object-cover" alt="friend">
            <div class="absolute -bottom-2 -left-1 text-green-400 text-xs font-bold">去找ta</div>
          </div>
          <div class="message-bubble text-sky-900">
            <div class="text-sm font-semibold">李浩然 <span class="text-xs font-normal text-gray-700">18:20</span></div>
            <div class="text-xs text-gray-800">偷摘你的30能量</div>
          </div>
        </div>

        <!-- 右侧工具垂直栏 -->
        <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 items-center">
          <div class="right-icon glass flex-col text-center">
            <i class="fa fa-wallet text-white text-xl"></i>
            <div class="text-xs mt-1 text-white">365</div>
          </div>
          <div class="right-icon glass flex-col text-center">
            <i class="fa fa-gift text-white text-xl"></i>
            <div class="text-xs mt-1 text-white">1229</div>
          </div>
          <div class="right-icon glass flex-col text-center">
            <i class="fa fa-edit text-white text-xl"></i>
            <div class="text-xs mt-1 text-white">1229</div>
          </div>
        </div>

        <!-- 右下消息图标 -->
        <div class="absolute right-4 bottom-40">
          <div class="glass p-3 rounded-xl flex items-center gap-3">
            <i class="fa fa-envelope text-white text-xl"></i>
            <div class="bg-red-500 text-xs w-6 h-6 rounded-full flex items-center justify-center text-white">12</div>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部按钮组 -->
    <div class="fixed left-0 right-0 bottom-20 px-4 flex items-center justify-between safe-bottom z-10">
      <button id="dailyTasksBtn" class="w-15 h-15 rounded-full glass bubble pointer-events-auto text-white flex flex-col items-center justify-center" @click="showDailyTasks">
        <div class="text-xs">每日</div>
        <div class="text-xs">任务</div>
      </button>
      <button id="friendRankingBtn" class="w-15 h-15 rounded-full glass bubble pointer-events-auto text-white flex flex-col items-center justify-center" @click="showFriendRanking">
        <div class="text-xs">好友</div>
        <div class="text-xs">排行</div>
      </button>

      <div id="shakeBtn" class="w-20 h-20 rounded-full glass bubble-big flex flex-col items-center justify-center pointer-events-auto cursor-pointer select-none shadow-lg" @click="shakeTree">
        <div class="text-xs text-white">摇一摇</div>
        <div id="countdown" class="text-xl font-bold text-white">{{ formattedCountdown }}</div>
        <div id="leftCount" class="text-xs text-white/80">剩余 {{ remainingShakes }} 次</div>
      </div>

      <button id="energyItemsBtn" class="w-15 h-15 rounded-full glass bubble pointer-events-auto text-white flex flex-col items-center justify-center" @click="showEnergyItems">
        <div class="text-xs">能量</div>
        <div class="text-xs">道具</div>
      </button>
      <button id="spiritBeastBtn" class="w-15 h-15 rounded-full glass bubble pointer-events-auto text-white flex flex-col items-center justify-center" @click="showSpiritBeast">
        <div class="text-xs">灵兽</div>
        <div class="text-xs">宇宙</div>
      </button>
    </div>

    <FooterNav activePage="energy" />
  </div>
</template>

<style>
  /* 玻璃拟态效果 */
  .glass {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  /* 顶部渐变栏 */
  .top-bar {
    background: linear-gradient(90deg, #09a3ff66, #0aa0ff22);
  }

  /* 小气泡样式 */
  .bubble {
    background-image: linear-gradient(to bottom, #53ec6a66, #2ef34822);
    border: 2px solid #fff;
  }

  .bubble-big {
    background-image: linear-gradient(to bottom, #53ec6a66, #2ef34822);
  }

  /* 右侧图标容器 */
  .right-icon {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }

  /* 果实样式 */
  .fruit {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: float 3s ease-in-out infinite;
    cursor: pointer;
  }

  .fruit-orange {
    background: radial-gradient(circle at 30% 30%, #FFD700, #FF6B35);
    box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
  }

  .fruit-purple {
    background: radial-gradient(circle at 30% 30%, #DDA0DD, #9370DB);
    box-shadow: 0 4px 15px rgba(147, 112, 219, 0.4);
  }

  .fruit-red {
    background: radial-gradient(circle at 30% 30%, #FFB6C1, #DC143C);
    box-shadow: 0 4px 15px rgba(220, 20, 60, 0.4);
  }

  .fruit-green {
    background: radial-gradient(circle at 30% 30%, #98FB98, #228B22);
    box-shadow: 0 4px 15px rgba(34, 139, 34, 0.4);
  }

  /* 浮动动画 */
  @keyframes float {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  /* 气泡倒计时样式 */
  .countdown-badge {
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 10px;
  }

  /* 负号标记 */
  .minus-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #FF6B35;
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
  }

  /* 消息气泡 */
  .message-bubble {
    max-width: 220px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 16px;
    border-bottom-left-radius: 4px;
    padding: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  /* 底部安全距离 */
  .safe-bottom {
    padding-bottom: env(safe-area-inset-bottom);
  }
</style>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import FooterNav from '../components/FooterNav.vue'

export default {
  name: 'EnergyTreePage',
  components: {
    FooterNav
  },
  setup() {
    // 初始秒数与剩余次数
    const seconds = ref(32)
    const remainingShakes = ref(3)
    const formattedCountdown = ref('0:32')
    let timer = null
    let running = ref(false)

    // 格式化时间
    const formatTime = (s) => {
      const m = Math.floor(s / 60)
      const ss = s % 60
      return `${m}:${ss.toString().padStart(2, '0')}`
    }

    // 开始倒计时
    const startCountdown = () => {
      if (running.value) return
      
      running.value = true
      timer = setInterval(() => {
        seconds.value--
        formattedCountdown.value = formatTime(seconds.value)
        
        if (seconds.value <= 0) {
          clearInterval(timer)
          running.value = false
          remainingShakes.value = 3
          seconds.value = 32
          formattedCountdown.value = formatTime(seconds.value)
        }
      }, 1000)
    }

    // 创建弹窗函数
    const createPopup = (title, content) => {
      // 检查是否已存在弹窗，存在则移除
      const existingPopup = document.getElementById('customPopup');
      if (existingPopup) {
        existingPopup.remove();
      }

      // 创建弹窗容器
      const popupContainer = document.createElement('div');
      popupContainer.id = 'customPopup';
      popupContainer.style.position = 'fixed';
      popupContainer.style.left = '0';
      popupContainer.style.top = '0';
      popupContainer.style.width = '100%';
      popupContainer.style.height = '100%';
      popupContainer.style.backgroundColor = 'rgba(0,0,0,0.5)';
      popupContainer.style.display = 'flex';
      popupContainer.style.justifyContent = 'center';
      popupContainer.style.alignItems = 'center';
      popupContainer.style.zIndex = '999';

      // 创建弹窗内容
      const popupContent = document.createElement('div');
      popupContent.style.width = '85%';
      popupContent.style.maxWidth = '320px';
      popupContent.style.backgroundColor = 'white';
      popupContent.style.borderRadius = '16px';
      popupContent.style.overflow = 'hidden';

      // 创建弹窗标题
      const popupTitle = document.createElement('div');
      popupTitle.style.padding = '20px';
      popupTitle.style.fontSize = '16px';
      popupTitle.style.fontWeight = 'bold';
      popupTitle.style.textAlign = 'center';
      popupTitle.textContent = title;

      // 创建弹窗内容区
      const popupBody = document.createElement('div');
      popupBody.style.padding = '0 20px 20px 20px';
      popupBody.style.maxHeight = '300px';
      popupBody.style.overflowY = 'auto';
      popupBody.innerHTML = content;

      // 创建关闭按钮
      const closeButton = document.createElement('div');
      closeButton.style.padding = '12px 20px';
      closeButton.style.backgroundColor = '#FF6B35';
      closeButton.style.color = 'white';
      closeButton.style.textAlign = 'center';
      closeButton.style.fontSize = '14px';
      closeButton.style.fontWeight = 'bold';
      closeButton.textContent = '关闭';
      closeButton.style.cursor = 'pointer';

      // 组装弹窗
      popupContent.appendChild(popupTitle);
      popupContent.appendChild(popupBody);
      popupContent.appendChild(closeButton);
      popupContainer.appendChild(popupContent);
      document.body.appendChild(popupContainer);

      // 添加关闭事件
      closeButton.addEventListener('click', function () {
        popupContainer.remove();
      });

      // 点击背景关闭弹窗
      popupContainer.addEventListener('click', function (e) {
        if (e.target === popupContainer) {
          popupContainer.remove();
        }
      });
    }

    // 摇一摇功能
    const shakeTree = () => {
      if (remainingShakes.value > 0 && !running.value) {
        remainingShakes.value--
        if (remainingShakes.value === 0) {
          startCountdown()
        }
        // 简单动画：缩放
        const shakeBtn = document.getElementById('shakeBtn');
        if (shakeBtn) {
          shakeBtn.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.06)' },
            { transform: 'scale(1)' }
          ], {
            duration: 450,
            easing: 'ease-out'
          });
        }

        // 模拟获得能量（这里只是提示）
        setTimeout(() => {
          const gained = Math.floor(Math.random() * 15) + 1;
          // 使用原生toast提示
          const note = document.createElement('div');
          note.textContent = '+' + gained + ' 能量';
          note.style.position = 'fixed';
          note.style.left = '50%';
          note.style.top = '40%';
          note.style.transform = 'translateX(-50%)';
          note.style.padding = '8px 14px';
          note.style.borderRadius = '999px';
          note.style.background = 'rgba(0,0,0,0.6)';
          note.style.color = '#fff';
          note.style.zIndex = 80;
          document.body.appendChild(note);
          setTimeout(() => note.remove(), 1400);
        }, 400);
      }
    }

    // 显示每日任务
    const showDailyTasks = () => {
      const content = `
        <div class="space-y-4">
          <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <div class="font-medium">完成3次唤醒</div>
              <div class="text-xs text-gray-500">帮助3位朋友唤醒潜能</div>
            </div>
            <div class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">+10能量</div>
          </div>
          <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <div class="font-medium">发布动态</div>
              <div class="text-xs text-gray-500">分享今日感悟或收获</div>
            </div>
            <div class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">+10能量</div>
          </div>
          <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <div class="font-medium">邀请好友</div>
              <div class="text-xs text-gray-500">成功邀请一位好友注册</div>
            </div>
            <div class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">+20能量</div>
          </div>
          <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <div class="font-medium">每日签到</div>
              <div class="text-xs text-gray-500">连续签到30天有惊喜</div>
            </div>
            <div class="bg-success text-white px-3 py-1 rounded-full text-sm">已完成</div>
          </div>
        </div>
      `;
      createPopup('每日任务', content);
    }

    // 显示好友排行
    const showFriendRanking = () => {
      const content = `
        <div class="space-y-4">
          <div class="flex items-center p-3 bg-yellow-50 rounded-lg">
            <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
            <img src="https://i.pravatar.cc/64?img=1" class="w-12 h-12 rounded-full mr-3" alt="avatar">
            <div class="flex-1">
              <div class="font-medium">李浩然</div>
              <div class="text-xs text-gray-500">能量值: 980</div>
            </div>
            <div class="text-xs bg-primary/10 text-primary px-2 py-1 rounded">查看</div>
          </div>
          <div class="flex items-center p-3 bg-gray-50 rounded-lg">
            <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
            <img src="https://i.pravatar.cc/64?img=2" class="w-12 h-12 rounded-full mr-3" alt="avatar">
            <div class="flex-1">
              <div class="font-medium">王小花</div>
              <div class="text-xs text-gray-500">能量值: 860</div>
            </div>
            <div class="text-xs bg-primary/10 text-primary px-2 py-1 rounded">查看</div>
          </div>
          <div class="flex items-center p-3 bg-gray-50 rounded-lg">
            <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
            <img src="https://i.pravatar.cc/64?img=3" class="w-12 h-12 rounded-full mr-3" alt="avatar">
            <div class="flex-1">
              <div class="font-medium">张大山</div>
              <div class="text-xs text-gray-500">能量值: 750</div>
            </div>
            <div class="text-xs bg-primary/10 text-primary px-2 py-1 rounded">查看</div>
          </div>
          <div class="flex items-center p-3 bg-gray-50 rounded-lg">
            <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">4</div>
            <img src="https://i.pravatar.cc/64?img=40" class="w-12 h-12 rounded-full mr-3" alt="avatar">
            <div class="flex-1">
              <div class="font-medium">你</div>
              <div class="text-xs text-gray-500">能量值: 520</div>
            </div>
            <div class="text-xs bg-primary/10 text-primary px-2 py-1 rounded">查看</div>
          </div>
        </div>
      `;
      createPopup('好友排行', content);
    }

    // 显示能量道具
    const showEnergyItems = () => {
      const content = `
        <div class="space-y-4">
          <div class="flex items-center p-3 bg-gray-50 rounded-lg">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <i class="fa fa-tree text-green-500 text-xl"></i>
            </div>
            <div class="flex-1">
              <div class="font-medium">成长加速卡</div>
              <div class="text-xs text-gray-500">让能量树成长速度提升20%</div>
            </div>
            <div class="text-xs bg-primary px-3 py-1 rounded-full text-white">使用</div>
          </div>
          <div class="flex items-center p-3 bg-gray-50 rounded-lg">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
              <i class="fa fa-shield text-purple-500 text-xl"></i>
            </div>
            <div class="flex-1">
              <div class="font-medium">能量守护盾</div>
              <div class="text-xs text-gray-500">24小时内防止好友偷取能量</div>
            </div>
            <div class="text-xs bg-gray-300 px-3 py-1 rounded-full text-white">50能量</div>
          </div>
          <div class="flex items-center p-3 bg-gray-50 rounded-lg">
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
              <i class="fa fa-magic text-yellow-500 text-xl"></i>
            </div>
            <div class="flex-1">
              <div class="font-medium">幸运果实</div>
              <div class="text-xs text-gray-500">有机会获得双倍能量</div>
            </div>
            <div class="text-xs bg-primary px-3 py-1 rounded-full text-white">使用</div>
          </div>
        </div>
      `;
      createPopup('能量道具', content);
    }

    // 显示灵兽宇宙
    const showSpiritBeast = () => {
      const content = `
        <div class="space-y-4">
          <div class="text-center mb-4">
            <div class="text-lg font-bold text-primary mb-2">灵兽孵化中</div>
            <div class="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <div class="text-3xl text-white">10-4#</div>
            </div>
            <div class="text-sm mt-2">预计孵化时间还剩: <span class="text-primary">23小时15分钟</span></div>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <div class="font-medium mb-2">灵兽宇宙说明</div>
            <div class="text-xs text-gray-600 leading-relaxed">
              灵兽是能量树的守护者，不同的灵兽拥有不同的能力。孵化出的灵兽可以帮助你收集更多的能量，防止好友偷取，甚至可以协助你完成任务。
              <br><br>
              灵兽可以通过能量果实孵化获得，越稀有的果实孵化出稀有灵兽的概率越高。
            </div>
          </div>
          <div class="flex justify-center space-x-4">
            <button class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">加速孵化</button>
            <button class="bg-primary text-white px-4 py-2 rounded-full text-sm">查看孵化器</button>
          </div>
        </div>
      `;
      createPopup('灵兽宇宙', content);
    }

    // 组件挂载时启动倒计时（如果需要）
    onMounted(() => {
      // 可以根据实际需求决定是否在组件挂载时启动倒计时
    })

    // 组件卸载时清除计时器
    onUnmounted(() => {
      if (timer) {
        clearInterval(timer)
      }
    })

    return {
      formattedCountdown,
      remainingShakes,
      shakeTree,
      showDailyTasks,
      showFriendRanking,
      showEnergyItems,
      showSpiritBeast
    }
  }
}
</script>