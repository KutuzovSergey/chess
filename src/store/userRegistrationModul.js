export default {
    state: {
		newUser: {},
		registration: false,
	},
	mutations: {
        SET_NEW_USER: (state, value) =>{
            state.newUser = Object.assign({}, value);
        },
	},
	getters:{
        NEW_USER: state => {
            return state.newUser
        },
		REGISTRATION: state => {
			return state.registration
		}
	},
	actions: {
		GET_NEW_USER: ({commit}, value) =>{
            const registerUser = new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();

				xhr.open('POST', 'http://localhost:3000/');

				xhr.responseType = 'json'
				xhr.setRequestHeader('Content-Type', 'appLication/json')

				xhr.onload = () => {
					if (xhr.status >= 400) {
						reject(xhr.response);
					} else {
						resolve(xhr.response);
					}
				}

				xhr.onerror = () =>{
					reject(xhr.response)
				}

				xhr.send(JSON.stringify(value))
            })
			registerUser.then( (value) => {
				console.log(value)
				commit('SET_NEW_USER', value)
			})
			
		},
	},
	modules: {
	}
}