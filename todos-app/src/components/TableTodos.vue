<template>
  <div>
    <div class="flex items-center space-x-3 m-5 ml-20">
      <div class="avatar">
        <div class="w-12 h-12 mask mask-squircle">
          <img
            :src="
              `https://avatars.dicebear.com/api/croodles/${user.username}.svg`
            "
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
      <div data-theme="wireframe">
        <h1 class="text-5xl semibold text-left">{{ user.username }}</h1>
      </div>
    </div>
    <div data-theme="wireframe">
      <hr class="m-10" style="margin-right: 50px" />
    </div>
    <div data-theme="luxury" class="m-10 mx-60">
      <button
        @click.prevent="createForm(user.id)"
        class="btn btn-outline btn-accent btn-wide w-full"
      >
        <span class="items-center flex justify-start" style="float: left">
          <span class="mx-5">
            <i class="fas fa-plus-square"></i>
          </span>
          <span>Add New Task</span>
        </span>
      </button>
    </div>
    <div class="overflow-x-auto mx-60 mt-5" data-theme="wireframe">
      <table class="table w-full">
        <thead></thead>
        <tbody>
          <tr v-for="todo in todos" :key="todo.id">
            <th>
              <div class="form-control">
                <label class="cursor-pointer label">
                  <input
                    type="checkbox"
                    class="checkbox checkbox-secondary"
                    @change="changeIsComplete(todo.id, $event)"
                  />
                </label>
              </div>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div>
                  <div class="font-bold">
                    {{ todo.task }}
                  </div>
                  <div class="text-sm opacity-50">
                    {{ todo.description }}
                  </div>
                </div>
              </div>
            </td>
            <td>
              <span
                v-for="tag in todo.tag"
                :key="tag"
                class="badge badge-outline badge-md mx-2"
                >{{ tag }}</span
              >
            </td>
            <td>
              <span>
                <i class="far fa-calendar"></i>
              </span>
              <span>
                {{ todo.deadline }}
              </span>
            </td>
            <th>
              <button
                class="btn btn-ghost btn-xs"
                @click.prevent="deleteTask(todo.id)"
              >
                delete
              </button>
            </th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th style="font-size: 15px">Task</th>
            <th style="font-size: 15px">Tag</th>
            <th style="font-size: 15px">CreatedAt</th>
            <th style="font-size: 15px"></th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "TableTodos",
  data() {
    return {
      // isComplete: false,
    };
  },
  computed: {
    ...mapState(["todos", "user"]),
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions([
      "fetchTodos",
      "fetchUserId",
      "deleteTaskActions",
      "completedActions",
    ]),
    async createForm(id) {
      this.$router.push({ name: "AddForm", params: { id: id } });
    },
    async deleteTask(id) {
      await this.deleteTaskActions(id);
      await this.fetchTodos(this.id);
      // this.$router.push({ name: "Todos" });
    },
    async changeIsComplete(id, e) {
      const isComplete = e.target.checked;
      const data = {
        id,
        isComplete,
      };
      // console.log(data);
      await this.completedActions(data);
      await this.fetchTodos(this.id);
    },
  },
  async created() {
    const payload = this.id;
    try {
      if (payload) {
        await this.fetchTodos(payload);
        await this.fetchUserId(payload);
      }
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style></style>
