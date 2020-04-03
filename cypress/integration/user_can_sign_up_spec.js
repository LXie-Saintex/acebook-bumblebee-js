describe("Sign up", function(){
	it('allows new user to sign up', function(){
		cy.visit('/new');
		cy.get('.signup #new-user').find('[name="username"]').type('Albatross');
		cy.get('.signup #new-user').find('[name="password"]').type('newpassword');
		cy.get('.signup #new-user').find('[name="email"]').type('123@gmail.com');
		cy.contains("Submit").click();
		cy.get('body').contains("Sign in");
	})
})