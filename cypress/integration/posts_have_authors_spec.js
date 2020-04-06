describe("post authors", function(){
  it('allows a user to sign in', function(){
    cy.signup("Albatross", "123@gmail.com", "12345");
    cy.get('[name="username"]').type('Albatross');
    cy.get('[name="password"]').type('12345');
    cy.contains("submit").click();
    
    cy.contains('New post').click();

    cy.get('#new-post-form').find('[type="text"]').type('new, message');
    cy.get('#new-post-form').submit();

    cy.get('li').first().contains('Albatross');
  });
});