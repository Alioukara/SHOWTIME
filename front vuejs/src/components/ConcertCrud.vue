<template>
  <table class="table table-stripped table-bordred">
    <thead class="thead-dark">
      <th scope="col">Title</th>
      <th scope="col">Artist</th>
      <th scope="col">Date</th>
      <th scope="col">Price</th>
      <th scope="col">Genre</th>
      <th scope="col">Description</th>
      <th scope="col">Picture</th>
    </thead>
    <tbody>
      <tr>
        <td>{{ concert.title }}</td>
        <td>{{ concert.artist }}</td>
        <td>{{ concert.date }}</td>
        <td>{{ concert.price }}</td>
        <td>{{ concert.genre }}</td>
        <td id="desc">{{ concert.description }}</td>
        <td>{{ concert.picture }}</td>
        <td>
          <button type="button" class="btn btn-warning" @click="redirect">
            Edit
          </button>
        </td>
        <td>
          <button type="button" class="btn btn-danger" @click="deleteConcert">
            Delete
          </button>
        </td>
        <td>
          <button
            type="button"
            class="btn btn-success"
            @click="redirectconcert"
          >
            Create
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ConcertsCard",
  props: {
    concert: Object,
  },
  methods: {
    deleteConcert() {
      var axios = require("axios");
      var data = "";

      var config = {
        method: "delete",
        url: process.env.VUE_APP_ENDPOINT + "/concerts/" + this.concert._id,
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
      this.$emit("removeConcert", this.concert._id);
    },

    redirect() {
      this.$router.push({
        name: "EditConcert",
        params: {
          id: this.concert._id,
          title: this.concert.title,
          artist: this.concert.artist,
          date: this.concert.date,
          price: this.concert.price,
          genre: this.concert.genre,
          description: this.concert.description,
          picture: this.concert.picture,
        },
      });
    },
    redirectconcert() {
      this.$router.push({
        name: "CreateConcert",
      });
    },
  },
};
</script>

<style>
#desc {
  overflow: auto;
}
</style>