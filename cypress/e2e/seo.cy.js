
describe('Page follows SEO best practice', () => {
	it('Does not have noindex tag', () => {
		cy.visit('/');
		cy.get('meta[content*="noindex"]').should('not.exist');
	});

	it('Images have ALT tags', () => {
		cy.visit('/');
		cy.get('img').each((img) => {
			cy.wrap(img).should('have.attr', 'alt');
		});
	});

	if (Cypress.config('hasLinkingData') === true) {
		it('Has JSON Linking Data', () => {
			cy.visit('/');
			cy.get('script[type="application/ld+json"]');
		});
	}

	it('Has an H1 tag', () => {
		// Should only be 1 of these!
		cy.visit('/');
		cy.get('h1').should('have.length', 1);
	});
});
