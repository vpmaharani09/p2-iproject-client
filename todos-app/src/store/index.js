import Vue from "vue";
import Vuex from "vuex";
import instance from "../apis/api";
import Swal from "sweetalert2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: "register",
    isLoggedIn: false,
    isLoading: false,
    users: [],
    todos: [],
    todosComplete: [],
    user: {},
    show: "",
    weather: {},
    messages: [],
    userCommunity: {},
    userJoin: [],
  },
  mutations: {
    CHANGES_CURRENTPAGE(state, payload) {
      state.currentPage = payload;
    },
    CHANGES_ISLOGGEDIN(state, payload) {
      state.isLoggedIn = payload;
    },
    CHANGES_ISLOADING(state, payload) {
      state.isLoading = payload;
    },
    GET_USERS(state, payload) {
      state.users = payload;
    },
    GET_USER(state, payload) {
      state.user = payload;
    },
    GET_TODOS(state, payload) {
      state.todos = payload;
    },
    GET_TODOS_COMPLETE(state, payload) {
      state.todosComplete = payload;
    },
    GET_SHOW(state, payload) {
      state.show = payload;
    },
    GET_WEATHER(state, payload) {
      state.weather = payload;
    },
    PUSH_MESSAGE(state, payload) {
      state.messages.push(payload);
    },
    PUSH_USER(state, payload) {
      state.userJoin = payload;
    },
    GET_USER_COM(state, payload) {
      state.userCommunity = payload;
    },
  },
  actions: {
    async getWeather({ commit }) {
      try {
        const response = await instance({
          method: "GET",
          url: "/weather",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        commit("GET_WEATHER", response.data);
      } catch (err) {
        console.log(err);
      }
    },

    // async getUserJoin({ commit }, payload) {
    //   // console.log(payload);
    //   try {
    //     const response = await instance({
    //       method: "GET",
    //       url: "/community",
    //       data: {
    //         payload,
    //       },
    //       headers: {
    //         access_token: localStorage.getItem("access_token"),
    //       },
    //     });

    //     commit("PUSH_USER", response.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },

    async getUserCommunity({ commit }, payload) {
      try {
        const { username, name } = payload;
        const response = await instance({
          method: "POST",
          url: "/community",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            username,
            name,
          },
        });

        commit("GET_USER_COM", response.data);
        // commit("PUSH USER", response.data);
      } catch (err) {
        console.log(err);
      }
    },

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
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.msg,
        });
      }
    },

    async loginActions({ commit, dispatch }, payload) {
      try {
        const { username, password } = payload;
        const response = await instance.post("/login", {
          username,
          password,
        });
        const data = response.data;
        localStorage.setItem("access_token", data.access_token);
        commit("CHANGES_ISLOGGEDIN", true);
        await dispatch("fetchUsers");
        await dispatch("getWeather");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.msg,
        });
      }
    },

    async fetchUsers({ commit }) {
      try {
        const response = await instance({
          method: "GET",
          url: "/users",
        });

        commit("GET_USERS", response.data);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchTodos({ commit }, payload) {
      try {
        const response = await instance({
          method: "GET",
          url: `todos/${payload}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        commit("GET_TODOS", response.data);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchTodosComplete({ commit }) {
      try {
        const response = await instance({
          method: "GET",
          url: `/complete`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        commit("GET_TODOS_COMPLETE", response.data);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchUserId({ commit }, payload) {
      try {
        const response = await instance({
          method: "GET",
          url: `users/${payload}`,
        });

        commit("GET_USER", response.data);
      } catch (err) {
        console.log(err);
      }
    },

    async createNewTask({ commit }, payload) {
      try {
        const { task, description, deadline, tag } = payload;
        const response = await instance({
          method: "POST",
          url: `/todos/${payload.id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            task,
            description,
            deadline,
            tag,
          },
        });
        commit("GET_SHOW", response.data.message);

        Swal.fire({
          icon: "success",
          title: `${response.data.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.msg,
        });
      }
    },

    async completedActions({ commit }, payload) {
      try {
        // console.log(payload);
        const { id, isComplete } = payload;
        const response = await instance({
          method: "PATCH",
          url: `/todos/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            isComplete,
          },
        });
        // await dispatch("fetchTodosComplete");
        commit("GET_SHOW", response.data.msg);
        Swal.fire({
          icon: "success",
          title: `${response.data.msg}`,
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data,
        });
      }
    },

    async deleteTaskActions({ dispatch }, payload) {
      try {
        const response = await instance({
          method: "DELETE",
          url: `/todos/${payload}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        await dispatch("fetchTodos");

        Swal.fire({
          icon: "success",
          title: `${response.data.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data,
        });
      }
    },

    async logoutActions({ commit }) {
      localStorage.clear();
      commit("CHANGES_ISLOGGEDIN", false);
    },
  },
  modules: {},
});
