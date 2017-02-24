<template>
	<mu-container>
		<md-toolbar slot="header" class="dashboard__header">
			<md-button @click.native="openSidenav('left')" class="md-icon-button">
				<md-icon>arrow_back</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Add User</h2>

			<md-button @click.native="submit" class="md-icon-button">
				<md-icon>check</md-icon>
			</md-button>
		</md-toolbar>

		<form
			ref="form"
			class="user__form"
			slot="body"
		>
			<md-layout md-gutter="16">
				<md-layout
					md-flex-small="100"
					md-flex="66"
				>
					<adm-user-fieldset>
					</adm-user-fieldset>
				</md-layout>

				<md-layout
					md-flex-small="100"
					md-flex="33"
				>
					<adm-user-fieldset-password :password="password">
					</adm-user-fieldset-password>
				</md-layout>
			</md-layout>
		</form>
	</mu-container>
</template>

<script>
	import { mapMutations } from 'vuex';
	import router from '../../../router';
	import users from '../mock';
	import UserFieldset from '../user-fieldset/UserFieldset';
	import UserFieldsetPassword from '../user-fieldset/UserFieldsetPassword';

	export default {
		components: {
			'adm-user-fieldset': UserFieldset,
			'adm-user-fieldset-password': UserFieldsetPassword
		},
		data () {
			return {
				user: users.data[0],
				password: ''
			}
		},
		created () {
			this.$bus.on('errors-changed', (errors) => {
				this.errors.clear();
				errors.forEach(e => {
					this.errors.add(e.field, e.msg, e.rule, e.scope);
				});
			})
		},
		methods: {
			...mapMutations({
				openSidenav: 'sidenav/open',
			}),
			submit () {
				this.validate();
				this.$bus.once('errors-changed', () => {
					if (this.errors.errors.length == 0)
						router.push('/panel/users')
				})
			},
			validate () {
				this.$bus.emit('validate');
			}
		},
		beforeDestroy () {
			this.$bus.off('errors-changed');
		}
	}
</script>

<style lang="sass" scoped>
	.user{
		&__form{
			padding: 16px;
		}
	}
</style>
