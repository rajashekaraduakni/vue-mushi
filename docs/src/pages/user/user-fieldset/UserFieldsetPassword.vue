<template>
	<div style="flex:1">
		<span class="md-subheading">Change Password</span>

		<!-- Password -->
		<md-input-container
			:class="{'md-input-invalid': errors.has('password')}"
		>
			<label>Password</label>
			<md-input
				type="password"
				data-vv-name="password"
				v-model="password"
				v-validate:name="'confirmed:confirm|min:6'"
			>
			</md-input>

			<span
				class="md-error"
				v-show="errors.has('password')"
			>
				{{ errors.first('password') }}
			</span>
		</md-input-container>

		<!-- Password -->
		<md-input-container
			:class="{'md-input-invalid': errors.has('confirm')}"
		>
			<label>Confirm</label>
			<md-input
				type="password"
				name="confirm"
				data-vv-name="confirm"
				v-model="confirm"
				v-validate:name="'min:6'"
			>
			</md-input>

			<span
				class="md-error"
				v-show="errors.has('confirm')"
			>
				{{ errors.first('confirm') }}
			</span>
		</md-input-container>
	</div>
</template>

<script>
	import { validateChild } from '../../../mixins/validate';

	export default {
		mixins: [validateChild],
		data () {
			return {
				password: '',
				confirm: ''
			}
		}
	}
</script>

<style>
</style>
