<template>
	<header class="sidebar--header">
		<md-whiteframe class="sidebar__whiteframe" md-elevation="1">
			<md-toolbar class="md-large" md-theme="mushi-dark">
				<div class="md-toolbar-container">
					<md-button
						@click="onClose"
						class="md-icon-button"
					>
						<md-icon>close</md-icon>
					</md-button>

					<span style="flex: 1;"></span>

					<!-- Navigation Slot -->
					<slot>
					</slot>
				</div>

				<div class="md-toolbar-container">
					<span class="sidebar__title">
						{{ title }}
					</span>
				</div>
			</md-toolbar>
		</md-whiteframe>
	</header>
</template>

<script>
	export default {
		props: ['title'],
		methods: {
			onClose (event) {
				this.$emit('close', event);
			}
		}
	}
</script>

<style lang="sass" scoped>
	.sidebar--header{
		position: relative;
		z-index: 50;
		.sidebar{
			&__whiteframe{
				z-index: 2;
			}
			&__title{
				padding: 0 15px;
			}
			&__add{
				bottom: 0;
				margin: 0;
				transform: translate(0, 50%);
			}
		}
	}
</style>
