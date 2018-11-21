<template>
	<div class="location pl-3 pr-3" id="top">
		<Header :header="dataInStadium" />
		<div id="scroll">
			<p class="d-flex justify-content-center">Stadium</p>
			<div class="d-flex justify-content-center" id="title">
				<p class="d-flex justify-content-center pb-4"></p>
			</div>
			<!-- <div id="search_engine" class="d-flex justify-content-center">
				<label for="search_stadium">
					<img src="../assets/scope.png" alt="search_icon"></label>
				<input type="text" v-model="searchStadium" placeholder="search by stadium or team" name="search_stadium">
			</div> -->
			<OneStadium :oneStadium="dataInStadium" />
			<p><a href="#top">&#x25B2; Back to Top</a></p>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from "@/components/Header.vue";
	import OneStadium from "@/components/OneStadium.vue";

	export default {
		name: "stadiumLocation",
		components: {
			Header,
			OneStadium
		},
		computed: {
			dataInStadium() {
				return this.$route.params.dataToPass;
			}
		}
	};
</script>

<style scoped>
	#title p {
		width: 40%;
		border-bottom: solid 3px rgba(56, 55, 55, 0.7);
	}

	#scroll {
		padding-top: 150px;
	}

	a {
		text-decoration: none;
		color: #22313f;
	}

	@media screen and (max-width:416px) {
		#top p:last-child {
			padding-top: 30px;
			font-size: 20px;
		}

		#scroll p:first-child {
			font-size: 25px;
		}

		
	}

	@media screen and (min-width:416px) and (max-width:750px) {
		#top p:last-child {
			padding-top: 30px;
			font-size: 20px;
		}

		#scroll p:first-child {
			font-size: 30px;
		}

	}

	@media screen and (min-width:751px) {
		#top p:last-child {
			padding-top: 35px;
			font-size: 25px;
		}

		#scroll p:first-child {
			font-size: 35px;
		}

		#scroll {
			padding-top: 200px;
		}
	}
</style>