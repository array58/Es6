import Vue from "vue";
import App from "./app.vue";
import router from "./router/index.js";
const root = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(root);
Vue.config.silent=true;

new Vue({
     render:(h)=>h(App),
     router
}).$mount(root)