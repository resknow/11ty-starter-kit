const Fascio = require('fascio');
const glob = require('glob');

module.exports = class {
	data() {
		return {
			layout: false,
			permalink: '/components.css',
			eleventyExcludeFromCollections: true,
		};
	}

	render() {
		const sources = glob.sync('templates/_includes/components/**/*.scss');
		const compiledStyles = [];

		if (sources.length) {
			sources.forEach((input) => {
				let compiler = Fascio.scss(input).minify();
				compiledStyles.push(compiler.result);
			});
		}

		return `@layer components { ${compiledStyles.join('')} }`;
	}
};
