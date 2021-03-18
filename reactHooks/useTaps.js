//tab(다른 객체)와 index를 이용하여 재랜더링 하기﻿
export const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
  
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    };
  };