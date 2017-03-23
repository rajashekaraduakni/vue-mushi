import Home from './Home';
import HomeLogin from './HomeLogin';
import HomeForgot from './HomeForgot';

export default [
	{
		path: '/home',
		component: Home,
		children: [
			{
				path: '/',
				redirect: 'login'
			},
			{
				path: 'login',
				component: HomeLogin
			},
			{
				path: 'forgot',
				component: HomeForgot
			}
		]
	}
]
