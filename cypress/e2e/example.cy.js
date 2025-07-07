describe('Página do Google', () => {
  it('deve abrir o site do Google', () => {
    cy.visit('https://www.google.com');
    cy.title().should('include', 'Google');
  });
});
