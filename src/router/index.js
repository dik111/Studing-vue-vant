import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import cellView from '../views/cell'
import Category from '../views/Category'
import Categorylist from '@/views/Categorylist'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/cell',
    component: cellView
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/categoryList/:id',
    name: 'Categorylist',
    component: Categorylist
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
