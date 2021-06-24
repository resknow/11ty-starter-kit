/**
 * Adapted from Adam K Dean
 * @see https://dev.to/adamkdean/simple-scss-with-11ty-kmn
 */

const sass = require('sass');
const globImporter = require('node-sass-glob-importer');
const cleanCSS = require('clean-css');
const { PurgeCSS } = require('purgecss');
const purgecssConfig = require('../../purgecss.config');
const site = require('../_data/site');

module.exports = class {
	data() {
		return {
			layout: false,
			permalink: '/style.css',
			eleventyExcludeFromCollections: true
		};
	}

	async render() {
		// Compile SCSS
		const { css } = sass.renderSync({
			importer: globImporter(),
			file: './assets/sass/style.scss',
			...(site.sassOptions || {})
		});

		let compiledCSS = css.toString();

		// Purge CSS
		if (site.purgeCSS === true || process.env.ENV === 'production') {
			let result = await new PurgeCSS().purge({
				css: [
					{
						raw: compiledCSS
					}
				],
				extractors: [
					{
						extractor: (content) => {
							return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
						},
						extensions: ['css', 'html', 'njk', 'js']
					}
				],
				...purgecssConfig
			});

			let purgedCSS = [];

			result.forEach((item) => {
				purgedCSS.push(item.css);
			});

			return purgedCSS.join('\n');
		}

		return compiledCSS;
		// return new cleanCSS({}).minify(css.toString()).styles;
	}
};
