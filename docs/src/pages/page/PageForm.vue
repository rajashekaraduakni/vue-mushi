<template>
	<mu-container>
		<md-toolbar slot="header">
			<md-button href="/#/panel/pages" class="md-icon-button">
				<md-icon>arrow_back</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">{{ (action == 'add') ? 'Add' : 'Edit' }} Page</h2>

			<md-button @click.native="submit(success)" class="md-icon-button">
				<md-icon>check</md-icon>
			</md-button>
		</md-toolbar>

		<form
			ref="form"
			class="page__form"
			slot="body"
		>
			<md-layout md-gutter="16">
				<md-layout
					class="page__main"
					md-flex-small="100"
					md-flex="66"
				>
					<adm-page-fieldset :page="page">
					</adm-page-fieldset>
				</md-layout>

				<md-layout
					class="page__aside"
					md-flex-small="100"
					md-flex="33"
				>
					<adm-page-fieldset-category>
					</adm-page-fieldset-category>

					<mu-gallery-single ref="thumbnail">
						<adm-media-photo-form
							slot="sidenav"
							@close="$refs.thumbnail.closeSidenav()"
							@confirm="$refs.thumbnail.closeSidenav()"
						>
						</adm-media-photo-form>
					</mu-gallery-single>

				</md-layout>
			</md-layout>
		</form>
	</mu-container>
</template>

<script>
	import { validateParent } from '../../mixins/validate';
	import router from '../../router';
	import pages from './mock';
	import PageFieldset from './PageFieldset';
	import PageFieldsetCategory from './PageFieldsetCategory';
	import MediaPhotoForm from '../media/media-photo/MediaPhotoForm';

	export default {
		components: {
			'adm-page-fieldset': PageFieldset,
			'adm-page-fieldset-category': PageFieldsetCategory,
			'adm-media-photo-form': MediaPhotoForm
		},
		mixins: [validateParent],
		data () {
			return {
				page: {
					title: '',
					slug: '',
					description: {},
					excerpt: '',
					thumbnail: ''
				},
				action: 'add'
			}
		},
		beforeRouteEnter(to, from, next) {
			// Get the page if router has id parameter
			if (to.params.id) {
				setTimeout(() => {
					pages.data.forEach(page => {
						if (page.id == to.params.id) {
							next(vm => {
								vm.page = page;
								vm.action = 'edit';
							});
						}
					});
				}, 100);
			// Otherwise continue
			} else {
				next();
			}
		},
		methods: {
			success () {
				this.$store.commit('mushi/logger/success', {
					text: 'Page ' + this.page.title + ' ' + (this.action == 'add' ? 'created' : 'edited') + ' successfully!',
					action: 'Dismiss'
				});
				router.push('/panel/pages');
			}
		}
	}
</script>

<style lang="sass" scoped>
	.page{
		&__form{
			padding: 16px;
		}
		&__main,
		&__aside{
			flex-flow: column wrap;
		}
	}
</style>
