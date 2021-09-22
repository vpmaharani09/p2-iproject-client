<template>
  <div>
    <navbar></navbar>
    <div class="mt-0">
      <div class="flex flex-wrap md items-center">
        <div class="bg-white-600 w-full md:w-1/2">
          <img
            src="../assets/images/login.jpg"
            class="p-0"
            alt=""
            style="height: 500px; float: right"
          />
        </div>
        <div class="bg-white w-full md:w-1/2 ">
          <div class="mx-32">
            <form action="#" @submit.prevent="loginHandler">
              <div
                data-theme="pastel"
                class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
              >
                <div class="card-body">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Username</span>
                    </label>
                    <input
                      v-model="credential.username"
                      type="text"
                      placeholder="username"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      class="input input-bordered"
                      v-model="credential.password"
                    />
                    <label class="label">
                      <a href="#" class="label-text-alt">Forgot password?</a>
                    </label>
                  </div>
                  <div class="form-control mt-6">
                    <button class="btn btn-neutral">Login</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions, mapState } from "vuex";
import Navbar from "../components/Navbar.vue";
export default {
  name: "Login",
  components: {
    Navbar,
  },
  data() {
    return {
      credential: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["loginActions"]),
    async loginHandler() {
      try {
        const payload = this.credential;
        await this.loginActions(payload);
        if (this.isLoggedIn === true) {
          this.$router.push("/home");
          Swal.fire(
            "Login successfully!",
            "Let's make your day productive",
            "success"
          );
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data,
        });
      }
    },
  },
};
</script>

<style></style>
