<template>
	<div
		class="input-expandable"
		:class="{'is-active': active}"
	>
		<md-button
			class="input-expandable__toggle md-icon-button"
			@click.native="onOpen"
		>
			<md-icon>
				{{ icon }}
			</md-icon>
		</md-button>

		<transition name="fade">
			<div class="input-expandable__wrapper" v-if="active">
				<slot></slot>

				<md-button
					@click.native="onClose"
					class="input-expandable__close md-icon-button"
				>
					<md-icon>close</md-icon>
				</md-button>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				active: false
			}
		},
		props: {
			icon: {
				type: String,
				default: 'search'
			}
		},
		methods: {
			setActive (active) {
				this.active = active;
			},
			onOpen () {
				this.setActive(true);
				setTimeout(() => {
					this.$emit('open');
				}, 100);
			},
			onClose () {
				this.setActive(false);
				this.$emit('close');
			}
		}
	}
</script>

<style lang="sass">
	.input-expandable{
		display: flex;
		flex-flow: row;
		transition: flex .4s ease-out;
		flex: 0;
		&__toggle{
			margin: auto 0 !important;
		}
		&__wrapper{
			display: flex;
			flew-flow: row;
			flex: 1;
		}
		&__close{
			margin: auto !important;
		}
		&.is-active{
			flex: 1 0;
		}
		.md-input-container{
			margin: auto;
			transform: translate(0, -10px);
		}
	}
</style>
