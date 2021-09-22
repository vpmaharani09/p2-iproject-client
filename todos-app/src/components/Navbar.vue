<template>
  <div id="nav">
    <div
      class="navbar shadow-lg bg-neutral text-neutral-content justify-between rounded-box"
    >
      <div class="px-2 mx-2 navbar-start">
        <router-link :to="{ name: 'Home' }">
          <span class="text-lg font-bold cursor-pointer text-white">
            HackDays
          </span>
        </router-link>
      </div>
      <div
        class="hidden px-2 mx-2 navbar-center lg:flex"
        v-if="isLoggedIn === true"
      >
        <div class="flex items-stretch justify-center mr-60">
          <a class="btn btn-ghost btn-sm rounded-btn" style="color: white">
            Room Server
          </a>
          <router-link :to="{ name: 'Completed' }">
            <a class="btn btn-ghost btn-sm rounded-btn" style="color: white">
              Completed
            </a>
          </router-link>
          <a
            @click.prevent="logoutHandler"
            class="btn btn-ghost btn-sm rounded-btn"
            style="color: white"
          >
            Sign Out
          </a>
        </div>
      </div>
      <div
        class="flex-none hidden px-2 mx-2 lg:flex"
        v-if="isLoggedIn === false"
      >
        <div class="flex items-stretch">
          <router-link :to="{ name: 'Login' }">
            <a
              class="btn btn-ghost btn-sm rounded-btn mr-6"
              style="color: white"
            >
              Sign In
            </a>
          </router-link>
          <router-link :to="{ name: 'Register' }">
            <a
              class="btn btn-ghost btn-sm rounded-btn mr-6"
              style="color: white"
            >
              Sign Up
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    ...mapMutations(["CHANGES_ISLOGGEDIN"]),
    ...mapActions(["logoutActions"]),
    async logoutHandler() {
      await this.logoutActions();
      if (this.isLoggedIn === false) {
        this.$router.push("/login");
      }
    },
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.CHANGES_ISLOGGEDIN(true);
    }
  },
};
</script>

<style></style>
