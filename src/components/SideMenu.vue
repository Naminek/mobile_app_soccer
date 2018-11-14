<template>
  <div>
      <!-- <transition name="show"> -->
          <!-- <div class="sidemenu" v-if="menuOn"> -->
            <ul>
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
          <!-- </div> -->
      <!-- </transition> -->
    </div>
</template>

<script>
export default {
		name: "SideMenu"
}
</script>

<style scoped>


</style>


