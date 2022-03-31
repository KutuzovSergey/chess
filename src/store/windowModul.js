export default {
    state: {
		SignInViewingtWindow: false,
        LogInViewingtWindow: false
	},
	mutations: {
		SET_SIGN_IN_VIEWINGT_WINDOW: (state, value) =>{
			state.SignInViewingtWindow = value;
		},
        SET_LOG_IN_VIEWINGT_WINDOW: (state, value) =>{
			state.LogInViewingtWindow = value;
		},
	},
	getters:{
        SIGN_IN_VIEWINGT_WINDOW: state => {
            return state.SignInViewingtWindow
        },
        LOG_IN_VIEWINGT_WINDOW: state => {
            return state.LogInViewingtWindow
        }
	},
	actions: {
		GET_SIGN_IN_VIEWINGT_WINDOW: ({commit}, value) =>{
			commit('SET_SIGN_IN_VIEWINGT_WINDOW', value)
		},
        GET_LOG_IN_VIEWINGT_WINDOW: ({commit}, value) =>{
			commit('SET_LOG_IN_VIEWINGT_WINDOW', value)
		}
	},
	modules: {
	}
}