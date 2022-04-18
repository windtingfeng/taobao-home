import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import VantUi from './plugins/Vant';
import './assets/style/reset.less';
import 'vant/lib/index.css';

import 'amfe-flexible';

Vue.config.productionTip = false;

Vue.use(VantUi);

import { Lazyload } from 'vant';

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
