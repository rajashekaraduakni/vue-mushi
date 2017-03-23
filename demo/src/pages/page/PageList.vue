<template>
	<mu-container>
		<md-toolbar slot="header" class="dashboard__header">
			<md-button @click.native="openSidenav('left')" class="md-icon-button">
				<md-icon>menu</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Pages</h2>

			<mu-search>
			</mu-search>

			<md-button class="md-icon-button" @click.native="$refs.filter.open()">
				<md-icon>filter_list</md-icon>
			</md-button>

			<adm-page-filter ref="filter">
			</adm-page-filter>
		</md-toolbar>

		<md-list slot="body">
			<adm-page-item
				v-for="page in pages"
				:page="page"
				@click="editPage"
				@delete="deletePage"
			>
			</adm-page-item>
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
	import pages from './mock';
	import PageItem from './PageItem'; 
	import PageFilter from './PageFilter';

	export default {
		components: {
			'adm-page-item': PageItem,
			'adm-page-filter': PageFilter
		},
		data () {
			return {
				pages: pages.data
			}
		},
		methods: {
			...mapMutations({
				openSidenav: 'sidenav/open',
			}),
			editPage (page) {
				router.push('/pages/edit/' + page.id);
			},
			deletePage (page) {
				let index = this.pages.indexOf(page),
					vm = this;

				if (index != -1) {
					this.pages.splice(index, 1);
					this.$logger.success(`Page ${page.title} deleted successfully!`,
						'Undo', 4000,
						() => {
							vm.pages.unshift(page);
						}
					)
				}
			},
			add () {
				router.push('/pages/add');
			}
		}
	}
</script>

<style>
</style>
