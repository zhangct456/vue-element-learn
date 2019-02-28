import Vue from 'vue'
import Router from 'vue-router'
import WebRouter from './webLearn/webLearn.route'
import Notes from './notes/notes.route'

Vue.use(Router)


var route = new Router({
  routes: [
		{path: '/', redirect: '/webLearn'},
	  WebRouter,
	  Notes
	]
})

route.beforeEach((to, from, next)=>{
  if(to.matched.length === 0){//路由不存在
  	if(from.name){
  		next({name: from.name});//如果上级能匹配到则转上级路由
  	}else{
  		next('/');//否则返回根路由
  	}
  }else{//匹配到则直接跳转
  	next();
  }
});
route.afterEach((to, from, next) => {
//  console.log(to.path);
});

export default route
