<template>
  <div class="home">
    <table-user></table-user>
  </div>
</template>

<script>
import TableUser from "../components/TableUser.vue";
export default {
  name: "Home",
  components: {
    TableUser,
  },
};
</script>
