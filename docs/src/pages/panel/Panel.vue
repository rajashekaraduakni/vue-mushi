<template>
	<mu-panel
		class="panel"
		ref="panel"
	>
		<template
			class="panel__sidenav panel__sidebar--left"
			slot="sidenav-left"
		>
			<md-list>
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

					<span class="md-list-action">
						<span class="sidebar__notification sidebar__notification--accent">2</span>
					</span>
				</md-list-item>
			</md-list>
		</template>

		<template
			class="panel__container"
			slot="container"
		>
			<md-button @click.native="openSidenav('left')">Open Left Sidenav</md-button>
			<md-button @click.native="openSidenav('right')">Open Right Sidenav</md-button>
			<router-view></router-view>
		</template>

		<template
			class="panel__sidenav panel__sidenar--right"
			slot="sidenav-right"
		>
			<h1>Test</h1>
		</template>
	</mu-panel>
</template>

<script>
	export default {
		methods: {
			openSidenav (side) {
				this.$refs.panel.openSidenav(side);
			},
			closeSidenav (side) {
				this.$refs.panel.closeSidenav(right);
			}
		}
	}
</script>

<style>
	.panel{
		&__container{
			
		}
	}
</style>
