import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hero from "../views/Hero.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Todos from "../views/Todos.vue";
import Completed from "../views/Completed.vue";
import AddForm from "../views/AddForm.vue";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
