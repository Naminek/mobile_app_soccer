<template>
  <div class="row home_header">
    <div class="col-7">
    </div>
    <div class="col-5">
      <div class="d-flex justify-content-end header_icon">
        <router-link to="/chatRoomLogin" class="mr-3">
          <img alt="chat_icon" src="../assets/chat.png">
        </router-link>
        <div id="menu_bar">
          <img alt="menu_icon" src="../assets/menu_bar.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "homeHeader"
    // props: {
    //   msg: String
    // }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header_icon img {
    width: 40px;
    height: auto;
    object-fit: contain;
  }

  .header_icon {
    margin: 30px 0px 30px 25px;
  }

  .home_header {
    /* background-color: rgba(250, 233, 239, 0.6); */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 24;
    width: 100%;
    margin: 0;
  }
</style>