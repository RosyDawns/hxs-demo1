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
        <span class="text-[17px] font-medium text-gray-900">子账户详情</span>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto">
      <!-- 账户名称和状态 -->
      <div class="bg-white px-4 py-5 flex items-center justify-between">
        <h1 class="text-[20px] font-semibold text-gray-900">
          {{ accountData.name }}
        </h1>
        <span
          :class="[
            'text-[13px] px-3 py-1 rounded-md font-medium',
            accountData.status === 'active'
              ? 'bg-green-50 text-green-600'
              : 'bg-gray-100 text-gray-500'
          ]"
        >
          {{ accountData.status === 'active' ? '正常' : '已禁用' }}
        </span>
      </div>

      <!-- 账号信息 -->
      <div class="bg-white mt-2.5 px-4 py-4">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-[16px] font-semibold text-gray-900">账号信息</h2>
          <button
            @click="toggleEdit"
            class="text-[14px] text-blue-500"
          >
            {{ isEditing ? '保存' : '编辑' }}
          </button>
        </div>

        <div class="space-y-4">
          <!-- 账号名称 -->
          <div class="flex items-center justify-between py-2">
            <span class="text-[15px] text-gray-500">账号名称</span>
            <input
              v-if="isEditing"
              v-model="editData.name"
              type="text"
              class="text-[15px] text-gray-900 text-right bg-gray-50 px-3 py-1 rounded border border-gray-200 focus:outline-none focus:border-gray-300"
            />
            <span v-else class="text-[15px] text-gray-900">{{ accountData.name }}</span>
          </div>

          <!-- 绑定手机号 -->
          <div class="flex items-center justify-between py-2">
            <span class="text-[15px] text-gray-500">绑定手机号</span>
            <span class="text-[15px] text-gray-900">{{ accountData.phone }}</span>
          </div>

          <!-- 所属岗位 -->
          <div class="flex items-center justify-between py-2">
            <span class="text-[15px] text-gray-500">所属岗位</span>
            <div v-if="isEditing" class="relative">
              <select
                v-model="editData.position"
                class="text-[15px] text-gray-900 bg-gray-50 px-3 py-1 pr-8 rounded border border-gray-200 focus:outline-none focus:border-gray-300 appearance-none"
              >
                <option value="客服岗">客服岗</option>
                <option value="财务岗">财务岗</option>
                <option value="门店管理岗">门店管理岗</option>
              </select>
              <i class="fa-solid fa-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none"></i>
            </div>
            <span v-else class="text-[15px] text-gray-900">{{ accountData.position }}</span>
          </div>

          <!-- 管理唤醒师 -->
          <div class="flex items-center justify-between py-2">
            <span class="text-[15px] text-gray-500">管理唤醒师</span>
            <div
              v-if="isEditing"
              @click="selectManagers"
              class="flex items-center cursor-pointer"
            >
              <span class="text-[15px] text-gray-900 mr-1">{{ editData.managers }}</span>
              <i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>
            </div>
            <span v-else class="text-[15px] text-gray-900">{{ accountData.managers }}</span>
          </div>
        </div>
      </div>

      <!-- 权限管理 -->
      <div class="bg-white mt-2.5 px-4 py-4">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-[16px] font-semibold text-gray-900">权限管理</h2>
          <button
            @click="editPermissions"
            class="text-[14px] text-blue-500"
          >
            修改权限
          </button>
        </div>

        <div class="space-y-3">
          <label
            v-for="permission in permissions"
            :key="permission.key"
            class="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              v-model="accountData.permissions[permission.key]"
              class="hidden"
              :disabled="!isEditingPermissions"
            />
            <div
              class="w-5 h-5 rounded border-2 flex items-center justify-center mr-3"
              :class="
                accountData.permissions[permission.key]
                  ? 'bg-blue-500 border-blue-500'
                  : 'bg-white border-gray-300'
              "
            >
              <i
                v-if="accountData.permissions[permission.key]"
                class="fa-solid fa-check text-white text-xs"
              ></i>
            </div>
            <span class="text-[15px] text-gray-700">{{ permission.label }}</span>
          </label>
        </div>
      </div>

      <!-- 账号操作 -->
      <div class="bg-white mt-2.5 px-4 py-4">
        <h2 class="text-[16px] font-semibold text-gray-900 mb-4">账号操作</h2>

        <div class="space-y-3">
          <button
            @click="toggleAccountStatus"
            class="w-full py-3.5 text-[15px] font-medium rounded-xl transition-colors"
            :class="
              accountData.status === 'active'
                ? 'bg-gray-100 text-gray-700 active:bg-gray-200'
                : 'bg-green-50 text-green-600 active:bg-green-100'
            "
          >
            {{ accountData.status === 'active' ? '停用账号' : '启用账号' }}
          </button>

          <button
            @click="deleteAccount"
            class="w-full bg-gradient-to-r from-[#ff9966] to-[#ff6633] text-white text-[15px] font-medium py-3.5 rounded-xl active:opacity-90"
          >
            删除账号
          </button>
        </div>
      </div>

      <div class="h-6"></div>
    </main>
  </div>
