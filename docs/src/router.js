import VueRouter from 'vue-router';
import authRoutes from './pages/auth/routes';
import panelRoutes from './pages/panel/routes';

let routes = [
	{
		path: '/',
		redirect: '/auth'
	},
	...authRoutes,
	...panelRoutes
]

export default new VueRouter({
	base: window.location.pathname,
	routes
});
