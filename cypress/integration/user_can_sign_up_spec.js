describe("Sign up", function(){
	it('allows new })user to sign up', function(){
		cy.signup("Rita", "yianrita@gmail.com", "1234");
		cy.get('body').contains("Sign in");
	})
