<template>
	<md-sidenav class="sidenav md-left" ref="sidenav" @close="closeSidenav">
		<mu-container>
			<md-toolbar slot="header" class="md-account-header">
				<md-list class="md-transparent">
					<md-list-item class="md-avatar-list">
						<md-avatar class="md-large md-avatar-icon">
							<md-icon>
								person
							</md-icon>
						</md-avatar>

						<span style="flex: 1"></span>
					</md-list-item>

					<md-list-item>
						<div class="md-list-text-container">
							<span class="sidenav__user">John Doe</span>
							<span class="sidenav__email">johndoe@email.com</span>
						</div>

						<md-menu md-direction="bottom left" md-size="4">
							<md-button class="sidenav__more md-icon-button" md-menu-trigger>
								<md-icon>arrow_drop_down</md-icon>
							</md-button>

							<md-menu-content>
								<md-menu-item>
									<span>Settings</span>
									<md-icon>settings</md-icon>
								</md-menu-item>

								<md-menu-item @click.native="logout">
									<span>Logout</span>
									<md-icon>power_settings_new</md-icon>
								</md-menu-item>
							</md-menu-content>
						</md-menu>
					</md-list-item>
				</md-list>
			</md-toolbar>

			<md-list slot="body">
				<md-list-item>
					<router-link to="/dashboard" @click.native="closeSidenav">
						<md-icon>dashboard</md-icon>
						<span>Dashboard</span>
					</router-link>
				</md-list-item>

				<md-list-item>
					<router-link to="/users" @click.native="closeSidenav">
						<md-icon>person</md-icon> <span>Users</span>
					</router-link>
				</md-list-item>

				<md-list-item>
					<md-icon>chat_bubble</md-icon> <span>Blog</span>

					<md-list-expand>
						<md-list>
							<md-list-item class="md-inset">
								<router-link to="/posts" @click.native="closeSidenav">
									Posts
								</router-link>
							</md-list-item>

							<md-list-item class="md-inset">
								<router-link to="/categories" @click.native="closeSidenav">
									Categories
								</router-link>
							</md-list-item>
						</md-list>
					</md-list-expand>
				</md-list-item>

				<md-list-item>
					<router-link to="/pages" @click.native="closeSidenav">
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
								<router-link to="/media/photos" @click.native="closeSidenav">
									Photos
								</router-link>
							</md-list-item>

							<md-list-item class="md-inset">
								<router-link to="/media/files" @click.native="closeSidenav">
									Files
								</router-link>
							</md-list-item>
						</md-list>
					</md-list-expand>
				</md-list-item>
			</md-list>
		</mu-container>
	</md-sidenav>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex';
	import router from '../../router';

export default {
	computed: {
		...mapGetters({
			sidenav: 'sidenav/isActive'
		})
	},
	watch: {
		sidenav (value) {
			if (value) {
				this.$refs.sidenav.open();
			} else {
				this.$refs.sidenav.close();
			}
		}
	},
	methods: {
		...mapMutations({
			openSidenav: 'sidenav/open',
			closeSidenav: 'sidenav/close',
			toggleSidenav: 'sidenav/toggle'
		}),
		logou () {
			this.closeSidenav();
			router.push('/home');
		}
	}
}
</script>

<style lang="sass" scoped>
	.sidenav{
		&__email,
		&__more .md-icon{
			color: hsla(0, 0%, 100%, .54);
		}
		&__more{
			margin-right: 0;
		}
	}
</style>
