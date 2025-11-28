<template>
  <div class="page" id="page-energy-items">
    <!-- 顶部导航栏 -->
    <div class="header absolute top-8 left-4 right-4 z-10">
      <div class="header-content flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-full py-3 px-4 shadow-lg">
        <div class="header-left flex items-center justify-center w-10 h-10 rounded-full bg-white/50 hover:bg-white transition-all duration-200" @click="goBack">
          <i class="fas fa-chevron-left text-white text-base"></i>
        </div>
        <div class="header-title text-white font-bold text-lg">能量道具</div>
        <div class="header-right w-10"></div>
      </div>
    </div>

    <!-- 道具分类选项卡 -->
    <div class="tabs-container">
      <div class="tabs flex items-center justify-around bg-white/95 rounded-full p-2 shadow-md">
        <div 
          v-for="tab in tabs" 
          :key="tab.value"
          class="tab-item flex-1 text-center py-2 rounded-full text-sm font-medium transition-all duration-200"
          :class="{ 'active': activeTab === tab.value }"
          @click="activeTab = tab.value"
        >
          {{ tab.label }}
        </div>
      </div>
    </div>

    <!-- 道具列表 -->
    <div class="items-container">
      <div class="item-card" v-for="item in filteredItems" :key="item.id">
        <div class="item-header flex items-center">
          <div class="item-icon" :class="item.iconClass">{{ item.icon }}</div>
          <div class="item-info flex-1">
            <div class="item-name font-bold text-gray-800">{{ item.name }}</div>
            <div class="item-desc text-xs text-gray-500">{{ item.desc }}</div>
          </div>
          <div class="item-amount" v-if="item.amount > 0">x{{ item.amount }}</div>
        </div>
        <div class="item-body mt-3">
          <div class="item-effects">
            <div class="effect-item flex items-center text-sm" v-for="effect in item.effects" :key="effect">
              <i class="fas fa-check-circle text-green-500 mr-1"></i>
              <span>{{ effect }}</span>
            </div>
          </div>
        </div>
        <div class="item-footer mt-4 flex items-center justify-between">
          <div class="item-price" v-if="item.price > 0">
            <i class="fas fa-coins text-yellow-500 mr-1"></i>
            <span class="font-bold">{{ item.price }} 能量币</span>
          </div>
          <button 
            class="item-action-btn" 
            :class="{ 'use-btn': item.amount > 0, 'buy-btn': item.amount === 0 }"
            @click="handleItemAction(item)"
          >
            {{ item.amount > 0 ? '使用' : '购买' }}
          </button>
        </div>
      </div>
    </div>

    <!-- 底部安全距离 -->
    <div class="safe-bottom"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 返回上一页
const goBack = () => {
  router.back();
};

// 分类选项卡
const tabs = [
  { label: '全部道具', value: 'all' },
  { label: '我的道具', value: 'my' },
  { label: '加速成长', value: 'growth' },
  { label: '保护防御', value: 'defense' },
  { label: '幸运加成', value: 'lucky' }
];

// 当前激活的选项卡
const activeTab = ref('all');

// 道具数据
const items = ref([
  {
    id: 1,
    name: '成长加速卡',
    desc: '提升能量树成长速度',
    icon: '🌱',
    iconClass: 'icon-growth',
    effects: ['能量树成长速度提升20%', '持续24小时'],
    price: 50,
    amount: 2,
    type: 'growth'
  },
  {
    id: 2,
    name: '能量守护盾',
    desc: '防止好友偷取能量',
    icon: '🛡️',
    iconClass: 'icon-defense',
    effects: ['24小时内防止好友偷取能量', '保护所有成熟果实'],
    price: 60,
    amount: 0,
    type: 'defense'
  },
  {
    id: 3,
    name: '幸运果实',
    desc: '获得双倍能量机会',
    icon: '🍀',
    iconClass: 'icon-lucky',
    effects: ['有机会获得双倍能量', '适用于所有果实'],
    price: 30,
    amount: 1,
    type: 'lucky'
  },
  {
    id: 4,
    name: '快速成熟剂',
    desc: '加速果实成熟',
    icon: '⚡',
    iconClass: 'icon-growth',
    effects: ['随机加速1个果实成熟', '立即生效'],
    price: 40,
    amount: 0,
    type: 'growth'
  },
  {
    id: 5,
    name: '能量探测仪',
    desc: '查看好友能量状态',
    icon: '🔍',
    iconClass: 'icon-defense',
    effects: ['查看好友能量树状态', '持续1小时'],
    price: 25,
    amount: 3,
    type: 'defense'
  },
  {
    id: 6,
    name: '超级能量包',
    desc: '立即获得大量能量',
    icon: '💥',
    iconClass: 'icon-lucky',
    effects: ['立即获得50-100能量', '随机数值'],
    price: 80,
    amount: 0,
    type: 'lucky'
  }
]);

