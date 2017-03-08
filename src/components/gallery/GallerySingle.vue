<template>
	<div class="gallery">
		<span class="gallery__title md-subheading">
			{{ title }}
		</span>

		<md-whiteframe class="gallery__whiteframe" md-elevation="2">
			<mu-thumbnail
				@click="onSelect"
			>
				<md-button
					class="md-fab md-mini md-warn md-fab-top-right"
					@click.native.stop="onDelete"
				>
					<md-icon>delete</md-icon>
				</md-button>
			</mu-thumbnail>
		</md-whiteframe>

		<md-button
			class="gallery__action gallery__action--set md-button md-raised md-primary"
			@click.native="onSelect"
		>
			Set {{ title }}
		</md-button>

		<slot></slot>
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
			onSelect () {
				this.$emit('select');
			},
			onDelete () {
				this.$emit('delete');
			}
		}
	}
</script>

<style lang="sass" scoped>
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
</style>
