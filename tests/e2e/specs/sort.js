describe('Sort Feature', () => {
  it('Can be sorted by contributor, persists, and be cleared', () => {

    cy.visit('/commits');
    cy.get('.v-select__selections').click()
      .get('div[role="listitem"]').should('be.visible').and('have.length.greaterThan', (3)).first().click();
    //Cypress is running tests before the XHRs finish rendering, causing errors, so a wait is necessary
    cy.wait(500);

    //cy.author_check is a custom command I made because I was repeating the action more than once.
    //Checkout support/comands.js to see it.
    cy.author_check();

    cy.visit('/commits');

    cy.author_check();

    cy.get('.v-input__icon--clear').click().wait(500);
    cy.get('tbody>tr>td').first().should('not.contain', 'johnleider');
  })

});
