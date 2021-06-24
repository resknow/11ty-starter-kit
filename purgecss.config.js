module.exports = {
	content: [
		'./templates/*.njk',
		'./templates/**/*.njk',
		'./templates/**/**/*.njk',
		'./templates/*.js',
		'./templates/**/*.js',
		'./templates/**/**/*.js',
		'./assets/*.js',
		'./assets/**/*.js'
	],

	/**
	 * Use safelist to preserve classes that may otherwise be purged.
	 */
	safelist: ['postform-*']
};
