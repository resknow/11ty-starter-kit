/**
 * Usage: <wc-expires start="2021-06-10" end="2021-06-11">...</wc-expires>
 */
class Expires extends HTMLElement {
	connectedCallback() {
		let start = this.getAttribute('start');

		this.start = start ? new Date(start) : new Date();
		this.end = new Date(this.getAttribute('end'));
		this.today = new Date();
		this.display = this.getAttribute('display') || 'block';

		// Set default state, which is hidden
		this.style.display = 'none';

		// Show the message if the start date is past or is today
		if (this.today.valueOf() === this.start.valueOf() || this.today > this.start) {
			this.style.display = this.display;
		}

		// Hide the message if it's expired
		if (this.today.valueOf() === this.end.valueOf() || this.today > this.end) {
			this.style.display = 'none';
		}
	}
}

window.customElements.define('wc-expires', Expires);
