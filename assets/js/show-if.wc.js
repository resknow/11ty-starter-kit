class ShowIf extends HTMLElement {
	connectedCallback() {
		this.target = document.querySelector(this.getAttribute('target'));
		this.value = this.getAttribute('value');

		if (this.target) {
			this.target.addEventListener('change', this.toggle.bind(this));
			this.target.addEventListener('input', this.toggle.bind(this));
			this.toggle();
		}
	}

	toggle(event) {
		if (this.target.value == this.value) {
			this.style.display = 'block';
		} else {
			this.style.display = 'none';
		}
	}
}

customElements.get('show-if') || customElements.define('show-if', ShowIf);
