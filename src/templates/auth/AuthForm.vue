<template>
	<div class="auth">
		<md-whiteframe md-elevation="6" class="auth__content">
			<!-- Header -->
			<md-whiteframe md-elevation="1" class="auth__header">
				<slot name="header">
					<md-avatar class="md-large">
						<img src="assets/images/abstract-shape.jpg" alt="Brand">
					</md-avatar>
				</slot>
			</md-whiteframe>

			<form
				class="auth__form"
				@submit.prevent="submit"
			>
				<!-- Default Slot -->
				<slot name="form"></slot>

				<!-- Footer Slot -->
				<footer class="auth__footer">
					<slot name="footer"></slot>
				</footer>
			</form>
		</md-whiteframe>
	</div>
</template>

<script>
	export default {
		methods: {
			submit () {
				this.$emit('submit');
			}
		}
	}
</script>

<style lang="sass" scoped>
	.auth{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 20;
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
	}
</style>
