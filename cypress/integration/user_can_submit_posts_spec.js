describe('Timeline', function() {
  it('can submit posts and view them', function() {
    cy.signup("Albatross", "123@gmail.com", "12345");
    cy.signin('Albatross', '12345');
    cy.contains('New post').click();

    cy.get('#new-post-form').find('[type="text"]').type('Hello, world!');
    cy.get('#new-post-form').submit();

    cy.get('.content').should('contain', 'Hello, world!');
  });

  it('can add dates to posts', function() {
    cy.signup("Albatross", "123@gmail.com", "12345");
    cy.signin('Albatross', '12345');
    cy.contains('New post').click();

    cy.get('#new-post-form').find('[type="text"]').type('new, message');
    cy.get('#new-post-form').submit();
    const todaysDate = Cypress.moment().format('ddd MMM DD YYYY');
    cy.get('.content').first().contains(todaysDate);
  });
});
