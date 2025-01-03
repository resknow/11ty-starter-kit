
/**
 * Required Meta Tags
 *
 * Checks the head of the document for required
 * meta tags
 */
describe('Page has required meta tags', () => {
	it('Has title', () => {
		cy.visit('/');
		cy.get('title').should('not.be.empty');
	});

	it('Has description', () => {
		cy.visit('/');
		cy.get('meta[name="description"]')
			.should('have.attr', 'content')
			.should('not.be.empty');
	});

	it('Does not have the default decription', () => {
		cy.visit('/');
		cy.get('meta[name="description"]')
			.should('not.have.attr', 'content', 'A starter kit for building websites with Eleventy');
	});

	it('Has correct charset', () => {
		cy.visit('/');
		cy.get('meta[charset="utf-8"]');
	});

	it('Has responsive viewport meta tag', () => {
		cy.visit('/');
		cy.get('meta[name="viewport"]')
			.should('have.attr', 'content')
			.should('eq', 'width=device-width, initial-scale=1');
	});
});

/**
 * Check Other Tags
 *
 * Looks for other essential tags within head
 */
describe('Has other required tags', () => {
	it('Has Favicon', () => {
		cy.visit('/');
		cy.get('link[rel="icon"]')
			.should('have.attr', 'href')
			.should('not.be.empty');
	});
});
