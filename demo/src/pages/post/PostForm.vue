<template>
	<mu-container>
		<md-toolbar slot="header">
			<md-button @click.native="previous" class="md-icon-button">
				<md-icon>arrow_back</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">{{ (action == 'add') ? 'Add' : 'Edit' }} Post</h2>

			<md-button @click.native="submit(success)" class="md-icon-button">
				<md-icon>check</md-icon>
			</md-button>
		</md-toolbar>

		<form class="post__form" ref="form" slot="body">
			<md-layout md-gutter="16">
				<md-layout class="post__main" md-flex-small="100" md-flex="66">
					<adm-post-fieldset :post="post">
					</adm-post-fieldset>
				</md-layout>

				<md-layout class="post__aside" md-flex-small="100" md-flex="33">
					<adm-post-fieldset-category>
					</adm-post-fieldset-category>

					<adm-post-fieldset-thumbnail>
					</adm-post-fieldset-thumbnail>
				</md-layout>
			</md-layout>
		</form>

	</mu-container>
</template>

<script>
	import { validateParent } from '../../mixins/validate';
	import router from '../../router';
	import posts from './mock';
	import PostFieldset from './PostFieldset';
	import PostFieldsetCategory from './PostFieldsetCategory';
	import PostFieldsetThumbnail from './PostFieldsetThumbnail';

	export default {
		mixins: [validateParent],
		components: {
			'adm-post-fieldset': PostFieldset,
			'adm-post-fieldset-category': PostFieldsetCategory,
			'adm-post-fieldset-thumbnail': PostFieldsetThumbnail
		},
		data () {
			return {
				action :'add',
				post: {
					title: '',
					slug: '',
					description: {},
					excerpt: '',
					thumbnail: ''
				}
			}
		},
		beforeRouteEnter (to, from, next) {
			if (to.params.id) {
				setTimeout(() => {
					posts.data.forEach(post => {
						if (post.id == to.params.id) {
							next(vm => {
								vm.post = post;
								vm.action = 'edit';
							})
						}
					});
				}, 100);
			} else {
				next();
			}
		},
		methods: {
			success () {
				this.$logger.success(`Post ${this.post.title} ${this.action == 'add' ? 'created' : 'edited'} successfully!`);
				this.previous();
			},
			previous () {
				router.push('/posts');
			}
		}
	}
</script>


<style lang="sass" scoped>
	.post{
		&__form{
			padding: 16px;
		}
		&__main{
			flex-flow: row wrap;
			align-content: start;
		}
		&__aside{
			flex-flow: column wrap;
		}
	}
</style>
