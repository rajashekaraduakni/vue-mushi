import Vue from 'vue';
import Vuex from 'vuex';
import Sidenav from './modules/sidenav';
import Resource from './modules/resource';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		'sidenav': Sidenav,
		'resource': Resource
	}
})
