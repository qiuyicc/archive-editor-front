import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router'
import * as API from '@/api'

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$API = API
    Vue.prototype.$bus = this
  },
  router,
}).$mount('#app')
