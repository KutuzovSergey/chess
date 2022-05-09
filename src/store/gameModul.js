export default {
    state: {
		mapField: {
            a2: {name: 'pawn', color: 'white'},
			b2: {name: 'pawn', color: 'white'},
			c2: {name: 'pawn', color: 'white'},
			d2: {name: 'pawn', color: 'white'},
			e2: {name: 'pawn', color: 'white'},
			f2: {name: 'pawn', color: 'white'},
			g2: {name: 'pawn', color: 'white'},
			h2: {name: 'pawn', color: 'white'}, 
        },
	},
	mutations: {
        SET_MAP_FIELD: (state, value) =>{
            state.mapField = value;
        },
	},
	getters:{
        MAP_FIELD: state => {
            return state.mapField
        },
	},
	actions: {
		GET_MAP_FIELD: ({commit}, value) =>{
            commit('SET_MAP_FIELD', value)
		},
	},
	modules: {
	}
}