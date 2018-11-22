<template>
	<div class="d-flex justify-content-center flex-wrap">
		<div class="d-flex justify-content-center">
			<label for="search_team">
				<img src="../assets/scope.png" alt="search_icon" id="search_icon"></label>
			<input type="text" placeholder="search by team" name="search_team" v-model="searchMatch" id="search_engine" />
			<div id="check_filter">
				<label><input type="checkbox" name="party" value="FINISHED" v-model="checkedMatch">Finished</label>
				<label><input type="checkbox" name="party" value="SCHEDULED" v-model="checkedMatch" class="ml-2">Upcoming</label>
			</div>
		</div>
		<div class="row" id="one_match" v-for="(eachMatch, index) in searchSchedule" :key="index">
			<div class="col-3 pt-3">
				<img :src="getHomeTeamLogo(eachMatch)" alt="team_icon">
				<p>{{ eachMatch.homeTeam.name }}</p>
			</div>
			<div class="col-6 text-center align-middle" id="result" v-if="eachMatch.status == 'FINISHED'">
				<p class="pt-4">{{ eachMatch.score.fullTime.homeTeam }} - {{ eachMatch.score.fullTime.awayTeam }}</p>
			</div>
			<div v-else class="col-6 text-center align-middle" id="scheduled">
				<p>Scheduled</p>
			</div>
			<div class="col-3 pt-3">
				<img alt="team_icon" :src="getAwayTeamLogo(eachMatch)">
				<p>{{ eachMatch.awayTeam.name }}</p>
			</div>
			<div class="col-12 text-center align-middle" id="time_and_location">
				<p>Date: <span>{{ eachMatch.utcDate }}</span></p>
				<button class="btn" data-toggle="modal" data-target="#myModal">Location<p>{{ getVenue(eachMatch) }}</p></button>
				<div class="modal" id="myModal">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-body">
								<!-- <iframe :src="getLocation(eachMatch)" width="95%" frameborder="0" style="border:0" allowfullscreen></iframe> -->
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
							</div>

						</div>
					</div>
				</div>
				<!-- <iframe :src="getLocation(eachMatch)"
					width="95%" frameborder="0" style="border:0" allowfullscreen></iframe>
					<p @click="ShowLocation = false" class="mt-1">&times; CLOSE</p> -->


			</div>
		</div>
	</div>
</template>

<script>
	// import EachMatchMap from "@/components/EachMatchMap.vue";
	export default {
		name: "oneMatchSchedule",
		props: ["oneMatchSchedule"],
		data() {
			return {
				ShowLocation: false,
				searchMatch: "",
				Location: "",
				checkedMatch: []
			}
		},
		computed: {
			searchSchedule() {
				if (this.searchMatch == "") {
					if (this.checkedMatch.length == 0) {
						return this.oneMatchSchedule.matchData;
					} else {
						return this.oneMatchSchedule.matchData.filter(match => (this.checkedMatch.includes(match.status)))
					}
				} else {
					if (this.checkedMatch.length == 0) {
						return this.oneMatchSchedule.matchData.filter(match => (match.awayTeam.name.toUpperCase().includes(this.searchMatch
								.toUpperCase()) ||
							match.homeTeam.name.toUpperCase().includes(this.searchMatch.toUpperCase())));
					} else {
						var searchedName = this.oneMatchSchedule.matchData.filter(match => (match.awayTeam.name.toUpperCase().includes(
								this.searchMatch.toUpperCase()) ||
							match.homeTeam.name.toUpperCase().includes(this.searchMatch.toUpperCase())));
						return searchedName.filter(match => (this.checkedMatch.includes(match.status)))
					}
				}
			}
		},
		methods: {
			getAwayTeamLogo(eachMatch) {
				const team = this.oneMatchSchedule.teamData
					.filter(el => el.name == eachMatch.awayTeam.name)
				// console.log(team[0].crestUrl)
				return team[0].crestUrl
			},
			getLocation(eachMatch) {
				const team1 = this.oneMatchSchedule.teamData
					.filter(el => el.name == eachMatch.homeTeam.name)
				return team1[0].map
			},
			getVenue(eachMatch) {
				const team2 = this.oneMatchSchedule.teamData
					.filter(el => el.name == eachMatch.homeTeam.name)
				return team2[0].venue
			},
			getHomeTeamLogo(eachMatch) {
				// console.log(eachMatch)
				// return "www.google.com"
				// this.oneMatchSchedule.teamData.forEach(el => {
				// 	if (el.name == eachMatch.homeTeam.name) {
				// 		// console.log(el.crestUrl)
				// 		return el.crestUrl
				// 		// el.crestUrl
				// 	}
				// })
				const team3 = this.oneMatchSchedule.teamData
					.filter(el => el.name == eachMatch.homeTeam.name)
				// console.log(team[0].crestUrl)
				return team3[0].crestUrl
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

	#time_and_location button {
		width: 80%;
	}

	#time_and_location p:first-child {
		margin-bottom: 0;
	}

	#time_and_location button span {
		word-break: break-all;
	}

	.btn {
		border: none;
		background-color: inherit;
		margin-bottom: 5px;
		color: #2c3e50;
	}

	/* #search_engine {
		margin-top: 50px;
	} */

	#search_engine {
		padding: 5px;
		margin: 50px 5px 0 5px;
		border: 1px solid rgba(56, 55, 55, 0.7);
		border-radius: 4px;
		width: 40%;
	}

	#check_filter {
		padding: 5px;
		margin: 50px 5px 0 5px;
		width: 40%;
	}

	#search_icon {
		padding: 5px;
		margin: 60px 5px 0 5px;
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

		#search_engine input:first-child {
			font-size: 15px;
		}

		#check_filter {
			display: flex;
			flex-direction: column;
			align-items: center;
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
			width: 40%;
		}

		#search_engine input:first-child {
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