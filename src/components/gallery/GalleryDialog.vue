<template>
	<!-- Gallery Dialog -->
	<md-dialog
		class="gallery gallery--dialog"
		:class="{
			'is-active': active
		}"
		ref="dialog"
	>
		<md-dialog-content>
			<div class="gallery__grid">
				<md-layout
					v-for="photo in photos"
					md-flex-xsmall="50"
					md-flex-small="33"
					md-flex-medium="25"
					md-flex-large="25"
					md-flex-xlarge="20"
				>
					<mu-thumbnail
						class="gallery__item"
						:active="active == photo"
						:checked="checked.indexOf(photo) != -1"
						@click="setActive(photo); addChecked(photo)"
					>

						<!-- Remove button -->
						<md-button
							class="gallery__uncheck md-fab md-fab-top-right md-warn md-mini"
							v-if="checked.indexOf(photo) != -1"
							@click.native.stop="removeChecked(photo)"
						>
							<md-icon>close</md-icon>
						</md-button>

					</mu-thumbnail>
				</md-layout>
			</div>
		</md-dialog-content>

		<div class="gallery__sidenav">
			<slot>
			</slot>
		</div>

		<!-- Dialog Actions -->
		<md-whiteframe md-elevation="4">
			<!-- Add -->
			<md-button
				class="gallery__add md-fab md-mini md-fab-bottom-left"
			>
				<md-icon>add</md-icon>
			</md-button>

			<md-dialog-actions>
				<!-- Limit -->
				<span class="gallery__limit">
					Selected {{ checked.length }} of {{ limit }}
				</span>

				<!-- Cancel -->
				<md-button
					class="md-warn"
					@click.native="close"
				>
					Cancel
				</md-button>

				<!-- Accept -->
				<md-button
					class="md-primary"
					@click.native="close"
				>
					Accept
				</md-button>
			</md-dialog-actions>
		</md-whiteframe>
	</md-dialog>
</template>

<script>
	export default {
		props: {
			limit: {
				type: Number,
				default: 10
			}
		},
		data () {
			return {
				active: null,
				checked: [],
				photos: [
					{ url: '1' },
					{ url: '2' },
					{ url: '3' },
					{ url: '4' },
					{ url: '5' },
					{ url: '6' },
					{ url: '7' },
					{ url: '8' },
					{ url: '9' },
					{ url: '10' },
					{ url: '11' },
					{ url: '12' },
					{ url: '13' },
					{ url: '14' },
					{ url: '15' },
					{ url: '16' },
					{ url: '17' },
					{ url: '18' },
					{ url: '19' },
					{ url: '20' }
				]
			}
		},
		methods: {
			open (event) {
				this.$refs.dialog.open();
			},
			close (event) {
				this.$refs.dialog.close();
			},
			setActive (photo) {
				this.active = photo;
			},
			addChecked (photo) {
				// Search photo in checked list
				let index = this.checked.indexOf(photo);

				if (index != -1)
					return;

				// Remove last photo if limit is reached
				if (this.checked.length >= this.limit)
					this.checked.splice(-1, 1);

				// Add photo to check list
				if (index == -1)
					this.checked.push(photo);
			},
			removeChecked (photo) {
				let index = this.checked.indexOf(photo);

				if (index != -1)
					this.checked.splice(index, 1);

				if (this.active == photo)
					this.closeSidebar();
			},
			closeSidebar (event) {
				this.setActive(null);
			}
		}
	}
</script>

<style lang="sass" scoped>
	.gallery{
		&__grid{
			display: flex;
			flex-flow: row wrap;
			padding: 1px;
		}
		&__item{
			padding: 1px;
		}
		&__sidenav{
			width: 304px;
			position: absolute;
			top: 0;
			right: -304px;
			bottom: 52px;
			height: auto;
			background: #ebebeb;
			transition: all .4s cubic-bezier(.25,.8,.25,1);
		}
		&__add{
			bottom: 32px !important;
		}
		&__limit{
			flex: 1;
		}
		&.is-active{
			.gallery{
				&__sidenav{
					right: 0;
				}
			}
			.md-dialog-content{
				margin-right: 304px;
			}
		}
	}

	.md-dialog-content{
		padding: 0 !important;
		transition: all .4s cubic-bezier(.25,.8,.25,1);
	}
</style>

<style lang="sass">
	.gallery--dialog{
		.md-dialog{
			width: 100%;
			height: 100%;
		}
	}
</style>
