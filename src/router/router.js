import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import City from '../pages/city/City.vue'
Vue.use(Router)
const router = new Router({
	routes:[{
		path:'/',
		name:'Home',
		component:Home
	},{
		path:'/city',
		component:City
	}]
})

export default router