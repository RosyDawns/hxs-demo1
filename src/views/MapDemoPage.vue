<template>
  <div class="page flex flex-col h-screen bg-[#f5f5f5]">
    <!-- 顶部导航栏 -->
    <CommonHeader :bg-color="'#ffffff'" :arrow-color="'#333333'">
      <template #center>
        <h2 class="text-base font-medium text-gray-900">高德地图演示</h2>
      </template>
    </CommonHeader>

    <!-- 主内容区 -->
    <main class="flex-1 overflow-hidden pt-12 flex flex-col">
      <!-- 地图容器 -->
      <div class="flex-1 relative">
        <div id="amap" ref="mapRef" class="w-full h-full"></div>
        <!-- 高德地图原生搜索框容器 -->
        <div class="absolute top-4 left-4 right-4 z-50">
          <div class="relative">
            <input
              type="text"
              id="amap-search-input"
              placeholder="搜索地点..."
              class="w-full h-12 pl-12 pr-4 bg-white border border-gray-200 rounded-xl text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 shadow-lg transition-all duration-200"
              v-model="searchKeyword"
              @keyup.enter="handleSearch"
            />
            <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
              <i class="fas fa-search text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 路线导航组件 -->
    <RouteNavigation
      v-if="showNavigationPanel"
      :show="showNavigationPanel"
      :destination="navigationDestination"
      :start-position="navigationStartPos"
      :end-position="navigationEndPos"
      :start-address="navigationStartAddress"
      @update:show="showNavigationPanel = $event"
    />

    <!-- 浮动搜索结果列表 -->
    <div
      v-if="searchResults.length > 0"
      class="fixed bottom-0 left-0 right-0 bg-transparent z-40"
    >
      <div class="">
        <div class="px-4 py-3 flex items-center justify-between">
          <h3 class="text-sm font-medium text-gray-900">搜索结果</h3>
          <span class="text-xs text-gray-500"
            >{{ searchResults.length }} 个结果</span
          >
        </div>
        <div class="overflow-x-auto hide-scrollbar">
          <div class="flex space-x-4 px-4 pb-4" style="min-width: max-content">
            <div
              v-for="(item, index) in searchResults"
              :key="index"
              class="bg-white flex-shrink-0 w-80 border border-gray-200 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md search-result-item"
              @click="selectResult(index)"
            >
              <div class="relative">
                <div class="w-full h-24 flex items-center justify-center">
                  <img
                    class="w-full h-full object-cover"
                    :src="item.avatar || Pic41"
                    :alt="item.name"
                  />
                </div>
                <div
                  class="absolute top-2 right-2 bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded-full"
                >
                  {{ item.rating }}
                </div>
              </div>
              <div class="p-3">
                <h4 class="font-medium text-gray-900 text-sm truncate">
                  {{ item.name }}
                </h4>
                <p class="text-xs text-gray-500 mt-1 truncate">
                  {{ item.address }}
                </p>
                <div class="flex items-center mt-2">
                  <div class="flex text-amber-400">
                    <i class="fas fa-star text-xs"></i>
                    <i class="fas fa-star text-xs"></i>
                    <i class="fas fa-star text-xs"></i>
                    <i class="fas fa-star text-xs"></i>
                    <i class="fas fa-star-half-alt text-xs"></i>
                  </div>
                  <span class="text-xs text-gray-500 ml-1"
                    >{{ item.distance }}km</span
                  >
                </div>
                <!-- 底部按钮 -->
                <div class="flex gap-2 mt-3">
                  <button
                    class="flex-1 h-8 bg-amber-500 text-white text-xs font-medium rounded flex items-center justify-center"
                    @click.stop="goToOuyangPage"
                  >
                    <i class="fas fa-home mr-1"></i>
                    主页
                  </button>
                  <button
                    class="flex-1 h-8 bg-white text-gray-700 text-xs font-medium rounded border border-gray-200 flex items-center justify-center"
                    @click.stop="addToFavoritesFromList(item.name)"
                  >
                    <i class="fas fa-heart mr-1"></i>
                    收藏
                  </button>
                  <button
                    class="flex-1 h-8 bg-white text-gray-700 text-xs font-medium rounded border border-gray-200 flex items-center justify-center"
                    @click.stop="navigateToListItem(item.name)"
                  >
                    <i class="fas fa-route mr-1"></i>
                    路线
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 地址输入弹框 -->
    <div
      v-if="showAddressDialog"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
      @click.self="closeDialog"
    >
      <div
        class="bg-white rounded-2xl w-full max-w-sm shadow-xl animate-scale-in"
      >
        <div class="px-5 pt-5 pb-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">输入地址</h3>
          <input
            v-model="addressInput"
            type="text"
            class="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:bg-white transition"
            placeholder="请输入地址，如：北京市朝阳区"
            @keyup.enter="confirmAddress"
          />
        </div>
        <div class="flex border-t border-gray-100">
          <button
            class="flex-1 h-12 text-sm text-gray-600 active:bg-gray-50 transition rounded-bl-2xl"
            @click="closeDialog"
          >
            取消
          </button>
          <div class="w-px bg-gray-100"></div>
          <button
            class="flex-1 h-12 text-sm font-medium active:bg-gray-50 transition rounded-br-2xl"
            :class="addressInput.trim() ? 'text-amber-500' : 'text-gray-300'"
            @click="confirmAddress"
            :disabled="!addressInput.trim()"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";
