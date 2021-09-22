<template>
  <div>
    <table class="table w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth Date</th>
          <th>City</th>
          <th>Todos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <div class="flex items-center space-x-3">
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
              <div>
                <div class="font-bold">
                  {{ user.username }}
                </div>
                <div class="text-sm opacity-50">
                  {{ user.email }}
                </div>
              </div>
            </div>
          </td>
          <td>
            {{ user.birthDate }}
          </td>
          <td>{{ user.city }}</td>
          <th>
            <button
              @click.prevent="todosPage(user.id)"
              class="btn btn-ghost btn-xs"
            >
              details
            </button>
          </th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Name</th>
          <th>Birth Date</th>
          <th>City</th>
          <th>Todos</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableUser",
  props: ["users"],
  methods: {
    async todosPage(id) {
      this.$router.push({ name: "Todos", params: { id: id } });
    },
  },
};
</script>

<style></style>
