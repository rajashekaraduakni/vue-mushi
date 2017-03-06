import MediaPhotoList from './media-photo/MediaPhotoList';
import MediaFileList from './media-file/MediaFileList';

export default [
	{
		path: 'media',
		redirect: 'media/photos'
	},
	{
		path: 'media/photos',
		component: MediaPhotoList
	},
	{
		path: 'media/files',
		component: MediaFileList
	}
]
