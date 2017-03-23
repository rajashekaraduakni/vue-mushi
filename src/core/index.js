import Logger from './logger';

export default function install(Vue) {
	if (install.installed) {
		console.warn('Vue Mushi is already installed.');
		return;
	}

	Vue.$mushi = new Vue({
		data () {
			return {}
		},
		methods: {
			//
		}
	});

	install.installed = true;

	Vue.prototype.$mushi = Vue.mushi;
	Vue.use(Logger);
}
