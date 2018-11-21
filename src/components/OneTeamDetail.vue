<template>

	<div>
		<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
		aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content" id="modal">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalCenterTitle">{{ oneTeamDetail.name }}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-5">
								<img alt="team_icon" :src="oneTeamDetail.crestUrl" id="img_in_modal">
							</div>
							<div class="detail_contents col-7">
								<p>City: <span>{{ oneTeamDetail.city }}</span></p>
								<router-link :to="{ name: 'playersList', params: { dataToPass: this.oneTeamDetail } }">
									<button type="button" class="btn btn-dark" :value="oneTeamDetail.name" data-dismiss="modal">players List</button>
								</router-link>
								<a :href="oneTeamDetail.website" target="_blank" class="btn btn-dark">Official Website</a>
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
		props: ["oneTeamDetail", "allData"]

	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@media screen and (max-width:416px) {
		#img_in_modal {
		width: 80%;
		margin-left: 20%;
		margin-top: 20px;
	}

	.detail_contents {
		display: inline-block;
	}

	.detail_contents a {
		margin-top: 5px;
	}

	}

	@media screen and (min-width:416px) and (max-width:750px) {
		#img_in_modal {
		width: 65%;
		margin-left: 30%;
	}

	.detail_contents {
		display: inline-block;
		margin-top: 20px;
	}

	.detail_contents a {
		margin-left: 5px;
	}

	}

	@media screen and (min-width:751px) {
		#img_in_modal {
		width: 65%;
		margin-left: 30%;
	}

	.detail_contents {
		display: inline-block;
		margin-top: 20px;
	}

	.detail_contents a {
		margin-left: 5px;
	}

	}
</style>