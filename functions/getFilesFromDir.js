
const { glob } = require('glob');

module.exports = async (dir) => {
	const paths = await glob(dir);
	return paths.map((path) => {
		return path.replace('./', '/');
	});
};
