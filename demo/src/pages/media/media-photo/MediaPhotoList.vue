<template>
	<mu-container ref="container" class="media-list">
		<md-toolbar slot="header" v-if="header">
			<md-button @click.native="openPanelSidenav" class="md-icon-button">
				<md-icon>menu</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Photos</h2>

			<mu-input-expandable>
				<md-input-container md-inline>
					<label>Search</label>
					<md-input ref="input">
					</md-input>
				</md-input-container>
			</mu-input-expandable>

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

		<mu-grid
			slot="body"
			ref="grid"
			:limit="1"
			:images="images"
			@select="onSelect"
		>
		</mu-grid>

		<adm-media-photo-form
			slot="sidenav"
			@close="onSidenavClose"
			@confirm="onSidenavConfirm"
		>
		</adm-media-photo-form>

		<template slot="footer">
			<md-button
				class="md-fab md-mini"
				@click="upload"
			>
				<md-icon>
					add
				</md-icon>
			</md-button>

			<mu-uploader
				ref="uploader"
				@next="onUploadNext"
				@done="onUploadDone"
				@cancel="onUploadCancel"
			>
			</mu-uploader>
		</template>
	</mu-container>
</template>

<script>
	import { mapMutations } from 'vuex';

	export default {
		components: {
			'adm-media-photo-form': require('./MediaPhotoForm').default,
		},
		props: {
			header: {
				type: Boolean,
				default: true
			},
			images: {
				type: Array,
				default: () => []
			}
		},
		data () {
			return {
				view: 'grid',
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

			onSidenavConfirm (event) {
				this.$logger.success('Media edited successfully!');

				if (this.view == 'grid')
					this.$refs.grid.setActive(null);
			},

			onSidenavClose (event) {
				if (this.view == 'grid')
					this.$refs.grid.setActive(null);
			},

			select (index) {
				this.$refs.grid.addSelected(index);
			},

			onSelect (active) {
				this.$refs.container.sidenav(active != null);
			},

			onUploadNext (event) {
				// Upload current file
				this.$store.dispatch('resource/upload', event)
					.then(() => this.$refs.uploader.done())
			},

			onUploadDone (event) {
				this.images.unshift({ src: event.preview });
			},

			onUploadCancel (event) {
				this.$store.dispatch('resource/cancel');
			}
		}
	}
</script>

<style>
</style>
