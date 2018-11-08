<template>
  <div class="row">
    <div class="col-8">
    </div>
    <div class="col-4">
	    <div class="d-flex justify-content-end header_icon">
        <img alt="chat_icon" src="../assets/chat.png">
		    <img alt="menu_icon" src="../assets/menu_bar.png" class="ml-1">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
  // props: {
  //   msg: String
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header_icon img {
  width: 50%;
  height: auto;
  object-fit: contain;
}
</style>
