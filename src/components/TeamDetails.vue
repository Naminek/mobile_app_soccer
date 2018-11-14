<template>
	<div id="team_details">
		<div>
			<img alt="team_icon" src="../assets/liverpool_logo.png" @click="ShowDetails = true">
			<p class="h4">Liverpool</p>
			<div v-if="ShowDetails">
				<p>City: <span>Liverpool</span></p>
				<button type="button" class="btn btn-dark mb-1">players</button>
				<a href="#" class="btn btn-dark">Official Website</a>
				<p @click="ShowDetails = false" class="mt-1">&times; CLOSE</p>
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

	#team_details img {
		width: 50%;
		/* margin-right: 8%; */
	}

	#team_details div {
		margin-bottom: 25px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* #teams img,
	#teams p {
		display: inline-block;
	} */
</style>