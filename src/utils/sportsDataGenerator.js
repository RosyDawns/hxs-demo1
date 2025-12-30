// 运动数据生成器工具

// 运动相关标题库
export const sportTitles = [
  '晨跑打卡！今天跑了10公里，感觉超棒',
  '瑜伽让我找到内心的平静，每天坚持30分钟',
  '健身房撸铁日常，今天练背，状态很好',
  '篮球场上挥洒汗水，这才是青春该有的样子',
  '游泳是最好的全身运动，坚持就是胜利',
  '骑行穿越城市，感受不一样的风景',
  '早起晨跑，迎接美好的一天，加油！',
  '瑜伽不仅塑形，更能修心养性',
  '力量训练第100天，见证自己的蜕变',
  '篮球让我结识了很多志同道合的朋友',
  '游泳后的放松时刻，身心都得到了释放',
  '周末骑行100公里，挑战自我极限',
  '今天的跑步训练完成，突破了个人最佳',
  '瑜伽课后的拉伸，整个人都轻松了',
  '健身打卡第365天，坚持改变了我',
  '篮球三分球命中率提升了，继续加油',
  '游泳1000米达成，下个目标2000米',
  '骑行去郊外，沿途风景美不胜收',
  '晨跑遇见日出，美好的一天开始了',
  '瑜伽冥想让我学会了与自己对话',
  '健身房新学了一套动作，效果不错',
  '篮球比赛赢了，团队配合太重要了',
  '游泳技术又进步了，教练夸我了',
  '骑行爱好者的周末日常分享',
  '跑步让我变得更自律更健康',
  '瑜伽改善了我的体态和气质',
  '力量训练让我更有力量感',
  '篮球是我最喜欢的运动方式',
  '游泳池里的快乐时光',
  '骑行探索城市的每个角落',
  '晨跑是我一天中最享受的时刻',
  '瑜伽让我身心合一',
  '健身房是我的第二个家',
  '篮球场上释放压力',
  '游泳让我感受水的力量',
  '骑行是最环保的运动方式',
  '跑步让我遇见更好的自己',
  '瑜伽教会我专注当下',
  '健身改变了我的生活方式',
  '篮球让我学会了团队协作',
  '游泳是夏天最好的运动',
  '骑行带我看遍城市美景',
  '晨跑让我精力充沛一整天',
  '瑜伽是我的减压方式',
  '健身房撸铁让我更自信',
  '篮球场上的热血青春',
  '游泳池里的自由自在',
  '骑行路上的风景独好'
];

// 作者名字库
export const authors = [
  '跑步达人小李', '瑜伽教练Anna', '健身教练Mike', '篮球少年',
  '游泳健将', '骑行爱好者', '晨跑小队长', '瑜伽爱好者',
  '健身小白变大神', '球场老炮', '水中精灵', '骑行达人',
  '马拉松跑者', '瑜伽导师', '力量训练师', '篮球教练',
  '游泳教练', '骑行俱乐部', '跑步社群', '瑜伽工作室',
  '健身房老铁', '篮球爱好者', '游泳爱好者', '骑行队长'
];

// 生成随机运动数据
export function generateRandomSportsItems(count, startId, sportImages, avatars) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push({
      id: startId + i,
      title: sportTitles[Math.floor(Math.random() * sportTitles.length)],
      image: sportImages[Math.floor(Math.random() * sportImages.length)],
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
      author: authors[Math.floor(Math.random() * authors.length)],
      likes: Math.floor(Math.random() * 500) + 50
    });
  }
  return items;
}

// 创建滚动加载处理器
export function createScrollLoader(loadMoreCallback) {
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollTop + windowHeight >= documentHeight - 200) {
      loadMoreCallback();
    }
  };
  
  return handleScroll;
}
