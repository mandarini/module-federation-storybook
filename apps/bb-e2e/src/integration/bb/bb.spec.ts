describe('bb: Bb component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=bb--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Bb!');
    });
});
