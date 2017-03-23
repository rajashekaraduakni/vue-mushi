<template>
	<mu-container>
		<md-toolbar slot="header" class="dashboard__header">
			<md-button @click.native="openSidenav('left')" class="md-icon-button">
				<md-icon>menu</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Users</h2>

			<mu-search>
			</mu-search>

			<md-button class="md-icon-button" @click.native="$refs.filter.open()">
				<md-icon>filter_list</md-icon>
			</md-button>

			<adm-user-filter ref="filter">
			</adm-user-filter>
		</md-toolbar>

		<md-list slot="body">
			<adm-user-item
				v-for="user in users"
				:user="user"
				@click="editUser"
				@delete="deleteUser"
			>
			</adm-user-item>
		</md-list>

		<div slot="footer" class="dashboard__footer">
			<md-button @click.native="add" class="md-fab md-fab-bottom-right">
				<md-icon>add</md-icon>
			</md-button>
		</div>
	</mu-container>
</template>

<script>
	import { mapMutations } from 'vuex';
	import router from '../../router';
	import users from './mock';
	import UserItem from './UserItem'; 
	import UserFilter from './UserFilter'; 

	export default {
		components: {
			'adm-user-item': UserItem,
			'adm-user-filter': UserFilter
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
					this.$logger.success(
						`User ${user.name} deleted!`,
						'Undo', 4000, () => {
							vm.users.unshift(user);

							this.$logger.success(
								`User ${user.name} restored!`
							);
						}
					);
				}
			},
			add () {
				router.push('/panel/users/add');
			}
		}
	}
</script>
