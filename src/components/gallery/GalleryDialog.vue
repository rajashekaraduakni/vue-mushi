<template>
	<md-dialog
		class="mu-gallery-dialog"
		ref="dialog"
		@open="onOpen"
		@close="onClose"
	>
		<md-dialog-content class="mu-gallery-dialog__content">
			<slot></slot>
		</md-dialog-content>

		<!-- Dialog Actions -->
		<md-whiteframe md-elevation="4">
			<!-- Add -->

			<md-dialog-actions>
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
					@click.native="onAccept"
				>
					Accept
				</md-button>
			</md-dialog-actions>
		</md-whiteframe>
	</md-dialog>
</template>

<script>
	export default {
		props: {},
		data () {
			return {}
		},
		methods: {
			open (event) {
				this.$refs.dialog.open();
			},
			close (event) {
				this.$refs.dialog.close();
			},
			onAccept () {
				this.close();
				this.$emit('accept');
			},
			onOpen () {
				this.$emit('open');
			},
			onClose () {
				this.$emit('close')
			}
		}
	}
</script>

<style lang="sass">
	.mu-gallery-dialog{
		&__content{
			position: relative;
			display: flex;
			flex-flow: column;
			.mu-container{
				flex: 1 100%;
			}
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
