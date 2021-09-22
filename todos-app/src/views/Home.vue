<template>
  <div>
    <navbar></navbar>
    <div class="home">
      <div class="mt-5 ml-20">
        <h1 class="md:font-mono text-6xl semibold text-left">
          Welcome hackers!
        </h1>
      </div>
      <div class="overflow-x-auto p-10 px-40">
        <table-user :users="users"></table-user>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import Navbar from "../components/Navbar.vue";
import TableUser from "../components/TableUser.vue";
export default {
  name: "Home",
  components: {
    TableUser,
    Navbar,
  },
  computed: {
    ...mapState(["isLoggedIn", "users"]),
  },
  methods: {
    ...mapMutations(["CHANGES_ISLOGGEDIN"]),
    ...mapActions(["fetchUsers"]),
  },
  async created() {
    if (localStorage.getItem("access_token")) {
      this.CHANGES_ISLOGGEDIN(true);
      await this.fetchUsers();
    } else {
      await this.fetchUsers();
    }
  },
};
</script>