import CommonHeader from "../components/CommonHeader.vue";
import RouteNavigation from "../components/RouteNavigation.vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import ShopIcon from "@/assets/images/img_41.jpg";

import Pic41 from "@/assets/images/img_41.jpg";
import Pic42 from "@/assets/images/img_42.jpg";
import Pic43 from "@/assets/images/img_43.jpg";
import Pic44 from "@/assets/images/img_39.jpeg";
import Pic45 from "@/assets/images/img_38.jpeg";

export default {
  name: "MapDemoPage",
  components: {
    CommonHeader,
    RouteNavigation,
  },
  setup() {
    const router = useRouter();
    const mapRef = ref(null);
    let map = null;
    let markers = [];

    // 搜索相关状态
    const searchKeyword = ref("");
    const searchResults = ref([]);
    const selectedIndex = ref(0);

    // 导航面板相关状态
    const showNavigationPanel = ref(false);
    const navigationDestination = ref("");
    const navigationStartPos = ref([]);
    const navigationEndPos = ref([]);
    const navigationStartAddress = ref(""); // 出发地地址
    const navigationDistance = ref("");
    const navigationDuration = ref("");
    const currentRoute = ref(null); // 用于保存当前路线实例

    // 添加默认标记点
    const addDefaultMarkers = () => {
      // 随机选择一个区域
      const randomRegion = getRandomRegion();

      // 定位到该区域
      map.setCenter(randomRegion.center);
      map.setZoom(randomRegion.zoom);

      // 生成该区域内的随机标记点
      generateRandomMarkersInRegion("默认", randomRegion);
    };

    // 添加标记点
    const addMarker = (
      position,
      title,
      content,
      routePath,
      index,
      shouldTriggerEffect = true,
      avatarUrl = null
    ) => {
      // 如果没有提供头像URL，则使用默认图片
      const avatar = avatarUrl || ShopIcon;

      // 创建自定义标记点HTML，使用头像
      const markerContent = `
        <div class="custom-marker-avatar" style="transform: scale(1); transition: all 0.3s ease;">
          <img src="${avatar}" alt="${title}" class="marker-avatar" />
          <div class="marker-pulse-avatar"></div>
        </div>
      `;

      const marker = new AMap.Marker({
        position: position,
        title: title,
        content: markerContent,
        offset: new AMap.Pixel(-25, -25), // 调整偏移以居中显示头像标记点
      });

      // 点击标记点跳转页面
      marker.on("click", () => {
        // 如果传入了索引，则切换列表选中项
        if (index !== undefined) {
          // 切换列表选中项
          selectedIndex.value = index;

          // 平滑移动地图到标记点位置
          map.setCenter(position);

          // 滚动列表到显示区域的前面（左侧）
          scrollToSelectedItem(index);
        }

        // 如果需要触发特效，则改变标记点颜色并放大
        if (shouldTriggerEffect) {
          const markerElement = marker.getContentDom();
          if (markerElement) {
            const avatarElement = markerElement.querySelector(".marker-avatar");
            if (avatarElement) {
              // 添加点击效果类
              avatarElement.classList.add("clicked");

              // 3秒后移除效果类
              setTimeout(() => {
                avatarElement.classList.remove("clicked");
              }, 3000);
            }
          }
        }

        // 显示信息窗口（使用与列表项一致的样式）
        const infoWindowContent = `
          <div class="custom-info-window bg-white rounded-lg border border-gray-200 shadow-lg w-48">
            <div class="p-3">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-gray-200">
                  <img src="${avatar}" alt="${title}" class="w-full h-full object-cover rounded-lg">
                </div>
                <div class="ml-3 flex-1">
                  <h3 class="text-sm font-medium text-gray-900 truncate">${title}</h3>
                  <div class="flex items-center mt-1">
                    <div class="flex text-amber-400">
                      <i class="fas fa-star text-xs"></i>
                      <i class="fas fa-star text-xs"></i>
                      <i class="fas fa-star text-xs"></i>
                      <i class="fas fa-star text-xs"></i>
                      <i class="fas fa-star-half-alt text-xs"></i>
                    </div>
                    <span class="text-xs text-gray-500 ml-1">4.5</span>
                  </div>
                </div>
              </div>
              <p class="text-xs text-gray-500 mt-2 truncate">${content.replace(
                "<br/>",
                " "
              )}</p>
              <div class="mt-2 flex justify-between items-center">
                <span class="text-xs text-amber-500 font-medium">0.8km</span>
                <button class="text-xs text-amber-500 font-medium">详情</button>
              </div>
              <!-- 底部按钮 -->
              <div class="flex gap-2 mt-3">
                <button class="flex-1 h-8 bg-amber-500 text-white text-xs font-medium rounded flex items-center justify-center" onclick="window.goToOuyangPage()">
                  <i class="fas fa-home mr-1"></i>
                  主页
                </button>
                <button class="flex-1 h-8 bg-white text-gray-700 text-xs font-medium rounded border border-gray-200 flex items-center justify-center" onclick="window.addToFavoritesFromInfoWindow('${title}')">
                  <i class="fas fa-heart mr-1"></i>
                  收藏
                </button>
                 <button class="flex-1 h-8 bg-white text-gray-700 text-xs font-medium rounded border border-gray-200 flex items-center justify-center" onclick="window.navigateToDestination('${title}')">
                  <i class="fas fa-route mr-1"></i>
                  路线
                </button>
              </div>
            </div>
          </div>
        `;

        // 创建信息窗口
        const infoWindow = new AMap.InfoWindow({
          content: infoWindowContent,
          offset: new AMap.Pixel(0, -30), // 调整信息窗口偏移
        });

        // 打开信息窗口
        infoWindow.open(map, marker.getPosition());
      });

      // 添加到地图
      map.add(marker);
      markers.push(marker);

      return marker;
    };

    // 地址输入相关状态
    const showAddressDialog = ref(false);
    const addressInput = ref("");
    let AMap = null; // 保存AMap实例

    // 初始化地图
    const initMap = (amapInstance) => {
      AMap = amapInstance; // 保存实例引用
      // 创建地图实例
      map = new AMap.Map("amap", {
        center: [121.4905, 31.2415], // 上海外滩坐标
        zoom: 15, // 缩放级别
        resizeEnable: true, // 允许地图根据容器大小调整
      });

      // 添加默认标记点
      addDefaultMarkers();

      // 添加地图点击监听器
      addMapClickListener();
    };

    // 处理搜索
    const handleSearch = () => {
      const keyword = searchKeyword.value.trim();
      if (!keyword) return;

      // 重置导航状态
      resetNavigationOnSearch();

      // 随机选择一个区域
      const randomRegion = getRandomRegion();

      // 定位到该区域
      map.setCenter(randomRegion.center);
      map.setZoom(randomRegion.zoom);

      // 生成该区域内的随机标记点
      generateRandomMarkersInRegion(keyword, randomRegion);
    };

    // 获取随机区域
    const getRandomRegion = () => {
      const regions = [
        {
          name: "上海外滩",
          center: [121.4905, 31.2415],
          zoom: 16,
          bounds: {
            minLng: 121.4855,
            maxLng: 121.4955,
            minLat: 31.2365,
            maxLat: 31.2465,
          },
        },
        {
          name: "上海人民广场",
          center: [121.4766, 31.2336],
          zoom: 16,
          bounds: {
            minLng: 121.4716,
            maxLng: 121.4816,
            minLat: 31.2286,
            maxLat: 31.2386,
          },
        },
        {
          name: "上海陆家嘴",
          center: [121.4997, 31.2411],
          zoom: 16,
          bounds: {
            minLng: 121.4947,
            maxLng: 121.5047,
            minLat: 31.2361,
            maxLat: 31.2461,
          },
        },
        {
          name: "上海南京路步行街",
          center: [121.4789, 31.2359],
          zoom: 16,
          bounds: {
            minLng: 121.4739,
            maxLng: 121.4839,
            minLat: 31.2309,
            maxLat: 31.2409,
          },
        },
        {
          name: "上海豫园",
          center: [121.4922, 31.2272],
          zoom: 16,
          bounds: {
            minLng: 121.4872,
            maxLng: 121.4972,
            minLat: 31.2222,
            maxLat: 31.2322,
          },
        },
        {
          name: "上海静安寺",
          center: [121.4582, 31.2219],
          zoom: 16,
          bounds: {
            minLng: 121.4532,
            maxLng: 121.4632,
            minLat: 31.2169,
            maxLat: 31.2269,
          },
        },
      ];

      const randomIndex = Math.floor(Math.random() * regions.length);
      return regions[randomIndex];
    };

    // 在指定区域内生成随机标记点
    const generateRandomMarkersInRegion = (keyword, region) => {
      // 清除之前的标记点
      clearAllMarkers();

      // 生成6-12个随机标记点（增加密度）
      const markerCount = Math.floor(Math.random() * 7) + 6;
      const mockData = [];

      // 头像图片数组，用于模拟不同的用户头像
      const avatarImages = [Pic41, Pic42, Pic43, Pic44, Pic45];

      for (let i = 0; i < markerCount; i++) {
        // 在区域内生成随机坐标
        const lng =
          region.bounds.minLng +
          Math.random() * (region.bounds.maxLng - region.bounds.minLng);
        const lat =
          region.bounds.minLat +
          Math.random() * (region.bounds.maxLat - region.bounds.minLat);

        // 随机选择一个头像
        const randomAvatar =
          avatarImages[Math.floor(Math.random() * avatarImages.length)];

        mockData.push({
          id: i + 1,
          name: `${keyword}${i + 1}号店`,
          address: `${region.name}商业区`,
          position: [lng, lat],
          rating: (Math.random() * 2 + 3).toFixed(1), // 3.0-5.0的随机评分
          distance: (Math.random() * 3).toFixed(1), // 0-3公里的随机距离
          tel: `021-${Math.floor(Math.random() * 90000000 + 10000000)}`,
          avatar: randomAvatar, // 添加头像字段
        });
      }

      searchResults.value = mockData;
      selectedIndex.value = 0;

      // 为搜索结果添加标记点
      mockData.forEach((item, index) => {
        const marker = addMarker(
          item.position,
          item.name,
          `${item.address}<br/>电话: ${item.tel}`,
          null,
          index,
          false,
          item.avatar
        );
      });

      // 定位到第一个结果（仅定位，不触发特效）
      if (mockData.length > 0) {
        map.setCenter(mockData[0].position);
        map.setZoom(17); // 增加缩放级别以适应更多标记点
      }
    };

    // 选择搜索结果
    const selectResult = (index) => {
      selectedIndex.value = index;

      // 定位到选中的结果
      const selectedItem = searchResults.value[index];
      if (selectedItem) {
        map.setCenter(selectedItem.position);
        map.setZoom(16);

        // 触发对应标记点的颜色变化和放大效果
        triggerMarkerEffect(index);

        // 滚动列表到显示区域的前面（左侧）
        scrollToSelectedItem(index);
      }
    };

    // 监听搜索结果变化
    watch(searchResults, () => {
      resetNavigationOnSearch();
    });

    // 滚动到选中的列表项
    const scrollToSelectedItem = (index) => {
      setTimeout(() => {
        const container = document.querySelector(".overflow-x-auto");
        const selectedElement = document.querySelector(
          `.search-result-item:nth-child(${index + 1})`
        );
        if (container && selectedElement) {
          // 计算选中元素相对于容器的位置
          const containerRect = container.getBoundingClientRect();
          const selectedRect = selectedElement.getBoundingClientRect();

          // 计算滚动位置，使选中项位于左侧
          const scrollPosition =
            selectedRect.left - containerRect.left + container.scrollLeft;

          // 平滑滚动到指定位置
          container.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    };

    // 触发标记点效果
    const triggerMarkerEffect = (index) => {
      // 找到对应的标记点
      const marker = markers[index];
      const selectedItem = searchResults.value[index];
      if (marker && selectedItem) {
        // 改变标记点颜色并放大
        const markerElement = marker.getContentDom();
        if (markerElement) {
          const avatarElement = markerElement.querySelector(".marker-avatar");
          if (avatarElement) {
            // 添加点击效果类
            avatarElement.classList.add("clicked");

            // 3秒后移除效果类
            setTimeout(() => {
              avatarElement.classList.remove("clicked");
            }, 3000);
          }
        }

        // 打开信息窗口（使用与列表项一致的样式）
        if (selectedItem) {
          const infoWindowContent = `
            <div class="custom-info-window bg-white rounded-lg border border-gray-200 shadow-lg w-48">
              <div class="p-3">
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-12 h-12 bg-gray-200">
                    <img src="${selectedItem.avatar || ShopIcon}" alt="${
            selectedItem.name
          }" class="w-full h-full object-cover rounded-lg"> 
                  </div>
                  <div class="ml-3 flex-1">
                    <h3 class="text-sm font-medium text-gray-900 truncate">${
                      selectedItem.name
                    }</h3>
                    <div class="flex items-center mt-1">
                      <div class="flex text-amber-400">
                        <i class="fas fa-star text-xs"></i>
                        <i class="fas fa-star text-xs"></i>
                        <i class="fas fa-star text-xs"></i>
                        <i class="fas fa-star text-xs"></i>
                        <i class="fas fa-star-half-alt text-xs"></i>
                      </div>
                      <span class="text-xs text-gray-500 ml-1">${
                        selectedItem.rating
                      }</span>
                    </div>
                  </div>
                </div>
                <p class="text-xs text-gray-500 mt-2 truncate">${
                  selectedItem.address
                }</p>
                <div class="mt-2 flex justify-between items-center">
                  <span class="text-xs text-amber-500 font-medium">${
                    selectedItem.distance
                  }km</span>
                  <button class="text-xs text-amber-500 font-medium">详情</button>
                </div>
                <!-- 底部按钮 -->
                <div class="flex gap-2 mt-3">
                  <button class="flex-1 h-8 bg-amber-500 text-white text-xs font-medium rounded flex items-center justify-center" onclick="window.goToOuyangPage()">
                    <i class="fas fa-home mr-1"></i>
                    主页
                  </button>
                  <button class="flex-1 h-8 bg-white text-gray-700 text-xs font-medium rounded border border-gray-200 flex items-center justify-center" onclick="window.addToFavoritesFromInfoWindow('${
                    selectedItem.name
                  }')">
                    <i class="fas fa-heart mr-1"></i>
                    收藏
                  </button>
                  <button class="flex-1 h-8 bg-white text-gray-700 text-xs font-medium rounded border border-gray-200 flex items-center justify-center" onclick="window.navigateToDestination('${
                    selectedItem.name
                  }')">
                    <i class="fas fa-route mr-1"></i>
                    路线
                  </button>
                </div>
              </div>
            </div>
          `;

          // 创建信息窗口
          const infoWindow = new AMap.InfoWindow({
            content: infoWindowContent,
            offset: new AMap.Pixel(0, -30), // 调整信息窗口偏移
          });

          // 打开信息窗口
          infoWindow.open(map, marker.getPosition());
        }
      }
    };

    // 关闭地址输入弹框
    const closeDialog = () => {
      showAddressDialog.value = false;
      addressInput.value = "";
    };

    // 确认地址，进行地理编码并添加标记点
    const confirmAddress = async () => {
      const address = addressInput.value.trim();
      if (!address) return;

      try {
        // 使用高德 Web 服务 API 进行地理编码
        // 文档：https://lbs.amap.com/api/webservice/guide/api/georegeo
        const key = "7f6e3ab52351b66c08cea5c61f85ae47";
        const url = `https://restapi.amap.com/v3/geocode/geo?address=${encodeURIComponent(
          address
        )}&key=${key}`;

        console.log("调用地理编码 API:", url);

        const response = await fetch(url);
        const result = await response.json();

        console.log("地理编码结果:", result);

        if (
          result.status === "1" &&
          result.geocodes &&
          result.geocodes.length > 0
        ) {
          // 获取第一个结果的经纬度
          const location = result.geocodes[0].location;
          const [lng, lat] = location.split(",");
          const position = [parseFloat(lng), parseFloat(lat)];

          // 地图定位到该点
          map.setCenter(position);
          map.setZoom(15);

          // 添加标记点，标题为输入的地址，内容显示经纬度
          const content = `经度: ${position[0].toFixed(
            6
          )}, 纬度: ${position[1].toFixed(6)}`;
          // 为用户添加的标记点使用默认头像
          addMarker(
            position,
            address,
            content,
            null,
            undefined,
            true,
            ShopIcon
          );

          // 关闭弹框
          closeDialog();
        } else {
          // 地理编码失败
          let errorMsg = "地址定位失败";
          if (result.info) {
            errorMsg += `: ${result.info}`;
          }
          console.error("地理编码失败详情:", result);
          alert(errorMsg);

          // 备用方案：为常用地址提供默认坐标
          const defaultCoordinates = {
            上海市嘉定区: [121.257052, 31.399128],
            上海市: [121.473701, 31.230416],
            北京朝阳区: [116.480654, 39.90984],
            北京市朝阳区: [116.480654, 39.90984],
            北京市: [116.397428, 39.90923],
            广州市天河区: [113.330484, 23.132262],
            广州市: [113.264385, 23.129163],
            深圳市南山区: [113.943029, 22.548825],
            深圳市: [114.057868, 22.543099],
          };

          // 尝试使用备用坐标
          let matchedAddress = null;
          for (const key in defaultCoordinates) {
            if (address.includes(key) || key.includes(address)) {
              matchedAddress = key;
              break;
            }
          }

          if (matchedAddress || defaultCoordinates[address]) {
            const position = matchedAddress
              ? defaultCoordinates[matchedAddress]
              : defaultCoordinates[address];
            map.setCenter(position);
            map.setZoom(15);
            const content = `经度: ${position[0].toFixed(
              6
            )}, 纬度: ${position[1].toFixed(6)} (使用默认坐标)`;
            // 为用户添加的标记点使用默认头像
            addMarker(
              position,
              address,
              content,
              null,
              undefined,
              true,
              ShopIcon
            );
            closeDialog();
          }
        }
      } catch (error) {
        console.error("地理编码过程发生异常:", error);
        alert("地理编码过程发生异常：" + error.message);
      }
    };

    // 清除所有标记点
    const clearAllMarkers = () => {
      markers.forEach((marker) => {
        map.remove(marker);
      });
      markers = [];
    };

    // 关闭导航面板
    const closeNavigationPanel = () => {
      showNavigationPanel.value = false;

      // 重置导航数据
      navigationDestination.value = "";
      navigationStartPos.value = [];
      navigationEndPos.value = [];
      navigationDistance.value = "";
      navigationDuration.value = "";
    };

    // 获取当前位置并规划路线
    const getCurrentPositionAndPlanRoute = (destinationName) => {
      console.log("开始获取位置并规划路线，目的地:", destinationName);
      // 查找目标位置
      const targetMarker = searchResults.value.find(
        (item) => item.name === destinationName
      );
      console.log("查找目标位置结果:", targetMarker);
      if (!targetMarker) {
        alert("未找到目标位置");
        return;
      }

      // 获取当前位置
      map.plugin("AMap.Geolocation", function () {
        console.log("AMap.Geolocation 插件加载完成");
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,
          timeout: 10000,
          buttonPosition: "RB",
          buttonOffset: new AMap.Pixel(10, 20),
          zoomToAccuracy: true,
        });

        geolocation.getCurrentPosition(function (status, result) {
          console.log("定位结果:", { status, result });
          if (status == "complete") {
            // 定位成功
            const start = [result.position.lng, result.position.lat];
            const end = targetMarker.position;
            console.log("定位成功，起点和终点:", { start, end });

            // 设置出发地地址
            const startAddress = result.formattedAddress || "当前位置";

            // 调用路线规划
            getRoutePlanWithAddress(start, end, destinationName, startAddress);
          } else {
            // 定位失败，使用地图中心作为起点
            alert("获取当前位置失败，将使用地图中心作为起点");
            const center = map.getCenter();
            const start = [center.lng, center.lat];
            const end = targetMarker.position;
            console.log("定位失败，使用地图中心作为起点:", { start, end });

            // 调用路线规划
            getRoutePlanWithAddress(start, end, destinationName, "地图中心");
          }
        });
      });
    };

    // 带地址的路线规划
    const getRoutePlanWithAddress = (
      start,
      end,
      destinationName,
      startAddress
    ) => {
      console.log("开始路线规划:", {
        start,
        end,
        destinationName,
        startAddress,
      });

      // 设置导航参数，让RouteNavigation组件处理路线规划
      navigationDestination.value = destinationName;
      navigationStartPos.value = start;
      navigationEndPos.value = end;
      navigationStartAddress.value = startAddress;
      showNavigationPanel.value = true;

      console.log("已设置导航参数，等待RouteNavigation组件处理");
    };

    // 从列表导航到目的地
    const navigateToListItem = (destination) => {
      console.log("点击路线按钮，目的地:", destination);
      getCurrentPositionAndPlanRoute(destination);
    };

    // 从信息窗口导航到目的地
    const navigateToDestination = (destination) => {
      getCurrentPositionAndPlanRoute(destination);
    };

    // 清除路线
    const clearRoute = () => {
      // 清除主页面中的路线实例
      if (currentRoute.value) {
        map.remove(currentRoute.value);
        currentRoute.value = null;
      }
    };

    // 重置导航状态
    const resetNavigation = () => {
      showNavigationPanel.value = false;
      navigationDestination.value = "";
      navigationStartPos.value = [];
      navigationEndPos.value = [];
      navigationDistance.value = "";
      navigationDuration.value = "";
    };

    // 监听地图点击事件，点击地图任意位置关闭导航面板
    const handleMapClick = () => {
      if (showNavigationPanel.value) {
        resetNavigation();
      }
    };

    // 添加地图点击监听器
    const addMapClickListener = () => {
      map.on("click", handleMapClick);
    };

    // 移除地图点击监听器
    const removeMapClickListener = () => {
      map.off("click", handleMapClick);
    };

    // 在搜索结果变化时重置导航
    const resetNavigationOnSearch = () => {
      resetNavigation();
    };

    // 跳转到欧阳页面
    const goToOuyangPage = () => {
      router.push("/ouyang");
    };

    // 从列表添加到收藏
    const addToFavoritesFromList = (itemName) => {
      console.log(`添加 ${itemName} 到收藏`);
      alert(`已将 ${itemName} 添加到收藏！`);
    };

    // 组件挂载时初始化
    onMounted(async () => {
      try {
        // 设置安全密钥 - 必须在加载前设置
        window._AMapSecurityConfig = {
          securityJsCode: "b6bd2e4bbc09ae9d05442af9ce11f2b5",
        };

        // 添加全局函数供信息窗口按钮调用
        window.goToOuyangPage = () => {
          router.push("/ouyang");
        };

        window.addToFavoritesFromInfoWindow = (itemName) => {
          console.log(`添加 ${itemName} 到收藏`);
          alert(`已将 ${itemName} 添加到收藏！`);
        };

        // 路线导航函数
        window.navigateToDestination = (destination) => {
          console.log("信息窗口中点击路线按钮，目的地:", destination);
          getCurrentPositionAndPlanRoute(destination);
        };

        // 使用AMapLoader加载地图
        const AMap = await AMapLoader.load({
          key: "3f55977340a0c95c5845f6fa556f21c6", // 高德地图API密钥
          version: "1.4.15", // 使用稳定的1.4.15版本
          plugins: [
            "AMap.Geocoder",
            "AMap.Autocomplete",
            "AMap.PlaceSearch",
            "AMap.Geolocation",
            "AMap.MouseTool",
            "AMap.CitySearch",
            "AMap.Driving",
          ], // 添加地理编码插件和路线规划插件
        });

        // 保存AMap实例到全局，以便其他地方使用
        window.AMap = AMap;
        window.mapInstance = map;

        // 初始化地图
        initMap(AMap);
      } catch (error) {
        console.error("加载高德地图失败:", error);
      }
    });

    // 组件卸载时清理
    onUnmounted(() => {
      if (map) {
        map.destroy();
      }
      delete window.initAMap;
      // 清理全局函数
      delete window.goToOuyangPage;
      delete window.addToFavoritesFromInfoWindow;
      delete window.navigateToDestination;

      // 移除地图点击监听器
      removeMapClickListener();
    });

    return {
      mapRef,
      clearAllMarkers,
      showAddressDialog,
      addressInput,
      closeDialog,
      confirmAddress,
      searchKeyword,
      searchResults,
      selectedIndex,
      handleSearch,
      selectResult,
      goToOuyangPage, // 跳转到欧阳页面
      addToFavoritesFromList, // 从列表添加到收藏
      navigateToListItem, // 从列表导航到目的地
      closeNavigationPanel, // 关闭导航面板
      showNavigationPanel, // 导航面板显示状态
      navigationDestination, // 导航目的地
      navigationStartPos, // 导航起点
      navigationEndPos, // 导航终点
      navigationStartAddress, // 导航出发地地址
      navigationDistance, // 导航距离
      navigationDuration, // 导航时间
      currentRoute, // 当前路线实例
      resetNavigationOnSearch, // 搜索时重置导航
    };
  },
};
</script>

<style scoped>
/* 地图容器样式 */
#amap {
  width: 100%;
  height: 100%;
}

