<template>
	<mu-container>
		<md-toolbar slot="header">
			<md-button @click.native="previous" class="md-icon-button">
				<md-icon>arrow_back</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">{{ (action == 'add') ? 'Add' : 'Edit' }} User</h2>

			<md-button @click.native="submit(success)" class="md-icon-button">
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
					class="user__main"
					md-flex-small="100"
					md-flex="66"
				>
					<adm-user-fieldset :user="user">
					</adm-user-fieldset>

					<adm-user-fieldset-password>
					</adm-user-fieldset-password>
				</md-layout>

				<md-layout
					class="user__aside"
					md-flex-small="100"
					md-flex="33"
				>
					<adm-user-fieldset-avatar>
					</adm-user-fieldset-avatar>
				</md-layout>
			</md-layout>
		</form>
	</mu-container>
</template>

<script>
	import { validateParent } from '../../../mixins/validate';
	import router from '../../../router';
	import users from '../mock';
	import UserFieldset from '../user-fieldset/UserFieldset';
	import UserFieldsetPassword from '../user-fieldset/UserFieldsetPassword';
	import UserFieldsetAvatar from '../user-fieldset/UserFieldsetAvatar';

	export default {
		components: {
			'adm-user-fieldset': UserFieldset,
			'adm-user-fieldset-password': UserFieldsetPassword,
			'adm-user-fieldset-avatar': UserFieldsetAvatar
		},
		mixins: [validateParent],
		data () {
			return {
				user: {
					name: '',
					email: ''
				},
				password: '',
				action: 'add'
			}
		},
		beforeRouteEnter(to, from, next) {
			// Get the user if router has id parameter
			if (to.params.id) {
				setTimeout(() => {
					users.data.forEach(user => {
						if (user.id == to.params.id) {
							next(vm => {
								vm.user = user;
								vm.action = 'edit';
							});
						}
					});
				}, 100);
			// Otherwise continue
			} else {
				next();
			}
		},
		methods: {
			success () {
				this.$store.commit('mushi/logger/success', {
					text: 'User ' + this.user.name + ' ' + (this.action == 'add' ? 'created' : 'edited') + ' successfully!',
					action: 'Dismiss'
				});
				this.previous();
			},
			previous () {
				router.push('/panel/users');
			}
		}
	}
</script>

<style lang="sass" scoped>
	.user{
		&__form{
			padding: 16px;
		}
		&__main,
		&__aside{
			flex-flow: column wrap;
		}
	}
</style>
