import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hero from "../views/Hero.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Todos from "../views/Todos.vue";
import Completed from "../views/Completed.vue";
import AddForm from "../views/AddForm.vue";
import FormChat from "../views/FormChat.vue";
import RoomChat from "../views/RoomChat.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    name: "Hero",
    component: Hero,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/complete",
    name: "Completed",
    component: Completed,
  },
  {
    path: "/todos/:id",
    name: "Todos",
    component: Todos,
  },
  {
    path: "/form/:id",
    name: "AddForm",
    component: AddForm,
  },
  {
    path: "/join",
    name: "FormChat",
    component: FormChat,
  },
  {
    path: "/chat",
    name: "RoomChat",
    component: RoomChat,
  },
  // {
  //   path: "/chat",
  //   name: "ChatCord",
  //   component: ChatCord,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "Home" && !localStorage.getItem("access_token")) {
    next({ name: "Login" });
  } else if (to.name === "Login" || to.name === "Register") {
    if (localStorage.getItem("access_token")) {
      next({ name: "Home" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
