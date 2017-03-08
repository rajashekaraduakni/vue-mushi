<template>
	<mu-gallery-single
		ref="gallery"
		title="Avatar"
		@select="$refs.dialog.open()"
	>
		<adm-media-photo-dialog
			ref="dialog"
			:images="images"
			:queue="queue"
			:limit="1"
		>
		</adm-media-photo-dialog>
	</mu-gallery-single>
</template>

<script>
	import MediaPhotoDialog from '../../media/media-photo/MediaPhotoDialog';

	export default {
		components: {
			'adm-media-photo-dialog': MediaPhotoDialog
		},
		data () {
			return {
				queue: [],
				images: [
					{ url: '1' },
					{ url: '2' },
					{ url: '3' },
					{ url: '4' },
					{ url: '5' },
					{ url: '6' },
					{ url: '7' },
					{ url: '8' },
					{ url: '9' },
					{ url: '10' },
					{ url: '11' },
					{ url: '12' },
					{ url: '13' },
					{ url: '14' },
					{ url: '15' },
					{ url: '16' },
					{ url: '17' },
					{ url: '18' },
					{ url: '19' },
					{ url: '20' }
				]
			}
		}
	}
</script>
