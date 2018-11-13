<template>
	<div class="d-flex justify-content-center flex-wrap">
		<div class="row" id="today_one_match">
		<div class="col-3 pt-3">
			<img alt="team_icon" src="../assets/liverpool_logo.png">
		</div>
		<div class="col-6 text-center align-middle">
			<p class="h3 pt-4"> - </p>
			
		</div>
		<!-- <div class="col-3"></div> -->
		<div class="col-3 pt-3">
			<img alt="team_icon" src="../assets/chelsea_logo.png">
		</div>
		</div>
		<div class="row" id="time_and_location">
			<div class="col-12  text-center align-middle">
				<p>Kick Off: <span>7:00 p.m.</span></p>
				<button class="btn" @click="ShowMap = true">Location: <span>XXXXXXX</span></button>
				<div v-if="ShowMap" @close="ShowMap = false">google map</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "todayOneMatch",
		data(){
			return {
				ShowMap: false
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#today_one_match {
		border-top: solid 2px rgba(56, 55, 55, 0.7);
		border-right: solid 2px rgba(56, 55, 55, 0.7);
		border-left: solid 2px rgba(56, 55, 55, 0.7);
		margin: 30px 10% 0;
		height: 100px;
		padding: 0 20px;
	}

	#today_one_match img {
		width: 100%;
	}

	#today_one_match div {
		padding: 1px;
	}

	#time_and_location {
		border-bottom: solid 2px rgba(56, 55, 55, 0.7);
		border-right: solid 2px rgba(56, 55, 55, 0.7);
		border-left: solid 2px rgba(56, 55, 55, 0.7);
		margin: 0 10% 20px;
		width: 100%;
	}

	#time_and_location p:first-child {
		margin-bottom: 0;
	}

	.btn {
    border: none;
    background-color: inherit;
    margin-bottom: 5px;
}

</style>