import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/teamInformation',
      name: 'teamInformation',
      component: () => import('./views/TeamInformation.vue')
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('./views/Schedule.vue')
    },
    {
      path: '/matchResults',
      name: 'matchResults',
      component: () => import('./views/MatchResults.vue')
    },
    {
      path: '/stadiumLocation',
      name: 'stadiumLocation',
      component: () => import('./views/StadiumLocation.vue')
    },
    {
      path: '/chatRoomLogin',
      name: 'chatRoomLogin',
      component: () => import('./views/ChatRoomLogin.vue')
    },
    {
      path: '/playersList',
      name: 'playersList',
      component: () => import('./views/PlayersList.vue')
    }
  ]
})
