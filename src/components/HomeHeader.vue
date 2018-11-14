<template>
<div class="home_header">
  <div class="row">
    <div class="col-7">
    </div>
    <div class="col-5">
      <div class="d-flex justify-content-end header_icon">
        <router-link to="/chatRoomLogin" class="mr-3">
          <img alt="chat_icon" src="../assets/chat.png">
        </router-link>
        <div id="menu_bar" class="nav-item dropdown">
          <img alt="menu_icon" src="../assets/menu_bar.png" @click="ShowMenuBar = true">
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-2" v-if="ShowMenuBar">
    <div class="col-6"></div>
    <div class="col-6">
      <ul class="balloon">
        <router-link to="/TeamInformation"><li>Team Information</li></router-link>
        <router-link to="/Schedule"><li>Match Schedule</li></router-link>
        <router-link to="/StadiumLocation"><li>Stadium Location</li></router-link>
      </ul>
      <p @click="ShowMenuBar = false" class="mt-1 d-flex justify-content-end">&times; CLOSE</p>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "homeHeader",
    data(){
      return {
        ShowMenuBar: false
      }
    }
    
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
    background-color: rgba(250, 233, 239, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 24;
    width: 100%;
    margin: 0;
    padding: 0 10px 0 0;
  }

  ul {
    list-style-type: none;
    margin: 0 20px 0 0;
    padding: 10px 0;
    width: 200px;
    /* background-color: #f1f1f1; */
}

li {
    display: block;
    color: #22313f;
    padding: 10px 16px;
    /* text-decoration: none; */
    /* border: solid 1px #22313f;
    border-collapse: collapse; */
}

li:active {
    background-color: #ca8888;
    /* color: white; */
}

/* .menu {
  padding: 20px;
} */

.balloon{
  position: relative;
  /* padding: 20px; */
  background-color: #ffadad;
  border: 2px solid #ca8888;
  /* margin-right: 5px; */
  width: 100%;
  /* opacity:1; */
  /* -webkit-transform: scale(1);
  -moz-transform:scale(1);
  -o-transform:scale(1);
  transform:scale(1);
  -webkit-transition-delay: 1s;
	-moz-transition-delay: 1s;
	-o-transition-delay: 1s;
	-ms-transition-delay: 1s;
	transition-delay: 1s;
    -webkit-transition:1s;
  -moz-transition:1s;
  -o-transition:1s;
  transition:1s; */
}

.balloon::before{
  content: '';
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  right: 20px;
  top: -15px;
  border-right: 15px solid transparent;
  border-bottom: 15px solid #ca8888;
  border-left: 15px solid transparent;
}

.balloon::after{
  content: '';
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  right: 20px;
  top: -12px;
  border-right: 15px solid transparent;
  border-bottom: 15px solid #ffadad;
  border-left: 15px solid transparent;
}

</style>