<template>
  <div class="page relative" id="page-energy-tree">
    <!-- 顶部用户信息 -->
    <header
      class="top-bar left-4 top-8 absolute z-10 rounded-l-full overflow-hidden"
    >
      <div class="max-w-md mx-auto flex items-center gap-3">
        <img
          src="@images/img_38.jpeg"
          alt="avatar"
          class="w-16 h-16 rounded-full border-2 border-white/50 object-cover shadow-lg"
        />
        <div class="flex-1 min-w-0 pr-5">
          <div class="flex items-center justify-between gap-4">
            <div class="flex-shrink-0">
              <div class="text-lg font-bold text-white mb-1 flex items-center">
                <span>张小明</span>
                <div class="text-base font-bold text-white ml-3">LV 15</div>
              </div>
              <div class="text-xs text-white/95">
                关注 <span class="font-semibold">25</span> | 粉丝
                <span class="font-semibold">560</span>
              </div>
            </div>
            <div class="text-right flex-shrink-0">
              <div class="text-sm text-white/95 whitespace-nowrap">
                唤醒币: <span class="font-semibold">200</span>
              </div>
              <div class="text-sm text-white/95 whitespace-nowrap">
                能量币: <span class="font-semibold">35</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- 顶部左侧聊天提示 -->
    <div
      class="absolute z-1 left-4 top-30 flex items-center"
      @click="$router.push('/ouyang')"
    >
      <div class="relative z-1">
        <img
          src="@images/img_39.jpeg"
          class="w-14 h-14 rounded-full object-cover"
          style="border: 2px solid #91fc4d"
          alt="friend"
        />
        <div
          class="absolute -bottom-1 left-1/2 -translate-x-1/2 text-black"
          style="
            font-size: 12px;
            -webkit-text-stroke: 1.5px #91fc4d;
            white-space: nowrap;
          "
        >
          去找ta
        </div>
      </div>
      <div class="message-bubble py-1 pl-4 pr-6 rounded-r-full -ml-2">
        <div class="text-xs font-semibold flex items-center">
          李浩然
          <span class="text-xs font-normal 0">18:20</span>
        </div>
        <div class="text-xs mt-0.5">偷摘你的30能量</div>
      </div>
    </div>

    <!-- 主体：能量树和交互元素 -->
    <main
      class="relative overflow-hidden"
      style="
        height: calc(100vh - 60px);
        background: linear-gradient(
          to bottom,
          #1d4ed8 0%,
          #60a5fa 60%,
          #a9d0fe 100%
        );
      "
    >
      <!-- 背景装饰 -->
      <div
        class="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-200 rounded-full opacity-10 blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-200 rounded-full opacity-10 blur-3xl"
      ></div>

      <!-- 能量树背景图 -->
      <div class="absolute lef-0 bottom-0 w-full inset-0">
        <div class="absolute bottom-40 left-0 flex items-center justify-center">
          <img src="@images/tree_2.png" class="w-full block" />
          <!-- 能量果实（使用绝对定位） -->
          <div class="absolute inset-0 pointer-events-none z-100">
            <!-- 左上 - 赏金 -->
            <div class="absolute" style="left: 17%; top: 21%">
              <div
                class="fruit fruit-green pointer-events-auto relative"
                @click="clickFruit('赏金')"
              >
                <div class="text-center text-white">
                  <div class="text-sm font-bold">赏金</div>
                  <div class="text-xs mt-0.5">03:25</div>
                </div>
              </div>
            </div>
            <!-- 中上 - 登录 -->
            <div class="absolute" style="left: 40%; top: 13%">
              <div
                class="fruit fruit-orange pointer-events-auto relative"
                @click="clickFruit('登录')"
              >
                <div class="text-center text-white">
                  <div class="text-sm font-bold">登录</div>
                </div>
                <div class="minus-badge">-10%</div>
              </div>
            </div>
            <!-- 中 - 动态 -->
            <div class="absolute" style="left: 57%; top: 29%">
              <div
                class="fruit fruit-purple pointer-events-auto relative"
                @click="clickFruit('动态')"
              >
                <div class="text-center text-white">
                  <div class="text-sm font-bold">动态</div>
                  <div class="text-xs mt-0.5">02:16</div>
                </div>
              </div>
            </div>
            <!-- 右下 - 唤醒 -->
            <div class="absolute" style="left: 70%; top: 50%">
              <div
                class="fruit fruit-red pointer-events-auto relative"
                @click="clickFruit('唤醒')"
              >
                <div class="text-center text-white">
                  <div class="text-sm font-bold">唤醒</div>
                </div>
                <div class="minus-badge">-10%</div>
              </div>
            </div>
            <!-- 中左 - 灵兽孵化 -->
            <div class="absolute" style="left: 27%; top: 42%">
              <div
                class="fruit fruit-blue pointer-events-auto relative"
                @click="clickFruit('灵兽孵化')"
              >
                <div class="text-center text-white">
                  <div class="text-xs font-bold">灵兽孵化</div>
                  <div class="text-xs mt-0.5">10-4#</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 能量树内容区域 -->
      <div class="absolute top-0 left-0 w-full h-full">
        <!-- 右侧工具垂直栏 -->
        <div class="absolute right-1 top-1/6 flex flex-col gap-6 items-center">
          <div class="right-icon-item" @click="showWallet">
            <div class="right-icon-bg">
              <i class="fas fa-medal text-white text-2xl"></i>
            </div>
            <div class="text-xs mt-1.5 text-white font-bold text-shadow">
              365
            </div>
          </div>
          <div class="right-icon-item" @click="showGifts">
            <div class="right-icon-bg">
              <i class="fas fa-gift text-white text-2xl"></i>
            </div>
            <div class="text-xs mt-1.5 text-white font-bold text-shadow">
              1229
            </div>
          </div>
          <div class="right-icon-item" @click="showPosts">
            <div class="right-icon-bg">
              <i class="fas fa-pencil-alt text-white text-2xl"></i>
            </div>
            <div class="text-xs mt-1.5 text-white font-bold text-shadow">
              1229
            </div>
          </div>
        </div>

        <!-- 右下消息图标 -->
        <div class="absolute right-0 bottom-40" @click="goToMessages">
          <div class="message-icon-wrapper relative cursor-pointer">
            <div class="message-icon-bg">
              <i class="fas fa-envelope text-white text-2xl"></i>
            </div>
            <div
              class="absolute top-1 right-0 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center text-white font-bold shadow-lg border-2 border-white"
            >
              12
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部按钮组 -->
    <div
      class="fixed left-0 right-0 bottom-20 px-3 flex items-center justify-between safe-bottom z-10 gap-1"
    >
      <button
        id="dailyTasksBtn"
        class="bottom-small-btn"
        @click="showDailyTasks"
      >
        <div class="text-xs font-semibold leading-tight">每日</div>
        <div class="text-xs font-semibold leading-tight">任务</div>
      </button>
      <button
        id="friendRankingBtn"
        class="bottom-small-btn"
        @click="showFriendRanking"
      >
        <div class="text-xs font-semibold leading-tight">好友</div>
        <div class="text-xs font-semibold leading-tight">排行</div>
      </button>

      <div id="shakeBtn" class="shake-btn" @click="shakeTree">
        <div class="text-xs text-white font-medium mb-0.5">摇一摇</div>
        <div id="countdown" class="text-2xl font-bold text-white leading-none">
          {{ formattedCountdown }}
        </div>
        <div id="leftCount" class="text-xs text-white/90 mt-0.5">
          剩余{{ remainingShakes }}次
        </div>
      </div>

      <button
        id="energyItemsBtn"
        class="bottom-small-btn"
        @click="showEnergyItems"
      >
        <div class="text-xs font-semibold leading-tight">能量</div>
        <div class="text-xs font-semibold leading-tight">道具</div>
      </button>
      <button
        id="spiritBeastBtn"
        class="bottom-small-btn"
        @click="showSpiritBeast"
      >
        <div class="text-xs font-semibold leading-tight">灵兽</div>
        <div class="text-xs font-semibold leading-tight">宇宙</div>
      </button>
    </div>

    <FooterNav activePage="energy" />
  </div>
