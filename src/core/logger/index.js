export default function install(Vue) {
	Vue.$logger = new Vue({
		data: () => ({
			active: null,
			messages: [],
			queue: []
		}),
		methods: {
			setActive (message) {
				this.active = message;
			},
			add (message) {
				this.messages.unshift(message);
				this.queue.unshift(message);
				this.$emit('add', message);
			},
			info (text, action, timeout, callback) {
				this.add({
					text: text,
					type: 'info',
					timeout: timeout ? timeout : 4000,
					action: action ? action : 'Dismiss',
					callback: callback ? callback : () => {}
				});
			},
			success (text, action, timeout, callback) {
				this.add({
					text: text,
					type: 'success',
					timeout: timeout ? timeout : 4000,
					action: action ? action : 'Dismiss',
					callback: callback ? callback : () => {}
				});
			},
			warn (text, action, timeout, callback) {
				this.add({
					text: text,
					type: 'warn',
					timeout: timeout ? timeout : 4000,
					action: action ? action : 'Dismiss',
					callback: callback ? callback : () => {}
				});
			},
			error (text, action, timeout, callback) {
				this.add({
					text: text,
					type: 'error',
					timeout: timeout ? timeout : 4000,
					action: action ? action : 'Dismiss',
					callback: callback ? callback : () => {}
				})
			},
			handle (response) {
				let errMsg = (response.body.message) ? response.body.message :
					response.status ? `${response.status} - ${response.statusText}` : 'Server error';

				this.add({
					text: errMsg,
					type: 'error',
					timeout: 4000,
					action: 'Dismiss'
				})
			}
		}
	});

	Vue.prototype.$logger = Vue.$logger;
}
