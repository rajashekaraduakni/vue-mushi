export default {
	namespaced: true,
	state: {
		timer: false
	},
	actions: {
		upload (context, payload) {
			return new Promise(resolve => {
				let progress = 0;

				context.state.timer = setInterval(() => {
					progress++;

					payload.process({
						lengthComputable: true,
						loaded: progress,
						total: 100
					});

					console.log(progress);
					if (progress >= 100) {
						clearInterval(context.state.timer)
						resolve();
					}

					if (!context.state.timer)
						reject();
				}, 100);
			});
		},

		cancel (context, payload) {
			clearInterval(context.state.timer)
		}
	}
}
