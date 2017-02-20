<template>
	<header class="list--header">
		<md-whiteframe md-elevation="1">
			<md-toolbar class="md-large">
				<div class="md-toolbar-container">
					<md-button
						@click="toggleSidebar()"
						class="md-icon-button"
					>
						<md-icon>menu</md-icon>
					</md-button>

					<span style="flex: 1;"></span>

					<!-- Navigation Slot -->
					<slot>
					</slot>
				</div>

				<div class="md-toolbar-container">
					<h2 class="list__title md-title">
						{{ title }}
					</h2>
				</div>

				<md-button
					@click="onAdd($event)"
					class="list__add md-fab md-mini md-fab-bottom-left md-warn"
				>
					<md-icon>add</md-icon>
				</md-button>
			</md-toolbar>
		</md-whiteframe>
	</header>
</template>

<script>
	import { mapMutations } from 'vuex';

	export default {
		props: ['title'],
		methods: {
			...mapMutations({
				toggleSidebar: 'app/toggleSidebar'
			}),
			onAdd (event) {
				this.$emit('add', event);
			}
		}
	};
</script>

<style lang="sass" scoped>
	.list--header{
		position: relative;
		z-index: 50;
		.list{
			&__title{
				padding-left: 10px;
			}
			&__add{
				bottom: 0;
				margin: 0;
				transform: translate(0, 50%);
			}
		}
	}
</style>
