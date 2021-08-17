import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index';
import router from '@/router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')


// store.watch(
//   state => (newV) => {
//       if (newV) {
//           new Vue({
//               router,
//               store,
//               render: h => h(App),
//           }).$mount('#app');
//       }
//   }
// );
