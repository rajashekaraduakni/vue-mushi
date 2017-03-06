import PageList from './PageList';
import PageForm from './PageForm';

export default [
	{
		path: 'pages',
		component: PageList
	},
	{
		path: 'pages/add',
		component: PageForm
	},
	{
		path: 'pages/edit/:id',
		component: PageForm
	}
]
