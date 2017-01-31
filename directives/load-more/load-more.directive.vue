<script>
	export default {
		inserted (el, bindings) {
			// Scroll listening
			el.addEventListener('scroll', (event) => {
				if (el.scrollHeight >= el.scrollTop - 100) {
					bindings.value.next();
				}
			});
		},
	};
</script>
