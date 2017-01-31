<template>
	<md-checkbox
	>
		{{ label }}
	</md-checkbox>
</template>

<script>
	export default {
		name: 'mu-checkbox',
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
