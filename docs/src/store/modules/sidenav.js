export default {
	namespaced: true,
	state: {
		left: false,
		right: false
	},
	getters: {
		isLeftOpen (state) {
			return state.left;
		},
		isRightOpen (state) {
			return state.right;
		}
	},
	mutations: {
		open (state, payload) {
			state[payload] = true;
		},

		close (state, payload) {
			state[payload] = false
		},

		toggle (state, payload) {
			if (state[payload]) {
				state[payload] = false
			} else {
				state[payload] = true
			}
		}
	}
}
