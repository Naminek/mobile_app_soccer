<template>

	<div>
		<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
		aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalCenterTitle">{{ oneTeamDetail.name }}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-6">
						<img alt="team_icon" :src="oneTeamDetail.crestUrl" id="img_in_modal">
						</div>
						<div class="detail_contents col-6">
						<p>City: <span>{{ oneTeamDetail.city }}</span></p>
						<router-link to="/playersList"><button type="button" class="btn btn-dark mb-1" :value="oneTeamDetail.name">players
								List</button></router-link>
						<a :href="oneTeamDetail.website" target="_blank" class="btn btn-dark mt-1">Official Website</a>
						</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">close</button>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: "oneTeamDetail",
		props: ["oneTeamDetail"]

	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#img_in_modal {
		width: 40%;
	}

	#detail_contents {
		display: inline-block;
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