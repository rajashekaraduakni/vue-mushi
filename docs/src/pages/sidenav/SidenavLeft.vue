<template>
	<mu-container class="sidenav">
		<md-toolbar slot="header" class="md-account-header">
			<md-list class="md-transparent">
				<md-list-item class="md-avatar-list">
					<md-avatar class="md-large">
						<img src="https://placeimg.com/64/64/people/8" alt="People">
					</md-avatar>

					<span style="flex: 1"></span>

				</md-list-item>

				<md-list-item>
					<div class="md-list-text-container">
						<span class="sidenav__user">John Doe</span>
						<span class="sidenav__email">johndoe@email.com</span>
					</div>

					<md-menu md-direction="bottom left" md-size="4">
						<md-button class="md-icon-button" md-menu-trigger>
							<md-icon>arrow_drop_down</md-icon>
						</md-button>

						<md-menu-content>
							<md-menu-item>
								<span>Settings</span>
								<md-icon>near_me</md-icon>
							</md-menu-item>

							<md-menu-item @click.native="logout">
								<span>Logout</span>
								<md-icon>phone</md-icon>
							</md-menu-item>
						</md-menu-content>
					</md-menu>
				</md-list-item>
			</md-list>
		</md-toolbar>

		<md-list slot="body">
			<md-list-item>
				<router-link to="/dashboard">
					<md-icon>dashboard</md-icon>
					<span>Dashboard</span>
				</router-link>
			</md-list-item>

			<md-list-item>
				<router-link to="/users">
					<md-icon>person</md-icon> <span>Users</span>
				</router-link>
			</md-list-item>

			<md-list-item>
				<md-icon>chat_bubble</md-icon> <span>Blog</span>

				<md-list-expand>
					<md-list>
						<md-list-item class="md-inset">Posts</md-list-item>
						<md-list-item class="md-inset">Categories</md-list-item>
					</md-list>
				</md-list-expand>
			</md-list-item>

			<md-list-item>
				<router-link to="/pages">
					<md-icon>insert_drive_file</md-icon> <span>Pages</span>
				</router-link>
			</md-list-item>

			<md-list-item>
				<md-icon>event</md-icon> <span>Events</span>
			</md-list-item>

			<md-list-item>
				<md-icon>photo_library</md-icon> <span>Media</span>

				<md-list-expand>
					<md-list>
						<md-list-item class="md-inset">
							<router-link to="/media/photos">
								Photos
							</router-link>
						</md-list-item>

						<md-list-item class="md-inset">
							<router-link to="/media/files">
								Files
							</router-link>
						</md-list-item>
					</md-list>
				</md-list-expand>
			</md-list-item>

			<md-list-item>
				<md-icon>group_work</md-icon> <span>Partners</span>
			</md-list-item>

			<md-list-item>
				<md-icon>star_rate</md-icon> <span>Volunteers</span>
			</md-list-item>

			<md-list-item class="md-warn">
				<md-icon class="md-warn">favorite</md-icon> <span>Donations</span>
			</md-list-item>
		</md-list>
	</mu-container>
</template>

<script>
	import router from '../../router';

	export default {
		methods: {
			logout () {
				router.push('/');
			}
		}
	}
</script>

<style lang="sass" scoped>
	.sidenav{
		&__email{
			color: hsla(0, 0%, 100%, .54);
		}
	}
</style>
