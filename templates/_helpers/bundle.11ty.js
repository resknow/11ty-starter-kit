/**
 * Adapted from Adam K Dean
 * @see https://dev.to/adamkdean/simple-scss-with-11ty-kmn
 */

const esbuild = require('esbuild');
const globby = require('globby');
const chalk = require('chalk');
const _ = console.log;

module.exports = class {
	data() {
		return {
			layout: false,
			permalink: '/bundle.js',
			eleventyExcludeFromCollections: true
		};
	}

	async render() {
		_(chalk.blue('🙂 Bundling Javascript'));

		let inputFiles = await globby('./assets/js/bundle/*.js');
		if (inputFiles.length === 0) return;

		let output = [];

		let result = esbuild.buildSync({
			minify: true,
			entryPoints: inputFiles,
			write: false,
			outdir: '<stdout>'
		});

		for (let out of result.outputFiles) {
			output.push(new TextDecoder('utf-8').decode(out.contents));
		}

		return output.join('\n');
	}
};
