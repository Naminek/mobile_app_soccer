<template>
	<div class="match_results pl-3 pr-3">
		<Header />
		<p class="h4 d-flex justify-content-center pb-4 pt-5">Today's Match</p>
		<div class="d-flex justify-content-center" id="title">
			<p class="h4 d-flex justify-content-center pb-4"></p>
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

	#title p {
		width: 40%;
		border-bottom: solid 3px rgba(56, 55, 55, 0.7);
	}


</style>