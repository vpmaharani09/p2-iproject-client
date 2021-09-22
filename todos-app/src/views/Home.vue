<template>
  <div>
    <navbar></navbar>
    <div class="home">
      <div class="mt-5 ml-20">
        <h1 class="md:font-mono text-6xl semibold text-left">
          Welcome hackers!
        </h1>
      </div>
      <div class="mx-40 m-10">
        <div>
          <div class="font-bold text-xl">{{ weather.location.name }}</div>
          <div class="text-sm text-gray-500">
            {{ weather.location.localtime }}
          </div>
          <div
            class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24"
          >
            <img :src="weather.current.condition.icon" alt="" />
            <div class="text-sm text-gray-500">
              {{ weather.current.condition.text }}
            </div>
          </div>
        </div>
        <div class="w-full shadow stats">
          <div class="stat">
            <div class="stat-figure text-primary"></div>
            <div class="stat-title">Wind</div>
            <div class="stat-value text-primary">
              {{ weather.current.wind_kph }}
            </div>
            <div class="stat-desc">k/h</div>
          </div>
          <div class="stat">
            <div class="stat-figure text-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Temperature</div>
            <div class="stat-value text-info">
              {{ weather.current.temp_c }}°
            </div>
            <div class="stat-desc">Derajat Celcius</div>
          </div>
          <div class="stat">
            <div class="stat-figure text-info"></div>
            <div class="stat-value">{{ weather.current.humidity }}%</div>
            <div class="stat-title">Humidity</div>
            <div class="stat-desc text-info">percent</div>
          </div>
        </div>
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
    ...mapState(["isLoggedIn", "users", "weather"]),
  },
  methods: {
    ...mapMutations(["CHANGES_ISLOGGEDIN"]),
    ...mapActions(["fetchUsers", "getWeather"]),
  },
  async created() {
    if (localStorage.getItem("access_token")) {
      this.CHANGES_ISLOGGEDIN(true);
      await this.fetchUsers();
      await this.getWeather();
    } else {
      await this.fetchUsers();
    }
  },
};
</script>
