<template>
	<md-snackbar
		md-position="bottom center"
		ref="snackbar"
		:md-duration="(active) ? active.timeout : 4000"
		@close="removeMessage(active)"
	>
		<span v-if="active">
			{{ active.text }}
		</span>

		<md-button v-if="active"
			class="md-primary"
			:md-theme="
				(active.type == 'info') ? 'mushi' :
				(active.type == 'success') ? 'mushi-green' :
				(active.type == 'error') ? 'mushi-red' :
				(active.type == 'warn') ? 'mushi-gold' : ''
			"
			@click.native="onConfirm(active)"
		>
			{{ active.action }}
		</md-button>
	</md-snackbar>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex';

	export default {
		data () {
			return {
				queue: []
			}
		},
		computed: {
			...mapGetters({
				active: 'mushi/logger/getActive',
				messages: 'mushi/logger/getMessages'
			})
		},
		watch: {
			messages (value) {
				this.addMessage(value[0])
			}
		},
		methods: {
			...mapMutations({
				setActive: 'mushi/logger/setActive'
			}),
			addMessage (message) {
				this.queue.unshift(message);

				if (this.active == null)
					this.setActive({
						snackbar: this.$refs.snackbar,
						message: message
					});
			},
			removeMessage (message) {
				let index = this.queue.indexOf(message);

				if (index != -1)
					this.queue.splice(index, 1);

				setTimeout(() => {
					if (this.queue.length > 0) {
						// Wait message hide
						this.setActive({
							snackbar: this.$refs.snackbar,
							message: this.queue[0]
						});
					} else {
						this.setActive({ message: null });
					}
				}, 1000);
			},
			onConfirm (message) {
				this.$refs.snackbar.close()

				// Execute message callback
				if (message.callback)
					message.callback();
			},
		}
	}
</script>
