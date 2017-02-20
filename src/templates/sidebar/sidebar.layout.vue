<template>
	<div class="sidebar">
		<mu-sidebar-header
			:title="title"
			@close="onClose"
		>
			<slot name="navigation">
			</slot>
		</mu-sidebar-header>

		<div class="sidebar__content page-content">
			<slot name="content">
			</slot>
		</div>
	</div>
</template>

<script>
	import SidebarHeaderLayout from './sidebar-header.layout.vue';

	export default {
		components: {
			'mu-sidebar-header': SidebarHeaderLayout
		},
		props: ['title'],
		methods: {
			onClose (event) {
				this.$emit('close', event);
			}
		}
	}
</script>

<style lang="sass" scoped>
	.sidebar {
		display: flex;
		flex-flow: column;
		flex: 1;
		height: 100%;
		&__add{
			z-index: 20;
		}
	}
</style>
