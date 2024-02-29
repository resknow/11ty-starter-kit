// Change this to true if you want your browser to open when you run npm run dev
const shouldAutoOpenBrowser = false;

const iconShortcode = require('./functions/shortcode.icon');
const imageShortcode = require('./functions/shortcode.image');
const formatDateFilter = require('./functions/filter.formatDate');
const findCustomElements = require('./functions/findCustomElements');

module.exports = (eleventyConfig) => {
	// Shortcodes
	eleventyConfig.addShortcode('icon', iconShortcode);
	eleventyConfig.addShortcode('image', imageShortcode);

	// Filters
	eleventyConfig.addFilter('date', formatDateFilter);

	// Passthrough Files/Directories
	['assets', 'favicon.ico', '_redirects'].forEach((item) => {
		eleventyConfig.addPassthroughCopy(item);
	});

	// Handle 404 locally
	eleventyConfig.setBrowserSyncConfig({
		open: shouldAutoOpenBrowser ? 'local' : false,
	});

	// Find and inject scripts for custom elements
	eleventyConfig.on('eleventy.after', findCustomElements);

	return {
		dir: {
			input: 'templates',
		},
	};
};
