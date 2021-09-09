<template>
  <div>
    <div>
      <concert-crud
        v-for="item in listofconcerts"
        :key="item"
        :concert="item"
        @removeConcert="removeConcert"
      />
    </div>
    <button type="button" class="btn btn-primary" @click="goToCrudUser()">
      Show Users</button
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
import ConcertCrud from "@/components/ConcertCrud.vue";
export default {
  name: "concerts",
  data() {
    return {
      listofconcerts: [],
    };
  },
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/");
    }
    this.getAllconcerts();
  },
  methods: {
    getAllconcerts() {
      axios.get(process.env.VUE_APP_ENDPOINT + "/concerts").then((response) => {
        this.listofconcerts = response.data;
      });
    },

    removeConcert(_id) {
      this.listofconcerts = this.listofconcerts.filter((n) => n._id !== _id);
    },
    goToCrudUser() {
      if (localStorage.getItem("token")) {
        this.$router.push("/cruduser");
      } else {
        this.$router.push("/login");
      }
    },
    goToCrudReservation() {
      if (localStorage.getItem("token")) {
        this.$router.push("/crudreservation");
      }
    },
  },
  components: {
    ConcertCrud,
  },
};
</script>

<style>
</style>