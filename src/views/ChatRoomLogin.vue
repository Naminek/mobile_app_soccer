<template>
	<div class="login pl-3 pr-3">
		<Header />
		<p class="h4 d-flex justify-content-center pb-4 pt-5">Chat Room</p>
		<div class="d-flex justify-content-center" id="title">
			<p class="h4 d-flex justify-content-center pb-4"></p>
		</div>
		<form id="form_for_login">
			Email: <input type="text" name="email" id="email"><br>
			Password: <input type="password" name="pwd" maxlength="8" id="password"><br>
			<input type="submit" id="submit">
		</form>



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
	.login {
		min-height: 700px;
	}

	#title p {
		width: 40%;
		border-bottom: solid 3px rgba(56, 55, 55, 0.7);
	}

	#form_for_login {
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#email, #password {
		padding: 5px;
		margin: 0 5px;
		border: 1px solid rgba(56, 55, 55, 0.7);
		border-radius: 4px;
		width: 55%;
	}

	#submit {
		padding: 5px;
		margin: 20px 5px;
		border: 1px solid rgba(56, 55, 55, 0.7);
		border-radius: 4px;
		width: 70%;
	}

</style>