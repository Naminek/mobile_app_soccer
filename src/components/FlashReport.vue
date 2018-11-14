<template>
	<div class="row d-flex justify-content-center" id="flash_report">
		<div class="col-3 pt-3">
			<img alt="team_icon" src="../assets/liverpool_logo.png">
		</div>
		<div class="col-6 text-center align-middle">
			<p class="h3 pt-4 mt-1">3 - 2</p>
			<!-- <p class="mt-2">7:00 pm</p> -->
			<p class="mt-3">end of match</p>
		</div>
		<!-- <div class="col-3"></div> -->
		<div class="col-3 pt-3">
			<img alt="team_icon" src="../assets/chelsea_logo.png">
		</div>
	</div>
</template>

<script>
	export default {
		name: "frashReport"
		// props: {
		//   msg: String
		// }
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#flash_report {
		border: solid 2px rgba(56, 55, 55, 0.7);
		margin: 30px 13% 40px;
		height: 130px;
		padding: 0 20px
	}

	#flash_report img {
		width: 100%;
	}

	#flash_report div {
		padding: 1px;
	}

	#flash_report div p {
		margin: 0;
	}
</style>