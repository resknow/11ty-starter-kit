/**
 * This stops the demo pages being built if we're
 * not running in demo mode
 */

if (!process.env.DEMO_MODE) {
	module.exports = {
		eleventyComputed: {
			permalink: false
		}
	};
}
