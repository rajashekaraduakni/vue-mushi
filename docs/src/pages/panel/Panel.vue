<template>
	<mu-panel
		ref="panel"
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
	import SidenavLeft from '../sidenav/SidenavLeft';

	export default {
		components: {
			"adm-sidenav-left": SidenavLeft
		},
		methods: {
			openSidenav (side) {
				this.$refs.panel.openSidenav(side);
			},
			closeSidenav (side) {
				this.$refs.panel.closeSidenav(right);
			}
		}
	}
</script>

<style lang="sass" scoped>
	.panel{
		&__container{
			
		}
	}
</style>
