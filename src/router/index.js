import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '../views/Nav.vue'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'
import Special from '../views/Special.vue'
import Recommoned from '../views/Recommoned.vue'
import Follow from '../views/Follow.vue'
import HotList from '../views/HotList.vue'
import Hot from '../views/Hot.vue'
import Column from '../views/Column.vue'
import QuestionWaiting from '../views/QuestionWaiting.vue'
import Login from '../views/Login.vue'
import Potential from'../views/Potential.vue'
import People from '../views/People.vue'
Vue.use(VueRouter)

const routes = [
	// 这两个为顶层路由,都拥有整个浏览器大小的布局自由度
	{
		path: '/',
		component: Nav,
		children: [{
				path: '/',
				redirect: 'home'
			},
			{
				path: 'home',
				component: () => import('../views/Home.vue'),
				// 跟 home 有关的一组子路由,点哪个显示哪个
				children: [{
						// 直接定向到推荐,默认显示
						path: '/',
						redirect: 'recommoned'
					},
					{
						path: 'recommoned',
						component: () => import('../views/Recommoned.vue')
					},
					{
						path: 'follow',
						component: () => import('../views/Follow.vue')
					},
					{
						path: 'hotlist',
						component: () => import('../views/HotList.vue')
					},
				]
			},
			{
				path: 'explore',
				component: () => import('../views/Explore.vue')
			},
			{
				path: 'special/all',
				component: () => import('../views/Special.vue')
			},
			{
				path: 'roundtable',
				component: () => import('../views/RoundTable.vue')
			},
			{
				path: 'collection/hot',
				component: () => import('../views/Hot.vue')
			},
			{
				path: 'question/waiting',
				component: () => import('../views/QuestionWaiting.vue')
			
			},
			{
				path: 'recommoned',
				component: () => import('../views/Recommoned.vue')
			},
			{
			path: 'people/:url',
			component: () => import('../views/People.vue')
			},
			{
			path: 'question/potential',
			component: () => import('../views/Potential.vue')
			}
		]
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/columns',
		component:Column
	}
]

const router = new VueRouter({
	routes
})

export default router

// {
// 						path: 'potential',
// 						component: () => import('../views/Potential.vue')
// 					},