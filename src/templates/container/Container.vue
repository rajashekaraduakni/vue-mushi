<template>
	<div class="container"
		:class="{'sidenav-is-open': sidenav}"
	>
		<header class="container__header">
			<md-whiteframe md-elevation="1">
				<slot name="header"></slot>
			</md-whiteframe>
		</header>

		<section class="container__body">
			<slot name="body"></slot>
		</section>

		<aside class="container__sidenav">
			<md-whiteframe class="container__sidenav-frame" md-elevation="1">
				<slot name="sidenav"></slot>
			</md-whiteframe>
		</aside>

		<footer class="container__footer" :class="{'logger-is-active': logger}">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		computed: {
			...mapGetters({
				logger: 'mushi/logger/getActive'
			})
		},
		data () {
			return {
				sidenav: false
			}
		},
		methods: {
			openSidenav () {
				this.sidenav = true;
			},
			closeSidenav () {
				this.sidenav = false;
			}
		}
	}
</script>

<style lang="sass" scoped>
	.container{
		height: 100%;
		display: flex;
		flex-flow: column;
		transition: padding .4s cubic-bezier(.25,.8,.25,1);
		&__header{
			position: relative;
			z-index: 3;
		}
		&__body{
			flex: 1 100%;
			overflow-y: auto;
		}
		&__sidenav{
			width: 304px;
			position: absolute;
			top: 0;
			right: -304px;
			bottom: 52px;
			height: 100%;
			z-index: 3;
			background: #ebebeb;
			transition: all .4s cubic-bezier(.25,.8,.25,1);
			.container__sidenav{
				display: none !important;
			}
		}
		&__sidenav-frame{
			position: absolute;
			width: 100%;
			height: 100%;
			overflow: hidden;
			visibility: hidden;
		}
		&__footer{
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 5;
			transition: all .4s cubic-bezier(.25,.8,.25,1);
			&.logger-is-active{
				bottom: 50px;
			}
		}
		&.sidenav-is-open{
			padding-right: 304px;
			.container{
				&__sidenav{
					right: 0;
				}
				&__sidenav-frame{
					visibility: visible;
				}
				&__footer{
					right: 304px
				}
			}
		}
	}
</style>
