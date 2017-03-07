import UserList from './user-list/UserList';
import UserForm from './user-form/UserForm';

export default [
	{
		path: 'users',
		component: UserList
	},
	{
		path: 'users/add',
		component: UserForm
	},
	{
		path: 'users/edit/:id',
		component: UserForm
	}
]
