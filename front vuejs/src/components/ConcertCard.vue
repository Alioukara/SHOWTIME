<template>
  <div class="ConcertsCard">
    <h1 class="ConcertsCard-title">Artist: {{ concerts.artist }}</h1>
    <h1 class="ConcertsCard-title">Title: {{ concerts.title }}</h1>

    <div class="ConcertsCard-grid">
      <img
        class="ConcertsCard-image"
        :src="require(`@/assets/${concerts.picture}`)"
      />
      <div class="ConcertsCard-header">
        <h4>Genre: {{ concerts.genre }}</h4>
        <h4 id="desc">Description: {{ concerts.description }}</h4>
        <h4>Date of the Event: {{ concerts.date }}</h4>
        <h4>Price: {{ concerts.price }}</h4>
        <hr />
        <div v-if="token">
          <button type="button" class="btn btn-success" @click="redirect()">
            Reservation
          </button>
        </div>
        <div v-else>
          <button
            type="button"
            class="btn btn-danger"
            @click="redirectTologin()"
          >
            Reservation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConcertCard",
  props: {
    concerts: Object,
  },
  data() {
    return {
      token: localStorage.getItem("token"),
    };
  },
  methods: {
    redirect() {
      this.$router.push({
        name: "ConcertsDetails",
        query: {
          id: this.concerts._id,
        },
      });
    },

    redirectTologin() {
      this.$router.push("/login");
      this.$toast.error("Please, you must be login!", {
        position: "top-right",
      });
    },
  },
};
</script>
<style scoped>
#desc {
  overflow: auto;
}
.ConcertsCard {
  max-width: 800px;
  margin: 5px;
  border-radius: 10%;
  padding: 10px;
  box-sizing: border-box;
  background: #e9ebeb;
  color: rgb(0, 0, 0);
  margin-left: auto;
  margin-right: auto;
}

.ConcertsCard-header {
  font-weight: 600;
  text-align: center;
  margin-bottom: 50px;
}

.ConcertsCard-crawl {
  text-align: justify;
}

.ConcertsCard-title {
  text-align: center;
}

.ConcertsCard-grid {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 10px;
}

@media (min-width: 650px) {
  .ConcertsCard-grid {
    grid-auto-flow: column;
  }
}

div {
  display: block;
}

img {
  max-width: 200px;
  margin: 20px;
}

img:hover {
  transform: scale(1.25);
  border-radius: 10%;
  position: relative;
  z-index: 5;
}
</style>