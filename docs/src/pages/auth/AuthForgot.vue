<template>
	<mu-auth-form
		@submit="validateBeforeSubmit"
	>
		<template slot="form">
			<!-- Email Input -->
			<md-input-container
				:class="{'md-input-invalid': errors.has('email')}"
			>
				<label>Email</label>
				<md-input
					data-vv-name="email"
					v-model="email"
					v-validate:email="'required|email'"
				>
				</md-input>

				<span
					class="md-error"
					v-show="errors.has('email')"
				>
					{{ errors.first('email') }}
				</span>
			</md-input-container>
		</template>

		<template slot="footer">
			<md-button
				type="submit"
				class="auth__submit md-raised md-primary"
			>
				Submit
			</md-button>

			<router-link
				class="auth__login"
				to="/auth/login"
			>
				Already has an account? Login!
			</router-link>
		</template>
	</mu-auth-form>
</template>

<script>
	export default {
		data () {
			return {
				email: ''
			}
		},
		methods: {
			validateBeforeSubmit() {
				this.$validator.validateAll()
					.then(success => {
						if (!success) {
							return;
						}

						alert('Form Submitted!');
					})
			}

		}
	}
</script>

<style lang="sass" scoped>
	.auth{
		&__submit{
			margin: 0;
			width: 100%;
		}
		&__login{
			display: block;
			font-size: 12px;
			margin-top: 15px;
		}
	}

</style>
