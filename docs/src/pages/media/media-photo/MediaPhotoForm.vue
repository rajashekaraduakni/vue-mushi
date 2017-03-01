<template>
	<mu-container class="media">
		<md-toolbar slot="header">
			<md-button class="md-icon-button" @click.native="onClose">
				<md-icon>close</md-icon>
			</md-button>

			<span style="flex: 1"></span>

			<md-button class="md-icon-button" @click.native="onConfirm">
				<md-icon>check</md-icon>
			</md-button>
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
	}
</style>
