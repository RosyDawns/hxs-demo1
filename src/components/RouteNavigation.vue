<template>
  <div v-if="showPanel" class="fixed inset-0 bg-white z-50 flex flex-col" style="z-index: 99999;">
    <!-- 顶部导航栏 -->
    <div class="flex items-center justify-between p-4 border-b border-gray-200">
      <button @click="closePanel" class="text-gray-600">
        <i class="fas fa-arrow-left text-xl"></i>
      </button>
      <h2 class="text-lg font-medium text-gray-900">路线导航</h2>
      <div class="w-6"></div> <!-- 占位元素，保持标题居中 -->
    </div>
    
    <!-- 出发地和目的地信息 -->
    <div class="p-4 border-b border-gray-200">
      <div class="flex items-center">
        <div class="flex flex-col items-center mr-3">
          <div class="w-3 h-3 rounded-full bg-amber-500"></div>
          <div class="w-0.5 h-8 bg-gray-300 my-1"></div>
          <div class="w-3 h-3 rounded-full bg-blue-500"></div>
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-medium text-gray-900 truncate">出发地</div>
          <div class="text-xs text-gray-500 truncate mt-1">{{ startAddress || '当前位置' }}</div>
          <div class="text-sm font-medium text-gray-900 truncate mt-3">目的地</div>
          <div class="text-xs text-gray-500 truncate mt-1">{{ destination }}</div>
        </div>
      </div>
    </div>
    
    <!-- 出行方式选择 -->
    <div class="flex border-b border-gray-200">
      <button 
        v-for="mode in transportModes" 
        :key="mode.key"
        @click="switchTransportMode(mode.key)"
        :class="[
          'flex-1 py-3 text-center',
          currentTransportMode === mode.key 
            ? 'border-b-2 border-amber-500 text-amber-500' 
            : 'text-gray-500'
        ]"
      >
        <div class="flex flex-col items-center">
          <i :class="[mode.icon, 'text-lg mb-1']"></i>
          <span class="text-xs">{{ mode.name }}</span>
          <span v-if="mode.duration" class="text-xs mt-1">{{ mode.duration }}</span>
        </div>
      </button>
    </div>
    
    <!-- 地图路线预览区域 -->
    <div class="flex-1 relative">
      <div id="navigation-map" class="w-full h-full"></div>
      <!-- 路线信息覆盖层 -->
      <!-- <div class="absolute top-4 left-4 right-4 bg-white bg-opacity-90 rounded-lg p-3 shadow">
        <div class="flex justify-between items-center">
          <div>
            <div class="text-sm font-medium text-gray-900">{{ currentTransportModeText }}({{ selectedRouteIndex + 1 }}/{{ routes.length }})</div>
            <div class="text-xs text-gray-500 mt-1">{{ distance }} | {{ duration }}</div>
          </div>
          <button 
            v-if="routes.length > 1" 
            @click="showRouteSelector = !showRouteSelector"
            class="text-amber-500 text-sm"
          >
            切换路线
          </button>
        </div>
      </div> -->
      
      <!-- 路线选择器 -->
      <div 
        v-if="showRouteSelector && routes.length > 1" 
        class="absolute top-20 left-4 right-4 bg-white rounded-lg shadow-lg p-3 max-h-40 overflow-y-auto"
      >
        <div 
          v-for="(route, index) in routes" 
          :key="index"
          @click="selectRoute(index)"
          :class="[
            'p-2 rounded cursor-pointer mb-2',
            selectedRouteIndex === index ? 'bg-amber-50 border border-amber-200' : 'hover:bg-gray-50'
          ]"
        >
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div class="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-2">
                <span class="text-xs text-gray-500">{{ index + 1 }}</span>
              </div>
              <span class="text-sm">路线{{ index + 1 }}</span>
            </div>
            <div class="text-xs text-gray-500">
              {{ formatDistance(route.distance) }} | {{ formatDuration(route.time) }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- 错误提示 -->
      <div 
        v-if="errorMessage" 
        class="absolute top-2 left-4 right-4 bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm"
      >
        {{ errorMessage }}
      </div>
    </div>
    
    <!-- 底部导航按钮 -->
    <div class="p-4 border-t border-gray-200">
      <button 
        @click="startNavigation" 
        class="w-full bg-amber-500 text-white py-3 rounded-lg font-medium flex items-center justify-center"
      >
        <i class="fas fa-directions mr-2"></i>
        开始导航
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onUnmounted, watch, onMounted } from "vue";

