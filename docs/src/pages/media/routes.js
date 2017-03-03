import MediaPhotoList from './media-photo/MediaPhotoList';

export default [
	{
		path: 'media',
		redirect: 'media/photos'
	},
	{
		path: 'media/photos',
		component: MediaPhotoList
	}
]
