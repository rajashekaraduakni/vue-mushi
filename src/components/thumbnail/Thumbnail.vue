<template>
	<md-card
		class="mu-thumbnail"
		:class="{
			'is-active': active,
			'is-selected': selected,
		}"
		@click.native="onClick"

	>
		<md-card-media
			class="mu-thumbnail__photo"
			:md-ratio="ratio"
		>
			<md-ink-ripple></md-ink-ripple>

			<!-- The background -->
			<div class="mu-thumbnail__cover">
				<img :src="src" class="mu-thumbnail__background">
			</div>

			<transition name="fade">
				<!-- Overlay -->
				<span
					class="mu-thumbnail__overlay"
					v-if="selected || active"
				>
					<!-- Checked icon -->
					<transition name="scale-fade">
						<span class="mu-thumbnail__check" v-if="active">
							<md-icon class="md-size-3x">check</md-icon>
						</span>
					</transition>
				</span>
			</transition>

			<!-- Slot -->
			<slot></slot>
		</md-card-media>
	</md-card>
</template>

<script>
	export default {
		name: 'mu-thumbnail',
		props: {
			active: {
				type: Boolean,
				default: false
			},
			src: {
				type: String,
				default: 'http://lorempixel.com/400/400/'
			},
			ratio: {
				type: String,
				default: '1:1' // 1:1 or 1/1, 4:3 or 4/3 and 16:9 or 16/9
			},
			selected: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			onClick (event) {
				this.$emit('click', event);
			},
			onUncheck (event) {
				this.$emit('uncheck', event);
			}
		}
	}
</script>

<style lang="sass" scoped>
	.mu-thumbnail{
		cursor: pointer;
		border-radius: 0;
		box-shadow: none;
		flex: 1;
		&__photo{
			overflow: hidden;
			position: relative;
		}
		&__check{
			width: 70px;
			height: 70px;
			border-radius: 70px;
			color: white;
			text-align: center;
			position: absolute;
			top: 50%;
			left: 50%;
			margin-top: -35px;
			margin-left: -35px;
			display: flex;
			z-index: 10;
		}
		&__overlay{
			position: absolute;
			border: 8px solid transparent;
			top: 0px;
			bottom: 0px;
			right: 0px;
			left: 0px;
		}
		&__cover{
			position: absolute;
			top: -50%;
			left: -50%;
			width: 200%;
			height: 200%;
			&__background{
				position: absolute;
				min-width: 50%;
				min-height: 50%;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
		&__spinner{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 5;
		}
		&.is-selected,
		&.is-active{
			.mu-thumbnail{
				//
			}
		}
		&.is-selected{
			.mu-thumbnail{
				&__check{
					//background-color: rgba(black, 0.5);
				}
				&__overlay{
					background: rgba(black, 0.5);
					//border-color: #00b0ff;
				}
			}
		}
		&.is-active{
			.mu-thumbnail{
				&__check{
					//background-color: #00b0ff;
				}
				&__overlay{
					background: rgba(black, 0.5);
					//border-color: #00b0ff;
				}
			}
		}
	}
</style>
