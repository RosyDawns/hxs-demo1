<template>
  <div class="waterfall-container px-3 pb-3 pt-1">
    <div class="waterfall-column" v-for="(column, index) in columns" :key="index">
      <DynamicListItem 
        v-for="item in column" 
        :key="item.id" 
        :item="item" 
        @click="(itemId) => handleItemClick(itemId)"
        class="mb-3"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import DynamicListItem from './DynamicListItem.vue';

export default {
  name: 'WaterfallLayout',
  components: {
    DynamicListItem
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    columnCount: {
      type: Number,
      default: 2
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const columns = ref([]);

    // 将数据分配到各列，实现瀑布流效果
    const distributeItems = () => {
      // 初始化列数组
      const cols = Array.from({ length: props.columnCount }, () => []);
      
      // 简单的分配策略：轮流分配到各列
      props.items.forEach((item, index) => {
        const columnIndex = index % props.columnCount;
        cols[columnIndex].push(item);
      });
      
      columns.value = cols;
    };

    // 处理点击事件
    const handleItemClick = (itemId) => {
      emit('click', itemId);
    };

    // 初始化时分配数据
    onMounted(() => {
      distributeItems();
    });

    // 监听数据变化
    watch(() => props.items, () => {
      distributeItems();
    }, { deep: true });

    return {
      columns,
      handleItemClick
    };
  }
};
</script>

<style scoped>
.waterfall-container {
  display: flex;
  gap: 12px;
}

.waterfall-column {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
