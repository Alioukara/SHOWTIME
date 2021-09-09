  <template>
  <div class="detailsCard">
    <a class="back" @click="$router.back()">Back</a>
    <h1 class="detailsCard-title">
      Artist / Group : {{ concert.artist }}
    </h1>
    <h1 class="detailsCard-title">
      Title : {{ concert.title }}
    </h1>
    <div class="detailsCard-grid">
      <img
        class="detailsCard-image"
        :src="require(`@/assets/${concert.picture}`)"
      />
      <div class="detailsCard-header">
        <h4>Genre: {{ concert.genre }}</h4>
        <h4>Description: {{ concert.description }}</h4>
        <h4>Date: {{ concert.date }}</h4>
        <h4>Price: {{ concert.price }}</h4>
      </div>
    </div>
    <button type="button" class="btn btn-success" @click="CreateReservation">
      BOOK
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      concert: {},
    }
  },
  created() {
    this.getOneConcert()
  },
  methods: {
    CreateReservation() {
      var axios = require("axios");
      this.$toast.success("Book Success !");
      var data = JSON.stringify({
        user_id: "",
        user_name: localStorage.getItem("username"),
        concert_id: this.concert.id,
        concert_title: this.concert.title,
      });

      var config = {
        method: "post",
        url: process.env.VUE_APP_ENDPOINT + "/reservations",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.$router.push(`/qrcode?id=${this.$route.query.id}`);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getOneConcert() {
      var axios = require("axios");
      var data = "";

      var config = {
        method: "get",
        url: `${process.env.VUE_APP_ENDPOINT}/concerts/${this.$route.query.id}`,
        headers: {},
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log(response.data);
          console.log('bonjour');
          this.concert = response.data
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.detailsCard {
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

.detailsCard-header {
  font-weight: 600;
  text-align: center;
  margin-bottom: 50px;
}

.detailsCard-crawl {
  text-align: justify;
}

.detailsCard-title {
  text-align: center;
}

.detailsCard-grid {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 10px;
}

@media (min-width: 650px) {
  .detailsCard-grid {
    grid-auto-flow: column;
  }
}
h3 {
  text-align: justify;
}

img {
  max-width: 190px;
  max-height: 280px;
  margin: 20px;
}

img:hover {
  transform: scale(1.25);
  border-radius: 10%;
  position: relative;
  z-index: 5;
}
.back {
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  letter-spacing: 0;

  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);

  /* Clip Background Image */

  background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y;
  -webkit-background-clip: text;
  background-clip: text;

  /* Animate Background Image */

  -webkit-text-fill-color: transparent;
  -webkit-animation: aitf 50s linear infinite;

  /* Activate hardware acceleration for smoother animations */

  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
}

@-webkit-keyframes aitf {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>