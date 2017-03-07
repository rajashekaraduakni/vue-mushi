export default {
	namespaced: true,
	actions: {
		upload (context, payload) {
			return new Promise(resolve => {
				let progress = 0;
				let timer = setInterval(() => {
					progress++;

					payload.progress({
						lengthComputable: true,
						loaded: progress,
						total: 100
					});

					if (progress >= 100) {
						clearInterval(timer);
						resolve()
					}
				}, 100);
			});
		},
	}
}
