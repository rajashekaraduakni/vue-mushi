<template>
	<mu-container>
		<md-toolbar slot="header">
			<md-button @click.native="previous" class="md-icon-button">
				<md-icon>arrow_back</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">{{ (action == 'add') ? 'Add' : 'Edit' }} Category</h2>

			<md-button @click.native="submit(success)" class="md-icon-button">
				<md-icon>check</md-icon>
			</md-button>
		</md-toolbar>

		<form
			ref="form"
			class="category__form"
			slot="body"
		>
			<md-layout md-gutter="16">
				<md-layout
					class="category__main"
					md-flex-small="100"
					md-flex="66"
				>
					<adm-category-fieldset :category="category">
					</adm-category-fieldset>
				</md-layout>

				<md-layout
					class="category__aside"
					md-flex-small="100"
					md-flex="33"
				>
				</md-layout>
			</md-layout>
		</form>
	</mu-container>
</template>

<script>
	import { validateParent } from '../../mixins/validate';
	import router from '../../router';
	import categories from './mock';
	import CategoryFieldset from './CategoryFieldset';

	export default {
		components: {
			'adm-category-fieldset': CategoryFieldset
		},
		mixins: [validateParent],
		data () {
			return {
				category: {
					title: '',
					slug: ''
				},
				action: 'add'
			}
		},
		beforeRouteEnter(to, from, next) {
			// Get the category if router has id parameter
			if (to.params.id) {
				setTimeout(() => {
					categories.data.forEach(category => {
						if (category.id == to.params.id) {
							next(vm => {
								vm.category = category;
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
					text: 'Category ' + this.category.title + ' ' + (this.action == 'add' ? 'created' : 'edited') + ' successfully!',
					action: 'Dismiss'
				});
				this.previous()
			},
			previous () {
				router.push('/panel/categories');
			}
		}
	}
</script>

<style lang="sass" scoped>
	.category{
		&__form{
			padding: 16px;
		}
		&__main,
		&__aside{
			flex-flow: column wrap;
		}
	}
</style>
