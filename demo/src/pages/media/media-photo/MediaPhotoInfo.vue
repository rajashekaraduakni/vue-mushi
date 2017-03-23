<template>
	<div class="media--info">
		<ul class="media__data">
			<li class="media__field">
				<span class="media__label md-caption">Uploaded at</span>
				<span class="media__value md-body">03 January 2017</span>
			</li>
			<li class="media__field">
				<span class="media__label md-caption">Size</span>
				<span class="media__value md-body">567kb</span>
			</li>
			<li class="media__field">
				<span class="media__label md-caption">Type</span>
				<span class="media__value md-body">image/jpeg</span>
			</li>
			<li class="media__field">
				<span class="media__label md-caption">Dimensions</span>
				<span class="media__value md-body">400 x 400</span>
			</li>
		</ul>
		
		<md-button
			class="md-raised md-primary media__tab"
			@click="onOpen"
		>
			Open in new tab
		</md-button>
	</div>
</template>

<script>
	export default {
		methods: {
			onOpen (event) {
				this.$emit('open', event);
			}
		}
	}
</script>

<style lang="sass" scoped>
	.media--info{
		.media{
			&__data{
				padding-left: 0;
			}
			&__field{
				list-style: none;
				margin-bottom: 20px;
			}
			&__value{
				display: block;
			}
			&__tab{
				margin: 5px 0 10px;
			}
		}
	}
</style>
