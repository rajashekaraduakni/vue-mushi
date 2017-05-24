<template>
	<div class="input-toggle">
		<slot>
		</slot>
		<md-button
			class="input-toggle__button md-icon-button"
			@click.native="onChange"
		>
			<md-icon v-if="value">
				{{ lock  }}
			</md-icon>
			<md-icon v-else>
				{{ unlock }}
			</md-icon>
		</md-button>
	</div>
</template>

<script>
	export default {
		props: {
			value: {
				type: Boolean,
				default: false
			},
			lock: {
				type: String,
				default: 'lock_outline'
			},
			unlock: {
				type: String,
				default: 'lock_open'
			}
		},
		methods: {
			onChange (event) {
				if (this.value) {
					this.$emit('input', false);
				} else {
					this.$emit('input', true);
				}
			}
		}
	}
</script>

<style lang="sass" scoped>
	.input-toggle{
		width: 100%;
		position: relative;
		&__button{
			position: absolute;
			right: 0;
			top: 10px;
		}
	}
</style>
