<template>
	<div class="auth">
		<md-whiteframe md-elevation="6" class="auth__container">
			<!-- Header -->
			<md-whiteframe md-elevation="1"> 
				<md-toolbar class="auth__header">
					<slot name="header">
						<md-avatar class="md-large md-avatar-icon">
							<md-icon>fingerprint</md-icon>
						</md-avatar>
					</slot>
				</md-toolbar>
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
		&__container{
			width: 350px;
			max-width: 100%;
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
			color: white;
			text-align: center;
		}
		&__footer{
			padding: 20px 0;
			text-align: center;
		}
	}
</style>
