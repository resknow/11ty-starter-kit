const Image = require('@11ty/eleventy-img');

module.exports = function (src, cls, alt, sizes, widths) {
	let options = {
		widths: widths,
		formats: ['jpeg'],
		outputDir: './_site/img/',
	};

	// generate images, while this is async we don’t wait
	Image(src, options);

	let imageAttributes = {
		class: cls,
		alt,
		sizes,
		loading: 'lazy',
		decoding: 'async',
	};
	// get metadata even if the images are not fully generated yet
	let metadata = Image.statsSync(src, options);
	return Image.generateHTML(metadata, imageAttributes);
};
