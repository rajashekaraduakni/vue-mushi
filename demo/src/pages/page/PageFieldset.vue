<template>
	<md-layout md-gutter="16">
		<md-layout md-flex="100" class="md-subheading">Page</md-layout>

		<md-layout
			md-flex="50"
			md-flex-small="100"
		>
			<!-- Title -->
			<md-input-container
				:class="{'md-input-invalid': errors.has('title')}"
			>
				<label>Title</label>
				<md-input
					data-vv-name="title"
					v-model="page.title"
					v-validate:title="'required|min:4'"
				>
				</md-input>

				<span
					class="md-error"
					v-show="errors.has('title')"
				>
					{{ errors.first('title') }}
				</span>
			</md-input-container>
		</md-layout>

		<md-layout
			md-flex="50"
			md-flex-small="100"
		>
			<!-- Slug -->
			<md-input-container
				:class="{'md-input-invalid': errors.has('slug')}"
			>
				<label>Slug</label>
				<md-input
					data-vv-name="slug"
					v-model="page.slug"
					v-validate:slug="'required|min:4'"
				>
				</md-input>

				<span
					class="md-error"
					v-show="errors.has('slug')"
				>
					{{ errors.first('slug') }}
				</span>
			</md-input-container>
		</md-layout>

		<md-layout
			md-flex="100"
		>
			<mu-editor
				label="Description"
				rows="20"
				v-model="page.description"
			>
			</mu-editor>
		</md-layout>

		<md-layout
			md-flex="100"
		>
			<!-- Excerpt -->
			<md-input-container
				:class="{'md-input-invalid': errors.has('excerpt')}"
			>
				<label>Excerpt</label>
				<md-textarea
					data-vv-name="excerpt"
					v-model="page.excerpt"
					v-validate:excerpt="'max:140'"
					maxlength="140"
				>
				</md-textarea>

				<span
					class="md-error"
					v-show="errors.has('excerpt')"
				>
					{{ errors.first('excerpt') }}
				</span>
			</md-input-container>
		</md-layout>

		<md-layout
			md-flex="100"
		>
			<mu-gallery-multiple
				ref="gallery"
				ratio="4:3"
			>
			</mu-gallery-multiple>
		</md-layout>
	</md-layout>
</template>

<script>
	import { validateChild } from '../../mixins/validate';

	export default {
		mixins: [validateChild],
		components: {},
		props: {
			page: {
				Type: Object,
				default () {
					return {
						title: '',
						slug: '',
						description: {},
						excerpt: '',
						thumbnail: ''
					}
				}
			}
		},
		data () {
			return {
				queue: [],
				images: [
					{ url: '1' },
					{ url: '2' },
					{ url: '3' },
					{ url: '4' },
					{ url: '5' },
					{ url: '6' },
					{ url: '7' },
					{ url: '8' },
					{ url: '9' },
					{ url: '10' },
					{ url: '11' },
					{ url: '12' },
					{ url: '13' },
					{ url: '14' },
					{ url: '15' },
					{ url: '16' },
					{ url: '17' },
					{ url: '18' },
					{ url: '19' },
					{ url: '20' }
				]
			}
		}
	}
</script>

<style>
</style>
