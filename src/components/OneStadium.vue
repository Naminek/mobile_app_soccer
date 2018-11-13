<template>
	<div id="one_stadium">
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
		name: "oneStadium"
		// props: {
		//   msg: String
		// }
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#one_stadium {
		margin: 50px 20%;
	}

	#one_stadium img {
		width: 40%;
		/* margin-right: 8%; */
	}

	#one_stadium div {
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