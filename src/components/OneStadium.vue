<template>
	<div id="one_stadium">
		<div>
			<img alt="team_icon" src="../assets/anfield.jpg">
			<p>Anfield, Liverpool</p>
		</div>
		<div>
			<img alt="team_icon" src="../assets/vitality_stadium.jpg">
			<p>Vitality Stadium, Bournemouth</p>
		</div>
		<div>
			<img alt="team_icon" src="../assets/amex.jpg">
			<p>The Amex, Brighton</p>
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
		margin: 50px 15%;
	}

	#one_stadium img {
		width: 100%;
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