<template>
  <div class="page flex flex-col h-screen bg-[#f3f3f3]">
    <!-- 顶部导航栏 -->
    <header class="bg-white px-4 py-3.5 flex items-center justify-between">
      <div class="flex items-center flex-1">
        <div @click="goBack" class="cursor-pointer">
          <i class="fa-solid fa-chevron-left text-gray-800 text-base"></i>
        </div>
      </div>
      <div class="absolute left-1/2 -translate-x-1/2">
        <span class="text-[17px] font-medium text-gray-900">子账户管理</span>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto px-4">
      <!-- 搜索框 -->
      <div class="mt-3 mb-3">
        <div class="relative">
          <input
            type="text"
            v-model="searchKeyword"
            placeholder="搜索账号/手机号"
            class="w-full bg-[#f8f8f8] rounded-lg pl-10 pr-4 py-2.5 text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none border-0"
          />
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
        </div>
      </div>

      <!-- 账户列表 -->
      <div class="space-y-2.5 pb-24">
        <div
          v-for="account in filteredAccounts"
          :key="account.id"
          class="bg-white rounded-xl p-4 relative cursor-pointer"
          @click="goToAccountDetail(account)"
        >
          <div class="flex items-start justify-between mb-2">
            <div class="flex-1 pr-3">
              <h3 class="text-[16px] font-semibold text-gray-900 mb-1.5">
                {{ account.name }}
              </h3>
              <p class="text-[14px] text-gray-500">{{ account.phone }}</p>
            </div>
            <div class="flex flex-col items-end">
              <span
                :class="[
                  'text-[12px] px-2.5 py-0.5 rounded-md font-medium',
                  account.status === 'active'
                    ? 'bg-green-50 text-green-600'
                    : 'bg-gray-100 text-gray-500'
                ]"
              >
                {{ account.status === 'active' ? '正常' : '已禁用' }}
              </span>
              <span class="text-[12px] text-gray-400 mt-2">{{ account.role }}</span>
            </div>
          </div>
          <div class="border-t border-gray-100 pt-2.5 mt-2.5">
            <p class="text-[12px] text-gray-400">
              负责：<span class="text-gray-500">{{ account.stores }}</span>
            </p>
          </div>
          <i class="fa-solid fa-chevron-right absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 text-xs"></i>
        </div>
      </div>
    </main>

    <!-- 底部创建按钮 -->
    <div class="fixed bottom-0 left-0 right-0 px-4 pb-6 pt-3 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
      <button
        @click="createAccount"
        class="w-full bg-gradient-to-r from-[#ff9966] to-[#ff6633] text-white text-[16px] font-medium py-3.5 rounded-2xl shadow-lg pointer-events-auto active:opacity-90"
      >
        创建子账号
      </button>
    </div>

    <!-- 新增子账户弹框 -->
    <CreateSubAccountModal
      :visible="showCreateModal"
      @update:visible="showCreateModal = $event"
      @confirm="handleCreateConfirm"
      @cancel="showCreateModal = false"
    />
  </div>
</template>

<script>
import CreateSubAccountModal from "../components/CreateSubAccountModal.vue";

export default {
  name: "SubAccountManagementPage",
  components: {
    CreateSubAccountModal
  },
  data() {
    return {
      searchKeyword: "",
      showCreateModal: false,
      accounts: [
        {
          id: 1,
          name: "门店客服-小张",
          phone: "138****5678",
          role: "客服岗",
          status: "active",
          stores: "朝阳店、海淀店"
        },
        {
          id: 2,
          name: "财务-李会计",
          phone: "159****8901",
          role: "财务岗",
          status: "active",
          stores: "所有门店"
        },
        {
          id: 3,
          name: "门店经理-王总",
          phone: "136****2345",
          role: "门店管理岗",
          status: "disabled",
          stores: "西城店、丰台店"
        }
      ]
    };
  },
  computed: {
    filteredAccounts() {
      if (!this.searchKeyword) {
        return this.accounts;
      }
      const keyword = this.searchKeyword.toLowerCase();
      return this.accounts.filter(
        account =>
          account.name.toLowerCase().includes(keyword) ||
          account.phone.includes(keyword)
      );
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    createAccount() {
      this.showCreateModal = true;
    },
    handleCreateConfirm(formData) {
      // 创建子账户
      console.log("创建子账户", formData);
      // 这里可以添加API调用逻辑
      // 成功后添加到列表
      const newAccount = {
        id: this.accounts.length + 1,
        name: formData.name,
        phone: formData.phone,
        role: formData.position,
        status: formData.enabled ? "active" : "disabled",
        stores: formData.manager || "待分配"
      };
      this.accounts.unshift(newAccount);
    },
    goToAccountDetail(account) {
      // 跳转到账户详情页
      this.$router.push({
        name: "SubAccountDetail",
        params: {
          id: account.id,
          account: {
            ...account,
            managers: account.stores,
            permissions: {
              orderView: true,
              verification: true,
              dataStats: false,
              productManage: false,
              userManage: false
            }
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}

/* 移除输入框自动填充的背景色 */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 1000px white inset;
  box-shadow: 0 0 0 1000px white inset;
}
</style>
