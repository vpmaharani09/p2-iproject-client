<template>
  <div class="bg-blue-200 flex">
    <div
      class="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5"
    >
      <h1 class="font-bold text-2xl my-10 text-white">Join</h1>
      <form
        class="mt-2 flex flex-col lg:w-1/2 w-8/12"
        @submit.prevent="joinCommunity"
      >
        <div
          class="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10"
        >
          <div class="flex -mr-px justify-center w-15 p-4">
            <span
              class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
            >
              <i class="fas fa-user-circle"></i>
            </span>
          </div>
          <input
            type="text"
            class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
            placeholder="Username"
            v-model="username"
          />
        </div>
        <div
          class="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4"
        >
          <div class="flex -mr-px justify-center w-15 p-4">
            <span
              class="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"
            >
              <i class="fas fa-lock"></i>
            </span>
          </div>
          <input
            type="text"
            class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
            placeholder="e.g: sport, health, education"
            v-model="name"
          />
        </div>
        <a
          class="bg-blue-400 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20 cursor-pointer"
        >
          <button type="submit">Join Room</button>
        </a>
      </form>
      <router-link :to="{ name: 'Home' }">
        <div>
          <button class="btn btn-primary">Home</button>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FormServer",
  data() {
    return {
      username: "",
      name: "",
    };
  },
  methods: {
    ...mapActions(["getUserCommunity", "getUserJoin"]),
    async joinCommunity() {
      const payload = {
        username: this.username,
        name: this.name,
      };

      localStorage.setItem("username", this.username);
      this.$socket.emit("joinCommunity", this.username);
      await this.getUserCommunity(payload);
      this.$router.push({ name: "ChatCord" });
    },
  },
};
</script>

<style></style>
