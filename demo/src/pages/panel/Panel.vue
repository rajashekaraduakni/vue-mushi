<template>
	<section class="panel">
		<adm-panel-sidenav>
		</adm-panel-sidenav>

		<div class="panel__body">
			<transition name="scale-fade">
				<router-view></router-view>
			</transition>
		</div>

		<mu-snackbar>
		</mu-snackbar>
	</section>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		components: {
			'adm-panel-sidenav': require('./PanelSidenav')
		},
		computed: {}
	}
</script>

<style lang="sass" scoped>
	.panel{
		height: 100%;
		&__body{
			height: 100%;
			> * {
				width: 100%;
				position: absolute;
				left: 0;
				top: 0;
			}
		}
	}
</style>
