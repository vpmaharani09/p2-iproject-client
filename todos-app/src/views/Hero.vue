<template>
  <div>
    <navbar></navbar>
    <div data-theme="wireframe">
      <div class="flex flex-wrap md items-center h-screen">
        <div class="bg-neutral w-full md:w-1/2 h-screen">
          <div class="mx-32">
            <h1 class="text-4xl font-bold mt-16">
              Let's make your day more productive!
            </h1>
            <div
              class="description w-full sm: mt-40 text-gray-500 text-md text-left"
            >
              You can share positive activities and get to know each other
              through the community also no need to worry about doing activities
              indoors or outdoors!
            </div>
            <router-link :to="{ name: 'Home' }">
              <button
                class="flex col btn btn-primary uppercase mt-10 text-sm font-semibold hover:underline"
              >
                get started
              </button>
            </router-link>
          </div>
        </div>
        <div class="bg-red-600 w-full md:w-1/2">
          <img
            src="../assets/images/todo.jpg"
            class=" w-full h-screen"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Hero",
  components: {
    Navbar,
  },
};
</script>

<style></style>
