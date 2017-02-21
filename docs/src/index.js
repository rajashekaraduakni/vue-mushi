import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import VeeValidate from 'vee-validate';
import App from './App';
import routes from './routes';
import config from './config';

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VeeValidate);

let router = new VueRouter({
	mode: 'hash',
	base: window.location.pathname,
	routes
});

let Docs = Vue.component('app', App);

Docs = new Docs({
	el: '#app',
	router
});
