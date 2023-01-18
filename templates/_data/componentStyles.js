const Fascio = require('fascio');
const glob = require('glob');

const sources = glob.sync('templates/_includes/components/**/*.scss');
const compiledStyles = [];

if (sources.length) {
	sources.forEach((input) => {
		let compiler = Fascio.scss(input).minify();
		compiledStyles.push(compiler.result);
	});
}

module.exports = compiledStyles.join('');
