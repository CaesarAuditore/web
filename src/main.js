import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import qs from "qs";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import { postKeyValueRequest } from "@/utils/axios";
import { postRequest } from "@/utils/axios";
import { putRequest } from "@/utils/axios";
import { getRequest } from "@/utils/axios";
import { deleteRequest } from "@/utils/axios";
import { respBeanMsg } from "@/utils/respBeanMsg";

Vue.use(ElementUI);

Vue.prototype.qs = qs;
Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.respBeanMsg = respBeanMsg;

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
