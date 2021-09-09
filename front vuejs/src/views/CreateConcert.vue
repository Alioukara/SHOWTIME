<template>
  <div>
    <a class="back" @click="$router.back()"
      ><img
        src="https://img.icons8.com/ios-filled/50/000000/circled-left-2.png"
        alt="go back"
    /></a>
    <form @submit.prevent="CreateConcert">
      <h1>ADD A NEW CONCERT/FESTIVAL</h1>
      <br />
      <hr />
      <label for="">Title</label><br />
      <input type="text" v-model="Newconcert.title" /> <br />
      <hr />
      <label for="">ARTIST</label><br />
      <input type="text" v-model="Newconcert.artist" />
      <hr />
      <label for="">DATE</label><br />
      <input type="text" v-model="Newconcert.date" />
      <hr />
      <label for="">PRICE</label><br />
      <input type="text" v-model="Newconcert.price" />
      <hr />
      <label for="">GENRE</label><br />
      <input type="text" v-model="Newconcert.genre" />
      <hr />
      <label for="">DESCRIPTION</label><br />
      <textarea type="text" v-model="Newconcert.description" />
      <hr />
      <label for="">PICTURE</label><br />
      <input type="text" v-model="Newconcert.picture" />
      <hr />
      <button type="submit" class="btn btn-success">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Create-Concert",
  data() {
    return {
      Newconcert: {
        title: "",
        artist: "",
        date: "",
        price: "",
        genre: "",
        description: "",
        picture: "",
      },
    };
  },
  methods: {
    CreateConcert() {
      var axios = require("axios");
      var data = JSON.stringify({
        title: this.Newconcert.title,
        artist: this.Newconcert.artist,
        date: this.Newconcert.date,
        price: this.Newconcert.price,
        genre: this.Newconcert.genre,
        description: this.Newconcert.description,
        picture: this.Newconcert.picture,
      });

      var config = {
        method: "post",
        url: process.env.VUE_APP_ENDPOINT + "/concerts",
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
