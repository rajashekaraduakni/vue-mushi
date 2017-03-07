import Vue from 'vue';
import Vuex from 'vuex';
import Logger from './modules/logger';

Vue.use(Vuex);

export default {
	namespaced: true,
	modules: {
		'logger': Logger
	}
}
