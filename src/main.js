import Vue from 'vue'
import router from './router'
import store from './store'
import './assets/css/animate.min.css'
import $ from 'n-zepto'
import axios from 'axios'
import VUEUTIL from './util/vueutil.js'
import Mint from 'mint-ui';
import screenscale from './assets/js/screenscale.js'
import 'mint-ui/lib/style.css'
import App from './App.vue'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(VUEUTIL);
Vue.use(Mint);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
