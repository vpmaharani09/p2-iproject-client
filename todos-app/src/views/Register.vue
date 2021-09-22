<template>
  <div>
    <navbar></navbar>
    <div class="mt-2">
      <div class="flex flex-wrap md items-center">
        <div class="bg-white-600 w-full md:w-1/2">
          <img
            src="../assets/images/register.jpg"
            class="p-0"
            alt=""
            style="height: 500px; float: right"
          />
        </div>
        <div class="bg-white w-full md:w-1/2 ">
          <div class="mx-32">
            <form action="#" @submit.prevent="registerHandler">
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
                      type="text"
                      placeholder="username"
                      class="input input-bordered"
                      v-model="credential.username"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Birth Date</span>
                    </label>
                    <input
                      type="date"
                      placeholder="birth date"
                      class="input input-bordered"
                      v-model="credential.birthDate"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">City</span>
                    </label>
                    <input
                      type="input"
                      placeholder="city"
                      class="input input-bordered"
                      v-model="credential.city"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      class="input input-bordered"
                      v-model="credential.email"
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
                    <button class="btn btn-neutral">REGISTER</button>
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
import { mapActions, mapState } from "vuex";
import Navbar from "../components/Navbar.vue";
import Swal from "sweetalert2";

export default {
  name: "Register",
  components: {
    Navbar,
  },
  data() {
    return {
      credential: {
        username: "",
        birthDate: "",
        city: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(["currentPage"]),
  },
  methods: {
    ...mapActions(["registerActions"]),
    async registerHandler() {
      try {
        const payload = this.credential;
        await this.registerActions(payload);
        if (this.currentPage === "login") {
          this.$router.push("/login");
          Swal.fire(
            "Register successfully!",
            "Now, you still need to login",
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
