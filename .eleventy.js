// Change this to true if you want your browser to open when you run npm run dev
const shouldAutoOpenBrowser = false;
const isDemoMode = process.env.DEMO_MODE || false;

const fs = require('fs');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const iconShortcode = require('./functions/shortcode.icon');

module.exports = (eleventyConfig) => {
	isDemoMode && console.warn(`*** ⚠ Running in demo mode ⚠ ***`);

	// Shortcodes
	eleventyConfig.addShortcode('icon', iconShortcode);

	// Plugins
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(syntaxHighlight);

	// Custom Watch Targets
	eleventyConfig.addWatchTarget('kubas.config.js');

	// Passthrough Files/Directories
	['assets', 'favicon.ico'].forEach((item) => {
		eleventyConfig.addPassthroughCopy(item);
	});

	// Handle 404 locally
	eleventyConfig.setBrowserSyncConfig({
		open: shouldAutoOpenBrowser ? 'local' : false,
		callbacks: {
			ready: (err, browserSync) => {
				const content404 = fs.readFileSync('_site/404.html');

				browserSync.addMiddleware('*', (req, res) => {
					// Provides the 404 content without redirect.
					res.write(content404);
					res.end();
				});
			},
		},
	});

	return {
		dir: {
			input: 'templates',
			layouts: '_layouts',
		},
	};
};
