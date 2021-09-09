<template>
  <div>
    <a class="back" @click="$router.back()"
      ><img
        src="https://img.icons8.com/ios-filled/50/000000/circled-left-2.png"
    /></a>
    <body>
      <h1>Register</h1>
      <form class="signin" @submit.prevent="addUser">
        <div class="try">
          <div class="user">
            <label for="username">Name</label>
            <br />
            <input type="text" placeholder="Name" v-model="newUser.name" />
          </div>
          <div class="mail">
            <label for="email">Email</label><br />
            <input type="mail" placeholder="Email" v-model="newUser.email" />
          </div>

          <div class="password">
            <label for="password">Password</label><br />
            <input
              type="password"
              placeholder="Password"
              v-model="newUser.password"
            />
          </div>
        </div>
        <button type="submit" class="button">Submit</button>
        
      </form>
    </body>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Signup",
  emits: ["login"],
  data() {
    return {
      newUser: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    addUser() {
      axios
        .post(process.env.VUE_APP_ENDPOINT + "/users", {
          name: this.newUser.name,
          email: this.newUser.email,
          password: this.newUser.password,
        })
        .then((response) => {
          response.data;
          let token = response.data.access_token;
          let username = response.data.username;
          localStorage.setItem("token", token);
          localStorage.setItem("username", username);
          this.$toast.success("Connexion réussie!");
          this.$emit("login");
          this.$router.push("/");
          console.log("call1");
        })
        .catch(() => {
          console.log("call2");
          this.$toast.error("name or email already in use");
        });
    },
  },
};
</script>
<style scoped>
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

h1 {
  text-align: center;
  color: black;
}

form {
  text-align: center;
  color: white;
  max-width: 500px;
  max-height: 500px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(22, 22, 87);

  border: 1px solid black;
  border-radius: 10px;

  box-shadow: #6fd9ff;
}

.try {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5px;
  margin: 5px auto;
}

.user {
  grid-column: 1/2;
  grid-row: 1;
}
.mail {
  grid-column: 1/2;
  grid-row: 2;
}

.password {
  grid-row: 3;
}

input {
  width: 50%;
  display: inline-block;
  margin: 5px auto;
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