<template>
	<div class="gallery gallery--grid">
		<!-- Queue -->
		<md-layout
			v-for="file in queue"
			md-flex-xsmall="50"
			md-flex-small="33"
			md-flex-medium="25"
			md-flex-large="25"
			md-flex-xlarge="20"
		>
			<mu-thumbnail
				class="media__item"
				:src="file.preview"
				:progress="file.progress"
				uploading
			>
			</mu-thumbnail>
		</md-layout>

		<!-- Loop -->
		<md-layout
			v-for="image in images"
			md-flex-xsmall="50"
			md-flex-small="33"
			md-flex-medium="25"
			md-flex-large="25"
			md-flex-xlarge="20"
		>
			<mu-thumbnail
				class="gallery__item"
				:src="image.src"
				:active="active == image"
				:checked="checked.indexOf(image) != -1"
				@click="setActive(image); addChecked(image)"
			>

				<!-- Remove button -->
				<md-button
					class="gallery__uncheck md-fab md-fab-top-right md-warn md-mini"
					v-if="checked.indexOf(image) != -1"
					@click.native.stop="removeChecked(image)"
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
			queue: {
				type: Array,
				default: () => []
			}
		},
		data () {
			return {
				active: null,
				checked: [],
			}
		},
		methods: {
			setActive (image) {
				this.active = image;
			},
			addChecked (image) {
				// Search image in checked list
				let index = this.checked.indexOf(image);

				if (index != -1)
					return;

				// Remove last image if limit is reached
				if (this.checked.length >= this.limit)
					this.checked.splice(-1, 1);

				// Add image to check list
				if (index == -1)
					this.checked.push(image);

				this.$emit('check', this.checked.length);
			},
			removeChecked (image) {
				let index = this.checked.indexOf(image);

				if (index != -1)
					this.checked.splice(index, 1);

				this.$emit('uncheck', this.checked.length);

				if (image == this.active)
					this.setActive(null);
			}
		}
	}

</script>

<style lang="sass" scoped>
	.gallery{
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
