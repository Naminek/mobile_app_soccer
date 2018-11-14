<template>
	<div class="row d-flex justify-content-center" id="flash_report">
		<div class="col-3">
			<img alt="team_icon" src="../assets/liverpool_logo.png">
		</div>
		<div class="col-6 text-center align-middle" id="result">
			<p>3 - 2</p>

		</div>
		<div class="col-3">
			<img alt="team_icon" src="../assets/chelsea_logo.png">
		</div>
		<div class="col-12 text-center align-middle" id="end_of_match">
			<p>End of Match</p>
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
		height: auto;
		padding: 20px 20px
	}

	#flash_report img {
		width: 100%;
		margin: 2%;
	}

	#flash_report div {
		padding: 1px;
	}

	#flash_report div p {
		margin: 0;
	}

	p {
		color: #22313f;
	}

	@media screen and (max-width:416px) {
		#result p {
			padding-top: 10px;
			font-size: 30px;
		}

		#end_of_match p {
			font-size: 15px;
		}

	}

	@media screen and (min-width:416px) and (max-width:750px) {
		#result p {
			padding-top: 30px;
			font-size: 40px;
		}

		#end_of_match p {
			font-size: 20px;
		}
	}

	@media screen and (min-width:751px) {

		#result p {
			padding-top: 50px;
			font-size: 50px;
		}

		#end_of_match p {
			font-size: 25px;
		}
	}
</style>