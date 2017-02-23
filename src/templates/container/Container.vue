<template>
	<div class="container">
		<header class="container__header">
			<md-whiteframe md-elevation="1">
				<slot name="header"></slot>
			</md-whiteframe>
		</header>

		<section class="container__body">
			<slot name="body"></slot>
		</section>

		<footer class="container__footer">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script>
	export default {
	
	}
</script>

<style lang="sass" scoped>
	.container{
		height: 100%;
		display: flex;
		flex-flow: column;
		&__header{
		
		}
		&__body{
			flex: 1 100%;
			overflow-y: auto;
		}
		&__footer{
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 100;
		}
	}
</style>
