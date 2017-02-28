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

		<footer class="container__footer" :class="{'logger-is-active': active}">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		computed: {
			...mapGetters({
				active: 'mushi/logger/getActive'
			})
		}
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
			z-index: 5;
			transition: bottom .4s cubic-bezier(.25, .8, .25, 1);
			&.logger-is-active{
				bottom: 50px;
			}
		}
	}
</style>
