<template>
	<md-list-item @click.native="onClick">
		<md-avatar>
			<img src="https://placeimg.com/40/40/people/1" alt="People">
		</md-avatar>

		<div class="md-list-text-container">
			<span>{{ user.name }}</span>
			<span>{{ user.email }}</span>
		</div>

		<md-button class="md-icon-button md-list-action">
			<md-icon @click.native.stop="onDelete">
				delete
			</md-icon>
		</md-button>

		<md-divider class="md-inset"></md-divider>
	</md-list-item>
</template>

<script>
	export default {
		props: {
			user: {
				type: Object,
				default: () => {}
			}
		},
		methods: {
			onClick (event) {
				this.$emit('click', this.user)
			},
			onDelete (event) {
				this.$emit('delete', this.user);
			}
		}
	}
</script>

<style>
</style>
