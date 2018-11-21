<template>
	<div class="d-flex justify-content-center flex-wrap">
		<div id="search_engine" class="d-flex justify-content-center">
				<label for="search_team">
					<img src="../assets/scope.png" alt="search_icon"></label>
				<input type="text" placeholder="search by team" name="search_team" size="15" v-model="searchMatch" />
				<input type="date" name="today" id="today" />
			</div>
		<div class="row" id="one_match" v-for="(eachMatch, index) in searchSchedule" :key="index">
			<div class="col-3 pt-3">
				<img alt="team_icon" v-bind:src="getHomeTeamLogo(eachMatch)">
				<p>{{ eachMatch.homeTeam.name }}</p>
			</div>
			<div class="col-6 text-center align-middle" id="result" v-if="eachMatch.status == 'FINISHED'">
				<p class="pt-4">{{ eachMatch.score.fullTime.homeTeam }} - {{ eachMatch.score.fullTime.awayTeam }}</p>
			</div>
			<div v-else class="col-6 text-center align-middle" id="scheduled">
				<p>Scheduled</p>
			</div>
			<div class="col-3 pt-3">
				<img alt="team_icon" v-bind:src="getAwayTeamLogo(eachMatch)">
				<p>{{ eachMatch.awayTeam.name }}</p>
			</div>
			<div class="col-12 text-center align-middle" id="time_and_location">
				<p>Kick Off: <span>{{ eachMatch.utcDate }}</span></p>
				<button class="btn" @click="ShowLocation = true">Location: <span>aaa</span></button>
				<div v-if="ShowLocation">
					<iframe v-bind:src="getLocation(eachMatch)"
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
				searchMatch: "",
				Location: ""

			}
		},
		computed: {
			searchSchedule() {
				if (this.searchMatch == "") {
					return this.oneMatchSchedule.matchData;
				} else {
					// console.log(this.searchWords);
					return this.oneMatchSchedule.matchData.filter(team => (team.awayTeam.name.toUpperCase().includes(this.searchMatch.toUpperCase())
					|| team.homeTeam.name.toUpperCase().includes(this.searchMatch.toUpperCase())));
				}
			}
		},
		methods: {
			getHomeTeamLogo(eachMatch) {
				this.oneMatchSchedule.teamData.forEach(el => {
					if (el.name == eachMatch.homeTeam.name) {
						return el.crestUrl
					}
				})
			},
			getAwayTeamLogo(eachMatch) {
				this.oneMatchSchedule.teamData.forEach(el => {
					if (el.name == eachMatch.awayTeam.name) {
						return el.crestUrl
					}
				})
			},
			getLocation(eachMatch) {
				this.oneMatchSchedule.teamData.forEach(el => {
					if (el.name == eachMatch.homeTeam.name) {
						return el.map
					}
				})
			},
			getVenue(eachMatch) {
				this.oneMatchSchedule.teamData.forEach(el => {
					if (el.name == eachMatch.homeTeam.name) {
						return el.venue
					}
				})
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

	#search_engine {
		margin-top: 50px;
	}

	#search_engine input {
		padding: 5px;
		margin: 0 5px;
		border: 1px solid rgba(56, 55, 55, 0.7);
		border-radius: 4px;
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

		#scheduled p {
			font-size: 18px;
			margin-top: 40px;
		}

		input {
			font-size: 15px;
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

		#scheduled p {
			font-size: 28px;
			margin-top: 60px;
		}

		input {
			font-size: 20px;
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

		#scheduled p {
			font-size: 35px;
			margin-top: 80px;
		}

		input {
			font-size: 25px;
		}
	}
</style>