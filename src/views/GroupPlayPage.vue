<template>
  <div class="page pb-6" id="group-play-page">
    <!-- 顶部导航栏 -->
    <header
      class="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100"
    >
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center">
          <button @click="goBack" class="text-black mr-4">
            <i class="fa fa-angle-left text-xl"></i>
          </button>
          <h1 class="text-lg font-bold text-black">组团去玩</h1>
        </div>
      </div>
    </header>

    <!-- 主内容区 -->
    <main class="pt-16 pb-16 px-4">
      <!-- 搜索框 -->
      <div class="relative mb-4">
        <input
          type="text"
          placeholder="搜索活动名称、俱乐部名称..."
          class="w-full bg-white rounded-full py-2 pl-10 pr-4 text-sm border-none focus:outline-none"
        />
        <i
          class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        ></i>
      </div>

      <!-- 筛选标签 -->
      <div
        class="flex items-center overflow-x-auto whitespace-nowrap mb-2 pb-2 -mx-4 px-4"
      >
        <button
          class="flex items-center bg-white rounded-full px-3 py-1.5 text-sm mr-2"
        >
          附近
          <i class="fa fa-angle-down ml-1 text-xs"></i>
        </button>
        <button
          class="flex items-center bg-white rounded-full px-3 py-1.5 text-sm mr-2"
        >
          户外运动
          <i class="fa fa-angle-down ml-1 text-xs"></i>
        </button>
        <button
          class="flex items-center bg-white rounded-full px-3 py-1.5 text-sm mr-2"
        >
          时间
          <i class="fa fa-angle-down ml-1 text-xs"></i>
        </button>
        <button
          class="flex items-center bg-white rounded-full px-3 py-1.5 text-sm"
        >
          费用
          <i class="fa fa-angle-down ml-1 text-xs"></i>
        </button>
      </div>

      <!-- 活动列表 -->
      <div class="space-y-4">
        <!-- 活动项1 -->
        <div
          class="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
          @click="goToActivityDetail('1')"
        >
          <div class="p-3">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center">
                <span
                  class="bg-green-50 text-green-500 text-xs px-2 py-0.5 rounded-full mr-2"
                  >跑步</span
                >
                <h3 class="font-medium">大宁沪跑团冬训第1期</h3>
              </div>
              <span class="text-red-500 font-medium text-sm">免费</span>
            </div>
            <p class="text-xs text-gray-500 mb-2">
              11.01 周六 06:00-10:30 · 大宁公园
            </p>
            <div class="flex flex-wrap gap-1 mb-3">
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-users mr-1"></i>
                大宁沪跑团
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-camera mr-1"></i>
                摄影跟拍
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-heart mr-1"></i>
                跑量积累
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-truck mr-1"></i>
                补给到位
              </span>
            </div>
          </div>

          <!-- 活动图片 -->
          <div class="flex gap-1 px-3 mb-3">
            <img
              src="@images/img_39.jpg"
              class="w-1/3 h-24 object-cover rounded"
            />
            <img
              src="@images/img_39.jpg"
              class="w-1/3 h-24 object-cover rounded"
            />
            <img
              src="@images/img_39.jpg"
              class="w-1/3 h-24 object-cover rounded"
            />
          </div>

          <div class="flex items-center justify-between px-3 pb-3">
            <div class="flex items-center">
              <span class="text-xs text-blue-500 mr-2">报名中</span>
              <div class="flex -space-x-1">
                <img
                  src="@images/img_39.jpg"
                  class="w-5 h-5 rounded-full border border-white"
                />
                <img
                  src="@images/img_39.jpg"
                  class="w-5 h-5 rounded-full border border-white"
                />
                <img
                  src="@images/img_39.jpg"
                  class="w-5 h-5 rounded-full border border-white"
                />
              </div>
              <span class="text-xs text-gray-500 ml-1">28人已报名</span>
            </div>
            <button
              class="bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-full"
            >
              报名
            </button>
          </div>
        </div>

        <!-- 活动项2 -->
        <div
          class="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
          @click="goToActivityDetail('2')"
        >
          <div class="p-3">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center">
                <span
                  class="bg-blue-50 text-blue-500 text-xs px-2 py-0.5 rounded-full mr-2"
                  >垂钓</span
                >
                <h3 class="font-medium">11.1海上游乐园，路亚钓鱼爆箱</h3>
              </div>
              <span class="text-gray-500 font-medium text-sm">AA制</span>
            </div>
            <p class="text-xs text-gray-500 mb-2">
              11.01 周六 06:00 - 11.02 周日 11:00 · 金沙江路[地铁站]
            </p>
            <div class="flex flex-wrap gap-1 mb-3">
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-user mr-1"></i>
                理查
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-bolt mr-1"></i>
                狂口
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-map-marker mr-1"></i>
                绝佳钓点
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-diamond mr-1"></i>
                大神带钓
              </span>
            </div>
          </div>

          <!-- 活动图片 -->
          <div class="flex gap-1 px-3 mb-3">
            <img
              src="@images/img_39.jpg"
              class="w-1/3 h-24 object-cover rounded"
            />
            <img
              src="@images/img_39.jpg"
              class="w-1/3 h-24 object-cover rounded"
            />
            <img
              src="@images/img_39.jpg"
              class="w-1/3 h-24 object-cover rounded"
            />
          </div>

          <div class="flex items-center justify-between px-3 pb-3">
            <div class="flex items-center">
              <span class="text-xs text-blue-500 mr-2">报名中</span>
              <div class="flex -space-x-1">
                <img
                  src="@images/img_39.jpg"
                  class="w-5 h-5 rounded-full border border-white"
                />
              </div>
              <span class="text-xs text-gray-500 ml-1">1人已报名</span>
            </div>
            <button
              class="bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-full"
            >
              报名
            </button>
          </div>
        </div>

        <!-- 活动项3 -->
        <div
          class="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
          @click="goToActivityDetail('3')"
        >
          <div class="p-3">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center">
                <span
                  class="bg-amber-50 text-amber-500 text-xs px-2 py-0.5 rounded-full mr-2"
                  >徒步</span
                >
                <h3 class="font-medium">11.01周六韩妃江古道徒步赏江南</h3>
              </div>
              <span class="text-red-500 font-medium text-sm">¥188</span>
            </div>
            <p class="text-xs text-gray-500 mb-2">
              11.01 周六 07:30-18:00 · 人民广场[地铁站]
            </p>
            <div class="flex flex-wrap gap-1 mb-3">
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-tree mr-1"></i>
                古道徒步
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-image mr-1"></i>
                山水风景
              </span>
              <span class="text-xs text-gray-500 flex items-center">
                <i class="fa fa-cutlery mr-1"></i>
                特色午餐
              </span>
            </div>
          </div>

          <!-- 活动图片 -->
          <div class="flex gap-1 px-3 mb-3">
            <img
              src="@images/img_39.jpg"
              class="w-1/3 h-24 object-cover rounded"
            />
            <img
              src="@images/img_39.jpg"
              class="w-1/3 h-24 object-cover rounded"
            />
            <img
              src="@images/img_39.jpg"
              class="w-1/3 h-24 object-cover rounded"
            />
          </div>

          <div class="flex items-center justify-between px-3 pb-3">
            <div class="flex items-center">
              <span class="text-xs text-blue-500 mr-2">报名中</span>
              <div class="flex -space-x-1">
                <img
                  src="@images/img_39.jpg"
                  class="w-5 h-5 rounded-full border border-white"
                />
                <img
                  src="@images/img_39.jpg"
                  class="w-5 h-5 rounded-full border border-white"
                />
                <img
                  src="@images/img_39.jpg"
                  class="w-5 h-5 rounded-full border border-white"
                />
                <img
                  src="@images/img_39.jpg"
                  class="w-5 h-5 rounded-full border border-white"
                />
              </div>
              <span class="text-xs text-gray-500 ml-1">15人已报名</span>
            </div>
            <button
              class="bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-full"
            >
              报名
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部导航栏 -->
    <footer
      class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center py-2"
    >
      <button class="flex flex-col items-center justify-center text-orange-500">
        <i class="fa fa-compass text-xl mb-1"></i>
        <span class="text-xs">活动广场</span>
      </button>
      <button
        class="flex flex-col items-center justify-center text-gray-500"
        @click="goToCreateActivity"
      >
        <!-- 创建 -->
        <div
          class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center"
        >
          <i class="fa fa-plus text-white text-base"></i>
        </div>
      </button>
      <button class="flex flex-col items-center justify-center text-gray-500">
        <i class="fa-solid fa-comment text-xl mb-1"></i>
        <span class="text-xs">消息</span>
      </button>
      <button class="flex flex-col items-center justify-center text-gray-500">
        <i class="fa-solid fa-user text-xl mb-1"></i>
        <span class="text-xs">我的</span>
      </button>
    </footer>

    <!-- 弹出的创建选择框 -->
    <div class="create-modal" v-if="showCreateModal">
      <div class="modal-overlay" @click="closeCreateModal"></div>
      <div class="modal-content">
        <button class="modal-close" @click="closeCreateModal">
          <i class="fa fa-times"></i>
        </button>
        <h2 class="modal-title">组团去玩</h2>
        <p class="modal-subtitle">唤醒你的热爱</p>

        <div class="create-options">
          <button class="option-card yellow-card" @click="createActivity">
            <h3>发活动</h3>
            <p>开始你的活动之旅</p>
          </button>
          <button class="option-card orange-card" @click="showVerificationPrompt">
            <h3>发动态</h3>
            <p>让更多伙伴看到你</p>
          </button>
        </div>
      </div>
    </div>

    <!-- 认证提示弹框 -->
    <div class="verification-prompt-modal" v-if="showVerificationPromptModal">
      <div class="modal-overlay" @click="closeVerificationPrompt"></div>
      <div class="prompt-dialog">
        <h3 class="prompt-title">完成认证即可发布活动</h3>
        <p class="prompt-message">完成认证成为主理人后，即可发布活动</p>
        <div class="prompt-actions">
          <button class="btn-cancel" @click="closeVerificationPrompt">取消</button>
          <button class="btn-verify" @click="showVerificationTypeModal">立刻认证</button>
        </div>
      </div>
    </div>

    <!-- 认证类型选择弹框 -->
    <div class="verification-type-modal" v-if="showVerificationTypeSelect">
      <div class="modal-overlay" @click="closeVerificationTypeModal"></div>
      <div class="type-modal-content">
        <button class="modal-close" @click="closeVerificationTypeModal">
          <i class="fa fa-times"></i>
        </button>
        <h2 class="type-modal-title">选择认证类型</h2>

        <div class="verification-types">
          <!-- 机构认证 -->
          <div class="type-card">
            <div class="type-icon org-icon">
              <i class="fa fa-building"></i>
            </div>
            <div class="type-info">
              <h3 class="type-title">机构认证</h3>
              <p class="type-desc">适合有一定组织能力的兴趣团体，认证后可发布更多类型活动，同时有专属的俱乐部标识。</p>
            </div>
            <button class="btn-go-verify" @click="goToOrgVerification">
              去认证
            </button>
          </div>

          <!-- 个人认证 -->
          <div class="type-card">
            <div class="type-icon personal-icon">
              <i class="fa fa-user"></i>
            </div>
            <div class="type-info">
              <h3 class="type-title">个人认证</h3>
              <p class="type-desc">适合各类兴趣爱好者，认证后可发布兴趣活动。</p>
            </div>
            <button class="btn-go-verify" @click="goToPersonalVerification">
              去认证
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupPlayPage",
  data() {
    return {
      showCreateModal: false,
      showVerificationPromptModal: false,
      showVerificationTypeSelect: false,
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    goToActivityDetail(id) {
      this.$router.push(`/activity-detail/${id}`);
    },
    goToCreateActivity() {
      this.showCreateModal = true;
    },
    closeCreateModal() {
      this.showCreateModal = false;
    },
    createActivity() {
      this.$router.push({ path: "/create-activity" });
      this.showCreateModal = false;
      // 留在当前页面，开始填写活动表单
    },
    // 显示认证提示弹框
    showVerificationPrompt() {
      this.showCreateModal = false;
      this.showVerificationPromptModal = true;
    },
    // 关闭认证提示弹框
    closeVerificationPrompt() {
      this.showVerificationPromptModal = false;
    },
    // 显示认证类型选择弹框
    showVerificationTypeModal() {
      this.showVerificationPromptModal = false;
      this.showVerificationTypeSelect = true;
    },
    // 关闭认证类型选择弹框
    closeVerificationTypeModal() {
      this.showVerificationTypeSelect = false;
    },
    // 跳转到机构认证页面
    goToOrgVerification() {
      this.$router.push({ path: "/organization-verification" });
    },
    // 跳转到个人认证页面
    goToPersonalVerification() {
      this.$router.push({ path: "/personal-verification" });
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

/* 自定义滚动条样式 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}

::-webkit-scrollbar-thumb {
  background: transparent;
}

::-webkit-scrollbar-track {
  background: transparent;
}

/* 创建选择弹窗 */
.create-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: flex-end;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  width: 100%;
  background: white;
  border-radius: 16px 16px 0 0;
  padding: 24px 20px;
  padding-bottom: calc(24px + env(safe-area-inset-bottom));
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
}

.modal-title {
  font-size: 24px;
  font-weight: bold;
  color: #222;
  margin-bottom: 4px;
}

.modal-subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
}

.create-options {
  display: flex;
  gap: 16px;
}

.option-card {
  flex: 1;
  padding: 24px 16px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
}

.option-card:active {
  transform: scale(0.98);
}

.yellow-card {
  background: linear-gradient(135deg, #fff3b0, #ffd43b);
}

.orange-card {
  background: linear-gradient(135deg, #ffb88c, #ff6b35);
}

.option-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #222;
  margin-bottom: 8px;
}

.option-card p {
  font-size: 13px;
  color: #444;
}

/* 认证提示弹框 */
.verification-prompt-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
}

.prompt-dialog {
  position: relative;
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin: 0 32px;
  max-width: 320px;
  width: 100%;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.prompt-title {
  font-size: 18px;
  font-weight: 600;
  color: #222;
  text-align: center;
  margin-bottom: 12px;
}

.prompt-message {
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 24px;
  line-height: 1.5;
}

.prompt-actions {
  display: flex;
  gap: 12px;
}

.btn-cancel,
.btn-verify {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 24px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-cancel {
  background: #f5f5f5;
  color: #666;
}

.btn-verify {
  background: #ff6b35;
  color: white;
}

.btn-cancel:active,
.btn-verify:active {
  opacity: 0.8;
}

/* 认证类型选择弹框 */
.verification-type-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1002;
  display: flex;
  align-items: flex-end;
}

.type-modal-content {
  position: relative;
  width: 100%;
  background: white;
  border-radius: 16px 16px 0 0;
  padding: 24px 20px;
  padding-bottom: calc(24px + env(safe-area-inset-bottom));
  animation: slideUp 0.3s ease;
  max-height: 80vh;
  overflow-y: auto;
}

.type-modal-title {
  font-size: 20px;
  font-weight: 600;
  color: #222;
  margin-bottom: 24px;
  text-align: center;
}

.verification-types {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.type-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  position: relative;
}

.type-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  font-size: 24px;
}

.org-icon {
  background: #e3f2ff;
  color: #1e88e5;
}

.personal-icon {
  background: #e8f5e9;
  color: #43a047;
}

.type-info {
  margin-bottom: 16px;
}

.type-title {
  font-size: 18px;
  font-weight: 600;
  color: #222;
  margin-bottom: 8px;
}

.type-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
}

.btn-go-verify {
  width: 100%;
  padding: 12px;
  background: #ff6b35;
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-go-verify:active {
  opacity: 0.8;
}
</style>
