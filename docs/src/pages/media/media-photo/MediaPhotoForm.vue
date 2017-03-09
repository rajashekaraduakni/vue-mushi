<template>
	<mu-container class="media">
		<md-toolbar slot="header" class="md-large" md-theme="mushi-darker">
			<div class="md-toolbar-container">
				<md-button class="md-icon-button" @click.native="onClose">
					<md-icon>close</md-icon>
				</md-button>

				<span style="flex: 1"></span>

				<md-button class="md-icon-button">
					<md-icon>delete</md-icon>
				</md-button>

				<md-button class="md-icon-button" @click.native="onConfirm">
					<md-icon>check</md-icon>
				</md-button>
			</div>

			<div class="md-toolbar-container">
				<h3 class="media__title md-subheading" style="flex: 1">
					IMG_1234.jpg
				</h3>
			</div>
		</md-toolbar>

		<template slot="body">
			<mu-thumbnail>
			</mu-thumbnail>

			<div class="media__main">
				<adm-media-photo-fieldset>
				</adm-media-photo-fieldset>

				<adm-media-photo-info>
				</adm-media-photo-info>
			</div>
		</template>
	</mu-container>
</template>

<script>
	import MediaPhotoFieldset from './MediaPhotoFieldset';
	import MediaPhotoInfo from './MediaPhotoInfo';

	export default {
		components: {
			'adm-media-photo-fieldset': MediaPhotoFieldset,
			'adm-media-photo-info': MediaPhotoInfo
		},
		methods: {
			onClose (event) {
				this.$emit('close', event);
			},
			onConfirm (event) {
				this.$emit('confirm', event);
			}
		}
	}
</script>

<style lang="sass" scoped>
	.media{
		&__main{
			padding: 20px;
		}
		&__title{
			padding: 0 15px;
		}
	}
</style>