</template>

<style>
/* 玻璃拟态效果 */
.glass {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

/* 顶部渐变栏 */
.top-bar {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
}

/* 文字阴影 */
.text-shadow {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

/* 小气泡样式 - 不再使用 */

/* 右侧图标容器 */
.right-icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.right-icon-item:active {
  transform: scale(0.92);
}

.right-icon-bg {
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
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
  background: radial-gradient(circle at 30% 30%, #ffd700, #ff6b35);
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
}

.fruit-purple {
  background: radial-gradient(circle at 30% 30%, #dda0dd, #9370db);
  box-shadow: 0 4px 15px rgba(147, 112, 219, 0.4);
}

.fruit-red {
  background: radial-gradient(circle at 30% 30%, #ffb6c1, #dc143c);
  box-shadow: 0 4px 15px rgba(220, 20, 60, 0.4);
}

.fruit-green {
  background: radial-gradient(circle at 30% 30%, #98fb98, #228b22);
  box-shadow: 0 4px 15px rgba(34, 139, 34, 0.4);
}

.fruit-blue {
  background: radial-gradient(circle at 30% 30%, #87ceeb, #4169e1);
  box-shadow: 0 4px 15px rgba(65, 105, 225, 0.4);
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
  background: #ff6b35;
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
  max-width: 400px;
  color: #fff;
  background: rgba(255, 255, 255, 0.4);
  border-bottom-left-radius: 4px;
}

/* 底部按钮样式 */
.bottom-small-btn {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #a1e9c5, #499f9b);
  border: 2px solid #fff;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.shake-btn {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #a1e9c5, #499f9b);
  border: 2.5px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 3px 10px rgba(0, 0, 0, 0.15),
    inset 0 2px 0 rgba(255, 255, 255, 0.35);
}

.shake-btn:active {
  transform: scale(0.94);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
}

/* 消息图标样式 */
.message-icon-wrapper {
  transition: transform 0.2s ease;
}

.message-icon-wrapper:active {
  transform: scale(0.92);
}

.message-icon-bg {
  width: 60px;
  height: 50px;
  border-radius: 50% 0 0 50%;
  background: linear-gradient(to right, #a1e9c5, #499f9b);
  border: 2px solid #fff;
  border-right: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 底部安全距离 */
.safe-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}

/* 动画效果 */
@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }
  20% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  80% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }
}

/* 果实点击效果 */
.fruit:active {
  transform: scale(0.88);
  transition: transform 0.1s ease;
}
</style>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import FooterNav from "../components/FooterNav.vue";

export default {
  name: "EnergyTreePage",
  components: {
    FooterNav,
  },
  setup() {
    const router = useRouter();
    // 初始秒数与剩余次数
    const seconds = ref(32);
    const remainingShakes = ref(3);
    const formattedCountdown = ref("0:32");
    let timer = null;
    let running = ref(false);

    // 格式化时间
    const formatTime = (s) => {
      const m = Math.floor(s / 60);
      const ss = s % 60;
      return `${m}:${ss.toString().padStart(2, "0")}`;
    };

    // 开始倒计时
    const startCountdown = () => {
      if (running.value) return;

      running.value = true;
      timer = setInterval(() => {
        seconds.value--;
        formattedCountdown.value = formatTime(seconds.value);

        if (seconds.value <= 0) {
          clearInterval(timer);
          running.value = false;
          remainingShakes.value = 3;
          seconds.value = 32;
          formattedCountdown.value = formatTime(seconds.value);
        }
      }, 1000);
    };

    // 创建弹窗函数
    const createPopup = (title, content) => {
      // 检查是否已存在弹窗，存在则移除
      const existingPopup = document.getElementById("customPopup");
      if (existingPopup) {
        existingPopup.remove();
      }

      // 创建弹窗容器
      const popupContainer = document.createElement("div");
      popupContainer.id = "customPopup";
      popupContainer.style.position = "fixed";
      popupContainer.style.left = "0";
      popupContainer.style.top = "0";
      popupContainer.style.width = "100%";
      popupContainer.style.height = "100%";
      popupContainer.style.backgroundColor = "rgba(0,0,0,0.5)";
      popupContainer.style.display = "flex";
      popupContainer.style.justifyContent = "center";
      popupContainer.style.alignItems = "center";
      popupContainer.style.zIndex = "999";

      // 创建弹窗内容
      const popupContent = document.createElement("div");
      popupContent.style.width = "85%";
      popupContent.style.maxWidth = "320px";
      popupContent.style.backgroundColor = "white";
      popupContent.style.borderRadius = "16px";
      popupContent.style.overflow = "hidden";

      // 创建弹窗标题
      const popupTitle = document.createElement("div");
      popupTitle.style.padding = "20px";
      popupTitle.style.fontSize = "16px";
      popupTitle.style.fontWeight = "bold";
      popupTitle.style.textAlign = "center";
      popupTitle.textContent = title;

      // 创建弹窗内容区
      const popupBody = document.createElement("div");
      popupBody.style.padding = "0 20px 20px 20px";
      popupBody.style.maxHeight = "300px";
      popupBody.style.overflowY = "auto";
      popupBody.innerHTML = content;

      // 创建关闭按钮
      const closeButton = document.createElement("div");
      closeButton.style.padding = "12px 20px";
      closeButton.style.backgroundColor = "#FF6B35";
      closeButton.style.color = "white";
      closeButton.style.textAlign = "center";
      closeButton.style.fontSize = "14px";
      closeButton.style.fontWeight = "bold";
      closeButton.textContent = "关闭";
      closeButton.style.cursor = "pointer";

      // 组装弹窗
      popupContent.appendChild(popupTitle);
      popupContent.appendChild(popupBody);
      popupContent.appendChild(closeButton);
      popupContainer.appendChild(popupContent);
      document.body.appendChild(popupContainer);

      // 添加关闭事件
      closeButton.addEventListener("click", function () {
        popupContainer.remove();
      });

      // 点击背景关闭弹窗
      popupContainer.addEventListener("click", function (e) {
        if (e.target === popupContainer) {
          popupContainer.remove();
        }
      });
    };

    // 摇一摇功能
    const shakeTree = () => {
      if (remainingShakes.value > 0 && !running.value) {
        remainingShakes.value--;
        if (remainingShakes.value === 0) {
          startCountdown();
        }
        // 简单动画：缩放
        const shakeBtn = document.getElementById("shakeBtn");
        if (shakeBtn) {
          shakeBtn.animate(
            [
              { transform: "scale(1)" },
              { transform: "scale(1.06)" },
              { transform: "scale(1)" },
            ],
            {
              duration: 450,
              easing: "ease-out",
            }
          );
        }

        // 模拟获得能量（这里只是提示）
        setTimeout(() => {
          const gained = Math.floor(Math.random() * 15) + 1;
          // 使用原生toast提示
          const note = document.createElement("div");
          note.textContent = "+" + gained + " 能量";
          note.style.position = "fixed";
          note.style.left = "50%";
          note.style.top = "40%";
          note.style.transform = "translateX(-50%)";
          note.style.padding = "8px 14px";
          note.style.borderRadius = "999px";
          note.style.background = "rgba(0,0,0,0.6)";
          note.style.color = "#fff";
          note.style.zIndex = 80;
          document.body.appendChild(note);
          setTimeout(() => note.remove(), 1400);
        }, 400);
      }
    };

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
      createPopup("每日任务", content);
    };

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
      createPopup("好友排行", content);
    };

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
      createPopup("能量道具", content);
    };

    // 显示灵兽宇宙
    const showSpiritBeast = () => {
      const content = `
        <div class="space-y-4">
          <div class="text-center mb-4">
            <div class="text-lg font-bold text-primary mb-2">灵兽孵化中</div>
            <div class="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <div class="text-3xl text-white">10-4#</div>
            </div>
            <div class="text-sm mt-2">预计孵化时间还剩: <span class="text-primary">23小时24分钟</span></div>
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
      createPopup("灵兽宇宙", content);
    };

    // 跳转到消息页
    const goToMessages = () => {
      router.push("/messages");
    };

    // 显示钱包
    const showWallet = () => {
      createPopup(
        "我的钱包",
        '<div class="text-center py-8 text-gray-500">钱包功能开发中...</div>'
      );
    };

    // 显示礼物
    const showGifts = () => {
      createPopup(
        "我的礼物",
        '<div class="text-center py-8 text-gray-500">礼物功能开发中...</div>'
      );
    };

    // 显示帖子
    const showPosts = () => {
      createPopup(
        "我的帖子",
        '<div class="text-center py-8 text-gray-500">帖子功能开发中...</div>'
      );
    };

    // 点击果实
    const clickFruit = (fruitType) => {
      // 添加点击动画效果
      const messages = {
        赏金: "恭喜你，获得 15 能量！",
        登录: "登录每日奖励 +10 能量！",
        动态: "发布动态获得 8 能量！",
        唤醒: "唤醒好友获得 12 能量！",
        灵兽孵化: "灵兽孵化中，请耐心等待...",
      };

      // 显示提示
      const note = document.createElement("div");
      note.textContent = messages[fruitType] || "点击果实";
      note.style.position = "fixed";
      note.style.left = "50%";
      note.style.top = "45%";
      note.style.transform = "translateX(-50%)";
      note.style.padding = "12px 20px";
      note.style.borderRadius = "20px";
      note.style.background = "rgba(0,0,0,0.75)";
      note.style.color = "#fff";
      note.style.fontSize = "14px";
      note.style.fontWeight = "bold";
      note.style.zIndex = "999";
      note.style.animation = "fadeInOut 2s ease";
      document.body.appendChild(note);

      setTimeout(() => note.remove(), 2000);
    };

    // 组件挂载时启动倒计时（如果需要）
    onMounted(() => {
      // 可以根据实际需求决定是否在组件挂载时启动倒计时
    });

    // 组件卸载时清除计时器
    onUnmounted(() => {
      if (timer) {
        clearInterval(timer);
      }
    });

    return {
      formattedCountdown,
      remainingShakes,
      shakeTree,
      showDailyTasks,
      showFriendRanking,
      showEnergyItems,
      showSpiritBeast,
      goToMessages,
      showWallet,
      showGifts,
      showPosts,
      clickFruit,
    };
  },
};
</script>
