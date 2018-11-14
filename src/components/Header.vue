<template>
	<div class="row header">
		<div class="col-6">
			<div id="logo" class="mb-3">
				<img alt="logo" src="../assets/premier-league-logo.png">
			</div>
		</div>
		<div class="col-6">
			<div class="d-flex justify-content-end header_icon">
				<router-link to="/">
					<img alt="home_icon" src="../assets/home.png" class="mr-2">
				</router-link>
				<router-link to="/chatRoomLogin">
					<img alt="chat_icon" src="../assets/chat.png" class="mr-2">
				</router-link>
				<div id="navmenu">
            <img alt="menu_icon" src="../assets/menu_bar.png" @click="menuOn = !menuOn" v-if="!menuOn">
            <img alt="menu_icon" src="../assets/menu_bar.png" @click="ShowMenuBar" v-if="menuOn">
            <transition name="show">
              <div class="sidemenu" v-if="menuOn">
                <ul class="h5">
                  <p @click="ShowMenuBar" v-if="menuOn" class="mt-1 h4">&times;</p>
                  <li>
                    <router-link to="/teamInformation">Team Information</router-link>
                  </li>
                  <li>
                    <router-link to="/schedule">Match Schedule</router-link>
                  </li>
                  <li>
                    <router-link to="/stadiumLocation">Stadium Location</router-link>
                  </li>
                </ul>
              </div>
            </transition>
          </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",
		data() {
      return {
        menuOn: false
      }
    },
    methods: {
      ShowMenuBar() {
        this.menuOn = !this.menuOn;
      }
    }
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 415px) {
	.header {
		height: 17%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 24;
		width: 100%;
		margin: 0;
	}

	#logo img {
		width: 90%;
		margin-top: 10px;
	}

	.header_icon img {
		width: 40px;
	}

	.header_icon {
		margin-top: 40px;
		margin-left: 10px
	}

	.sidemenu {
    background: rgba(0, 0, 0, .8);
    height: 100%;
    position: fixed;
    width: 250px;
    top: 0;
    right: 0;
  }

  .sidemenu ul {
    position: relative;
    list-style: none;
    top: 20px;
    margin-top: 50px;
  }

  .sidemenu ul p {
    position: fixed;
    top: 30px;
    right: 30px;
    color:#fff;
  }

  .sidemenu ul li {
    margin: 20px 0;
		padding: 10px 0;
  }

  .sidemenu ul li a {
    color: #fff;
    text-decoration: none;
  }

  .show-enter-active,
  .show-leave-active {
    transition: opacity 1.0s
  }

  .show-enter,
  .show-leave-to {
    opacity: 0
  }
}

@media screen and (min-width:416px) and (max-width: 750px) {
		.header {
		height: 17%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 24;
		width: 100%;
		margin: 0;
	}

	#logo img {
		width: 200px;
		margin-top: 10px;
	}

	.header_icon img {
		width: 55px;
	}

	.header_icon {
		margin-top: 40px;
		margin-left: 15px
	}

	.sidemenu {
    background: rgba(0, 0, 0, .8);
    height: 100%;
    position: fixed;
    width: 250px;
    top: 0;
    right: 0;
  }

  .sidemenu ul {
    position: relative;
    list-style: none;
    top: 20px;
    margin-top: 50px;
  }

  .sidemenu ul p {
    position: fixed;
    top: 30px;
    right: 30px;
    color:#fff;
  }

  .sidemenu ul li {
    margin: 20px 0;
		padding: 10px 0;
  }

  .sidemenu ul li a {
    color: #fff;
    text-decoration: none;
  }

  .show-enter-active,
  .show-leave-active {
    transition: opacity 1.0s
  }

  .show-enter,
  .show-leave-to {
    opacity: 0
  }
}

@media screen and (min-width:751px) {
		.header {
		height: 17%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 24;
		width: 100%;
		margin: 0;
	}

	#logo img {
		width: 250px;
		margin-top: 10px;
	}

	.header_icon img {
		width: 70px;
	}

	.header_icon {
		margin-top: 50px;
		margin-left: 25px;
	}

	.sidemenu {
    background: rgba(0, 0, 0, .8);
    height: 100%;
    position: fixed;
    width: 250px;
    top: 0;
    right: 0;
  }

  .sidemenu ul {
    position: relative;
    list-style: none;
    top: 20px;
    margin-top: 50px;
  }

  .sidemenu ul p {
    position: fixed;
    top: 30px;
    right: 30px;
    color:#fff;
  }

  .sidemenu ul li {
    margin: 20px 0;
		padding: 10px 0;
  }

  .sidemenu ul li a {
    color: #fff;
    text-decoration: none;
  }

  .show-enter-active,
  .show-leave-active {
    transition: opacity 1.0s
  }

  .show-enter,
  .show-leave-to {
    opacity: 0
  }
}
</style>