<template>
	<div class="players_list pl-3 pr-3">
		<div v-if="isLoading" id="loading">
      <img src="#" alt="loading_icon"><p>now loading</p>
    </div>

		<!-- <Header /> -->
		
		<div v-else id="scroll">
			<p class="h4 d-flex justify-content-center pb-4 pt-5">{{ teamDataInPlayersList.teamData.name }}</p>
			<div class="d-flex justify-content-center" id="title">
				<p class="h4 d-flex justify-content-center pb-4"></p>

				<img alt="team_icon" :src="teamDataInPlayersList.teamData.crestUrl" class="mt-4">

			</div>
			<div id="search_engine" class="d-flex">
				<img src="../assets/scope.png" alt="search_icon">
				<input type="text" placeholder="Search by Name" name="search_member" size="15">
				<input type="text" placeholder="Search by Number" name="search_number" size="15">
			</div>
			<div id="table_for_players">
				<table class="table table-bordered table-sm mt-4">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col"># Number</th>
							<th scope="col">Position</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(player, index) in players" :key="index">

							<td>{{player.name}}</td>
							<td>{{player.number}}</td>
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
				// players: [{
				// 		"name": "aaaaa",
				// 		"number": "1",
				// 		"position": "Forward"
				// 	},
				// 	{
				// 		"name": "bbbbb",
				// 		"number": "2",
				// 		"position": "Wide Midfield"
				// 	},
				// 	{
				// 		"name": "ccccc",
				// 		"number": "3",
				// 		"position": "Center Forward"
				// 	}
				// ]
				players: null
			}
		},
		computed: {
			teamDataInPlayersList() {
				return this.$route.params.dataToPass;
			}
		},
		created() {
			this.loadMembersData()
		},
		methods: {
			loadMembersData() {
				fetch("http://api.football-data.org/v2/teams/" + this.teamDataInPlayersList.id, {
						method: "GET",
						headers: {
							'X-Auth-Token': 'd4981822e10a4691932ae02cb2a9b25f',
							'Content-Type': 'application/json'
						}
					})
					.then(response => {
						return response.json();
					})
					.then(json => {
						this.players = json.squad;
						this.isLoading = false;
					})
					.catch(function (error) {
						console.log(error);
					});
			}
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