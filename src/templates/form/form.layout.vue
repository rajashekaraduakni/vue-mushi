<template>
	<div class="form">
		<mu-form-header
			:title="title"
			@previous="onPrevious"
			@accept="onAccept"
		>
		</mu-form-header>

		<div class="form__content page-content">
			<md-layout :md-gutter="true">
				<md-layout
					md-flex-small="100"
					md-flex-medium="70"
					md-flex-large="70"
					md-flex-xlarge="80"
					class="form__main"
				>
					<slot name="main"></slot>
				</md-layout>

				<md-layout
					md-flex-small="100"
					md-flex-medium="30"
					md-flex-large="30"
					md-flex-xlarge="20"
					class="form__aside"
				>
					<slot name="aside"></slot>
				</md-layout>
			</md-layout>
		</div>
	</div>
</template>

<script>
	import FormHeaderLayout from './form-header.layout.vue';

	export default {
		props: ['title'],
		mounted() {
			document.title = this.title;
		},
		methods: {
			onPrevious(event) {
				this.$emit('previous');
			},
			onAccept(event) {
				this.$emit('accept');
			}
		},
		components: {
			'mu-form-header': FormHeaderLayout
		}
	};
</script>

<style lang="sass" scoped>
	.form {
		display: flex;
		flex-flow: column wrap;
		flex: 1;
		&__accept{
			z-index: 20;
		}
		&__content{
			padding: 20px;
			display: block;
		}
		&__main{
			flex-flow: column wrap;
		}
		&__aside{
			flex-flow: column wrap;
		}
	}
</style>
