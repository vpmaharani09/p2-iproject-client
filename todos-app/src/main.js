import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIO from "vue-socket.io";
import "./assets/tailwind.css";

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "https://rani-todos-app.herokuapp.com", //options object is Optional
  })
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
