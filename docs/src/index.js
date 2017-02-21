import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMushi from '../../src';
import VueMaterial from 'vue-material';
import VeeValidate from 'vee-validate';
import App from './App';
import routes from './routes';
import config from './config';

Vue.use(VueRouter);
Vue.use(VueMushi);
Vue.use(VueMaterial);
Vue.use(VeeValidate);

let router = new VueRouter({
	mode: 'hash',
	base: window.location.pathname,
	routes
});

let Docs = Vue.component('app', App);
//
// Register Vue Material theme
Vue.material.registerTheme({
	'mushi': {
		primary: {
			color: 'light-blue',
			hue: 'A400'
		},
		accent: {
			color: 'orange',
			hue: 800
		},
		warn: 'red'
	}
});

Vue.material.setCurrentTheme('mushi');

Docs = new Docs({
	el: '#app',
	router
});
