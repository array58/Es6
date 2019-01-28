import Vue from "vue";
import VueRouter from "vue-router";


import es6page from "../views/es6page.vue";
Vue.use(VueRouter);
const routes = [
    {
        path:"/es6page",
        component:es6page
    }
]
export default new VueRouter({
    routes
})