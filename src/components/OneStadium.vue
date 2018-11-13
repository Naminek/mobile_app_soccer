<template>
	<div id="one_stadium">
		<div>
			<div @click="ShowBalloonMap = true">
			<img alt="team_icon" src="../assets/anfield.jpg">
			<p>Anfield, Liverpool</p>
			</div>
			<div class="balloon_map" v-if="ShowBalloonMap">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.1050816941647!2d-2.963018684236881!3d53.43082937999687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21654b02538b%3A0x84576a57e21973ff!2z44Ki44Oz44OV44Kj44O844Or44OJ!5e0!3m2!1sja!2sde!4v1542128644694"
					width="240" height="180" frameborder="0" style="border:0" allowfullscreen></iframe>
					<p @click="ShowBalloonMap = false" class="mt-1">&times; CLOSE</p>
			</div>
		
		</div>
		<!-- <div>
			<img alt="team_icon" src="../assets/vitality_stadium.jpg">
			<p>Vitality Stadium, Bournemouth</p>
		</div>
		<div>
			<img alt="team_icon" src="../assets/amex.jpg">
			<p>The Amex, Brighton</p>
		</div> -->
	</div>
</template>

<script>
	export default {
		name: "oneStadium",
		data(){
			return {
				ShowBalloonMap: false
			}
		}
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

	#one_stadium div:first-child {
		margin: 25px 0 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#one_stadium div:nth-child(2){
		margin: 0 0 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.balloon_map {
		position: relative;
	display: inline-block;
 	margin: 10px 0;
	padding: 7px 10px;
	min-width: 250px;
 	max-width: 100%;
 	color: #22313f;
	font-size: 16px;
	/* background: #FFF; */
 	border: solid 3px #22313f;
 	box-sizing: border-box;
	}

	.balloon_map::before {
		content: "";
	position: absolute;
	top: -24px;
	left: 50%;
 	margin-left: -15px;
	border: 12px solid transparent;
	border-bottom: 12px solid;
 	z-index: 2;
	 margin-top: 0;
	}

	/* #teams img,
	#teams p {
		display: inline-block;
	} */
</style>