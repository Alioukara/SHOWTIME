<template>
  <table class="table table-stripped table-bordred">
    <thead class="thead-dark">
      <th scope="col">User Name</th>
      <th scope="col">Concert Title</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </thead>
    <tbody>
      <tr>
        <td>{{ reservation.user_name }}</td>
        <td>{{ reservation.concert_title }}</td>
        <td>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteReservation"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ReservationsCard",
  props: {
    reservation: Object,
  },
  methods: {
    deleteReservation() {
      var axios = require("axios");
      var data = "";

      var config = {
        method: "delete",
        url:
          process.env.VUE_APP_ENDPOINT +
          "/reservations/" +
          this.reservation._id,
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
      this.$emit("removeReservation", this.reservation._id);
    },
  },
};
</script>

<style></style>
