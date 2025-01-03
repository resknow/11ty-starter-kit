
class SnapTo extends HTMLElement {

    constructor() {
        super();

        this.currentItem = 0;
        this.content = this.querySelector('[data-content]');
        this.items = this.querySelectorAll('[data-content] > *');
        this.next = this.querySelector('[data-action="next"]');
        this.prev = this.querySelector('[data-action="prev"]');

        this.next.addEventListener('click', this.snapToNext.bind(this));
        this.prev.addEventListener('click', this.snapToPrev.bind(this));

        this.initItems();
    }

    initItems() {
        this.items.forEach((item, index) => {
            item.dataset.key = index;
            item.dataset.current = index === this.currentItem;
        });

        this.watchItems();
    }

    snapTo(index) {
        this.items[index].scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
        });

        // Set current status
        this.items.forEach((item, i) => {
            item.dataset.current = i === index;
        });
    }

    snapToNext() {
        let nextItem = this.currentItem < this.items.length ? this.currentItem + 1 : this.items.length;

        this.snapTo(nextItem);
        this.currentItem = nextItem;
    }

    snapToPrev() {
        let prevItem = this.currentItem > 0 ? this.currentItem - 1 : 0;

        this.snapTo(prevItem);
        this.currentItem = prevItem;
    }

    watchItems() {
        this.content.addEventListener('scroll', this.debounce((event) => {
            this.items.forEach((item, index) => {
                let position = item.getBoundingClientRect();
                if (position.x === 0) {
                    this.currentItem = index;
                }
            })
        }, 250).bind(this));
    }

    debounce(fn, d) {
		let timer;
		return function () {
			let context = this;
			let args = arguments;
			clearTimeout(timer);

			timer = setTimeout(() => {
				fn.apply(context, args);
			}, d);
		};
	};

}

customElements.define('snap-to', SnapTo);