<template>
	<div>
		<md-list-item @click.native="onClick">
			<md-avatar>
				<img src="https://placeimg.com/40/40/people/1" alt="People">
			</md-avatar>

			<div class="md-list-text-container">
				<span>{{ user.name }}</span>
				<span>{{ user.email }}</span>
			</div>

			<md-button class="md-icon-button md-list-action">
				<md-icon @click.native.stop="openDialog">
					delete
				</md-icon>
			</md-button>

			<md-divider class="md-inset"></md-divider>
		</md-list-item>

		<!-- Delete Dialog -->
		<md-dialog ref="dialog">
			<!-- Dialog Content -->
			<md-dialog-title>
				Delete User
			</md-dialog-title>

			<md-dialog-content>
				Are you sure you want to delete user <b>{{ user.name }}</b> <{{ user.email }}>?
			</md-dialog-content>

			<!-- Dialog Actions -->
			<md-dialog-actions>
				<md-button
					class="md-primary"
					@click.native="closeDialog()"
				>
					Cancel
				</md-button>

				<md-button
					class="md-primary"
					@click.native="closeDialog(); onDelete($event)"
				>
					Delete
				</md-button>
			</md-dialog-actions>
		</md-dialog>
	</div>
</template>

<script>
	export default {
		props: {
			user: {
				type: Object,
				default: () => {}
			}
		},
		methods: {
			openDialog() {
				this.$refs.dialog.open();
			},
			closeDialog() {
				this.$refs.dialog.close();
			},
			onClick (event) {
				this.$emit('click', this.user)
			},
			onDelete (event) {
				this.$emit('delete', this.user);
			}
		}
	}
</script>

<style>
</style>
