<template>
  <div>
    <navbar></navbar>
    <div data-theme="wireframe">
      <table-todos></table-todos>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TableTodos from "../components/TableTodos.vue";
export default {
  name: "Completed",
  components: { TableTodos, Navbar },
};
</script>

<style></style>
