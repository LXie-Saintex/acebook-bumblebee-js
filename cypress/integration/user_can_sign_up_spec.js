describe("Sign up", function(){
	it('allows new user to sign up', function(){
		cy.signup("Albatross", "123@gmail.com", "newpassword");
		cy.contains("Sign in");
	});

	it('does not allow existing users to sign up', function(){
		cy.signup("Albatross", "123@gmail.com", "newpassword");
		cy.signup("Albatross", "123@gmail.com", "newpassword");
		cy.contains("User exists");
	});
});
