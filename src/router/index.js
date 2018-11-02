import Vue from 'vue'
import Router from 'vue-router'
import WebRouter from './webLearn/webLearn.route'

Vue.use(Router)


var route = new Router({
  routes: [
		{path: '/', redirect: '/webLearn'},
		{
			path: "/test",
			name: "test",
			component: () => import("@/pages/Test.vue"),
			children: [
				{
					path: "test2",
					name: "test2",
					component: () => import("@/pages/Test2.vue"),
				}
			]
		},
	  WebRouter
	]
})

route.beforeEach((to, from, next)=>{
  //do something
  next();
});
route.afterEach((to, from, next) => {
    console.log(to.path);
});

export default route
