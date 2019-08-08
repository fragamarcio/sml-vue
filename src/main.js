import Vue from "vue";
import axios from "axios";
import router from "./router";
import {i18n as i18n } from "./i18n";
import {loadLanguageAsync as loadLanguageAsync} from "./i18n";
import * as uiv from 'uiv';
import App from "./App.vue";


//console.log(process.env.NODE_ENV);


//Vue.config.productionTip = false;
Vue.use(uiv);

Vue.prototype.$rootPath = process.env.VUE_APP_ROOT_PATH;
Vue.prototype.$basePath = function(value) {
  return this.$rootPath + value;
}

Vue.prototype.$changeLocale =  loadLanguageAsync;



const app = new Vue({
  router,
  i18n,
  render: h => h(App),
 
}).$mount("#app");

if (typeof window !== 'undefined') {
  window.Vue = Vue;
  window.axios = axios;
  loadLanguageAsync('pt_BR');//Todo
  window.app = app;
  
}


