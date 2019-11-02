Cypress.Commands.add('author_check', () => {
  cy.get('.v-select__selections').then(($contributor)=> {
    let $user = $contributor.get(0).innerText;
    cy.get('tbody>tr').each(($row)=> {
      cy.get($row.children().first()).then(($auth)=> {
        expect($auth.get(0).innerText).to.eq($user);
      });
    })
  })
});
