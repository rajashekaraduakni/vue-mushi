import authRoutes from './pages/auth/routes';
import panelRoutes from './pages/panel/routes';

export default [
	{
		path: '/',
		redirect: '/auth'
	},
	...authRoutes,
	...panelRoutes
]
