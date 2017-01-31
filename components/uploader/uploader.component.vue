<template>
	<div class="uploader">
		<input
			type="file"
			ref="input"
			class="uploader__input"
			@change="onChange"
			multiple
		>
	</div>
</template>

<script>
	export default {
		name: 'mu-uploader',
		props: {
			action: {
				type: String,
				default: ''
			},
			queue: {
				type: Array,
				default: () => []
			},
			size: {
				type: Number,
				default: 10000
			}
		},
		data () {
			return {
				active: null
			}
		},
		methods: {
			setActive (active) {
				this.active = active;
				this.active.status = 'uploading';
			},

			getActive () {
				return this.active;
			},

			start () {
				this.$emit('start');
				this.next();
			},

			next () {
				let form = new FormData();

				if (this.queue.length == 0)
					return;

				// Remove from queue and set active
				this.setActive(this.queue[this.queue.length - 1]);

				// Emits next file
				this.$emit('next', this.active);

				// Append file to a form data
				form.append('file', this.active.file, this.active.file.name);

				// Upload active file
				this.$store.dispatch(this.action, {
					form,
					progress: this.progress
				})
				.then(response => {
					this.done(response);
				})
			},

			progress (event) {
				// Increase active progress percent
				if (event.lengthComputable) {
					this.active.progress = event.loaded / event.total * 100;
				}
			},

			done (event) {
				this.active.status = 'done';
				this.queue.pop(); // Remove complete item from queue

				this.$emit('done', event);

				if (this.queue.length > 0) {
					this.next();
				} else {
					this.complete();
				}
			},

			complete (event) {
				this.$emit('complete', this.active)
				this.active = null;
			},

			select(event) {
				this.$refs.input.click();
			},

			preview (file) {
				let image = new Image(),
					reader = new FileReader(),
					types = ["image/gif", "image/jpeg", "image/png"];

				return new Promise((resolve, reject) => {
					// Check if file is a valid image
					if (types.indexOf(file.type) != -1) {
						reader.onload = (event) => {
							// Set image preview data
							resolve(event.target.result);
						}

						reader.readAsDataURL(file);
					}
				});
			},

			onChange (event) {
				this.$emit('change', event);

				let files = event.target.files || event.dataTransfer.files;

				if (!files.length)
					return;

				for (let i = 0; i < files.length; i++) {
					this.preview(files[i])
					.then(preview => {
						this.queue.push({
							file: files[i],
							status: 'waiting',
							progress: 0,
							preview: preview
						})

						if (this.queue.length == files.length)
							this.start();
					})
				};
			}
		}
	}
</script>

<style lang="sass" scoped>
	.uploader{
		&__input{
			display: none;
		}
	}
</style>
