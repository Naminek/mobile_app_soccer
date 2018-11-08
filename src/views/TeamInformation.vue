<template>
	<div class="home pl-3 pr-3">
		<Header />
		<p class="h4 d-flex justify-content-center pb-4 pt-5">Team Information</p>
		<div class="d-flex justify-content-center" id="title">
			<p class="h4 d-flex justify-content-center pb-4"></p>
		</div>
		<div id="home_menu">
			<div id="team_information">
				<img alt="soccer_icon" src="../assets/soccer_ball.png">
				<p>Team Information</p>
			</div>
			<div id="schedule">
				<img alt="calender_icon" src="../assets/calendar.png">
				<p>Match Schedule</p>
			</div>
			<div id="stadium_information">
				<img alt="stadium_icon" src="../assets/stadium.png">
				<p>Stadium Location</p>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from "@/components/Header.vue";

	export default {
		name: "home",
		components: {
			Header
		}
	};
</script>

<style scoped>
	/* .home {
  background-color: bisque;
} */

	#title p {
		width: 40%;
		border-bottom: solid 3px rgba(56, 55, 55, 0.7);
	}

#home_menu {
    margin: 60px 25%;
  }

  #home_menu img {
    width: 15%;
    margin-right: 5%;
  }

  #home_menu div{
    margin-bottom: 25px;
  }

  #home_menu img,
  #home_menu p {
    display: inline-block;
  }
</style>