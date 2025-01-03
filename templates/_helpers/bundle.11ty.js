
const esbuild = require('esbuild');
const glob = require('glob');

module.exports = class {
	data() {
		this.components = glob.sync('templates/_includes/components/**/*.js');

		return {
			layout: false,
			permalink: '/bundle.js',
			eleventyExcludeFromCollections: true,
		};
	}

	async render() {
		let entryPoints = ['assets/js/bundle.js'];

		if (this.components.length) {
			entryPoints.unshift(...this.components);
		}

		let output = '';
		let result = await esbuild.build({
			bundle: true,
			minify: true,
			entryPoints: entryPoints,
			write: false,
			outdir: 'out',
		});

		for (let out of result.outputFiles) {
			output += out.text;
		}

		return output;
	}
};