</template>

<script>
export default {
  name: "SubAccountDetailPage",
  data() {
    return {
      isEditing: false,
      isEditingPermissions: false,
      permissions: [
        { key: "orderView", label: "订单查看" },
        { key: "verification", label: "核销操作" },
        { key: "dataStats", label: "数据统计" },
        { key: "productManage", label: "商品管理" },
        { key: "userManage", label: "用户管理" }
      ],
      accountData: {
        id: 1,
        name: "门店客服-小张",
        phone: "138****5678",
        position: "客服岗",
        managers: "王教练、李教练",
        status: "active",
        permissions: {
          orderView: true,
          verification: true,
          dataStats: false,
          productManage: false,
          userManage: false
        }
      },
      editData: {
        name: "",
        position: "",
        managers: ""
      }
    };
  },
  created() {
    // 从路由参数获取账户ID并加载数据
    const accountId = this.$route.params.id || this.$route.query.id;
    if (accountId) {
      this.loadAccountData(accountId);
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    loadAccountData(accountId) {
      // 这里应该从API加载数据，现在使用模拟数据
      console.log("加载账户数据", accountId);
      // 模拟从列表传来的数据
      if (this.$route.params.account) {
        const account = this.$route.params.account;
        this.accountData = {
          id: account.id,
          name: account.name,
          phone: account.phone,
          position: account.role || account.position,
          managers: account.managers || account.stores,
          status: account.status,
          permissions: account.permissions || {
            orderView: true,
            verification: true,
            dataStats: false,
            productManage: false,
            userManage: false
          }
        };
      }
    },
    toggleEdit() {
      if (this.isEditing) {
        // 保存编辑
        this.accountData.name = this.editData.name;
        this.accountData.position = this.editData.position;
        this.accountData.managers = this.editData.managers;
        console.log("保存账号信息", this.editData);
      } else {
        // 进入编辑模式
        this.editData = {
          name: this.accountData.name,
          position: this.accountData.position,
          managers: this.accountData.managers
        };
      }
      this.isEditing = !this.isEditing;
    },
    selectManagers() {
      console.log("选择管理唤醒师");
      // 跳转到选择页面或打开弹框
    },
    editPermissions() {
      this.isEditingPermissions = !this.isEditingPermissions;
      if (!this.isEditingPermissions) {
        console.log("保存权限设置", this.accountData.permissions);
      }
    },
    toggleAccountStatus() {
      const action = this.accountData.status === 'active' ? '停用' : '启用';
      if (confirm(`确定要${action}此账号吗？`)) {
        this.accountData.status = this.accountData.status === 'active' ? 'disabled' : 'active';
        console.log(`账号已${action}`);
      }
    },
    deleteAccount() {
      if (confirm('确定要删除此账号吗？删除后将无法恢复。')) {
        console.log("删除账号", this.accountData.id);
        // 调用API删除账号
        this.$router.back();
      }
    }
  }
};
</script>

<style scoped>
.page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}

/* 自定义选择框样式 */
select {
  background-image: none;
}

/* 移除输入框自动填充的背景色 */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 1000px #f9fafb inset;
  box-shadow: 0 0 0 1000px #f9fafb inset;
}
</style>
