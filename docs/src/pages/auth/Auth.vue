<template>
	<mu-auth
		:style="{'background-image': 'url(assets/images/mountain-range.jpg)'}"
	>
		<transition name="scale-fade">
			<router-view></router-view>
		</transition>
	</mu-auth>
</template>

<script>
	export default {

	}
</script>

<style>
</style>
