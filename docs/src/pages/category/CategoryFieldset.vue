<template>
	<md-layout md-gutter="16">
		<md-layout md-flex="100" class="md-subheading">Category</md-layout>

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
					v-model="category.title"
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
					v-model="category.slug"
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
	</md-layout>
</template>

<script>
	import { validateChild } from '../../mixins/validate';

	export default {
		mixins: [validateChild],
		props: {
			category: {
				type: Object,
				default: {
					title: '',
					slug: ''
				}
			}
		}
	}
</script>

<style>
</style>
