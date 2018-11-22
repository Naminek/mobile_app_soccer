<template>
	<div class="schedule pl-3 pr-3">
		<Header :header="dataInSchedule"/>
		<div id="scroll">
			<p class="h4 d-flex justify-content-center pb-4 pt-5">Match Schedule</p>
			<div class="d-flex justify-content-center" id="title">
				<p class="h4 d-flex justify-content-center pb-4"></p>
			</div>
	
			<OneMatchSchedule :oneMatchSchedule="dataInSchedule" />
			<!-- <p><a href="#top">&#x25B2; Back to Top</a></p> -->
		</div>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import OneMatchSchedule from "@/components/OneMatchSchedule.vue";

	export default {
		name: "schedule",
		data() {
			return {
				todayDate: ""
			}
		},
		components: {
			Header,
			OneMatchSchedule
		},
		computed: {
			dataInSchedule() {
					return this.$route.params.dataToPass;
			}
		},
		created() {
			this.getTodayDate()
		},
		methods: {
			getTodayDate() {
				var today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth()+1; //January is 0
				var yyyy = today.getFullYear();
				if(dd < 10) {
    				dd = '0' + dd;
				} 
				if(mm < 10) {
       				 mm = '0' + mm;
				} 
				this.todayDate = mm + '/' + dd + '/' + yyyy;
				console.log(this.todayDate);
			}
		}
	};
</script>

<style scoped>
	#title p {
		width: 40%;
		border-bottom: solid 3px rgba(56, 55, 55, 0.7);
	}

	

	

		@media screen and (max-width:416px) {
			#scroll {
		padding-top: 120px;
	}
		#top p:last-child {
			padding-top: 30px;
			font-size: 20px;
		}

		#scroll p:first-child {
			font-size: 25px;
		}

	}

	@media screen and (min-width:416px) and (max-width:750px) {
		#scroll {
		padding-top: 150px;
	}
		#top p:last-child {
			padding-top: 30px;
			font-size: 20px;
		}

		#scroll p:first-child {
			font-size: 30px;
		}
	}

	@media screen and (min-width:751px) {
		#scroll {
		padding-top: 200px;
	}
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