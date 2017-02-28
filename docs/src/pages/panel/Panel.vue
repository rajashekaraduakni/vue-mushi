<template>
	<mu-panel
		ref="panel"
		:sidenav-left="isLeftOpen"
		@close-sidenav="closeSidenav"
	>
		<adm-sidenav-left
			class="panel__sidenav panel__sidenav--left"
			slot="sidenav-left"
		>
		</adm-sidenav-left>

		<template
			class="panel__container"
			slot="container"
		>
			<router-view></router-view>
		</template>

		<template
			class="panel__sidenav panel__sidenar--right"
			slot="sidenav-right"
		>
		</template>
	</mu-panel>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex';
	import SidenavLeft from '../sidenav/SidenavLeft';

	export default {
		components: {
			'adm-sidenav-left': SidenavLeft,
		},
		computed: {
			...mapGetters({
				isLeftOpen: 'sidenav/isLeftOpen'
			})
		},
		methods: {
			...mapMutations({
				closeSidenav: 'sidenav/close'
			})
		}
	}
</script>

<style lang="sass" scoped>
	.panel{
		&__container{
			
		}
	}
</style>
