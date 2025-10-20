<template>
  <view class="page">
    <!-- 顶部导航栏 -->
    <view class="header" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="header-content">
        <view class="back-btn" @tap="goBack">
          <text class="back-icon">‹</text>
        </view>
        <view class="city-btn">
          <text>上海</text>
          <text class="arrow">▼</text>
        </view>
      </view>
    </view>

    <!-- 主内容区域 -->
    <view class="main-content">
      <!-- Banner区域 -->
      <view class="banner">
        <image
          src="/static/images/img_39.jpg"
          class="banner-image"
          mode="aspectFill"
        />
        <view class="banner-overlay"></view>
        <view class="banner-text">
          <text class="banner-title">城市大师频道</text>
          <view class="banner-subtitle">
            <text>为你的城市英雄打Call</text>
            <view class="go-badge">GO></view>
          </view>
        </view>
      </view>

      <view class="content-wrap">
        <!-- 大师分类卡片 -->
        <view class="category-section">
          <view class="category-cards">
            <view
              v-for="(category, index) in masterCategories"
              :key="index"
              :class="['category-card', { active: selectedCategory === category.id }]"
              @tap="selectCategory(category.id)"
            >
              <image class="category-image" :src="category.image" mode="aspectFill" />
              <text class="category-name">{{ category.name }}</text>
            </view>
          </view>
        </view>

        <!-- 当前大师信息和二级分类 -->
        <view class="info-section">
          <view class="info-header">
            <view class="info-title">
              <text class="title-text">{{ getCurrentCategoryName() }}</text>
              <text class="update-time">10月05日已更新</text>
            </view>
            <view class="rules-btn" @tap="showRules = true">
              <text>评选规则</text>
              <text class="arrow">›</text>
            </view>
          </view>

          <!-- 二级分类标签（仅人气大师显示） -->
          <scroll-view
            v-if="selectedCategory === 'popular'"
            class="sub-category"
            scroll-x
          >
            <view
              v-for="subCategory in subCategories"
              :key="subCategory.id"
              :class="['sub-btn', { active: selectedSubCategory === subCategory.id }]"
              @tap="selectedSubCategory = subCategory.id"
            >
              {{ subCategory.name }}
            </view>
          </scroll-view>
        </view>

        <!-- 筛选标签栏 -->
        <view class="filter-bar">
          <scroll-view class="filter-scroll" scroll-x>
            <view
              v-for="(tab, index) in currentFilterTabs"
              :key="index"
              :class="['filter-tab', { active: selectedFilterTab === tab.id }]"
              @tap="selectFilterTab(tab.id)"
            >
              <text>{{ tab.name }}</text>
              <text v-if="tab.hasDropdown" class="icon">▼</text>
              <text v-if="tab.id === 'more'" class="icon">›</text>
              <text v-if="tab.iconType === 'sort'" class="icon">⇆</text>
              <view v-if="selectedFilterTab === tab.id" class="active-line"></view>
            </view>
          </scroll-view>
          
          <!-- 搜索图标（仅冠军大师和非遗大师显示） -->
          <view
            v-if="selectedCategory !== 'popular'"
            class="search-icon"
            @tap="handleSearch"
          >
            <text>🔍</text>
          </view>
        </view>

        <!-- 排行榜列表区域 -->
        <view class="list-section">
          <!-- 人气大师：列表布局 -->
          <template v-if="selectedCategory === 'popular'">
            <RankingCard
              v-for="(master, index) in rankedMasters"
              :key="master.id"
              :master="master"
              :rank="index + 1"
              @view-profile="handleViewProfile"
              @call="handleCall"
            />
          </template>

          <!-- 冠军大师/非遗大师：卡片网格布局 -->
          <template v-else>
            <!-- 大师卡片模式 -->
            <template v-if="viewMode === 'master'">
              <view class="grid-layout">
                <ChampionMasterCard
                  v-for="master in championMasters"
                  :key="master.id"
                  :master="master"
                  @call="handleCall"
                />
              </view>
            </template>

            <!-- 作品内容模式 -->
            <template v-else>
              <view class="grid-layout">
                <ContentCard
                  v-for="content in contentList"
                  :key="content.id"
                  :content="content"
                  @like="handleLike"
                />
              </view>
            </template>
          </template>

          <!-- 加载更多 -->
          <view class="load-more">
            <text :class="['load-text', { loading: loading }]">
              {{ loading ? '加载中...' : '加载更多' }}
            </text>
            <text v-if="!loading" class="arrow">▼</text>
          </view>
        </view>
      </view>

      <!-- 评选规则弹窗 -->
      <view v-if="showRules" class="modal-mask" @tap="showRules = false">
        <view class="modal-content" @tap.stop>
          <view class="modal-header">
            <text class="modal-title">评选规则</text>
            <text class="close-btn" @tap="showRules = false">×</text>
          </view>
          <view class="modal-body">
            <text class="rule-text">1. 大师评选每月更新一次</text>
            <text class="rule-text">2. 根据用户评价、服务质量、专业水平等多维度进行综合评估</text>
            <text class="rule-text">3. 支持用户打Call，为您喜爱的大师加油</text>
            <text class="rule-text">4. 评选结果仅供参考，不代表官方排名</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import RankingCard from '@/components/RankingCard.vue';
