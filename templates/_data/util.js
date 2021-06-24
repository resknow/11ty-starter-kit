module.exports = {
	currentYear: new Date().getFullYear(),
	isDemo: process.env.DEMO_MODE || false
};
