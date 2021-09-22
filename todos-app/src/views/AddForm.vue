<template>
  <div class="container mx-auto">
    <div class="mt-20">
      <div class="flex flex-wrap md items-center">
        <div class="bg-white-600 w-full md:w-1/2">
          <img
            src="../assets/images/form.jpg"
            class="p-0"
            alt=""
            style="height: 500px; float: right"
          />
        </div>
        <div class="bg-white w-full md:w-1/2 ">
          <div class="mx-32">
            <form action="#" @submit.prevent="createTask">
              <div
                data-theme="pastel"
                class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
              >
                <div class="card-body">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Task</span>
                    </label>
                    <input
                      v-model="form.task"
                      type="text"
                      placeholder="task"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Description</span>
                    </label>
                    <input
                      v-model="form.description"
                      type="text"
                      placeholder="description"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Deadline</span>
                    </label>
                    <input
                      v-model="form.deadline"
                      type="date"
                      placeholder="deadline"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Tag</span>
                    </label>
                    <input
                      v-model="form.tag"
                      type="text"
                      placeholder="tag"
                      class="input input-bordered"
                    />
                    <label class="label">
                      <a href="#" class="label-text-alt"
                        >Kamu bisa menambahkan banyak tag</a
                      >
                    </label>
                  </div>
                  <div class="form-control mt-6">
                    <button class="btn btn-neutral">Add Task</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div data-theme="luxury">
          <button
            @click.prevent="backTask"
            class="flex col btn btn-primary uppercase text-sm font-semibold hover:underline"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddForm",
  data() {
    return {
      form: {
        task: "",
        description: "",
        deadline: "",
        tag: "",
      },
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(["createNewTask", "fetchTodos"]),
    async createTask() {
      const id = this.id;
      const payload = {
        id,
        task: this.form.task,
        description: this.form.description,
        deadline: this.form.deadline,
        tag: this.form.tag,
      };
      await this.createNewTask(payload);
      this.$router.push({ name: "Todos", params: { id } });
    },
    backTask() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
