<template>
	<div class="d-flex justify-content-center flex-wrap">
		<div class="row" id="one_match" v-for="(eachMatch, index) in oneMatchSchedule" :key="index">
			<div class="col-3 pt-3">
				<img alt="team_icon" src="../assets/liverpool_logo.png">
				<p>{{ eachMatch.homeTeam.name }}</p>
			</div>
			<div class="col-6 text-center align-middle" id="result">
				<p class="pt-4">{{ eachMatch.score.fullTime.homeTeam }} - {{ eachMatch.score.fullTime.awayTeam }}</p>

			</div>
			<div class="col-3 pt-3">
				<img alt="team_icon" src="../assets/chelsea_logo.png">
				<p>{{ eachMatch.awayTeam.name }}</p>
			</div>
			<div class="col-12 text-center align-middle" id="time_and_location">
				<p>Kick Off: <span>{{ eachMatch.utcDate }}</span></p>
				<button class="btn" @click="ShowLocation = true">Location: <span>Anfield, Liverpool</span></button>
				<div v-if="ShowLocation">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.1050816941647!2d-2.963018684236881!3d53.43082937999687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21654b02538b%3A0x84576a57e21973ff!2z44Ki44Oz44OV44Kj44O844Or44OJ!5e0!3m2!1sja!2sde!4v1542128644694"
					width="95%" frameborder="0" style="border:0" allowfullscreen></iframe>
					<p @click="ShowLocation = false" class="mt-1">&times; CLOSE</p>
				</div>

			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: "oneMatchSchedule",
		props: ["oneMatchSchedule"],
		data() {
			return {
				ShowLocation: false,
				// oneMatch: [{
				// 		"team1": "Liverpool",
				// 		"team2": "Chelsea",
				// 		"location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.1050816941647!2d-2.963018684236881!3d53.43082937999687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21654b02538b%3A0x84576a57e21973ff!2z44Ki44Oz44OV44Kj44O844Or44OJ!5e0!3m2!1sja!2sde!4v1542128644694"
				// 	},
				// 	{
				// 		"team1": "Chelsea",
				// 		"team2": "Huddersfield Town",
				// 		"location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.1050816941647!2d-2.963018684236881!3d53.43082937999687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21654b02538b%3A0x84576a57e21973ff!2z44Ki44Oz44OV44Kj44O844Or44OJ!5e0!3m2!1sja!2sde!4v1542128644694"
				// 	}
				// ]
			}
		}
	};
</script>

<style scoped>
	#one_match {
		border: solid 2px rgba(56, 55, 55, 0.7);
		margin: 35px 10% 0;
		height: auto;
		;
		padding: 0 20px;
		width: 100%;
	}

	#one_match img {
		width: 100%;
		margin: 2%;
	}

	#one_match div {
		padding: 1px;
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


	@media screen and (max-width:416px) {

		#one_match p,
		#one_match button {
			font-size: 15px;
		}
		#result p {
			padding-top: 10px;
			font-size: 30px;
		}
	}

	@media screen and (min-width:416px) and (max-width:750px) {

		#one_match p,
		#one_match button {
			font-size: 20px;
		}
		#result p {
			padding-top: 10px;
			font-size: 40px;
		}
	}

	@media screen and (min-width:751px) {

		#one_match p,
		#one_match button {
			font-size: 30px;
		}
		#result p {
			padding-top: 10px;
			font-size: 50px;
		}
	}
</style>