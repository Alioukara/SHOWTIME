import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const routes = [
  {
    path: "/test",
    name: "test",

    component: () =>
      import(/* webpackChunkName: "test" */ "./views/test.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "./views/About.vue"),
  },
  {
    path: "/signup",
    name: "Signup",

    component: () =>
      import(/* webpackChunkName: "about" */ "./views/Signup.vue"),
  },
  {
    path: "/login",
    name: "Login",

    component: () =>
      import(/* webpackChunkName: "about" */ "./views/Login.vue"),
  },
  {
    path: "/concertsdetails",
    name: "ConcertsDetails",

    component: () =>
      import(/* webpackChunkName: "about" */ "./views/ConcertsDetails.vue"),
  },
  {
    path: "/cruduser",
    name: "cruduser",
    component: () =>
    import(/* webpackChunkName: "about" */ "./views/CrudUser.vue"),
},

{
    path: "/crudconcert",
    name: "crudconcert",
    component: () =>
    import(/* webpackChunkName: "about" */ "./views/CrudConcert.vue"),
},
{
    path: "/edituser",
    name: "EditUser",
    component: () =>
    import(/* webpackChunkName: "about" */ "./views/EditUser.vue"),
},
  {
    path: "/editconcert",
    name: "EditConcert",
    component: () =>
    import(/* webpackChunkName: "about" */ "./views/EditConcert.vue"),
  },
  {
    path: "/createuser",
    name: "CreateUser",
    component: () =>
    import(/* webpackChunkName: "about" */ "./views/CreateUser.vue"),
  },
  {
    path: "/createconcert",
    name: "CreateConcert",
    component: () =>
    import(/* webpackChunkName: "about" */ "./views/CreateConcert.vue"),
  },
    

  {
    path: "/crudreservation",
    name: "crudreservation",
    component: () =>
    import(/* webpackChunkName: "about" */ "./views/CrudReservation.vue"),
  },

  {
    path: "/userprofile",
    name: "UserProfile",

    component: () =>
      import(/* webpackChunkName: "about" */ "./views/UserProfile.vue"),
  },

  {
    path: "/qrcode",
    name: "qrcode",

    component: () =>
      import(/* webpackChunkName: "about" */ "./views/QrCode.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
