const Fascio = require('fascio');

module.exports = class {
	data() {
		return {
			layout: false,
			permalink: '/style.css',
			eleventyExcludeFromCollections: true,
		};
	}

	render() {
		let compiler = Fascio.scss('assets/sass/style.scss');
		return compiler.result;
	}
};
