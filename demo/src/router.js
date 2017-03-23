import VueRouter from 'vue-router';
import homeRoutes from './pages/home/routes';
import dashboardRoutes from './pages/dashboard/routes';
import userRoutes from './pages/user/routes';
import mediaRoutes from './pages/media/routes';
import postRoutes from './pages/post/routes';
import categoryRoutes from './pages/category/routes';
import pageRoutes from './pages/page/routes';

let routes = [
	{
		path: '/',
		redirect: '/home'
	},
	...homeRoutes,
	...dashboardRoutes,
	...userRoutes,
	...mediaRoutes,
	...postRoutes,
	...categoryRoutes,
	...pageRoutes
];

export default new VueRouter({
	base: window.location.pathname,
	routes
});
