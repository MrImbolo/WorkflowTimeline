import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import { superfetch } from "./lib/superfetch";


Vue.config.productionTip = false;

window.superfetch = superfetch;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
