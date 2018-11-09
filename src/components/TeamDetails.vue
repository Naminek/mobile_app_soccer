<template>
	<div id="team_details">
		<div>
			<img alt="team_icon" src="../assets/liverpool_logo.png">
			<p>Liverpool</p>
		</div>
		<div>
			<img alt="team_icon" src="../assets/chelsea_logo.png">
			<p>Chelsea</p>
		</div>
		<div>
			<img alt="team_icon" src="../assets/huddersfield_town_logo.png">
			<p>Huddersfield Town</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "teamDetails"
		// props: {
		//   msg: String
		// }
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#team_details {
		margin: 50px 20%;
	}

	#team_details img {
		width: 40%;
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