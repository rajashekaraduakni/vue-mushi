<template>
	<mu-container>
		<md-toolbar slot="header">
			<md-button @click.native="previous" class="md-icon-button">
				<md-icon>arrow_back</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">{{ (action == 'add') ? 'Add' : 'Edit' }} Page</h2>

			<md-button @click.native="submit(success)" class="md-icon-button">
				<md-icon>check</md-icon>
			</md-button>
		</md-toolbar>

		<md-tabs slot="body" md-fixed>
			<md-tab id="movies" md-label="Movies">
				<form
					ref="form"
					class="page__form"
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

							<adm-media-thumbnail>
							</adm-media-thumbnail>
						</md-layout>
					</md-layout>
				</form>
			</md-tab>

			<md-tab id="music" md-label="Music">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
			</md-tab>

			<md-tab id="books" md-label="Books">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
			</md-tab>

			<md-tab id="pictures" md-label="Pictures">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
			</md-tab>
		</md-tabs>
	</mu-container>
</template>

<script>
	import { validateParent } from '../../mixins/validate';
	import router from '../../router';
	import pages from './mock';
	import PageFieldset from './PageFieldset';
	import PageFieldsetCategory from './PageFieldsetCategory';
	import MediaThumbnail from '../media/MediaThumbnail';

	export default {
		components: {
			'adm-page-fieldset': PageFieldset,
			'adm-page-fieldset-category': PageFieldsetCategory,
			'adm-media-thumbnail': MediaThumbnail
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
				this.$logger.success(`Page ${this.page.title} ${this.action == 'add' ? 'created' : 'edited'} successfully!`);
				this.previous()
			},
			previous () {
				router.push('/pages');
			}
		}
	}
</script>

<style lang="sass" scoped>
	.page{
		&__form{
		}
		&__main,
		&__aside{
			flex-flow: column wrap;
		}
	}
</style>
