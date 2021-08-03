/**
 * Adapted from Adam K Dean
 * @see https://dev.to/adamkdean/simple-scss-with-11ty-kmn
 */

const sass = require('sass');
const globImporter = require('node-sass-glob-importer');
const cleanCSS = require('clean-css');
const site = require('../_data/site');
const chalk = require('chalk');
const _ = console.log;

module.exports = class {
	data() {
		return {
			layout: false,
			permalink: '/style.css',
			eleventyExcludeFromCollections: true,
		};
	}

	async render() {
		_(chalk.blue('😃 Compiling CSS'));

		// Compile SCSS
		const { css } = sass.renderSync({
			importer: globImporter(),
			file: './assets/sass/style.scss',
			...(site.sassOptions || {}),
		});

		let compiledCSS = css.toString();

		// Minify?
		if (site?.css?.minify === true || process.env.NODE_ENV === 'production') {
			_(chalk.blue('📦 Minifying CSS'));
			compiledCSS = new cleanCSS().minify(compiledCSS).styles;
		}

		return compiledCSS;
	}
};
