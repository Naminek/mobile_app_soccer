<template>
  <div class="home pl-3 pr-3">
    <HomeHeader />
    <router-link to="/matchResults">
    <FlashReport />
    </router-link>
    <div id="logo" class="mb-3">
      <img alt="logo" src="../assets/premier-league-logo.png" class="img-fluid mx-auto d-block mt-2">
    </div>
    <div class="d-flex justify-content-center" id="title">
      <p class="h1 d-flex justify-content-center pt-2 pb-3"></p>
    </div>
    <div id="home_menu">
    <div id="team_information">
      <router-link to="/teamInformation">
      <img alt="soccer_icon" src="../assets/soccer_ball.png">
      <p>Team Information</p>
      </router-link>
    </div>
    <div id="schedule">
      <router-link to="/schedule">
      <img alt="calender_icon" src="../assets/calendar.png">
      <p>Match Schedule</p>
      </router-link>
    </div>
    <div id="stadium_information">
      <router-link to="/stadiumLocation">
      <img alt="stadium_icon" src="../assets/stadium.png">
      <p>Stadium Location</p>
      </router-link>
    </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import FlashReport from "@/components/FlashReport.vue";
  import HomeHeader from "@/components/HomeHeader.vue";

  export default {
    name: "home",
    components: {
      HomeHeader,
      FlashReport
    }
  };
</script>

<style scoped>
  /* .home {
  background-color: bisque;
} */

  #title p {
    width: 35%;
    border-bottom: solid 3px rgba(56, 55, 55, 0.7);
  }

  #logo img {
    width: 45%;
  }

  #home_menu {
    margin: 60px 25%;
  }

  #home_menu img {
    width: 15%;
    margin-right: 7%;
  }

  #home_menu div{
    margin-bottom: 25px;
  }

  #home_menu img,
  #home_menu p {
    display: inline-block;
  }
</style>