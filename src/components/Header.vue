<template>
	<div class="row header">
		<div class="col-6">
			<div id="logo" class="mb-3">
				<img alt="logo" src="../assets/premier-league-logo.png">
			</div>
		</div>
		<div class="col-6">
			<div class="d-flex justify-content-end header_icon">
				<router-link to="/">
					<img alt="home_icon" src="../assets/home.png">
				</router-link>
				<router-link to="/chatRoomLogin">
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
		name: "Header"
		// props: {
		//   msg: String
		// }
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/* .header_icon router-link { */
		/* width: 30%; */
		/* height: auto;
		object-fit: contain;
	} */
	.header {
		height: 10%;
	}

	#logo img {
		width: 90%;
		margin-top: 15px;
	}

	.header_icon img {
		width: 70%;
		/* padding-left:5px; */
	}

	.header_icon {
		margin-top: 50px;
		margin-left: 10px 
	}
</style>