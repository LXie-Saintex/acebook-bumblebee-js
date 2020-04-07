describe("Comments", function(){
	it('allows a user to comment posts', function(){
        cy.signup("Albatross", "123@gmail.com", "12345");
        cy.signin("Albatross", "12345");
        cy.contains('New post').click();
        cy.get('#new-post-form').find('[type="text"]').type('Hello, world!');
        cy.get('#new-post-form').submit();
        cy.get('.comment-form').find('[type="text"]').type('great post!')
        cy.get('.comment-form').submit();
        cy.get('body').contains('great post!');
    });
});
