const Fascio = require('fascio');

module.exports = class {
	data() {
		return {
			layout: false,
			permalink: '/bundle.js',
			eleventyExcludeFromCollections: true,
		};
	}

	async render() {
		let compiler = Fascio.js('assets/js/bundle.js');
		return compiler.result;
	}
};
