<template>
  <div
    class="page relative h-screen overflow-hidden"
    id="page-call"
    style="
      background: linear-gradient(
        to bottom,
        #1d4ed8 0%,
        #60a5fa 60%,
        #a9d0fe 100%
      );
    "
  >
    <!-- 顶部导航栏 -->
    <header class="absolute top-0 left-0 right-0 z-30 px-2 py-4">
      <div class="flex items-center">
        <button @click="$router.go(-1)" class="w-9 h-9 mr-2">
          <i class="fas fa-chevron-left text-white text-base"></i>
        </button>

        <!-- 中间导航标签 -->
        <div class="flex items-center gap-1">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            :class="[
              'px-1 py-2 mr-2 text-base font-medium',
              activeTab === tab.key
                ? 'text-white border-b-2 border-white'
                : 'text-white',
            ]"
            @click="activeTab = tab.key"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
    </header>

    <!-- 用户信息区域（仅在打Call tab显示） -->
    <div v-if="activeTab === '打Call'" class="absolute top-22 left-4 z-20">
      <div
        class="flex items-center gap-3 rounded-l-full"
        style="
          background-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        "
      >
        <img
          src="@images/img_38.jpeg"
          alt="avatar"
          class="w-16 h-16 rounded-full object-cover"
        />
        <div class="flex items-center">
          <div class="mr-2">
            <div class="flex items-center gap-2 mb-0.5">
              <h3 class="text-lg font-bold text-white">张小明</h3>
              <span
                class="text-xs text-white bg-white/20 px-2 py-0.5 rounded-full"
              >
                唤醒师
              </span>
            </div>
            <div class="text-xs text-white/90">
              关注 <span class="font-semibold">25</span> | 粉丝
              <span class="font-semibold">560</span>
            </div>
          </div>
          <div class="flex items-center">
            <button class="flex flex-col items-center ml-5">
              <i class="fas fa-phone text-white text-base"></i>
              <span class="text-xs text-white mt-0.5">打Call</span>
            </button>
            <button class="flex flex-col items-center ml-5">
              <i class="fas fa-gift text-white text-base"></i>
              <span class="text-xs text-white mt-0.5">送礼物</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 主体：能量树（仅在打Call tab显示） -->
    <main
      v-if="activeTab === '打Call'"
      class="absolute top-0 left-0 w-full h-full inset-0 flex items-center justify-center"
    >
      <!-- 能量树图片 -->
      <div class="relative w-full">
        <img
          src="@images/tree_2.png"
          class="block w-full h-full object-contain object-bottom"
        />

        <div class="absolute top-0 left-0 w-full h-full inset-0">
          <!-- 登入果实 -->
          <div class="absolute" style="left: 18%; top: 25%">
            <div class="fruit fruit-orange" @click="clickFruit('登入')">
              <div class="text-xs font-bold text-white">登入</div>
              <div class="minus-badge">-10%</div>
            </div>
          </div>

          <!-- 动态果实 -->
          <div class="absolute" style="left: 57%; top: 32%">
            <div class="fruit fruit-purple" @click="clickFruit('动态')">
              <div class="text-xs font-bold text-white">动态</div>
              <div class="text-xs text-white/90 mt-0.5">02:16</div>
            </div>
          </div>

          <!-- 唤醒果实 -->
          <div class="absolute" style="left: 73%; top: 52%">
            <div class="fruit fruit-red" @click="clickFruit('唤醒')">
              <div class="text-xs font-bold text-white">唤醒</div>
              <div class="minus-badge">-10%</div>
            </div>
          </div>

          <!-- 灵兽孵化果实 -->
          <div class="absolute" style="left: 26%; top: 48%">
            <div class="fruit fruit-blue" @click="clickFruit('灵兽孵化')">
              <div class="text-xs font-bold text-white">灵兽孵化</div>
              <div class="text-xs text-white/90 mt-0.5">10-4#</div>
            </div>
          </div>

          <!-- 赏金果实 -->
          <div class="absolute" style="left: 42%; top: 62%">
            <div class="fruit fruit-green" @click="clickFruit('赏金')">
              <div class="text-xs font-bold text-white">赏金</div>
              <div class="text-xs text-white/90 mt-0.5">03:25</div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 内容区域（当选中动态、橱窗、星推官tab时显示） -->
    <div
      v-if="activeTab !== '打Call'"
      class="absolute bottom-16 top-20 left-0 right-0 bg-white rounded-t-3xl z-30"
      style="overflow-y: auto"
    >
      <div class="p-4">
        <!-- 动态Tab -->
        <DynamicTab v-if="activeTab === '动态'" />
        <!-- 橱窗Tab -->
        <StoreTab v-else-if="activeTab === '橱窗'" />
        <!-- 星推官Tab -->
        <StarTab v-else-if="activeTab === '星推官'" />
      </div>
    </div>

    <!-- 底部交互区域（仅在打Call tab显示） -->
    <div
      v-if="activeTab === '打Call'"
      class="absolute bottom-20 left-0 right-0 z-30 px-4"
    >
      <div class="flex items-center gap-3">
        <!-- 语音按钮 -->
        <button
          class="w-12 h-12 rounded-full bg-white backdrop-blur flex items-center justify-center"
        >
          <i class="fas fa-microphone text-primary text-lg"></i>
        </button>

        <!-- 消息输入框 -->
        <div
          class="flex-1 bg-white backdrop-blur rounded-full px-4 h-12 shadow-sm"
        >
          <input
            v-model="messageText"
            type="text"
            placeholder="发消息"
            class="w-full h-full text-gray-500 placeholder-gray-500 border-none outline-none text-sm"
          />
        </div>

        <!-- OK按钮 -->
        <button
          class="w-12 h-12 rounded-full font-semibold text-white text-sm transition-all bg-gradient-to-r from-orange-500 to-orange-400 shadow-lg"
          @click="sendMessage"
        >
          OK
        </button>
      </div>
    </div>

    <FooterNav activePage="call" />
  </div>
