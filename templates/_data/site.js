module.exports = {
	/**
	 * Site name, useful for page titles
	 */
	name: `11ty Starter`,

	/**
	 * Site URL, we use this in the Sitemap
	 */
	url: `http://localhost:8080`,

	/**
	 * Menus
	 */
	menus: {
		main: [
			{ label: 'Home', href: '/' },
			{ label: 'Grid Layouts', href: '/examples/grid-layouts/' },
			{ label: 'Icons', href: '/examples/icons/' }
		]
	},

	/**
	 * Global stylesheets, added in the <head> of each page
	 *
	 * For page specific stylesheets, use the same keys in
	 * frontmatter.
	 */
	stylesheets: [`/style.css`],

	/**
	 * Global Javascript, added in the <head> of each page
	 * with a defer attribute
	 *
	 * For page specific javascript, use the same keys in
	 * frontmatter.
	 */
	scripts: [`/assets/js/alpine.js`],

	/**
	 * Cookie Consent
	 *
	 * A small banner will appear in the bottom left of the
	 * page letting the user know this site uses cookies
	 * to provide the best experience.
	 *
	 * You can customise the text shown by setting a text property
	 */
	cookieConsent: {
		show: true
	}
};
