<template>
  <table class="table table-stripped table-bordred">
    <thead class="thead-dark">
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Admin</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </thead>
    <tbody>
      <tr>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>

        <td>{{ user.admin }}</td>
        <td>
          <button type="button" class="btn btn-warning" @click="redirect">
            Edit
          </button>
        </td>
        <td>
          <button type="button" class="btn btn-danger" @click="deleteUser">
            Delete
          </button>
        </td>
        <td>
          <button type="button" class="btn btn-success" @click="redirectuser">
            Create
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "UsersCard",
  props: {
    user: Object,
  },
  methods: {
    deleteUser() {
      var axios = require("axios");
      var data = "";

      var config = {
        method: "delete",
        url: process.env.VUE_APP_ENDPOINT + "/users/" + this.user._id,
        headers: {},
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      this.$emit("removeUser", this.user._id);
    },

    redirect() {
      this.$router.push({
        name: "EditUser",
        params: {
          id: this.user._id,
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          admin: this.user.admin,
        },
      });
    },
    redirectuser() {
      this.$router.push({
        name: "CreateUser",
      });
    },
  },
};
</script>

<style></style>
