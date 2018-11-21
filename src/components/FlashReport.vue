<template>
<div id="flash_report">
	<div class="d-flex justify-content-center">
		<p>Today's Match</p>
	</div>
	<div v-if="todayMatch" v-for="(match, index) in todayAllMatch" :key="index" class="row d-flex justify-content-center">
		<div class="col-5">
			<p>{{ match.homeTeam.name }}</p>
		</div>
		<div class="col-2 text-center align-middle" id="result">
			<p>-</p>
		</div>
		<div class="col-5">
			<p>{{ match.awayTeam.name }}</p>
		</div>
		<!-- <div class="col-12 text-center align-middle" id="end_of_match">
			<p>End of Match</p>
		</div> -->
	</div>
	<div v-else class="d-flex justify-content-center">
		<p>No Match Today</p>
	</div>
	</div>
</template>

<script>
	export default {
		name: "frashReport",
		props: ["flashReport"],
		data() {
			return{
				// todayDate: "",
				todayDate: "2018-11-24",
				todayMatch: false,
				todayAllMatch: null
			}
		},
		created() {
			// this.getToday(),
			this.checkTodayMatch(),
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
			checkTodayMatch() {
				this.flashReport.matchData.forEach(el => {
					if (el.utcDate.includes(this.todayDate)) {
						this.todayMatch = true;
					}
				})
			},
			todayMachData() {
				this.todayAllMatch = this.flashReport.matchData.filter(match => (match.utcDate.includes(this.todayDate)));
				console.log(this.todayAllMatch)
			}
		}
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
			/* padding-top: 10px; */
			font-size: 30px;
		}

		#end_of_match p {
			font-size: 15px;
		}

	}

	@media screen and (min-width:416px) and (max-width:750px) {
		#result p {
			/* padding-top: 30px; */
			font-size: 40px;
		}

		#end_of_match p {
			font-size: 20px;
		}
	}

	@media screen and (min-width:751px) {

		#result p {
			/* padding-top: 50px; */
			font-size: 50px;
		}

		#end_of_match p {
			font-size: 25px;
		}
	}
</style>