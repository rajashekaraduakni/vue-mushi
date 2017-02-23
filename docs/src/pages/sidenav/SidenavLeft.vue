<template>
	<mu-container>
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

				<span class="md-list-action">
					<span class="sidebar__notification sidebar__notification--accent">2</span>
				</span>
			</md-list-item>
		</md-list>
	</mu-container>
</template>

<script>
	export default {
	
	}
</script>

<style>
</style>
