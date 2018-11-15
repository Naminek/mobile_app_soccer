<template>
	<div class="schedule pl-3 pr-3">
		<Header />
		<div id="scroll">
			<p class="h4 d-flex justify-content-center pb-4 pt-5">Match Schedule</p>
			<div class="d-flex justify-content-center" id="title">
				<p class="h4 d-flex justify-content-center pb-4"></p>
			</div>
			<div id="search_engine" class="d-flex">
				<label for="search_team">
					<img src="../assets/scope.png" alt="search_icon"></label>
				<input type="text" placeholder="search by team" name="search_team" size="15">
				<input type="date" name="today" id="today">
			</div>
			<OneMatchSchedule />
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from "@/components/Header.vue";
	import OneMatchSchedule from "@/components/OneMatchSchedule.vue";

	export default {
		name: "schedule",
		components: {
			Header,
			OneMatchSchedule
		}
	};
</script>

<style scoped>
	#title p {
		width: 40%;
		border-bottom: solid 3px rgba(56, 55, 55, 0.7);
	}

	#scroll {
		padding-top: 120px;
	}

	#search_engine {
		margin-top: 50px;
	}

	#search_engine input {
		padding: 5px;
		margin: 0 5px;
		border: 1px solid rgba(56, 55, 55, 0.7);
		border-radius: 4px;
	}

	#search_engine input {
		width: 45%;
	}
</style>