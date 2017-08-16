<template>
	<div class="gallery-single">
		<span class="gallery-single__title md-subheading">
			{{ title }}
		</span>

		<md-whiteframe
			class="gallery-single__whiteframe"
			md-elevation="2"
			v-if="value.src"
		>
			<mu-thumbnail
				:src="value.src"
				:ratio="ratio"
				@click.native="onSelect"
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
			class="gallery-single__action md-button md-raised md-accent"
			@click="onSelect"
		>
			{{ action }} {{ title }}
		</md-button>

		<mu-gallery-dialog
			ref="dialog"
			:limit="1"
			@open="onOpen"
			@close="onClose"
			@accept="onAccept"
		>
			<slot></slot>
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
			selected: {
				type: Object,
				default: () => {}
			},
			title: {
				type: String,
				default: 'Thumbnail'
			},
			action: {
				type: String,
				default: 'Set'
			},
			ratio: {
				type: String,
				default: '1:1'
			},
		},
		methods: {
			open (event) {
				this.$refs.dialog.open();
			},
			close (event) {
				this.$refs.dialog.close();
			},
			onSelect () {
				this.$emit('select');
			},
			onDelete () {
				this.$emit('delete');
			},
			onAccept() {
				this.$emit('accept');
			},
			onOpen() {
				this.$emit('open');
			},
			onClose() {
				this.$emit('close');
			},
		}
	}
</script>

<style lang="sass">
	.gallery-single{
		width: 100%;
		&__title{
			display: block;
			margin-bottom: 10px;
		}
		&__action{
			margin: 20px 0;
			display: block;
		}
		&__whiteframe{
			display: block;
		}
	}
</style>
