<template>
	<mu-gallery-dialog
		ref="dialog"
		:limit="limit"
	>
		<!-- Mushi Container -->
		<mu-container
			ref="container"
			class="gallery__container"
		>
			<!-- Uploader -->
			<mu-uploader
				ref="uploader"
				action="resource/upload"
				:queue="queue"
				@done="onUploaderDone"
			>
			</mu-uploader>

			<!-- Grid -->
			<mu-gallery-grid
				ref="grid"
				slot="body"
				:limit="limit"
				:images="images"
				:queue="queue"
				@select="onGridSelect"
				@change="onGridChange"
			>
			</mu-gallery-grid>

			<!-- Sidenav -->
			<adm-media-photo-form
				slot="sidenav"
				@close="onSidenavClose"
				@confirm="onSidenavConfirm"
			>
			</adm-media-photo-form>

			<!-- Footer -->
			<template slot="footer">
				<md-button
					@click.native="upload"
					class="gallery__add md-fab md-mini md-fab-bottom-right"
				>
					<md-icon>add</md-icon>
				</md-button>
			</template>
		</mu-container>
	</mu-gallery-dialog>
</template>

<script>
	import MediaPhotoForm from '../../media/media-photo/MediaPhotoForm';

	export default {
		components: {
			'adm-media-photo-form': MediaPhotoForm
		},
		props: {
			limit: {
				type: Number,
				default: 10
			},
			queue: {
				type: Array,
				default: () => []
			},
			images: {
				type: Array,
				default: () => []
			}
		},
		methods: {
			// Wrappers
			open () {
				this.$refs.dialog.open();
			},
			close () {
				this.$refs.dialog.close();
			},
			upload () {
				this.$refs.uploader.select();
			},

			// Sidenav listeners
			onSidenavConfirm (event) {
				this.$store.commit('mushi/logger/success', {
					text: 'Media edited successfully!',
					action: 'Dismiss'
				})
				this.$refs.grid.setActive(null);
			},
			onSidenavClose (event) {
				this.$refs.grid.setActive(null);
			},

			// Grid listeners
			onGridSelect (active) {
				if (active) {
					this.$refs.container.openSidenav();
				} else {
					this.$refs.container.closeSidenav();
				}
			},
			onGridChange (length) {
				this.$refs.dialog.selected = length;
			},

			// Uploader listeners
			onUploaderDone (event) {
				this.images.unshift({ src: event.preview });
			}
		}
	}
</script>

<style lang="sass" scoped>
	.gallery{
		&__container{
			position: absolute;
			width: 100%;
			overflow-x: hidden;
		}
	}
</style>
