<template>
	<mu-container>
		<md-toolbar slot="header" class="dashboard__header">
			<md-button @click.native="openSidenav('left')" class="md-icon-button">
				<md-icon>menu</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Categories</h2>

			<mu-search>
			</mu-search>
		</md-toolbar>

		<md-list slot="body">
			<adm-category-item
				v-for="category in categories"
				:category="category"
				@click="editCategory"
				@delete="deleteCategory"
			>
			</adm-category-item>
		</md-list>

		<div slot="footer" class="dashboard__footer">
			<md-button @click.native="add" class="md-fab md-fab-bottom-right">
				<md-icon>add</md-icon>
			</md-button>
		</div>
	</mu-container>
</template>

<script>
	import { mapMutations } from 'vuex';
	import router from '../../router';
	import categories from './mock';
	import CategoryItem from './CategoryItem'; 

	export default {
		components: {
			'adm-category-item': CategoryItem
		},
		data () {
			return {
				categories: categories.data
			}
		},
		methods: {
			...mapMutations({
				openSidenav: 'sidenav/open',
			}),
			editCategory (category) {
				router.push('/categories/edit/' + category.id);
			},
			deleteCategory (category) {
				let index = this.categories.indexOf(category),
					vm = this;

				if (index != -1) {
					this.categories.splice(index, 1);
					this.$logger.success(
						`Category ${category.title} deleted successfully!`,
						'Undo', 4000,
						() => {
							vm.categories.unshift(category);
						}
					)
				}
			},
			add () {
				router.push('/categories/add');
			}
		}
	}
</script>

<style>
</style>
