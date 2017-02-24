<template>
	<div style="flex:1">
		<span class="md-subheading">Change Password</span>

		<!-- Name -->
		<md-input-container
			:class="{'md-input-invalid': errors.has('password')}"
		>
			<label>Password</label>
			<md-input
				type="password"
				data-vv-name="password"
				v-model="password"
				v-validate:name="'min:6'"
			>
			</md-input>

			<span
				class="md-error"
				v-show="errors.has('password')"
			>
				{{ errors.first('password') }}
			</span>
		</md-input-container>
	</div>
</template>

<script>
	export default {
		props: {
			password: ''
		}
	}
</script>

<style>
</style>
