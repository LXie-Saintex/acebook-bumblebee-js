describe("Sign up", function(){
	it('allows new user to sign up' function(){
		cy.visit('/home');
		cy.contains("Sign up").click();
		cy.get('#new-user').find('[name="username"]').type('Albatross');
		cy.get('#new-user').find('[name="email"]').type('123@gmail.com');
		cy.contains("Submit").click();
		cy.get('body').contains("You are signed in: Albatross");
	})
})