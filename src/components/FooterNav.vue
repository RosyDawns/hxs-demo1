<template>
  <div style="padding-bottom: 60px">
    <footer
      class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center py-2 z-40"
    >
      <button
        class="text-center nav-footer"
        :class="activePage === 'index' ? 'text-primary' : 'text-gray'"
        @click="$router.push('/')"
      >
        <i class="fa-solid fa-paw"></i>
        <p class="text-xs mt-1">唤醒狮</p>
      </button>
      <button
        class="text-center nav-footer"
        :class="activePage === 'ai' ? 'text-primary' : 'text-gray'"
        @click="$router.push('/ai-assistant')"
      >
        <i class="fa-solid fa-robot text-lg"></i>
        <p class="text-xs mt-1">大狮兄</p>
      </button>
      <button
        class="text-center nav-footer"
        :class="activePage === 'energy' ? 'text-primary' : 'text-gray'"
        @click="$router.push('/energy-tree')"
      >
        <i class="fa-solid fa-tree text-lg"></i>
        <p class="text-xs mt-1">能量树</p>
      </button>
      <!-- <button class="text-center nav-footer" :class="activePage === 'teachers' ? 'text-primary' : 'text-gray'" @click="$router.push('/teacher-list')">
      <i class="fa-solid fa-user-circle text-lg"></i>
      <p class="text-xs mt-1">唤醒狮</p>
    </button>
    <button class="text-center nav-footer" :class="activePage === 'camp' ? 'text-primary' : 'text-gray'" @click="$router.push('/camp')">
      <i class="fa-solid fa-heartbeat text-lg"></i>
      <p class="text-xs mt-1">唤醒营</p>
    </button> -->
      <button
        class="text-center nav-footer"
        :class="activePage === 'messages' ? 'text-primary' : 'text-gray'"
        @click="$router.push('/messages')"
      >
        <i class="fa-solid fa-message"></i>
        <p class="text-xs mt-1">消息</p>
      </button>
      <button
        class="text-center nav-footer"
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
};
</script>
