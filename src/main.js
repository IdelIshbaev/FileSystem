import Vue from 'vue'
import store from './store'
import App from './App.vue'
import GlobalEvents from 'vue-global-events';

Vue.component(GlobalEvents);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
