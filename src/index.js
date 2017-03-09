/*import {
	InputTextComponent,
	InputTextareaComponent,
	SelectComponent,
	CheckboxComponent,
	EditorComponent,
	SnackbarComponent,
	GalleryThumbnailComponent,
	GallerySingleComponent,
	GalleryMultipleComponent,
	GalleryDialogComponent,
	UploaderComponent
} from './components'


import {
	ListTemplate,
	FormTemplate,
	SidebarTemplate
} from './layouts';

import {
	LoadMoreDirective
} from './directives';

import {
	SlugifyFilter
} from './filters';
*/
import Auth from './templates/auth/Auth';
import AuthForm from './templates/auth/AuthForm';
import Panel from './templates/panel/Panel';
import Container from './templates/container/Container';

import Snackbar from './components/snackbar/Snackbar';
import Thumbnail from './components/thumbnail/Thumbnail';
import GallerySingle from './components/gallery/GallerySingle';
import GalleryDialog from './components/gallery/GalleryDialog';
import GalleryGrid from './components/gallery/GalleryGrid';
import Editor from './components/editor/Editor';
import Uploader from './components/uploader/Uploader';
import Search from './components/search/Search';

export default function (Vue, options) {
/*
	// Directives
	Vue.directive('mu-load-more', LoadMoreDirective);

	// Filters
	Vue.filter('slugify', SlugifyFilter);
*/
	Vue.component('mu-auth', Auth);
	Vue.component('mu-auth-form', AuthForm);
	Vue.component('mu-panel', Panel);
	Vue.component('mu-container', Container);

	Vue.component('mu-snackbar', Snackbar);
	Vue.component('mu-thumbnail', Thumbnail);
	Vue.component('mu-gallery-single', GallerySingle);
	Vue.component('mu-gallery-dialog', GalleryDialog);
	Vue.component('mu-gallery-grid', GalleryGrid);
	Vue.component('mu-editor', Editor);
	Vue.component('mu-uploader', Uploader);
	Vue.component('mu-search', Search);
}
