describe("Sign in", function(){
	it('allows a user to sign in', function(){
        cy.signup("Albatross", "123@gmail.com", "12345");
        cy.signin('Albatross', '12345');
        cy.contains("Timeline");
    });
  
  it('does not allow users who havent signed up to sign in', function(){
		cy.signin('Albatross', '12345');
        cy.contains("We could not find those credentials");
	});
});