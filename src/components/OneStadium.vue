<template>
	<div>
		<div id="search_engine" class="d-flex justify-content-center">
			<label for="search_stadium">
				<img src="../assets/scope.png" alt="search_icon"></label>
			<input type="text" v-model="searchStadium" placeholder="search by stadium or team" name="search_stadium">
		</div>
		<div id="one_stadium">
			<div v-for="(stadium, index) in getStadium" :key="index">


				<img :src="require(`../assets/${stadium.venue_photo}`)" alt="xxx">
				<!--<img :src="require(`../assets/team-logos/${item}.svg`)"> -->

					<!-- <b-button @click="modalShow = !modalShow">
						{{ stadium.venue }}
					</b-button>
					<b-modal v-model="modalShow">
						<iframe :src="stadium.map" width="90%" frameborder="0" style="border:0" allowfullscreen></iframe>
					</b-modal> -->

						
  <b-btn v-b-modal="`${index}`">{{ stadium.venue }}</b-btn>

  <!-- the modal -->
  <b-modal :id="`${index}`">
    <iframe :src="stadium.map" width="90%" frameborder="0" style="border:0" allowfullscreen></iframe>
  </b-modal>




			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: "oneStadium",
		props: ["oneStadium"],
		data() {
			return {
				ShowBalloonMap: false,
				searchStadium: "",
				// modalShow: false
			}
		},
		computed: {
			getStadium() {
				// console.log("111" + this.$route.params.dataToPass)
				if (this.searchStadium == "") {
					return this.oneStadium.teamData;
				} else {
					// console.log(this.searchWords);
					return this.oneStadium.teamData.filter(stadium => (stadium.name.toUpperCase().includes(this.searchStadium.toUpperCase()) ||
						stadium.venue.toUpperCase().includes(this.searchStadium.toUpperCase())));
				}
			}
		},
		methods: {
			getMap(stadium) {
				return stadium.map;
			}
		}
	};
	// import OneMap from "@/components/OneMap.vue";
	// export default {
	// 	name: "oneStadium",
	// 	props: ["oneStadium"],
	// 	components: {
	// 		OneMap
	// 	},
	// 	data() {
	// 		return {
	// 			showingMap: ""
	// 		}
	// 	},
	// 	methods: {
	// 		ShowBalloonMap(eachStadium){
	// 			console.log(eachStadium.map);
	// 			this.showingMap = eachStadium.map;

	// 			function printMap() {
	//     var showMap = document.getElementById('balloon_map');
	//     showMap.style.display = "inline-block";


	// 	    }
	// printMap();
	// 		}
	// 	}

	// };
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
		/* margin: 25px 0 0; */
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#one_stadium div:last-child {
		margin: 5px 0 70px;

	}


	#one_stadium div div img,
	#one_stadium div div p {
		/* margin: 0 0 50px; */
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
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

	.balloon_map {
		position: relative;
		display: none;
		margin: 0;
		padding: 10px 10px;
		min-width: 250px;
		width: 100%;
		color: #22313f;
		font-size: 16px;
		border: solid 3px #22313f;
		box-sizing: border-box;
		background-color: #fff;
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

	.balloon_map::after {
		content: "";
		position: absolute;
		top: -21px;
		left: 50%;
		margin-left: -15px;
		border: 12px solid transparent;
		border-bottom: 12px solid #fff;
		z-index: 2;
		margin-top: 0;
	}

	@media screen and (max-width:416px) {
		p {
			font-size: 15px;
		}

		input {
			font-size: 15px;
			width: 60%;
		}
	}

	@media screen and (min-width:416px) and (max-width:750px) {
		p {
			font-size: 20px;
		}

		input {
			font-size: 20px;
			width: 50%;
		}
	}

	@media screen and (min-width:751px) {
		p {
			font-size: 25px;
		}

		input {
			font-size: 25px;
			width: 50%;
		}

	}
</style>