<template>
  <div class="home">
    <div class="search-wrapper">
      <br />
      <input
        type="text"
        v-model="searchTitle"
        placeholder="Search title.."
        @input="filteredList()"
      />
      <input
        type="text"
        v-model="searchGenre"
        placeholder="Search genre.."
        @input="filteredList()"
      />
    </div>
    <ConcertCard
      v-for="(item, index) in resultSearch"
      v-bind:key="index"
      :concerts="item"
    />
  </div>
</template>


<script>
import ConcertCard from "@/components/ConcertCard";
import axios from "axios";

export default {
  name: "Home",
  components: {
    ConcertCard,
  },
  data() {
    return {
      listofConcerts: [],
      searchTitle: "",
      searchGenre: "",
      resultSearch: [],
    };
  },
  created() {
    this.getAllconcerts();
  },
  methods: {
    getAllconcerts() {
      axios.get(process.env.VUE_APP_ENDPOINT + "/concerts").then((response) => {
        this.listofConcerts = response.data;
        this.resultSearch = response.data;
        console.log(this.listofConcerts);
      });
    },
    filteredList() {
      if (this.searchTitle == "") {
        this.resultSearch = this.listofConcerts.filter((listofConcerts) => {
          return listofConcerts.genre
            .toLowerCase()
            .includes(this.searchGenre.toLowerCase());
        });
      } else if (this.searchGenre == "") {
        this.resultSearch = this.listofConcerts.filter((listofConcerts) => {
          return listofConcerts.title
            .toLowerCase()
            .includes(this.searchTitle.toLowerCase());
        });
      } else {
        this.resultSearch = this.listofConcerts.filter((listofConcerts) => {
          return listofConcerts.genre
            .toLowerCase()
            .includes(this.searchGenre.toLowerCase());
        });
        this.resultSearch = this.resultSearch.filter((resultSearch) => {
          return resultSearch.title
            .toLowerCase()
            .includes(this.searchTitle.toLowerCase());
        });
      }
    },
  },
};
</script>

<style>
</style>