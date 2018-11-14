<template>
  <div class="home">
    <HomeHeader />
    
    <div id="scroll">
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
        <div>
          <router-link to="/teamInformation">
            <img alt="soccer_icon" src="../assets/soccer_ball.png">
            <p>Team Information</p>
          </router-link>
        </div>
        <div>
          <router-link to="/schedule">
            <img alt="calender_icon" src="../assets/calendar.png">
            <p>Match Schedule</p>
          </router-link>
        </div>
        <div>
          <router-link to="/stadiumLocation">
            <img alt="stadium_icon" src="../assets/stadium.png">
            <p>Stadium Location</p>
          </router-link>
        </div>
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
@media screen and (max-width:415px) {
  .home {
    padding: 0;
    margin: 0;
  }

  #title p {
    width: 35%;
    border-bottom: solid 3px rgba(56, 55, 55, 0.7);
  }

  #logo img {
    width: 50%;
  }

  #scroll {
    padding-top: 100px;
  }

  #home_menu {
    padding: 60px 20%;
    display: flex;
		flex-direction: column;
		align-items: center;
  }


  #home_menu img {
    width: 15%;
    margin-right: 7%;
  }

  #home_menu div {
    margin-bottom: 35px;
    display: flex;
    justify-content: center;
  }

  #home_menu img,
  #home_menu p {
    display: inline-block;
    /* display: flex; */
		flex-direction: row;
		justify-content: center;
  }

  #home_menu p {
    font-size: 3vmax;
    color: #22313f;
  }
}


@media screen and (min-width:416px) {
  .home {
    padding: 0;
    margin: 0;
  }

  #title p {
    width: 40%;
    border-bottom: solid 3px rgba(56, 55, 55, 0.7);
  }

  #logo img {
    width: 45%;
  }

  #scroll {
    padding-top: 150px;
  }

  #home_menu {
    padding: 60px 20%;
    display: flex;
		flex-direction: column;
		align-items: center;
  }


  #home_menu img {
    width: 20%;
    margin-right: 7%;
  }

  #home_menu div {
    margin-bottom: 45px;
    display: flex;
    justify-content: center;
  }

  #home_menu img,
  #home_menu p {
    display: inline-block;
    /* display: flex; */
		flex-direction: row;
		justify-content: center;
  }

  #home_menu p {
    font-size: 25px;
    color: #22313f;
  }
}
</style>