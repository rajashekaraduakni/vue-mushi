<template>
	<md-input-container
		:class="{ 'md-input-invalid': hasErrors() && touched }"
	>
		<label>
			{{ label }}
		</label>

		<md-textarea
			:value="value"
			:maxlength="maxlength"
			:required="required"
			@change="onChange"
			@blur.native="onBlur; validate"
			@focus.native="onFocus"
		>
		</md-textarea>

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
		name: 'mu-input-textarea',
		mixins: [common]
	}
</script>

<style scoped>

</style>
