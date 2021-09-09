<template>
  <div>
    <div>
      <reservation-card
        v-for="item in listofreservations"
        :key="item"
        :reservation="item"
        @removeReservation="removeReservation"
      />
    </div>
    <button type="button" class="btn btn-primary" @click="goToCrudConcert()">
      Show Concerts/Festivals</button
    ><br />
    <br />
    <button type="button" class="btn btn-primary" @click="goToCrudUser()">
      Show Users
    </button>
  </div>
</template>

<script>
import axios from "axios";
import ReservationCard from "@/components/ReservationCard.vue";
export default {
  name: "reservations",
  data() {
    return {
      listofreservations: [],
    };
  },
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/");
    }
    this.getAllreservations();
  },
  methods: {
    getAllreservations() {
      axios
        .get(process.env.VUE_APP_ENDPOINT + "/reservations")
        .then((response) => {
          this.listofreservations = response.data;
        });
    },

    removeReservation(_id) {
      this.listofreservations = this.listofreservations.filter(
        (n) => n._id !== _id
      );
    },
    goToCrudConcert() {
      if (localStorage.getItem("token")) {
        this.$router.push("/crudconcert");
      }
    },
    goToCrudUser() {
      if (localStorage.getItem("token")) {
        this.$router.push("/cruduser");
      } else {
        this.$router.push("/login");
      }
    },
  },
  components: {
    ReservationCard,
  },
};
</script>

<style>
</style>