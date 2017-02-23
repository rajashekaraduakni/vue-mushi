<template>
	<div class="panel">
		<md-sidenav
			class="md-left panel__sidenav panel__sidenav--left"
			ref="sidenavLeft"
		>
			<slot name="sidenav-left"></slot>
		</md-sidenav>

		<section class="panel__container">
			<slot name="container"></slot>
		</section>

		<md-sidenav
			class="md-right panel__sidenav panel__sidenav--right"
			ref="sidenavRight"
		>
			<slot name="sidenav-right"></slot>
		</md-sidenav>
	</mu-panel>
</template>

<script>
	export default {
		methods: {
			openSidenav(side) {
				if (side == 'left') {
					this.$refs.sidenavLeft.open();
				} else if (side == 'right') {
					this.$refs.sidenavRight.open();
				}
			},
			closeSidenav(side) {
				if (side == 'left') {
					this.$refs.sidenavLeft.close();
				} else if (side == 'right') {
					this.$refs.sidenavRight.close();
				} else if (!side) {
					this.$refs.sidenavLeft.close();
					this.$refs.sidenavRight.close();
				}
			}
		}
	}
</script>

<style lang="sass" scoped>
	.panel{
		height: 100%;
		overflow: hidden;
		position: relative;
		&__container{
			height: 100%;
		}
	}
</style>
