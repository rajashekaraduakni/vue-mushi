<template>
	<md-list-item>
		<router-link :to="'/panel/users/edit/' + user.id">
			<md-avatar>
				<img src="https://placeimg.com/40/40/people/1" alt="People">
			</md-avatar>

			<div class="md-list-text-container">
				<span>{{ user.name }}</span>
				<span>{{ user.email }}</span>
			</div>

			<md-button class="md-icon-button md-list-action">
				<md-icon class="md-primary">star</md-icon>
			</md-button>

			<md-divider class="md-inset"></md-divider>
		</router-link>
	</md-list-item>
</template>

<script>
	export default {
		props: {
			user: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style>
</style>
