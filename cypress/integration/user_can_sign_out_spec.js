describe("Sign out", function(){
	it('allows new user to sign out', function(){
    cy.signup("Albatross", "123@gmail.com", "12345");
    cy.signin('Albatross', '12345');
    cy.contains('Sign Out').click();
    cy.visit('/posts')
    cy.url().should('include', '/sign-in')
	});
});
