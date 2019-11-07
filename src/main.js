import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Toasted from 'vue-toasted';

Vue.use(VueAxios, axios);

const options = {
  position: 'bottom-center',
  duration: 2000,

};
Vue.use(Toasted, options);

Vue.axios.defaults.baseURL = 'https://www.omdbapi.com/';
Vue.axios.interceptors.request.use((config) => {
  if (config.method === 'get') {
    if (!config.hasOwnProperty('params')) {
      config.params = {};
    }

    config.params['apikey'] = 'f0f90c36';
  }

  return config;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
