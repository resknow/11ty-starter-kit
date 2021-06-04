const nunjucks = require('nunjucks');

/**
 * Component Shortcode
 * Usage: {% component "componentName", { key: value } %}
 *
 * @param {String} name
 * @param {Object} context
 * @returns Rendered Component
 */
module.exports = (name, context = {}) => {
	let template = `./templates/_includes/components/${name}.njk`;
	return nunjucks.render(template, context);
};
