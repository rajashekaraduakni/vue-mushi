<template>
	<mu-container class="dashboard">
		<md-toolbar slot="header" class="dashboard__header">
			<md-button @click.native="openSidenav('left')" class="md-icon-button">
				<md-icon>menu</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Dashboard</h2>
		</md-toolbar>

		<div slot="body" class="dashboard__body">
			<md-layout md-gutter="16">
				<md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
					<adm-appointment-widget>
					</adm-appointment-widget>
				</md-layout>

				<md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
					<md-button @click.native="error">Make Error</md-button>
				</md-layout>

				<md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
				</md-layout>
			</md-layout>
		</div>
	</mu-container>
</template>

<script>
	import { mapMutations } from 'vuex';
	import AppointmentWidget from '../appointment/AppointmentWidget';

export default {
	components: {
		'adm-appointment-widget': AppointmentWidget
	},
	methods: {
		...mapMutations({
			openSidenav: 'sidenav/open',
		}),
		error () {
			this.$store.commit('logger/error', {
				text: 'Holy moly, it`s an error',
				timeout: 4000,
				action: 'Dismiss',
				callback: function () {
					console.log('Callback test');
				}
			})
		}
	}
}
</script>

<style lang="sass" scoped>
	.dashboard{
		&__body{
			padding: 20px 16px;
		}
	}
</style>
