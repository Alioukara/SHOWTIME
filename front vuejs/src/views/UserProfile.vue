<template>
  <div>
    <div>
      <h1>EDIT MY PROFIL</h1>
      <form @submit.prevent="EditUser">
        <label for="">EMAIL</label>
        <hr />

        <input type="text" v-model="email" />
        <hr />
        <label for="">USERNAME</label>
        <hr />

        <input type="text" v-model="username" />
        <hr />
        <label for="">ENTER YOUR CURRENT PASSWORD OR A NEW NEW ONE</label><br />
        <input type="text" v-model="password" />
        <hr />
        <button type="submit" class="btn btn-success">SAVE</button>
      </form>
    </div>
    <div>
      <h1>MES RESERVATIONS</h1>
      <reservation-card
        v-for="item in listofResa"
        :key="item"
        :reservation="item"
        @removeReservation="removeReservation"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ReservationCard from "@/components/ReservationCard.vue";
export default {
  data() {
    return {
      id: "",
      username: "",
      email: "",
      password: "",
      listofResa: [],
    };
  },
  created() {
    this.getAllResaByName();
    this.getUserByname();
  },
  methods: {
    removeReservation(_id) {
      this.listofResa = this.listofResa.filter((n) => n._id !== _id);
    },
    getAllResaByName() {
      axios
        .get(
          process.env.VUE_APP_ENDPOINT +
            "/reservations/" +
            localStorage.getItem("username")
        )
        .then((response) => {
          this.listofResa = response.data;
          console.log(response.data);
        });
    },
    getUserByname() {
      axios
        .get(
          process.env.VUE_APP_ENDPOINT +
            "/users/" +
            localStorage.getItem("username")
        )
        .then((response) => {
          this.email = response.data.email;
          this.id = response.data._id;
          this.username = response.data.name;
        });
    },
    EditUser() {
      var axios = require("axios");
      var data = JSON.stringify({
        ...(this.username ? { name: this.username } : {}),
        ...(this.email ? { email: this.email } : {}),
        ...(this.password ? { password: this.password } : {}),
      });
      var config = {
        method: "patch",
        url: process.env.VUE_APP_ENDPOINT + "/users/" + this.id,

        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.$router.push("/userprofile");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {
    ReservationCard,
  },
};
</script>

<style>
</style>