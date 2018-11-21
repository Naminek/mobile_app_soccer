<template>
	<div class="d-flex justify-content-center flex-wrap">
		<div class="row" id="today_one_match" v-for="(match, index) in todayMatch" :key="index">
			<div class="col-3 pt-3">
				<img alt="team_icon" src="../assets/liverpool_logo.png">
				<p>{{ match.homeTeam.name }}</p>
			</div>
			<div class="col-6 text-center align-middle">
				<p class="pt-4">{{ match.score.fullTime.homeTeam }} - {{ match.score.fullTime.awayTeam }}</p>

			</div>
			<!-- <div class="col-3"></div> -->
			<div class="col-3 pt-3">
				<img alt="team_icon" src="../assets/chelsea_logo.png">
				<p>{{ match.awayTeam.name }}</p>
			</div>
			<div class="col-12 text-center align-middle" id="time_and_location">
				<p>Kick Off: <span>7:00 p.m.</span></p>
				<button class="btn" @click="ShowMap = true">Location: <span>Anfield, Liverpool</span></button>
				<div v-if="ShowMap">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.1050816941647!2d-2.963018684236881!3d53.43082937999687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21654b02538b%3A0x84576a57e21973ff!2z44Ki44Oz44OV44Kj44O844Or44OJ!5e0!3m2!1sja!2sde!4v1542128644694"
					width="95%" frameborder="0" style="border:0" allowfullscreen></iframe>
					<p @click="ShowMap = false" class="mt-1">&times; CLOSE</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "todayOneMatch",
		props: ["todayOneMatch"],
		data() {
			return {
				ShowMap: false,
				todayDate: "2018-11-24",
				// todayDate: "",
				homeTeamLogo: "",
				awayTeamLogo: "",
				todayMatch: null
			}
		},
		created() {
			// this.getToday(),
			this.todayMachData()
		},
		methods: {
			getToday() {
				var today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth()+1; //January is 0
				var yyyy = today.getFullYear();
				if(dd < 10) {
    				dd = '0' + dd;
				} 
				if(mm < 10) {
       				 mm = '0' + mm;
				} 
				this.todayDate = yyyy + '-' + mm + '-' + dd;
				console.log(this.todayDate);
			},
			todayMachData() {
				this.todayMatch = this.todayOneMatch.matchData.filter(match => (match.utcDate.includes(this.todayDate)));
				console.log(this.todayMatch)
			}
		}
	};
</script>

<style scoped>
	#today_one_match {
		border: solid 2px rgba(56, 55, 55, 0.7);
		margin: 35px 10% 0;
		height: auto;;
		padding: 0 20px;
		width: 100%;
	}

	#today_one_match img {
		width: 100%;
		margin: 2%;
	}

	#today_one_match div {
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


@media screen and (max-width:416px){
	#today_one_match p,
	#today_one_match button {
		font-size: 15px;
	}
}

@media screen and (min-width:416px) and (max-width:750px) {
	#today_one_match p,
	#today_one_match button {
		font-size: 20px;
	}
}
@media screen and (min-width:751px){
	#today_one_match p,
	#today_one_match button {
		font-size: 30px;
	}
}

</style>