/* 弹框动画 */
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scale-in 0.2s ease-out;
}

/* 隐藏滚动条 */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* 为图片添加alt属性 */
.search-result-item img {
  alt: "Shop Image";
}
</style>

<style>
/* 自定义标记点样式 */
.custom-marker {
  width: 30px;
  height: 40px;
  position: relative;
  display: flex;
}

/* 新增的头像标记点样式 */
.custom-marker-avatar {
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.marker-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.marker-avatar.clicked {
  transform: scale(1.3);
  box-shadow: 0 0 0 8px rgba(245, 158, 11, 0.3);
}

.marker-pulse-avatar {
  width: 50px;
  height: 50px;
  background: rgba(245, 158, 11, 0.3);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  animation: pulse 2s ease-out infinite;
}

.amap-marker-content {
  display: flex;
  align-items: flex-start;
}

.marker-pin {
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  border: 3px solid #ffffff;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
  position: relative;
  z-index: 2;
}

.marker-pin::after {
  content: "";
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}

.marker-pulse {
  width: 30px;
  height: 30px;
  background: rgba(245, 158, 11, 0.3);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  animation: pulse 2s ease-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}
/* 自定义信息窗口样式 */
.amap-info-content {
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.custom-info-window {
  min-width: 240px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

.info-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
}

.info-icon {
  flex-shrink: 0;
  font-size: 18px;
}

.info-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: white;
  flex: 1;
}

.info-body {
  padding: 16px;
  background: white;
}

.info-content {
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 高德地图搜索框自动补全结果样式美化 */
.amap-sug-result {
  border: none !important;
  border-radius: 12px !important;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12) !important;
  overflow: hidden !important;
  margin-top: 6px !important;
  max-height: 320px !important;
  overflow-y: auto !important;
  background: white !important;
}

.amap-sug-result .auto-item {
  padding: 14px 16px !important;
  border-bottom: 1px solid #f0f0f0 !important;
  transition: all 0.2s ease !important;
  cursor: pointer !important;
  display: flex !important;
  flex-direction: column !important;
}

.amap-sug-result .auto-item:last-child {
  border-bottom: none !important;
}

.amap-sug-result .auto-item:hover {
  background-color: #f8f9fa !important;
}

.amap-sug-result .auto-item.selected {
  background-color: #fff8e6 !important;
}

.amap-sug-result .auto-item .poi-name {
  font-size: 15px !important;
  color: #2d3748 !important;
  font-weight: 500 !important;
  margin-bottom: 4px !important;
  line-height: 1.4 !important;
}

.amap-sug-result .auto-item .poi-address {
  font-size: 13px !important;
  color: #718096 !important;
  line-height: 1.4 !important;
}

.amap-sug-result .auto-item .poi-adcode {
  display: none !important;
}

/* 滚动条样式优化 */
.amap-sug-result::-webkit-scrollbar {
  width: 6px !important;
}

.amap-sug-result::-webkit-scrollbar-track {
  background: #f1f1f1 !important;
  border-radius: 3px !important;
}

.amap-sug-result::-webkit-scrollbar-thumb {
  background: #c5c5c5 !important;
  border-radius: 3px !important;
}

.amap-sug-result::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8 !important;
}
</style>
