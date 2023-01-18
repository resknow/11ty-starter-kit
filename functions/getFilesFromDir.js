const globby = require('globby');

module.exports = async (dir) => {
	const paths = await globby(dir);
	return paths.map((path) => {
		return path.replace('./', '/');
	});
};
