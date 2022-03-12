import { createApp } from "vue";
import BootstrapVue3 from 'bootstrap-vue-3'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { FontAwesomeIcon } from './plugins/font-awesome'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080/api/'
createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");