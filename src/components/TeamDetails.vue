<template>
	<div id="team_details">
		<div v-for="(oneTeam, index) in teamDetails" :key="index">
			<img alt="team_icon" :src="oneTeam.crestUrl" @click="ShowDetails = true">
			<p class="h4">{{ oneTeam.name }}</p>
			<div v-if="ShowDetails" id="hidden_details">
				<p>City: <span>Liverpool</span></p>
				<router-link to="/playersList"><button type="button" class="btn btn-dark mb-1" :value="oneTeam.name">players List</button></router-link>
				<a :href="oneTeam.website" target="_blank" class="btn btn-dark mt-1">Official Website</a>
				<p @click="ShowDetails = false" class="mt-2">&times; CLOSE</p>
			</div>
		</div>
		<!-- <div>
			<img alt="team_icon" src="../assets/chelsea_logo.png">
			<p>Chelsea</p>
		</div>
		<div>
			<img alt="team_icon" src="../assets/huddersfield_town_logo.png">
			<p>Huddersfield Town</p>
		</div> -->
	</div>
</template>

<script>
	export default {
		name: "teamDetails",
		props: ["teamDetails"],
		data() {
			return {
				ShowDetails: false
			}
		}

	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#team_details {
		margin: 50px 20% 0;
	}



	#team_details div {
		margin-bottom: 25px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media screen and (max-width:416px) {
		#team_details img {
			width: 50%;
		}

		#hidden_details p,
		#hidden_details button,
		#hidden_details a {
			font-size: 18px;
		}
	}

	@media screen and (min-width:416px) and (max-width:750px) {
		#team_details img {
			width: 45%;
		}

		#hidden_details p,
		#hidden_details button,
		#hidden_details a {
			font-size: 20px;
		}
	}

	@media screen and (min-width:751px) {
		#team_details img {
			width: 40%;
		}

		#hidden_details p,
		#hidden_details button,
		#hidden_details a {
			font-size: 25px;
		}
	}
</style>