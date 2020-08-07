import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Icon } from 'vant';
import 'amfe-flexible/index'
import { NavBar } from 'vant';
import { Col, Row } from 'vant';
import { Search } from 'vant';
import { Tab, Tabs } from 'vant';
import { Lazyload } from 'vant';
import { Skeleton } from 'vant';
import { Card } from 'vant';

Vue.use(Card);
Vue.use(Skeleton);
Vue.use(Lazyload);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Search);
Vue.use(Col);
Vue.use(Row);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
