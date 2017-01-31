<template>
	<div class="snackbar">
		<div class="snackbar__messages">
			<mu-snackbar-message
				:message="message"
				v-if="active == message"
				v-for="message in messages"
				@confirm="onConfirm"
				@mouseover="resetTimer(message)"
			>
			</mu-snackbar-message>
		</div>
	</div>
</template>

<script>
	import {
		SnackbarMessage,
		SnackbarMessageComponent
	} from './';

	export default {
		name: 'mu-snackbar',
		props: {
			messages: {
				type: Array[SnackbarMessage],
				default: () => []
			}
		},
		data() {
			return {
				active: null,
				timer: 0
			}
		},
		mounted() {
			// var message1 = new SnackbarMessage('Lorem ipsum sit amet', 'info', 300000, 'Dismiss', () => console.log('WUUUUT'));
			// var message2 = new SnackbarMessage('Lorem ipsum sit amet', 'warn', 3000, 'Dismiss');
			// var message3 = new SnackbarMessage('Lorem ipsum sit amet', 'error', 3000, 'Dismiss');
			//
			// this.addMessage(message1);
			// this.addMessage(message2);
			// this.addMessage(message3);
		},
		methods: {
			setActive(message) {
				this.active = message;

				if (message != null) {
					this.resetTimer(message);
				}
			},
			resetTimer(message) {
				clearTimeout(this.timer);

				this.timer = setTimeout(() => {
					this.dismissMessage(message);
				}, message.timeout);
			},
			addMessage(message) {
				this.messages.unshift(message);

				if (this.active == null)
					this.setActive(message);
			},
			removeMessage(message) {
				var index = this.messages.indexOf(message);

				if (index != -1)
					this.messages.splice(index, 1);

				this.setActive(null);

				if (this.messages.length > 0) {
					// Wait message hide
					setTimeout(() => {
						this.setActive(this.messages[0]);
					}, 1000);
				}
			},
			dismissMessage(message) {
				this.removeMessage(message);

				// Clear timer
				clearTimeout(this.timer);
			},
			onConfirm(message) {
				this.dismissMessage(message);

				// Execute message callback
				message.callback();
			},
		},
		components: {
			'mu-snackbar-message': SnackbarMessageComponent
		}
	}
</script>

<style lang="sass" scoped>
	.snackbar{
		width: 100%;
		position: absolute;
		top: 100%;
		height: 0 !important;
		text-align: center;
		z-index: 1000;
		&__confirm{
			position: absolute;
			bottom: -100%;
		}
	}
</style>
