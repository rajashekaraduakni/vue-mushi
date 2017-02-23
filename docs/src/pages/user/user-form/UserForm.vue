<template>
	<mu-container>
		<md-toolbar slot="header" class="dashboard__header">
			<md-button @click.native="openSidenav('left')" class="md-icon-button">
				<md-icon>menu</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Add User</h2>
		</md-toolbar>

		<div slot="body">

		</div>
	</mu-container>
</template>

<script>
	import { mapMutations } from 'vuex';
	import users from '../mock';

	export default {
		data () {
			return {
				user: users.data[0]
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
