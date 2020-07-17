import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import charts from "./charts";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: "/example/:id",
    name: 'examples',
    component: () => import("@/views/Examples/Examples")
  },
  {
    path: "/svg-basic",
    name: "svg-basic",
    component: () => import("@/views/Basic/BasicSvg")
  },
]
routes.push(...charts)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
