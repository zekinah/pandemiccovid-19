import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import VueMeta from "vue-meta";
import VueAnalytics from "vue-analytics";

require("./assets/css/main.scss");

Vue.use(VueMeta);

Vue.config.productionTip = false;

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Vue.use(VueAnalytics, {
  id: "UA-169027561-2",
  autoTracking: {
    screenview: true
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
