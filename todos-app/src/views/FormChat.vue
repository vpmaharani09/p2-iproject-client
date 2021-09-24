<template>
  <div>
    <navbar></navbar>
    <div>
      <h1 class="text-4xl mt-10">JOIN YOUR COMMUNITY</h1>
    </div>
    <div
      class="justify-center items-center mx-80 m-10"
      style="margin-left: 550px"
    >
      <form action="" @submit.prevent="joinRoom">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                class="input input-bordered"
                v-model="username"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Community</span>
              </label>
              <select
                v-model="nameCommunity"
                class="select select-bordered select-neutral w-full max-w-xs"
              >
                <option disabled="disabled" selected="selected"
                  >Choose your community</option
                >
                <option v-for="community in communities" :key="community.id">{{
                  community.name
                }}</option>
              </select>
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-neutral">Join room</button>
            </div>
          </div>
        </div>
      </form>
      <router-link :to="{ name: 'Home' }">
        <div class="m-10">
          <button class="btn btn-primary">Home</button>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Navbar from "../components/Navbar.vue";
export default {
  name: "FormChat",
  components: {
    Navbar,
  },
  data() {
    return {
      username: "",
      nameCommunity: "",
    };
  },
  computed: {
    ...mapState(["communities"]),
  },
  methods: {
    ...mapActions(["getCommunity"]),
    async joinRoom() {
      const payload = {
        username: this.username,
        room: this.nameCommunity,
      };

      localStorage.setItem("username", this.username);

      this.$socket.emit("joinRoom", payload);
      this.$router.push({ name: "RoomChat" });
    },
  },
  async created() {
    if (localStorage.getItem("access_token")) {
      await this.getCommunity();
    }
  },
};
</script>

<style></style>
