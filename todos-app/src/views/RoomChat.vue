<template>
  <div>
    <div class="flex h-screen text-gray-800">
      <div class="flex flex-row h-full w-full">
        <div class="flex flex-col py-8 pl-6 pr-2 w-64 flex-shrink-0">
          <div class="flex flex-row items-center justify-center h-12 w-full">
            <div
              class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
            </div>
            <div class="ml-2 font-bold text-2xl">QuickChat</div>
          </div>
          <div
            class="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
          >
            <div class="h-20 w-20 rounded-full border overflow-hidden">
              <img
                :src="
                  `https://avatars.dicebear.com/api/bottts/${userJoin.room}.svg`
                "
                alt="Avatar"
                class="h-full w-full"
              />
            </div>
            <!-- title community -->
            <!-- kotak title chat -->
            <div class="text-sm font-semibold mt-2">{{ userJoin.room }}</div>
            <div class="text-xs text-gray-500">Welcome to this community!</div>
            <div class="flex flex-row items-center mt-3">
              <div
                class="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full"
              >
                <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
              </div>
              <div class="leading-none ml-1 text-xs">Active</div>
            </div>
            <!-- sampe ini keknya -->
          </div>
          <!-- sidebar sapa yang aktif -->
          <div class="flex flex-col mt-8">
            <div class="flex flex-row items-center justify-between text-xs">
              <span class="font-bold">Active Conversations</span>
              <span
                class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                >{{ userJoin.users.length }}</span
              >
            </div>

            <!-- nama user join -->
            <div
              class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto"
            >
              <button
                v-for="user in userJoin.users"
                :key="user.id"
                class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
              >
                <div class="flex items-center">
                  <div
                    class="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full"
                  >
                    <img
                      :src="
                        `https://avatars.dicebear.com/api/avataaars/${user.username}.svg`
                      "
                      alt=""
                    />
                  </div>
                  <div class="ml-2 text-sm font-semibold">
                    {{ user.username }}
                  </div>
                </div>
              </button>
            </div>
            <!-- end -->

            <!-- left button -->
            <div
              class="flex flex-row items-center justify-between text-md mt-6 bg-white"
            >
              <span class="font-bold">Leave Room</span>
            </div>
            <!-- sampe ini -->
          </div>
          <div class="relative" data-theme="pastel">
            <button
              @click.prevent="disconnecting"
              type="submit"
              class="flex col btn btn-primary uppercase text-sm font-semibold hover:underline"
            >
              Leave
            </button>
          </div>
        </div>

        <!-- chat box -->
        <div class="flex flex-col flex-auto h-full p-6">
          <div
            class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
          >
            <div class="flex flex-col h-full overflow-x-auto mb-4">
              <div class="flex flex-col h-full">
                <div
                  v-for="message in messages"
                  :key="message.id"
                  class="grid grid-cols-12 gap-y-2"
                >
                  <!-- outgoing msg/dri orang lain -->
                  <div
                    v-if="message.username === 'HackBot'"
                    class="col-start-1 col-end-8 p-3 rounded-lg outgoing"
                  >
                    <div class="flex flex-row items-center">
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                      >
                        <img
                          :src="
                            `https://avatars.dicebear.com/api/bottts/${message.username}.svg`
                          "
                          alt=""
                        />
                      </div>
                      <div
                        class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                      >
                        <div>{{ message.text }}</div>
                        <div
                          class="absolute text-xs bottom-0 left-0 -mb-5 mr-2 text-gray-500"
                        >
                          {{ message.username }} {{ message.time }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="
                      message.username !== username &&
                        message.username !== 'HackBot'
                    "
                    class="col-start-1 col-end-8 p-3 rounded-lg outgoing"
                  >
                    <div class="flex flex-row items-center">
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                      >
                        <img
                          :src="
                            `https://avatars.dicebear.com/api/avataaars/${message.username}.svg`
                          "
                          alt=""
                        />
                      </div>
                      <div
                        class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                      >
                        <div>{{ message.text }}</div>
                        <div
                          class="absolute text-xs bottom-0 left-0 -mb-5 mr-2 text-gray-500"
                        >
                          {{ message.username }} {{ message.time }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end -->

                  <!-- incoming msg/dri kita -->
                  <div
                    v-if="message.username === username"
                    class="col-start-6 col-end-13 p-3 rounded-lg incoming"
                  >
                    <div
                      class="flex items-center justify-start flex-row-reverse"
                    >
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                      >
                        <img
                          :src="
                            `https://avatars.dicebear.com/api/avataaars/${message.username}.svg`
                          "
                          alt=""
                        />
                      </div>
                      <div
                        class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                      >
                        <div>{{ message.text }}</div>
                        <div
                          class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                        >
                          {{ message.username }} {{ message.time }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- sampe ini -->
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
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "RoomChat",
  data() {
    return {
      inputMsg: "",
      username: localStorage.getItem("username"),
    };
  },
  computed: {
    ...mapState(["messages", "userJoin"]),
  },
  sockets: {
    message(data) {
      this.PUSH_MESSAGE(data);
      this.inputMsg = "";
    },

    roomUsers(data) {
      this.GET_USERJOIN(data);
    },
  },
  methods: {
    ...mapMutations(["PUSH_MESSAGE", "GET_USERJOIN"]),
    async sendMessage() {
      const data = this.inputMsg;
      this.$socket.emit("sendMessage", data);
    },

    disconnecting() {
      this.$socket.emit("disconnecting");
      this.$router.push({ name: "FormChat" });
    },
  },
};
</script>

<style></style>
