export default {
	namespaced: true,
	state: {
		active: null,
		messages: []
	},
	getters: {
		getActive (state) {
			return state.active;
		},
		getMessages (state) {
			return state.messages;
		}
	},
	mutations: {
		setActive (state, payload) {
			state.active = payload.message;

			if (payload.message != null) {
				payload.snackbar.open();
			}
		},
		info (state, payload) {
			state.messages.unshift({
				text: payload.text,
				type: 'info',
				timeout: payload.timeout,
				action: payload.action,
				callback: payload.callback
			});
		},
		success (state, payload) {
			state.messages.unshift({
				text: payload.text,
				type: 'success',
				timeout: payload.timeout,
				action: payload.action,
				callback: payload.callback
			});
		},
		warn (state, payload) {
			state.messages.unshift({
				text: payload.text,
				type: 'warn',
				timeout: payload.timeout,
				action: payload.action,
				callback: payload.callback
			});
		},
		error (state, payload) {
			state.messages.unshift({
				text: payload.text,
				type: 'error',
				timeout: payload.timeout,
				action: payload.action,
				callback: payload.callback
			})
		},
		handleError (state, payload) {
			let errMsg = (payload.body.message) ? payload.body.message :
				payload.status ? `${payload.status} - ${payload.statusText}` : 'Server error';

			state.messages.unshift({
				text: errMsg,
				type: 'error',
				timeout: 4000,
				action: 'Dismiss'
			})
		}
	},
}
