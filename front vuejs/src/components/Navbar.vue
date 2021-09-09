<template>
  <div id="nav">
    <button type="button" class="btn1">
      <router-link to="/" class="homerouter">Home</router-link>
    </button>
    <div v-if="!logged_in">
      <button @click="goToLogin()" class="btn">Login</button>
      <button @click="goToSignup()" class="btn">Signup</button>
    </div>
    <div v-else>
      <button @click="logOut()" class="btn">Log out</button>
      <button id="hello" type="button" class="btn btn-info">
        HELLO {{ username }}
      </button>
      <div v-if="admin == 1">
        <button @click="goToCrudUser()" class="btn1">CrudUser</button>
      </div>
      <div v-else>
        <button class="btn" @click="redirect()">Profil</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  emits: ["logout"],
  props: ["logged_in", "username", "admin"],
  data() {
    return {};
  },
  methods: {
    goToSignup() {
      this.$router.push("/signup");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    logOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      this.$toast.error("Vous etes déconnecté !");
      this.$emit("logout");
      this.$router.push("/login");
    },
    goToCrudUser() {
      if (localStorage.getItem("token")) {
        this.$router.push("/cruduser");
      } else {
        this.$router.push("/login");
      }
    },
    redirect() {
      this.$router.push({
        name: "UserProfile",
      });
    },
  },
};
</script>

<style scoped>
#hello {
  margin-left: 500px;
}
#nav {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 20px;
  height: 80px;
}

#nav a.router-link-exact-active {
  color: #e6e6df;
}
#nav {
  background-color: rgb(22, 22, 87);
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
.homerouter {
  font-size: 1em;
}
.btn1 {
  float: left;
  border-radius: 15px;
  background-color: white;
  color: black;
}

.btn {
  float: right;
  border-radius: 15px;
  background-color: white;
  margin-right: 5px;
}
</style>
