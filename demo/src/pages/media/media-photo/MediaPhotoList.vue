<template>
	<mu-container ref="container" class="gallery">
		<md-toolbar slot="header" class="dashboard__header">
			<md-button @click.native="openPanelSidenav" class="md-icon-button">
				<md-icon>menu</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Photos</h2>

			<mu-search>
			</mu-search>

			<md-menu md-align-trigger md-direction="bottom left" md-size="4">
				<md-button class="md-icon-button" md-menu-trigger>
					<md-icon v-if="view == 'grid'">view_module</md-icon>
					<md-icon v-if="view == 'list'">view_list</md-icon>
				</md-button>

				<md-menu-content>
					<md-menu-item @click.native="setView('grid')">
						<span>Grid view</span>
						<md-icon>view_module</md-icon>
					</md-menu-item>

					 <md-menu-item @click.native="setView('list')">
						<span>List view</span>
						<md-icon>view_list</md-icon>
					</md-menu-item>
				</md-menu-content>
			</md-menu>
		</md-toolbar>

		<div v-if="view == 'grid'" slot="body">
			<mu-gallery-grid
				v-if="view == 'grid'"
				ref="grid"
				slot="body"
				:limit="1"
				:images="images"
				@select="onGridSelect"
			>
			</mu-gallery-grid>
		</div>

		<md-list
			v-if="view == 'list'"
			slot="body"
		>
			<adm-media-photo-item
				v-for="image in images"
				@click="onGridSelect"
			>
			</adm-media-photo-item>
		</md-list>

		<adm-media-photo-form
			slot="sidenav"
			@close="onSidenavClose"
			@confirm="onSidenavConfirm"
		>
		</adm-media-photo-form>

		<template slot="footer">
			<md-button
				class="gallery__add md-fab"
				@click.native="upload"
			>
				<md-icon>add</md-icon>
			</md-button>

			<!-- Uploader -->
			<mu-uploader
				ref="uploader"
				@next="onUploaderNext"
				@done="onUploaderDone"
				@cancel="onUploaderCancel"
			>
			</mu-uploader>

		</template>
	</mu-container>
</template>

<script>
	import { mapMutations } from 'vuex';
	import MediaPhotoForm from './MediaPhotoForm';
	import MediaPhotoItem from './MediaPhotoItem';

	export default {
		components: {
			'adm-media-photo-form': MediaPhotoForm,
			'adm-media-photo-item': MediaPhotoItem
		},
		data () {
			return {
				view: 'grid',
				images: [
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
			upload () {
				this.$refs.uploader.select();
			},
			setView (view) {
				this.view = view;
			},

			// Sidenav listeners
			onSidenavConfirm (event) {
				this.$logger.success('Media edited successfully!');

				if (this.view == 'grid')
					this.$refs.grid.setActive(null);
			},
			onSidenavClose (event) {
				if (this.view == 'grid')
					this.$refs.grid.setActive(null);
			},

			// Grid listeners
			onGridSelect (active) {
				if (active) {
					this.$refs.container.openSidenav();
				} else {
					this.$refs.container.closeSidenav();
				}
			},

			onUploaderNext (event) {
				// Upload current file
				this.$store.dispatch('resource/upload', event)
					.then(() => this.$refs.uploader.done())
			},

			onUploaderDone (event) {
				this.images.unshift({ src: event.preview });
			},

			onUploaderCancel (event) {
				this.$store.dispatch('resource/cancel');
			}
		}
	}
</script>

<style>
</style>
