const getWordPressContent = require('../../functions/getWordPressContent');

module.exports = async () => {
	const posts = await getWordPressContent('news_rt', {
		per_page: 99,
	});
	return posts;
};
