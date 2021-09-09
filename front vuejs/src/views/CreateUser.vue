<template>
  <div>
    <a class="back" @click="$router.back()"
      ><img
        src="https://img.icons8.com/ios-filled/50/000000/circled-left-2.png"
    /></a>
    <form @submit.prevent="CreateUser">
      <h1>CREATE A NEW USER</h1>
      <br />
      <hr />
      <label for="">USERNAME</label><br />

      <input type="text" v-model="Newuser.username" /> <br />
      <hr />
      <label for="">EMAIL</label><br />

      <input type="text" v-model="Newuser.email" />
      <hr />
      <label for="">PASSWORD</label><br />
      <input type="text" v-model="Newuser.password" />
      <hr />
      <button type="submit" class="btn btn-success">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Create-User",
  data() {
    return {
      Newuser: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    CreateUser() {
      var axios = require("axios");
      var data = JSON.stringify({
        name: this.Newuser.username,
        email: this.Newuser.email,
        password: this.Newuser.password,
      });

      var config = {
        method: "post",
        url: process.env.VUE_APP_ENDPOINT + "/users",
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