import ContentCard from '@/components/ContentCard.vue';
import ChampionMasterCard from '@/components/ChampionMasterCard.vue';

export default {
  name: 'RankingPage',
  components: {
    RankingCard,
    ContentCard,
    ChampionMasterCard
  },
  data() {
    return {
      statusBarHeight: 0,
      selectedCategory: 'popular',
      selectedSubCategory: 'leader',
      selectedFilterTab: 'all',
      showRules: false,
      loading: false,
      viewMode: 'master', // 'master' 或 'content'
      
      // 人气大师的筛选标签
      popularFilterTabs: [
        { id: 'all', name: '全部主理人', hasDropdown: true },
        { id: 'industry', name: '行业', hasDropdown: true },
        { id: 'food', name: '餐饮美食', hasDropdown: false },
        { id: 'sports', name: '运动健康', hasDropdown: false },
        { id: 'kids', name: '少儿培训', hasDropdown: false },
        { id: 'art', name: '艺术', hasDropdown: false },
        { id: 'more', name: '更多', hasDropdown: false }
      ],
      
      // 冠军大师/非遗大师的筛选标签
      championFilterTabs: [
        { id: 'follow', name: '关注', iconType: 'sort' },
        { id: 'recommend', name: '推荐', iconType: 'sort' },
        { id: 'nearby', name: '附近', iconType: 'sort' },
        { id: 'screen', name: '筛选', hasDropdown: true },
        { id: 'live', name: '直播', iconType: 'none' }
      ],
      
      masterCategories: [
        { id: 'popular', name: '人气大师', image: '/static/images/user_1.png' },
        { id: 'champion', name: '冠军大师', image: '/static/images/user_2.png' },
        { id: 'heritage', name: '非遗大师', image: '/static/images/user_3.png' }
      ],
      
      subCategories: [
        { id: 'leader', name: '主理人频道' },
        { id: 'skill', name: '技能唤醒师' },
        { id: 'partner', name: '搭子唤醒师' }
      ],
      
      rankedMastersList: [
        {
          id: 1,
          name: '李教练',
          category: '游泳唤醒师',
          qualification: '国家二级运动员 | 8年教学经验',
          specialty: '蛙泳/自由泳',
          rating: 4.8,
          avatar: 'https://randomuser.me/api/portraits/men/10.jpg'
        },
        {
          id: 2,
          name: '赵教练',
          category: '游泳唤醒师',
          qualification: '国家一级运动员 | 10年教学经验',
          specialty: '仰泳/自由泳',
          rating: 4.9,
          avatar: 'https://randomuser.me/api/portraits/women/11.jpg'
        },
        {
          id: 3,
          name: '张教练',
          category: '游泳唤醒师',
          qualification: '国家二级运动员 | 6年教学经验',
          specialty: '自由泳/混合泳',
          rating: 4.7,
          avatar: 'https://randomuser.me/api/portraits/men/12.jpg'
        }
      ],
      
      championMastersList: [
        {
          id: 1,
          name: '李教练',
          title: '世界游泳冠军',
          specialty: '蛙泳/自由泳',
          avatar: 'https://randomuser.me/api/portraits/men/20.jpg'
        },
        {
          id: 2,
          name: '赵教练',
          title: '奥运会游泳冠军',
          specialty: '仰泳/自由泳',
          avatar: 'https://randomuser.me/api/portraits/women/21.jpg'
        }
      ],
      
      heritageMastersList: [
        {
          id: 1,
          name: '非遗剪纸张颖莹',
          title: '非遗剪纸艺术家',
          specialty: '非遗剪纸/艺术创作',
          avatar: 'https://randomuser.me/api/portraits/women/30.jpg'
        },
        {
          id: 2,
          name: '非遗年画霍庆有',
          title: '非遗木版年画艺术家',
          specialty: '非遗木版年画',
          avatar: 'https://randomuser.me/api/portraits/men/31.jpg'
        }
      ],
      
      contentList: [
        {
          id: 1,
          title: '非遗剪纸服装秀 | 白鹅谭艺术中心',
          author: {
            name: '非遗剪纸张颖莹',
            avatar: 'https://randomuser.me/api/portraits/women/30.jpg'
          },
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
          likes: 128
        },
        {
          id: 2,
          title: '当饰品遇到非遗-中国传统非遗纸鳖',
          author: {
            name: '灵境修猫',
            avatar: 'https://randomuser.me/api/portraits/men/31.jpg'
          },
          image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400',
          likes: 256
        }
      ]
    };
  },
  
  computed: {
    rankedMasters() {
      return this.rankedMastersList;
    },
    
    championMasters() {
      if (this.selectedCategory === 'champion') {
        return this.championMastersList;
      } else if (this.selectedCategory === 'heritage') {
        return this.heritageMastersList;
      }
      return this.championMastersList;
    },
    
    currentFilterTabs() {
      if (this.selectedCategory === 'popular') {
        return this.popularFilterTabs;
      } else {
        return this.championFilterTabs;
      }
    }
  },
  
  onLoad() {
    // 获取状态栏高度
    const systemInfo = uni.getSystemInfoSync();
    this.statusBarHeight = systemInfo.statusBarHeight;
  },
  
  methods: {
    goBack() {
      uni.navigateBack();
    },
    
    selectCategory(categoryId) {
      this.selectedCategory = categoryId;
      
      // 切换分类时重置筛选标签到第一个
      if (categoryId === 'popular') {
        this.selectedFilterTab = 'all';
      } else {
        this.selectedFilterTab = 'follow';
        this.viewMode = 'master'; // 重置为大师模式
      }
      
      this.loadData();
    },
    
    selectFilterTab(tabId) {
      console.log('切换筛选标签:', tabId);
      
      // 在冠军/非遗大师页面，关注/推荐/附近 可以切换模式
      if (this.selectedCategory !== 'popular') {
        const toggleableTabs = ['follow', 'recommend', 'nearby'];
        
        if (this.selectedFilterTab === tabId && toggleableTabs.includes(tabId)) {
          // 切换模式
          this.viewMode = this.viewMode === 'master' ? 'content' : 'master';
        } else {
          // 切换到新标签，默认显示大师模式
          this.selectedFilterTab = tabId;
          if (toggleableTabs.includes(tabId)) {
            this.viewMode = 'master';
          }
        }
      } else {
        this.selectedFilterTab = tabId;
      }
    },
    
    getCurrentCategoryName() {
      const category = this.masterCategories.find(c => c.id === this.selectedCategory);
      return category ? category.name : '冠军大师';
    },
    
    handleCall(masterId) {
      console.log('打Call给大师:', masterId);
      uni.navigateTo({
        url: '/pages/call/index'
      });
    },
    
    handleViewProfile(masterId) {
      console.log('查看大师主页:', masterId);
      uni.navigateTo({
        url: '/pages/ouyang/index'
      });
    },
    
    handleSearch() {
      console.log('打开搜索');
      uni.navigateTo({
        url: '/pages/search/index'
      });
    },
    
    handleLike(contentId) {
      console.log('点赞内容:', contentId);
      const content = this.contentList.find(c => c.id === contentId);
      if (content) {
        content.likes++;
      }
    },
    
    loadData() {
      console.log('加载数据:', this.selectedCategory);
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #f8f8f8;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10rpx);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24rpx;
}

.back-btn {
  width: 48rpx;
  height: 48rpx;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-icon {
  font-size: 48rpx;
  font-weight: bold;
  color: #333333;
}

.city-btn {
  padding: 8rpx 24rpx;
  background: #ffffff;
  border-radius: 999rpx;
  font-size: 28rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.arrow {
  margin-left: 8rpx;
  font-size: 20rpx;
  color: #999999;
}

.main-content {
  background: #ffffff;
}

.banner {
  position: relative;
  height: 512rpx;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.4));
}

.banner-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 48rpx;
  color: #ffffff;
}

.banner-title {
  font-size: 48rpx;
  font-weight: bold;
  display: block;
  margin-bottom: 16rpx;
  text-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.3);
}

