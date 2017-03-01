<template>
	<mu-gallery-single ref="gallery" title="Avatar">
		<adm-media-photo-form
			slot="sidenav"
			@close="$refs.gallery.closeSidenav()"
			@confirm="onConfirm"
		>
		</adm-media-photo-form>
	</mu-gallery-single>
</template>

<script>
	import MediaPhotoForm from '../../media/media-photo/MediaPhotoForm';

	export default {
		components: {
			'adm-media-photo-form': MediaPhotoForm
		},
		methods: {
			onConfirm (event) {
				this.$refs.gallery.closeSidenav();
				this.$store.commit('mushi/logger/success', {
					text: 'Media edited successfully!',
					action: 'Dismiss'
				})
			}
		}
	}
</script>

<style>

</style>
