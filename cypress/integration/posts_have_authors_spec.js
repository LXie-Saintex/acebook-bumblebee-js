describe("post authors", function(){
  it('has author name listed', function(){
    cy.signup("Albatross", "123@gmail.com", "12345");
    cy.signin('Albatross', '12345');
    cy.contains('New post').click();
    cy.get('#new-post-form').find('[type="text"]').type('new, message');
    cy.get('#new-post-form').submit();
    cy.get('li').first().contains('Albatross');
  });
});