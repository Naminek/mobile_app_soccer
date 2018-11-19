<template>
	<div id="team_details">
		<div v-for="(oneTeam, index) in teamDetails.teamData" :key="index">
			<div @click="showDetails(oneTeam)" data-toggle="modal" data-target="#exampleModalCenter">
				<img alt="team_icon" :src="oneTeam.crestUrl" class="mt-4">
				<p>{{ oneTeam.name }}</p>
			</div>
		</div>
<OneTeamDetail v-if="whichTeamDetail" :oneTeamDetail="clickedTeam" />

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
				pushedButton: ""
			}
		},
		components: {
			OneTeamDetail
		},
		methods: {
			showDetails(oneTeam) {
				this.clickedTeam = oneTeam;
				console.log(this.clickedTeam);
				this.pushedButton = oneTeam.name;
				if (this.clickedTeam.name == this.pushedButton){
					this.whichTeamDetail = true;
				}
				// console.log(this.whichTeamDetail);
					console.log(this.pushedButton);
			},
			// closeDetail() {
			// 	this.whichTeamDetail = false;
			// }
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
	}
</style>