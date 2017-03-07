<template>
	<mu-container class="media">
		<md-toolbar slot="header" md-theme="mushi-darker">
			<md-button class="md-icon-button" @click.native="onClose">
				<md-icon>close</md-icon>
			</md-button>

			<span style="flex: 1"></span>

			<md-button class="md-icon-button" @click.native="onConfirm">
				<md-icon>check</md-icon>
			</md-button>
		</md-toolbar>

		<template slot="body">
			<div class="media__main">
				<adm-media-file-fieldset>
				</adm-media-file-fieldset>

				<adm-media-file-info>
				</adm-media-file-info>
			</div>
		</template>
	</mu-container>
</template>

<script>
	import MediaFileFieldset from './MediaFileFieldset';
	import MediaFileInfo from './MediaFileInfo';

	export default {
		components: {
			'adm-media-file-fieldset': MediaFileFieldset,
			'adm-media-file-info': MediaFileInfo
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
