<template>
	<div class="login pl-3 pr-3">
		<div id="scroll">
			<div v-if="checkLogin">
				<ChatRoomHeader :chatRoomHeader="dataInChatRoomLogin" />

				<p class="h3 d-flex justify-content-center pb-4 pt-5">Chat Room</p>
				<div class="d-flex justify-content-center" id="title">
					<p class="h4 d-flex justify-content-center pb-4"></p>
				</div>
				<div id="login_button">
					<p id="sentence">Login with Google</p>
					<button v-on:click="login()" class="btn btn-dark form_for_login"> Login </button>
				</div>
			</div>

			<div v-else>
				<div id="chat_header" class="row">
					<div class="col-6">
						<img alt="logo" src="../assets/premier-league-logo.png" class="img-fluid mx-auto d-block mt-2">
					</div>
					<div class="col-6">
						<button v-on:click="logout()" class="btn btn-dark form_for_login" id="logout"> Logout </button>
					</div>
				</div>

				<div>

					<hr>

					<div v-for="(msg, index) in messages" :key="index" id="chat">
						<div class="content" v-bind:class="{contentReverse: checkPerson(msg)}">
							<img :src="msg.icon" alt="icon">
							<p class="balloonLeft" v-bind:class="{balloon: checkPerson(msg)}">{{msg.body}}</p>
						</div>
						<div class="content" v-bind:class="{contentReverse: checkPerson(msg)}">
							<p><b>{{msg.name}}</b></p>
							<p class="mr-2" id="text">{{msg.date}}</p>
						</div>
					</div>
					<div id="sent_form">
						<!-- <div> -->
						<input type="text" v-model="msg" placeholder="Type here">

						<button v-on:click="writeNewPost()"><img src="../assets/send.png" alt="send"></button>
						<!-- </div> -->
					</div>

				</div>
			</div>

		</div>
	</div>

</template>

