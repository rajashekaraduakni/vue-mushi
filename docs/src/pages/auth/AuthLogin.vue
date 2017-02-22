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

			<!-- Password Input -->
			<md-input-container
				:class="{'md-input-invalid': errors.has('password')}"
			>
				<label>Password</label>
				<md-input
					type="password"
					data-vv-name="password"
					v-model="password"
					v-validate:password="'required|min:6'"
				>
				</md-input>

				<span
					class="md-error"
					v-show="errors.has('password')"
				>
					{{ errors.first('password') }}
				</span>
			</md-input-container>
		</template>

		<template slot="footer">
			<md-button
				type="submit"
				class="auth__login md-raised md-primary"
			>
				Login
			</md-button>

			<router-link
				class="auth__forgot"
				to="/auth/forgot"
			>
				Forgot password?
			</router-link>
		</template>
	</mu-auth-form>
</template>

<script>
	export default {
		data() {
			return {
				email: '',
				password: ''
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
		&__login{
			margin: 0;
			width: 100%;
		}
		&__forgot{
			display: block;
			font-size: 12px;
			margin-top: 15px;
		}
	}
</style>
