<template>
  <div class="page" id="page-weight-management-camp">
    <!-- 顶部导航 -->
    <CommonHeader>
      <template #center>
        <h2 class="font-bold">体重管理唤醒营</h2>
      </template>
    </CommonHeader>

    <img src="@images/hxy/hxy-1.png" class="block" />
    <img src="@images/hxy/hxy-2.png" class="block" />
    <img src="@images/hxy/hxy-3.png" class="block" />
    <img src="@images/hxy/hxy-4.png" class="block" />
    <img src="@images/hxy/hxy-5.png" class="block" />
    <img src="@images/hxy/hxy-6.png" class="block" />
    <img src="@images/hxy/hxy-7.png" class="block" />

    <!-- 价格与报名 -->
    <div
      class="fixed bottom-0 left-0 right-0 bg-white safe-bottom z-40"
      style="box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.08)"
    >
      <div class="flex items-center justify-between px-4 py-2.5">
        <!-- 左侧图标按钮 -->
        <div class="flex items-center">
          <button
            class="flex flex-col items-center justify-center nav-action px-2"
          >
            <i class="fa fa-envelope text-xl mb-0.5" style="color: #333"></i>
            <span class="text-xs" style="color: #333">私信</span>
          </button>
          <button
            class="flex flex-col items-center justify-center nav-action px-2 ml-2"
          >
            <i class="fa fa-share text-xl mb-0.5" style="color: #333"></i>
            <span class="text-xs" style="color: #333">转发</span>
          </button>
        </div>

        <!-- 右侧价格和购买按钮 -->

        <button
          class="flex-1 text-white font-bold py-1 px-1 rounded-full nav-action flex items-center justify-center ml-3"
          style="background: #ff5a5f; font-size: 17px"
          @click="handleRegister"
        >
          <div class="flex items-center mr-2">
            <div class="flex items-baseline">
              <span
                class="text-3xl font-bold"
                style="color: #fff; letter-spacing: -0.5px"
              >
                ¥498
              </span>
            </div>
            <div class="flex flex-col items-center">
              <div class="flex items-end">
                <span class="text-xs" style="color: #fff">¥</span>
                <span class="text-xs" style="color: #fff"> 1299 </span>
              </div>
              <span class="text-xs ml-1" style="color: #fff">券后超值价</span>
            </div>
          </div>
          <span class="text-lg ml-4">立即购买</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader.vue";

export default {
  name: "WeightManagementCampPage",
  components: {
    CommonHeader,
  },
  methods: {
    handleRegister() {
      // 跳转到报名页面
      this.$router.push("/camp-register");
    },
  },
};
</script>

<style scoped>
.safe-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
