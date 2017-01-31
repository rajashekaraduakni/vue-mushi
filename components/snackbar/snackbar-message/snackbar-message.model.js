export default class SnackbarMessage {
	constructor(text = '', type = 'info', timeout = 5000, action = '', callback = function(){}) {
		this.text = text;
		this.type = type;
		this.timeout = timeout;
		this.action = action;
		this.callback = callback;
	}
}