.banner-subtitle {
  display: flex;
  align-items: center;
  padding: 8rpx 16rpx;
  font-size: 32rpx;
  border: 2rpx solid rgba(255, 255, 255, 0.8);
  border-radius: 999rpx;
}

.go-badge {
  background: rgba(255, 235, 205, 0.9);
  color: #ff9800;
  border-radius: 999rpx;
  padding: 4rpx 16rpx;
  margin-left: 16rpx;
}

.content-wrap {
  background: #ffffff;
}

.category-section {
  padding: 0 16rpx;
}

.category-cards {
  border-radius: 24rpx 24rpx 0 0;
  margin-top: -100rpx;
  position: relative;
  z-index: 10;
  padding: 16rpx;
  background: #ffffff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24rpx;
  margin-bottom: 32rpx;
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
  border-radius: 24rpx;
  overflow: hidden;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.category-card.active {
  opacity: 1;
}

.category-image {
  width: 100%;
  height: 176rpx;
}

.category-name {
  font-weight: 500;
  font-size: 32rpx;
  padding: 8rpx 0;
}

.info-section {
  padding: 0 24rpx 8rpx;
}

.info-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16rpx;
}

.info-title {
  flex: 1;
  display: flex;
  align-items: center;
}

.title-text {
  font-size: 36rpx;
  font-weight: bold;
  margin-right: 16rpx;
}