// 根据选项卡过滤道具
const filteredItems = computed(() => {
  if (activeTab.value === 'all') {
    return items.value;
  } else if (activeTab.value === 'my') {
    return items.value.filter(item => item.amount > 0);
  } else {
    return items.value.filter(item => item.type === activeTab.value);
  }
});

// 处理道具操作（使用或购买）
const handleItemAction = (item) => {
  if (item.amount > 0) {
    // 使用道具逻辑
    console.log('使用道具:', item.name);
    // 这里可以添加使用道具的API调用
    item.amount--;
    // 显示使用成功提示
    showToast(`已使用${item.name}`);
  } else {
    // 购买道具逻辑
    console.log('购买道具:', item.name);
    // 这里可以添加购买道具的API调用
    // 假设购买成功
    item.amount++;
    // 显示购买成功提示
    showToast(`已购买${item.name}`);
  }
};

// 简单的Toast提示
const showToast = (message) => {
  // 这里可以替换为项目中实际使用的Toast组件
  alert(message);
};
</script>

<style lang="less" scoped>
/* 页面基础样式 */
#page-energy-items {
  background: linear-gradient(to bottom, #a1e9c5, #499f9b);
  min-height: 100vh;
  padding: 120px 16px 30px;
  position: relative;
}

/* 顶部导航栏 - 使用Tailwind类实现，此处仅保留必要的补充样式 */
.header {
  /* 绝对定位已在模板中设置 */
}

.header-content {
  /* 背景、圆角和阴影已在模板中设置 */
}

.header-left {
  cursor: pointer;
}

.header-right {
  /* 占位元素，用于平衡布局 */
}

/* 选项卡容器 */
.tabs-container {
  margin-bottom: 20px;
}

.tabs {
  margin-bottom: 16px;
}

.tab-item {
  color: #666;
  cursor: pointer;
}

.tab-item.active {
  background: linear-gradient(to bottom, #a1e9c5, #499f9b);
  color: white;
  font-weight: bold;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

/* 道具列表容器 */
.items-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* 道具卡片 */
.item-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15),
              0 3px 10px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border: 2px solid white;
  transition: all 0.3s ease;
}

.item-card:active {
  transform: scale(0.98);
}

/* 道具头部 */
.item-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* 道具图标 */
.item-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.icon-growth {
  background: linear-gradient(to bottom, #4caf50, #388e3c);
}

.icon-defense {
  background: linear-gradient(to bottom, #2196f3, #1976d2);
}

.icon-lucky {
  background: linear-gradient(to bottom, #ff9800, #f57c00);
}

/* 道具信息 */
.item-info {
  flex: 1;
}

.item-name {
  font-size: 16px;
  margin-bottom: 4px;
}

.item-desc {
  font-size: 12px;
  color: #666;
}

/* 道具数量 */
.item-amount {
  background: linear-gradient(to bottom, #9c27b0, #7b1fa2);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
}

/* 道具效果 */
.item-effects {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* 道具底部 */
.item-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item-price {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
}

/* 操作按钮 */
.item-action-btn {
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.item-action-btn:active {
  transform: scale(0.95);
}

.use-btn {
  background: linear-gradient(to bottom, #4caf50, #388e3c);
  color: white;
}

.buy-btn {
  background: linear-gradient(to bottom, #ff9800, #f57c00);
  color: white;
}

/* 底部安全距离 */
.safe-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>