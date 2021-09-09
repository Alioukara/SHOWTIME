<template>
  <div>
    <a class="back" @click="$router.back()"
      ><img
        src="https://img.icons8.com/ios-filled/50/000000/circled-left-2.png"
    /></a>
    <form @submit.prevent="EditUser">
      <label for="">USERNAME</label>
      <h1>{{ $route.params.name }}</h1>
      <input type="text" v-model="EditedUser.name" /> <br />
      <hr />
      <label for="">EMAIL</label>
      <h1>{{ $route.params.email }}</h1>
      <input type="text" v-model="EditedUser.email" />
      <hr />
      <label for="">NEW PASSWORD</label><br />
      <input type="text" v-model="EditedUser.password" />
      <hr />
      <hr />
      <label for="">ADMIN</label><br />
      <input type="text" v-model="EditedUser.admin" />
      <hr />
      <button type="submit" class="btn btn-success">SAVE</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Edit-User",
  data() {
    return {
      EditedUser: {
        name: this.$route.params.name,
        email: this.$route.params.email,
        password: this.$route.params.password,
        admin: this.$route.params.admin,
      },
    };
  },

  methods: {
    EditUser() {
      var axios = require("axios");
      var data = JSON.stringify({
        ...(this.EditedUser.name ? { name: this.EditedUser.name } : {}),
        ...(this.EditedUser.email ? { email: this.EditedUser.email } : {}),
        ...(this.EditedUser.password
          ? { password: this.EditedUser.password }
          : {}),
        ...(this.EditedUser.admin ? { admin: this.EditedUser.admin } : {}),
      });
      var config = {
        method: "patch",
        url: process.env.VUE_APP_ENDPOINT + "/users/" + this.$route.params.id,

        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.$router.push("/cruduser");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
