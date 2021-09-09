<template>
  <div>
    <a class="back" @click="$router.back()"
      ><img
        src="https://img.icons8.com/ios-filled/50/000000/circled-left-2.png"
    /></a>
    <body>
      <h1>Login</h1>
      <form @submit.prevent="loginUser">
        <br />

        <div>
          <label for="email">Name : </label>
          <br />
          <input
            v-model="email"
            type="text"
            required="required"
            placeholder="your name"
          />
        </div>

        <div>
          <br />
          <label for="password">Password : </label>
          <br />
          <input
            v-model="password"
            type="password"
            placeholder="your password"
            required="required"
          />
        </div>
        <br />

        <div>
          <button @click="loginUser" type="submit">Login</button>
        </div>
        <a href="/signup">You don't already have an account?</a>
      </form>
    </body>
  </div>
</template>

<script>
export default {
  name: "login",
  emits: ["login"],
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    loginUser() {
      var axios = require("axios");
      var data = JSON.stringify({
        username: this.email,
        password: this.password,
      });

      var config = {
        method: "post",
        url: process.env.VUE_APP_ENDPOINT + "/auth/login",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        data: data,
      };
      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          let token = response.data.access_token;
          let username = response.data.username;
          localStorage.setItem("token", token);
          localStorage.setItem("username", username);

          this.$toast.success("Connexion réussie!");
          this.getUserByName();
        })
        .catch((error) => {
          console.log(error);
          this.$toast.error("Connexion échouée");
        });
    },
    getUserByName() {
      var axios = require("axios");
      var data = "";
      var config = {
        method: "get",
        url:
          process.env.VUE_APP_ENDPOINT +
          "/users/" +
          localStorage.getItem("token"),
        headers: {},
        data: data,
      };
      axios(config)
        .then((response) => {
          console.log(response.data);
          this.$emit("login", response.data.admin, response.data.name);
          this.$router.push("/");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: black;
}

.enter {
  text-align: center;
}

form {
  text-align: center;
  color: white;
  max-width: 500px;
  max-height: 500px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(22, 22, 87);
  border-radius: 10px;
}

.container {
  background-color: #6fd9ff;
  width: 800px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}
a {
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  letter-spacing: 0;

  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);

  background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y;
  -webkit-background-clip: text;
  background-clip: text;

  -webkit-text-fill-color: transparent;
  -webkit-animation: aitf 50s linear infinite;

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
