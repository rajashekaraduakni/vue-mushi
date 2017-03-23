import CategoryList from './CategoryList';
import CategoryForm from './CategoryForm';

export default [
	{
		path: '/categories',
		component: CategoryList
	},
	{
		path: '/categories/add',
		component: CategoryForm
	},
	{
		path: '/categories/edit/:id',
		component: CategoryForm
	}
]
