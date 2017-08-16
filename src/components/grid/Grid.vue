<template>
	<div class="mu-grid">
		<md-layout
			v-for="image in images"
			md-flex-xsmall="50"
			md-flex-small="33"
			md-flex-medium="25"
			md-flex-large="25"
			md-flex-xlarge="20"
		>
			<mu-thumbnail
				class="mu-grid__item"
				:src="image.src"
				:active="active == image"
				:selected="selected.indexOf(image) != -1"
				@click="setActive(image); addSelected(image)"
			>
				<!-- Remove button -->
				<md-button
					class="mu-grid__uncheck md-fab md-fab-top-right md-warn md-mini"
					v-if="selected.indexOf(image) != -1"
					@click.native.stop="removeSelected(image)"
				>
					<md-icon>close</md-icon>
				</md-button>
			</mu-thumbnail>
		</md-layout>
	</div>
</template>

<script>
	export default {
		props: {
			limit: {
				type: Number,
				default: 10
			},
			images: {
				type: Array,
				default: () => []
			},
		},
		data () {
			return {
				active: null,
				selected: [],
			}
		},
		methods: {
			setActive (image) {
				this.active = image;
				this.$emit('select', this.active);
			},
			addSelected (image) {
				// Search image in selected list
				let index = this.selected.indexOf(image);

				if (index != -1)
					return;

				// Remove last image if limit is reached
				if (this.selected.length >= this.limit)
					this.selected.splice(-1, 1);

				// Add image to check list
				if (index == -1)
					this.selected.push(image);

				this.$emit('change', this.selected.length);
			},
			removeSelected (image) {
				let index = this.selected.indexOf(image);

				if (index != -1)
					this.selected.splice(index, 1);

				this.$emit('change', this.selected.length);

				if (image == this.active)
					this.setActive(null);
			}
		}
	}
</script>

<style lang="sass">
	.mu-grid{
		display: flex;
		flex-flow: row wrap;
		padding: 1px;
		&__item{
			padding: 1px;
		}
		&__add{
			bottom: 32px !important;
		}
		&__limit{
			flex: 1;
		}
	}
</style>
