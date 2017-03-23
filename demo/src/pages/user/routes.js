import UserList from './UserList';
import UserForm from './UserForm';

export default [
	{
		path: '/users',
		component: UserList
	},
	{
		path: '/users/add',
		component: UserForm
	},
	{
		path: '/users/edit/:id',
		component: UserForm
	}
]
