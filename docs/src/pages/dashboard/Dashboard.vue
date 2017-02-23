<template>
	<mu-container>
		<md-toolbar slot="header">
			<md-button @click.native="openSidenav('left')" class="md-icon-button">
				<md-icon>menu</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Dashboard</h2>
		</md-toolbar>

		<template slot="body">
			<md-list class="custom-list md-triple-line">
				<md-list-item>
					<md-avatar>
						<img src="https://placeimg.com/40/40/people/1" alt="People">
					</md-avatar>

					<div class="md-list-text-container">
						<span>Ali Connors</span>
						<span>Brunch this weekend?</span>
						<p>I'll be in your neighborhood doing errands...</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon class="md-primary">star</md-icon>
					</md-button>

					<md-divider class="md-inset"></md-divider>
				</md-list-item>

				<md-list-item>
					<md-avatar>
						<img src="https://placeimg.com/40/40/people/6" alt="People">
					</md-avatar>

					<div class="md-list-text-container">
						<span>me, Scott, Jennifer</span>
						<span>Summer BBQ</span>
						<p>Wish I could come, but I'm out of town ...</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon>star_border</md-icon>
					</md-button>

					<md-divider class="md-inset"></md-divider>
				</md-list-item>

				<md-list-item>
					<md-avatar>
						<img src="https://placeimg.com/40/40/people/5" alt="People">
					</md-avatar>

					<div class="md-list-text-container">
						<span>Sandra Adams</span>
						<span>Oui oui</span>
						<p>Do you have Paris recommendations ...</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon>star_border</md-icon>
					</md-button>

					<md-divider class="md-inset"></md-divider>
				</md-list-item>

				<md-list-item>
					<md-avatar>
						<img src="https://placeimg.com/40/40/people/8" alt="People">
					</md-avatar>

					<div class="md-list-text-container">
						<span>Trevor Hansen</span>
						<span>Order confirmation</span>
						<p>Thank you for your recent order from ...</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon>star_border</md-icon>
					</md-button>

					<md-divider class="md-inset"></md-divider>
				</md-list-item>

				<md-list-item>
					<md-avatar>
						<img src="https://placeimg.com/40/40/people/1" alt="People">
					</md-avatar>

					<div class="md-list-text-container">
						<span>Ali Connors</span>
						<span>Brunch this weekend?</span>
						<p>I'll be in your neighborhood doing errands...</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon class="md-primary">star</md-icon>
					</md-button>

					<md-divider class="md-inset"></md-divider>
				</md-list-item>

				<md-list-item>
					<md-avatar>
						<img src="https://placeimg.com/40/40/people/6" alt="People">
					</md-avatar>

					<div class="md-list-text-container">
						<span>me, Scott, Jennifer</span>
						<span>Summer BBQ</span>
						<p>Wish I could come, but I'm out of town ...</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon>star_border</md-icon>
					</md-button>

					<md-divider class="md-inset"></md-divider>
				</md-list-item>

				<md-list-item>
					<md-avatar>
						<img src="https://placeimg.com/40/40/people/5" alt="People">
					</md-avatar>

					<div class="md-list-text-container">
						<span>Sandra Adams</span>
						<span>Oui oui</span>
						<p>Do you have Paris recommendations ...</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon>star_border</md-icon>
					</md-button>

					<md-divider class="md-inset"></md-divider>
				</md-list-item>

				<md-list-item>
					<md-avatar>
						<img src="https://placeimg.com/40/40/people/8" alt="People">
					</md-avatar>

					<div class="md-list-text-container">
						<span>Trevor Hansen</span>
						<span>Order confirmation</span>
						<p>Thank you for your recent order from ...</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon>star_border</md-icon>
					</md-button>

					<md-divider class="md-inset"></md-divider>
				</md-list-item>
			</md-list>
		</template>

		<template slot="footer">
			<md-speed-dial md-mode="scale" class="md-fab-bottom-right">
				<md-button class="md-fab" md-fab-trigger>
					<md-icon md-icon-morph>close</md-icon>
					<md-icon>share</md-icon>
				</md-button>

				<md-button class="md-fab md-mini md-clean">
					<md-icon>email</md-icon>
				</md-button>

				<md-button class="md-fab md-mini md-clean">
					<md-icon>content_copy</md-icon>
				</md-button>
			</md-speed-dial>
		</template>
	</mu-container>
</template>

<script>
	import { mapMutations } from 'vuex';

	export default {
		methods: {
			...mapMutations({
				openSidenav: 'sidenav/open',
			})
		}
	}
</script>

<style>
</style>
