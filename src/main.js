import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import i18n from "./i18n";
import Vuelidate from "vuelidate";
import axios from "axios";
import VueAxios from "vue-axios";
import SmoothScrollbar from 'vue-smooth-scrollbar'
axios.defaults.baseURL = "https://cloud.logb.hu/cloud";
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuelidate);
Vue.use(SmoothScrollbar);
Vue.filter("upperCase", function(word) {
  return word.toUpperCase();
});
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
