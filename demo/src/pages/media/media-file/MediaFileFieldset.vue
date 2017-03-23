<template>
	<div>
		<!-- Title -->
		<md-input-container
			:class="{'md-input-invalid': errors.has('title')}"
		>
			<label>Title</label>
			<md-input
				data-vv-name="title"
				v-model="media.title"
				v-validate:name="'min:4'"
			>
			</md-input>

			<span
				class="md-error"
				v-show="errors.has('title')"
			>
				{{ errors.first('title') }}
			</span>
		</md-input-container>

		<!-- Description -->
		<md-input-container>
			<label>Description</label>
			<md-textarea
				data-vv-name="description"
				v-model="media.description"
			>
			</md-textarea>
		</md-input-container>
	</div>
</template>

<script>
	export default {
		props: {
			media: {
				type: Object,
				default: () => {
					return {
						title: '',
						descriptions: ''
					}
				}
			}
		}
	}
</script>

<style>
	
</style>
