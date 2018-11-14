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
				<button class="btn" @click="ShowMap = true">Location: <span>Anfield, Liverpool</span></button>
				<div v-if="ShowMap">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.1050816941647!2d-2.963018684236881!3d53.43082937999687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21654b02538b%3A0x84576a57e21973ff!2z44Ki44Oz44OV44Kj44O844Or44OJ!5e0!3m2!1sja!2sde!4v1542128644694"
					width="240" height="180" frameborder="0" style="border:0" allowfullscreen></iframe>
					<p @click="ShowMap = false" class="mt-1">&times; CLOSE</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "todayOneMatch",
		data() {
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
		color: #2c3e50;
	}
</style>