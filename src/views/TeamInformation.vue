<template>
	<div class="home pl-3 pr-3">
		<Header />
		<div id="scroll">
			<p class="h3 d-flex justify-content-center pb-4 pt-5">Team Information</p>
			<div class="d-flex justify-content-center" id="title">
				<p class="h4 d-flex justify-content-center pb-4"></p>
			</div>
			<div id="search_engine" class="d-flex justify-content-center">
				<label for="search_team">
					<img src="../assets/scope.png" alt="search_icon"></label>
				<input type="text" placeholder="search by team name" name="search_team">
			</div>
			<TeamDetails />
			<TeamDetails />
			<TeamDetails />
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from "@/components/Header.vue";
	import TeamDetails from "@/components/TeamDetails.vue";

	export default {
		name: "teamInformation",
		components: {
			Header,
			TeamDetails
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

	#search_engine {
		margin-top: 50px;
	}


	#scroll {
		padding-top: 120px;
	}

	#search_engine input {
		padding: 5px;
		margin: 0 5px;
		border: 1px solid rgba(56, 55, 55, 0.7);
		border-radius: 4px;
	}

	/* #teams {
		margin: 50px 20%;
	}

	#teams img {
		width: 25%;
		margin-right: 8%;
	}

	#teams div {
		margin-bottom: 25px;
	}

	#teams img,
	#teams p {
		display: inline-block;
	} */
</style>