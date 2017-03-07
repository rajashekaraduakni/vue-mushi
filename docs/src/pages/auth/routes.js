import Auth from './Auth';
import AuthLogin from './AuthLogin';
import AuthForgot from './AuthForgot';

export default [
	{
		path: '/auth',
		component: Auth,
		children: [
			{
				path: '/',
				redirect: 'login'
			},
			{
				path: 'login',
				component: AuthLogin
			},
			{
				path: 'forgot',
				component: AuthForgot
			}
		]
	}
]
