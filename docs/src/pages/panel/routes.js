import Panel from './Panel';
import Dashboard from '../dashboard/Dashboard';

export default [
	{
		path: '/panel',
		name: 'panel',
		component: Panel,
		children: [
			{
				path: '/',
				component: Dashboard
			}
		]
	}
]
