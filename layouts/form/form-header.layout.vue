<template>
	<header class="form--header">
		<md-whiteframe md-elevation="1">
			<md-toolbar class="md-large">
				<div class="md-toolbar-container">
					<md-button
						@click="onPrevious"
						class="md-icon-button"
					>
						<md-icon>arrow_back</md-icon>
					</md-button>

					<span style="flex: 1;"></span>

					<md-button @click="onAccept" class="md-icon-button">
						<md-icon>check</md-icon>
					</md-button>
				</div>

				<div class="md-toolbar-container">
					<h2 class="md-title">
						{{ title }}
					</h2>
				</div>
			</md-toolbar>
		</md-whiteframe>
	</header>
</template>

<script>
	import { mapMutations } from 'vuex';

	export default {
		props: ['title'],
		methods: {
			onPrevious(event) {
				this.$emit('previous');
			},
			onAccept(event) {
				this.$emit('accept');
			}
		}
	};
</script>

<style lang="sass" scoped>
	.form--header{
		position: relative;
		z-index: 50;
	}
</style>
