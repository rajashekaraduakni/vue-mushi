export default {
	created () {
		// Subscribes to parent's validate
		this.$bus.on('validate', this.onValidate);

		// Emits event when errors are updated
		this.$watch(() => this.errors.errors, (value) => {
			this.$bus.emit('errors-changed', value);
		});
	},
	methods: {
		onValidate () {
			this.$validator.validateAll()
		}
	},
	beforeDestroy () {
		this.$bus.off('validate', this.onValidate);
	}
}
