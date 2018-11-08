<template>
	<div class="row d-flex align-items-center" id="flash_report">
		<div class="col-3">
			<img alt="team_icon" src="../assets/liverpool_logo.png">
		</div>
		<div class="col-6"></div>
		<!-- <div class="col-3"></div> -->
		<div class="col-3">
			<img alt="team_icon" src="../assets/chelsea_logo.png">
		</div>
	</div>
</template>

<script>
	export default {
		name: "FrashReport"
		// props: {
		//   msg: String
		// }
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#flash_report {
	border: solid 2px rgba(56, 55, 55, 0.7);
	margin: 0 15% 40px;
	height: 80px;
	padding: 0 20px
}	

#flash_report img{
	width: 100%;
}

#flash_report div {
	padding: 0;
}
</style>