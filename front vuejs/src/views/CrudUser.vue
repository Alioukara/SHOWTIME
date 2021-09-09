<template>
  <div>
    <div>
      <user-card
        v-for="item in listofusers"
        :key="item"
        :user="item"
        @removeUser="removeUser"
      />
    </div>
    <button type="button" class="btn btn-primary" @click="goToCrudConcert()">
      Show Concerts/Festivals</button
    ><br />
    <br />
    <button
      type="button"
      class="btn btn-primary"
      @click="goToCrudReservation()"
    >
      Show Reservations
    </button>
  </div>
</template>

<script>
import axios from "axios";
import UserCard from "@/components/UserCard.vue";
export default {
  name: "users",
  data() {
    return {
      listofusers: [],
    };
  },
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/");
    }
    this.getAllusers();
  },
  methods: {
    getAllusers() {
      axios.get(process.env.VUE_APP_ENDPOINT + "/users").then((response) => {
        this.listofusers = response.data;
      });
    },

    removeUser(_id) {
      this.listofusers = this.listofusers.filter((n) => n._id !== _id);
    },
    goToCrudConcert() {
      if (localStorage.getItem("token")) {
        this.$router.push("/crudconcert");
      }
    },
    goToCrudReservation() {
      if (localStorage.getItem("token")) {
        this.$router.push("/crudreservation");
      }
    },
  },
  components: {
    UserCard,
  },
};
</script>

<style></style>
