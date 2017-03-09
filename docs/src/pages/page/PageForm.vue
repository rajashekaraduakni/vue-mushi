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

					<adm-page-fieldset-thumbnail>
					</adm-page-fieldset-thumbnail>
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
	import PageFieldsetThumbnail from './PageFieldsetThumbnail';

	export default {
		components: {
			'adm-page-fieldset': PageFieldset,
			'adm-page-fieldset-category': PageFieldsetCategory,
			'adm-page-fieldset-thumbnail': PageFieldsetThumbnail
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
				this.previous()
			},
			previous () {
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
