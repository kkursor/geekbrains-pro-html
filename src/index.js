import Vue from 'vue';
import Cart from "./cart.vue";
import Catalog from "./catalog.vue";
import Search from "./search.vue";
import Root from "./root.vue";

Vue.component("cd-root", Root);
Vue.component("cd-cart", Cart);
Vue.component("cd-catalog", Catalog);
Vue.component("cd-search", Search);

window.addEventListener("load", () => {
        const app = new Vue({el: "#app"});
    }
);