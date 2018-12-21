<template>
  <div id="app">
    <!-- <div v-if="isLoading" id="loading">
    </div>
    <div v-else id="container">
    <router-link :to="{ name: 'schedule', params: { dataToPass: this.matchData } }"></router-link> -->
    <router-view />
    <!-- </div> -->
  </div>
</template>

<script>
  export default {
    // data(){
    //   return {
    //     matchData: [],
    //     isLoading: true
    //   }
    // },
    // created() {
    //   this.getMatchData();
    // },
    // methods: {
    //   getMatchData() {
    //     fetch("//api.jsonbin.io/b/5beda08b18a56238b6f6e74d", {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json"
    //       }
    //     })
    //       .then(response => {
    //         return response.json();
    //       })
    //       .then(json => {
    //         this.matchData = json.matches;
    //         this.isLoading = false;
    //         console.log(this.matchData);
    //       })
    //       .catch(function(error) {
    //         console.log(error);
    //       });
    // 	}
    // }
  }
</script>


<style>
  @media screen and (max-width:416px) {
    #app::before {
      background: url("./assets/one_shoes_v.jpg") no-repeat left top;
      background-size: 100% 100vh;
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      padding-bottom: 108px;
      content: "";
      z-index: -1;
    }

    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #22313f;
      background-color: rgba(250, 233, 239, 0.7);
      padding: 0 0 40px;
      width: 100%;
      height: 100vh;
      /* min-height: 812px; */
      /* /* background-size: cover; */
      /* background-repeat: no-repeat; */
      /* background-attachment: fixed; */
      background-blend-mode: screen;
    }
  }

  @media screen and (min-width:416px) {
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #22313f;
      background-color: rgba(250, 233, 239, 0.7);
      padding: 0 0 40px;
      background-image: url("./assets/one_shoes_h.jpg");
      height: 100%;
      min-height: 1025px;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-blend-mode: screen;
    }
  }
</style>