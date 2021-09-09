<template>
  <div>
    <NavBar
      :logged_in="logged_in"
      :username="username"
      :admin="admin"
      @logout="handleLogout"
    />
    <router-view @login="handleLogin" />
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";

export default {
  name: "App",
  data() {
    return {
      logged_in: false,
      username: "",
      admin: "",
    };
  },
  components: {
    NavBar,
  },
  methods: {
    handleLogin(admin, username) {
      this.logged_in = true;
      this.admin = admin;
      this.username = username;
    },
    handleLogout() {
      this.logged_in = false;
    },
  },
  created() {
    if (localStorage.getItem("token")) {
      this.logged_in = true;
    }
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
