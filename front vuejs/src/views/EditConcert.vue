<template>
  <div>
    <a class="back" @click="$router.back()"
      ><img
        src="https://img.icons8.com/ios-filled/50/000000/circled-left-2.png"
    /></a>
    <form @submit.prevent="EditConcert">
      <h1>ADD A NEW CONCERT/FESTIVAL</h1>
      <br />
      <hr />
      <label for="">Title</label><br />
      <h1>{{ $route.params.title }}</h1>
      <input type="text" v-model="EditedConcert.title" /> <br />
      <hr />
      <label for="">ARTIST</label><br />
      <h1>{{ $route.params.artist }}</h1>
      <input type="text" v-model="EditedConcert.artist" />
      <hr />
      <label for="">DATE</label><br />
      <h1>{{ $route.params.date }}</h1>
      <input type="text" v-model="EditedConcert.date" />
      <hr />
      <label for="">PRICE</label><br />
      <h1>{{ $route.params.price }}</h1>
      <input type="text" v-model="EditedConcert.price" />
      <hr />
      <label for="">GENRE</label><br />
      <h1>{{ $route.params.genre }}</h1>
      <input type="text" v-model="EditedConcert.genre" />
      <hr />
      <label for="">DESCRIPTION</label><br />
      <h1>{{ $route.params.description }}</h1>
      <textarea
        rows="4"
        cols="50"
        type="text"
        v-model="EditedConcert.description"
      />
      <hr />
      <label for="">PICTURE</label><br />
      <h1>{{ $route.params.picture }}</h1>
      <input type="text" v-model="EditedConcert.picture" />
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
      EditedConcert: {
        title: this.$route.params.title,
        artist: this.$route.params.artist,
        date: this.$route.params.date,
        price: this.$route.params.price,
        genre: this.$route.params.genre,
        description: this.$route.params.description,
        picture: this.$route.params.picture,
      },
    };
  },

  methods: {
    EditConcert() {
      var axios = require("axios");
      var data = JSON.stringify({
        ...(this.EditedConcert.title
          ? { title: this.EditedConcert.title }
          : {}),
        ...(this.EditedConcert.artist
          ? { artist: this.EditedConcert.artist }
          : {}),
        ...(this.EditedConcert.date ? { date: this.EditedConcert.date } : {}),
        ...(this.EditedConcert.price
          ? { price: this.EditedConcert.price }
          : {}),
        ...(this.EditedConcert.genre
          ? { genre: this.EditedConcert.genre }
          : {}),
        ...(this.EditedConcert.description
          ? { description: this.EditedConcert.description }
          : {}),
        ...(this.EditedConcert.picture
          ? { picture: this.EditedConcert.picture }
          : {}),
      });
      var config = {
        method: "patch",
        url:
          process.env.VUE_APP_ENDPOINT + "/concerts/" + this.$route.params.id,

        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.$router.push("/crudconcert");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>