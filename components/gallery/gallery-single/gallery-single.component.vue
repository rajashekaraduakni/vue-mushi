<template>
	<div class="gallery--single">
		<span class="gallery__title md-subheading">
			{{ title }}
		</span>

		<md-whiteframe class="gallery__whiteframe" md-elevation="2">
			<mu-gallery-thumbnail
				@click="openDialog"
			>
				<md-button
					class="md-fab md-mini md-warn md-fab-top-right"
					@click.stop="deleteThumbnail"
				>
					<md-icon>delete</md-icon>
				</md-button>
			</mu-gallery-thumbnail>
		</md-whiteframe>

		<md-button
			class="gallery__action gallery__action--set md-button md-raised md-primary"
			@click="openDialog"
		>
			Set {{ title }}
		</md-button>

		<mu-gallery-dialog
			ref="dialog"
			:limit="1"
		>
			<slot name="sidebar">
			</slot>
		</mu-gallery-dialog>
	</div>
</template>

<script>

	export default {
		props: {
			value: {
				type: Object,
				default: () => {}
			},
			title: {
				type: String,
				default: 'Thumbnail'
			}
		},
		methods: {
			deleteThumbnail () {
			
			},
			openDialog () {
				this.$refs.dialog.open();
			},
			closeSidebar () {
				this.$refs.dialog.closeSidebar();
			}
		}
	}
</script>

<style lang="sass" scoped>
	.gallery--single{
		width: 100%;
		.gallery{
			&__title{
				display: block;
				margin-bottom: 10px;
			}
			&__action{
				&--set{
					margin: 20px 0;
					display: block;
				}
			}
			&__whiteframe{
				display: block;
			}
		}
	}
</style>
