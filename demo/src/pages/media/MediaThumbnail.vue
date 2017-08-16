<template>
	<mu-gallery-single
		ref="gallery"
		ratio="16:9"
		v-model="image"
		@select="onSelect"
		@change="onChange"
	>
		<adm-media-list
			ref="list"
			:images="images"
		>
		</adm-media-list>
	</mu-gallery-single>
</template>

<script>
	export default {
		components: {
			'adm-media-list': require('../media/media-photo/MediaPhotoList').default
		},
		data () {
			return {
				image: { url: 1 },
				images: [
					{ url: 1 },
					{ url: 2 },
					{ url: 3 },
					{ url: 4 },
					{ url: 5 },
					{ url: 6 },
				]
			}
		},
		methods: {
			onSelect (event) {
				this.$refs.list.select(this.images[0]);
				this.$refs.gallery.open();
			},
			onChange () {
				// Change model value
			}
		}
	}
</script>
