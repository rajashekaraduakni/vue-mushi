<template>
	<md-input-container>
		<label>
			{{ label }}
		</label>

		<md-select
			:value="value"
			:required="required"
			@change="onChange"
		>
			<md-option
				:value="option.value"
				v-for="option in options"
			>
				{{ option.label }}
			</md-option> 
		</md-select>
	</md-input-container>
</template>

<script>
	export default {
		name: 'mu-select',
		props: ["value", "label", "required", "options"],
		methods: {
			onChange (event) {
				this.$emit('input', event);
				this.$emit('change', event);
			}
		}
	}
</script>

<style scoped>

</style>