<script>
	// @ is an alias to /src
	import ChatRoomHeader from "@/components/ChatRoomHeader.vue";

	import firebase from "firebase/app";
	import "firebase/auth";
	import "firebase/database";

	export default {
		name: "chatRoomLogin",
		components: {
			ChatRoomHeader
		},
		computed: {
			dataInChatRoomLogin() {
				return this.$route.params.dataToPass;
			}
		},
		data() {
			return {
				msg: "",
				user: null,
				messages: [],
				checkLogin: true
			};
		},
		methods: {
			// test(){
			// 	event.preventDefault()
			// 	console.log("test")
			// },
			login() {
				event.preventDefault();
				console.log("in login");
				var provider = new firebase.auth.GoogleAuthProvider();

				firebase
					.auth()
					.signInWithPopup(provider)
					.then(result => {
						// This gives you a Google Access Token. You can use it to access the Google API.
						var token = result.credential.accessToken;
						// The signed-in user info.
						var user = result.user;
						// let user = firebase.auth().currentUser;
						this.user = user;
						console.log(user);
						console.log(user.displayName);
						console.log(user.email);
						this.checkLogin = false;
						this.getPosts();
					})
					.catch(function (error) {
						alert("error" + error.message);
					});
			},
			logout() {
				event.preventDefault();
				firebase
					.auth()
					.signOut()
					.then(function () {
						console.log("Sign-out successful.");
					})
					.catch(function (error) {
						alert("alert logout");
					});
				this.checkLogin = true;
			},
			writeNewPost() {
				console.log(this.user.displayName);
				console.log(this.msg);

				const post = {
					name: this.user.displayName,
					body: this.msg,
					date: new Date().toLocaleString("en-US"),
					icon: this.user.photoURL
				};

				const newPostKey = firebase
					.database()
					.ref()
					.child("mainChat")
					.push().key;

				const updates = {};

				updates[newPostKey] = post;

				firebase
					.database()
					.ref("mainChat")
					.update(updates);

				this.msg = null;

				this.getPosts();
			},
			getPosts() {
				firebase
					.database()
					.ref("mainChat")
					.on("value", data => {
						this.messages = data.val();
						console.log(this.messages);
					});
			},
			checkPerson(msg) {
				if (this.user.displayName == msg.name) {
					return true;
				}
			}
		}
	};
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.contentReverse {
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-start;
	}

	.login {
		min-height: 700px;
	}

	#title p {
		width: 40%;
		border-bottom: solid 3px rgba(56, 55, 55, 0.7);
	}

	.form_for_login {
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#login_button {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#login_button p {
		margin: 100px 0 0 0;
	}

	button {
		padding: 5px;
		margin: 0px 5px;
		border: 1px solid rgba(56, 55, 55, 0.7);
		border-radius: 4px;
		width: 70%;
	}

	#chat_header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 24;
		width: 100%;
		margin: 0;
		padding: 0 10px 0 0;
	}

	#chat img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}

	#sent_form input {
		width: 75%;
	}

	#sent_form button {
		width: 50px;
		height: 50px;
	}

	#sent_form img {
		width: 100%;
		height: 100%;
	}

	.balloon {
		position: relative;
		display: inline-block;
		margin: 0em 15px 0em 0;
		padding: 7px 10px;
		min-height: 50px;
		min-width: 120px;
		max-width: 80%;
		color: #555;
		font-size: 16px;
		background: #fff;
		border: solid 3px #555;
		box-sizing: border-box;
		border-radius: 10px;
		word-break: break-all;
	}

	.balloon:before {
		content: "";
		position: absolute;
		top: 50%;
		right: -24px;
		margin-top: -12px;
		border: 12px solid transparent;
		border-left: 12px solid #FFF;
		z-index: 2;
	}

	.balloon:after {
		content: "";
		position: absolute;
		top: 50%;
		right: -30px;
		margin-top: -14px;
		border: 14px solid transparent;
		border-left: 14px solid #555;
		z-index: 1;
	}

	.balloonLeft {
		position: relative;
		display: inline-block;
		margin: 0 0 0 15px;
		padding: 7px 10px;
		min-width: 120px;
		max-width: 100%;
		color: #555;
		font-size: 16px;
		background: #fff;
		border: solid 3px #555;
		box-sizing: border-box;
		border-radius: 10px;
		word-break: break-all;
	}

	.balloonLeft:before {
		content: "";
		position: absolute;
		top: 50%;
		left: -24px;
		margin-top: -12px;
		border: 12px solid transparent;
		border-right: 12px solid #FFF;
		z-index: 2;
	}

	.balloonLeft:after {
		content: "";
		position: absolute;
		top: 50%;
		left: -30px;
		margin-top: -14px;
		border: 14px solid transparent;
		border-right: 14px solid #555;
		z-index: 1;
	}

	.balloon p {
		margin: 0;
		padding: 0;
	}

	#sent_form input {
		padding: 5px;
		margin: 0 5px;
		border: 1px solid rgba(56, 55, 55, 0.7);
		border-radius: 4px;
	}

	@media screen and (max-width: 416px) {
		#scroll {
			padding-top: 120px;
			padding-bottom: 50px;
		}

		#sentence {
			font-size: 20px;
		}

		#chat_header img {
			width: 250px;
			height: auto;
			object-fit: contain;
		}

		#chat_header button {
			margin: 50px 20px 30px 0;
			width: 100%;
		}

		#sent_form {
			display: inline;
			position: fixed;
			bottom: 20px;
			left: 15px;
			z-index: 24;
			width: 100%;
			margin: 0;
			padding: 0 10px 0 0;
		}
	}

	@media screen and (min-width: 416px) and (max-width: 750px) {
		#scroll {
			padding-top: 150px;
			padding-bottom: 50px;
		}

		#sentence {
			font-size: 25px;
		}

		#chat_header img {
			width: 200px;
			height: auto;
			object-fit: contain;
		}

		#chat_header button {
			margin: 50px 20px 30px 0;
			width: 100%;
		}

		#sent_form {
			display: inline;
			position: fixed;
			bottom: 20px;
			left: 50px;
			z-index: 24;
			width: 100%;
			margin: 0;
			padding: 0 10px 0 0;
		}
	}

	@media screen and (min-width: 751px) {
		#scroll {
			padding-top: 200px;
			padding-bottom: 50px;
		}

		#sentence {
			font-size: 30px;
		}

		#chat_header img {
			width: 300px;
			height: auto;
			object-fit: contain;
		}

		#chat_header button {
			margin: 100px 20px 30px 0;
			width: 100%;
		}

		#sent_form {
			display: inline;
			position: fixed;
			bottom: 20px;
			left: 60px;
			z-index: 24;
			width: 100%;
			margin: 0;
			padding: 0 10px 0 0;
		}
	}
</style>