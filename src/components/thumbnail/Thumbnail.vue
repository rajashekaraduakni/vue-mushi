<template>
	<md-card
		class="thumbnail card-ripple"
		:class="{
			'is-active': active,
			'is-checked': checked,
			'is-uploading': uploading
		}"
		@click.native="onClick"

	>
		<md-card-media
			class="thumbnail__photo"
			:md-ratio="ratio"
		>
			<md-ink-ripple></md-ink-ripple>

			<!-- The thumbnail -->
			<img :src="src" class="thumbnail__thumbnail" alt="People">

			<transition name="fade">
				<!-- Overlay -->
				<span
					class="thumbnail__overlay"
					v-if="checked || active"
				>
					<!-- Checked icon -->
					<span class="thumbnail__check">
						<md-icon class="md-size-2x">check</md-icon>
					</span>
				</span>
			</transition>

			<!-- Upload progress bar -->
			<md-spinner
				class="thumbnail__spinner"
				v-if="uploading"
				:md-progress="progress"
				:md-indeterminate="uploading && progress == 0"
				:md-size="75"
				:md-stroke="5"
			>
			</md-spinner>

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
			checked: {
				type: Boolean,
				default: false
			},
			uploading: {
				type: Boolean,
				default: false
			},
			progress: {
				type: Number,
				default: 0
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
	.thumbnail{
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
			transform: translate(-50%, -50%);
			display: flex;
			z-index: 10;
			transition: background-color .15s ease-out;
		}
		&__overlay{
			position: absolute;
			border: 8px solid transparent;
			top: 5px;
			bottom: 5px;
			right: 5px;
			left: 5px;
		}
		&__thumbnail{
			position: absolute;
			width: 100%;
			min-height: 100%;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		&__spinner{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 5;
		}
		&.is-checked,
		&.is-active{
			.thumbnail{
				//
			}
		}
		&.is-checked{
			.thumbnail{
				&__check{
					background-color: rgba(black, 0.5);
				}
			}
		}
		&.is-active{
			.thumbnail{
				&__check{
					background-color: #00b0ff;
				}
				&__overlay{
					background: rgba(black, 0.5);
					//border-color: #00b0ff;
				}
			}
		}
		&.is-uploading{
			.thumbnail{
				&__photo{
					&:before{
						content: "";
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background: rgba(white, 0.7);
						z-index: 1;
					}
				}
			}
		}
	}
</style>
