import {
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
	ListLayout,
	FormLayout,
	SidebarLayout
} from './layouts';

import {
	LoadMoreDirective
} from './directives';

import {
	SlugifyFilter
} from './filters';

export default function (Vue, options) {
	// Inputs
	Vue.component('mu-input-text', InputTextComponent); // mu-text is better?
	Vue.component('mu-input-textarea', InputTextareaComponent); // mu-textarea is better?
	Vue.component('mu-select', SelectComponent);
	Vue.component('mu-checkbox', CheckboxComponent);
	Vue.component('mu-editor', EditorComponent);

	// Miscellaneous
	Vue.component('mu-snackbar', SnackbarComponent);
	Vue.component('mu-uploader', UploaderComponent);

	// Gallery
	Vue.component('mu-gallery-thumbnail', GalleryThumbnailComponent);
	Vue.component('mu-gallery-single', GallerySingleComponent);
	Vue.component('mu-gallery-multiple', GalleryMultipleComponent);
	Vue.component('mu-gallery-dialog', GalleryDialogComponent);

	// Layouts
	Vue.component('mu-list-layout', ListLayout);
	Vue.component('mu-form-layout', FormLayout);
	Vue.component('mu-sidebar-layout', SidebarLayout);

	// Directives
	Vue.directive('mu-load-more', LoadMoreDirective);

	// Filters
	Vue.filter('slugify', SlugifyFilter);
}
