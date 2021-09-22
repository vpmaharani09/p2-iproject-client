<template>
  <div>
    <navbar></navbar>
    <table-todos></table-todos>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TableTodos from "../components/TableTodos.vue";

export default {
  name: "Todos",
  components: { TableTodos, Navbar },
};
</script>

<style></style>
