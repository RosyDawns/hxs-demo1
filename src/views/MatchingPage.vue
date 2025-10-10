<template>
  <div class="page matching-page pt-12">
    <CommonHeader arrowColor="#000">
      <template #left>
        <button @click="$router.back()" class="text-black">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
      </template>
    </CommonHeader>

    <div class="title-section flex items-center justify-between">
      <h1 class="main-title">匹配成功，请选择</h1>
      <div class="mascot">
        <div class="mascot-bubble">
          <div class="mascot-icon">🦁</div>
          <div class="mascot-text">不满意？</div>
          <button class="refresh-btn" @click="handleRefreshMatching">重新匹配</button>
        </div>
      </div>
    </div>

    <!-- 筛选条件 -->
    <div class="filter-section">
      <button 
        class="filter-tag" 
        :class="{ active: activeFilterTag === '全部' }"
        @click="handleTagClick('全部')"
      >
        全部
      </button>
      <button 
        class="filter-tag" 
        :class="{ active: activeFilterTag === '3 小时' }"
        @click="handleTagClick('3 小时')"
      >
        3 小时
      </button>
      <button 
        class="filter-tag" 
        :class="{ active: activeFilterTag === '趣伴' }"
        @click="handleTagClick('趣伴')"
      >
        趣伴
      </button>
      <button 
        class="filter-tag" 
        :class="{ active: activeFilterTag === '台球' }"
        @click="handleTagClick('台球')"
      >
        台球
      </button>
    </div>

    <!-- 位置信息 -->
    <div class="location-info">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2C6.69 2 4 4.69 4 8C4 12.5 10 18 10 18C10 18 16 12.5 16 8C16 4.69 13.31 2 10 2ZM10 10.5C8.62 10.5 7.5 9.38 7.5 8C7.5 6.62 8.62 5.5 10 5.5C11.38 5.5 12.5 6.62 12.5 8C12.5 9.38 11.38 10.5 10 10.5Z"
          fill="#10B981"
        />
      </svg>
      <span>南京夫子庙（门口）</span>
    </div>

    <!-- 附近伙伴数量和筛选 -->
    <div class="nearby-header">
      <div class="nearby-title">
        <span class="title-text">附近</span>
        <span class="count-text">已有1000+伙伴入驻</span>
      </div>
      <button class="filter-btn" @click="handleFilterClick">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M2 4.5H16M5 9H13M8 13.5H10"
            stroke="#666"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <span>筛选</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="#FF6B35"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <!-- 伙伴列表 -->
    <div class="partners-list">
      <HxsItem
        v-for="partner in partners"
        :key="partner.id"
        :coach="partner"
        className="bg-white"
        @view-profile="handleViewProfile"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CommonHeader from "../components/CommonHeader.vue";
import HxsItem from "../components/hxs-item.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};

// 筛选标签状态
const activeFilterTag = ref("全部");

