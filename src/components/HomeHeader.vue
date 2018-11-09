<template>
  <div class="row home_header">
    <div class="col-8">
    </div>
    <div class="col-4">
	    <div class="d-flex justify-content-end header_icon">
        <router-link to="">
        <img alt="chat_icon" src="../assets/chat.png">
        </router-link>
        <div id="menu_bar">
		    <img alt="menu_icon" src="../assets/menu_bar.png" class="ml-1">
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
  width: 80%;
  height: auto;
  object-fit: contain;
}

.header_icon {
  margin: 30px 0;
}

</style>
