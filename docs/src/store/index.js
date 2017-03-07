import Vue from 'vue';
import Vuex from 'vuex';
import Sidenav from './modules/sidenav';
import Resource from './modules/resource';
import Mushi from '../../../src/store';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		'sidenav': Sidenav,
		'resource': Resource,
		'mushi': Mushi
	}
})
