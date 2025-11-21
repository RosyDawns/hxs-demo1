<template>
  <div class="page h-screen flex flex-col bg-[#F5F5F5]">
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 bg-[#FFF5EB] z-50 px-4 py-3.5 flex items-center justify-between">
      <div class="flex items-center flex-1">
        <div class="mr-4" @click="goBack">
          <i class="fa-solid fa-chevron-left text-gray-800 text-base cursor-pointer"></i>
        </div>
        <h1 class="text-[17px] font-medium text-gray-900">主页装修</h1>
      </div>
      <div class="flex items-center space-x-4">
        <div class="flex items-center">
          <i class="fa-solid fa-star text-yellow-400 text-[13px] mr-1"></i>
          <span class="text-[15px] font-medium text-gray-900">4.9</span>
        </div>
        <div class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer">
          <i class="fa-solid fa-ellipsis text-white text-xs"></i>
        </div>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto pt-14 pb-24">
      <!-- 教练信息 -->
      <div class="bg-white px-4 py-3.5 flex items-center">
        <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3 overflow-hidden">
          <img v-if="profile.avatar" :src="profile.avatar" alt="头像" class="w-full h-full object-cover" />
          <i v-else class="fa-solid fa-user text-gray-400"></i>
        </div>
        <span class="text-sm text-gray-900">{{ profile.name }}</span>
      </div>

      <!-- 主页头图 -->
      <div class="bg-white mt-2.5 px-4 py-4">
        <h3 class="text-[15px] font-medium text-gray-900 mb-3.5">主页头图</h3>
        <div class="flex items-center">
          <div
            class="w-[70px] h-[70px] rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mr-3 cursor-pointer relative overflow-hidden active:scale-95 transition-transform"
            @click="uploadHeaderImage"
          >
            <img v-if="profile.headerImage" :src="profile.headerImage" alt="头图" class="w-full h-full object-cover" />
          </div>
          <div
            class="w-[70px] h-[70px] rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-orange-400 active:scale-95 transition-all"
            @click="uploadHeaderImage"
          >
            <div class="text-center">
              <div class="text-gray-400 text-base font-normal">+1</div>
            </div>
          </div>
          <i class="fa-solid fa-chevron-right text-gray-400 text-xs ml-auto"></i>
        </div>
      </div>

      <!-- 背景图 -->
      <div class="bg-white mt-2.5 px-4 py-4 cursor-pointer active:bg-gray-50 transition-colors" @click="editBackground">
        <div class="flex items-center justify-between">
          <h3 class="text-[15px] font-medium text-gray-900">背景图</h3>
          <div class="flex items-center">
            <span class="text-[13px] text-orange-500 bg-orange-50 px-2.5 py-0.5 rounded">审核通过</span>
            <i class="fa-solid fa-chevron-right text-gray-400 text-xs ml-3"></i>
          </div>
        </div>
      </div>

      <!-- 主页简介/经营信息 -->
      <div class="bg-white mt-2.5 px-4 py-4">
        <h3 class="text-[15px] font-medium text-gray-900 mb-3 leading-relaxed">主页简介<br/>经营信息</h3>
        <div class="relative">
          <textarea
            v-model="profile.description"
            placeholder="请输入简介"
            maxlength="500"
            class="w-full h-36 p-3.5 bg-gray-50 rounded-xl text-[15px] text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-orange-400 border border-transparent"
            @input="updateCharCount"
          ></textarea>
          <div class="absolute bottom-3 right-3.5 text-[13px] text-gray-400">
            {{ charCount }}/500
          </div>
        </div>
      </div>

      <!-- 营业时间 -->
      <div class="bg-white mt-2.5 px-4 py-4 cursor-pointer active:bg-gray-50 transition-colors" @click="editBusinessHours">
        <div class="flex items-center justify-between">
          <h3 class="text-[15px] font-medium text-gray-900">营业时间</h3>
          <div class="flex items-center">
            <span class="text-[14px] text-gray-600 mr-2">{{ profile.businessHours }}</span>
            <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
          </div>
        </div>
      </div>

      <!-- 联系电话 -->
      <div class="bg-white mt-2.5 px-4 py-4 cursor-pointer active:bg-gray-50 transition-colors" @click="editPhone">
        <div class="flex items-center justify-between">
          <h3 class="text-[15px] font-medium text-gray-900">联系电话</h3>
          <div class="flex items-center">
            <span class="text-[14px] text-gray-600 mr-2">{{ profile.phone }}</span>
            <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
          </div>
        </div>
      </div>

      <!-- 查看地址 -->
      <div class="bg-white mt-2.5 px-4 py-4 cursor-pointer active:bg-gray-50 transition-colors" @click="editAddress">
        <div class="flex items-center justify-between">
          <h3 class="text-[15px] font-medium text-gray-900">查看地址</h3>
          <div class="flex items-center">
            <span class="text-[14px] text-gray-600 mr-2 truncate max-w-[200px]">{{ profile.address }}</span>
            <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
          </div>
        </div>
      </div>

      <!-- 商品置顶 -->
      <div class="bg-white mt-2.5 px-4 py-4 cursor-pointer active:bg-gray-50 transition-colors" @click="manageFeaturedProducts">
        <div class="flex items-center justify-between">
          <h3 class="text-[15px] font-medium text-gray-900">商品置顶</h3>
          <div class="flex items-center">
            <span class="text-[14px] text-gray-600 mr-2">{{ profile.featuredProducts }}个置顶商品</span>
            <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
          </div>
        </div>
      </div>

      <!-- 星推官商品 -->
      <div class="bg-white mt-2.5 px-4 py-4 cursor-pointer active:bg-gray-50 transition-colors" @click="manageStarProducts">
        <div class="flex items-center justify-between">
          <h3 class="text-[15px] font-medium text-gray-900">星推官商品</h3>
          <div class="flex items-center">
            <span class="text-[14px] text-gray-600 mr-2">{{ profile.starProducts }}个置顶商品</span>
            <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
          </div>
        </div>
      </div>

      <!-- 服务标签 -->
      <div class="bg-white mt-2.5 px-4 py-4 cursor-pointer active:bg-gray-50 transition-colors" @click="manageTags">
        <div class="flex items-center justify-between">
          <h3 class="text-[15px] font-medium text-gray-900">服务标签</h3>
          <div class="flex items-center">
            <span class="text-[14px] text-orange-500 mr-2">添加标签</span>
            <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
          </div>
        </div>
      </div>

      <!-- 执业证书 -->
      <div class="bg-white mt-2.5 px-4 py-4 cursor-pointer active:bg-gray-50 transition-colors" @click="manageCertificates">
        <div class="flex items-center justify-between">
          <h3 class="text-[15px] font-medium text-gray-900">执业证书</h3>
          <div class="flex items-center">
            <span class="text-[14px] text-orange-500 mr-2">去添加</span>
            <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
          </div>
        </div>
      </div>

      <!-- 服务方式 -->
      <div class="bg-white mt-2.5 px-4 py-4 cursor-pointer active:bg-gray-50 transition-colors" @click="editServiceTypes">
        <div class="flex items-center justify-between">
          <h3 class="text-[15px] font-medium text-gray-900">服务方式</h3>
          <div class="flex items-center">
            <span class="text-[14px] text-gray-600 mr-2">{{ serviceTypesText }}</span>
            <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
          </div>
        </div>
      </div>

      <!-- 视频验真 -->
      <div class="bg-white mt-2.5 px-4 py-4 cursor-pointer active:bg-gray-50 transition-colors" @click="uploadVerificationVideo">
        <div class="flex items-center justify-between">
          <h3 class="text-[15px] font-medium text-gray-900">视频验真</h3>
          <div class="flex items-center">
            <span class="text-[14px] text-orange-500 mr-2">上传视频介绍</span>
            <i class="fa-solid fa-chevron-right text-gray-400 text-xs"></i>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部预览按钮 -->
    <footer class="fixed bottom-0 left-0 right-0 bg-white px-4 py-3.5 border-t border-gray-100">
      <button
        class="w-full h-[50px] bg-gradient-to-r from-orange-400 to-orange-500 text-white text-[16px] font-medium rounded-full shadow-sm active:opacity-90 transition-all"
        @click="preview"
      >
        预览
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BusinessProfileEditPage',
  data() {
    return {
      profile: {
        name: '李教练',
        avatar: '',
        headerImage: '',
        description: '',
        businessHours: '周一~周日 16:00-23:59...',
        phone: '13502963573',
        address: '曹杨路1040弄2号楼0...',
        featuredProducts: 0,
        starProducts: 0,
        serviceTypes: ['到店服务', '上门服务', '线上服务']
      },
      charCount: 0
    }
  },
  computed: {
    serviceTypesText() {
      return this.profile.serviceTypes.join('、')
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    updateCharCount() {
      this.charCount = this.profile.description.length
    },
    uploadHeaderImage() {
      // TODO: 实现图片上传
      console.log('上传主页头图')
    },
    editBusinessHours() {
      // TODO: 打开营业时间编辑弹窗
      console.log('编辑营业时间')
    },
    editPhone() {
      // TODO: 打开电话编辑弹窗
      console.log('编辑联系电话')
    },
    editAddress() {
      // TODO: 打开地址选择页面
      console.log('编辑地址')
    },
    manageFeaturedProducts() {
      // TODO: 打开商品置顶管理页面
      console.log('管理置顶商品')
    },
    manageStarProducts() {
      // TODO: 打开星推官商品管理页面
      console.log('管理星推官商品')
    },
    manageTags() {
      // TODO: 打开服务标签管理页面
      console.log('管理服务标签')
    },
    manageCertificates() {
      // TODO: 打开执业证书管理页面
      console.log('管理执业证书')
    },
    editServiceTypes() {
      // TODO: 打开服务方式编辑弹窗
      console.log('编辑服务方式')
    },
    uploadVerificationVideo() {
      // TODO: 打开视频上传页面
      console.log('上传验真视频')
    },
    editBackground() {
      // TODO: 打开背景图编辑页面
      console.log('编辑背景图')
    },
    preview() {
      // TODO: 预览主页效果
      console.log('预览主页')
      // 可以跳转到预览页面或显示预览弹窗
    }
  }
}
</script>

<style scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

/* 移除 textarea 的默认样式 */
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* 平滑滚动 */
main {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

/* 隐藏滚动条 */
main::-webkit-scrollbar {
  display: none;
}
</style>
