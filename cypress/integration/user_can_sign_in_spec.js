describe("Sign in", function(){
	it('allows a user to sign in', function(){
		cy.visit('/new');
		cy.get('.signup #new-user').find('[name="username"]').type('Albatross');
		cy.get('.signup #new-user').find('[name="password"]').type('12345');
		cy.contains("Submit").click();
    cy.get('[name="username"]').type('Albatross');
    cy.get('[name="password"]').type('12345');
    cy.contains("submit").click();
    cy.contains("Timeline")
  })
  
  it('does not allow users who havent signed up to sign in', function(){
		cy.visit('/sign-in');
    cy.get('[name="username"]').type('hello');
    cy.get('[name="password"]').type('Idontexist');
    cy.contains("submit").click();
    cy.contains("We could not find those credentials")
	})
})