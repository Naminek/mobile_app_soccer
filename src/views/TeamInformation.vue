<template>
	<div class="pl-3 pr-3" id="top">
		<Header />
		<div id="scroll">
			<p class="d-flex justify-content-center pt-5">Team Information</p>
			<div class="d-flex justify-content-center" id="title">
				<p class="d-flex justify-content-center pb-4"></p>
			</div>
			<div id="search_engine" class="d-flex justify-content-center">
				<label for="search_team">
					<img src="../assets/scope.png" alt="search_icon"></label>
				<input type="text" v-model="searchTeamName" placeholder="search by team name" name="search_team">
			</div>
			<TeamDetails :teamDetails="teamDataInTeamInformation" />
			<p><a href="#top">&#x25B2; Back to Top</a></p>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from "@/components/Header.vue";
	import TeamDetails from "@/components/TeamDetails.vue";

	export default {
		name: "teamInformation",
		data() {
			return {
				searchTeamName: ""
			}
		},
		components: {
			Header,
			TeamDetails
		},
		computed: {
			teamDataInTeamInformation() {
				// console.log("111" + this.$route.params.dataToPass)
				if (this.searchTeamName == "") {
				return this.$route.params.dataToPass;
			} else {
				// console.log(this.searchWords);
				return this.$route.params.dataToPass.filter
				(team => (team.name.toUpperCase().includes(this.searchTeamName.toUpperCase()) 
				));
			}
			}
		}
	};
</script>

<style scoped>
	#title p {
		width: 40%;
		border-bottom: solid 3px rgba(56, 55, 55, 0.7);
	}

	#search_engine {
		margin-top: 50px;
	}


	#scroll {
		padding-top: 150px;
	}

	#search_engine input {
		padding: 5px;
		margin: 0 5px;
		border: 1px solid rgba(56, 55, 55, 0.7);
		border-radius: 4px;
	}

	a {
		text-decoration: none;
		color: #22313f;
	}

	@media screen and (max-width:416px) {
		#top p:last-child {
			padding-top: 30px;
			font-size: 20px;
		}

		#scroll p:first-child {
			font-size: 25px;
		}

		input {
			font-size: 15px;
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

		input {
			font-size: 20px;
		}
	}

	@media screen and (min-width:751px) {
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

		input {
			font-size: 25px;
		}
	}
</style>