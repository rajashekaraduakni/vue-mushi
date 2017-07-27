<template>
	<div class="mu-container"
		:class="{'sidenav-is-open': sidenav}"
	>
		<!-- Header Slot -->
		<header class="mu-container__header">
			<md-whiteframe md-elevation="1">
				<slot name="header"></slot>
			</md-whiteframe>
		</header>

		<!-- Default Slot -->
		<slot></slot>

		<!-- Body Slot -->
		<section class="mu-container__body">
			<slot name="body"></slot>
		</section>

		<!-- Sidenav Slot -->
		<aside class="mu-container__sidenav">
			<md-whiteframe class="mu-container__sidenav-frame" md-elevation="1">
				<slot name="sidenav"></slot>
			</md-whiteframe>
		</aside>

		<!-- Footer Slot -->
		<footer class="mu-container__footer" :class="{'logger-is-active': $logger.active}">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
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

<style lang="sass">
	.mu-container{
		height: 100%;
		display: flex;
		flex-flow: column;
		transition: all .4s cubic-bezier(.25,.8,.25,1);
		overflow: hidden;
		position: relative;
		&__header{
			position: relative;
			z-index: 3;
		}
		&__body{
			flex: 1 100%;
			flex-flow: column;
			display: flex;
			overflow-y: auto;
			> .md-tabs{
				flex: 1 100%;
				.md-tabs-content{
					flex: 1 100%;
					overflow-y: auto;
				}
			}
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
			.mu-container__sidenav{
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
			transition: all .4s cubic-bezier(.25,.8,.25,1);
			display: flex;
			padding: 16px;
			align-items: flex-end;
			justify-content: flex-end;
			&.logger-is-active{
				bottom: 50px;
			}
			> * {
				position: relative;
				z-index: 5;
			}
		}
		&.sidenav-is-open{
			padding-right: 304px;
			.mu-container{
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
