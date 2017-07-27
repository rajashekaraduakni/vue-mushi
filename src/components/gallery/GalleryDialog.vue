<template>
	<md-dialog
		class="mu-gallery-dialog"
		ref="dialog"
	>
		<md-dialog-content class="mu-gallery-dialog__content">
			<slot></slot>
		</md-dialog-content>

		<!-- Dialog Actions -->
		<md-whiteframe md-elevation="4">
			<!-- Add -->

			<md-dialog-actions>
				<!-- Limit -->
				<span class="mu-gallery-dialog__limit">
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
				selected: 0
			}
		},
		methods: {
			open (event) {
				this.$refs.dialog.open();
			},
			close (event) {
				this.$refs.dialog.close();
			}
		}
	}
</script>

<style lang="sass">
	.mu-gallery-dialog{
		&__content{
			position: relative;
		}
		&__item{
			padding: 1px;
		}
		&__limit{
			flex: 1;
		}
		.md-dialog-content{
			padding: 0 !important;
			transition: all .4s cubic-bezier(.25,.8,.25,1);
		}
		.md-dialog{
			width: 100%;
			height: 100%;
		}
	}
</style>
