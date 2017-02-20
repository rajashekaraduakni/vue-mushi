<template>
	<transition name="slide-bottom">
		<div
			class="snackbar--message"
			:class="{ 'is-active': active }"
			@mouseover="onMouseOver"
		>
		<div class="snackbar__text">
			{{ message.text }}
		</div>

			<md-button
				v-if="message.action != ''"
				class="snackbar__confirm"
				:md-theme="(message.type == 'success') ? 'mushi-green' : ''"
				:class="{
					'md-primary': message.type == 'info' || message.type == 'success',
					'md-accent': message.type == 'warn',
					'md-warn': message.type == 'error'
				}"
				@click="onConfirm"
			>
			   {{ message.action }}
			</md-button>
		</div>
	</transition>
</template>

<script>
	import SnackbarMessage from './snackbar-message.model';

	export default {
		name: 'mu-snackbar-message',
		props: {
			message: {
				type: SnackbarMessage
			},
			active: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			onConfirm() {
				this.$emit('confirm', this.message);
			},
			onMouseOver(event) {
				this.$emit('mouseover', event);
			}
		}
	}
</script>

<style lang="sass" scoped>
	.snackbar--message{
		width: auto;
		background: #323232;
		color: white;
		position: relative;
		transform: translate(0, -100%);
		display: inline-flex;
		align-items: center;
		justify-content: flex-end;
		flex-flow: row wrap;
		min-height: 48px;
		margin: auto;
		text-align: left;
		.snackbar{
			&__text{
				flex: 1;
				padding: 14px 20px;
			}
			&__text,
			&__confirm{
				transition: opacity .8s cubic-bezier(0.4, 0.0, 0.2, 1);
				opacity: 1;
			}
		}
		&.slide-bottom-enter,
		&.slide-bottom-leave-active {
			.snackbar{
				&__text,
				&__confirm{
					opacity: 0;
				}
			}
		}
	}

	// TODO: Mushi should has its own responsive helpers
	/* @include media($mobile-portrait) {
		.snackbar--message{
			width: 100%;
		}
	} */

	// Slide fade transitions
	.slide-bottom-enter-active {
		transition: all .6s cubic-bezier(0.4, 0.0, 0.2, 1);
	}
	.slide-bottom-leave-active {
		transition: all .4s cubic-bezier(0.4, 0.0, 0.2, 1);
	}
	.slide-bottom-enter, .slide-bottom-leave-active {
		transform: translate(0, 0);
	}
</style>
