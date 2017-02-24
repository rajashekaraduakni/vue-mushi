<template>
	<div style="flex:1">
		<span class="md-subheading">User</span>

		<!-- Name -->
		<md-input-container
			:class="{'md-input-invalid': errors.has('name')}"
		>
			<label>Name</label>
			<md-input
				data-vv-name="name"
				v-model="user.name"
				v-validate:name="'required|min:4'"
			>
			</md-input>

			<span
				class="md-error"
				v-show="errors.has('name')"
			>
				{{ errors.first('name') }}
			</span>
		</md-input-container>

		<!-- Email -->
		<md-input-container
			:class="{'md-input-invalid': errors.has('email')}"
		>
			<label>Email</label>
			<md-input
				data-vv-name="email"
				v-model="user.email"
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
	</div>
</template>

<script>
	export default {
		props: {
			user: {
				type: Object,
				default: () => {
					return { email: '', name: '' }
				}
			}
		},
		created () {
			this.$bus.on('validate', this.onValidate);
			this.$watch(() => this.errors.errors, (value) => {
				this.$bus.emit('errors-changed', value);
			});
		},
		methods: {
			onValidate () {
				this.$validator.validateAll()
			}
		},
		beforeDestroy () {
			this.$bus.off('validate', this.onValidate);
		}
	}
</script>

<style>
</style>
