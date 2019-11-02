describe('Details Available', () => {
  it('Commit link takes you to details page', ()=>{
    cy.visit('/commits').wait(500);
    cy.get('tbody>tr').first().click();

    cy.get('.v-card').should('exist');
    cy.get('.title').should('exist');
    cy.get('.v-subheader').contains('All Files Changed');
    cy.get('div[role="list"]').should('have.length.greaterThan', '0');
  })
})
