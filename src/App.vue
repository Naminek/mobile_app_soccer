<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {

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
      background-attachment: fixed;
      padding: 0 0 40px;
      width: 100%;
      height: auto;
      background-blend-mode: screen;
    }
  }

  @media screen and (min-width:416px) {
    #app::before {
      background: url("./assets/one_shoes_h.jpg") no-repeat left top;
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
      /* background-attachment: fixed; */
      padding: 0 0 40px;
      width: 100%;
      height: auto;
      background-blend-mode: screen;
    }
    
  }
</style>