import Panel from './Panel';
import dashboardRoutes from '../dashboard/routes';
import userRoutes from '../user/routes';

export default [
	{
		path: '/panel',
		component: Panel,
		children: [
			{
				path: '/',
				redirect: 'dashboard'
			},
			...dashboardRoutes,
			...userRoutes
		]
	}
]
