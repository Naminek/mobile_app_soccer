<template>
	<div class="match_results pl-3 pr-3" id="top">
		<Header :header="dataInResults" />
		<div id="scroll">
			<p class="d-flex justify-content-center">Today's Match</p>
			<div class="d-flex justify-content-center" id="title">
				<p class="d-flex justify-content-center pb-4 mb-4"></p>
			</div>
			<div v-if="todayMatch">
			<TodayOneMatch :todayOneMatch="dataInResults" :todayOneDate="todayDate" />
			</div>
			<div v-else class="d-flex justify-content-center" id="no_match">
				<img alt="league_logo" src="../assets/premier_league_logo2.png">
				<p class="d-flex justify-content-center">No Match Today</p>
			</div>
			<!-- <p><a href="#top">&#x25B2; Back to Top</a></p> -->
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from "@/components/Header.vue";
	import TodayOneMatch from "@/components/TodayOneMatch.vue";

	export default {
		name: "matchResults",
		data() {
			return {
			todayDate: "",
			// todayDate: "2018-11-11",
			todayMatch: false
			}
		},
		components: {
			Header,
			TodayOneMatch,
		},
		computed: {
			dataInResults() {
				return this.$route.params.dataToPass;
			}
		},
		created() {
			this.getToday(),
			this.checkTodayMatch()
		},
		methods: {
			getToday() {
				var today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth() + 1; //January is 0
				var yyyy = today.getFullYear();
				if (dd < 10) {
					dd = '0' + dd;
				}
				if (mm < 10) {
					mm = '0' + mm;
				}
				this.todayDate = yyyy + '-' + mm + '-' + dd;
				console.log(this.todayDate);
			},
			checkTodayMatch() {
				this.dataInResults.matchData.forEach(el => {
					if (el.utcDate.includes(this.todayDate)) {
						this.todayMatch = true;
					}
				})
			},
		}
	};
</script>

<style scoped>
	#title p {
		width: 40%;
		border-bottom: solid 3px rgba(56, 55, 55, 0.7);
	}

	#scroll {
		padding-top: 150px;
		height: 100vh;
	}

	a {
		text-decoration: none;
		color: #22313f;
	}

	#no_match {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media screen and (max-width:416px){
	#top p:last-child {
		padding-top: 30px;
		font-size: 20px;
	}

	#scroll p:first-child {
		font-size: 25px;
	}
	
	#no_match img {
		width: 100%;
		margin-bottom: 0;
	}

	#no_match p {
		border: #22313f solid 2px;
		padding: 1em;
	}

}

@media screen and (min-width:416px) and (max-width:750px) {
	#top p:last-child {
		padding-top: 30px;
		font-size: 20px;
	}
	#scroll p:first-child {
		font-size: 30px;
	}

	#no_match img {
		width: 70%;
		margin-bottom: 0;
	}

	#no_match p {
		border: #22313f solid 2px;
		padding: 1em;
	}

	
}
@media screen and (min-width:751px){
	#top p:last-child {
		padding-top: 35px;
		font-size: 25px;
	}
	#scroll p:first-child {
		font-size: 35px;
	}
	#scroll {
		padding-top: 200px;
	}

	#no_match img {
		width: 60%;
		margin-bottom: 0;
	}

	#no_match p {
		border: #22313f solid 2px;
		padding: 1em;
	}
}
</style>