<template>
	<!-- Gallery Dialog -->
	<md-dialog
		class="gallery gallery--dialog"
		ref="dialog"
	>
		<md-dialog-content class="gallery__content">
			<mu-container ref="container" class="gallery__container">
				<mu-gallery-grid
					ref="grid"
					slot="body"
					:limit="limit"
					:images="images"
					@check="onCheck"
					@uncheck="onUncheck"
				>
				</mu-gallery-grid>

				<template slot="sidenav">
					<slot>
					</slot>
				</template>

				<template slot="footer">
					<md-button
						@click.native="$emit('add')"
						class="gallery__add md-fab md-mini md-fab-bottom-right"
					>
						<md-icon>add</md-icon>
					</md-button>

				</template>
			</mu-container>
		</md-dialog-content>

		<!-- Dialog Actions -->
		<md-whiteframe md-elevation="4">
			<!-- Add -->

			<md-dialog-actions>
				<!-- Limit -->
				<span class="gallery__limit">
					Selected {{ selected }} of {{ limit }}
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
				selected: 0,
				images: [
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
			onCheck (length) {
				this.openSidenav();
				this.selected = length;
			},
			onUncheck (length) {
				this.closeSidenav();
				this.selected = length;
			},
			openSidenav () {
				this.$refs.container.openSidenav();
			},
			closeSidenav () {
				this.$refs.grid.setActive(null);
				this.$refs.container.closeSidenav();
			}
		}
	}
</script>

<style lang="sass" scoped>
	.gallery{
		&__content{
			position: relative;
		}
		&__container{
			position: absolute;
			width: 100%;
			overflow-x: hidden;
		}
		&__item{
			padding: 1px;
		}
		&__limit{
			flex: 1;
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