.update-time {
  font-size: 24rpx;
  color: #999999;
}

.rules-btn {
  display: flex;
  align-items: center;
  font-size: 24rpx;
  color: #666666;
}

.sub-category {
  display: flex;
  white-space: nowrap;
  margin-bottom: 16rpx;
}

.sub-btn {
  padding: 8rpx 16rpx;
  border-radius: 999rpx;
  font-size: 28rpx;
  color: #666666;
  margin-right: 16rpx;
  flex-shrink: 0;
}

.sub-btn.active {
  background: #fff3e0;
  color: #ff5722;
}

.filter-bar {
  border-bottom: 2rpx solid #f5f5f5;
  padding: 0 24rpx;
  display: flex;
  align-items: center;
}

.filter-scroll {
  flex: 1;
  white-space: nowrap;
}

.filter-tab {
  display: inline-flex;
  align-items: center;
  padding: 24rpx 0;
  font-size: 28rpx;
  font-weight: 500;
  color: #666666;
  margin-right: 32rpx;
  position: relative;
}

.filter-tab.active {
  color: #ff5722;
}

.filter-tab .icon {
  font-size: 20rpx;
  margin-left: 8rpx;
}

.active-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4rpx;
  background: #ff5722;
}

.search-icon {
  padding: 16rpx;
  color: #999999;
  flex-shrink: 0;
}

.list-section {
  padding: 24rpx;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24rpx;
}

.load-more {
  text-align: center;
  padding: 24rpx 0;
}

.load-text {
  font-size: 28rpx;
  color: #999999;
}

.load-text.loading {
  opacity: 0.6;
}

.modal-mask {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
}

.modal-content {
  background: #ffffff;
  width: 100%;
  border-radius: 48rpx 48rpx 0 0;
  padding: 48rpx;
  max-height: 70vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32rpx;
}

.modal-title {
  font-size: 36rpx;
  font-weight: bold;
}

.close-btn {
  font-size: 60rpx;
  color: #999999;
  line-height: 1;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.rule-text {
  font-size: 28rpx;
  color: #666666;
}
</style>
