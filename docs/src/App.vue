<template>
	<router-view></router-view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="sass">
	@import "~vue-material/dist/vue-material.css";

	body {
		height: 100%;
	}

	// Slide fade right transitions
	.scale-fade-enter-active {
		transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.scale-fade-leave-active {
		transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.scale-fade-enter {
		opacity: 0;
		transform: scale(1.2);
	}
	.scale-fade-leave-active {
		opacity: 0;
		transform: scale(0.8);
	}
</style>
