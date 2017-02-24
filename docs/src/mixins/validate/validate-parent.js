export default {
	created () {
		// Subscribes to child's errors-changed event
		this.$bus.on('errors-changed', (errors) => {
			this.errors.clear();

			// Tracks child components errors
			errors.forEach(e => {
				this.errors.add(e.field, e.msg, e.rule, e.scope);
			});
		})
	},
	methods: {
		submit (success, error) {
			// Validates all child components
			this.validate();

			// Callback after error validation is done
			this.$bus.once('errors-changed', () => {
				if (this.errors.errors.length > 0) {
					if (error)
						error(this.errors.errors);
				} else {
					success();
				}
			})
		},
		validate () {
			this.$bus.emit('validate');
		}
	},
	beforeDestroy () {
		this.$bus.off('errors-changed');
	}
}
