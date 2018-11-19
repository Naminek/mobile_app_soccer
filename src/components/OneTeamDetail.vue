<template>

	<div id="hidden_details">
		<p>City: <span>{{ oneTeamDetail.city }}</span></p>
		<router-link to="/playersList"><button type="button" class="btn btn-dark mb-1" :value="oneTeamDetail.name">players
				List</button></router-link>
		<a :href="oneTeamDetail.website" target="_blank" class="btn btn-dark mt-1">Official Website</a>
		<p @click="closeDetail()" class="mt-2">&times; CLOSE</p>
	</div>
</template>

<script>
	export default {
		name: "oneTeamDetail",
		props: ["oneTeamDetail"],
		data() {
			return {
				// hiddenDetails: false,
				// clickedTeam: []
			}
		},
		methods: {
			closeDetail() {
				var closeTeamDetail = document.getElementById('hidden_details');
				closeTeamDetail.style.display = "none";
			}
		}

	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#hidden_details {
		display: none;
	}

	/* #team_details {
		margin: 50px 15% 0;
	}



	#team_details div {
		margin-bottom: 25px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media screen and (max-width:416px) {
		#team_details img {
			width: 45%;
		}
		
		#team_details div p {
			font-size: 20px;
			margin-top: 10px;
		}

		#hidden_details {
			display: none;
		}

		#hidden_details p,
		#hidden_details button,
		#hidden_details a {
			font-size: 18px;
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
	} */
</style>