<template>
	<div class="d-flex justify-content-center flex-wrap">
		<div class="row" id="today_one_match" v-for="(match, index) in todayMatch" :key="index">
			<div class="col-4 pt-3">
				<img alt="team_icon" :src="getHomeTeamLogo(match)">
				<p>{{ match.homeTeam.name }}</p>
			</div>
			<div class="col-4 text-center align-middle">
				<p id="score">{{ match.score.fullTime.homeTeam }} - {{ match.score.fullTime.awayTeam }}</p>

			</div>
			<!-- <div class="col-3"></div> -->
			<div class="col-4 pt-3">
				<img alt="team_icon" :src="getAwayTeamLogo(match)">
				<p>{{ match.awayTeam.name }}</p>
			</div>
			<div class="col-12 text-center align-middle" id="time_and_location">
				<p>Kick Off: {{ match.utcDate }}</p>
				<!-- <button class="btn" @click="ShowMap = true">Location: <p>{{getVenue(match)}}</p></button>
				<div v-if="ShowMap">
					<iframe :src="getMap(match)"
					width="95%" frameborder="0" style="border:0" allowfullscreen></iframe>
					<p @click="ShowMap = false" class="mt-1">&times; CLOSE</p>
				</div> -->
				<button class="btn" data-toggle="modal" data-target="#myModal">Location<p>{{ getVenue(match) }}</p></button>
				<div class="modal" id="myModal">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-body">
								<iframe :src="getMap(match)" width="95%" frameborder="0" style="border:0" allowfullscreen></iframe>
							</div>

							<div class="modal-footer">
								<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "todayOneMatch",
		props: ["todayOneMatch", "todayOneDate"],
		data() {
			return {
				ShowMap: false,
				homeTeamLogo: "",
				awayTeamLogo: "",
				todayMatch: null
			}
		},
		created() {
			this.todayMachData(),
			this.changeDate()
		},
		methods: {
			todayMachData() {
				this.todayMatch = this.todayOneMatch.matchData.filter(match => (match.utcDate.includes(this.todayOneDate)));
				console.log(this.todayMatch)
			},
			getHomeTeamLogo(match) {
				const hometeam = this.todayOneMatch.teamData
					.filter(el => el.name == match.homeTeam.name)
				return hometeam[0].crestUrl
			},
			getAwayTeamLogo(match) {
				const awayteam = this.todayOneMatch.teamData
					.filter(el => el.name == match.awayTeam.name)
				return awayteam[0].crestUrl
			},
			getVenue(match) {
				const venues = this.todayOneMatch.teamData
					.filter(el => el.name == match.homeTeam.name)
				return venues[0].venue
			},
			getMap(match) {
				const maps = this.todayOneMatch.teamData
					.filter(el => el.name == match.homeTeam.name)
				return maps[0].map
			},
			changeDate() {
			this.todayMatch.map(match => match.utcDate = new Date(match.utcDate).toLocaleString());
			}
		}
	};
</script>

<style scoped>
	#today_one_match {
		border: solid 2px rgba(56, 55, 55, 0.7);
		margin: 35px 10% 0;
		height: auto;
		;
		padding: 0 20px;
		width: 100%;
	}

	#today_one_match img {
		width: 80%;
		margin: 2% 10%;
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


	@media screen and (max-width:416px) {

		#today_one_match p:not(#score),
		#today_one_match button {
			font-size: 15px;
		}

		#score {
			font-size: 30px;
			margin-top: 40px;
		}

		#myModal {
			position: fixed;
			top: 30%;
		}
	}

	@media screen and (min-width:416px) and (max-width:750px) {

		#today_one_match p:not(#score),
		#today_one_match button {
			font-size: 20px;
		}

		#score {
			font-size: 50px;
			margin-top: 40px;
		}

		#myModal {
			position: fixed;
			top: 15%;
		}
	}

	@media screen and (min-width:751px) {

		#today_one_match p:not(#score),
		#today_one_match button {
			font-size: 30px;
		}

		#score {
			font-size: 70px;
			margin-top: 40px;
		}

		#myModal {
			position: fixed;
			top: 30%;
		}
	}
</style>