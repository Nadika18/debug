// import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vue.component("alert", require("./components/Alert.vue").default);

createApp(App)
  .use(router)
  .mount("#app");