export default {
  name: "RouteNavigation",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    destination: {
      type: String,
      required: true
    },
    startPosition: {
      type: Array,
      required: true
    },
    endPosition: {
      type: Array,
      required: true
    },
    startAddress: {
      type: String,
      default: ''
    }
  },
  emits: ['update:show'],
  setup(props, { emit }) {
    const showPanel = ref(props.show);
    const distance = ref('计算中...');
    const duration = ref('计算中...');
    const currentRoute = ref(null);
    const routes = ref([]); // 存储多条路线
    const selectedRouteIndex = ref(0); // 当前选中的路线索引
    const showRouteSelector = ref(false); // 是否显示路线选择器
    const navigationMap = ref(null); // 导航地图实例
    const errorMessage = ref(''); // 错误消息
    const startCity = ref(''); // 起点城市
    const endCity = ref(''); // 终点城市
    
    // 出行方式
    const transportModes = ref([
      { key: 'driving', name: '驾车', icon: 'fas fa-car', duration: '' },
      { key: 'transit', name: '公交', icon: 'fas fa-subway', duration: '' },
      { key: 'riding', name: '骑行', icon: 'fas fa-bicycle', duration: '' },
      { key: 'walking', name: '步行', icon: 'fas fa-walking', duration: '' }
    ]);
    
    const currentTransportMode = ref('driving'); // 默认驾车
    const currentTransportModeText = ref('驾车');
    
    // 监听props.show的变化
    const closePanel = () => {
      showPanel.value = false;
      emit('update:show', false);
      clearRoute();
    };

    // 开始导航
    const startNavigation = () => {
      alert(`开始导航到 ${props.destination}`);
    };

    // 清除路线
    const clearRoute = () => {
      if (currentRoute.value) {
        // 清除路线实例
        if (currentRoute.value.clear) {
          currentRoute.value.clear();
        }
        currentRoute.value = null;
      }
      
      // 重置路线数据
      routes.value = [];
      selectedRouteIndex.value = 0;
      showRouteSelector.value = false;
      errorMessage.value = '';
    };

    // 切换出行方式
    const switchTransportMode = (mode) => {
      if (currentTransportMode.value !== mode) {
        currentTransportMode.value = mode;
        // 更新当前出行方式文本
        const modeObj = transportModes.value.find(m => m.key === mode);
        currentTransportModeText.value = modeObj ? modeObj.name : '未知';
        // 重新规划路线
        getRoutePlan();
      }
    };

    // 选择路线
    const selectRoute = (index) => {
      selectedRouteIndex.value = index;
      showRouteSelector.value = false;
      // 高亮选中的路线
      highlightRoute(index);
    };

    // 高亮选中的路线
    const highlightRoute = (index) => {
      if (currentRoute.value && currentRoute.value.selectRoute) {
        currentRoute.value.selectRoute(index);
      }
    };

    // 格式化距离
    const formatDistance = (distanceInMeters) => {
      if (distanceInMeters < 1000) {
        return distanceInMeters + '米';
      } else {
        return (distanceInMeters / 1000).toFixed(1) + '公里';
      }
    };

    // 格式化时间
    const formatDuration = (seconds) => {
      const minutes = Math.round(seconds / 60);
      if (minutes < 60) {
        return minutes + '分钟';
      } else {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        if (remainingMinutes === 0) {
          return hours + '小时';
        } else {
          return hours + '小时' + remainingMinutes + '分钟';
        }
      }
    };

    // 初始化导航地图
    const initNavigationMap = () => {
      if (window.AMap && !navigationMap.value) {
        navigationMap.value = new window.AMap.Map('navigation-map', {
          zoom: 15,
          center: props.startPosition
        });
      }
    };

    // 获取城市信息
    const getCityInfo = (position, callback) => {
      if (!window.AMap) {
        callback('');
        return;
      }
      
      // 使用逆地理编码获取城市信息
      window.AMap.plugin('AMap.Geocoder', () => {
        const geocoder = new window.AMap.Geocoder({
          radius: 1000,
          extensions: 'all'
        });
        
        geocoder.getAddress(position, (status, result) => {
          if (status === 'complete' && result.regeocode) {
            const city = result.regeocode.addressComponent.city || 
                         result.regeocode.addressComponent.province || '';
            callback(city);
          } else {
            callback('');
          }
        });
      });
    };

    // 获取路线规划
    const getRoutePlan = () => {
      // 确保面板已显示
      showPanel.value = true;
      emit('update:show', true);
      
      // 初始化地图
      initNavigationMap();
      
      // 重置数据
      routes.value = [];
      selectedRouteIndex.value = 0;
      distance.value = '计算中...';
      duration.value = '计算中...';
      errorMessage.value = '';
      
      // 更新各出行方式的时间
      updateTransportModeDurations();
      
      // 延迟执行确保DOM已更新
      setTimeout(() => {
        // 确保AMap已加载且有起点终点
        if (!window.AMap || !props.startPosition || !props.endPosition) {
          console.error('缺少必要参数');
          errorMessage.value = '缺少必要参数';
          return;
        }
        
        // 清除之前的路线
        clearRoute();
        
        // 如果地图实例不存在，创建一个
        if (!navigationMap.value) {
          initNavigationMap();
        }
        
        // 获取起点和终点的城市信息
        getCityInfo(props.startPosition, (startCityName) => {
          startCity.value = startCityName;
          getCityInfo(props.endPosition, (endCityName) => {
            endCity.value = endCityName;
            
            // 根据出行方式加载对应插件并规划路线
            switch (currentTransportMode.value) {
              case 'driving':
                planDrivingRoute();
                break;
              case 'transit':
                planTransitRoute();
                break;
              case 'riding':
                planRidingRoute();
                break;
              case 'walking':
                planWalkingRoute();
                break;
              default:
                planDrivingRoute();
            }
          });
        });
      }, 300); // 延迟300ms确保DOM更新
    };

    // 更新各出行方式的时间
    const updateTransportModeDurations = () => {
      // 这里可以实现预估时间的更新逻辑
      // 为了简化，我们暂时使用固定值或之前的值
      transportModes.value.forEach(mode => {
        if (mode.key === currentTransportMode.value) {
          mode.duration = duration.value;
        }
      });
    };

    // 驾车路线规划
    const planDrivingRoute = () => {
      window.AMap.plugin('AMap.Driving', () => {
        console.log('AMap.Driving 插件加载完成');
        
        // 创建驾驶路线规划实例
        const driving = new window.AMap.Driving({
          map: navigationMap.value,
          hideMarkers: false,
          showTraffic: true,
          extensions: 'all',
          autoFitView: true
        });

        // 保存路线实例
        currentRoute.value = driving;

        // 进行路线规划
        driving.search(
          new window.AMap.LngLat(props.startPosition[0], props.startPosition[1]), 
          new window.AMap.LngLat(props.endPosition[0], props.endPosition[1]), 
          (status, result) => {
            handleRouteResult(status, result, '驾车');
          }
        );
      });
    };

    // 公交路线规划
    const planTransitRoute = () => {
      window.AMap.plugin('AMap.Transfer', () => {
        console.log('AMap.Transfer 插件加载完成');
        
        // 创建公交路线规划实例
        const transfer = new window.AMap.Transfer({
          map: navigationMap.value,
          hideMarkers: false,
          showTraffic: true,
          extensions: 'all',
          autoFitView: true,
          city: startCity.value || '全国', // 使用起点城市，如果没有则使用全国
          cityd: endCity.value || '全国', // 使用终点城市，如果没有则使用全国
          policy: window.AMap.TransferPolicy.LEAST_TIME // 最少时间策略
        });

        // 保存路线实例
        currentRoute.value = transfer;

        // 进行路线规划
        transfer.search(
          new window.AMap.LngLat(props.startPosition[0], props.startPosition[1]), 
          new window.AMap.LngLat(props.endPosition[0], props.endPosition[1]), 
          (status, result) => {
            handleRouteResult(status, result, '公交');
          }
        );
      });
    };

    // 骑行路线规划
    const planRidingRoute = () => {
      window.AMap.plugin('AMap.Riding', () => {
        console.log('AMap.Riding 插件加载完成');
        
        // 创建骑行路线规划实例
        const riding = new window.AMap.Riding({
          map: navigationMap.value,
          hideMarkers: false,
          extensions: 'all',
          autoFitView: true
        });

        // 保存路线实例
        currentRoute.value = riding;

        // 进行路线规划
        riding.search(
          new window.AMap.LngLat(props.startPosition[0], props.startPosition[1]), 
          new window.AMap.LngLat(props.endPosition[0], props.endPosition[1]), 
          (status, result) => {
            handleRouteResult(status, result, '骑行');
          }
        );
      });
    };

    // 步行路线规划
    const planWalkingRoute = () => {
      window.AMap.plugin('AMap.Walking', () => {
        console.log('AMap.Walking 插件加载完成');
        
        // 创建步行路线规划实例
        const walking = new window.AMap.Walking({
          map: navigationMap.value,
          hideMarkers: false,
          extensions: 'all',
          autoFitView: true
        });

        // 保存路线实例
        currentRoute.value = walking;

        // 进行路线规划
        walking.search(
          new window.AMap.LngLat(props.startPosition[0], props.startPosition[1]), 
          new window.AMap.LngLat(props.endPosition[0], props.endPosition[1]), 
          (status, result) => {
            handleRouteResult(status, result, '步行');
          }
        );
      });
    };

    // 处理路线规划结果
    const handleRouteResult = (status, result, mode) => {
      console.log(mode + '路线规划回调:', { status, result });
      if (status === 'complete' && result.routes && result.routes.length > 0) {
        // 保存所有路线
        routes.value = result.routes;
        
        // 默认选中第一条路线
        selectedRouteIndex.value = 0;
        
        // 显示第一条路线的信息
        const firstRoute = result.routes[0];
        distance.value = formatDistance(firstRoute.distance);
        duration.value = formatDuration(firstRoute.time);
        
        // 更新当前出行方式的时间
        const modeObj = transportModes.value.find(m => m.key === currentTransportMode.value);
        if (modeObj) {
          modeObj.duration = duration.value;
        }
        
        console.log(mode + '路线规划完成:', result);
      } else {
        // 规划失败
        console.error(mode + '路线规划失败:', result);
        distance.value = '未知';
        duration.value = '未知';
        
        // 显示错误消息
        let errorMsg = mode + '路线规划失败';
        if (result && result.info) {
          errorMsg += ': ' + result.info;
        }
        errorMessage.value = errorMsg;
      }
    };

    // 监听props变化
    watch(() => [props.show, props.startPosition, props.endPosition], 
      ([newShow, newStart, newEnd], [oldShow, oldStart, oldEnd]) => {
        if (newShow && newStart && newEnd && 
            (newShow !== oldShow || 
             JSON.stringify(newStart) !== JSON.stringify(oldStart) || 
             JSON.stringify(newEnd) !== JSON.stringify(oldEnd))) {
          // 如果所有必要参数都已提供，开始路线规划
          getRoutePlan();
        }
    });

    // 组件挂载时初始化
    onMounted(() => {
      if (props.show && props.startPosition && props.endPosition) {
        // 延迟执行确保DOM已更新
        setTimeout(() => {
          getRoutePlan();
        }, 100);
      }
    });

    // 组件卸载时清理
    onUnmounted(() => {
      clearRoute();
      // 清理地图实例
      if (navigationMap.value) {
        navigationMap.value.destroy();
        navigationMap.value = null;
      }
    });

    return {
      showPanel,
      distance,
      duration,
      transportModes,
      currentTransportMode,
      currentTransportModeText,
      routes,
      selectedRouteIndex,
      showRouteSelector,
      errorMessage,
      closePanel,
      startNavigation,
      switchTransportMode,
      selectRoute,
      formatDistance,
      formatDuration
    };
  },
  watch: {
    show(newVal) {
      this.showPanel = newVal;
      if (newVal && this.startPosition && this.endPosition) {
        // 延迟执行确保DOM已更新
        setTimeout(() => {
          this.getRoutePlan();
        }, 100);
      }
    },
    startPosition: {
      handler(newVal) {
        if (this.show && newVal && this.endPosition) {
          this.getRoutePlan();
        }
      },
      deep: true
    },
    endPosition: {
      handler(newVal) {
        if (this.show && this.startPosition && newVal) {
          this.getRoutePlan();
        }
      },
      deep: true
    }
  }
};
</script>

<style scoped>
/* 导航面板样式 */
</style>