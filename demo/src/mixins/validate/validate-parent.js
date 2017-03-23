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
	data () {
		return {
			errorCount: 0
		}
	},
	methods: {
		submit (success) {
			this.errorCount = 0;

			// Subscribe to child's error-changed event
			this.$bus.on('errors-changed', () => {
				// Increments error count if there are errors
				if (this.errors.errors.length > 0) {
					this.errorCount++;
				}
			})

			// Validates all child components
			this.validate();

			// Check errors count for every child
			// FIXME: Not the best solution
			setTimeout(() => {
				if (this.errorCount == 0) {
					// Callback after error validation is done
					success();
				}

				// Unsubscribes from child's error-changed event
				this.$bus.off('error-changed');
			}, 100);
		},
		validate () {
			this.$bus.emit('validate');
		}
	}
}
