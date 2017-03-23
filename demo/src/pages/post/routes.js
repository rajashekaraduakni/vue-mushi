import PostList from './PostList';
import PostForm from './PostForm';

export default [
	{
		path: '/posts',
		component: PostList
	},
	{
		path: '/posts/add',
		component: PostForm
	},
	{
		path: '/posts/edit/:id',
		component: PostForm
	}
]
