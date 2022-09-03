import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { getRequest } from './request/index'
import { postRequest } from './request/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.getRequest = getRequest
Vue.prototype.postRequest = postRequest

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
