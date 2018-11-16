import Vue from 'vue'
import Router from 'vue-router'
import WebRouter from './webLearn/webLearn.route'

Vue.use(Router)


var route = new Router({
  routes: [
		{path: '/', redirect: '/webLearn'},
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
