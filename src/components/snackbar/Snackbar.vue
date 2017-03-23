<template>
	<md-snackbar
		md-position="bottom center"
		ref="snackbar"
		:md-duration="($logger.active) ? $logger.active.timeout : 4000"
		@close="onClose($logger.active)"
	>
		<span v-if="$logger.active">
			{{ $logger.active.text }}
		</span>

		<md-button v-if="$logger.active"
			class="md-primary"
			:md-theme="
				($logger.active.type == 'info') ? 'mushi' :
				($logger.active.type == 'success') ? 'mushi-green' :
				($logger.active.type == 'error') ? 'mushi-red' :
				($logger.active.type == 'warn') ? 'mushi-gold' : ''
			"
			@click.native="onConfirm($logger.active)"
		>
			{{ $logger.active.action }}
		</md-button>
	</md-snackbar>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex';

	export default {
		mounted () {
			this.$logger.$on('add', this.onAdd);
		},
		methods: {
			onAdd (message) {
				if (this.$logger.active == null) {
					this.$logger.setActive(message);
					this.$refs.snackbar.open();
				}
			},
			onClose (message) {
				let index = this.$logger.queue.indexOf(message);

				if (index != -1)
					this.$logger.queue.splice(index, 1);

				setTimeout(() => {
					this.$logger.setActive(null);

					if (this.$logger.queue.length > 0) {
						this.onAdd(this.$logger.queue[0]);
					}
				}, 400);
			},
			onConfirm (message) {
				this.$refs.snackbar.close()

				// Execute callback
				message.callback();
			},
		}
	}
</script>
