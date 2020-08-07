import Vue from 'vue'
import VueRouter from 'vue-router'
import axiosRoter from './axios'
import shujiaRoter from './shujia/shujia'
import searchRoter from './search/search'
import shuchengRoter from './shucheng/shucheng'

Vue.use(VueRouter)

  const routes = [
    axiosRoter,
    shujiaRoter,
    searchRoter,
    shuchengRoter,
    {
      path:'/*',
      redirect:'/shujia'
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
