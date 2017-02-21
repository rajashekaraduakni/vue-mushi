<template>
	<div
		class="auth"
		:style="{'background-image': 'url(' + background + ')'}"
	>
		<md-whiteframe md-elevation="6" class="auth__content">
			<!-- Header -->
			<md-whiteframe md-elevation="1" class="auth__header">
				<md-avatar class="md-large">
					<img src="assets/images/abstract-shape.jpg" alt="Brand">
				</md-avatar>
			</md-whiteframe>

			<form
				class="auth__form"
				@submit.prevent="submit"
			>
				<!-- Default Slot -->
				<slot></slot>

				<!-- Footer -->
				<footer class="auth__footer">
					<md-button
						type="submit"
						class="auth__login md-raised md-primary"
					>
						Login
					</md-button>

					<a href="#" class="auth__forgot">Forgot password?</a>
				</footer>
			</form>
		</md-whiteframe>

		<span class="auth__overlay"></span>
	</div>
</template>

<script>
	export default {
		props: {
			background: {
				type: String,
				default: ''
			}
		},
		methods: {
			submit () {
				this.$emit('submit');
			}
		}
	}
</script>

<style lang="sass" scoped>
	.auth{
		background-size: cover;
		background-position: center;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		min-height: 100%;
		&__overlay{
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: black;
			opacity: 0.4;
		}
		&__content{
			min-width: 350px;
			border-radius: 4px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 10;
			background: white;
			overflow: hidden;
		}
		&__form{
			padding: 0 20px;
		}
		&__header{
			margin-bottom: 20px;
			padding: 20px 0;
			background: #00b0ff;
			color: white;
			text-align: center;
		}
		&__footer{
			padding: 20px 0;
			text-align: center;
		}
		&__login{
			margin: 0;
			width: 100%;
		}
		&__forgot{
			display: block;
			font-size: 12px;
			margin-top: 15px;
		}
	}
</style>
