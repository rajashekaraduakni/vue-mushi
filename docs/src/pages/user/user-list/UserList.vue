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
			>
			</adm-user-list-item>
		</md-list>

		<div slot="footer" class="dashboard__footer">
			<md-speed-dial md-mode="scale" class="md-fab-bottom-right">
				<md-button class="md-fab" md-fab-trigger>
					<md-icon md-icon-morph>close</md-icon>
					<md-icon>share</md-icon>
				</md-button>

				<md-button class="md-fab md-mini md-clean">
					<md-icon>email</md-icon>
				</md-button>

				<md-button class="md-fab md-mini md-clean">
					<md-icon>content_copy</md-icon>
				</md-button>
			</md-speed-dial>
		</div>
	</mu-container>
</template>

<script>
	import { mapMutations } from 'vuex';
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
			})
		}
	}
</script>

<style>
</style>
