<template>
	<div class="list"
		:class="{
			'has-sidebar': sidebarVisible
		}"
	>
		<mu-list-header
			:title="title"
			@add="onAdd"
		>
			<slot name="navigation">
			</slot>
		</mu-list-header>

		<div
			class="list__content page-content"
			v-mu-load-more="{ next: onNext }"
		>
			<slot name="content">
			</slot>
		</div>

		<md-sidenav class="list__sidebar md-right" ref="sidebar" @open="onSidebarOpen" @close="onSidebarClose">
			<slot name="sidebar">
			</slot>
		</md-sidenav>
	</div>
</template>

<script>
	import ListHeaderLayout from './list-header.layout.vue';

	export default {
		props: ['title'],
		data() {
			return {
				sidebarVisible: false
			}
		},
		mounted() {
			document.title = this.title + ' - Admin';
		},
		methods: {
			openSidebar () {
				if (window.innerWidth < 1200) {
					this.$refs.sidebar.open();
				} else {
					this.sidebarVisible = true;
				}
			},
			closeSidebar () {
				this.$refs.sidebar.close();
				this.sidebarVisible = false;
			},
			onAdd(event) {
				this.$emit('add');
			},
			onNext(event) {
				this.$emit('next');
			},
			onSidebarOpen(event) {
				this.$emit('sidebarOpen');
			},
			onSidebarClose(event) {
				this.$emit('sidebarClose');
			},
		},
		components: {
			'mu-list-header': ListHeaderLayout
		}
	};
</script>

<style lang="sass" scoped>
	.list {
		display: flex;
		flex-flow: column;
		flex: 1;
		&__add{
			z-index: 20;
		}
	}

	.page-tabs {
		flex: 1;
		> .md-tabs-content {
			flex: 1;
			overflow-y: auto;
		}
	}
</style>

<style lang="sass">
	@import "../../../stylesheets/styles";

	@include media($desktop) {
		.list{
			transition: all .4s cubic-bezier(.25,.8,.25,1);
			&__sidebar{
				.md-sidenav-content{
					transition: all .4s cubic-bezier(.25,.8,.25,1);
				}
			}
			&.has-sidebar{
				padding-right: 304px;
				.list{
					&__sidebar{
						.md-sidenav-content{
							background: #ebebeb;
							transform: translate(0,0);
							pointer-events: auto;
							box-shadow: $material-shadow-6dp;
						}
					}
				}
			}
		}
	}
</style>
