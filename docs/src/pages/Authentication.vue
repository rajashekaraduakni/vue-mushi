<template>
	<mu-auth
		background="/assets/images/abstract-shape.jpg"
		@submit="validateBeforeSubmit"
	>
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
	</mu-auth>
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
						console.log('test');
						if (!success) {
							return;
						}

						alert('Form Submitted!');
					})
			}
		}
	}
	</script>

	<style>
	</style>
