<template>
	<div class="media media--photo-item">
		<!-- List Item -->
		<md-list-item
			@click.native="onClick($event)"
		>
			<!-- Item Thumbnail -->
			<md-avatar class="md-avatar-icon">
				<md-icon>person</md-icon>
			</md-avatar>

			<!-- Item Data -->
			<div class="md-list-text-container">
				<span class="media__title">IMG_12345.jpg</span>
			</div>

			<!-- Item Actions -->
			<md-button
				class="md-icon-button md-list-action"
				@click.native="openDialog(); onDelete($event)"
			>
				<md-icon>delete</md-icon>
			</md-button>
		</md-list-item>

		<!-- Delete Dialog -->
		<md-dialog ref="dialog">
			<!-- Dialog Content -->
			<md-dialog-title>
				Delete User
			</md-dialog-title>

			<md-dialog-content>
				Are you sure you want to delete user <b>IMG_12345.jpg</b>?
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

<style lang="sass" scoped>
</style>
