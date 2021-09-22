<template>
  <div>
    <div>
      <h1 class="items-center m-10 text-3xl">
        Kamu bisa redo task yang sudah selesai!
      </h1>
    </div>
    <div
      v-for="todo in todosComplete"
      :key="todo.id"
      class="p-4 card bordered mx-40 m-10 rounded-full"
    >
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text text-2xl">{{ todo.task }}</span>
          <input
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-primary"
            v-model="isComplete"
            @change="completeStatus(todo.id, isComplete)"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TableComplete",
  data() {
    return {
      isComplete: true,
    };
  },
  props: ["todosComplete"],
  methods: {
    ...mapActions(["completedActions"]),
    async completeStatus(id, isComplete) {
      const payload = {
        id,
        isComplete,
      };
      await this.completedActions(payload);
    },
  },
};
</script>

<style></style>
