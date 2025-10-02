<template>
  <div class="page" id="page-messages">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-light border-b border-gray-100 p-3 flex items-center">
      <button class="nav-back mr-3 text-dark" @click="$router.push('/')">
        <i class="fa fa-angle-left text-xl"></i>
      </button>
      <h2 class="font-bold">消息</h2>
      <div class="flex-1 flex justify-end">
        <button class="nav-action text-gray" @click="$router.push('/message-settings')">
          <i class="fa fa-cog"></i>
        </button>
      </div>
    </header>

    <!-- 消息分类 -->
    <div class="flex border-b border-gray-100 px-3">
      <button
        class="py-3 px-4 text-sm font-medium text-primary border-b-2 border-primary nav-action">
        全部
      </button>
      <button
        class="py-3 px-4 text-sm font-medium text-gray nav-action">
        唤醒师
      </button>
      <button
        class="py-3 px-4 text-sm font-medium text-gray nav-action">
        系统通知
      </button>
    </div>

    <!-- 消息列表 -->
    <div class="divide-y divide-gray-100 mb-20">
      <!-- 消息项1 -->
      <div class="p-3 flex items-center justify-between nav-action" @click="$router.push('/chat')">
        <div class="flex items-center">
          <div class="relative">
            <img src="@images/img-20.jpg" alt="李教练" class="w-14 h-14 rounded-full">
            <div class="absolute bottom-0 right-0 w-4 h-4 bg-success border-2 border-white rounded-full"></div>
          </div>
          <div class="ml-3">
            <div class="flex items-center">
              <h3 class="font-medium">李教练（羽毛球）</h3>
              <span class="text-xs text-gray ml-2">2分钟前</span>
            </div>
            <p class="text-xs text-gray mt-1 line-clamp-1">你好，我看到你对我的课程感兴趣，有什么想了解的吗？</p>
          </div>
        </div>
        <div class="flex flex-col items-end">
          <span class="text-xs text-gray">14:30</span>
          <div class="w-4 h-4 bg-primary text-white rounded-full flex items-center justify-center text-[10px] mt-1">3</div>
        </div>
      </div>

      <!-- 消息项2 -->
      <div class="p-3 flex items-center justify-between nav-action" @click="$router.push('/chat')">
        <div class="flex items-center">
          <div class="relative">
            <img src="@images/img-21.jpg" alt="张老师" class="w-14 h-14 rounded-full">
            <div class="absolute bottom-0 right-0 w-4 h-4 bg-success border-2 border-white rounded-full"></div>
          </div>
          <div class="ml-3">
            <div class="flex items-center">
              <h3 class="font-medium">张老师（瑜伽）</h3>
              <span class="text-xs text-gray ml-2">昨天</span>
            </div>
            <p class="text-xs text-gray mt-1 line-clamp-1">下周一的课程已经安排好了，记得准时参加哦~</p>
          </div>
        </div>
        <div class="flex flex-col items-end">
          <span class="text-xs text-gray">昨天</span>
          <div class="w-4 h-4 bg-primary text-white rounded-full flex items-center justify-center text-[10px] mt-1">1</div>
        </div>
      </div>

      <!-- 消息项3 -->
      <div class="p-3 flex items-center justify-between nav-action" @click="$router.push('/chat')">
        <div class="flex items-center">
          <div class="relative">
            <img src="@images/img-37.jpg" alt="系统通知" class="w-14 h-14 rounded-full">
          </div>
          <div class="ml-3">
            <div class="flex items-center">
              <h3 class="font-medium">系统通知</h3>
              <span class="text-xs text-gray ml-2">3天前</span>
            </div>
            <p class="text-xs text-gray mt-1 line-clamp-1">恭喜你获得了一张50元优惠券，有效期7天</p>
          </div>
        </div>
        <div class="flex flex-col items-end">
          <span class="text-xs text-gray">3天前</span>
        </div>
      </div>

      <!-- 消息项4 -->
      <div class="p-3 flex items-center justify-between nav-action" @click="$router.push('/chat')">
        <div class="flex items-center">
          <div class="relative">
            <img src="@images/img-22.jpg" alt="王教练" class="w-14 h-14 rounded-full">
          </div>
          <div class="ml-3">
            <div class="flex items-center">
              <h3 class="font-medium">王教练（健身）</h3>
              <span class="text-xs text-gray ml-2">上周</span>
            </div>
            <p class="text-xs text-gray mt-1 line-clamp-1">根据你的需求，我为你制定了一份健身计划，你可以看一下</p>
          </div>
        </div>
        <div class="flex flex-col items-end">
          <span class="text-xs text-gray">上周</span>
        </div>
      </div>
    </div>

    <FooterNav activePage="messages" />
  </div>
</template>

<script>
import FooterNav from '../components/FooterNav.vue'

export default {
  name: 'MessagesPage',
  components: {
    FooterNav
  }
}
</script>