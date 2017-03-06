<template>
	<div class="editor">
		<span class="editor__label md-caption">
			{{ label }}
		</span>
		<div
			class="editor__container"
			ref="container"
		>
		</div>
	</div>
</template>

<script>
	import Quill from 'quill';

	export default {
		data () {
			return {
				quill: null
			}
		},
		props: {
			value: {
				type: Object,
				default: () => {}
			},
			options: {
				type: Object,
				default: () => {
					return {
						debug: 'warn',
						modules: {
							toolbar: [
								['bold', 'italic', 'underline'],
								['link', 'image']
							]
						},
						placeholder: '',
						readOnly: false,
						theme: 'snow',
					}
				}
			},
			label: {
				type: String,
				default: ''
			}
		},
		mounted () {
			let container = this.$refs.container;

			this.quill = new Quill(container, this.options);
			this.quill.on('text-change', this.onChange);

			// FIXME: Hack to set quill default content
			setTimeout(() => { this.quill.setContents(this.value) }, 500);
		},
		methods: {
			onChange (delta, oldDelta, source) {
				this.$emit('change', this.quill.getContents());
				this.$emit('input', this.quill.getContents());
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import "~quill/dist/quill.core.css";
	@import "~quill/dist/quill.snow.css";

	.editor{
		width: 100%;
		display: table;
		margin-bottom: 20px;
		&__label{
			display: block;
			margin-bottom: 10px;
		}
	}
</style>

<style lang="sass">
	.ql-editor{
		min-height: 200px;
	}
</style>
