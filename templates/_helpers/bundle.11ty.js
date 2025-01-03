
const esbuild = require('esbuild');
const glob = require('glob');

module.exports = class {
	data() {
		const files = glob.sync('templates/_includes/components/**/*.js');

		return {
			layout: false,
			permalink: '/bundle.js',
			eleventyExcludeFromCollections: true,
		};
	}

	async render() {
		let output = '';
		let result = await esbuild.build({
			bundle: true,
			minify: true,
			entryPoints: ['assets/js/bundle.js'],
			write: false,
			outdir: 'out',
		});

		for (let out of result.outputFiles) {
			output += out.text;
		}

		return output;
	}
};
