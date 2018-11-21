<template>
	<div class="login pl-3 pr-3">
		<ChatRoomHeader :chatRoomHeader="dataInChatRoomLogin" />
		<div id="scroll">
			<p class="h4 d-flex justify-content-center pb-4 pt-5">Chat Room</p>
			<div class="d-flex justify-content-center" id="title">
				<p class="h4 d-flex justify-content-center pb-4"></p>
			</div>
			<form id="form_for_login">
				<p>Login with Google</p>
				<button v-on:click="login()" class="btn btn-dark"> Login </button>
    <button v-on:click="logout()" class="btn btn-dark"> Logout </button>
			</form>

			<div>
      <input type="text" v-model="msg">
      <button v-on:click="writeNewPost()">Send</button>

      <hr>

      <div v-for="(msg, index) in messages" :key="index">
        <p>{{msg.name}}</p>
        <p>{{msg.date}}</p>
        <p>{{msg.body}}</p>
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
      messages: []
    };
  },
  methods: {
    login() {
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
        })
        .catch(function(error) {
          alert("error" + error.message);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          console.log("Sign-out successful.");
        })
        .catch(function(error) {
          alert("alert logout");
        });
    },
    writeNewPost() {
      console.log(this.user.displayName);
      console.log(this.msg);

      const post = {
        name: this.user.displayName,
        body: this.msg,
        date: new Date().toLocaleString("en-US")
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
        });
    }
		}
	};
</script>

<style scoped>
	.login {
		min-height: 700px;
	}

	#scroll {
		padding-top: 120px;
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


	button {
		padding: 5px;
		margin: 20px 5px;
		border: 1px solid rgba(56, 55, 55, 0.7);
		border-radius: 4px;
		width: 70%;
	}
</style>