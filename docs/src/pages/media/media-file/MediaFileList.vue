<template>
	<mu-container ref="container" class="gallery">
		<md-toolbar slot="header" class="dashboard__header">
			<md-button @click.native="openPanelSidenav('left')" class="md-icon-button">
				<md-icon>menu</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Files</h2>

			<mu-search>
			</mu-search>

			<md-button class="md-icon-button">
				<md-icon>filter_list</md-icon>
			</md-button>
		</md-toolbar>

		<md-list slot="body">
			<adm-media-file-item
				v-for="file in files"
				@click="openSidenav"
			>
			</adm-media-file-item>
		</md-list>

		<adm-media-file-form
			slot="sidenav"
			@close="closeSidenav"
			@confirm="closeSidenav"
		>
		</adm-media-file-form>

		<template slot="footer">
			<md-button
				class="gallery__add md-fab md-fab-bottom-right"
			>
				<md-icon>add</md-icon>
			</md-button>

		</template>
	</mu-container>
</template>

<script>
	import { mapMutations } from 'vuex';
	import MediaFileForm from './MediaFileForm';
	import MediaFileItem from './MediaFileItem';

	export default {
		components: {
			'adm-media-file-form': MediaFileForm,
			'adm-media-file-item': MediaFileItem
		},
		data () {
			return {
				files: [
					{ url: '1' },
					{ url: '2' },
					{ url: '3' },
					{ url: '4' },
					{ url: '5' },
					{ url: '6' },
					{ url: '7' },
					{ url: '8' },
					{ url: '9' },
					{ url: '10' },
					{ url: '11' },
					{ url: '12' },
					{ url: '13' },
					{ url: '14' },
					{ url: '15' },
					{ url: '16' },
					{ url: '17' },
					{ url: '18' },
					{ url: '19' },
					{ url: '20' }
				]
			}
		},
		methods: {
			...mapMutations({
				openPanelSidenav: 'sidenav/open',
			}),
			openSidenav () {
				this.$refs.container.openSidenav();
			},
			closeSidenav () {
				this.$refs.container.closeSidenav();
			}
		}
	}
</script>

<style>
</style>
