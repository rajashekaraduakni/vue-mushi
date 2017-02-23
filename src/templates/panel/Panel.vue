<template>
	<div class="panel">
		<md-sidenav
			ref="sidenavLeft"
			class="md-left panel__sidenav panel__sidenav--left"
			:class="{'md-active': sidenavLeft}"
			@open="openSidenav('left')"
			@close="closeSidenav('left')"
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
		props: {
			sidenavLeft: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			sidenavLeft (value) {
				console.log('HOLY SHIT');
			}
		},
		methods: {
			openSidenav(side) {
				this.$emit('open-sidenav', side)
			},
			closeSidenav(side) {
				this.$emit('close-sidenav', side);
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
