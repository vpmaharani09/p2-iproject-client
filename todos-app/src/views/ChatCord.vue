<template>
  <div>
    <div class="mx-80 m-20 h-screen mt-5">
      <div class="grid grid-cols-3 border rounded">
        <div class="col-span-1 bg-white border-r border-gray-300">
          <div class="my-3 mx-3 ">
            <div
              class="relative text-gray-600 focus-within:text-gray-400"
            ></div>
          </div>

          <ul class="overflow-auto" style="height: 500px;">
            <h2 class="ml-2 mb-2 text-gray-600 text-lg my-2">Chats</h2>
            <li>
              <a
                v-for="(user, i) in listUser"
                :key="i"
                class="hover:bg-gray-100 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
              >
                <img
                  class="h-10 w-10 rounded-full object-cover"
                  :src="
                    `https://avatars.dicebear.com/api/avataaars/${user}.svg`
                  "
                  alt="username"
                />
                <div class="w-full pb-2">
                  <div class="flex justify-between">
                    <span
                      class="block ml-2 font-semibold text-base text-gray-600 "
                      >{{ user }}</span
                    >
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-span-2 bg-white">
          <div class="w-full">
            <div class="flex items-center border-b border-gray-300 pl-3 py-3">
              <span class="block ml-2 font-bold text-base text-gray-600"
                >Room Chat</span
              >
            </div>
            <div
              id="chat"
              class="w-full overflow-y-auto p-10 relative"
              style="height: 500px;"
              ref="toolbarChat"
            >
              <div
                class="w-full flex justify-start"
                v-for="message in messages"
                :key="message.id"
              >
                <div
                  class="flex justify-right mr-0 ml-80"
                  style="float: right; margin-left: 300px"
                  v-if="message.username === username"
                >
                  <span>
                    <img
                      :src="
                        `https://avatars.dicebear.com/api/avataaars/${message.username}.svg`
                      "
                      alt="Avatar Tailwind CSS Component"
                      class="w-10 h-10 my-4 mx-2"
                  /></span>
                  <div
                    class="bg-gray-100 rounded px-5 py-2 my-4 text-gray-700 relative outgoing"
                    style="max-width: 300px;"
                  >
                    <span class="block">{{ message.msg }}</span>
                  </div>
                </div>
                <div class="flex" v-if="message.username !== username">
                  <span>
                    <img
                      :src="
                        `https://avatars.dicebear.com/api/avataaars/${message.username}.svg`
                      "
                      alt="Avatar Tailwind CSS Component"
                      class="w-10 h-10 my-4 mx-2"
                  /></span>
                  <div
                    class="bg-gray-100 rounded px-5 py-2 my-4 text-gray-700 relative incoming"
                    style="max-width: 300px;"
                  >
                    <span class="block">{{ message.msg }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="w-full py-3 px-3 flex items-center justify-between border-t border-gray-300"
            >
              <input
                aria-placeholder="ketikkan pesan"
                placeholder="ketikkan pesan"
                class="py-2 mx-3 pl-5 block w-full rounded-full bg-gray-100 outline-none focus:text-gray-700"
                type="text"
                name="message"
                v-model="inputMsg"
              />

              <button
                @click.prevent="sendMessage"
                @keyup.enter="sendMessage"
                class="outline-none focus:outline-none"
                type="submit"
              >
                <svg
                  class="text-gray-400 h-7 w-7 origin-center transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="m-10">
        <button
          @click.prevent="leaveRoom"
          class="flex col btn btn-primary uppercase text-sm font-semibold hover:underline"
        >
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "ChatCord",
  computed: {
    ...mapState(["userCommunity", "messages"]),
  },
  data() {
    return {
      inputMsg: "",
      listUser: [],
      username: localStorage.getItem("username"),
    };
  },
  sockets: {
    broadcastMessage(data) {
      this.PUSH_MESSAGE(data);
    },

    sendUser(user) {
      this.listUser = user;
      console.log(user);
    },
  },
  methods: {
    ...mapActions(["getUserCommunity"]),
    ...mapMutations(["PUSH_MESSAGE"]),
    async leaveRoom() {
      localStorage.removeItem("username");
      this.$router.push({ name: "FormServer" });
    },
    async sendMessage() {
      const data = {
        username: localStorage.getItem("username"),
        msg: this.inputMsg,
      };

      this.PUSH_MESSAGE(data);
      this.$socket.emit("sendMessage", data);
      this.inputMsg = "";
    },
  },
  async created() {
    await this.getUserCommunity();
    this.$socket.emit("getUsers");
    // await this.getUserJoin();
  },
};
</script>

<style></style>
