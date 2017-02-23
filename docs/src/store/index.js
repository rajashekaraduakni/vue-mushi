import Vue from 'vue';
import Vuex from 'vuex';
import Logger from './modules/logger';
import Sidenav from './modules/sidenav';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		'logger': Logger,
		'sidenav': Sidenav
	}
})
