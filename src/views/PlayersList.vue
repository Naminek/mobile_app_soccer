<template>
	<div class="players_list pl-3 pr-3">
		<div v-if="isLoading" id="loading">
			<img src="#" alt="loading_icon">
			<p>now loading</p>
		</div>


		<div v-else id="scroll">
		<Header :header="teamDataInPlayersList.allData" />
			<p class="h4 d-flex justify-content-center pb-4 pt-5">{{ teamDataInPlayersList.oneTeam.name }}</p>
			<div class="d-flex justify-content-center" id="title">
				<p class="h4 d-flex justify-content-center pb-4"></p>

				<img alt="team_icon" :src="teamDataInPlayersList.oneTeam.crestUrl" class="mt-4">

			</div>
			<div id="search_engine" class="d-flex justify-content-center">
				<img src="../assets/scope.png" alt="search_icon">
				<input v-model="searchByName" type="text" placeholder="Search Player" name="search_member" size="15">
				<!-- <input type="text" placeholder="Search by Number" name="search_number" size="15"> -->
			</div>
			<div id="table_for_players">
				<table class="table table-bordered table-sm mt-4">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col"><select name="filter_by_position" v-model="selectedPosition">
									<option value="">Position &#9660;</option>
									<option v-for="(position, index) in positions" :key="index" v-bind:value="position">{{position}}</option>
								</select></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(player, index) in searchMember" :key="index">

							<td>{{player.name}}</td>
							<td>{{player.position}}</td>

						</tr>

					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from "@/components/Header.vue";

	export default {
		name: "playersList",
		components: {
			Header
		},
		data() {
			return {
				isLoading: true,
				players: null,
				positions: [],
				selectedPosition: "",
				searchByName: ""
			}
		},
		computed: {
			teamDataInPlayersList() {
				console.log(this.$route.params.dataToPass)
				return this.$route.params.dataToPass;
			},
			searchMember() {
				if (this.searchByName == "") {
					if (this.selectedPosition == "") {
						return this.players;
					} else {
						return this.players.filter(member => (member.position == this.selectedPosition))
					}
				} else {
					if (this.selectedPosition == "") {
						return this.players.filter(member => (member.name.toUpperCase().includes(this.searchByName.toUpperCase())));
					} else {
						var searchedName = this.players.filter(member => (member.name.toUpperCase().includes(this.searchByName.toUpperCase())));
						return searchedName.filter(member => (member.position == this.selectedPosition))
					}
				}
			}
		},
		created() {
			this.loadMembersData()
		},
		methods: {
			loadMembersData() {
				fetch("https://api.football-data.org/v2/teams/" + this.teamDataInPlayersList.oneTeam.id, {
						method: "GET",
						headers: {
							'X-Auth-Token': 'd4981822e10a4691932ae02cb2a9b25f',
							// 'Content-Type': 'application/json'
						}
					})
					.then(response => {
						return response.json();
					})
					.then(json => {
						this.players = json.squad;
						this.isLoading = false;
						this.makeFilter();
					})
					.catch(function (error) {
						console.log(error);
					});
			},
			makeFilter() {
				var playersPosition = this.players.map(oneplayer => oneplayer.position);
				var positionOrdered = new Set(playersPosition.sort(function (a, b) {
					return (b < a ? 1 : -1)
				}));
				this.positions = [...positionOrdered];
				// console.log(this.positions)
				console.log(this.teamDataInPlayersList.allData)
			},
			// makeObject() {
			// 	return [{"matchData": this.teamDataInPlayersList.allData.matchData,
			// 	"teamData": this.teamDataInPlayersList.allData.teamData}];
				
			// }
		}
	};
</script>

<style scoped>
	#title {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#title p {
		width: 40%;
		border-bottom: solid 3px rgba(56, 55, 55, 0.7);
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

	#search_engine input {
		width: 45%;
	}

	@media screen and (max-width:416px) {

		#title img {
			width: 40%;
		}

		#scroll p:first-child {
			font-size: 25px;
		}

		#scroll {
			padding-top: 120px;
		}


	}

	@media screen and (min-width:416px) and (max-width:750px) {

		#title img {
			width: 35%;
		}

		#scroll p:first-child {
			font-size: 30px;
		}

		#scroll {
			padding-top: 150px;
		}


	}

	@media screen and (min-width:751px) {

		#title img {
			width: 30%;
		}

		#scroll p:first-child {
			font-size: 35px;
		}

		#scroll {
			padding-top: 200px;
		}


	}
</style>