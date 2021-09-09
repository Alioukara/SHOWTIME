<template>
  <div>HELLO</div>
  <img :src="(`https://image.tmdb.org/t/p/w500${image}`)" alt="">


  


  
</template>

<script>
export default {
    data() {
    return {
      image: "",
      
    }
    },

created(){
    this.getfilm()
},
    methods: {
        getfilm() {
            var axios = require('axios');


var config = {
  method: 'get',
  url: 'http://localhost:8000/movies/588228',
  headers: { 
    'Content-Type': 'application/json'
  },
 
};

axios(config)
.then((response) => {
        this.image = response.data.backdrop_path;

  console.log(this.image);

})
.catch(function (error) {
  console.log(error);
});


        }
    }

}
</script>

<style>

</style>