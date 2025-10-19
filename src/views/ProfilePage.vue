<template>
  <div class="page flex flex-col h-screen bg-[#f7f7f7]">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 h-12 bg-white flex items-center px-3 z-50"
    >
      <button
        @click="$router.back()"
        class="w-10 h-10 flex items-center justify-center -ml-2"
      >
        <i class="fa-solid fa-chevron-left text-gray-900 text-[18px]"></i>
      </button>
      <h1
        class="flex-1 text-center text-[14px] font-medium text-gray-900 pr-10"
      >
        编辑资料
      </h1>
    </header>

    <!-- 主内容区 -->
    <main class="flex-1 overflow-y-auto pt-12 pb-16 bg-[#f7f7f7]">
      <!-- 头像区域 -->
      <div class="flex justify-center py-7">
        <div class="relative">
          <img
            src="@images/img-15.jpg"
            class="w-[90px] h-[90px] rounded-full object-cover"
            alt="头像"
          />
          <button
            class="absolute right-[2px] bottom-[2px] w-[20px] h-[20px] rounded-full bg-black shadow-md flex items-center justify-center"
            @click="handleAvatarClick"
          >
            <i class="fa-solid fa-camera text-white text-[10px]"></i>
          </button>
        </div>
      </div>

      <div class="px-4">
        <div class="bg-white rounded-lg mt-2.5">
          <div
            v-for="(item, index) in basicInfoGroup"
            :key="index"
            class="flex items-center justify-between px-4 h-[52px] active:bg-gray-50 transition cursor-pointer"
            :class="{
              'border-b border-[#f0f0f0]': true,
            }"
            @click="handleItemClick(item)"
          >
            <span class="text-[14px] text-gray-600 font-normal w-[80px]">
              {{ item.label }}
            </span>
            <div class="flex items-center justify-between gap-2 flex-1">
              <span class="text-[14px] text-gray-900 truncate max-w-[180px]">
                {{ item.value }}
              </span>
              <i
                class="fa-solid fa-chevron-right text-[#d8d8d8] text-[12px]"
              ></i>
            </div>
          </div>
          <div
            class="flex items-center justify-between px-4 h-[52px] active:bg-gray-50 transition cursor-pointer"
            @click="handleItemClick(backgroundItem)"
          >
            <span class="text-[14px] text-gray-600 font-normal w-[80px]">
              {{ backgroundItem.label }}
            </span>
            <div class="flex items-center justify-between gap-2 flex-1">
              <div class="w-[48px] h-[28px] rounded-[3px] overflow-hidden">
                <div
                  class="w-full h-full bg-gradient-to-br from-[#FF6B35] via-[#FF8F5A] to-[#FFBF47]"
                ></div>
              </div>
              <i
                class="fa-solid fa-chevron-right text-[#d8d8d8] text-[12px]"
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4">
        <div class="bg-white rounded-lg mt-2.5">
          <div
            class="flex items-center justify-between px-4 h-[52px] active:bg-gray-50 transition cursor-pointer"
            @click="handleItemClick(introItem)"
          >
            <span class="text-[14px] text-gray-600 font-normal w-[80px]">{{
              introItem.label
            }}</span>
            <div class="flex items-center justify-between gap-2 flex-1">
              <span class="text-[14px] text-[#c7c7c7] truncate max-w-[180px]">
                {{ introItem.value }}
              </span>
              <i
                class="fa-solid fa-chevron-right text-[#d8d8d8] text-[12px]"
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4">
        <div class="bg-white rounded-lg mt-2.5">
          <div
            v-for="(item, index) in detailsGroup"
            :key="index"
            class="flex items-center justify-between px-4 h-[52px] active:bg-gray-50 transition cursor-pointer"
            :class="{
              'border-b border-[#f0f0f0]': index !== detailsGroup.length - 1,
            }"
            @click="handleItemClick(item)"
          >
            <span class="text-[14px] text-gray-600 font-normal w-[80px]">{{
              item.label
            }}</span>
            <div class="flex items-center justify-between gap-2 flex-1">
              <span
                class="text-[14px] truncate max-w-[180px]"
                :class="item.placeholder ? 'text-[#c7c7c7]' : 'text-gray-900'"
              >
                {{ item.value }}
              </span>
              <i
                class="fa-solid fa-chevron-right text-[#d8d8d8] text-[12px]"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  components: {},
  data() {
    return {
      // 基本信息组
      basicInfoGroup: [
        { label: "名字", value: "张小明", key: "name" },
        { label: "唤醒营号", value: "1009845189", key: "id" },
      ],
      // 背景图
      backgroundItem: { label: "背景图", value: "", key: "background" },
      // 简介
      introItem: {
        label: "简介",
        value: "介绍一下自己",
        key: "intro",
        placeholder: true,
      },
      // 详细信息组
      detailsGroup: [
        { label: "性别", value: "男", key: "gender" },
        {
          label: "生日",
          value: "生日当天会收到平台祝福",
          key: "birthday",
          placeholder: true,
        },
        {
          label: "地区",
          value: "选择所在的地区",
          key: "region",
          placeholder: true,
        },
        { label: "职业", value: "选择职业", key: "job", placeholder: true },
        { label: "学校", value: "选择学校", key: "school", placeholder: true },
        {
          label: "视频认证",
          value: "增加平台粉丝信任度",
          key: "verify",
          placeholder: true,
        },
      ],
    };
  },
  methods: {
    handleAvatarClick() {
      console.log("点击头像");
    },
    handleItemClick(item) {
      console.log("点击", item.label);
    },
  },
};
</script>
