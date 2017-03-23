<template>
	<div>
		<span class="md-subheading">Parent Page</span>
		<md-input-container>
			<label>Choose Page</label>
			<md-select>
				<md-option value="news">News</md-option>
				<md-option value="entertainment">Entertainment</md-option>
				<md-option value="sport">Sport</md-option>
				<md-option value="technology">Technology</md-option>
				<md-option>None</md-option>
			</md-select>
		</md-input-container>
	</div>
</template>

<script>
	import { validateChild } from '../../mixins/validate';

	export default {
		mixins: [validateChild]
	}
</script>

<style>
</style>
