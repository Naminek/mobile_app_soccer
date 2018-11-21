<template>
	<div>

		<div id="search_engine" class="d-flex justify-content-center">
			<label for="search_team">
				<img src="../assets/scope.png" alt="search_icon"></label>
			<input type="text" v-model="searchTeamName" placeholder="search by team name" name="search_team">
		</div>
		<div id="team_details">
			<div v-for="(oneTeam, index) in searchTeam" :key="index">
				<div @click="showDetails(oneTeam)" data-toggle="modal" data-target="#exampleModalCenter">
					<img alt="team_icon" :src="oneTeam.crestUrl" class="mt-4">
					<p>{{ oneTeam.name }}</p>
				</div>
			</div>
			<OneTeamDetail v-if="whichTeamDetail" :oneTeamDetail="clickedTeam" :allData="teamDetails" />
		</div>
	</div>
</template>

<script>
	import OneTeamDetail from "@/components/OneTeamDetail.vue";
	export default {
		name: "teamDetails",
		props: ["teamDetails"],
		data() {
			return {
				clickedTeam: null,
				whichTeamDetail: false,
				pushedButton: "",
				searchTeamName: ""
			}
		},
		components: {
			OneTeamDetail
		},
		computed: {
			searchTeam() {
				if (this.searchTeamName == "") {
					return this.teamDetails.teamData;
				} else {
					// console.log(this.searchWords);
					return this.teamDetails.teamData.filter(team => (team.name.toUpperCase().includes(this.searchTeamName.toUpperCase())));
				}
			}
		},
		methods: {
			showDetails(oneTeam) {
				this.clickedTeam = oneTeam;
				console.log(this.clickedTeam);
				this.pushedButton = oneTeam.name;
				if (this.clickedTeam.name == this.pushedButton) {
					this.whichTeamDetail = true;
				}

				console.log(this.pushedButton);
			}
		}

	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#team_details {
		margin: 50px 15% 0;
	}



	#team_details div {
		margin-bottom: 25px;
		display: flex;
		flex-direction: column;
		align-items: center;
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

	/* #hidden_details {
		display: none;
	} */

	@media screen and (max-width:416px) {


		#team_details img {
			width: 45%;
		}

		#team_details div p {
			font-size: 20px;
			margin-top: 10px;
		}



		#hidden_details p,
		#hidden_details button,
		#hidden_details a {
			font-size: 18px;
		}

		input {
			font-size: 15px;
		}
	}

	@media screen and (min-width:416px) and (max-width:750px) {
		#team_details img {
			width: 38%;
		}

		#team_details div p {
			font-size: 25px;
			margin-top: 10px;
		}

		#hidden_details p,
		#hidden_details button,
		#hidden_details a {
			font-size: 20px;
		}

		input {
			font-size: 20px;
		}
	}

	@media screen and (min-width:751px) {
		#team_details img {
			width: 33%;
		}

		#team_details div p {
			font-size: 30px;
			margin-top: 10px;
		}

		#hidden_details p,
		#hidden_details button,
		#hidden_details a {
			font-size: 25px;
		}

		input {
			font-size: 25px;
		}
	}
</style>