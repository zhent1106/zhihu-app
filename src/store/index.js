import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
	state: {
		token: '15',
		baseUrl: 'http://localhost:8080/api',
		user: {
			id: 1,
			nickname: '想看一会海_',
			avatar: 'https://pic3.zhimg.com/v2-941c353f7b4afcbf0316f749b8a3ca12_is.jpg'
		}
	},
	mutations: {
		setToken(state, data) {
			state.token = data;
		},
		setUser(state, data) {
			state.user = data;
		}
	},
	getters: {
	},
	actions: {
	},
	modules: {}
})
