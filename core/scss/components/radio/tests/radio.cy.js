describe('@collab-ui/core', function() {
  it('snapshot of radio', function() {
    cy.visit(`${Cypress.env('BASE_URL')}/radio`)
      .get('.cui-radio')
      .should('be.visible')
      .percySnapshot();
  });
});
