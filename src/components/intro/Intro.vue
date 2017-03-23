<template>
	<div class="intro">
		<slot></slot>

		<span class="intro__overlay"></span>
	</div>
</template>

<script>
	export default {
		props: {},
		methods: {}
	}
</script>

<style lang="sass" scoped>
	.intro{
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
			z-index: 10;
		}
	}
</style>