</template>

<style scoped>
/* 复用能量树的样式 */

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

/* 文字阴影 */
.text-shadow {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

/* 果实样式 - 与能量树页面一致 */
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
  position: relative;
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

/* 浮动动画 - 与能量树页面一致 */
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

/* 负号标记 - 与能量树页面一致 */
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

/* 果实点击效果 */
.fruit:active {
  transform: scale(0.88);
  transition: transform 0.1s ease;
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
</style>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import FooterNav from "../components/FooterNav.vue";
import DynamicTab from "../components/DynamicTab.vue";
import StoreTab from "../components/StoreTab.vue";
import StarTab from "../components/StarTab.vue";

export default {
  name: "CallPage",
  components: {
    FooterNav,
    DynamicTab,
    StoreTab,
    StarTab,
  },
  setup() {
    const router = useRouter();
    const activeTab = ref("打Call");
    const messageText = ref("");

    const tabs = [
      { key: "动态", label: "动态" },
      { key: "橱窗", label: "橱窗" },
      { key: "星推官", label: "星推官" },
      { key: "打Call", label: "打Call" },
    ];

    // 点击果实
    const clickFruit = (fruitType) => {
      const messages = {
        登入: "登入打Call获得 10 能量！",
        动态: "分享动态获得 8 能量！",
        唤醒: "唤醒好友获得 12 能量！",
        灵兽孵化: "灵兽孵化中，请耐心等待...",
        赏金: "恭喜你，获得 15 能量！",
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
      document.body.appendChild(note);

      setTimeout(() => note.remove(), 2000);
    };

    // 发送消息
    const sendMessage = () => {
      if (messageText.value.trim()) {
        console.log("发送消息:", messageText.value);

        const note = document.createElement("div");
        note.textContent = "消息发送成功！";
        note.style.position = "fixed";
        note.style.left = "50%";
        note.style.top = "45%";
        note.style.transform = "translateX(-50%)";
        note.style.padding = "12px 20px";
        note.style.borderRadius = "20px";
        note.style.background = "rgba(34, 197, 94, 0.9)";
        note.style.color = "#fff";
        note.style.fontSize = "14px";
        note.style.fontWeight = "bold";
        note.style.zIndex = "999";
        document.body.appendChild(note);

        setTimeout(() => note.remove(), 2000);
        messageText.value = "";
      }
    };

    return {
      activeTab,
      tabs,
      messageText,
      clickFruit,
      sendMessage,
    };
  },
};
</script>
