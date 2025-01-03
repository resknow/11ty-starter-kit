
if (Cypress.config('hasAnalytics') === true) {
	describe('Analytics is setup', () => {
		it('Has Google Analytics snippet', () => {
			cy.visit('/');
			cy.window().its('ga');
		});
	});
}