// 原始伙伴数据，用于筛选和重新匹配时使用
const originalPartners = [
  { id: 1, name: "嘉嘉", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", title: "22岁 | 鼓楼区 | 168cm | 今日在线", rating: 4.8, distance: "2.56", prices: { trial: 9.9, single: 19.9, tenPack: 168 }, tags: ["台球", "趣伴", "30分钟"] },
  { id: 2, name: "aurora", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", title: "21岁 | 建邺区 | 160cm | 近三日在线", rating: 4.6, distance: "9.42", prices: { trial: 9.9, single: 19.9, tenPack: 168 }, tags: ["电影", "趣伴", "2小时"] },
  { id: 3, name: "芙芙", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", title: "24岁 | 鼓楼区 | 167cm | 离线", rating: 4.7, distance: "3.21", prices: { trial: 9.9, single: 19.9, tenPack: 168 }, tags: ["台球", "咖啡", "1小时"] },
  { id: 4, name: "小雨", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", title: "23岁 | 秦淮区 | 170cm | 今日在线", rating: 4.9, distance: "1.56", prices: { trial: 9.9, single: 19.9, tenPack: 168 }, tags: ["趣伴", "购物", "3小时"] },
  { id: 5, name: "小晴", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop", title: "20岁 | 玄武区 | 165cm | 今日在线", rating: 4.5, distance: "4.89", prices: { trial: 9.9, single: 19.9, tenPack: 168 }, tags: ["台球", "健身", "30分钟"] },
  { id: 6, name: "月月", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop", title: "25岁 | 建邺区 | 162cm | 近三日在线", rating: 4.7, distance: "8.21", prices: { trial: 9.9, single: 19.9, tenPack: 168 }, tags: ["趣伴", "瑜伽", "1小时"] },
];

// 显示的伙伴数据
const partners = ref([...originalPartners]);

// 处理查看主页事件
const handleViewProfile = (id) => {
  // 实现查看主页的逻辑
  console.log("查看伙伴主页:", id);
  // 跳转到欧阳老师页面
  router.push('/ouyang');
};

// 处理重新匹配
const handleRefreshMatching = () => {
  // 添加加载状态
  const mascotBubble = document.querySelector('.mascot-bubble');
  mascotBubble.classList.add('refreshing');
  
  // 模拟匹配过程
  console.log("正在重新匹配...");
  
  // 2秒后移除加载状态并随机打乱伙伴数据
  setTimeout(() => {
    mascotBubble.classList.remove('refreshing');
    
    // 根据当前筛选标签获取过滤后的数据
    let filteredPartners = [...originalPartners];
    if (activeFilterTag.value !== '全部') {
      filteredPartners = originalPartners.filter(partner => 
        partner.tags.some(tag => tag.includes(activeFilterTag.value))
      );
    }
    
    // 随机打乱数组顺序
    partners.value = shuffleArray(filteredPartners);
  }, 500);
};

// 处理筛选按钮点击
const handleFilterClick = () => {
  // 实现筛选功能
  console.log("打开筛选面板");
  
  // 切换到"全部"筛选标签并刷新数据
  activeFilterTag.value = '全部';
  partners.value = shuffleArray([...originalPartners]);
};

// 筛选标签点击事件处理
const handleTagClick = (tag) => {
  activeFilterTag.value = tag;
  
  // 根据标签筛选数据
  if (tag === '全部') {
    partners.value = [...originalPartners];
  } else {
    partners.value = originalPartners.filter(partner => 
      partner.tags.some(item => item.includes(tag))
    );
  }
};

// 随机打乱数组的辅助函数
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
</script>

<style scoped>
/* 顶部导航栏 */
.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
}

.back-btn,
.icon-btn {
  background: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-actions {
  display: flex;
  gap: 12px;
}

/* 标题区域 */
.title-section {
  padding: 0 16px 16px;
}

.main-title {
  font-size: 28px;
  font-weight: bold;
  color: #000;
  margin: 0;
}

.mascot {
  position: relative;
}

.mascot-bubble {
  background: linear-gradient(135deg, #ffe066 0%, #fff4a3 100%);
  border: 3px solid #000;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

/* 重新匹配加载动画 */
.mascot-bubble.refreshing {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(255, 224, 102, 0.5);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}

.mascot-icon {
  font-size: 32px;
  margin-bottom: -4px;
}

.mascot-text {
  font-size: 11px;
  font-weight: bold;
  color: #000;
  margin-bottom: 2px;
}

.refresh-btn {
  background: #10b981;
  color: white;
  font-size: 10px;
  padding: 2px 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  outline: none;
}

.refresh-btn:hover {
  background: #0d9460;
  transform: scale(1.05);
}

.refresh-btn:active {
  transform: scale(0.95);
}

/* 筛选条件 */
.filter-section {
  display: flex;
  gap: 8px;
  padding: 0 16px 16px;
}

.filter-tag {
  padding: 8px 20px;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 20px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
}

.filter-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.filter-tag.active {
  background: #ff69b4;
  color: white;
  border-color: #ff69b4;
}

.filter-tag.active:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(255, 105, 180, 0.3);
}

/* 位置信息 */
.location-info {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 16px 16px;
  font-size: 14px;
  color: #333;
}

/* 附近标题 */
.nearby-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 16px;
}

.nearby-title {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.title-text {
  font-size: 20px;
  font-weight: bold;
  color: #000;
}

.count-text {
  font-size: 12px;
  color: #10b981;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 13px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
}

.filter-btn:hover {
  border-color: #10B981;
  color: #10B981;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.15);
}

/* 伙伴列表 */
.partners-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 16px;
}

.partner-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 12px;
  padding: 12px;
}

/* 左侧头像区域 */
.partner-left {
  position: relative;
  flex-shrink: 0;
}

.partner-avatar {
  width: 100px;
  height: 130px;
  object-fit: cover;
  border-radius: 12px;
}

.partner-extra-photos {
  position: absolute;
  bottom: -8px;
  left: 4px;
  display: flex;
  gap: 4px;
}

.extra-photo {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  object-fit: cover;
  border: 2px solid white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* 右侧信息区域 */
.partner-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.partner-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.partner-title-area {
  display: flex;
  align-items: center;
  gap: 6px;
}

.partner-name {
  font-size: 17px;
  font-weight: bold;
  color: #000;
  margin: 0;
}

.online-status {
  font-size: 12px;
  color: #999;
}

.partner-meta {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 8px;
  font-size: 12px;
  color: #666;
}

.age-badge {
  display: flex;
  align-items: center;
  gap: 4px;
}

.meta-dot {
  color: #d1d5db;
}

.partner-tags {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.tag {
  padding: 3px 10px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 500;
}

.tag.red {
  background: #fee2e2;
  color: #dc2626;
}

.tag.green {
  background: #d1fae5;
  color: #059669;
}

.tag.blue {
  background: #dbeafe;
  color: #2563eb;
}

.partner-footer {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.distance-price {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.distance {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #10b981;
}

.price {
  display: flex;
  align-items: center;
  gap: 8px;
}

.price-badge {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%);
  color: white;
  font-size: 9px;
  padding: 4px 6px;
  border-radius: 6px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  min-width: 32px;
}

.price-amount {
  font-size: 18px;
  font-weight: bold;
  color: #ff6b35;
}

.action-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
}

.like-btn {
  background: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-profile-btn {
  background: #10b981;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 18px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.view-profile-btn:hover {
  background: #059669;
}
</style>
