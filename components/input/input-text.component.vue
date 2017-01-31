<template>
	<md-input-container
		:class="{ 'md-input-invalid': hasErrors() && touched }"
	>
		<label>
			{{ label }}
		</label>

		<md-input
			:type="type"
			:value="value"
			:required="required"
			@change="onChange"
			@blur.native="onBlur; validate"
			@focus.native="onFocus"
		>
		</md-input>

		<template v-if="hasErrors() && touched">
			<span class="md-error" v-if="isEmpty()">
				This field is required
			</span>

			<span class="md-error" v-else-if="hasMinlength()">
				Minlength is {{ minlength }}
			</span>

			<span class="md-error" v-else-if="hasMaxlength()">
				Maxlength is {{ maxlength }}
			</span>
		</template>
	</md-input-container>
</template>

<script>
	import common from './common';

	export default {
		name: 'mu-input-text',
		mixins: [common],
		props: {
			type: {
				type: String,
				default: 'text'
			}
		}
	}
</script>

<style scoped>

</style>
