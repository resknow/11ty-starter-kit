/**
 * Adapted from Adam K Dean
 * @see https://dev.to/adamkdean/simple-scss-with-11ty-kmn
 */

const sass = require('sass');
const globImporter = require('node-sass-glob-importer');
const cleanCSS = require('clean-css');
const siteConfig = require('../_data/site');

module.exports = class {
	data() {
		return {
			layout: false,
			permalink: '/style.css',
			eleventyExcludeFromCollections: true
		};
	}

	async render() {
		const { css } = sass.renderSync({
			importer: globImporter(),
			file: './assets/sass/style.scss',
			...(siteConfig.sassOptions || {})
		});

		return css.toString();
		// return new cleanCSS({}).minify(css.toString()).styles;
	}
};
