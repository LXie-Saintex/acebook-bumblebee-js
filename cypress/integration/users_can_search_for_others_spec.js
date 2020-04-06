describe('Search for other users', function(){
	it('can search for user by username', function(){
		cy.visit('/posts');
		cy.get("#search").find('[type=text]').type("Albatross");
		cy.get("#search").submit();
		cy.get('body').contains('User: Albatross');
	})
})
