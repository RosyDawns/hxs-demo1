<template>
  <div style="padding-bottom: 60px">
    <footer
      class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center h-16 z-40"
    >
      <button
        class="flex-1 flex-col justify-center items-center"
        :class="
          activePage === 'index' || activePage === 'teachers'
            ? 'text-primary'
            : 'text-gray'
        "
        @click="handleWakerLionClick"
      >
        <i class="fa-solid fa-paw text-lg"></i>
        <p class="text-xs mt-1 flex items-center justify-center">
          <!-- 唤醒狮 -->首页<i
            class="fa-solid fa-right-left ml-0.5"
            style="font-size: 10px"
          ></i>
        </p>
      </button>
      <button
        class="flex-1 flex-col justify-center items-center"
        :class="activePage === 'ai' ? 'text-primary' : 'text-gray'"
        @click="$router.push('/ai-assistant')"
      >
        <i class="fa-solid fa-robot text-lg"></i>
        <p class="text-xs mt-1">大狮兄</p>
      </button>
      <button
        class="flex-1 flex-col justify-center items-center"
        :class="activePage === 'energy' ? 'text-primary' : 'text-gray'"
        @click="$router.push('/energy-tree')"
      >
        <i class="fa-solid fa-tree text-lg"></i>
        <p class="text-xs mt-1">能量树</p>
      </button>
      <!-- <button class="flex-1 flex-col justify-center items-center" :class="activePage === 'teachers' ? 'text-primary' : 'text-gray'" @click="$router.push('/teacher-list')">
      <i class="fa-solid fa-user-circle text-lg"></i>
      <p class="text-xs mt-1">唤醒狮</p>
    </button>
    <button class="flex-1 flex-col justify-center items-center" :class="activePage === 'camp' ? 'text-primary' : 'text-gray'" @click="$router.push('/camp')">
      <i class="fa-solid fa-heartbeat text-lg"></i>
      <p class="text-xs mt-1">唤醒营</p>
    </button> -->
      <!-- <button
        class="flex-1 flex-col justify-center items-center"
        :class="activePage === 'call' ? 'text-primary' : 'text-gray'"
        @click="$router.push('/call')"
      >
        <i class="fa-solid fa-phone text-lg"></i>
        <p class="text-xs mt-1">打Call</p>
      </button> -->
      <button
        class="flex-1 flex-col justify-center items-center"
        :class="activePage === 'messages' ? 'text-primary' : 'text-gray'"
        @click="$router.push('/messages')"
      >
        <i class="fa-solid fa-message text-lg"></i>
        <p class="text-xs mt-1">消息</p>
      </button>
      <button
        class="flex-1 flex-col justify-center items-center"
        :class="activePage === 'me' ? 'text-primary' : 'text-gray'"
        @click="$router.push('/me')"
      >
        <i class="fa-solid fa-user text-lg"></i>
        <p class="text-xs mt-1">我的</p>
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  props: {
    activePage: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleWakerLionClick() {
      // 如果当前在首页，则跳转到唤醒狮列表页；如果在唤醒狮列表页，则跳转到首页
      if (this.activePage === "index") {
        this.$router.push("/teacher-list");
      } else if (this.activePage === "teachers") {
        this.$router.push("/");
      } else {
        // 默认跳转到首页
        this.$router.push("/");
      }
    },
  },
};
</script>
