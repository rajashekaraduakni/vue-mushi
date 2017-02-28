<template>
	<md-snackbar
		md-position="bottom center"
		ref="snackbar"
		:md-duration="4000"
		@close="removeMessage(active)"
	>
		<span v-if="active">
			{{ active.text }}
		</span>

		<md-button v-if="active"
			class="md-accent"
			@click.native="onConfirm(active)"
		>
			{{ active.action }}
		</md-button>
	</md-snackbar>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		data () {
			return {
				active: null,
				queue: []
			}
		},
		computed: {
			...mapGetters({
				messages: 'logger/getMessages'
			})
		},
		watch: {
			messages (value) {
				this.addMessage(value[0])
			}
		},
		methods: {
			setActive (message) {
				this.active = message;

				if (message != null) {
					this.$refs.snackbar.open();
				}
			},
			addMessage (message) {
				this.queue.unshift(message);

				if (this.active == null)
					this.setActive(message);
			},
			removeMessage (message) {
				var index = this.queue.indexOf(message);

				if (index != -1)
					this.queue.splice(index, 1);

				this.setActive(null);

				if (this.queue.length > 0) {
					// Wait message hide
					setTimeout(() => {
						this.setActive(this.queue[0]);
					}, 1000);
				}
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
