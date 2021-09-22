<template>
  <div>
    <div class="flex items-center space-x-3 m-5 ml-20">
      <div class="avatar">
        <div class="w-12 h-12 mask mask-squircle">
          <img
            src="/tailwind-css-component-profile-2@56w.png"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
      <div data-theme="wireframe">
        <h1 class="text-4xl semibold text-left">vpmaharani09</h1>
      </div>
    </div>
    <div data-theme="wireframe">
      <hr class="m-10" style="margin-right: 50px" />
    </div>
    <div data-theme="luxury" class="m-10 mx-60">
      <button class="btn btn-outline btn-accent btn-wide w-full">
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
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div>
                  <div class="font-bold">
                    Hart Hagerty
                  </div>
                  <div class="text-sm opacity-50">
                    United States
                  </div>
                </div>
              </div>
            </td>
            <td>
              <span class="badge badge-outline badge-md"
                >Desktop Support Technician</span
              >
            </td>
            <td>
              <span>
                <i class="far fa-calendar"></i>
              </span>
              <span>
                Purple
              </span>
            </td>
            <th>
              <button class="btn btn-ghost btn-xs">delete</button>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div>
                  <div class="font-bold">
                    Brice Swyre
                  </div>
                  <div class="text-sm opacity-50">
                    China
                  </div>
                </div>
              </div>
            </td>
            <td>
              <span class="badge badge-outline badge-md">Tax Accountant</span>
            </td>
            <td>Red</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div>
                  <div class="font-bold">
                    Marjy Ferencz
                  </div>
                  <div class="text-sm opacity-50">
                    Russia
                  </div>
                </div>
              </div>
            </td>
            <td>
              <span class="badge badge-outline badge-md"
                >Office Assistant I</span
              >
            </td>
            <td>Crimson</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div>
                  <div class="font-bold">
                    Yancy Tear
                  </div>
                  <div class="text-sm opacity-50">
                    Brazil
                  </div>
                </div>
              </div>
            </td>
            <td>
              <span class="badge badge-outline badge-md"
                >Community Outreach Specialist</span
              >
            </td>
            <td>Indigo</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
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
export default {
  name: "TableTodos",
};
</script>

<style></style>
