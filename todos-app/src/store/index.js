import Vue from "vue";
import Vuex from "vuex";
import instance from "../apis/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: "register",
    isLoggedIn: false,
  },
  mutations: {
    CHANGES_CURRENTPAGE(state, payload) {
      state.currentPage = payload;
    },
    CHANGES_ISLOGGEDIN(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {
    async registerActions({ commit }, payload) {
      try {
        const { username, birthDate, city, email, password } = payload;
        await instance.post("/register", {
          username,
          birthDate,
          city,
          email,
          password,
        });
        commit("CHANGES_CURRENTPAGE", "login");
      } catch (err) {
        console.log(err);
      }
    },

    async loginActions({ commit }, payload) {
      try {
        const { username, password } = payload;
        const response = await instance.post("/login", {
          username,
          password,
        });
        commit("CHANGES_ISLOGGEDIN", true);
        const data = response.data;
        localStorage.setItem("access_token", data.access_token);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
