<template>
	<div class="login pl-3 pr-3">
		<Header />
		<p class="h4 d-flex justify-content-center pb-4 pt-5">Chat Room</p>
		<div class="d-flex justify-content-center" id="title">
			<p class="h4 d-flex justify-content-center pb-4"></p>
		</div>

	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from "@/components/Header.vue";

	export default {
		name: "chatRoomLogin",
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

	/* #search_engine {
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
	} */
</style>