const axios = require('axios');
const site = require('../templates/_data/site');

module.exports = async (postType, args = {}) => {
	let defaultArgs = {
		per_page: 10,
	};

	args = { ...defaultArgs, ...args };

	/**
	 * Build URL Params
	 * @see https://stackoverflow.com/questions/6566456/how-to-serialize-an-object-into-a-list-of-url-query-parameters/43843090
	 */
	let params = Object.entries(args).map(([key, value]) => {
		return `${key}=${value}`;
	});

	const content = await axios.get(
		`${site.wordpress.baseUri.replace(/\/$/, '')}/${postType}?${params.join(
			'&'
		)}`
	);
	return content.data;
};
