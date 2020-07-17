import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import charts from "./charts";
import examples from "./examples";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: "Home"
    }
  },
  {
    path: "/svg-basic",
    name: "svg-basic",
    component: () => import("@/views/Basic/BasicSvg"),
    meta: {
      title: "svg"
    }
  },
]
routes.push(...charts);
routes.push(...examples)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function(to,from,next){
  //从from 的路由跳转到to的路由
  document.title = to.meta.title;
  next();
});

export default router
