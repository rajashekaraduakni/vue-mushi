<template>
	<mu-container>
		<md-toolbar slot="header" class="dashboard__header">
			<md-button @click.native="openSidenav('left')" class="md-icon-button">
				<md-icon>menu</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Users</h2>
		</md-toolbar>

		<md-list slot="body">
			<adm-user-list-item
				v-for="user in users"
				:user="user"
				@click="editUser"
				@delete="deleteUser"
			>
			</adm-user-list-item>
		</md-list>

		<mu-container slot="sidenav">
			<md-toolbar slot="header">
				<md-button class="md-icon-button">
					<md-icon>menu</md-icon>
				</md-button>
			</md-toolbar>
		</mu-container>

		<div slot="footer" class="dashboard__footer">
			<md-button href="/#/panel/users/add" class="md-fab md-fab-bottom-right">
				<md-icon>add</md-icon>
			</md-button>
		</div>
	</mu-container>
</template>

<script>
	import { mapMutations } from 'vuex';
	import router from '../../../router';
	import users from '../mock';
	import UserListItem from './UserListItem'; 

	export default {
		components: {
			'adm-user-list-item': UserListItem
		},
		data () {
			return {
				users: users.data
			}
		},
		methods: {
			...mapMutations({
				openSidenav: 'sidenav/open',
			}),
			editUser (user) {
				router.push('/panel/users/edit/' + user.id);
			},
			deleteUser (user) {
				let index = this.users.indexOf(user),
					vm = this;

				if (index != -1) {
					this.users.splice(index, 1);
					this.$store.commit('mushi/logger/success', {
						text: 'User ' + user.name + ' deleted successfully!',
						action: 'Undo',
						callback () {
							vm.users.unshift(user);
						}
					})
				}
			}
		}
	}
</script>

<style>
</style>
