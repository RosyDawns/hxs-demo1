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
      </div>

      <!-- 操作按钮 -->
      <div class="bg-white px-4 py-3 shadow-[0_-2px_8px_rgba(0,0,0,0.06)]">
        <div class="flex gap-3">
          <button
            class="flex-1 h-11 bg-amber-500 text-white text-sm font-medium rounded-lg active:bg-amber-600 transition"
            @click="showAddressDialog = true"
          >
            <i class="fa-solid fa-location-dot mr-1.5"></i>添加标记点
          </button>
          <button
            class="flex-1 h-11 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 active:bg-gray-50 transition"
            @click="clearAllMarkers"
          >
            <i class="fa-solid fa-trash-can mr-1.5"></i>清除标记
          </button>
        </div>
      </div>
    </main>

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
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import CommonHeader from "../components/CommonHeader.vue";
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  name: "MapDemoPage",
  components: {
    CommonHeader,
  },
  setup() {
    const router = useRouter();
    const mapRef = ref(null);
    let map = null;
    let markers = [];

    // 添加默认标记点
    const addDefaultMarkers = () => {
      // 示例坐标点
      const defaultPoints = [
        {
          position: [116.397428, 39.90923],
          title: "北京天安门",
          content: "这是北京天安门",
        },
        {
          position: [116.403847, 39.915119],
          title: "故宫博物院",
          content: "这是故宫博物院",
        },
        {
          position: [116.481028, 39.989643],
          title: "奥林匹克公园",
          content: "这是奥林匹克公园",
        },
      ];

      defaultPoints.forEach((point) => {
        addMarker(point.position, point.title, point.content);
      });
    };

    // 添加标记点
    const addMarker = (position, title, content) => {
      // 创建自定义标记点HTML
      const markerContent = `
        <div class="custom-marker">
          <div class="marker-pin"></div>
          <div class="marker-pulse"></div>
        </div>
      `;

      const marker = new AMap.Marker({
        position: position,
        title: title,
        content: markerContent,
        offset: new AMap.Pixel(-15, 0), // 调整偏移：左移15px，上移30px（标记点高度）
      });

      // 创建自定义信息窗口HTML
      const infoWindowContent = `
        <div class="custom-info-window">
          <div class="info-header">
            <div class="info-icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <h3 class="info-title">${title}</h3>
          </div>
          <div class="info-body">
            <p class="info-content">${content}</p>
          </div>
        </div>
      `;

      // 添加信息窗口
      const infoWindow = new AMap.InfoWindow({
        content: infoWindowContent,
        offset: new AMap.Pixel(0, 0), // 调整信息窗口偏移：在标记点上方35px
      });

      // 点击标记点显示信息窗口
      marker.on("click", () => {
        infoWindow.open(map, marker.getPosition());
      });

      // 添加到地图
      map.add(marker);
      markers.push(marker);
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
        center: [116.397428, 39.90923], // 北京坐标
        zoom: 13, // 缩放级别
        resizeEnable: true, // 允许地图根据容器大小调整
      });

      // 添加默认标记点
      addDefaultMarkers();
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
          addMarker(position, address, content);

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
            addMarker(position, address, content);
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

    // 组件挂载时初始化
    onMounted(async () => {
      try {
        // 设置安全密钥 - 必须在加载前设置
        window._AMapSecurityConfig = {
          securityJsCode: "614c3ffd4b98b14f89d7e3b87763a6f7",
        };

        // 使用AMapLoader加载地图
        const AMap = await AMapLoader.load({
          key: "7f6e3ab52351b66c08cea5c61f85ae47", // 高德地图API密钥
          version: "1.4.15", // 使用稳定的1.4.15版本
          plugins: [
            "AMap.Geocoder",
            "AMap.Autocomplete",
            "AMap.PlaceSearch",
            "AMap.Geolocation",
            "AMap.MouseTool",
            "AMap.CitySearch",
          ], // 添加地理编码插件
        });

        // 保存AMap实例到全局，以便其他地方使用
        window.AMap = AMap;

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
    });

    return {
      mapRef,
      clearAllMarkers,
      showAddressDialog,
      addressInput,
      closeDialog,
      confirmAddress,
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
</style>

<style>
/* 自定义标记点样式 */
.custom-marker {
  width: 30px;
  height: 40px;
  position: relative;
  display: flex;
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
</style>
