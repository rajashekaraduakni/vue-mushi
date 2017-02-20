<template>
	<div class="gallery--multiple">
		<span class="gallery__title md-subheading">
			{{ title }}
		</span>

		<md-layout
			:md-gutter="true"
			v-if="photos.length > 0"
			class="gallery__grid"
		>
			<md-layout
				class="gallery__item"
				md-flex-xsmall="50"
				md-flex-small="33"
				md-flex="25"
				v-for="photo in photos"
			>
				<md-whiteframe
					class="gallery__whiteframe"
					md-elevation="2"
				>
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
			</md-layout>

		</md-layout>

		<md-button
			class="gallery__action gallery__action--set md-button md-raised md-primary"
			@click="openDialog"
		>
			Add Image
		</md-button>

		<mu-gallery-dialog
			ref="dialog"
			:limit="limit"
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
			limit: {
				type: Number,
				default: 10
			},
			title: {
				type: String,
				default: 'Gallery'
			}
		},
		data () {
			return {
				photos: [
					{ url: '1' },
					{ url: '2' },
					{ url: '3' },
					{ url: '4' },
					{ url: '5' },
					{ url: '6' },
					{ url: '7' },
					{ url: '8' },
				]
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
	.gallery--multiple{
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
				flex: 1;
			}
			&__item{
				margin-bottom: 25px;
			}
			&__grid{
				margin-bottom: -25px;
			}
		}
	}
</style>
