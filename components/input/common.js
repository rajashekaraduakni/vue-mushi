export default {
	props: {
		label: {
			type: String,
			default: ''
		},
		value: {
			type: String,
			default: ''
		},
		required: {
			type: Boolean,
			default: false
		},
		maxlength: {
			type: Number | String,
			default: null
		},
		minlength: {
			type: Number | String,
			default: null
		}
	},
	data() {
		return {
			touched: false
		}
	},
	methods: {
		onChange(event) {
			this.$emit('input', event);
			this.$emit('change', event);
		},
		onBlur(event) {
			this.$emit('blur', event);
		},
		onFocus(event) {
			this.$emit('focus', event);
		},
		hasErrors() {
			return (this.required) ? this.isEmpty() || this.hasMinlength() || this.hasMaxlength() : false;
		},
		isEmpty() {
			return this.value.length == 0;
		},
		hasMinlength() {
			return this.value.length < this.minlength && this.minlength > 0;
		},
		hasMaxlength() {
			return this.value.length > this.maxlength && this.maxlength > 0;
		},
		validate() {
			this.touched = true;

			return !this.hasErrors();
		}
	}
}
