<template>
  <div class="home pl-3 pr-3">
    <HomeHeader />

<div class="d-flex justify-content-center" id="title">
    <p class="h1 d-flex justify-content-center pb-3">Title</p>
    </div>
    <div id="logo">
    <img alt="logo" src="../assets/premier_league_logo.png"
    class="img-fluid mx-auto d-block mt-2">
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HomeHeader from "@/components/HomeHeader.vue";

  export default {
    name: "home",
    components: {
      HomeHeader
    }
  };
</script>

<style scoped>
/* .home {
  background-color: bisque;
} */

#title p {
  width: 50%;
  border-bottom: solid 3px rgba(56, 55, 55, 0.7);
}
#logo img{
  width: 25%;
}

</style>