import { Button, Icon,Tab, Tabs,Image as VanImage,Loading,Search,Field,Grid, GridItem,Swipe, SwipeItem,Tabbar, TabbarItem  } from 'vant';

const vantUIs = [Button, Icon,Tab, Tabs,VanImage,Loading,Search,Field,Grid, GridItem,Swipe, SwipeItem,Tabbar, TabbarItem  ];

export default {
  install(Vue) {
    vantUIs.forEach((vantUI) => {
      Vue.component(vantUI.name, vantUI);
    });
  },
};
