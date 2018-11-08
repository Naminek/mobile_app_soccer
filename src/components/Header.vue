<template>
	<div class="row">
		<div class="col-8">
			<div id="logo" class="mb-3">
				<img alt="logo" src="../assets/premier-league-logo.png">
			</div>
		</div>
		<div class="col-4">
			<div class="d-flex justify-content-end header_icon">
				<!-- <router-link to="/"> -->
					<img alt="home_icon" src="../assets/home.png">
				<!-- </router-link> -->
				<img alt="chat_icon" src="../assets/chat.png" class="ml-1">
				<img alt="menu_icon" src="../assets/menu_bar.png" class="ml-1">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header"
		// props: {
		//   msg: String
		// }
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header_icon img {
		width: 35%;
		height: auto;
		object-fit: contain;
	}

	#logo img {
		width: 60%;
		margin-top: 15px;
	}
</style>