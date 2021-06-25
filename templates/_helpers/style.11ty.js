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
const chalk = require('chalk');
const _ = console.log;

module.exports = class {
	data() {
		return {
			layout: false,
			permalink: '/style.css',
			eleventyExcludeFromCollections: true
		};
	}

	async render() {
		_(chalk.blue('😃 Compiling CSS'));

		// Compile SCSS
		const { css } = sass.renderSync({
			importer: globImporter(),
			file: './assets/sass/style.scss',
			...(site.sassOptions || {})
		});

		let compiledCSS = css.toString();

		// Purge CSS
		if (site.purgeCSS === true || process.env.NODE_ENV === 'production') {
			_(chalk.greenBright('🚮 Purging unused CSS'));

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
	}
};
