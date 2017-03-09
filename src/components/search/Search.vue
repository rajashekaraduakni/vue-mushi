<template>
	<div
		class="search"
		:class="{'is-active': active}"
	>
		<md-button
			class="search__toggle md-icon-button"
			@click.native="onOpen"
		>
			<md-icon>search</md-icon>
		</md-button>

		<transition name="fade">
			<div class="search__wrapper" v-if="active">
				<md-input-container class="search__container" md-inline>
					<label>Search</label>
					<md-input
						ref="input"
						class="search__input"
					>
					</md-input>
				</md-input-container>

				<md-button
					@click.native="onClose"
					class="search__close md-icon-button"
				>
					<md-icon>close</md-icon>
				</md-button>
			</div>
		</transition>
	</div>
</template>

<script>
	// TODO: Maybe we should name this component mu-button-input?
	export default {
		data () {
			return {
				active: false
			}
		},
		methods: {
			setActive (active) {
				this.active = active;
			},
			onOpen () {
				this.setActive(true);
				setTimeout(() => {
					this.$refs.input.$el.focus();
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

<style lang="sass" scoped>
	.search{
		display: flex;
		flex-flow: row;
		transition: flex .4s ease-out;
		flex: 0;
		&__toggle{
			margin: auto 0 !important;
		}
		&__container{
			margin: auto;
			transform: translate(0, -10px);
		}
		&__wrapper{
			display: flex;
			flew-flow: row;
			flex: 1;
		}
		&__input{
			flex: 1;
		}
		&__close{
			margin: auto !important;
		}
		&.is-active{
			flex: 1 0;
		}
	}
</style>
