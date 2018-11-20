<template>
	<div class="location pl-3 pr-3" id="top">
		<Header :header="dataInStadium" />
		<div id="scroll">
			<p class="d-flex justify-content-center">Stadium</p>
			<div class="d-flex justify-content-center" id="title">
				<p class="d-flex justify-content-center pb-4"></p>
			</div>
			<div id="search_engine" class="d-flex justify-content-center">
				<label for="search_stadium">
					<img src="../assets/scope.png" alt="search_icon"></label>
				<input type="text" v-model="searchStadium" placeholder="search by stadium or team" name="search_stadium">
			</div>
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
		data() {
			return {
				searchStadium: "",
				// pushedStadium: ""
			}
		},
		components: {
			Header,
			OneStadium
		},
		computed: {
			dataInStadium() {
				// console.log("111" + this.$route.params.dataToPass)
				if (this.searchStadium == "") {
					return this.$route.params.dataToPass;
				} else {
					// console.log(this.searchWords);
					return this.$route.params.dataToPass.filter(stadium => (stadium.name.toUpperCase().includes(this.searchStadium.toUpperCase()) ||
						stadium.venue.toUpperCase().includes(this.searchStadium.toUpperCase())));
				}
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

	@media screen and (max-width:416px) {
		#top p:last-child {
			padding-top: 30px;
			font-size: 20px;
		}

		#scroll p:first-child {
			font-size: 25px;
		}

		input {
			font-size: 15px;
			width: 60%;
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

		input {
			font-size: 20px;
			width: 50%;
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

		input {
			font-size: 25px;
			width: 50%;
		}
	}
</style>