/**
 * This stops the demo pages being built if we're
 * not running in demo mode
 */
const frontMatter = {
	eleventyExcludeFromCollections: true
};

if (!process.env.DEMO_MODE) {
	frontMatter.permalink = false;
}

module.exports = {
	eleventyComputed: {
		...frontMatter
	}
};
