<template>
	<md-whiteframe class="mu-uploader" md-elevation="4" :class="{ 'is-current' : active }">
		<md-whiteframe md-elevation="1">
			<md-toolbar class="md-dense">
				<h2 class="md-title" style="flex: 1">
					Uploading
				</h2>
			</md-toolbar>
		</md-whiteframe>
		<div class="mu-uploader__body">
			<md-list class="md-dense">
				<md-list-item v-for="item in queue" class="mu-uploader__item" :class="{ 'is-processing' : item == current }">
					<md-avatar class="mu-uploader__icon md-avatar-icon">
						<md-icon>attachment</md-icon>
						<md-spinner class="mu-uploader__progress md-accent"
							v-if="item == current"
							:md-size="42"
							:md-stroke="5"
							:md-progress="item.progress"
						>
						</md-spinner>
					</md-avatar>
					<div class="md-list-text-container">
						<span>{{ item.file.name }}</span>
						<span>{{ Math.round(item.file.size / 1000) }}kb</span>
					</div>
					<!-- Item Actions -->
					<md-button @click="onRemove(item)" class="md-icon-button md-list-action">
						<md-icon>delete</md-icon>
					</md-button>
				</md-list-item>
			</md-list>
			<input
				type="file"
				ref="input"
				class="mu-uploader__input"
				@change="onChange"
				multiple
			>
		</div>
	</md-whiteframe>
</template>

<script>
	export default {
		name: 'mu-uploader',
		props: {
			action: {
				type: String,
				default: ''
			},
			size: {
				type: Number,
				default: 10000
			}
		},
		data: () => ({
			current: null,
			active: false,
			queue: []
		}),
		methods: {
			setCurrent (current) {
				this.current = current;
				this.current.status = 'uploading';
			},

			getCurrent () {
				return this.current;
			},

			start () {
				this.$emit('start');
				this.active = true;
				this.next();
			},

			next () {
				if (this.queue.length == 0) {
					return this.complete();
				}

				let form = new FormData();

				// Remove from queue and set current
				this.setCurrent(this.queue[0]);

				// Emits next file
				this.$emit('next', {
					current: this.current,
					process: this.process,
				});

				// Append file to a form data
				form.append('file', this.current.file, this.current.file.name);
			},

			cancel (item) {
				this.current.status = 'canceled';
				this.queue.shift();

				this.$emit('cancel', item);
				this.next();
			},

			process (event) {
				// Increase current progress percent
				if (event.lengthComputable) {
					this.current.progress = event.loaded / event.total * 100;
				}
			},

			done (event) {
				this.current.status = 'done';
				this.queue.shift(); // Remove complete item from queue

				this.$emit('done', this.current);
				this.next();
			},

			complete (event) {
				this.$emit('complete', true)
				this.current = null;
				this.active = false;
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
			},

			onRemove(item) {
				let index = this.queue.indexOf(item);

				if (item == this.current) {
					this.cancel(item);
				} else if (index != -1) {
					this.queue.splice(index, 1);
				}
			}
		}
	}
</script>

<style lang="sass">
	.mu-uploader{
		width: 0px;
		background: white;
		opacity: 0;
		overflow: hidden;
		visibility: hidden;
		transition: all .4s cubic-bezier(.25,.8,.25,1);
		&__item{
			opacity: 0.6;
			&.is-processing{
				opacity: 1;
			}
		}
		&__input{
			display: none;
		}
		&__body{
			height: 170px;
			overflow-y: auto;
		}
		&__icon{
			position: relative;
			overflow: initial !important;
		}
		&__progress{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		&.is-current{
			width: 350px;
			visibility: visible;
			opacity: 1;
		}
		.md-toolbar{
			.md-title{
				font-size: 16px;
			}
		}
		.md-list-text-container{
			span{
				&:first-child{
					font-size: 14px;
				}
			}
		}
	}
</style>
