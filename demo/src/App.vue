<template>
	<adm-panel></adm-panel>
</template>

<script>
	export default {
		components: {
			'adm-panel': require('./pages/panel/Panel').default
		}
	}
</script>

<style lang="sass">
	@import "~vue-material/dist/vue-material.css";

	body, .app {
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

	// Fade right transitions
	.fade-enter-active {
		transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.fade-leave-active {
		transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.fade-enter {
		opacity: 0;
	}
	.fade-leave-active {
		opacity: 0;
	}

</style>
