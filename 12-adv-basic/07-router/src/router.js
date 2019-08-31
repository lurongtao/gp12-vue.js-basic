import Vue from 'vue'

import VueRouter from 'vue-router'

import Movie from './pages/Movie'
import Tv from './pages/Tv'
// import Detail from './pages/Detail'
import Page404 from './pages/Page404'
import User from './pages/User'
import Login from './pages/Login'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/movie',
    name: 'movie',
    alias: '/movies',
    component: Movie,
    children: [
      {
        path: 'detail/:id',
        name: 'detail',
        props: (route) => {
          return {
            query: route.query.uid
          }
        },
        component: import('./pages/Detail')
      },
    ]
  },
  {
    path: '/tv/:id',
    name: 'tv',
    beforeEnter: (to, from, next) => {
      if (to.params.id == 5) {
        next()
      } else {
        alert('就不让你进')
      }
    },
    meta: {
      foo: 'zzz'
    },
    component: Tv
  },
  {
    path: '/user-*',
    name: 'user',
    components: {
      default: User,
      login: Login
    }
  },
  {
    path: '*',
    name: 'page404',
    component: Page404
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router