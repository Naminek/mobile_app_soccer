<template>
	<div class="location pl-3 pr-3">
		<Header />
		<div id="scroll">
			<p class="h4 d-flex justify-content-center pb-4 pt-5">Stadium</p>
			<div class="d-flex justify-content-center" id="title">
				<p class="h4 d-flex justify-content-center pb-4"></p>
			</div>
			<div id="search_engine" class="d-flex justify-content-center">
				<label for="search_stadium">
					<img src="../assets/scope.png" alt="search_icon"></label>
				<input type="text" placeholder="search by stadium" name="search_stadium">
			</div>
			<OneStadium />
			<OneStadium />
			<OneStadium />
			<p><a href="#top">&#x25B2; Back to Top</a></p>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from "@/components/Header.vue";
	import OneStadium from "@/components/OneStadium.vue";

	export default {
		name: "home",
		components: {
			Header,
			OneStadium
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

	a {
		text-decoration: none;
		color: #22313f;
	}

</style>