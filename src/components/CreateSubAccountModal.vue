<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-50 flex items-center justify-center"
    @click.self="handleCancel"
  >
    <!-- 遮罩层 -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <!-- 弹框内容 -->
    <div class="relative bg-white rounded-2xl w-[90%] max-w-md max-h-[85vh] overflow-hidden flex flex-col">
      <!-- 标题 -->
      <div class="px-6 pt-6 pb-4">
        <h2 class="text-[18px] font-semibold text-gray-900 text-center">
          新增子账户
        </h2>
      </div>

      <!-- 表单内容 - 可滚动 -->
      <div class="flex-1 overflow-y-auto px-6 pb-4">
        <!-- 账号名称 -->
        <div class="mb-5">
          <label class="block text-[15px] text-gray-900 font-medium mb-2">
            账号名称
          </label>
          <input
            v-model="formData.name"
            type="text"
            placeholder="请输入账号名称"
            class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300"
          />
        </div>

        <!-- 绑定手机号 -->
        <div class="mb-5">
          <label class="block text-[15px] text-gray-900 font-medium mb-2">
            绑定手机号
          </label>
          <input
            v-model="formData.phone"
            type="tel"
            placeholder="请输入手机号"
            class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300"
          />
        </div>

        <!-- 所属岗位 -->
        <div class="mb-5 relative">
          <label class="block text-[15px] text-gray-900 font-medium mb-2">
            所属岗位
          </label>
          <div
            @click="togglePositionDropdown"
            class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[15px] flex items-center justify-between cursor-pointer"
            :class="formData.position ? 'text-gray-900' : 'text-gray-400'"
          >
            <span>{{ formData.position || '请选择岗位' }}</span>
            <i
              class="fa-solid fa-chevron-down text-xs text-gray-400 transition-transform"
              :class="showPositionDropdown ? 'rotate-180' : ''"
            ></i>
          </div>
          
          <!-- 下拉选项 -->
          <div
            v-if="showPositionDropdown"
            class="absolute left-0 right-0 top-[72px] bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden"
          >
            <div
              v-for="option in positionOptions"
              :key="option"
              @click="selectPosition(option)"
              class="px-4 py-3 text-[15px] text-gray-900 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
            >
              <span>{{ option }}</span>
              <i
                v-if="formData.position === option"
                class="fa-solid fa-check text-sm text-blue-500"
              ></i>
            </div>
          </div>
        </div>

        <!-- 管理唤醒师 -->
        <div class="mb-5">
          <label class="block text-[15px] text-gray-900 font-medium mb-2">
            管理唤醒师
          </label>
          <div
            @click="selectManager"
            class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[15px] flex items-center justify-between cursor-pointer"
            :class="formData.manager ? 'text-gray-900' : 'text-gray-400'"
          >
            <span>{{ formData.manager || '请选唤醒师' }}</span>
            <i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>
          </div>
        </div>

        <!-- 权限管理 -->
        <div class="mb-5">
          <div class="flex items-center justify-between mb-3">
            <label class="text-[15px] text-gray-900 font-medium">
              权限管理
            </label>
            <button
              @click="editPermissions"
              class="text-[13px] text-blue-500"
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
                v-model="formData.permissions[permission.key]"
                class="hidden"
              />
              <div
                class="w-5 h-5 rounded border-2 flex items-center justify-center mr-3"
                :class="
                  formData.permissions[permission.key]
                    ? 'bg-blue-500 border-blue-500'
                    : 'bg-white border-gray-300'
                "
              >
                <i
                  v-if="formData.permissions[permission.key]"
                  class="fa-solid fa-check text-white text-xs"
                ></i>
              </div>
              <span class="text-[15px] text-gray-700">{{ permission.label }}</span>
            </label>
          </div>
        </div>

        <!-- 初始密码 -->
        <div class="mb-5">
          <label class="block text-[15px] text-gray-900 font-medium mb-2">
            初始密码
          </label>
          <input
            v-model="formData.password"
            type="password"
            placeholder="••••••"
            class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300"
          />
          <p class="text-[12px] text-gray-400 mt-2">首次登录需修改密码</p>
        </div>

        <!-- 启用账号 -->
        <div class="flex items-center justify-between mb-2">
          <label class="text-[15px] text-gray-900 font-medium">
            启用账号
          </label>
          <div
            @click="formData.enabled = !formData.enabled"
            class="relative w-12 h-7 rounded-full cursor-pointer transition-colors"
            :class="formData.enabled ? 'bg-gradient-to-r from-[#ff9966] to-[#ff6633]' : 'bg-gray-300'"
          >
            <div
              class="absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform"
              :class="formData.enabled ? 'right-0.5' : 'left-0.5'"
            ></div>
          </div>
        </div>
      </div>

      <!-- 底部按钮 -->
      <div class="px-6 pb-6 pt-4 flex items-center space-x-3 border-t border-gray-100">
        <button
          @click="handleCancel"
          class="flex-1 py-3 text-[15px] text-gray-600 font-medium rounded-xl bg-gray-100 active:bg-gray-200"
        >
          取消
        </button>
        <button
          @click="handleConfirm"
          class="flex-1 py-3 text-[15px] text-white font-medium rounded-xl bg-gradient-to-r from-[#ff9966] to-[#ff6633] active:opacity-90"
        >
          确认创建
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateSubAccountModal",
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showPositionDropdown: false,
      positionOptions: ["请选择岗位", "客服岗", "财务岗", "门店管理岗"],
      permissions: [
        { key: "orderView", label: "订单查看" },
        { key: "verification", label: "核销操作" },
        { key: "dataStats", label: "数据统计" },
        { key: "productManage", label: "商品管理" },
        { key: "userManage", label: "用户管理" }
      ],
      formData: {
        name: "",
        phone: "",
        position: "",
        manager: "",
        permissions: {
          orderView: true,
          verification: true,
          dataStats: false,
          productManage: false,
          userManage: false
        },
        password: "",
        enabled: true
      }
    };
  },
  methods: {
    togglePositionDropdown() {
      this.showPositionDropdown = !this.showPositionDropdown;
    },
    selectPosition(option) {
      if (option !== "请选择岗位") {
        this.formData.position = option;
      }
      this.showPositionDropdown = false;
    },
    selectManager() {
      console.log("选择唤醒师");
      // 跳转到选择唤醒师页面
    },
    editPermissions() {
      console.log("修改权限");
    },
    handleCancel() {
      this.resetForm();
      this.$emit("update:visible", false);
      this.$emit("cancel");
    },
    handleConfirm() {
      // 表单验证
      if (!this.formData.name) {
        alert("请输入账号名称");
        return;
      }
      if (!this.formData.phone) {
        alert("请输入手机号");
        return;
      }
      if (!this.formData.position) {
        alert("请选择岗位");
        return;
      }
      if (!this.formData.password) {
        alert("请输入初始密码");
        return;
      }

      this.$emit("confirm", { ...this.formData });
      this.resetForm();
      this.$emit("update:visible", false);
    },
    resetForm() {
      this.formData = {
        name: "",
        phone: "",
        position: "",
        manager: "",
        permissions: {
          orderView: true,
          verification: true,
          dataStats: false,
          productManage: false,
          userManage: false
        },
        password: "",
        enabled: true
      };
      this.showPositionDropdown = false;
    }
  },
  watch: {
    visible(val) {
      if (!val) {
        this.showPositionDropdown = false;
      }
    }
  }
};
</script>

<style scoped>
/* 自定义滚动条 */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}

/* 移除输入框自动填充的背景色 */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 1000px #f9fafb inset;
  box-shadow: 0 0 0 1000px #f9fafb inset;
}
</style>
