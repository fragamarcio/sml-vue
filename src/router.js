import Vue from "vue";
import Router from "vue-router";
import Home from "./core/views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/team",
      name: "team",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "team" */ "./modules/Team/Team.vue")
    },
    {
      path: "/development",
      name: "development",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "development" */ "./modules/Development/Development.vue")
    },
    {
      path: "/feedback",
      name: "feedback",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "feedback" */ "./modules/Feedback/Feedback.vue")
    },
  ]
});
