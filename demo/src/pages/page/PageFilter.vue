<template>
	<md-dialog ref="dialog">
		<md-dialog-title>
			Page Filters
		</md-dialog-title>

		<md-dialog-content>
			<md-input-container>
				<label>Category</label>
				<md-select>
					<md-option value="news">News</md-option>
					<md-option value="entertainment">Entertainment</md-option>
					<md-option value="sport">Sport</md-option>
					<md-option value="technology">Technology</md-option>
					<md-option>None</md-option>
				</md-select>
			</md-input-container>

			<md-input-container>
				<label>Order By</label>
				<md-select>
					<md-option value="name">Name</md-option>
					<md-option>None</md-option>
				</md-select>
			</md-input-container>

			<div>
				<md-radio class="md-primary" v-model="direction" id="filter-direction-asc" md-value="ASC">
					Ascendant
				</md-radio>
				<md-radio class="md-primary" v-model="direction" id="filter-direction-desc" md-value="DESC">
					Descendant
				</md-radio>
			</div>

		</md-dialog-content>

		<md-dialog-actions>
			<md-button class="md-primary" @click.native="close">Cancel</md-button>
			<md-button class="md-primary" @click.native="close">Ok</md-button>
		</md-dialog-actions>
	</md-dialog>
</template>

<script>
	export default {
		data () {
			return {
				removed: false,
				direction: "ASC"
			}
		},
		methods: {
			open () {
				this.$refs.dialog.open();
			},
			close () {
				this.$refs.dialog.close();
			}
		}
	}
	</script>

	<style>
	</style>
