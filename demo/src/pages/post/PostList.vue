<template>
	<mu-container>
		<md-toolbar slot="header">
			<md-button @click.native="openSidenav('left')" class="md-icon-button">
				<md-icon>menu</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Posts</h2>

			<mu-search>
			</mu-search>

			<md-button class="md-icon-button" @click.native="$refs.filter.open()">
				<md-icon>filter_list</md-icon>
			</md-button>

			<adm-post-filter ref="filter">
			</adm-post-filter>
		</md-toolbar>

		<md-list slot="body">
			<adm-post-item
				v-for="post in posts"
				:post="post"
				@click="editPost"
				@delete="deletePost"
			>
			</adm-post-item>
		</md-list>

		<template slot="footer">
			<md-button @click.native="add" class="md-fab md-fab-bottom-right">
				<md-icon>add</md-icon>
			</md-button>
		</template>
	</mu-container>
</template>

<script>
	import { mapMutations } from 'vuex';
	import router from '../../router';
	import posts from './mock';
	import PostItem from './PostItem';
	import PostFilter from './PostFilter';

	export default {
		components: {
			'adm-post-item': PostItem,
			'adm-post-filter': PostFilter
		},
		data () {
			return {
				posts: posts.data
			}
		},
		methods: {
			...mapMutations({
				openSidenav: 'sidenav/open',
			}),
			editPost (post) {
				router.push('/posts/edit/' + post.id);
			},
			deletePost (post) {
				let index = this.posts.indexOf(post),
					vm = this;

				if (index != -1) {
					this.posts.splice(index, 1);
					this.$logger.success(`Post ${post.title} deleted successfully!`,
						'Undo', 4000,
						() => {
							vm.posts.unshift(post);
						}
					)
				}
			},
			add () {
				router.push('/posts/add');
			}
		}
	}
</script>

<style>

</style>
