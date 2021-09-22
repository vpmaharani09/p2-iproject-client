<template>
  <div>
    <navbar></navbar>
    <div data-theme="wireframe">
      <table-complete :todosComplete="todosComplete"></table-complete>
    </div>
    <!-- <div>
      <HFooter></HFooter>
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import HFooter from "vue-hacktiv8-footer";
import Navbar from "../components/Navbar.vue";
import TableComplete from "../components/TableComplete.vue";
export default {
  name: "Completed",
  components: { Navbar, TableComplete },
  computed: {
    ...mapState(["todosComplete"]),
  },
  methods: {
    ...mapActions(["fetchTodosComplete"]),
  },
  async created() {
    await this.fetchTodosComplete();
  },
};
</script>

<style></style>
