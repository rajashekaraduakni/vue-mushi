export default {
	namespaced: true,
	state: {
		active: false
	},
	getters: {
		isActive (state) {
			return state.active;
		}
	},
	mutations: {
		open (state, payload) {
			state.active = true;
		},

		close (state, payload) {
			state.active = false
		},

		toggle (state, payload) {
			if (state.active) {
				state.active = false
			} else {
				state.active = true
			}
		}
	}
}
