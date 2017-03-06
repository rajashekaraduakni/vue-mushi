<template>
	<div>
		<span class="md-subheading">Category</span>

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
	</div>
</template>

<script>
	import { validateChild } from '../../mixins/validate';

	export default {
		mixins: [validateChild],
		props: {
			category: {
				type: Object,
				default: () => {
					title: ''
				}
			}
		}
	}
</script>

<style>
</style>
