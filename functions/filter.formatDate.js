const { format } = require('date-fns');

module.exports = (content) => {
	return format(new Date(Date.parse(content)), 'EEEE Lo MMMM yyyy');
};
