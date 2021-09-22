<template>
  <div
    class="navbar shadow-lg bg-neutral text-neutral-content justify-between rounded-box"
  >
    <div class="px-2 mx-2 navbar-start">
      <span class="text-lg font-bold cursor-pointer">
        HackDays
      </span>
    </div>
    <div class="hidden px-2 mx-2 navbar-center lg:flex">
      <div class="flex items-stretch justify-center mr-60">
        <a class="btn btn-ghost btn-sm rounded-btn" style="color: white">
          Weathers
        </a>
        <a class="btn btn-ghost btn-sm rounded-btn" style="color: white">
          Room Server
        </a>
        <a class="btn btn-ghost btn-sm rounded-btn" style="color: white">
          Completed
        </a>
        <a class="btn btn-ghost btn-sm rounded-btn" style="color: white">
          Sign Out
        </a>
      </div>
    </div>
    <div class="flex-none hidden px-2 mx-2 lg:flex">
      <div class="flex items-stretch">
        <router-link :to="{ name: 'Login' }">
          <a class="btn btn-ghost btn-sm rounded-btn mr-6" style="color: white">
            Sign In
          </a>
        </router-link>
        <router-link :to="{ name: 'Register' }">
          <a class="btn btn-ghost btn-sm rounded-btn mr-6" style="color: white">
            Sign Up
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
