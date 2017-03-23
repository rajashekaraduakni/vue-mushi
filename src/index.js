import Core from './core';

import Intro from './components/intro/Intro';
import Auth from './components/auth/Auth';
import Container from './components/container/Container';
import Snackbar from './components/snackbar/Snackbar';
import Thumbnail from './components/thumbnail/Thumbnail';
import GallerySingle from './components/gallery/GallerySingle';
import GalleryMultiple from './components/gallery/GalleryMultiple';
import GalleryDialog from './components/gallery/GalleryDialog';
import GalleryGrid from './components/gallery/GalleryGrid';
import Editor from './components/editor/Editor';
import Uploader from './components/uploader/Uploader';
import Search from './components/search/Search';

export default function (Vue, options) {
	Vue.use(Core);

	Vue.component('mu-auth', Auth);
	Vue.component('mu-intro', Intro);
	Vue.component('mu-container', Container);

	Vue.component('mu-snackbar', Snackbar);
	Vue.component('mu-thumbnail', Thumbnail);
	Vue.component('mu-gallery-single', GallerySingle);
	Vue.component('mu-gallery-multiple', GalleryMultiple);
	Vue.component('mu-gallery-dialog', GalleryDialog);
	Vue.component('mu-gallery-grid', GalleryGrid);
	Vue.component('mu-editor', Editor);
	Vue.component('mu-uploader', Uploader);
	Vue.component('mu-search', Search);
}
